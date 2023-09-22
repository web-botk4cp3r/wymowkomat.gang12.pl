let listaWymowek =[
    "spałem do 15 i już dzisiaj się nie opłaca ale jutro będzie na 100% TROLL",
    "wczoraj byłem na rowerze i jestem zmęczony",
    "dzisiaj bez strima aok",
    "*brak info*",
    "o 14 odpalam tftf",
    "dzisiaj gram w ligę",
    "idę dronować",
    "strima nie ma ale macie shota na yt",
    "nie ma mnie w olsztynie",
    "Dopiero wstałem...",
    "niedziela dzień święty",
    "ostatnie 3 dni były streamy to dzisiaj bez",
    "tydzień bez strima jak coś",
    "pojechałem do warszawy",
    "jestem chory sadge",
    "wieczorem może będzie jakiś ninja stream",
    "nagrywam vloga",
    "miał być jeden rankedzik a tu 22. Do jutra widzowie",
    "pospałem jak nigdy. Stream jutro!",
    "pospałem jak nigdy. Stream jutro!",
    "czekam na kuriera bo zamówiłem nowe buciki"
];

let button = document.querySelector(".gamba-button");
let wymowki = document.querySelector(".wymowki");
let winner= document.querySelector(".winner");
let losAgain = document.querySelector(".los-next");
let cooldown = 0;
let listaWymowekCount = listaWymowek.length;
let winnerMsg="";
let result = document.querySelector("#wymowka");
let losersAll=document.querySelectorAll(".gamba-el");
let copy = document.querySelector(".los-copy");
var audio = new Audio("open.mp3");

function losuj(){
    let x;
    let y=0;
    for(x=0;x<21;x++){
        y=Math.floor(Math.random() * listaWymowekCount);
        if(x!=18){
            losersAll[x].innerHTML=listaWymowek[y];
        }
        else{
            losersAll[x].innerHTML=listaWymowek[y];
            winnerMsg=listaWymowek[y];
        }
        //if(y==54){console.log(y);};
    }
    result.innerHTML=winnerMsg;
}
losuj();

button.addEventListener('click',  async function(){
    button.classList.toggle("gamba-button-click");
    setTimeout(function(){
        button.classList.toggle("gamba-button-click");
    },200);
});
function StartCooldown(){
    console.log("nie tak szybko kurwa...");
    setTimeout(function(){cooldown=0},6000);
}
button.addEventListener('click', async function(){
        if(cooldown === 0){
            audio.play();
            wymowki.classList.toggle("wymowki-done");
            cooldown = 1; 
            StartCooldown();
            setTimeout(function(){winner.classList.toggle("winner-picked");},5000);
        }
});
copy.addEventListener("click", function(){
    navigator.clipboard.writeText(winnerMsg);
});
losAgain.addEventListener("click", function(){
    winner.classList.toggle("winner-picked");
    wymowki.classList.remove("wymowki-done");
    setTimeout(function(){losuj();},250)
    
});