/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ControllerStateAndHelpers, StateChangeOptions } from 'downshift';
export declare const REMOVE_ITEM_STATE_TYPE = "REMOVE_ITEM";
export declare const TAB_SELECT_ITEM_STATE_TYPE = "TAB_ITEM";
export interface IDropdownContext {
    itemIndexRef: React.MutableRefObject<number>;
    previousItemRef: React.MutableRefObject<any>;
    previousIndexRef: React.MutableRefObject<any>;
    nextItemsHashRef: React.MutableRefObject<object>;
    popperReferenceElementRef: React.MutableRefObject<any>;
    selectedItems?: any[];
    downshift: ControllerStateAndHelpers<any>;
    containsMultiselectRef: React.MutableRefObject<boolean>;
}
export declare const DropdownContext: React.Context<IDropdownContext | undefined>;
export interface IDropdownProps {
    isOpen?: boolean;
    selectedItem?: any;
    selectedItems?: any[];
    highlightedIndex?: number;
    inputValue?: string;
    onSelect?: (selectedItem: any | null, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
    onStateChange?: (options: StateChangeOptions<any>, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
    onInputValueChange?: (inputValue: string, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
    downshiftProps?: object;
}
declare const _default: React.FunctionComponent<IDropdownProps>;
export default _default;
