import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getBasketFromLocalStorage } from "../util/util";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import agent from "../api/agent";
import { setBasket } from "../../features/basket/basketSlice";
import Spinner from "./Spinner";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  function handleThemeChange() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    const initApp = async () => {
      try {
        const basket = getBasketFromLocalStorage();

        await dispatch(fetchCurrentUser());

        if (basket) {
          const data = await agent.Basket.get();
          dispatch(setBasket(data));
        }
      } catch (error) {
        console.log("Init error:", error);
      } finally {
        setLoading(false);
      }
    };

    initApp();
  }, [dispatch]);

  if (loading) return <Spinner message="Loading application..." />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ToastContainer
        position="bottom-right"
        hideProgressBar
        theme="colored"
      />

      <Header
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />

      {/* MAIN CONTENT AREA */}
      <Container sx={{ mt: 10, mb: 4 }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;