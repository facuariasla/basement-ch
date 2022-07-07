import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import hoodie from "../public/assets/hoodie.png";
import shirt from "../public/assets/shirt.png";
import cap from "../public/assets/cap.png";

export const drawerState = atom({
  key: 'drawerState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const productsState = atom({
  key: 'products', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const cartState = atom({
  key: 'cart', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// const productsFromDB = selector({
//   key: 'productsFromDB',
//   get: ({get}) => {
//     const clothesData = [
//       {
//         id: Math.random() * 9999,
//         productId: 1,
//         clothename: "Black t-shirt",
//         price: "7.95",
//         src: shirt,
//         description:
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque illum reprehenderit vitae dolore.",
//           stock: 10,
//       },
//       {
//         id: Math.random() * 9999,
//         productId: 2,
//         clothename: "Black hoodie",
//         price: "13",
//         src: hoodie,
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cupiditate laboriosam laborum.",
//           stock: 12,
//       },
//       {
//         id: Math.random() * 9999,
//         productId: 3,
//         clothename: "Black cap",
//         price: "23",
//         src: cap,
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste ex ducimus assumenda.",
//           stock: 8,
//       },
//     ];
//     return clothesData;
//   },
// });