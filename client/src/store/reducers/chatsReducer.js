const initState = {
  list: [
    { nick: "bagienny bogdan", image: "cos.jpg", socket: "jddd" },
    { nick: "trikitirem", image: "cos.jpg", socket: "mmmm" },
  ],
  selected: 0,
};

const chatsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_CHAT":
      return { selected: action.payload, list: state.list };
    default:
      return state;
  }
};

export default chatsReducer;
