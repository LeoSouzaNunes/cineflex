export default function Success() {


    return (
        <div className="success">

            <h1 className="success-title">
                Pedido feito <br />
                com sucesso!
            </h1>

            <div className="success-data">
                <h2 className="success-data-title">Filme e sessão</h2>
                <p className="data-text">
                    Enola Holmes <br />
                    24/06/2021 15:00
                </p>
            </div>

            <div className="success-data">
                <h2 className="success-data-title">Ingressos</h2>
                <p className="data-text">
                    Assento 15<br />
                    Assento 16
                </p>

            </div>

            <div className="success-data">
                <h2 className="success-data-title">Comprador</h2>
                <p className="data-text">
                    Nome: João da Silva Sauro <br />
                    CPF: 123.456.789-10
                </p>
            </div>

            <button className="finish-button">Voltar pra Home</button>

        </div>

    )
}