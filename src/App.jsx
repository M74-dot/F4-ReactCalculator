import React, { useState } from "react";

const App = () => {
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [errorMsg,setErrorMsg] = useState("");
  const [result,setResult] = useState("");

  const validate = (num1,num2) =>{
    // console.log(num1,num2);
    if(num1.trim()==="" || num2.trim()==="")return false;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if(isNaN(n1) || isNaN(n2))return false;
    return true;
  }
  const handleCalculation = (op) =>{
    setErrorMsg("");
    setResult("");

    if (!validate(num1, num2)) {
      setErrorMsg(
        <>
          <span className="text-red-500">Error!</span><br />
          Please enter a valid number.
        </>
      );
      return;
    }
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let res;
    switch(op){
      case "+":
        res = n1+n2;
        break;
      case "-":
        res=n1-n2;
        break;
      case "*":
        res=n1*n2;
        break;
      case "/":
        if(n2===0){
          setErrorMsg(
            <>
              <span className="text-red-500">Error!</span><br/>
              Division by zero is not allowed.
            </>
          )
          return;
        }
        res=n1/n2;
        break;
      default:
        break;
    }

    setResult(
      <>
        <span className="text-blue-500">Success!</span><br />
        Result - {res}
      </>
    )
  }
  return(
    <div className="max-w-md rounded-2xl mx-auto h-auto mt-[100px] shadow-custom p-[50px]">
      <div className="flex flex-col items-center w-[250px] m-auto">
        <h1 className="text-3xl font-bold align-center">React Calculator</h1>
        <input 
          type="text" 
          placeholder="Num 1" 
          className="mt-5 px-5 py-2 border border-black w-full"
          value={num1}
          onChange={(e)=>{
            setNum1(e.target.value)
          }}  
        />
        <br/>
        <input 
          type="text" 
          placeholder="Num 2" 
          className="px-5 py-2 border border-black w-full"
          value={num2}
          onChange={(e)=>{
            setNum2(e.target.value)
          }}  
        />
      </div>
        <div className="flex justify-between mt-5 w-[250px] m-auto">
          <button  
            className="bg-black font-bold text-white p-5 m-2 text-white"
            onClick={()=>handleCalculation("+")}
          >
            +
          </button>
          <button 
            className="bg-black font-bold text-white p-5 m-2 text-white"
            onClick={()=>handleCalculation("-")}
          >
            -
          </button>
          <button 
            className="bg-black font-bold text-white p-5 m-2 text-white"
            onClick={()=>handleCalculation("*")}
            >
              *
            </button>
          <button 
            className="bg-black font-bold text-white p-5 m-2 text-white"
            onClick={()=>handleCalculation("/")}
          >
            /
          </button>
        </div>
        <p className="font-bold text-lg text-center mt-5 break-words">{errorMsg}</p>
        <p className=" font-bold text-lg text-center mt-5 break-words">{result}</p>
      </div>
  )
}

export default App;