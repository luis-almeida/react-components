```jsx
const {
  Dropdown,
  Field,
  Label,
  Select,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const {
  Field: FormsField,
  Checkbox,
  Label: CheckboxLabel,
  Hint
} = require('@zendeskgarden/react-forms/src');
const { XL } = require('@zendeskgarden/react-typography/src');

initialState = {
  rowSize: 'default',
  isStriped: false,
  data: [
    {
      subject: 'Where are my shoes?',
      requester: 'John Smith',
      requested: '15 minutes ago',
      type: 'Ticket'
    },
    {
      subject: 'Was charged twice',
      requester: 'Jane Doe',
      requested: '25 minutes ago',
      type: 'Call'
    },
    {
      subject: 'Ticket 1',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    },
    {
      subject: 'Ticket 2',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    },
    {
      subject: 'Ticket 3',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    }
  ]
};

const StyledRow = styled(Layout.Row)`
  margin-bottom: 20px;
`;

<Layout.Grid>
  <StyledRow>
    <Layout.Col md>
      <FormsField>
        <Checkbox
          checked={state.isStriped}
          onChange={e => setState({ isStriped: e.target.checked })}
        >
          <CheckboxLabel>Striped Styling</CheckboxLabel>
          <Hint>Applied to every other Row</Hint>
        </Checkbox>
      </FormsField>
    </Layout.Col>
    <Layout.Col md>
      <Dropdown selectedItem={state.rowSize} onSelect={rowSize => setState({ rowSize })}>
        <Field>
          <Label>Row Size</Label>
          <Select small>{state.rowSize}</Select>
        </Field>
        <Menu small>
          <Item value="small">small</Item>
          <Item value="default">default</Item>
          <Item value="large">large</Item>
        </Menu>
      </Dropdown>
    </Layout.Col>
  </StyledRow>
  <Layout.Row>
    <Layout.Col>
      <Table size={state.rowSize === 'default' ? undefined : state.rowSize}>
        <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
          Your Unsolved Tickets
        </XL>
        <Head>
          <HeaderRow>
            <HeaderCell>Subject</HeaderCell>
            <HeaderCell>Requester</HeaderCell>
            <HeaderCell>Requested</HeaderCell>
            <HeaderCell>Type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {state.data.map((row, index) => (
            <Row key={index} isStriped={state.isStriped && index % 2 === 0}>
              <Cell>{row.subject}</Cell>
              <Cell>{row.requester}</Cell>
              <Cell>{row.requested}</Cell>
              <Cell>{row.type}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </Layout.Col>
  </Layout.Row>
</Layout.Grid>;
```
