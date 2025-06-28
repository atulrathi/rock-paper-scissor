let userscore=0;
let computerscore=0;

let choise=document.querySelectorAll(".choise");
let msg=document.querySelector(".chose");

let userscorephera=document.querySelector('.your');
let compscorephera=document.querySelector('.comp');
let atu=document.querySelector(".ilo")
let khu=document.querySelector(".khu")

//message for game draw 
const gamedraw=()=>{
    msg.innerText="game was draw";
    msg.style.backgroundColor=" darkcyan"
};

// getting the random choise of computer
const gencomputerchoise=()=>{
     const options=["rock","paper","scissor"];
    const randomidx= Math.floor(Math.random()*3);
     return options[randomidx]
};

const playgame=(userchoise)=>{
     const computerchoise=gencomputerchoise();
     checkwinner(userchoise,computerchoise,computerchoise,userchoise);
     }

     //getting the choise of user 
choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise=choise.getAttribute("id");
        playgame(userchoise);
    });
});

//check the winner computer or user with update their score
const checkwinner=(user,computer,computerchoise,userchoise)=>{
    if (user===computer)return gamedraw();
    if(
        (user==="rock" && computer==="scissor")||
        (user==="scissor" && computer==="paper")||
        (user==="paper" && computer==="rock")
    ){
        userscore++;
         userscorephera.innerText=userscore + atu.innerText;
         msg.innerText=`you win! your ${userchoise} beats ${computerchoise}`
         msg.style.backgroundColor="green"
    }else{
        computerscore++;
         compscorephera.innerText=computerscore + khu.innerText ;
         msg.innerText=`you lose!  ${computerchoise} beats your ${userchoise}`;
         msg.style.backgroundColor="red";
    };
};

