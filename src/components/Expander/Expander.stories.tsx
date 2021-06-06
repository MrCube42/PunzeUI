import { Meta } from "@storybook/react";
import React from "react";
import { Expander } from "./Expander";

export const Standard: React.VFC<{}> = () => <Expander />;

export default {
  title: "Components/Expander",
  component: Expander,
} as Meta;
