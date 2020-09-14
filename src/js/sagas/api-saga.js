import { takeEvery, call, put } from "redux-saga/effects";

// watcher function
export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}
//take every action named DATA_REQUESTED and for each action spin a worker saga

//watcher is a generator function watching for every action we are interested in.
//In response to that action, the watcher will call a worker saga, 
//  which is another generator function for doing the actual API call.

//worker saga takes actual action as parameter
function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url); 
    yield put({ type: "DATA_LOADED", payload }); //put for dispatch action 
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
//worker saga will call the remote API with call from redux-saga/effects.
//When the data is loaded, we can dispatch another action from our saga with put, again, from redux-saga/effects.

//call and return as payload
function getData(url) {
    return fetch(url)
        .then(response => response.json()
    );
}