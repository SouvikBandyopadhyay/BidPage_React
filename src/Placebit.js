import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Placebit = ({state,setState,text,prevstate,setprevState}) => {
    const [error,seterror]=useState(false);

    let navigate = useNavigate();
    

    const submit_bid= (event)=>{
        if(text){
            if(state==2*prevstate){
            setprevState(state);
            navigate('/placebid1');   
            }
            else{
                seterror(true);
            } 
        }
        else{
            setprevState(state);
            navigate('/placebid1'); 
        }
    }
    const number_changed=(event)=> {    
        setState(event.target.value);  
    }
    return ( 
        <div className='midCont'>
            {text && <div>
                <h1> Bid is created {prevstate}</h1>
                </div>
                }
            <input onChange={number_changed} type="Number" />
            <button onClick={submit_bid}>Submit</button>
            {text && <div>
                <h2> Always Place your bid 2X the previous bid</h2>
                </div>
                }
            
        </div>
     );
}
 
export default Placebit;