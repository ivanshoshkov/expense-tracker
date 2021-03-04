import axios from "axios";

export function loadColor() {
  return (dispatch) => {
    return axios.get("./data.json").then((response) => {
      dispatch(changeColor(response.data));
    });
  };
}

export function changeColor(data) {
  return {
    type: "CHANGE_COLOR",
    data: data,
  };
}

export function getState() {
  return {
    type: "GET_STATE",
  };
}

export function sendMoney() {
  return {
    type: "SEND_MONEY",
  };
}

export function displayBalance() {
  return {
    type: "TOGGLE_BALANCE",
    payload: false
  };
}
export function changeAccount(event) {
  return {
    type: "CHANGE_ACCOUNT",
    payload: event.target.innerText
  };
}
export function selectedAccount(account) {
  return {
    type: "SELECTED_ACCOUNT",
    payload: account
  };
}
