/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { GARDEN_PLACEMENT } from './utils/garden-placements';
export interface IDatepickerProps {
    /**
     * The selected date to display
     */
    value?: Date;
    /**
     * Returns the parsed date
     */
    onChange?: (date: Date) => void;
    /**
     * Allows customization of date formatting within input.
     */
    formatDate?: (date: Date) => string;
    /**
     * Accepts [all valid Intl locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)
     */
    locale?: string;
    /**
     * Minimum value. Users are still able to manually enter a date below this value.
     */
    minValue?: Date;
    /**
     * Maximum value. Users are still able to manually enter a date above this value.
     */
    maxValue?: Date;
    /**
     * Show compact styling
     */
    small?: boolean;
    /**
     * Override default date parsing. Receives a localized input value and returns a `Date` object.
     */
    customParseDate?: (inputValue: string) => Date;
    /**
     * The ref key used to position the dropdown
     * @default ref
     */
    refKey?: string;
    /**
     * Locale-aware placement for the dropdown element
     * @default bottom-start
     **/
    placement?: GARDEN_PLACEMENT;
    /**
     * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
     */
    popperModifiers?: any;
    /**
     * Show open animations
     * @default true
     */
    animate?: boolean;
    /**
     * Allow dropdown to reposition during browser resize events
     * @default true
     */
    eventsEnabled?: boolean;
    /**
     * The z-index of the dropdown
     * @default 1000
     */
    zIndex?: number;
}
declare const _default: React.FunctionComponent<IDatepickerProps>;
export default _default;
