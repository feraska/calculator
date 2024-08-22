import { Context } from "@/context/AuthContext"
import React from "react"
import "./result.scss"
const Result = () => {
    const {state} = Context()
    return(
        <div className="result">
            <div className="box">
                <div className="list">
                <div className="header">
                    <span>Your Results</span>
                    <span>Your Results are shown below</span>
                </div>
                <div className="center">
                    <div className="top">
                        <span>Your monthly repayments</span>
                        <span>{state.repaymnet}</span>
                    </div>
                    <hr/>
                    <div className="bottom">
                    <span>Total</span>
                    <span>{state.total}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Result