import classes from "./TasksPage.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { v4 as uuid } from "uuid"
import { useState } from "react";

const columnsBackend =
{
  [uuid()]: {
    name: 'ToDo',
    items: [
      {
        id: uuid(),
        content: 'FirstTask'
      },
      {
        id: uuid(),
        content: 'SecondTask'
      }
    ]
  },
  [uuid()]: {
    name: 'inProgress',
    items: [
      {
        id: uuid(),
        content: 'Ogabek'
      },
      {
        id: uuid(),
        content: 'Test'
      }
    ]
  }
}


const Darshboard = () => {
  const [columns, setColumns] = useState(columnsBackend)

  const onDropEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column?.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }
  }


  return <div className={classes.wrapper}>
    <DragDropContext onDragEnd={(result) => onDropEnd(result, columns, setColumns)}>
      {
        Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classes.drag}
                  >
                    <h4>{column.name}</h4>
                    {
                      column?.items?.map((item, index) => {
                        return (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => {
                              return (
                                <div
                                  className={classes.dragger}
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                >
                                  {item.content}
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })
                    }
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          )
        })
      }
    </DragDropContext>
  </div>;
};

export default Darshboard;
