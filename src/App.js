import Main from "./routes/main/main.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Main/>} />
                <Route path="shop" element={<Shop/>} />
                <Route path="auth" element={<Authentication/>} />
                <Route path="checkout" element={<Checkout/>} />
            </Route>
        </Routes>
    );
}

export default App;
