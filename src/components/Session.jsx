import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Session() {


    const { idFilme } = useParams();
    const [sessionsData, setSessionsData] = useState(null);

    useEffect(() => {
        const promiseSessionsData = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);

        promiseSessionsData.then((request) => setSessionsData(request.data));
    }, [idFilme])

    console.log(sessionsData);

    if (sessionsData === null) {
        return <></>
    }

    return (

        <div className="session">
            <h1 className="title">Selecione o horário</h1>

            <ul className="movie-session-container">

                {sessionsData.days.map((session) => (
                    <li key={session.id} className="movie-session">
                        <span className="date">{session.weekday} - {session.date}</span>
                        <div className="buttons">

                            {session.showtimes.map((time) => (
                                <Link key={time.id} to={`/assentos/${time.id}`}>
                                    <button className="button">{time.name}</button>
                                </Link>
                            ))
                            }
                        </div>
                    </li>
                ))
                }


            </ul>

            <footer className="footer">
                <div className="div-image"><img src={sessionsData.posterURL} alt={sessionsData.title} /></div>
                <span className="title">{sessionsData.title}</span>
            </footer>
        </div>

    )
}