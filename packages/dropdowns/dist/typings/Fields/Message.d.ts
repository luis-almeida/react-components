/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { VALIDATION } from '../styled';
import { HTMLProps } from 'react';
export interface IMessageProps extends HTMLProps<HTMLDivElement> {
    validation?: VALIDATION;
}
/**
 * Accepts all `<div>` props. Must be nested with a `<Field>` component.
 */
declare const Message: import("react").FunctionComponent<IMessageProps>;
export default Message;
