import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css"

const style = {
    height:"70px", 
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center"
}

function Navbar(props) {

    const linkConvertio = () => {
        let homeLink = document.querySelector('#homeLink');
        let aboutLink = document.getElementById('aboutLink');
        homeLink.classList.add('Link');
        aboutLink.classList.remove('Link');
        document.title = 'Home';
    }
    
    const homeFunc = () => {
        let homeLink = document.getElementById('homeLink');
        let aboutLink = document.getElementById('aboutLink');
        homeLink.classList.add('Link');
        aboutLink.classList.remove('Link');
        document.title = `Home`;
    }
    
    const aboutFunc = () => {
        let homeLink = document.getElementById('homeLink');
        let aboutLink = document.getElementById('aboutLink');
        homeLink.classList.remove('Link');
        aboutLink.classList.add('Link');
        document.title = `About`;
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.mode==='dark'? 'rgb(30, 30, 30)' : 'rgb(200, 200, 200)'}}>
            <div className="container">
                <span id="linkConvertio" onClick={linkConvertio} style={style} className="navbar-brand point"> &nbsp;{props.title} &nbsp;</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span id="homeLink" onClick={homeFunc} className="nav-link active point" aria-current="page"> &nbsp; Home &nbsp; </span>
                        </li>
                        <li className="nav-item">
                            <span id="aboutLink" onClick={aboutFunc} className="nav-link active point" aria-current="page"> &nbsp; About &nbsp; </span>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="lightDark" />
                        <label className="form-check-label" htmlFor="lightDark">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Add a title',
}