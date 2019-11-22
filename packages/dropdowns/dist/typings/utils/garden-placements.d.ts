/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
declare type SHARED_PLACEMENT = 'auto' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
export declare type GARDEN_PLACEMENT = SHARED_PLACEMENT | 'end' | 'end-top' | 'end-bottom' | 'start' | 'start-top' | 'start-bottom';
export declare type POPPER_PLACEMENT = SHARED_PLACEMENT | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
export declare function getPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): POPPER_PLACEMENT;
/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export declare function getRtlPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): POPPER_PLACEMENT;
export {};
