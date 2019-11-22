/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLProps } from 'react';
interface ILabelProps extends HTMLProps<HTMLLabelElement> {
    regular?: boolean;
    small?: boolean;
}
/**
 * Accepts all `<label>` props. Must be nested with a `<Field>` component.
 */
declare const Label: React.FunctionComponent<ILabelProps>;
export default Label;
