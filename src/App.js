import './index.css';
import Color from './components/Color';
import { useState } from 'react';

function App() {

  const colors = ["red", "yellow", "blue"];
  const [computerSelected, setComputerSelected] = useState(colors[Math.floor(Math.random()*colors.length)])
  const [score, setScore] = useState(0);
  
  return (
    <div className="App">

      <div className="gameDetails">
        <h3>C: {computerSelected}</h3>
        <h3>S: {score}</h3>
      </div>
    

      <div className="gridContainer">
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors}computerSelected = {computerSelected} score={score} setScore={setScore}/>
        <Color color={colors} computerSelected = {computerSelected} score={score} setScore={setScore}/>
      </div>
    </div>
  );
}

export default App;
