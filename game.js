choices = ["rock", "paper", "scissors"]
const decision = {
    rock : "scissors",
    paper : "rock" ,
    scissors : "paper"
}
let history = [];
let person1;
let person2;
let roundNumber =0;
let userScore = 0;
let computerScore = 0;
let gameStarted = false;
function welcomeMessage()
{
    document.getElementById("welcome-message").innerHTML = "<h2>Let's start the game</h2>";
}

function storeValue(userChoice)
{
    gameStarted = true;
    person1 = userChoice;
    person2 = choices[Math.floor(Math.random() * choices.length)];
    clearHistory();
    if(!gameStarted)
    {
        welcomeMessage();
    }
    roundCalculation();
    showChoices(person1,person2);
    gameDecision(person1,person2);
    showScores();
}

function showScores()
{
    document.getElementById("score").innerText = "Your score - " + userScore 
    +"\n  Computer's score - " +computerScore
}

function showChoices(person1,person2)
{
    document.getElementById("choices").innerText = "Your choice - " + person1 
    +"\n  Computer's choice - " +person2
}

function gameDecision(person1,person2)
{
    if(person1 == person2)
    {
        document.getElementById("result").innerHTML = "It's a tie!!"
        history.push({
            Round  : roundNumber,
            status  : "Tie",
            Score : 0
        })
    }
    else if(decision[person1] == person2)
    {
        userScore++;
        document.getElementById("result").innerHTML = "You Won";
        history.push({
            Round  : roundNumber,
            status  : "Win",
            Score : 1
        })
    }
    else
    {
        computerScore++;
        document.getElementById("result").innerHTML = "You Lost";
        history.push({
            Round  : roundNumber,
            status  : "Loss",
            Score : 0
        })
    }

}

function roundCalculation()
{
    roundNumber++;
    document.getElementById("rounds").innerHTML = `<h2>Round - ${roundNumber}</h2>`;
}


function quit()
{
    gameStarted = false;
    roundNumber = 0;
    userScore =0;
    computerScore =0; 
    history = [];
    clearDom() ;
    clearHistory();
}
function clearDom()
{
    document.getElementById("rounds").innerHTML="";
    document.getElementById("choices").innerHTML="";
    document.getElementById("result").innerHTML="";
    document.getElementById("score").innerHTML="";
}

function viewHistory()
{
    clearDom();     
    let historyContainer = document.getElementById("history-container")
    historyContainer.innerHTML = "";
    let table = document.createElement("table"); 
    let rowHeading = document.createElement("tr") 
    let headng1 = document.createElement("th") 
    headng1.innerHTML = "Rounds"
    let headng2 = document.createElement("th") 
    headng2.innerHTML = "Status"
    let headng3 = document.createElement("th") 
    headng3.innerHTML = "Score"
    rowHeading.appendChild(headng1);
    rowHeading.appendChild(headng2);
    rowHeading.appendChild(headng3);
    table.appendChild(rowHeading);
    historyContainer.appendChild(table);


    history.forEach(entry => {
    console.log(entry.status)
    let rowData = document.createElement("tr") 
    
    let headingData1 = document.createElement("td") 
    headingData1.innerHTML = `${entry.Round}`
    let headingData2 = document.createElement("td") 
    headingData2.innerHTML = `${entry.status}`
    let headingData3 = document.createElement("td") 
    headingData3.innerHTML = `${entry.Score}`
    rowData.appendChild(headingData1);
    rowData.appendChild(headingData2);
    rowData.appendChild(headingData3);
    table.appendChild(rowData);
    historyContainer.appendChild(table);
    
    })
}

function clearHistory()
{
    document.getElementById("history-container").innerHTML = "";
}