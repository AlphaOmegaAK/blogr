import React from 'react';
import './Navbar.css';



const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <h1>blogr</h1>
                <ul className="nav-list">
                    <li className='nav-item'>
                        <a className='nav-link' href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="/posts">Posts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// or
// const Navbar = () => {
//     return (
//         <div>
//             Navbar
//         </div>
//     )
// }



export default Navbar;