import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/home";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default App;
