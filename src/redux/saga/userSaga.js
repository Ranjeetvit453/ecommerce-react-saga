import { apiCall } from "../../utils/Utils";
import { call, put, takeEvery, take } from 'redux-saga/effects'
import { USER_REGISTER_ERROR, USER_REGISTER_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_REGISTER_REQUEST } from "../type/userType";



function* userRegisterRequestData(data) {

  try {
    const userRes = yield call(apiCall, 'POST', '/user/register', data?.payload, false);
    const userData = userRes?.data;
    //  console.log(" userRes ----userRes?.data- ",userData)
    if (userRes?.data?.status == 201) {
      yield put({ type: USER_REGISTER_SUCCESS, userData })
    } else {

      yield put({ type: USER_REGISTER_ERROR, userRes })
    }


  }
  catch (error) {

    yield put({ type: USER_REGISTER_ERROR, error })
  }
}

function* userLoginRequestData(data) {
  try {
    const loginRes = yield call(apiCall, "POST", '/user/login', data?.payload, false)
    // console.log("  ---loginRes user saga for login- ",loginRes)
    if (loginRes?.data?.status == 201) {

      yield put({ type: USER_REGISTER_SUCCESS, loginRes })
    } else {

      yield put({ type: USER_REGISTER_ERROR, loginRes })
    }
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR, error })
  }
}


export function* userSaga() {
  // const { data } = yield take(USER_REGISTER_REQUEST);
  // console.log(" userRes ----saga-USER_REGISTER_REQUEST---- ",data)
  // yield call(userRequestData, data)
  yield takeEvery(USER_REGISTER_REQUEST, userRegisterRequestData)
  yield takeEvery(USER_LOGIN_REQUEST, userLoginRequestData)

}

