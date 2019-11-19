```jsx
const { XL } = require('@zendeskgarden/react-typography/src');

<Table>
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
    <GroupRow>
      <Cell colSpan={4}>
        Status <strong style={{ marginLeft: DEFAULT_THEME.space.xxs }}>Open</strong>
      </Cell>
    </GroupRow>
    <Row>
      <Cell>Where are my shoes?</Cell>
      <Cell>John Smith</Cell>
      <Cell>15 minutes ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Was charged twice</Cell>
      <Cell>Jane Doe</Cell>
      <Cell>25 minutes ago</Cell>
      <Cell>Call</Cell>
    </Row>
    <GroupRow>
      <Cell colSpan={4}>
        Status <strong style={{ marginLeft: DEFAULT_THEME.space.xxs }}>Closed</strong>
      </Cell>
    </GroupRow>
    <Row>
      <Cell>Ticket 1</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Ticket 2</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Ticket 3</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
  </Body>
</Table>;
```
