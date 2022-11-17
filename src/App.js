import Main from "./routes/main/main.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = () => {
    return (
        <div>
            Shop Component
        </div>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Main/>} />
                <Route path="shop" element={<Shop/>} />
                <Route path="sign-in" element={<SignIn/>} />
            </Route>
        </Routes>
    );
}

export default App;
