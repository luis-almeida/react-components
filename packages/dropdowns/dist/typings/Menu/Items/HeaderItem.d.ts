/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLProps } from 'react';
interface IHeaderItemProps extends HTMLProps<HTMLElement> {
    active?: boolean;
    focused?: boolean;
    hovered?: boolean;
    disabled?: boolean;
    checked?: boolean;
    /** Applies icon styling */
    containsIcon?: boolean;
}
/**
 * Accepts all `<li>` props
 */
declare const HeaderItem: React.FunctionComponent<IHeaderItemProps>;
/** @component */
export default HeaderItem;
