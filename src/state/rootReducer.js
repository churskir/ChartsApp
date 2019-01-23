import { combineReducers } from "redux";

import XandYPointsReducer from "./actions/points/pointsReducers";
import NameAndValueReducer from "./actions/nameAndValuePoints/nameAndValuePointsReducer";
import SelectionsReducer from "./actions/selections/selectionsReducer";
import undoable from 'redux-undo';

const appReducer = combineReducers({

/*
    XandYPoints: XandYPointsReducer,
    NameAndValuePoints: NameAndValueReducer,
    Selections: SelectionsReducer
*/

    XandYPoints: undoable(XandYPointsReducer),
    NameAndValuePoints: undoable(NameAndValueReducer),
    Selections: undoable(SelectionsReducer),

});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
