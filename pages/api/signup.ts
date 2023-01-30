import cookie from 'cookie'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  const salt = bcrypt.genSaltSync()

  const { email, password } = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (error) {
    res.status(401).json({ error: 'Something went wrong' })
    return
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, time: Date.now() },
    'hello',
    {
      expiresIn: '8h',
    }
  )

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('trx-token', token, {
      // httpOnly: true,
      // secure: process.env.NODE_ENV !== 'development',
      sameSite: 'lax',
      maxAge: 8 * 60 * 60,
      path: '/',
    })
  )

  res.status(200).json({ user })
}
