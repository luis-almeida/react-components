/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLProps } from 'react';
export interface IStyledInputProps extends HTMLProps<HTMLInputElement> {
    isHidden?: boolean;
}
export declare const StyledInput: import("react").FunctionComponent<IStyledInputProps>;
