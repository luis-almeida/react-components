/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLProps } from 'react';
export interface IItemProps extends HTMLProps<HTMLElement> {
    value?: any;
    component?: any;
    active?: boolean;
    focused?: boolean;
    hovered?: boolean;
    disabled?: boolean;
    checked?: boolean;
}
/**
 * Accepts all `<li>` props
 */
declare const Item: React.FunctionComponent<IItemProps>;
export default Item;
