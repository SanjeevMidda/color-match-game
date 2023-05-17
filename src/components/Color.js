import React, { useState } from 'react'

function Color({color, computerSelected, score, setScore}) {

    const [colorSelected, setColorSelected] = useState("");

    function update(e){

        console.log(e.target.style.backgroundColor);
        
        setColorSelected(e.target.style.backgroundColor);

        if(colorSelected === computerSelected){
            setScore(score + 1);
        }
    }

    function randomColor(){
        return color[Math.floor(Math.random()*color.length)]
      }

  return (
    <div className="color" onClick={update}>
        <div className="circle" style={{backgroundColor: randomColor()}}></div>
    </div>
  )
}

export default Color