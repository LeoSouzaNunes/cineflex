import Movies from "./Movies"
import Session from "./Session"
import Seats from "./Seats"
import Success from "./Success"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {

    return (
        <BrowserRouter>
            <header className="header">Cineflex</header>
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/sessoes/:idFilme" element={<Session />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats />}></Route>
                <Route path="/sucesso" element={<Success />}></Route>
            </Routes>
        </BrowserRouter>
    )
}