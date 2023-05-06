import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {

    return (
        <footer>
            <ul>
                <li><Link to="/">notes</Link></li>
                <li><Link to="/translator">translator</Link></li>
            </ul>
        </footer>
    )
}
