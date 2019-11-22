/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { MutableRefObject } from 'react';
import { IDatepickerRangeState, DatepickerRangeAction } from './datepicker-range-reducer';
export interface IDatepickerRangeContext {
    state: IDatepickerRangeState;
    dispatch: React.Dispatch<DatepickerRangeAction>;
    locale?: string;
    small?: boolean;
    minValue?: Date;
    maxValue?: Date;
    startValue?: Date;
    endValue?: Date;
    onChange?: (values: {
        startValue?: Date;
        endValue?: Date;
    }) => void;
    startInputRef: MutableRefObject<HTMLInputElement | undefined>;
    endInputRef: MutableRefObject<HTMLInputElement | undefined>;
}
export declare const DatepickerRangeContext: import("react").Context<IDatepickerRangeContext | undefined>;
/**
 * Retrieve Dropdown component context
 */
declare const useDatepickerContext: () => IDatepickerRangeContext;
export default useDatepickerContext;
