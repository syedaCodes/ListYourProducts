import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shop from "./routes/Shop";
import Checkout from "./pages/Checkout";
import { getCurrentUser } from "./utils/firebase/firebase.utils";

const App = () => {
    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
