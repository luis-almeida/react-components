/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.list';

export const StyledBreadcrumb = styled.ol.attrs(props => {
  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    style: {
      direction: props.theme.rtl ? 'rtl' : 'ltr',
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontSize: props.theme.fontSizes.md
    }
  };
})`
  ${props => {
    return retrieveComponentStyles(COMPONENT_ID, props);
  }};
`;
