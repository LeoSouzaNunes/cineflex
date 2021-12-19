import Movies from "./Movies"
import Session from "./Session"
import Seats from "./Seats"
import Success from "./Success"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


export default function App() {

    const successValue = {
        movie: '',
        date: '',
        time: '',
        seats: [],
        name: '',
        id: ''
    }
    const [successData, setSuccessData] = useState({ ...successValue })

    return (
        <BrowserRouter>
            <header className="header">Cineflex</header>
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/sessoes/:idFilme" element={<Session />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats setSuccessData={setSuccessData} />}></Route>
                <Route path="/sucesso" element={<Success successData={successData} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}