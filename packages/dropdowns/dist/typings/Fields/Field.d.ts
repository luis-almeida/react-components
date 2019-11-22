/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLProps } from 'react';
export interface IFieldContext {
    isLabelHovered: boolean;
    setIsLabelHovered: (isHovered: boolean) => void;
}
export declare const FieldContext: React.Context<IFieldContext | undefined>;
interface IFieldProps extends HTMLProps<HTMLDivElement> {
    inline?: boolean;
}
/**
 * Accepts all `<div>` props
 */
declare const Field: React.FunctionComponent<IFieldProps>;
export default Field;
