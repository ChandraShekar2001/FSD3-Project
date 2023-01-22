import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,

  //profileSlice IS
  isUpdated: false,
  // error: null,

  //forgotPasswordSlice IS
  // error: null,
  message: null,
  success: false,

  //getAllUserSlice IS
  // loading: true,
  users: [],
  // error: false

  //updateUserSlice IS
  // loading: true,
  // isUpdated: false,
  // error: null,

  //deleteUserSlice IS
  // loading: true,
  isDeleted: false,
  // message: null,
  // error: null
};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  clearErrors: (state, action) => {
    state.error = null;
  },

  //profileSlice Reducers
  updatePasswordRequest: (state) => {
    state.loading = true;
  },
  updatePasswordSuccess: (state) => {
    state.loading = false;
    state.isUpdated = true;
  },
  updatePasswordFail: (state) => {
    state.loading = fasle;
    state.error = action.payload;
  },
  updatePasswordReset: (state) => {
    state.isUpdated = false;
    state.error = null;
  },

  //forgotPassword Slice Reducer
  forgotPasswordRequest: (state) => {
    state.loading = true;
  },
  forgotPasswordSuccess: (state) => {
    state.loading = false;
    state.success = action.payload;
    state.message = action.payload;
  },
  forgotPasswordFail: (state) => {
    state.loading = false;
    state.error = action.payload;
  },
  forgotPasswordReset: (state) => {
    state.error = null;
    state.message = null;
    state.success = false;
  },

  //getAllUser Slice Reducer
  getAllUserRequest(state) {
    state.loading = true;
  },
  getAllUserSuccess(state, action) {
    state.loading = false;
    state.users = action.payload;
  },
  getAllUserFail(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  getAllUserReset(state) {
    state.error = null;
  },

  //updateUserSlice Reducer
  updateUserRequest(state) {
    state.loading = true;
  },
  updateUserSuccess(state, action) {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  updateUserFail(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  updateUserReset(state) {
    state.isUpdated = false;
    state.error = null;
  },

  //deleteUser Slice Reducer
  deleteUserRequest(state) {
    state.loading = true;
  },
  deleteUserSuccess(state, action) {
    state.loading = false;
    state.isDeleted = action.payload.success;
    state.message = action.payload.message;
  },
  deleteUserFail(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  deleteUserReset(state) {
    state.isDeleted = false;
  },
});
