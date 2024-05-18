import * as z from 'zod'

// regex for numbers in a string
const numbersRegex = /[0-9]+/g

//regex for special characters in a string
const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g

//regex for lowercase letters in a string
const lowercaseRegex = /[a-z]+/g

//regex for uppercase letters in a string
const uppercaseRegex = /[A-Z]+/g

export const signUpSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  user_id: z.string().min(1, { message: 'User ID is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  profile_type: z.string().min(1, { message: 'Profile type is required' }),
  password: z.string().refine(
    password => {
      console.log(
        password,
        password.length >= 6,
        numbersRegex.test(password),
        specialCharactersRegex.test(password),
        lowercaseRegex.test(password),
        uppercaseRegex.test(password)
      )
      return (
        password.length >= 6 &&
        numbersRegex.test(password) &&
        specialCharactersRegex.test(password) &&
        lowercaseRegex.test(password) &&
        uppercaseRegex.test(password)
      )
    },
    {
      message: 'Password must match the below criteria'
    }
  ),
  accept_terms: z.boolean().refine(accept => accept === true, {
    message: 'Please accept the terms and conditions'
  })
})

export type SignUpSchemaType = z.infer<typeof signUpSchema>
