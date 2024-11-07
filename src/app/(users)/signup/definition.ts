import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  job: z.string().optional(),
  vehicle_license_plate: z.string(),
  parents_name: z.string(),
  parents_phone: z.string(),
  ktp: z.string(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        name?: string[];
        phone?: string[];
        address?: string[];
        job?: string[];
        vehicle_license_plate?: string[];
        parents_name?: string[];
        parents_phone?: string[];
        ktp?: string[];
      };
      message?: string;
    }
  | undefined;
