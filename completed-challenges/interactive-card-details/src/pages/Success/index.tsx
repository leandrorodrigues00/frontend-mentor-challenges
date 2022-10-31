import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import completeIcons from "../../assets/images/icon-complete.svg";
import { Button } from "../../components/Form/Button";
import { CardContext } from "../../contexts/CardContext";
import {
  SuccessContainer,
  ThanksCardContainer,
  ThanksTextContainer,
} from "./style";

export function Success() {
  const navigate = useNavigate();
  const { methods }: any = useContext(CardContext);

  function handleSuccessRouting() {
    navigate("/");
    methods.reset();
  }

  return (
    <SuccessContainer>
      <ThanksCardContainer>
        <div>
          <img src={completeIcons} alt="" />
        </div>

        <ThanksTextContainer>
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
        </ThanksTextContainer>

        <Button onClick={handleSuccessRouting}>Continue</Button>
      </ThanksCardContainer>
    </SuccessContainer>
  );
}
