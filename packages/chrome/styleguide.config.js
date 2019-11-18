/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const reactDocgenTypescript = require('react-docgen-typescript');
const reactDocgen = require('react-docgen');

/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */
module.exports = {
  propsParser: reactDocgenTypescript.withCustomConfig(
    path.resolve(__dirname, '../../tsconfig.json'),
    {
      propFilter: props => {
        return props.parent.fileName.indexOf('node_modules') === -1;
      }
    }
  ).parse,
  resolver: reactDocgen.resolver.findAllComponentDefinitions,
  sections: [
    {
      name: '',
      content: '../../packages/chrome/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/chrome/examples/basic.md'
        },
        {
          name: 'Sidebar styling',
          content: '../../packages/chrome/examples/sidebar.md'
        },
        {
          name: 'Header styling',
          content: '../../packages/chrome/examples/headers.md'
        }
      ]
    },
    {
      name: 'Elements',
      sections: [
        {
          name: 'Chrome',
          components: '../../packages/chrome/src/elements/[A-Z]*.{ts,tsx}'
        },
        {
          name: 'Nav',
          components: '../../packages/chrome/src/elements/nav/[A-Z]*.{ts,tsx}'
        },
        {
          name: 'SubNav',
          components: '../../packages/chrome/src/elements/subnav/[A-Z]*.{ts,tsx}'
        },
        {
          name: 'Body',
          components: '../../packages/chrome/src/elements/body/[A-Z]*.{ts,tsx}',
          sections: [
            {
              name: 'Header',
              components: '../../packages/chrome/src/elements/header/[A-Z]*.{ts,tsx}'
            },
            {
              name: 'Footer',
              components: '../../packages/chrome/src/elements/footer/[A-Z]*.{ts,tsx}'
            }
          ]
        }
      ]
    }
  ]
};
