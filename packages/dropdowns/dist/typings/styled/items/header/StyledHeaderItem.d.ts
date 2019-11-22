/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledHeaderItemProps {
    containsIcon?: boolean;
}
/**
 * Accepts all `<li>` props
 */
export declare const StyledHeaderItem: import("styled-components").StyledComponent<"li", any, import("../StyledItem").IStyledItemProps & IStyledHeaderItemProps, never>;
