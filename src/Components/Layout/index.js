import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProducts from "../AddProducts";

const Layout = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact />
            <Route path="/add-products" component={AddProducts} exact />
        </Switch>
    </BrowserRouter>
  )
}

export default Layout;