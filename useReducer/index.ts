import { useReducer } from "react";

// reducers can only be pure functions and cannot fetch data

const initialState = {
  ///// SAMPLE VALUES - put your own
  cities: [],
  isLoading: false,
  ///// SAMPLE VALUES - end
};

function reducer(state, action) {
  // actions are modelled as events instead of setters
  // its a naming convention
  switch (action.type) {
    // instead of setCities
    case "citis/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "cities/created":
      break;
    case "cities/deleted":
      break;
    default:
      throw new Error("Unknown action type");
  }
}

function func() {
  const [state, dispatch] = useReducer(reducer, initialState);

  ////////// SAMPLE CODE BEGIN
  /////////// replace with your own code

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`url`);
        const data = await res.json();
        // here we are first fetching the data and then sending it as payload
        // we cannot directly use usereducer and fetch there
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data",
        });
      }
    }
    fetchCities();
  }, []);
  ///////////////// SAMPLE CODE END

  // instead you can also just simply deconstruct the values
  // const [{ cities, isLoading }, dispatch] = useReducer(reducer, initialState);
}
