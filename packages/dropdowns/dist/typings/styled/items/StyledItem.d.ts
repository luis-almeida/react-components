/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledItemProps {
    active?: boolean;
    focused?: boolean;
    hovered?: boolean;
    disabled?: boolean;
    checked?: boolean;
}
/**
 * Accepts all `<li>` props
 */
export declare const StyledItem: import("styled-components").StyledComponent<"li", any, IStyledItemProps, never>;
