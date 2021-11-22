import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";
import IconText from "./IconText";
import { IconProps, IconTextProps } from "./Icon.types";

describe("Icon", () => {
  const renderComponent = (props: IconProps) => render(<Icon {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Icon");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Icon Text", () => {
  const renderComponent = (props: IconTextProps) =>
    render(<IconText {...props} />);

  it("should render foo text correctly as span", () => {
    const expected = "some icon text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("IconText");

    expect(component).toHaveTextContent(expected);
  });

  it("should render foo text correctly as div", () => {
    const expected = "some icon text";
    const { getByTestId } = renderComponent({
      children: expected,
      renderAs: "div",
    });

    const component = getByTestId("IconText");

    expect(component).toHaveTextContent(expected);
  });
});
