import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSide from "./components/login/login";
import GroupButton from "./components/buttonGroupProducts/buttonGroupsProduct";


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path=""
                    element={<SignInSide/>}
                >
                </Route>
                <Route
                    path="/signedin"
                    element={<GroupButton/>}
                >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
