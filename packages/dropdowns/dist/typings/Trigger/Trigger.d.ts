/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLProps } from 'react';
interface ITriggerProps extends HTMLProps<HTMLElement> {
    /** Used to pass the ref callback to components with non-standard ref props i.e. `innerRef` */
    refKey?: string;
}
/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Dropdown>` component.
 */
declare const Trigger: React.FunctionComponent<ITriggerProps>;
export default Trigger;
