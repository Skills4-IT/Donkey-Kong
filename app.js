//Declare variables
let score = 0;
let level = 0;
let donkeyKong = document.getElementById("donkeykong");
let shootingelement = document.getElementById("shootingElement");
function MakeDonkeyKongJump() {
    if(donkeyKong.classList !="animate") {
    donkeyKong.classList.add("animate");
    }
    setTimeout(function ()
    {donkeyKong.classList.remove("animate");},500);
};

let checkDead = setInterval(function() {
  let donkeyKongTop = parseInt(window.getComputedStyle(donkeyKong).getPropertyValue("top"));
  let shootingElementLeft = parseInt(window.getComputedStyle(shootingElement).getPropertyValue("left"));
  jumpedSuccesfullyOverEnemy();
  ShowScore();
  if(shootingElementLeft< 50 && shootingElementLeft>0 && donkeyKongTop >140 ) {
        shootingElement.style.animation = "none";
        shootingElement.style.display = "none";
        alert('You lose');
        location.reload();
    }

},10);


function ChangeBackground() {
  document.getElementById("myImg").src = "hackanm.gif";
}


function jumpedSuccesfullyOverEnemy() {
    score = score + 1;
}
  
  function ShowScore() {
    document.getElementById('score').innerHTML = "Score: " + score;
  }
  

const element = document.getElementById("btnShoot");
element.addEventListener("click", killEnemy);
element.addEventListener("click", ShowScore);






