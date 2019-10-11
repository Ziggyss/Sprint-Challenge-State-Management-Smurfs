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
