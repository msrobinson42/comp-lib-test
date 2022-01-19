import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Form from "./Form";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormControl from "./FormControl";
import FormField from "./FormField";
import FormFieldLabel from "./FormFieldLabel";
import {
  FormCheckboxProps,
  FormControlProps,
  FormFieldProps,
  FormInputProps,
  FormProps,
} from "./Form.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";
import FormFile from "./FormFile";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

describe("Form Component", () => {
  const renderComponent = (props: FormProps) => render(<Form {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Form");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Form Input Component", () => {
  const renderComponent = (props: FormInputProps) =>
    render(<FormInput {...props} />);

  it("should have input class", () => {
    const expected = "input";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render size class", () => {
    const expected: FormInputProps["size"] = "is-large";
    const { getByTestId } = renderComponent({ size: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render color class", () => {
    const expected: FormInputProps["color"] = "is-danger";
    const { getByTestId } = renderComponent({ color: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-static class", () => {
    const value: FormInputProps["isStatic"] = true;
    const expected = "is-static";

    const { getByTestId } = renderComponent({ isStatic: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-loading class", () => {
    const value: FormInputProps["isLoading"] = true;
    const expected = "is-loading";

    const { getByTestId } = renderComponent({ isLoading: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-rounded class", () => {
    const value: FormInputProps["isRounded"] = true;
    const expected = "is-rounded";

    const { getByTestId } = renderComponent({ isRounded: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render state class", () => {
    const expected: FormInputProps["state"] = "is-focused";

    const { getByTestId } = renderComponent({ state: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("FormInput", renderComponent);
});

describe("Form Checkbox Component", () => {
  const renderComponent = (props: FormCheckboxProps) =>
    render(<FormCheckbox {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveTextContent(expected);
  });

  it("should have checkbox class correctly", () => {
    const expected = "checkbox";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveClass(expected);
  });

  it("should be checked when clicked", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormCheckbox");

    expect(component).not.toBeChecked();

    fireEvent.click(component);

    expect(component).toBeChecked();
  });

  it("should contain classNames on checkbox when _innerCheckboxClassName is passed", () => {
    const expected = "foo bar-baz";
    const { getByTestId } = renderComponent({
      _innerCheckboxClassName: expected,
    });

    const component = getByTestId("FormCheckbox");

    expect(component).toHaveClass(expected);
  });

  it("should have style on checkbox label when _innerDisabledColor is passed and disabled is true", () => {
    const expected = "red";
    const { getByTestId } = renderComponent({
      disabled: true,
      _innerDisabledColor: expected,
    });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveStyle({
      cursor: "not-allowed",
      color: expected,
    });
  });

  it("should have no style on checkbox label when _innerDisabledColor is passed and disable is false", () => {
    const redHerring = "red";
    const { getByTestId } = renderComponent({
      disabled: false,
      _innerDisabledColor: redHerring,
    });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveStyle({
      cursor: "default",
      color: undefined,
    });
  });

  testBulmaProps("FormCheckboxLabel", renderComponent);
});

describe("Form Control Component", () => {
  const renderComponent = (props: FormControlProps) =>
    render(<FormControl {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("FormControl");

    expect(component).toHaveTextContent(expected);
  });

  it("should have control class", () => {
    const expected = "control";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have one iconAlignment class", () => {
    const expected: FormControlProps["iconAlignment"] = "has-icons-left";
    const { getByTestId } = renderComponent({ iconAlignment: expected });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have multiple iconAlignment class", () => {
    const iconAlignment: FormControlProps["iconAlignment"] = [
      "has-icons-left",
      "has-icons-right",
    ];
    const expected = "has-icons-left has-icons-right";
    const { getByTestId } = renderComponent({ iconAlignment });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have is-fullwidth class", () => {
    const isFullwidth: FormControlProps["isFullwidth"] = true;
    const expected = "is-fullwidth";
    const { getByTestId } = renderComponent({ isFullwidth });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have is-loading class", () => {
    const isLoading: FormControlProps["isLoading"] = true;
    const expected = "is-loading";
    const { getByTestId } = renderComponent({ isLoading });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("FormControl", renderComponent);
});

describe("Form Field Component", () => {
  const renderComponent = (props: FormFieldProps) =>
    render(<FormField {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("FormField");

    expect(component).toHaveTextContent(expected);
  });

  it("should have field class", () => {
    const expected = "field";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormField");

    expect(component).toHaveClass(expected);
  });

  describe("Form Field Kind tests", () => {
    it("should not render kind class", () => {
      const kind: FormFieldProps["kind"] = undefined;
      const redHerringOne = "has-addons";
      const redHerringTwo = "is-grouped";
      const { getByTestId } = renderComponent({ kind });

      const component = getByTestId("FormField");

      expect(component).not.toHaveClass(redHerringOne);
      expect(component).not.toHaveClass(redHerringTwo);
    });

    it("should not render kind class even when passed alignment", () => {
      const kind: FormFieldProps["kind"] = undefined;
      const alignment: FormFieldProps["alignment"] = "right";
      const redHerringOne = "has-addons";
      const redHerringTwo = "is-grouped";
      const { getByTestId } = renderComponent({ kind, alignment });

      const component = getByTestId("FormField");

      expect(component).not.toHaveClass(redHerringOne);
      expect(component).not.toHaveClass(redHerringTwo);
    });

    it("should render has-addons kind class", () => {
      const kind: FormFieldProps["kind"] = "addons";
      const expected = "has-addons";
      const { getByTestId } = renderComponent({ kind });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });

    it("should render has-addons and alignment kind class", () => {
      const kind: FormFieldProps["kind"] = "addons";
      const alignment: FormFieldProps["alignment"] = "right";
      const expected = "has-addons has-addons-right";
      const { getByTestId } = renderComponent({ kind, alignment });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });

    it("should render is-expanded in addition to kind alignment class", () => {
      const kind: FormFieldProps["kind"] = "addons";
      const alignment: FormFieldProps["alignment"] = "right";
      const isExpanded: FormFieldProps["isExpanded"] = true;
      const expected = "has-addons has-addons-right is-expanded";

      const { getByTestId } = renderComponent({ kind, alignment, isExpanded });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });

    it("should render is-grouped kind class", () => {
      const kind: FormFieldProps["kind"] = "grouped";
      const expected = "is-grouped";
      const { getByTestId } = renderComponent({ kind });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });

    it("should render is-grouped and alignment kind class", () => {
      const kind: FormFieldProps["kind"] = "grouped";
      const alignment: FormFieldProps["alignment"] = "centered";
      const expected = "is-grouped is-grouped-centered";
      const { getByTestId } = renderComponent({ kind, alignment });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });

    it("should render is-grouped-multiline in addition to is-grouped and alignment kind class", () => {
      const kind: FormFieldProps["kind"] = "grouped";
      const alignment: FormFieldProps["alignment"] = "centered";
      const groupMultiline: FormFieldProps["groupMultiline"] = true;
      const expected = "is-grouped is-grouped-centered is-grouped-multiline";
      const { getByTestId } = renderComponent({
        kind,
        alignment,
        groupMultiline,
      });

      const component = getByTestId("FormField");

      expect(component).toHaveClass(expected);
    });
  });

  it("should render is-horizontal class", () => {
    const isHorizontal: FormFieldProps["isHorizontal"] = true;
    const expected = "is-horizontal";
    const { getByTestId } = renderComponent({ isHorizontal });

    const component = getByTestId("FormField");

    expect(component).toHaveClass(expected);
  });

  describe("Form Field Size tests", () => {
    // FormField passes the size property down into children via Context.
    const renderComponent = (props: FormFieldProps) =>
      render(
        <FormField {...props}>
          <FormFieldLabel>Test Label</FormFieldLabel>
          <FormControl>
            <FormInput />
            <FormFile />
            <FormSelect />
            <FormTextArea />
          </FormControl>
        </FormField>
      );

    // Children of FormField can override context if they'd like.
    const renderComponentLabelOverriddenIsSmall = (props: FormFieldProps) =>
      render(
        <FormField {...props}>
          <FormFieldLabel size="is-small">Test Label</FormFieldLabel>
          <FormControl>
            <FormInput />
          </FormControl>
        </FormField>
      );

    it("should not have size class itself", () => {
      const redHerring: FormFieldProps["size"] = "is-large";
      const { getByTestId } = renderComponent({ size: redHerring });

      const component = getByTestId("FormField");

      expect(component).not.toHaveClass(redHerring);
    });

    it("should pass size class down into relevant child components", () => {
      const expected: FormFieldProps["size"] = "is-large";
      const { getByTestId } = renderComponent({ size: expected });

      expect(getByTestId("FormFieldLabel")).toHaveClass(expected);
      expect(getByTestId("FormControl")).toHaveClass(expected);
      expect(getByTestId("FormInput")).toHaveClass(expected);
      expect(getByTestId("FormFileDiv")).toHaveClass(expected);
      expect(getByTestId("FormSelectContainer")).toHaveClass(expected);
      expect(getByTestId("FormTextArea")).toHaveClass(expected);
    });

    it("should pass size class down into relevant child components unless overridden", () => {
      const expected: FormFieldProps["size"] = "is-medium";
      const labelSize = "is-small";
      const { getByTestId } = renderComponentLabelOverriddenIsSmall({
        size: expected,
      });

      expect(getByTestId("FormFieldLabel")).toHaveClass(labelSize);
      expect(getByTestId("FormControl")).toHaveClass(expected);
      expect(getByTestId("FormInput")).toHaveClass(expected);
    });
  });

  testBulmaProps("FormField", renderComponent);
});
