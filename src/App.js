import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import Rock from './images/rock.png';
import Scissor from './images/scissor.png';
import Paper from './images/paper.png';
import { useState } from 'react';


const choice = {
  rock : {
    name : "Rock",
    img : Rock,
  },
  scissor : {
    name : "Scissor",
    img : Scissor
  },
  paper : {
    name : "Paper",
    img : Paper
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgement(choice[userChoice], comChoice));

  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 key만 뽑아서 array로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if(user.name === computer.name) {
      return "Tie";
    }else if(user.name == "Rock") {
      return computer.name == "Scissor" ? "Win" : "Lose" 
    }else if(user.name == "Scissor") {
      return computer.name == "Paper" ? "Win" : "Lose" 
    }else if(user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose" 
    }
  }
  return (
  <div>
    <div className='main'>
      <Box className="box_you" title="나" item={userSelect} result={result}/>
      <Box className="box_com" title="컴퓨터" item={comSelect} result={result}/>
    </div>

    <div className='main'>
      {/* 아래와 같이 onClick을 사용하는 이유는 콜백형식으로 함수를 전달해야 함수가 바로 실행되는걸 막기 때문. */}
      <button onClick={() => play("scissor")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </div>
  </div>
  );
}

export default App;
