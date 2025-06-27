let btns = document.querySelectorAll(".btn");
let rstbtn = document.querySelector("#rstbtn");
let hdg = document.querySelector("#heading");

let turnX = true;

const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    if(turnX===true){
      btn.innerText='X';
      turnX=false;
    }
    else if(turnX!==true){
      btn.innerText='O';
      turnX=true;
    }
    btn.disabled=true;
    checkwin();
  })
});

const checkwin = (()=>{
  for(pattern of winpatterns){
    if(btns[pattern[0]].innerText!=='' && btns[pattern[1]].innerText!=='' && btns[pattern[2]].innerText!==''){
      if(btns[pattern[0]].innerText===btns[pattern[1]].innerText && btns[pattern[1]].innerText===btns[pattern[2]].innerText){
          rstbtn.innerText='New Game';
          hdg.innerText=`Hooray! ${turnX===true?'Player2':'Player1'} is Winner`;
      }
    }
  }
});

rstbtn.addEventListener('click',()=>{
  rstbtn.innerText='Reset Game';
  hdg.innerText='Tic-Tac-Toe Game';
  btns.forEach((btn)=>{
  btn.innerText='';
  btn.disabled=false;
  })
});