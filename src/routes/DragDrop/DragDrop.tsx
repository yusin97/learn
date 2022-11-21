import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./drag-drop-atoms";
import Board from "./components/Board";


const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;


function DragDrop() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}: DropResult) => {
        if (!destination) return;
        // setToDos((oldToDos) => {
        //     const toDosCopy = [...oldToDos];
        //     // 1) Delete item on source.index
        //     toDosCopy.splice(source.index, 1);
        //     // 2) Put back the item on the destination.index
        //     toDosCopy.splice(destination?.index, 0, draggableId);
        //     return toDosCopy;
        // });
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
                        ))}
                </Boards>
            </Wrapper>

        </DragDropContext>
    )
}

export default DragDrop