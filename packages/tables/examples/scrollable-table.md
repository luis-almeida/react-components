Scrollable tables can be enabled with the `scrollable` prop. This defines the
height of the `<Body>` element.

```jsx
const { XL } = require('@zendeskgarden/react-typography/src');

const rowData = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

const StyledScrollableContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

<>
  <Table>
    <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
      Your Scrollable Tickets
    </XL>
    <Head>
      <HeaderRow>
        <HeaderCell isTruncated>Subject</HeaderCell>
        <HeaderCell isTruncated>Requester</HeaderCell>
        <HeaderCell isTruncated>Requested</HeaderCell>
        <HeaderCell isTruncated>Type</HeaderCell>
      </HeaderRow>
    </Head>
  </Table>
  <StyledScrollableContainer>
    <Table>
      <Body>
        {rowData.map(data => (
          <Row key={data.id}>
            <Cell isTruncated>{data.subject}</Cell>
            <Cell isTruncated>{data.requester}</Cell>
            <Cell isTruncated>{data.requested}</Cell>
            <Cell isTruncated>{data.type}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  </StyledScrollableContainer>
</>;
```
