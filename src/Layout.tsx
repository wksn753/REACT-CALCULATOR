import { useState } from "react";

function Layout(){
    const createDigits=()=>{
        const digits=[];
        for(let i=1;i<10;i++){
            digits.push(<button key={i} onClick={()=>updateCalc(i.toString())}>{i}</button>);
        }
        return digits;
    }
    
    
    const [calc, setCalc]=useState("");
    const [result, setResult]=useState("");
    const ops=['/','*','+','-','.'];
    const updateCalc= (value:any)=>{
        if(ops.includes(value)&&calc===''||ops.includes(value)&&ops.includes(calc.slice(-1))){
            return;
        }
        setCalc(calc+value);
        if(!ops.includes(value)){
            setResult(eval(calc+value).toString())
        }
    }
    const calculate=()=>{
        setCalc(eval(calc).toString());
    }
    const deleteLast=()=>{
        if(calc==''){
            return;
        }const value=calc.slice(0,-1);
        setCalc(value);
    }
    return(
        <>
        <div className="App">
            <div className="calculator">
                <div className="display">{result?<span>({result})</span>:''}
                {calc||"0"}
                </div>
                <div className="operators">
                    <button onClick={()=>updateCalc('/')}>/</button>
                    <button onClick={()=>updateCalc('*')}>*</button>
                    <button onClick={()=>updateCalc('-')}>-</button>
                    <button onClick={()=>updateCalc('+')}>+</button>
                    <button onClick={()=>deleteLast()}>DEL</button>
                </div>
                <div className="digits">
                {createDigits()}    
                <button onClick={()=>updateCalc('0')}>0</button>
                <button onClick={()=>updateCalc('.')}>.</button>
                <button onClick={()=>{calculate}}>=</button>
                </div>
            </div>

        </div>
        </>
    );
}
export default Layout;