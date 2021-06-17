/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let player_score = 0;
let computer_score = 0;
const player_score_name = document.querySelector(".player-score > h1");
const player_score_span = document.getElementById("player_score");
const computer_score_span = document.getElementById("computer_score");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");

// Changing skin colour of playerHand
let color = ["#f7dece","#d1a3a4","#c58c85","#a1665e","#592f2a","#503335"];
const element1 = document.getElementsByClassName('sc1');
for(let i=0;i<element1.length;i++)
{
    element1[i].addEventListener('click', function () {
        playerHand.style.color = color[i];
    });
}

const element2 = document.getElementsByClassName('sc2');
for(let i=0;i<element2.length;i++)
{
    element2[i].addEventListener('click', function () {
        playerHand.style.color = color[i];
    });
}

// Taking player name as input
function dumping1(){
    if(document.f1.first_name1.value==="")
    {
        alert("Please give a proper name!!!");
    }
    else{
        player_score_name.innerHTML = document.f1.first_name1.value+" : ";
    }
}

function dumping2(){
    if(document.f2.first_name2.value==="")
    {
        alert("Please give a proper name!!!");
    }
    else{
        player_score_name.innerHTML = document.f2.first_name2.value+" : ";
    }
}

// Reset function
function reset() {
    player_score=0;
    computer_score=0;
    player_score_name.innerHTML = "Player : ";
    player_score_span.innerHTML = player_score;
    computer_score_span.innerHTML = computer_score;
    computerHand.src = `img/Rock1.png`; 
    playerHand.removeAttribute('class',`fas fa-hand-paper`);
    playerHand.removeAttribute('class',`fas fa-hand-peace`);
    playerHand.setAttribute('class',`fas fa-hand-rock`);
    playerHand.style.color = "#ffde34";
    document.f1.first_name1.value="";
    document.f2.first_name2.value="";
}

// Getting Computer Choice via Random
function getComputerChoice(){
    const choices=['r','p','s'];
    const rand=Math.floor(Math.random()*3);
    return choices[rand];
}

// To update the playerHand
function convert1(letter){
    if(letter==="r") return "rock";
    if(letter==="p") return "paper";
    if(letter==="s") return "peace";
}

// To update the computerHand and display result outputs
function convert2(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissor";
}

// Win, Lose, Draw
function win(player, computer){
    player_score++;
    player_score_span.innerHTML = player_score;
    result_p.innerHTML = convert2(player) + " beats " + convert2(computer) + ". You win!!! 🔥";
}

function lose(player, computer){
    computer_score++;
    computer_score_span.innerHTML = computer_score;
    result_p.innerHTML = convert2(computer) + " beats " + convert2(player) + ". You lost!!! 😟";
}

function draw(){
    result_p.innerHTML = " It's a DRAW !!! 😅";
}

// End Animation
playerHand.addEventListener("animationend", function() {
  this.style.animation = "";
});
computerHand.addEventListener("animationend", function() {
  this.style.animation = "";
});

// Actual game
function game(playerChoice){
    const computerChoice=getComputerChoice();
        setTimeout(() => {   
          //Update Images
          playerHand.removeAttribute('class','fas fa-hand-rock');
          playerHand.setAttribute('class',`fas fa-hand-${convert1(playerChoice)}`);
          computerHand.src = `img/${convert2(computerChoice)}1.png`; 
        switch(playerChoice + computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
        }
    },2000);
    //Animation
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";
    
}

// Main function
function main(){
    let clickActive = 1;
    rock_div.addEventListener('click',function(){
        if(clickActive){
            clickActive=0;
            computerHand.src = `img/Rock1.png`; 
            playerHand.removeAttribute('class',`fas fa-hand-paper`);
            playerHand.removeAttribute('class',`fas fa-hand-peace`);
            playerHand.setAttribute('class',`fas fa-hand-rock`);   
            game("r"); 
            setTimeout(() => {   
                clickActive=1;
            },2000);
        }
    });
    paper_div.addEventListener('click',function(){
        if(clickActive){
            clickActive=0;
            computerHand.src = `img/Rock1.png`; 
            playerHand.removeAttribute('class',`fas fa-hand-paper`);
            playerHand.removeAttribute('class',`fas fa-hand-peace`);
            playerHand.setAttribute('class',`fas fa-hand-rock`);
            game("p");  
            setTimeout(() => {   
                clickActive=1;
            },2000);
        }
    });
    scissor_div.addEventListener('click',function(){
        if(clickActive){
            clickActive=0;
            computerHand.src = `img/Rock1.png`; 
            playerHand.removeAttribute('class',`fas fa-hand-paper`);
            playerHand.removeAttribute('class',`fas fa-hand-peace`);        
            playerHand.setAttribute('class',`fas fa-hand-rock`);
            game("s");
            setTimeout(() => {   
                clickActive=1;
            },2000);
        }
    });
}

// Calling Main function
main();