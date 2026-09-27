 function getComputerChoice()
{
    let ComputerChoice=Math.floor(Math.random()*3);
    if(ComputerChoice===1)
    {
        ComputerChoice="ROCK";
    }
    else if(ComputerChoice===0)
    {
        ComputerChoice="PAPER";
    }
    else
    {
        ComputerChoice="SCISSORS";
    }
    return ComputerChoice;

}
const button1=document.createElement("button");
const button2=document.createElement("button");
const button3=document.createElement("button");
document.body.append(button1,button2,button3);

button1.textContent="ROCK";
button2.textContent="PAPER";
button3.textContent="SCISSORS";
button1.addEventListener("click",getHumanChoice);
button2.addEventListener("click",getHumanChoice);
button3.addEventListener("click",getHumanChoice);

function getHumanChoice(event)  
{
    let HumanChoice=event.target.textContent;
    console.log("Your Choice is - "+HumanChoice);
    PlayRound(getComputerChoice(),HumanChoice);
}
let HumanScore=0;
let ComputerScore=0;
const result = document.getElementById("result");
function Result(HumanChoice,ComputerChoice)
{
    result.textContent="Your Choice is - "+HumanChoice+" and Computer's Choice is - "+ComputerChoice + "\n and the score is - Human: "+HumanScore+" Computer: "+ComputerScore;
}
let Round=0;
function PlayRound(ComputerChoice,HumanChoice)
{   


    Round++;
    if (HumanChoice==="ROCK" && ComputerChoice==="PAPER")
    {
        const ComputerChoiceText=document.createTextNode("Computer's Choice is - "+ComputerChoice);

        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
        Result(HumanChoice,ComputerChoice);
        
    

    }
    else if (HumanChoice==="SCISSORS" && ComputerChoice==="ROCK")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
        Result(HumanChoice,ComputerChoice);
    }
    else if (HumanChoice==="PAPER" && ComputerChoice==="SCISSORS")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
        Result(HumanChoice,ComputerChoice);
    }
    if (HumanChoice==="PAPER" && ComputerChoice==="ROCK")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You win!");
        HumanScore++;
        Result(HumanChoice,ComputerChoice);
    }
    else if (HumanChoice==="ROCK" && ComputerChoice==="SCISSORS")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You win!");
        HumanScore++;
        Result(HumanChoice,ComputerChoice);
    }
    else if(HumanChoice===ComputerChoice)
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("Its a tie");
        Result(HumanChoice,ComputerChoice);
    }
    else if (HumanChoice==="SCISSORS" && ComputerChoice==="PAPER")
{
    console.log("Computer's Choice is - "+ComputerChoice);
    console.log("You win!");
    HumanScore++;
    Result(HumanChoice,ComputerChoice);
}
    if (Round===5)
    {
         if(HumanScore>ComputerScore)
    {

        const resultDiv=document.getElementById("result");
        resultDiv.textContent="You won for now, I'll get you next time";
    }
    else if(HumanScore===ComputerScore)
    {
    
        const resultDiv=document.getElementById("result");
        resultDiv.textContent="Its a tie, what a bummer";
    }
    else{
    
        const resultDiv=document.getElementById("result");
        resultDiv.textContent="Sorry! You lost......loser";
    }

      button1.disabled = true;
      button2.disabled = true;
      button3.disabled = true;









    }
}
    
   