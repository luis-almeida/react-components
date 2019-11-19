TODO: address style changes. Possibly redo whole example to align with new API

This is an example of a draggable Table using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

This example includes:

- Drag-and-drop functionality
- Uses the `Grip` icon from `@zendeskgarden/svg-icons`
- Accessible ordering with the `Space/Up/Down` keys

```jsx
const { DragDropContext, Droppable, Draggable } = require('react-beautiful-dnd');
const GripIcon = require('@zendeskgarden/svg-icons/src/12/grip.svg').default;
const { XL } = require('@zendeskgarden/react-typography/src');

const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

// const DraggableCell = styled(Cell)`
//   ${props =>
//     props.isDragging
//       ? `
//     // display: inline-block !important;
//   `
//       : ''};
// `;

const DraggableCell = ({ isDragging, ...props }) => {
  const cellRef = React.useRef();

  React.useEffect(() => {
    if (isDragging) {
      const { width, height } = cellRef.current.getBoundingClientRect();
      console.log(width, height);
      cellRef.current.style.width = `${width}px`;
      cellRef.current.style.height = `${height}px`;
      // console.log(isDragging, width, height);
    } else {
      console.log('out');
      cellRef.current.style.width = '';
      cellRef.current.style.height = '';
    }
  }, [isDragging]);

  return <Cell ref={cellRef} {...props} />;
};

const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class DraggableExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);

    this.setState(
      {
        items
      },
      () => {
        document.getElementById(result.draggableId).focus();
      }
    );
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Table>
          <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
            Your Unsolved Tickets
          </XL>
          <Head>
            <HeaderRow>
              <HeaderCell isMinimum />
              <HeaderCell>Subject</HeaderCell>
              <HeaderCell>Requester</HeaderCell>
              <HeaderCell>Requested</HeaderCell>
              <HeaderCell>Type</HeaderCell>
            </HeaderRow>
          </Head>
          <Droppable droppableId="droppable">
            {(provided, droppableSnapshot) => {
              return (
                <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <DraggableRow
                          ref={provided.innerRef}
                          isDragging={snapshot.isDragging}
                          isDraggingOver={droppableSnapshot.isDraggingOver}
                          isHovered={snapshot.isDragging}
                          isFocused={
                            droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                          }
                          {...provided.draggableProps.style}
                          {...provided.draggableProps}
                        >
                          <DraggableCell isMinimum isDragging={snapshot.isDragging}>
                            <DraggableContainer id={item.id} {...provided.dragHandleProps}>
                              <GripIcon />
                            </DraggableContainer>
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>John Smith</DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>Ticket</DraggableCell>
                        </DraggableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Body>
              );
            }}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}
<DraggableExample />;
```
