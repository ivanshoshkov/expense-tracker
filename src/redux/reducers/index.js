let defaultState = {
  display: true,
  account: {
    firstName: "Morty",
    lastName: "James",
    iban: "LT11 3211 1011 3311 0911",
    bic: "REVOLT11",
    ammount: 23490,
    expenses: 1232,
    currency: "BGN",
    currencyName: "Bulgarian Lev",
    active: true,
  },
  account2: {
    firstName: "Morty",
    lastName: "James",
    iban: "LT11 3211 1011 3311 0911",
    bic: "REVOLT11",
    ammount: 23490,
    expenses: 1232,
    currency: "GBP",
    currencyName: "British Pound",
    active: true,
  },
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        data: action.data,
      };
    case "SEND_MONEY":
      return {
        ...state,
        ammount: state.ammount + 10,
      };
    case "GET_STATE":
      return {
        ...state,
      };
    case "TOGGLE_BALANCE":
      return {
        ...state,
        display: !state.display,
      };
    default:
      return { ...state };
  }
};

export default mainReducer;
