import * as z from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z.string().min(1, { message: 'Password is required' })
})

export type SignInSchemaType = z.infer<typeof signInSchema>
