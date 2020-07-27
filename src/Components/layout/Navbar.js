import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
        return(
            <nav className='nav-wrapper black'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Collab</Link>
                    <SignInLinks />
                    <SignOutLinks />
                </div>
            </nav>
        )
}

export default Navbar;