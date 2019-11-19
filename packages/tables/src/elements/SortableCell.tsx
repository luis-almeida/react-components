/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderCell, StyledSortableButton, IStyledSortableButtonProps } from '../styled';

/**
 * Accepts all `<button>` props
 */
export const SortableCell = React.forwardRef<
  HTMLButtonElement,
  IStyledSortableButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ isMinimum, isTruncated, sort, cellProps, width, ...otherProps }, ref) => {
  let ariaSortValue = 'none';

  if (sort === 'asc') {
    ariaSortValue = 'ascending';
  } else if (sort === 'desc') {
    ariaSortValue = 'descending';
  }

  return (
    <StyledHeaderCell
      isMinimum={isMinimum}
      isTruncated={isTruncated}
      aria-sort={ariaSortValue}
      width={width}
      {...cellProps}
    >
      <StyledSortableButton sort={sort} ref={ref} {...otherProps} />
    </StyledHeaderCell>
  );
});

SortableCell.propTypes = {
  sort: PropTypes.oneOf(['asc', 'desc']),
  isFocused: PropTypes.bool,
  isActive: PropTypes.bool,
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  cellProps: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
