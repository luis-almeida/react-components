/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledLabel {
    regular?: boolean;
    small?: boolean;
}
/**
 * Accepts all `<label>` props
 */
export declare const StyledLabel: import("styled-components").StyledComponent<"label", any, IStyledLabel, never>;
