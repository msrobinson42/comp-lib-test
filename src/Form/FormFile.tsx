import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormFileProps } from "./Form.types";

const FormFile: React.FC<InnerFormFileProps> = React.forwardRef<
  HTMLInputElement,
  InnerFormFileProps
>(
  (
    {
      children,
      className,
      fileName,
      fileLabel,
      fileIcon,
      color,
      size,
      alignment,
      hasName = false,
      isFullwidth = false,
      isBoxed = false,
      ...props
    },
    ref
  ) => {
    const context = useFormFieldContext();
    const classNames = foldClassNames([
      className ?? "",
      color ?? "",
      size ?? context.size ?? "",
      alignment ?? "",
      hasName ? "has-name" : "",
      isFullwidth ? "is-fullwidth" : "",
      isBoxed ? "is-boxed" : "",
    ]);

    return (
      <div data-testid="FormFileDiv" className={`file ${classNames}`}>
        <label data-testid="FormFileLabel" className={`file-label`}>
          <input
            data-testid="FormFileInput"
            className={`file-input`}
            type="file"
            ref={ref}
            {...props}
          />
          <span data-testid="FormFileCta" className="file-cta">
            {fileIcon ?? children}
            <span data-testid="FormFileLabelDescription" className="file-label">
              {fileLabel ?? "Choose a file..."}
            </span>
          </span>
          {fileName !== undefined && (
            <span data-testid="FormFileFileName" className="file-name">
              {fileName}
            </span>
          )}
        </label>
      </div>
    );
  }
);

export const FormFileWithoutBulmaProps = FormFile;

export default withBulmaProps(FormFile);
