import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "phosphor-react";
import { Content, Item, Trigger } from "./styles";

export function AccordionHome() {
  return (
    <Accordion.Root type="single" collapsible>
      <Item value="item-1">
        <Accordion.Header>
          <Trigger>
            <p> How many team members can I invite?</p>

            <CaretDown size={22} weight="bold" aria-hidden />
          </Trigger>
        </Accordion.Header>

        <Content>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </Content>
      </Item>

      <Item value="item-2">
        <Accordion.Header>
          <Trigger>
            <p>What is the maximum file upload size?</p>

            <CaretDown size={22} weight="bold" aria-hidden />
          </Trigger>
        </Accordion.Header>

        <Content>
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </Content>
      </Item>

      <Item value="item-3">
        <Accordion.Header>
          <Trigger>
            <p>How do I reset my password?</p>

            <CaretDown size={22} weight="bold" aria-hidden />
          </Trigger>
        </Accordion.Header>

        <Content>
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you. No more than
          2GB. All files in your account must fit your allotted storage space.
        </Content>
      </Item>

      <Item value="item-4">
        <Accordion.Header>
          <Trigger>
            <p>Can I cancel my subscription?</p>

            <CaretDown size={22} weight="bold" aria-hidden />
          </Trigger>
        </Accordion.Header>

        <Content>
          Yes! Send us a message and we'll process your request no questions
          asked.
        </Content>
      </Item>

      <Item value="item-5">
        <Accordion.Header>
          <Trigger>
            <p>Do you provide additional support?</p>

            <CaretDown size={22} weight="bold" aria-hidden />
          </Trigger>
        </Accordion.Header>

        <Content>
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </Content>
      </Item>
    </Accordion.Root>
  );
}
