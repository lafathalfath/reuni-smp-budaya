import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';
import Logo from '../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Layout=()=>{

    const [showNav, setShowNav] = useState(false);

    const handleToggleNav=()=>{
        setShowNav(!showNav);
    }
    const closeNav=()=>{
        setShowNav(false);
    }

    return(
        <section className='layout'>
            <header>
                <Link to='/' onClick={closeNav}><img src={Logo} alt=''/></Link>    
                <nav className={`${showNav?'show-nav' : ''}`}>
                    <NavLink to='/' activeclassname='active' onClick={closeNav}>Home</NavLink>
                    <NavLink to='/panitia' activeclassname='active' onClick={closeNav}>Panitia</NavLink>
                    <NavLink to='/games' activeclassname='active' onClick={closeNav}>Games</NavLink>
                    <NavLink to='/makanan' activeclassname='active' onClick={closeNav}>Makanan</NavLink>
                    <NavLink to='/rundown' activeclassname='active' onClick={closeNav}>Susunan Acara</NavLink>
                </nav>
                <button className='toggle-nav' onClick={handleToggleNav}><AiOutlineMenu/></button>
            </header>
            <Outlet/>
        </section>
    )
}

export default Layout;