import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/Input";
import {
  ButtonTry,
  Form,
  FormContainer,
  HomeContainer,
  TextContainer,
} from "./styles";

export function Home() {
  const schema = z.object({
    firstName: z.string().min(1, { message: "First name can't be empty" }),
    lastName: z.string().min(1, { message: "Last name can't be empty" }),
    email: z.string().email({ message: "Looks like this is not an email" }),
    password: z
      .string()
      .min(5, { message: "5-character minimum for password" }),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    alert("Form has been sent ! \nStatus Code: 🟢 200 OK");
    methods.reset();
  };

  const hasErrors = Object.values(methods.formState.errors);

  let isSubmitDisable = false;

  if (hasErrors.length > 0) {
    isSubmitDisable = true;
  }

  return (
    <HomeContainer>
      <TextContainer>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </TextContainer>

      <FormContainer>
        <ButtonTry>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </ButtonTry>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input placeholder={"First Name"} regForm={"firstName"} />
            <Input placeholder={"Last Name"} regForm={"lastName"} />
            <Input placeholder={"Email Address"} regForm={"email"} />
            <Input
              placeholder={"Password"}
              regForm={"password"}
              type={"password"}
            />
            <Button disabled={isSubmitDisable}>CLAIM YOUR FREE TRIAL</Button>
            <p>
              By clicking the button, you are agreeing to our
              <a href="#">Terms and Services</a>
            </p>
          </Form>
        </FormProvider>
      </FormContainer>
    </HomeContainer>
  );
}
