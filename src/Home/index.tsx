import  './style.css'
import {ReactComponent as Main} from './main.svg'

function Home(){
    return(
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                    Faça seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>
                    <h3 className="home-subtitle">
                    Escolha o seu pedido e em poucos minutos levaremoss<br /> na sua porta
                    </h3>

                    <a className="home-btn-order" href=""> Fazer Pedidos</a>
                </div>
                <div className="home-image">
                    <Main />
                </div>

            </div>

        </div>
    )
}
export default Home