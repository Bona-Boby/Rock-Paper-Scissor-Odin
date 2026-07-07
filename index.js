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
function getHumanChoice()
{
    let HumanChoice=prompt("Enter your choice").toUpperCase();
    console.log("Your Choice is - "+HumanChoice);
    return HumanChoice;
}
let HumanScore=0;
let ComputerScore=0;

function PlayRound(ComputerChoice,HumanChoice)
{
    if (HumanChoice==="ROCK" && ComputerChoice==="PAPER")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
        
    

    }
    else if (HumanChoice==="SCISSORS" && ComputerChoice==="ROCK")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
    }
    else if (HumanChoice==="PAPER" && ComputerChoice==="SCISSORS")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You lose!");
        ComputerScore++;
    }
    if (HumanChoice==="PAPER" && ComputerChoice==="ROCK")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You win!");
        HumanScore++;
    }
    else if (HumanChoice==="ROCK" && ComputerChoice==="SCISSORS")
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("You win!");
        HumanScore++;
    }
    else if(HumanChoice===ComputerChoice)
    {
        console.log("Computer's Choice is - "+ComputerChoice);
        console.log("Its a tie");
    }
}
    PlayRound(getComputerChoice(),getHumanChoice());
    PlayRound(getComputerChoice(),getHumanChoice());
    PlayRound(getComputerChoice(),getHumanChoice());
    PlayRound(getComputerChoice(),getHumanChoice());
    PlayRound(getComputerChoice(),getHumanChoice());
    if(HumanScore>ComputerScore)
    {
        console.log("You won for now, I'll get you next time");
    }
    else if(HumanScore===ComputerScore)
    {
        console.log("Its a tie, what a bummer");
    }
    else{
        console.log("Sorry! You lost......loser")
    }


