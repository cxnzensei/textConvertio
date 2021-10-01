import React, {useState} from 'react';
import PropTypes from 'prop-types'
import FileSaver from 'file-saver';
import Morse from './Morse';
import figlet from 'figlet';
import './WordErr.css';

import threeD from 'figlet/importable-fonts/3-D.js';
import threeDASCII from 'figlet/importable-fonts/3D-ASCII.js';
import fiveLine from 'figlet/importable-fonts/5 Line Oblique.js';
import basic from 'figlet/importable-fonts/Basic.js';
import doom from 'figlet/importable-fonts/Doom.js';
import isometric1 from 'figlet/importable-fonts/Isometric1.js';
import larry3d from 'figlet/importable-fonts/Larry 3D.js';
import standard from 'figlet/importable-fonts/Standard.js';
import starwars from 'figlet/importable-fonts/Star Wars.js';
import univers from 'figlet/importable-fonts/Univers.js';
import rozzo from 'figlet/importable-fonts/Rozzo.js';
import roman from 'figlet/importable-fonts/Roman.js';
import rectangles from 'figlet/importable-fonts/Rectangles.js';
import slant from 'figlet/importable-fonts/Slant.js';
import nancy from 'figlet/importable-fonts/Nancyj-Underlined.js';
import doh from 'figlet/importable-fonts/Doh.js';
import binary from 'figlet/importable-fonts/Binary.js';
import colossal from 'figlet/importable-fonts/Colossal.js';
import ghost from 'figlet/importable-fonts/Ghost.js';
import graffiti from 'figlet/importable-fonts/Graffiti.js';

import "./InputForm.css"
import AsciiDropdown from './AsciiDropdown';

figlet.parseFont('3-D', threeD);
figlet.parseFont('3D-ASCII', threeDASCII);
figlet.parseFont('5 Line Oblique', fiveLine);
figlet.parseFont('Basic', basic);
figlet.parseFont('Doom', doom);
figlet.parseFont('Isometric1', isometric1);
figlet.parseFont('Larry 3D', larry3d);
figlet.parseFont('Standard', standard);
figlet.parseFont('Star Wars', starwars);
figlet.parseFont('Univers', univers);
figlet.parseFont('Rozzo', rozzo);
figlet.parseFont('Roman', roman);
figlet.parseFont('Rectangles', rectangles);
figlet.parseFont('Slant', slant);
figlet.parseFont('Nancyj-Underlined', nancy);
figlet.parseFont('Doh', doh);
figlet.parseFont('Binary', binary);
figlet.parseFont('Colossal', colossal);
figlet.parseFont('Ghost', ghost);
figlet.parseFont('Graffiti', graffiti);

const buttonStyle = {
    marginRight: "7px",
    marginBottom: "7px",
}

function InputForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        document.title = 'UPPER CASED';
        document.getElementById('nono').classList.remove('words');
    }

    const handleLow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        document.title = 'lower cased';
        document.getElementById('nono').classList.remove('words');
    }

    const handleClear = () => {
        setText("");
        document.title = 'Cleared';
        document.getElementById('nono').classList.remove('words');
        document.title = `cleared`;
    }

    const handleCopy = () => {
        let inputText = document.getElementById("inputText");
        inputText.select();
        navigator.clipboard.writeText(inputText.value);
        document.getSelection().removeAllRanges();
        document.title = `copied`;
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        document.title = 'Woosh';
        document.getElementById('nono').classList.add('words');
    }

    const handleDownload = () => {
        let download = document.getElementById('inputText').value;
        let blob = new Blob([download], {type: "text/plain; charset=utf-8"});
        FileSaver.saveAs(blob, "textConvertio.txt");
        document.title = 'Downloaded';
    }

    const handleReverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        document.title = 'Reverse cased';
        document.getElementById('nono').classList.remove('words');
    }

    const handleTitle = () => {
        let newText = text.toLowerCase().split(" ");
        for(let i=0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));
        document.title = 'Title Cased';
        document.getElementById('nono').classList.remove('words');
    }

    const handleEncodeMorse = () => {
        let morseText = text.toLowerCase()
                            .split("")
                            .map(frag => {
                                return Morse[frag] ? Morse[frag] : frag; 
                            }).join("");
        setText(morseText);
        document.title = `Morse Enc`;
        document.getElementById('nono').classList.add('words');
    }

    const handleASCII = (e) => {
        e.preventDefault();
        let font = document.querySelector('#ascii').value;
        figlet.text(text, {
            font: font,
            width: 200,
            whitespaceBreak: true
        }, function(err, data) {
            if(err){
                console.log(err)
            }
            setText(data);
        });
        document.title = `${font} - ASCII`;
        document.getElementById('nono').classList.add('words');
    }

    return (
        <div>
            <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <div className="mb-4">
                    <br />
                    <h2>{props.title}</h2>
                    <br />
                    <textarea 
                        style={
                            {backgroundColor: props.mode === 'light' ? 'white' : 'black',
                            color: props.mode==='dark'? 'white' : 'black',         
                            }
                        }
                        className="form-control" 
                        id="inputText"
                        value={text}
                        rows="8"
                        onChange= {handleOnChange}>
                    </textarea>
                </div>
                <button disabled={text.length === 0} onClick={handleClear} style={buttonStyle} className="btn btn-danger">Clear Field</button>
                <button disabled={text.length === 0} onClick={handleCopy} style={buttonStyle} className="btn btn-primary">Copy Text</button>
                <button disabled={text.length === 0} onClick={handleSpaces} style={buttonStyle} className="btn btn-primary">Trim spaces</button>
                <br />
                <button disabled={text.length === 0} onClick={handleUp} style={buttonStyle} className="btn btn-dark">UPPER CASE</button>
                <button disabled={text.length === 0} onClick={handleLow}style={buttonStyle} className="btn btn-dark">lower case</button>
                <button disabled={text.length === 0} onClick={handleReverse} style={buttonStyle} className="btn btn-dark">esac esreveR</button>
                <button disabled={text.length === 0} onClick={handleTitle} style={buttonStyle} className="btn btn-dark">Title Case</button>
                <br />
                <button disabled={text.length === 0} onClick={handleDownload} style={buttonStyle} className="btn btn-primary">Download as.txt</button>
                <button disabled={text.length === 0} onClick={handleEncodeMorse} style={buttonStyle} className="btn btn-dark">Morse</button>
                <form className="row g-3" id="noteDetails">
                    <AsciiDropdown/>
                    <div className="col-md-3 buttonAlign">
                    <button disabled={text.length === 0} onClick={handleASCII} className="btn btn-dark">ASCII</button>
                    </div>
                </form>
            </div>

            <div className="container my-4" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h3>Text Stats</h3>
                <hr />
                <h5 id='nono'>Words: {text.split(/\s+/).filter((element) => {return element.length!==0}).length}</h5>
                <h5>Characters: {text.length} </h5>
                <br />
                <h3>Preview</h3>
                <hr />
                <pre>{text.length > 0 ? text : 'Type something to preview'}</pre>
            </div>
        </div>
    )
}

export default InputForm

InputForm.propTypes = {
    title: PropTypes.string.isRequired,
}