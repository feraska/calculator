import { actions } from "@/enums/actions"
import React from "react"
export interface data {
    rate:number
    type:string,
    year:number,
    amount:number
}
export interface appState {
    click:boolean,
    repaymnet:number,
    total:number
}
export interface action{
    type:actions,
    payload?:number
}
export interface reducer {
    state:appState,
    dispatch:React.Dispatch<action>
}
export interface children {
    children:React.ReactNode
}