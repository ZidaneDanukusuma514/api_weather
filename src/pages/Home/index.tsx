import * as React from "react";
import style from "./index.module.css";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex flex-col items-center bg-slate-200 justify-center h-screen ">
      <h1
        className={`${style.title} text-3xl bg-clip-text text-transparent font-extrabold pb-6 `}
      >
        Weather App
      </h1>
      <div className="rounded-xl shadow-lg bg-slate-100 w-2/3 h-3/4"></div>
    </div>
  );
}
