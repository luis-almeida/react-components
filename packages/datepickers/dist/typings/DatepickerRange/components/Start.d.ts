/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
declare const Start: (props: React.PropsWithChildren<React.HTMLProps<HTMLInputElement>>) => React.DetailedReactHTMLElement<{
    value: string | undefined;
    ref: React.MutableRefObject<HTMLInputElement | undefined>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}, HTMLElement>;
export default Start;
