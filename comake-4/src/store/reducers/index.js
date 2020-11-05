import { combineReducers } from 'redux';

import { userReducer as user } from "./userReducer";
import { issueReducer as issues } from "./issueReducer";
import { editIssueReducer as editIssue } from "./editIssueReducer";

export default combineReducers({ user, issues, editIssue });