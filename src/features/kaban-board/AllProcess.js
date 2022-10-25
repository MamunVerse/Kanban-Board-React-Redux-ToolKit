import { useSelector, useDispatch } from "react-redux";
import {
  addNew,
} from "./boardSlice";
import { selectAllProcess } from "../board-process/ProcessSlice";
import BoardData from "./BoardData";

function AllProcess() {
    const dispatch = useDispatch();
    const allProcess = useSelector(selectAllProcess);
  return (
    <>
      {allProcess.map((item, i) => (
        <div key={i} className=" bg-gray-100 rounded-md">
          <h3 className="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">
            {item.status}
          </h3>
          <div className="flex-1 min-h-0 overflow-y-auto pt-1 pb-3 px-3">
            <ul className="">
              <BoardData itemStatus={item.status}/>
            </ul>
            <button
              type="button"
              onClick={(e) => dispatch(addNew({ status: item.status }))}
              className="py-2 px-3 text-xs mt-4 text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <i className="fa fa-plus" aria-hidden="true"></i> Add New
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AllProcess