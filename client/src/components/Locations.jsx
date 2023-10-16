import styled from "styled-components"
import "./styles.css"

import { useState } from "react"
const Locations=({val,setVal})=>
{
const [clicked,setClicked]=useState(0)
const X=styled.div
`
position:absolute;
top:20px;
right:30px;
font-weight:bold;
font-size:40px;
cursor:pointer;
z-index:99;
`
const Container=styled.div
`

`
const changeX=()=>
{
    setVal(false)
}
return(<div style={{display:val? "inherit" : "none"}} className="Bdy">
    <X onClick={changeX}>X</X>
    <div>
    Locations
    </div>
    </div>)
}
export default Locations