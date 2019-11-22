/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import PropTypes from 'prop-types';
export interface IDatepickerRangeProps {
    locale?: string;
    /**
     * The start date to display
     */
    startValue?: Date;
    /**
     * The end date to display
     */
    endValue?: Date;
    /**
     * Minimum value. Users are still able to manually enter a date below this value.
     */
    minValue?: Date;
    /**
     * Maximum value. Users are still able to manually enter a date above this value.
     */
    maxValue?: Date;
    /**
     * Returns the parsed start and end dates
     */
    onChange?: (values: {
        startValue?: Date;
        endValue?: Date;
    }) => void;
    /**
     * Allows customization of date formatting within input.
     */
    formatDate?: (date: Date) => string;
    /**
     * Override default date parsing
     */
    customParseDate?: (inputValue?: string) => Date;
    /**
     * Show compact styling
     */
    small?: boolean;
}
declare const DatepickerRange: {
    (props: React.PropsWithChildren<IDatepickerRangeProps>): JSX.Element;
    Start: (props: React.PropsWithChildren<React.HTMLProps<HTMLInputElement>>) => React.DetailedReactHTMLElement<{
        value: string | undefined;
        ref: React.MutableRefObject<HTMLInputElement | undefined>;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    }, HTMLElement>;
    End: (props: React.PropsWithChildren<React.HTMLProps<HTMLInputElement>>) => React.DetailedReactHTMLElement<{
        value: string | undefined;
        ref: React.MutableRefObject<HTMLInputElement | undefined>;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    }, HTMLElement>;
    Calendar: React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    propTypes: {
        locale: PropTypes.Requireable<string>;
        startValue: PropTypes.Requireable<Date>;
        endValue: PropTypes.Requireable<Date>;
        minValue: PropTypes.Requireable<Date>;
        maxValue: PropTypes.Requireable<Date>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        formatDate: PropTypes.Requireable<(...args: any[]) => any>;
        customParseDate: PropTypes.Requireable<(...args: any[]) => any>;
        small: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        locale: string;
        small: boolean;
    };
};
export default DatepickerRange;
