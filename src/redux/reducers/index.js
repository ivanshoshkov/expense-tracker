let defaultState = [
  {
    user: {
      firstName: "Morty",
      lastName: "James",
      originCountry: "Bulgaria",
      address: "Hasta la street 19, Vitosha, Sofia",
      telephone: "0889050334",
      email: "mortyjames@gmail.com",
    },
    accounts: [
      {
        id: 1,
        iban: "BG11 5234 1011 8678 0211",
        bic: "REVOLT11",
        ammount: 23490,
        expenses: 1232,
        currency: "BGN",
        currencyName: "Bulgarian Lev",
        active: true,
      },
      {
        id: 2,
        iban: "LT11 3211 1011 3311 0911",
        bic: "REVOLT22",
        ammount: 1490,
        expenses: 232,
        currency: "USD",
        currencyName: "United States Dollars",
        active: true,
      },
      {
        id: 3,
        iban: "RT11 7686 1234 3311 3253",
        bic: "REVOLT22",
        ammount: 5490,
        expenses: 1232,
        currency: "GBP",
        currencyName: "British Pounds",
        active: true,
      },
      {
        id: 4,
        iban: "RT11 7686 1234 3311 3253",
        bic: "REVOLT22",
        ammount: 1235490,
        expenses: 1231232,
        currency: "GBP",
        currencyName: "Chinese Yuan",
        active: true,
      },
    ],
  },
];

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
