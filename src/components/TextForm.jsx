import React from 'react'
import { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import Mycomp from './Mycomp';



const TextForm = (props) => {


    const [mytext , setText] = useState("");
    const { speak,voices } = useSpeechSynthesis();
    const [selectedVoice,setVoice] = useState(voices[0]);


    const helper = ()=>
    {
       const newArray = mytext.split(' ').filter((element)=>
       {
        return element!=='';
       });
       console.log(newArray);
       return newArray.length;

    }

  return (
<>
    <div className='container' style={{color: props.mymode=='dark'? 'white':'black'}}>
       <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={mytext} onChange={(event)=> setText(event.target.value)}  style={{backgroundColor: props.mymode=='dark'?'#3F4E4F':'white',color: props.mymode=='dark'? 'white':'black'  }} ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={()=>
        {
            const text = mytext.toUpperCase();
            setText(text);
            props.alertHelper("converted to uppercase",'success');

        }}>Convert to uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={()=>
        {
            const text = mytext.toLowerCase();
            setText(text);
            props.alertHelper("converted to lowercase",'success');


        }}>Convert to lowercase</button>
        
        <button type="button" className="btn btn-primary mx-1" onClick={()=>
        {
            navigator.clipboard.writeText(mytext);
            props.alertHelper("Text Copied",'success');

        }}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={()=>
        {
            setText("");
            props.alertHelper("text removed",'success');


        }}>Clear text</button>

         <button type="button" className="btn btn-primary mx-1" onClick={()=>
        {
           speak({text: mytext.toString(),voice : selectedVoice})
            props.alertHelper("Speaking",'success');


        }}>Listen Text</button>


        
         <button type="button" className="btn btn-primary mx-1" onClick={()=>{

            const blob = new Blob([mytext], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = "file1.txt";
            link.href = url;
            link.click();
            props.alertHelper("txt file downloaded",'success');

         }}>Download Text File</button>
        
         <button type="button" className="btn btn-primary mx-1" onClick={()=>{

            const blob = new Blob([mytext], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = "file1.doc";
            link.href = url;
            link.click();
            props.alertHelper("doc file downloaded",'success');

         }}>Download Doc File</button>


        <select className="form-select mt-2" aria-label="Default select example" onChange={(event)=> {setVoice(voices[event.target
            .value])
            console.log(event.target.value);
            console.log(voices[selectedVoice]);
            } }>

       {
            voices.map((element,index)=>
            {
                return <Mycomp item={element.name} obj={index}></Mycomp>
            })
       }
</select>

       

    </div>
    <div className="container" style={{color: props.mymode=='dark'? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p> <span className="badge text-bg-primary">
            {mytext.length==0 && 0}
            
           { mytext.length!=0 &&  helper() 
           }
            
            
        </span> words and <span className="badge text-bg-primary">{mytext.length}</span> characters</p>
        <p><span className="badge text-bg-danger">{0.02 * mytext.split(' ').length}</span> Minutes read</p>
        <h2>Preview</h2>
        <p style={{textAlign:"justify"}} >{mytext}</p>
    </div>
    </>
  )
}

export default TextForm