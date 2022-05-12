import { get } from "lodash";
import { STATUS } from "./constants"

export const Tasks = (items) => {
  return {
    TO_DO: {
      name: STATUS.TO_DO,
      items: items.filter(item => item?.status === STATUS.TO_DO).map(item => GetTasks(item)) || []
    },
    DOING: {
      name: STATUS.DOING,
      items: items.filter(item => item?.status === STATUS.DOING).map(item => GetTasks(item)) || []
    },
    WAITING: {
      name: STATUS.WAITING,
      items: items.filter(item => item?.status === STATUS.WAITING).map(item => GetTasks(item)) || []
    },
    DONE: {
      name: STATUS.DONE,
      items: items.filter(item => item?.status === STATUS.DONE).map(item => GetTasks(item)) || []
    },
  };
};


const GetTasks = (item) => {
  return {
    created_at: get(item, "created_at") || '',
    deadline: get(item, "deadline") || '',
    description: get(item, "description") || '',
    id: get(item, "id") || '',
    pinned_to: get(item, "pinned_to") || '',
    status: get(item, "status") || ''
  }
}