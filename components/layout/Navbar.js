import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {

   
    return (
        <nav Class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Consts" />
                </Link>
                <div>
                    <ul Class={styles.list}>
                        <li class={styles.item} >
                            <Link to="/">Home</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to="/contact">Contato</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>

                    </ul>

                </div>
            </Container>
        </nav>

    )
}

export default Navbar
