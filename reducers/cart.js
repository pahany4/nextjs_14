import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selected_products: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    /*add_product(state, action) {
      state.selected_products.push(action.payload);
      return state;
    },*/
    change_quantity(state, action) {
      const found_element =
        state.selected_products.find((el) => el.uuid.toString() === action.payload.uuid.toString()
          && el.volume === action.payload.volume
          && el.quantity === action.payload?.quantity
        )
      if (found_element) {
        found_element.count = found_element.count + action.payload.count;
        if (found_element.price) {
          found_element.price_total = found_element.count * found_element.price
        }
      } else {
        state.selected_products.push(action.payload)
      }
    },
    increment_quantity(state, action) {
      const found_element =
        state.selected_products.find((el) => el.uuid.toString() === action.payload.uuid.toString()
          && el.volume === action.payload.volume
          && el.quantity === action.payload?.quantity
        )
      ++found_element.count;
      if (found_element.price) {
        found_element.price_total = found_element.count * found_element.price
      }
    },
    decrement_quantity(state, action) {
      const found_element =
        state.selected_products.find((el) => el.uuid.toString() === action.payload.uuid.toString()
          && el.volume === action.payload.volume
          && el.quantity === action.payload?.quantity
        )
      if (found_element.count > 1) {
        --found_element.count;
        if (found_element.price) {
          found_element.price_total = found_element.count * found_element.price
        }
      } else {
        state.selected_products = [
          ...state.selected_products
            .filter((el) => el.uuid.toString() !== action.payload.uuid.toString() ||
              (el.volume !== action.payload.volume || el.quantity !== action.payload?.quantity))
        ]
      }
    },
    set_selected_products(state, action) {
      state.selected_products = action.payload;
    },

    delete_product(state, action) {
      state.selected_products = [
        ...state.selected_products
          .filter((el) => el.uuid.toString() !== action.payload.uuid.toString() || el.volume !== action.payload.volume || el.quantity !== action.payload.quantity)
      ]
    },

    /** удалить все записи товара, если по каким-либо причинам отсутствует на бэкенде */
    delete_products(state, action) {
      state.selected_products = [...state.selected_products.filter((el) => el.uuid.toString() !== action.payload.uuid.toString())]
    },

  },

});

export const {
  //add_product,
  increment_quantity,
  decrement_quantity,
  set_selected_products,
  delete_products,
  delete_product,
  change_quantity
} = cartSlice.actions;

export const cart = cartSlice.reducer;

