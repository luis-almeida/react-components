/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { CSSProperties, HTMLProps, MutableRefObject } from 'react';
import { Modifiers } from 'popper.js';
import { GARDEN_PLACEMENT } from '../utils/garden-placements';
export interface IMenuContext {
    itemIndexRef: MutableRefObject<number>;
}
export declare const MenuContext: React.Context<IMenuContext | undefined>;
interface IMenuProps extends HTMLProps<HTMLUListElement> {
    popperModifiers?: Modifiers;
    eventsEnabled?: boolean;
    zIndex?: number;
    style?: CSSProperties;
    /**
     * These placements differ from the default naming of Popper.JS placements to help
     * assist with RTL layouts.
     **/
    placement?: GARDEN_PLACEMENT;
    animate?: boolean;
    small?: boolean;
    hidden?: boolean;
    arrow?: boolean;
    maxHeight?: string;
}
declare const _default: React.FunctionComponent<IMenuProps>;
/** @component */
export default _default;
