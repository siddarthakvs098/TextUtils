import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
        console.log("upper case was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("text converted to uppercase","success")
    }
    const handlelowClick = ()=>{
        console.log("upper case was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("text converted to lowercase","success")
    }
    const handleclearClick = ()=>{
        console.log("upper case was clicked");
        let newtext = "";
        setText(newtext);
        props.showAlert("text is cleared","success")
    }
    const handleOnChange = (event)=>{
        // console.log("Clicked handele on change");
        setText(event.target.value);
    }
    const handleCopyClick = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text is copied","success")
    }
    const [text,setText] = useState("Enter the text")
    return (
    <>
    
    <div className="container" style={{color :props.mode==='light'?'black':'white'}} >

        <h1 >{props.heading}</h1>
      <div className="form-group my-3" >
        <label htmlFor="myBox">Enter the details</label>
        <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'#042743',color :props.mode==='light'?'black':'white'}} value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

  
  <button disabled = {text.length===0} className="btn btn-primary my-3 " onClick={handleupClick} >Covert to uppercase</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 " onClick={handlelowClick} >Covert to lowcase</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 " onClick={handleclearClick} >clear text</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 " onClick={handleCopyClick} >copy text</button>
  </div>
    <div className="container my-2" style={{color :props.mode==='light'?'black':'white'}}>
        <h1>Your text summaary is</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words,{text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes readd</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  
  
    </>
  )
}
