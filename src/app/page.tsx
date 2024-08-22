"use client"
import "./home.scss"
import "../global.scss"
import Calculator from "./components/calculator/Calculator";
import Result from "./components/result/Result";
import Empty from "./components/empty/Empty";
import { Context } from "@/context/AuthContext";

export default function Home() {
  const {state} = Context()
  return (
    <div className="home">
      <section>
      <Calculator/>
      {state.click?<Result/>:<Empty/>}
      </section>
    </div>
  );
}
