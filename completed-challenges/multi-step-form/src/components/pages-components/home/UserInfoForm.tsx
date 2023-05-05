"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/shared-components/Form";
import { NextStepButton } from "@/components/shared-components/NextStepButton";
import { useWizardFormContext } from "@/app/context/WizardFormContext";

const createUserSchema = z.object({
  name: z.string().nonempty({ message: "The name is required" }),
  email: z.string().email().nonempty({ message: "The email is required" }),
  phone: z.string().regex(/^\d{7,}$/i, { message: "At least 7 numbers" }),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export function UserInfoForm() {
  const router = useRouter();
  const { formData, setFormData } = useWizardFormContext();
  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  });

  const { handleSubmit } = createUserForm;

  function handleNextStep(data: CreateUserData) {
    setFormData({
      ...formData,
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    router.push(`/select-plan`);
  }

  return (
    <FormProvider {...createUserForm}>
      <form className="mt-11 flex-1 grid pb-8">
        <div className="flex flex-col gap-7 ">
          <Form.Field>
            <div className="flex justify-between">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.ErrorMessage field="name" />
            </div>
            <Form.Input
              name="name"
              id="name"
              placeholder="e.g. John Doe"
              defaultValue={formData.name}
            />
          </Form.Field>

          <Form.Field>
            <div className="flex justify-between">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.ErrorMessage field="email" />
            </div>
            <Form.Input
              name="email"
              id="email"
              placeholder="e.g johndoe@gmail.com"
              defaultValue={formData.email}
            />
          </Form.Field>

          <Form.Field>
            <div className="flex justify-between">
              <Form.Label htmlFor="phone">Phone Number</Form.Label>
              <Form.ErrorMessage field="phone" />
            </div>
            <Form.Input
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              defaultValue={formData.phone}
            />
          </Form.Field>
        </div>
        <div className="self-end justify-self-end absolute xs:relative bottom-0 right-0 left-0 bg-white w-full p-8 xs:p-0 flex justify-end">
          <NextStepButton
            type="submit"
            onClick={handleSubmit(handleNextStep)}
          />
        </div>
      </form>
    </FormProvider>
  );
}
