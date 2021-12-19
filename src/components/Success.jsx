import { Link } from "react-router-dom"

export default function Success({ successData }) {

    return (
        <div className="success">

            <h1 className="success-title">
                Pedido feito <br />
                com sucesso!
            </h1>

            <div className="success-data">
                <h2 className="success-data-title">Filme e sessão</h2>
                <p className="data-text">
                    {successData.movie} <br />
                    {successData.date} {successData.time}
                </p>
            </div>

            <div className="success-data">
                <h2 className="success-data-title">Ingressos</h2>

                {successData.seats.map((seat, index) => (
                    <p key={index} className="data-text">
                        Assento {seat}<br />
                    </p>
                ))
                }


            </div>

            <div className="success-data">
                <h2 className="success-data-title">Comprador</h2>
                <p className="data-text">
                    Nome: {successData.name} <br />
                    CPF: {successData.id}
                </p>
            </div>

            <Link to='/'>
                <button className="finish-button">Voltar pra Home</button>
            </Link>

        </div>

    )
}