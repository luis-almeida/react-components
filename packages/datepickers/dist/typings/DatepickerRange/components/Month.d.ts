/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { DatepickerRangeAction } from '../utils/datepicker-range-reducer';
declare const Month: React.FunctionComponent<{
    locale?: string;
    displayDate: Date;
    small?: boolean;
    isPreviousHidden?: boolean;
    isNextHidden?: boolean;
    dispatch: React.Dispatch<DatepickerRangeAction>;
    minValue?: Date;
    maxValue?: Date;
    startValue?: Date;
    endValue?: Date;
    onChange?: (values: {
        startValue?: Date;
        endValue?: Date;
    }) => void;
    hoverDate?: Date;
}>;
export default Month;
