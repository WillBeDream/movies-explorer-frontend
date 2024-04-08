import {Link} from "react-router-dom"
import './Logotip.css'

export default function Logotip() {
    return (
        <Link to={'/'} className='logotip'>
            <div className='logotip__image hover-link'></div>
        </Link>
    )
}