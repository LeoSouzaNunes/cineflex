import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Movies() {

    const [moviesBanner, setMoviesBanner] = useState(null)

    useEffect(() => {
        const promiseMoviesBanner = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

        promiseMoviesBanner.then((request) => setMoviesBanner(request.data))
    }, [])

    if (moviesBanner === null) {
        return <></>
    }
    return (
        <div className="movies">
            <h1 className="title">Selecione o filme</h1>
            <ul className="movies-list-container">
                {moviesBanner.map(
                    (movie) => (
                        <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                            <li className="movie-banner">
                                <img src={movie.posterURL} alt={movie.title} />
                            </li>
                        </Link>
                    )
                )
                }
            </ul>
        </div>
    )


}