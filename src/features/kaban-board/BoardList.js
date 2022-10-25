import { useSelector, useDispatch } from "react-redux";
import {
  selectAllBoards,
  changeStatus,
  addNew,
  changeBoardData,
  removeBoard,
} from "./boardSlice";
import { selectAllProcess } from "../board-process/ProcessSlice";

function BoardList() {
  const dispatch = useDispatch();
  const allData = useSelector(selectAllBoards);
  const allProcess = useSelector(selectAllProcess);

  return (
    <>
      <div className="container mx-auto">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProcess.map((item, i) => (
            <div key={i} className=" bg-gray-100 rounded-md">
              <h3 className="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">
                {item.status}
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto pt-1 pb-3 px-3">
                <ul className="">
                  {allData.map((board, index) =>
                    item.status === board.status ? (
                      <li className="mt-3 relative" key={index}>
                        <span
                          onClick={(e) =>
                            dispatch(
                              removeBoard({
                                id: board.id
                              })
                            )
                          }
                          className="text-xs absolute top-1 cursor-pointer right-1 h-5 w-5 text-white bg-red-500 rounded-full leading-5 text-center lh"
                        >
                          <i className="fa fa-close " aria-hidden="true"></i>
                        </span>
                        <div className="block p-5 bg-white rounded-md shadow">
                          <div className="single-box">
                            <div className="status">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Status :
                              </label>
                              <select
                                id="board-status"
                                defaultValue={board.status}
                                onChange={(e) =>
                                  dispatch(
                                    changeStatus({
                                      id: board.id,
                                      name: e.target.value,
                                    })
                                  )
                                }
                                className="w-full p-2.5 marker:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              >
                                <option default>Select Status</option>
                                <option value="Issue">Issue</option>
                                <option value="Working On">Working On</option>
                                <option value="For Review">For Review</option>
                                <option value="Done">Done</option>
                              </select>
                            </div>
                            <div className="data mt-3">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Data :
                              </label>
                              <textarea
                                rows="4"
                                defaultValue={board.data}
                                onChange={(e) =>
                                  dispatch(
                                    changeBoardData({
                                      id: board.id,
                                      value: e.target.value,
                                    })
                                  )
                                }
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write Here..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      ""
                    )
                  )}
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
        </main>
      </div>
    </>
  );
}

export default BoardList;
