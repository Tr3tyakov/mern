import {
  PUT_PRODUCT,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT_ALL,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  ORDER,
} from './constants/constants';

const initialState = {
  product: [],
  order: [],
  cost: 0,
  count: 0,
  qty: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_PRODUCT:
      return { ...state, product: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((element) => {
          return element._id !== action.payload;
        }),
      };
    case DELETE_PRODUCT_ALL:
      return {
        ...state,
        product: [],
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case INCREASE_COUNTER: {
      const check = state.qty[action.payload._id];

      if (check) {
        return {
          ...state,
          qty: {
            ...state.qty,
            [action.payload._id]: {
              ...state.qty[action.payload._id],
              count: state.qty[action.payload._id].count + 1,
              cost: action.payload.cost * (state.qty[action.payload._id].count + 1),
            },
          },
        };
      }
      return {
        ...state,
        qty: { ...state.qty, [action.payload._id]: { count: 2, cost: action.payload.cost * 2 } },
      };
    }
    case DECREASE_COUNTER: {
      return {
        ...state,
        qty: {
          ...state.qty,
          [action.payload._id]: {
            ...state.qty[action.payload._id],
            count: state.qty[action.payload._id].count - 1,
            cost: action.payload.cost * (state.qty[action.payload._id].count - 1),
          },
        },
      };
    }
    case ORDER: {
      const check = state.order.find((element) => element.name === action.payload.name);
      if (check) {
        const otherState = state.order.map((element) =>
          element.name === action.payload.name ? action.payload : element,
        );
        const count = otherState.reduce((total, element) => total + element.count, 0);
        const cost = otherState.reduce((total, element) => total + element.cost, 0);
        return { ...state, order: otherState, count, cost };
      }

      const orderState = { order: [...state.order, action.payload] };
      const count = orderState.order.reduce((total, element) => total + element.count, 0);
      const cost = orderState.order.reduce((total, element) => total + element.cost, 0);
      return { ...state, order: [...orderState.order], count, cost };
    }
    default:
      return state;
  }
};

// case COUNTER: {
//   const check = state.qty.find((element) => element.id === action.payload._id);

//   if (check) {
//     return {
//       ...state,
//       qty: state.qty.map((element) => {
//         return element.id === action.payload._id
//           ? {
//               ...element,
//               counter: element.counter + 1,
//               cost: action.payload.cost * (element.counter + 1),
//             }
//           : element;
//       }),
//     };
//   }
//   return {
//     ...state,
//     qty: [...state.qty, { id: action.payload._id, cost: action.payload.cost, counter: 1 }],
//   };
// }
