import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import ContactPage from "./pages/contact";
import BookPage from "./pages/book";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./pages/register";
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./redux/counter/counterSlice";
// import styles from './styles/Counter.module.css';

const Layout = () => {
  return (
    <div className='layout-app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 not found</div>,

      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "book",
          element: <BookPage />,
        },

      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>

    // const count = useSelector(selectCount);
    // const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');

    // const incrementValue = Number(incrementAmount) || 0;

    // return (
    //   <div>
    //     <div className={styles.row}>
    //       <button
    //         className={styles.button}
    //         aria-label="Decrement value"
    //         onClick={() => dispatch(decrement())}
    //       >
    //         -
    //       </button>
    //       <span className={styles.value}>{count}</span>
    //       <button
    //         className={styles.button}
    //         aria-label="Increment value"
    //         onClick={() => dispatch(increment())}
    //       >
    //         +
    //       </button>
    //     </div>
    //     <div className={styles.row}>
    //       <input
    //         className={styles.textbox}
    //         aria-label="Set increment amount"
    //         value={incrementAmount}
    //         onChange={(e) => setIncrementAmount(e.target.value)}
    //       />
    //       <button
    //         className={styles.button}
    //         onClick={() => dispatch(incrementByAmount(incrementValue))}
    //       >
    //         Add Amount
    //       </button>
    //       <button
    //         className={styles.asyncButton}
    //         onClick={() => dispatch(incrementAsync(incrementValue))}
    //       >
    //         Add Async
    //       </button>
    //       <button
    //         className={styles.button}
    //         onClick={() => dispatch(incrementIfOdd(incrementValue))}
    //       >
    //         Add If Odd
    //       </button>
    //     </div>
    //   </div>
    // );
  );
}
