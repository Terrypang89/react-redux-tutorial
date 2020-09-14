// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
};

// our new action creator. Will it work?
//export function getData() {
  export function getData(url) {
/*
  return function(dispatch) { // add dispatch to dispatch actions 
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
  */
  //return { type: "DATA_REQUESTED" }; // return a plain action named DATA_REQUESTED
  //DATA_REQUESTED action will be intercepted by Redux saga with takeEvery
    return { type: "DATA_REQUESTED", payload: { url } };
}
