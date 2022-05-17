import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">HOME</a>
                    </li>
                    <li><a href="/login">LOGIN</a>
                    </li>
                    <li><a href="/register">REGISTER</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;