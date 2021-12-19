import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

export default function Seats({ setSuccessData }) {

    const { idSessao } = useParams()
    const [seatsData, setSeatsData] = useState(null)
    const [username, setUsername] = useState('')
    const [idUser, setIdUser] = useState('')
    const [seatColorId, setSeatColorId] = useState(0)
    const [pickedSeats, setPickedSeats] = useState([])

    useEffect(() => {
        const promiseSeatsData = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)

        promiseSeatsData.then((resquest) => setSeatsData(resquest.data))
    }, [idSessao])


    function handleSeat(e, seatId) {
        const status = e.target

        if (status.classList.length >= 3) {
            setSeatColorId('')
        } else {
            setSeatColorId(e.target.innerHTML)
            setPickedSeats([seatId])
        }
    }

    function handleBuyButton() {
        const successValue = {
            movie: seatsData.movie.title,
            date: seatsData.day.date,
            time: seatsData.name,
            seats: [seatColorId],
            name: username,
            id: idUser
        }

        if (username !== '' && idUser !== '') {

            let postData =
            {
                ids: pickedSeats,
                name: username,
                cpf: idUser
            };

            setSuccessData({ ...successValue })

            const promisePost = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", postData)

            promisePost.then((request) => console.log(request))
            promisePost.catch((request) => console.log(request))
        }
    }

    if (seatsData === null) {
        return <></>
    }

    return (
        <div className="seats">
            <h1 className="title">Selecione o(s) assento(s)</h1>

            <ul className="seats-container">

                {seatsData.seats.map((seat) => (
                    <li
                        key={seat.id}
                        onClick={(e) => { handleSeat(e, seat.id) }}
                        className={
                            `seat 
                        ${seat.isAvailable ? ("available") : ("sold-out")} 
                        ${seatColorId === seat.name ? ("picked") : ("")}`
                        }>
                        {seat.name}
                    </li>
                ))
                }

            </ul>

            <div className="exemples">
                <div className="exemple">
                    <div className="seat picked"></div>
                    <span className="status-text">Selecionado</span>
                </div>
                <div className="exemple">
                    <div className="seat available"></div>
                    <span className="status-text">Disponível</span>
                </div>
                <div className="exemple">
                    <div className="seat sold-out"></div>
                    <span className="status-text">Indisponível</span>
                </div>
            </div>

            <div className="inputs">
                <div className="input-container">
                    <span className="input-title">Nome do comprador:</span>
                    <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" placeholder="Digite seu nome..." />
                </div>
                <div className="input-container">
                    <span className="input-title">CPF do comprador:</span>
                    <input onChange={(e) => { setIdUser(e.target.value) }} value={idUser} type="text" placeholder="Digite seu CPF..." />
                </div>
            </div>

            <Link to="/sucesso">
                <button onClick={handleBuyButton} className="finish-button">
                    Reservar assento(s)
                </button>
            </Link>

            <footer className="footer">
                <div className="div-image"><img src={seatsData.movie.posterURL} alt={seatsData.movie.title} /></div>
                <div className="seats-footer-data">
                    <span className="title">{seatsData.movie.title}</span>
                    <span className="title"> {seatsData.day.weekday} - {seatsData.name}</span>
                </div>
            </footer>
        </div>

    )
}
