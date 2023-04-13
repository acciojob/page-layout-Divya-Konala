import React from "react";

const Page=(props)=>{
    return <div>
    <h1>{props.header}</h1>
    {props.children}
    <h4>{props.footer}</h4>
    </div>
}

export default Page