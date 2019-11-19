/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import classNames from 'classnames';
import scrollbarSize from 'dom-helpers/scrollbarSize';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

// import { StyledRow } from './StyledRow';
// import { StyledBody } from './StyledBody';
import { StyledHead } from './StyledHead';

const COMPONENT_ID = 'tables.table';
const SCROLLBAR_SIZE = scrollbarSize();

type SIZE = 'small' | 'large';

export interface IStyledTableProps {
  size?: SIZE;
  /** Height of the table body. Enables scrolling. */
  scrollable?: string;
}

const retrieveSrollableStyling = (props: IStyledTableProps & ThemeProps<DefaultTheme>) => {
  if (!props.scrollable) {
    return '';
  }

  return css`
    ${StyledHead} {
      ${isRtl(props)
        ? `margin-left: ${SCROLLBAR_SIZE}px !important;`
        : `margin-right: ${SCROLLBAR_SIZE}px !important;`};
    }
  `;
};

export const StyledTable = styled.table.attrs<IStyledTableProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'grid',
  className: classNames(TableStyles['c-table'], {
    // Sizing
    [TableStyles['c-table--sm']]: props.size === 'small',
    [TableStyles['c-table--lg']]: props.size === 'large',

    // RTL
    [TableStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledTableProps>`
  ${props => retrieveSrollableStyling(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
