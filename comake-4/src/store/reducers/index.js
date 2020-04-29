import { combineReducers } from 'redux';

import { userReducer as user } from "./userReducer";
import { issueReducer as issues } from "./issueReducer"


export default combineReducers({user, issues});