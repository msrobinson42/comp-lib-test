import React, { forwardRef } from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { FormInputProps, InnerFormInputProps } from "./Form.types";

const FormInput: React.FC<InnerFormInputProps> = ({
  className,
  size,
  color,
  state,
  isStatic = false,
  isLoading = false,
  isRounded = false,
  type,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isStatic ? "is-static" : "",
    isLoading ? "is-loading" : "",
    isRounded ? "is-rounded" : "",
  ]);

  return (
    <input
      data-testid="FormInput"
      type={type ?? "text"}
      className={`input ${classNames}`}
      {...props}
    ></input>
  );
};

const BulmaFormInput: React.FC<
  InnerFormInputProps & { innerRef?: React.Ref<HTMLInputElement> }
> = ({
  className,
  size,
  color,
  state,
  isStatic = false,
  isLoading = false,
  isRounded = false,
  type,
  innerRef,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isStatic ? "is-static" : "",
    isLoading ? "is-loading" : "",
    isRounded ? "is-rounded" : "",
  ]);

  return (
    <input
      data-testid="FormInput"
      type={type ?? "text"}
      className={`input ${classNames}`}
      ref={innerRef}
      {...props}
    ></input>
  );
};

const WrappedBulmaFormInput = withBulmaProps(BulmaFormInput);

export const BulmaFormInputWithRef = forwardRef<
  HTMLInputElement,
  Parameters<typeof WrappedBulmaFormInput>["0"]
>((props, ref) => {
  return <WrappedBulmaFormInput {...props} innerRef={ref} />;
});

export default withBulmaProps(FormInput);
