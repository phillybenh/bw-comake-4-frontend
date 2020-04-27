import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import { getProfile, updateProfile } from "../store/actions"


