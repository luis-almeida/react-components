/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { VALIDATION } from '../styled';
interface ISelectProps {
    /** Allows flush spacing of Tab elements */
    tagLayout?: boolean;
    /** Applies flex layout to support MediaFigure components */
    mediaLayout?: boolean;
    small?: boolean;
    /** Removes all borders and styling */
    bare?: boolean;
    disabled?: boolean;
    focused?: boolean;
    /** Applies inset `box-shadow` styling on focus */
    focusInset?: boolean;
    hovered?: boolean;
    /** Displays select open state */
    open?: boolean;
    validation?: VALIDATION;
}
/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
declare const Select: React.FunctionComponent<ISelectProps>;
export default Select;
