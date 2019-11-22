/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export declare enum VALIDATION {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
export interface IStyledMessageProps {
    validation?: VALIDATION;
}
/**
 * Accepts all `<div>` props
 */
export declare const StyledMessage: import("styled-components").StyledComponent<"div", any, IStyledMessageProps, never>;
