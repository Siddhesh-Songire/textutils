import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const cleartext = ()=>{
    let newText = " ";
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const copytext = () =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied to Clipboard");
  }
  
  const[text, setText] = useState('Enter text here')
  return (
    <>
    <div>
      <div className="mb-3" style={{color:props.mode === 'dark' ? 'white':'black'}} >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark' ? '#384662':'white', color:props.mode === 'dark' ? 'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>

      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>

      <button className="btn btn-primary mx-2 my-1" onClick={cleartext}>Clear Text</button>

      <button className="btn btn-primary mx-2 my-1" onClick={copytext}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'black'}}>
      <h2>Text Summary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters </p> */}
      <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>

      <p>{0.008 * text.split(/\s+/ ).filter((element)=> {return element.length!==0}).length} Minutes to read</p>

      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
