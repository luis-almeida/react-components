/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export declare const StyledDatepicker: import("styled-components").StyledComponent<"div", any, {
    isSmall: boolean;
}, never>;
export declare const StyledHeader: import("styled-components").StyledComponent<"div", any, {
    isSmall: boolean;
}, never>;
export declare const StyledHeaderPaddle: import("styled-components").StyledComponent<"div", any, {
    isSmall: boolean;
    isHidden?: boolean | undefined;
}, never>;
export declare const StyledHeaderLabel: import("styled-components").StyledComponent<"div", any, {
    isSmall: boolean;
}, never>;
export declare const StyledCalendar: import("styled-components").StyledComponent<"div", any, {
    isSmall?: boolean | undefined;
}, never>;
export declare const StyledRangeCalendar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledCalendarItem: import("styled-components").StyledComponent<"div", any, {
    isSmall?: boolean | undefined;
}, never>;
export declare const StyledDayLabel: import("styled-components").StyledComponent<"div", any, {
    isSmall: boolean;
}, never>;
interface IStyledDayProps {
    isPreviousMonth?: boolean;
    isToday?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
    small: boolean;
}
export declare const StyledDay: import("styled-components").StyledComponent<"div", any, IStyledDayProps, never>;
export declare const StyledHighlight: import("styled-components").StyledComponent<"div", any, {
    isHighlighted: boolean;
    isStart: boolean;
    isEnd: boolean;
}, never>;
export {};
