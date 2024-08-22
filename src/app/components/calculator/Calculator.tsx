import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useRef, useState } from "react"
import "./calculator.scss"
import Image from "next/image"
import { Context } from "@/context/AuthContext"
import { actions } from "@/enums/actions"
import { data } from "@/interfaces/appState"
const Calculator = () => {
    const {dispatch} = Context()
    const [error,setError] = useState(false)
    
    const [data,setData] = useState<data>({
        rate:0,
        type:"",
        year:0,
        amount:0
    })
    const checkValues = (data:data)=> {
        console.log(data)
        if(data.amount === 0) {
            return false
        }
        if(data.type === "") {
            return false
        }
        if(data.year === 0) {
            return false
        }
        if(data.rate === 0) {
            return false
        }
        return true
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
    const handleClick = (e:FormEvent) => {
        e.preventDefault()
        if(!checkValues(data)) {
            setError(true)
            return
        } 
        setError(false)
        
        dispatch({type:actions.click})
        let rep,total
        if(data.type === "repayment") {
            rep = data.amount*data.rate*data.year*2
            total = data.amount*data.rate*data.year*2
        } else {
            rep = data.amount*data.rate*data.year
            total = data.amount*data.rate*data.year
        }
        dispatch({type:actions.getRepaymnet,payload:rep})
        dispatch({type:actions.getTotal,payload:total})
    }
    const handleRadio = (type:string) => {
        setData({...data,type})
    }
    const clear = () => {
     setData({
        rate:0,
        type:"",
        year:0,
        amount:0
     })
    }
    return(
        <div className="calculator">
            <div className="box">
              <div className="list">

                <div className="header">
                    <span>Mortage Calculator</span>
                    <span onClick={clear}>Clear All</span>
                </div>
                <div className="form">
                    <form onSubmit={handleClick} >
                        <div className="column">
                            <label>Mortage Amount</label>
                            <div className={`euro ${!data.amount?"errBorder":""}`}>
                                <span className={!data.amount?"errBox":""}>£</span>
                                <input value={!data.amount?"":data.amount}  type="number"  name="amount" onChange={handleChange} />
                            </div>
                            {!data.amount&&<span className={"errMsg"}>the field is required</span>}
                            </div>
                            <div className="yearRate">
                            <div className="column">
                            <label>Mortage Team</label>
                            <div className={`year ${!data.year?"errBorder":""}`}>
                            <input value={!data.year?"":data.year} type="number"  name="year" onChange={handleChange}/>
                                <span className={!data.year?"errBox":""}>Years</span>
                              
                            </div>
                            {!data.year&&<span className={"errMsg"}>the field is required</span>}
                        </div>

                        <div className="column">
                            <label>interest Rate</label>
                            <div className={`rate ${!data.rate?"errBorder":""}`}>
                            <input value={!data.rate?"":data.rate} type="number"  name="rate" onChange={handleChange}/>
                                <span className={!data.rate?"errBox":""}>%</span>
                               
                            </div>
                            {!data.rate&&<span className={"errMsg"}>the field is required</span>}

                        </div>

                        </div>
                        <div className="column">
                            <label>Mortgage Rate</label>
                            <div className="rd">
                            <div className={`radio ${data.type==="repayment"?"active":""}`} >
                            <input type="radio"  name="type" onChange={()=>(handleRadio("repayment"))}/>
                                <span>Repaymnet</span>
                                
                            </div>
                            <div className={`radio ${data.type==="interest"?"active":""}`}>
                            <input type="radio"  name="type" onChange={()=>handleRadio("interest")}/>
                                <span>Interest Only</span>
                                
                            </div>
                            
                            </div>
                            {!data.type&&<span className={"errMsg"}>the field is required</span>}

                            </div>
                            <button type="submit">
                                <Image alt="" src={"/images/icon-calculator.svg"} width={100} height={100} />
                                <label>Calculate Repayment</label>
                            </button>
                    </form>
                </div>
                </div>  
            </div>
        </div>
    )
}
export default Calculator