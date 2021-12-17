export default function Seats() {

    return (
        <div className="seats">
            <h1 className="title">Selecione o(s) assento(s)</h1>

            <ul className="seats-container">

                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>
                <li className="seat available"></li>

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
                    <input type="text" placeholder="Digite seu nome..." />
                </div>
                <div className="input-container">
                    <span className="input-title">CPF do comprador:</span>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
            </div>


            <button className="finish-button">
                Reservar assento(s)
            </button>


            <footer className="footer">
                <div className="image"></div>
                <span className="title"> Enola Holmes</span>
                <span className="title"> Quinta-feira - 15:00</span>
            </footer>
        </div>

    )
}