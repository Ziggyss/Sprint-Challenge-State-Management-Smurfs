import * as types from "./actionTypes";


const initialSmurfs = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];

export function smurfsReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.ADD_SMURFS:
      return [...state, action.payload];

    default:
      return state;
  }
}

const initialValueCount = 0;
export function countReducer(count = initialValueCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}
