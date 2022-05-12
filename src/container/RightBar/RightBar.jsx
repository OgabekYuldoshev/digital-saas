import { Button, Modal, Empty } from "antd";
import React, { useState } from "react";
import classes from "./RightBar.module.scss";
import { CreateForm, CardNote } from "./components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useList from "../../module/note/hooks/useList";
import { useEffect } from "react";

const RightBar = () => {
  const { items, isFetched } = useList();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [columns, setColumns] = useState(items);

  useEffect(() => {
    setColumns(items);
  }, [items, isFetched]);

  const onDropEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (destination.index === source.index) {
      return;
    }
    const data = Array.from(columns);
    const [reorderedItem] = data.splice(source.index, 1);
    data.splice(destination.index, 0, reorderedItem);
    setColumns(data);
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <Button type="primary" block onClick={() => setIsModalVisible(true)}>
          Create Note
        </Button>
        <Modal centered title="Note" visible={isModalVisible} footer={false}>
          <CreateForm onClose={() => setIsModalVisible(false)} />
        </Modal>
      </div>
      <div className={classes.viewer}>
        {columns?.length ? (
          <DragDropContext onDragEnd={(result) => onDropEnd(result)}>
            <Droppable droppableId="droppable">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classes.drag}
                  >
                    {columns?.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item?.id?.toString()}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                className={classes.dragger}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                <CardNote item={item} />
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        ) : (
          <div className={classes.empty}>
            <Empty />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightBar;
