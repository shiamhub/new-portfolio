"use client"

import * as z from "zod"

export const ContactSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
})

export type ContactSchemaType = z.infer<typeof ContactSchema>