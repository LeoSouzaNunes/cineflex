import { useParams } from "react-router-dom"

export default function Session() {

    const { idFilme } = useParams();
    console.log(idFilme)

    return (

        <div className="session">
            <h1 className="title">Selecione o horário</h1>

            <ul className="movie-session-container">

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

                <li className="movie-session">
                    <span className="date">Quinta-feira - 24/06/2021</span>
                    <div className="buttons">
                        <button className="button">15:00</button>
                        <button className="button">19:00</button>
                    </div>
                </li>

            </ul>

            <footer className="footer">
                <div className="image"></div>
                <span className="title"> Enola Holmes</span>
            </footer>
        </div>

    )
}