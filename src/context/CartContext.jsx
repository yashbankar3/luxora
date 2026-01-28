import { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, qty: 1 }],
      };

    case "REMOVE":
      return {
        items: state.items
          .map(i =>
            i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
          )
          .filter(i => i.qty > 0),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    items: state.items,
    add: product => dispatch({ type: "ADD", payload: product }),
    remove: id => dispatch({ type: "REMOVE", payload: id }),
    total: state.items.reduce((s, i) => s + i.price * i.qty, 0),
  }), [state.items]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
