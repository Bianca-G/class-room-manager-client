// este Link no recarga la página, sólo navega por ellas. Renderiza en el ciente
// Si quiero recargarla siempre que pique en un link puedo usar el común <a ref="" />
import {Link} from 'react-router-dom'

const IndexPage = () => {
    // eslint-disable-next-line
    const loadLogin = () => {
        // fetch(): método ajax que envía un request una url, recibe un response pero no recarga la página en la que se encuentra
        // cuando se cargue el componente se va a ejecutar esta api-call
        fetch('http//:localhost:5005/api/login')
        // los fetchs los mando a los handlers > controllers/services de mi server
    }

    return (
        <main>
            <h1>
                HOLA MUNDO !
            </h1>
            <span />
            <Link to='/class-rooms-list'>VER AULAS</Link>
        </main>
    )
};

export default IndexPage;