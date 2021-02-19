import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";
// ✅ import the addItems action from the itemsSlice
import { addItems } from "../redux/itemsSlice";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  // populate store
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((items) => {
        // ✅ use the addItem action imported above to dispatch the items to the store
        // const action = addItems(items);
        // { type: "items/addItems", payload: items }
        dispatch(addItems(items));
      });
  }, [dispatch]);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header />
      <ItemForm />
      <ShoppingList />
      <ShoppingCart />
    </div>
  );
}

export default App;
