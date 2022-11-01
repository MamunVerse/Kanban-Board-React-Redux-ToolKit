import { useSelector, useDispatch } from "react-redux";
import {
  selectAllBoards,
  changeStatus,
  changeBoardData,
  removeBoard,
} from "./boardSlice";

function BoardData({itemStatus}) {
  const dispatch = useDispatch();
  const allData = useSelector(selectAllBoards);
  return (
    <>
      {allData.map((board, index) =>
        itemStatus === board.status ? (
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
    </>
  )
}

export default BoardData