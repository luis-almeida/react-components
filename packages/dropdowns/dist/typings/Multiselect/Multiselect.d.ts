/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { VALIDATION } from '../styled';
interface IMultiselectProps {
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
    placeholder?: string;
    validation?: VALIDATION;
    /** Number of items to show in the collapsed state. Default of 4. */
    maxItems?: number;
    renderShowMore?: (index: number) => string;
    renderItem: (options: {
        value: any;
        removeValue: () => void;
    }) => React.ReactElement;
    inputRef?: React.Ref<HTMLInputElement>;
}
declare const _default: React.FunctionComponent<IMultiselectProps>;
export default _default;
