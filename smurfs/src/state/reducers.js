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
    default:
      return state;
  }
}

const initialFormState = {
  name: "",
  age: "",
  height: ""
};

export function formReducer(state = initialFormState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
