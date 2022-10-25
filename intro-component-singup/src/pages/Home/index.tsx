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
        <Form>
          <Input placeholder={"First Name"} />
          <Input placeholder={"Last Name"} />
          <Input placeholder={"Email Address"} />
          <Input placeholder={"Password"} />
          <Button text={"CLAIM YOUR FREE TRIAL"} />
          <p>
            By clicking the button, you are agreeing to our
            <a href="#">Terms and Services</a>
          </p>
        </Form>
      </FormContainer>
    </HomeContainer>
  );
}
