/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledGrid } from './StyledGrid';

describe('StyledGrid', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledGrid />);

    expect(container.firstChild).toHaveClass('container');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledGrid />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders fluid styling if provided', () => {
    const { container } = render(<StyledGrid isFluid={true} />);

    expect(container.firstChild).toHaveClass('container-fluid');
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledGrid isDebug />);

    expect(container.firstChild).toHaveClass('is-debug');
  });
});
