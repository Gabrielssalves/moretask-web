import { combineReducers} from "redux";
import taskReducer from "./taskReducer";
import staffReducer from "./staffReducer";

export default combineReducers({
    task: taskReducer,
    staff: staffReducer
});