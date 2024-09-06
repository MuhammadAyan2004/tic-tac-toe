let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector(".newBtn");
let msg = document.querySelector(".msg");
let msg1 =document.querySelector("#msg1");
let turnO=true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;


        checkWinner();
    });
});

const disableBoxes = ()=>{
    for (let boz of boxes){
        boz.disabled = true;
    }
};
const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
         box.innerText="";
    }
};

const show= (winner)=>{
    msg1.innerText=`Congratulations, the winner is ${winner}!`;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerHTML;
        let pos2val= boxes[pattern[1]].innerHTML;
        let pos3val= boxes[pattern[2]].innerHTML;

        if(pos1val !="" && pos2val !="" && pos3val!= ""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log(pattern,pos1val);
                show(pos1val);
                break;
                
            }
        }
    }
};
newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);