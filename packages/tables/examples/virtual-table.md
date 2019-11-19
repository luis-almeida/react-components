Virtualized tables can help efficiently render large amounts of data.

This implementation uses the [react-window](https://react-window.now.sh)
library to implement its virtualization.

```jsx
const { FixedSizeList } = require('react-window');
const { XL } = require('@zendeskgarden/react-typography/src');

const rowData = [];

for (let x = 1; x <= 100000; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

/**
 * <Table aria-rowcount={rowData.length} aria-colcount={4}>
    <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
      {rowData.length.toLocaleString()} Virtualized Tickets
    </XL>
    <Head>
      <HeaderRow>
        <HeaderCell>Subject</HeaderCell>
        <HeaderCell>Requester</HeaderCell>
        <HeaderCell>Requested</HeaderCell>
        <HeaderCell>Type</HeaderCell>
      </HeaderRow>
    </Head>
  </Table>
  */

<>
  <FixedSizeList
    height={500}
    itemCount={rowData.length}
    itemSize={35}
    width="100%"
    outerElementType={Table}
    innerElementType={Body}
  >
    {({ index, style }) => (
      <Row key={rowData[index].id} style={style} aria-rowindex={index + 1}>
        <Cell isTruncated>
          [{rowData[index].id}] {rowData[index].subject}
        </Cell>
        <Cell isTruncated>{rowData[index].requester}</Cell>
        <Cell isTruncated>{rowData[index].requested}</Cell>
        <Cell isTruncated>{rowData[index].type}</Cell>
      </Row>
    )}
  </FixedSizeList>
</>;
```
