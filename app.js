let pl1Display = document.getElementById("pl1Display"); 
let pl2Display = document.getElementById("pl2Display"); 
let restBtn = document.getElementById("reset"); 
let pl1Btn = document.getElementById("pl1Btn"); 
let pl2Btn = document.getElementById("pl2Btn"); 
let maxScore = document.getElementById("maxScore"); 

let pl1Score =0 ; 
let pl2Score = 0 ; 
let WinScore = 3 ; 
let isGameOver = false ; 

pl1Btn.addEventListener('click', function(){
       if (!isGameOver) {
           pl1Score +=1 ; 
           if(pl1Score == WinScore ){
       
           isGameOver =true ;
           pl1Display.classList.add("winner")
           pl2Display.classList.add("looser");
           pl1Btn.disabled =true;
           pl2Btn.disabled =true;
           }
           pl1Display.textContent = pl1Score ; 
       }

})

pl2Btn.addEventListener('click', function(){
    if (!isGameOver) {
        pl2Score +=1 ; 
        if(pl2Score == WinScore ){
    
        isGameOver =true ;
        pl1Display.classList.add("looser");
        pl2Display.classList.add("winner");
        pl1Btn.disabled =true;
        pl2Btn.disabled =true;
        }
        pl2Display.textContent = pl2Score ; 
    }

})

maxScore.addEventListener("change", function(){
    // alert("change"); 
   WinScore =parseInt(this.value); 
   reset(); 
})
restBtn.addEventListener('click',reset )
  

    function reset(){

        isGameOver =false ; 
        pl1Score = 0 ; 
        pl2Score = 0 ;
        pl1Display.textContent=0 ; 
        pl2Display.textContent=0 ; 
        pl1Display.classList.remove("winner","looser")
        pl2Display.classList.remove("looser","winner")
        pl1Btn.disabled =false;
        pl2Btn.disabled =false;
    }


