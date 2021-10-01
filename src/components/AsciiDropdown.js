import React from 'react'

function AsciiDropdown() {
    return (
        <div className="col-md-6">
            <h3 className='my-2'>ASCII text</h3>
            <label htmlFor="ascii" className="form-label">Copy text or download as .txt for a better view</label>
            <select className="form-select" id="ascii">
                <option value="3-D">3-D</option>
                <option value="3D-ASCII">3D-ASCII</option>
                <option value="5 line Oblique">5 Line Oblique</option>
                <option value="Basic">Basic</option>
                <option value="Doom">Doom</option>
                <option value="Isometric1">Isometric1</option>
                <option value="Larry 3D">Larry 3D</option>
                <option value="Standard">Standard</option>
                <option value="Star Wars">Star Wars</option>
                <option value="Univers">Univers</option>
                <option value="Rozzo">Rozzo</option>
                <option value="Roman">Roman</option>
                <option value="Rectangles">Rectangles</option>
                <option value="Slant">Slant</option>
                <option value="Nancyj-Underlined">Nancyj-Underlined</option>
                <option value="Doh">Doh</option>
                <option value="Binary">Binary</option>
                <option value="Colossal">Colossal</option>
                <option value="Ghost">Ghost</option>
                <option value="Graffiti">Graffiti</option>
            </select>
        </div>
    )
}

export default AsciiDropdown
