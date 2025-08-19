export const utilFunctiondata = (state, random) => {
  switch (random.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "multiply":
      return { ...state, count: state.count * 5 };

    case "reset":
      return { ...state, count: (state.count = 0) };

    case "gmail":
      return { ...state, gmail: random.value };
    case "name":
      return { ...state, name: random.value };
    default:
      return { count: (state.count = 0) };
  }
};
