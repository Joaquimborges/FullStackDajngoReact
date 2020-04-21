import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// Add Leads
export const getLeads = () => (dispatch) => {
  axios
    .get("./api/lead")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Delete Lead

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`./api/lead/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD Lead

export const addLead = (lead) => (dispatch) => {
  axios
    .post("./api/lead/", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
