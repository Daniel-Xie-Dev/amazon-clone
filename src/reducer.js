export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const calculateRating = (ratings) => {
  let averageRatings = 0;
  for (let i = 0; i < ratings.length; i++) {
    averageRatings += ratings[i].star;
  }

  return ratings.length !== 0
    ? (averageRatings / ratings.length).toFixed(2)
    : 0;
};

const reducer = (state, action) => {
  let index = state.basket.findIndex((item) => item.id === action.item.id);
  let newBasket = [...state.basket];
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (index >= 0) {
        newBasket[index].quantity += action.item.quantity;
      } else {
        newBasket.push(action.item);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_FROM_BASKET":
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id})`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "INC_DEC_FROM_BASKET":
      let tempNewBasket = [...state.basket];
      if (index >= 0) {
        if (action.isInc) {
          tempNewBasket[index].quantity += 1;
        } else {
          if (tempNewBasket[index].quantity - 1 === 0) {
            tempNewBasket.splice(index, 1);
          } else {
            tempNewBasket[index].quantity -= 1;
          }
        }
      }

      return {
        ...state,
        basket: tempNewBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
