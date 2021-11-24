import React from "react";
import { render } from "@testing-library/react";

import Image from "./Image";
import { ImageProps } from "./Image.types";

describe("Test Component", () => {
  const renderComponent = (props: ImageProps) => render(<Image {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      dimension: "is-128x128",
    });

    const component = getByTestId("Image");

    expect(component).toHaveTextContent(expected);
  });
});