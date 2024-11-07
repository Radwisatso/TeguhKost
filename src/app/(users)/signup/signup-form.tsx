import { useFormStatus } from "react-dom";
import { signup } from "./action";
import { useActionState } from "react";

export function SignUpForm() {
  const [state, action] = useActionState(
    signup,
    undefined
  );
  return (
    <form action={action}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
        />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="phone"
        />
      </div>
      <div>
        <label htmlFor="phone">address</label>
        <textarea
          name="address"
          id="address"
          placeholder="address"
        ></textarea>
      </div>
      <div>
        <label htmlFor="job">job</label>
        <input
          id="job"
          name="job"
          type="text"
          placeholder="job"
        />
      </div>
      <div>
        <label htmlFor="vehicle_license_plate">
          vehicle_license_plate
        </label>
        <input
          id="vehicle_license_plate"
          name="vehicle_license_plate"
          type="text"
          placeholder="vehicle_license_plate"
        />
      </div>
      <div>
        <label htmlFor="parents_name">
          parents_name
        </label>
        <input
          id="parents_name"
          name="parents_name"
          type="text"
          placeholder="parents_name"
        />
      </div>
      <div>
        <label htmlFor="parents_phone">
          parents_phone
        </label>
        <input
          id="parents_phone"
          name="parents_phone"
          type="text"
          placeholder="parents_phone"
        />
      </div>
      <div>
        <div>
          <label htmlFor="ktp">ktp</label>
          <input
            id="ktp"
            name="ktp"
            type="text"
            placeholder="ktp"
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
    const { pending } = useFormStatus()
   
    return (
      <button disabled={pending} type="submit">
        Sign Up
      </button>
    )
  }
