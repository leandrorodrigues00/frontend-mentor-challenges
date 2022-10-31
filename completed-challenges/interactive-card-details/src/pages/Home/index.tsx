import { FormProvider } from "react-hook-form";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import {
  DateCvcContainer,
  DateInputContainer,
  FormContainer,
  MainContainer,
} from "./style";
import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const { methods }: any = useContext(CardContext);

  const onSubmit = (data: string) => {
    console.log(data);
    navigate("/success");
  };
  methods.watch();
  return (
    <MainContainer>
      <FormProvider {...methods}>
        <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            id="name"
            name="name"
            label="CardHolder name"
            placeholder="e.g. Jane Appleseed"
            regForm={"cardHolderName"}
            maxLength={27}
          />

          <Input
            id="number"
            name="number"
            label="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
            regForm={"cardNumber"}
            maxLength={16}
          />

          <DateCvcContainer>
            <DateInputContainer>
              <Input
                id="date"
                name="date"
                label="EXP. DATE"
                placeholder="MM"
                regForm={"cardExpMonth"}
                maxLength={2}
              />

              <Input
                label="(MM/YY)"
                name="date"
                placeholder="YY"
                regForm={"cardExpYear"}
                maxLength={2}
              />
            </DateInputContainer>

            <Input
              label="CVC"
              id="cvc"
              name="cvc"
              placeholder="e.g. 123"
              regForm={"cardCvc"}
              maxLength={3}
            />
          </DateCvcContainer>

          <Button>Confirm</Button>
        </FormContainer>
      </FormProvider>
    </MainContainer>
  );
}
