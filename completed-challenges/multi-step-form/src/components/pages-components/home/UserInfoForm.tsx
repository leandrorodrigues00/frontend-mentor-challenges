"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/shared-components/Form";
import { NextStepButton } from "@/components/shared-components/NextStepButton";

export function UserInfoForm() {
  const createUserForm = useForm();

  const {} = createUserForm;
  return (
    <FormProvider {...createUserForm}>
      <form className="mt-11 flex-1 grid pb-8">
        <div className="flex flex-col gap-7 ">
          <Form.Field>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Input name="name" id="name" placeholder="e.g. John Doe" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Input
              name="email"
              id="email"
              placeholder="e.g johndoe@gmail.com"
            />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <Form.Input
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </Form.Field>
        </div>

        <NextStepButton href={"/select-plan"} />
      </form>
    </FormProvider>
  );
}
