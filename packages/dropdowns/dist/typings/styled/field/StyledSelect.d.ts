/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { VALIDATION } from '../';
export interface IStyledSelectProps {
    validation?: VALIDATION;
    small?: boolean;
    /** Allows flush spacing of Tab elements */
    tagLayout?: boolean;
    /** Applies flex layout to support MediaFigure components */
    mediaLayout?: boolean;
    /** Removes all borders and styling */
    bare?: boolean;
    /** Applies inset `box-shadow` styling on focus */
    focusInset?: boolean;
    disabled?: boolean;
    focused?: boolean;
    hovered?: boolean;
    /** Displays select open state */
    open?: boolean;
}
export declare const StyledSelect: import("styled-components").StyledComponent<"div", any, IStyledSelectProps, never>;
