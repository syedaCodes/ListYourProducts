import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default App;
