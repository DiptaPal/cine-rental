import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./contexts";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        <>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <MovieContext.Provider value={{ state, dispatch }}>
                    <Page />
                    <ToastContainer />
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
