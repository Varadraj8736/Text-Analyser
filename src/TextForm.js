import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState('');
  

  
  const HandleClick = ()=>
  {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  }
  const HandleChange = (event)=>
  {
    setText(event.target.value)
  }
  const HandleLowClick = ()=>
  {
    let nxt = text.toLowerCase();
    setText(nxt);
    props.showAlert("Converted to lowercase!","success")
  }
  const HandleclearClick = (e)=>
  {
    e.preventDefault();
    let nxt = "";
    setText(nxt);
    props.showAlert("Text Cleared!", "success");
  }
  const HandleSpeech = ()=>
  {
    const msg = new SpeechSynthesisUtterance()
    msg.text = text;
    window.speechSynthesis.speak(msg);;
    
  }
  const HandlecopyClick = ()=>
  {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success")
  }
  const HandleSpeechStop = ()=>
  {
    const stop = window.speechSynthesis;
    stop.cancel();
  }
  
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'? 'white': 'rgb(10, 18, 68) '}}>
        <div><b>{props.heading}</b></div>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} id="mybox" rows="5" onChange={HandleChange} style={{backgroundColor:props.mode ==='dark'? 'grey': 'white' , color:props.mode ==='dark'? 'white': 'rgb(10, 18, 68)' }} ></textarea>
        </div>
        
        <button className="btn btn-primary " onClick={HandleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={HandleSpeech}>Speak Up</button>
        <button className="btn btn-primary mx-2" onClick={HandleSpeechStop}>Stop</button>
        <button className="btn btn-primary " onClick={HandleclearClick}>Clear</button>   
        <button className="btn btn-primary mx-2" onClick={HandlecopyClick}>Copy to Clipboard</button>   

        
    </div>
    <div className="container my-2" style={{color:props.mode ==='dark'? 'white': 'rgb(10, 18, 68) '}}>
        <h2 >Your Text Summary</h2>
        <p> {text.split(" ").length-1} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something to Preview it here "}</p>
    </div>
    </>
  )
}
