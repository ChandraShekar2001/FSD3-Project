import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  withCredentials: true,
};

export const loginUser = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch({
      type: "LoginRequest",
    });

    const url = "http://localhost:4000/api/v1/login";
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      withCredentials: true,
    });
    console.log(response);
    dispatch({
      type: "LoginSuccess",
      payload: response.data.user,
    });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "signUpReqest" });
    const url = "http://localhost:4000/api/v1/register";
    const {data} = await axios.post(url, formData, config
    );
   console.log(data);
    dispatch({ type: "signUpSuccess", payload: data.user });
    localStorage.setItem("user", data.token);
  } catch (error) {
    console.log(error);
    dispatch({ type: "signUpFailure", payload: error.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get("http://localhost:4000/api/v1/me",config);
    // console.log(data);
    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
    });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: "logOutRequest",
    });

    const res = await axios.get("http://localhost:4000/api/v1/logout", {
      withCredentials: true,
    });
    console.log(res);
    dispatch({
      type: "logOutSuccess",
    });
  } catch (error) {
    dispatch({ type: "logOutFailure", payload: error.response.data.message });
  }
};

export const updateUserProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRequest" });
    const url = `http://localhost:4000/api/v1/me/update`;
    const { data } = await axios.put(url, { name, email }, config);
    console.log(data);
    dispatch({
      type: "updateUserSuccess",
      // payload: data.user,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "updateUserFail",
      payload: error.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });
      const url = `http://localhost:4000/api/v1/password/update`;
      const { data } = await axios.put(
        url,
        { oldPassword, newPassword, confirmPassword },
        config
      );
      console.log(data);
      dispatch({
        type: "updatePasswordSuccess",
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFail",
        payload: error.message,
      });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPasswordRequest" });
    const url = `http://localhost:4000/api/v1/password/forgot`;
    const { data } = await axios.post(url, {email}, config);
    console.log(data);
    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFail",
      payload: error.message,
    });
  }
};

export const resetPassword = (token,passwords) => async (dispatch) => {
  console.log(passwords);
  try {
    dispatch({ type: "resetPasswordRequest" });
    const url = `http://localhost:4000/api/v1/password/reset/${token}`;
    const { data } = await axios.put(
      url,
      {
        password: passwords.password,
        confirmPassword: passwords.confirmPassword,
      },
      config
    );
    console.log(data);
    dispatch({
      type:"resetPasswordSuccess",
      payload:data.user
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type:"resetPasswordFail",
      paload:error.message
    })
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUserRequest" });
    const url = `http://localhost:4000/api/v1/admin/users`;
    const { data } = await axios.get(url, config);
    console.log(data);
    dispatch({
      type: "getAllUserSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUserFail",
      payload: error.message,
    });
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRequest" });
    const url = `http://localhost:4000/api/v1/admin/user/${id}`;
    const { data } = await axios.put(url, userData, config);
    console.log(data);
    dispatch({
      type: "updateUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "updateUserFail",
      payload: error.message,
    });
  }
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const url = `http://localhost:4000/api/v1/admin/user/${id}`;
    const { data } = await axios.delete(url, config);
    console.log(data);
    dispatch({
      type: "deleteUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.message,
    });
  }
};
