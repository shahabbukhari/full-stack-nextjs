import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: { email: String; password: String }
) => {
  return fetcher(`/${mode}`, body)
}
