import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import hoodie from "./public/assets/hoodie.png";
import shirt from "./public/assets/shirt.png";
import cap from "./public/assets/cap.png";
import type { Inventory } from "./utils/types";

const clothesData = [
  {
    id: 999,
    productId: 1,
    clothename: "Black t-shirt",
    price: 7.95,
    src: shirt,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 10,
  },
  {
    id: 998,
    productId: 2,
    clothename: "Black hoodie",
    price: 13,
    src: hoodie,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 12,
  },
  {
    id: 997,
    productId: 3,
    clothename: "Black cap",
    price: 23,
    src: cap,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 8,
  },
];

export const drawerState = atom({
  key: "drawerState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const productsState = atom({
  key: "products", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// NEW ////////////////////////////////////////////////////////////////////
export const inventoryState = selector({
  key: "inventoryState",
  get: ({ get }) => {
    // Aca iria una peticion fetch con el get async que retorna la data
    return clothesData;
  },
});

export const cartState = atom({
  key: "cart", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const cartCardState = atom({
  key: "cartCardState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const cardCartProccesed = selector({
  key: "cardCartProccesed",
  get: ({ get }: any) => {
    const filter = get(cartCardState);
    const data = Object.keys(filter).map((key, index) => filter[key]);

    return data;
  },
});

export const totalState = selector({
  key: "totalState",
  get: ({ get }) => {
    const cart: any = get(cartState);
    const inventory = get(inventoryState);


    const totalItem: any = inventory.map((item) => {
      return { [item.id]: item.price * cart[item.id] };
    });
  },
});

export const fullTotalCart = selector({
  key: "totalState",
  get: ({ get }) => {
    const subtotal: any = get(totalState);
    // Devuelve un array con los items comprados, y con el subtotal de cada uno

    const total = subtotal.reduce((acc: any, el: any) => acc + el, 0);
  },
});
