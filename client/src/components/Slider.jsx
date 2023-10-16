import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
function Slider({setKmin,setKmax,type,setYmin,setYmax,setPmin,setPmax}) {
const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
    switch(type)
    {
        case "kilometers":
            {
                setKmin(e.minValue)
                setKmax(e.maxValue)
                break;
            }
        case "year":
            {
                setYmin(e.minValue)
                setYmax(e.maxValue)
                break;
            }
        case "price":
            {
                setPmin(e.minValue)
                setPmax(e.maxValue)
                break;
            }
            default: 
            break;
    }
};

return (
	<div className="App">
		<MultiRangeSlider
			min={type==="kilometers" || type==="price"? 0 : 1950}
			max={type==="kilometers" || type==="price"? 500000 : 2023}
			step={5}
            barInnerColor="black"
            barRightColor="white"
            barLeftColor="white"
            ruler={false}
            label={true}
            subSteps={true}
			minValue={type==="kilometers" || type==="price"? 0 : 1950}
			maxValue={type==="kilometers" || type==="price"? 500000 : 2023}
			onInput={(e) => {

				handleInput(e);
			}}
		/>
	</div>
	);
}

export default Slider;