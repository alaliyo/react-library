import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 30px 10px 20px 10px;
  background-color: ${p => p.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: ${p => p.theme.cardColor};
  margin-bottom: 5px;
`;

const toDos = ["a", "b", "c", "d", "e", "f"]

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => 
              <Board ref={provided.innerRef}{...provided.droppableProps}>
                {toDos.map((toDo, i) => (
                  <Draggable key={i} draggableId={toDo} index={i}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <span {...provided.dragHandleProps}>⚙</span>
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            } 
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
