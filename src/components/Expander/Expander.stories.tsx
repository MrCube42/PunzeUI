import { fas } from "@fortawesome/free-solid-svg-icons";
import { Meta, Story } from "@storybook/react";
import { Expander, ExpanderProps } from "./Expander";

const Template: Story<ExpanderProps & { content: any }> = (args) => (
  <Expander {...args}>{args.content}</Expander>
);

export const Standard = Template.bind({});
Standard.args = { title: "The Expander" } as ExpanderProps;

export const WithIcon = Template.bind({});
WithIcon.args = { ...Standard.args, icon: "exclamation-triangle" };

export const Disabled = Template.bind({});
Disabled.args = { ...Standard.args, disabled: true };

export const WithContent = Template.bind({});
WithContent.args = {
  ...Standard.args,
  title: "Technische Daten",
  icon: "tv",
  content: (
    <ul>
      <li>
        Max. Auflösung:
        <br />
        3840 x 2160px
      </li>
      <li>
        Abmessungen:
        <br />
        1,45m x 86,20cm x 4,12cm
      </li>
      <li>Anzeigegröße: 65 Zoll</li>
    </ul>
  ),
};

export default {
  title: "Components/Expander",
  component: Expander,
  argTypes: {
    title: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    icon: {
      options: [...Object.values(fas).map((icon) => icon.iconName)],
      type: "select",
    },
    expandedChange: { table: { disable: true } },
    content: { table: { disable: true } },
  },
  parameters: {
    order: 999,
    docsOnly: true
  }
} as Meta;
