"use server";

import {
  FormState,
  SignUpFormSchema,
} from "./definition";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export async function signup(
  state: FormState,
  formData: FormData
) {
  const validatedFields =
    SignUpFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      job: formData.get('job'),
      vehicle_license_plate: formData.get('vehicle_license_plate'),
      parents_name: formData.get('parents_name'),
      parents_phone: formData.get('parents_phone'),
      ktp: formData.get('ktp'),
    });

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const newUser = await prisma.user.create({
        data: { ...validatedFields.data }
    })

    console.log("Successfully create a new user")
    console.log(newUser)


}
