let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const playGame = (userChoice) => {
    console.log("User Interface = " + userChoice)
    const compChoice = genCompChoice()
    console.log("Comp Interface = " + compChoice)

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner (userWin,userChoice,compChoice);
    }
};

const drawGame = () =>{
    console.log("Game was Draw");   
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "Black";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        console.log(`You win. Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore ;
        console.log(`You lost. ${compChoice} beats your ${userChoice}`);
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const genCompChoice = () =>{
    const options = ["Rock","Paper","Scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}
    
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});