const game = () => {
    let pscore = 0;
    let cscore = 0;

    //Starting the game
    const startGame=() =>{
        const playBtn = document.querySelector('.front-page button');
        const frontPage=document.querySelector('.front-page');
        const secondPage=document.querySelector('.second-page');
        const hands = document.querySelectorAll('.hands img');

        playBtn.addEventListener('click', ()=>{
            frontPage.classList.add('fadeOut');
            secondPage.classList.add('fadeIn');
        });

        // For removing the animations for the hands otherwise would work only once
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation='';
            });
        });
    };
        //Play Game
        const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener('click',function(){
                // Keeping same rocks while shaking the hands
                playerHand.src="images/rock.png";
                computerHand.src="images/rock.png";

                const winner = document.querySelector('.winner');
                winner.textContent='. . .';

                const computerNumber = Math.floor(Math.random()* 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                setTimeout(() => {
                    // calling comparing hands
                    compareHands(this.textContent,computerChoice); 

                    //udpating images
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerChoice}.png`;
                }, 1350);

                playerHand.style.animation = "shakePlayer 1.5s ease"
                computerHand.style.animation = "shakeComputer 1.5s ease"
            });
        });
    };

    //Updating the scores
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }

    //Comparing hands 
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent='TIE';
            return;
        }

        //Checking for rock
        if (playerChoice == 'rock') {
            if (computerChoice == 'scissors') {
                winner.textContent='Player Win';
                pscore++;
                updateScore();
                return;
            } else {
                winner.textContent='Computer Win';
                cscore++;
                updateScore();
                return;
            }
        }

        //Checking for paper
        if (playerChoice == 'paper') {
            if (computerChoice == 'scissors') {
                winner.textContent='Computer Win';
                cscore++;
                updateScore();
                return;
            } else {
                winner.textContent='Player Win';
                pscore++;
                updateScore();
                return;
            }
        }

        //Checking for scissors
        if (playerChoice == 'scissors') {
            if (computerChoice == 'paper') {
                winner.textContent='Player Win';
                pscore++;
                updateScore();
                return;
            } else {
                winner.textContent='Computer Win';
                cscore++;
                updateScore();
                return;
            }
        }
    }

    // Calling the inner functions
    playMatch();
    startGame();
};

//Start the game function
game();
