// Disabled

import React from 'react'

const article = {
    fontSize: "20px",
}

function About(props) {
    return (
        <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>About textConvertio</h3>
            <hr />
            <article style={article}>
                <p>textConvertio is a utility for manipulating a text input based on your preference.</p>
                <h3>Cases : </h3> 
                <ul>
                    <li>UPPERCASE</li>
                    <li>lowercase</li>
                    <li>esac esreveR</li>
                    <li>Title Case</li>
                </ul>
                <h3>Other : </h3>
                <ul>
                    <li>Morse Code Encoding</li>
                    <li>Clear Input Field</li>
                    <li>Trim extra white spaces to a single white space</li>
                    <li>Copy text to the clipboard</li>
                    <li>Download the typed text as a .txt file</li>
                </ul>
                <h3>ASCII Conversion: </h3>
                <strong>Font List</strong>
                <ul>
                    <li>3D</li>
                    <li>3D-ASCII</li>
                    <li>5 Line Oblique</li>
                    <li>Basic</li>
                    <li>Doom</li>
                    <li>Isometric 1</li>
                    <li>Larry 3D</li>
                    <li>Standard</li>
                    <li>Star Wars</li>
                    <li>Univers</li>
                    <li>Rozzo</li>
                    <li>Roman</li>
                    <li>Rectangles</li>
                    <li>Slant</li>
                    <li>Nancyj-underlined</li>
                    <li>Doh</li>
                    <li>Binary</li>
                    <li>Colossal</li>
                    <li>Ghost</li>
                    <li>Graffiti</li>
                </ul>
                <div>Font Support for ASCII Conversion : Figlet</div>
            </article>
        </div>
    )
}

export default About
