/* ==========================================
ELEMENTOS PRINCIPAIS
========================================== */

startBtn.addEventListener("click", () => {

intro.style.display = "none";

mainContent.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

if(backgroundMusic){

backgroundMusic.volume = 0;

backgroundMusic.play().catch(err => {
console.log(err);
});

let volume = 0;

const fade = setInterval(()=>{

volume += 0.02;

backgroundMusic.volume = volume;

if(volume >= 0.4){

clearInterval(fade);

}

},100);

}

});

/* ==========================================
LOGIN
========================================== */



/* ==========================================
INICIAR EXPERIÊNCIA
========================================== */

startBtn.addEventListener("click", () => {

intro.style.display = "none";

mainContent.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

/* inicia música */

if(backgroundMusic){

backgroundMusic.volume = 0.4;

backgroundMusic.play().catch(() => {});

}

});

/*Trilha Sonora */

const backgroundMusic =
document.getElementById("backgroundMusic");

function startMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.4;

    backgroundMusic.play()
    .catch(err => {
        console.log("Autoplay bloqueado:", err);
    });

    document.removeEventListener(
        "click",
        startMusic
    );

}

document.addEventListener(
    "click",
    startMusic,
    { once:true }
);



/* ==========================================
ESTRELAS
========================================== */

function createStars(){

const container =
document.getElementById("stars");

if(!container) return;

for(let i=0;i<1500;i++){

const star =
document.createElement("div");

star.classList.add("star");

if(Math.random() > 0.92){

star.classList.add("big");

}

const size =
Math.random() * 3 + 1;

star.style.width =
size + "px";

star.style.height =
size + "px";

star.style.left =
Math.random() * 100 + "%";

star.style.top =
Math.random() * 100 + "%";

star.style.animationDelay =
Math.random() * 3 + "s";

container.appendChild(star);

}

}

/* ==========================================
NEBULOSAS
========================================== */

function createNebulas(){

const container =
document.getElementById("nebula");

if(!container) return;

for(let i=0;i<3;i++){

const nebula =
document.createElement("div");

nebula.classList.add("nebula");

nebula.style.left =
Math.random() * 80 + "%";

nebula.style.top =
Math.random() * 80 + "%";

container.appendChild(nebula);

}

}

/* ==========================================
METEOROS
========================================== */

function createMeteor(){

const meteor =
document.createElement("div");

meteor.classList.add("meteor");

meteor.style.left =
Math.random() * window.innerWidth + "px";

meteor.style.top =
"-150px";

document.body.appendChild(meteor);

setTimeout(() => {

meteor.remove();

},2000);

}

function startMeteorShower(){

setInterval(() => {

createMeteor();

},4000);

}

/* ==========================================
PARALLAX REAL
========================================== */

const starsLayer =
document.getElementById("stars");

const nebulaLayer =
document.getElementById("nebula");

const moonLayer =
document.querySelector(".moon");

let mouseX = 1;
let mouseY = 1;

let currentX = 1;
let currentY = 1;

document.addEventListener("mousemove",(e)=>{

mouseX =
(e.clientX / window.innerWidth) - 0.5;

mouseY =
(e.clientY / window.innerHeight) - 0.5;

});

function animateParallax(){

currentX +=
(mouseX - currentX) * 0.05;

currentY +=
(mouseY - currentY) * 0.05;

if(starsLayer){

starsLayer.style.transform =

`translate(
${currentX * 20}px,
${currentY * 20}px
)`;

}

if(nebulaLayer){

nebulaLayer.style.transform =

`translate(
${currentX * 50}px,
${currentY * 50}px
)`;

}

if(moonLayer){

moonLayer.style.transform =

`translate(
${currentX * 80}px,
${currentY * 80}px
)`;

}

requestAnimationFrame(
animateParallax
);

}

/* ==========================================
CONTADOR
========================================== */

function startCounter(){

const startDate =
new Date("2026-05-30T20:00:00");

setInterval(()=>{

const now =
new Date();

const diff =
now - startDate;

const days =
Math.floor(
diff / (1000*60*60*24)
);

const hours =
Math.floor(
(diff/(1000*60*60)) % 24
);

const minutes =
Math.floor(
(diff/(1000*60)) % 60
);

const seconds =
Math.floor(
(diff/1000) % 60
);

const daysEl =
document.getElementById("days");

const hoursEl =
document.getElementById("hours");

const minutesEl =
document.getElementById("minutes");

const secondsEl =
document.getElementById("seconds");

if(daysEl)
daysEl.textContent = days;

if(hoursEl)
hoursEl.textContent = hours;

if(minutesEl)
minutesEl.textContent = minutes;

if(secondsEl)
secondsEl.textContent = seconds;

},1000);

}

/* ==========================================
EFEITO DE BRILHO NAS ESTRELAS
========================================== */

function pulseStars(){

const stars =
document.querySelectorAll(".star");

setInterval(()=>{

const randomStar =

stars[
Math.floor(
Math.random() *
stars.length
)
];

if(randomStar){

randomStar.animate([

{
transform:"scale(1)"
},

{
transform:"scale(2)"
},

{
transform:"scale(1)"
}

],{

duration:1000

});

}

},300);

}

/* ==========================================
REDIMENSIONAMENTO
========================================== */

window.addEventListener("resize",()=>{

mouseX = 1;
mouseY = 1;

});

/* ==========================================
INICIALIZAÇÃO GERAL
========================================== */

document.addEventListener(
"DOMContentLoaded",
()=>{

createStars();

createNebulas();

startMeteorShower();

animateParallax();

startCounter();

setTimeout(()=>{

pulseStars();

},1000);

});
/* ==========================================
MÁQUINA DE ESCREVER
========================================== */

const storyLines = [

"Nos conhecemos no vôlei da igreja.",

"E, sem que eu soubesse, aquele seria o começo da história mais bonita da minha vida.",

"Quando te vi pela primeira vez, sua beleza chamou minha atenção imediatamente.",

"Mas foi quando comecei a te conhecer que tudo mudou.",

"As nossas conversas duravam horas.",

"E, ainda assim, pareciam passar em apenas alguns minutos.",

"Cada conversa me fazia descobrir uma nova razão para admirar você.",

"Sua inteligência.",

"Seu jeito de enxergar a vida.",

"Seu senso de humor.",

"Sua força diante das dificuldades.",

"Sua dedicação aos seus sonhos.",

"Seu coração.",

"E pouco a pouco percebi que aquilo já não era apenas uma paixão.",

"Era admiração.",

"Era carinho.",

"Era a vontade de ter você em todos os meus amanhãs.",

"Você se tornou alguém que eu admirava profundamente.",

"Minha Calanga ❤️",

"E hoje, quando fecho os olhos e penso no futuro...",

"Eu penso em nós.",

"Na nossa casa cheia de amor.",

"No dia em que vou te esperar no altar.",

"Nas viagens que ainda vamos fazer.",

"Nas conquistas que vamos celebrar juntos.",

"Nos desafios que vamos vencer de mãos dadas.",

"Nos nossos filhos correndo pela casa.",

"Nas histórias que ainda nem aconteceram.",

"E em cada capítulo que ainda vamos escrever juntos.",

"Porque, para mim, o melhor da nossa história ainda está por vir. ❤️"

];

const typingContainer =
document.getElementById("typingText");

const typeSound =
document.getElementById("typeSound");

let typingStarted = false;

let lineIndex = 0;
let charIndex = 0;

let currentText = "";

function typeStory(){

if(!typingContainer) return;

if(lineIndex >= storyLines.length){
return;
}

const currentLine =
storyLines[lineIndex];

if(charIndex < currentLine.length){

currentText +=
currentLine.charAt(charIndex);

typingContainer.innerHTML =

currentText +
'<span class="cursor"></span>';

if(typeSound){

typeSound.currentTime = 0;

typeSound.play().catch(()=>{});

}

charIndex++;

setTimeout(
typeStory,
40
);

}else{

currentText += "<br><br>";

lineIndex++;

charIndex = 0;

setTimeout(
typeStory,
1400
);

}

}

/* ==========================================
INICIAR HISTÓRIA NO SCROLL
========================================== */

function startTypingOnScroll(){

const story =
document.getElementById("story");

if(!story) return;

const position =

story.getBoundingClientRect().top;

if(

position <
window.innerHeight * 0.7

&&

!typingStarted

){

typingStarted = true;

typeStory();

}

}

/* ==========================================
SCROLL REVEAL
========================================== */

const revealElements =

document.querySelectorAll(
".reveal"
);

function revealOnScroll(){

revealElements.forEach(

(element)=>{

const top =

element
.getBoundingClientRect()
.top;

const trigger =

window.innerHeight * 0.85;

if(top < trigger){

element.classList.add(
"active"
);

}

}

);

}

/* ==========================================
TÍTULOS ANIMADOS
========================================== */

const titles =

document.querySelectorAll(
"h2"
);

function revealTitles(){

titles.forEach(

(title)=>{

const top =

title
.getBoundingClientRect()
.top;

if(

top <
window.innerHeight * 0.9

){

title.classList.add(
"active"
);

}

}

);

}

/* ==========================================
CARDS DOS SONHOS
========================================== */

const cards =

document.querySelectorAll(
".card"
);

function revealCards(){

cards.forEach(

(card,index)=>{

const top =

card
.getBoundingClientRect()
.top;

if(

top <
window.innerHeight * 0.85

){

setTimeout(()=>{

card.classList.add(
"active"
);

},index * 250);

}

}

);

}

/* ==========================================
CONSTELAÇÃO
========================================== */

function createConstellation(){

const area =

document.getElementById(
"constellationArea"
);

if(!area) return;

/* estrelas */

const points = [

{x:12,y:55},
{x:18,y:35},
{x:28,y:25},
{x:40,y:20},
{x:52,y:30},
{x:60,y:45},
{x:68,y:38},
{x:75,y:25},
{x:85,y:40}

];

points.forEach(point=>{

const star =

document.createElement(
"div"
);

star.classList.add(
"constellation-star"
);

star.style.left =
point.x + "%";

star.style.top =
point.y + "%";

area.appendChild(
star
);

});

/* linhas */

for(

let i = 0;

i < points.length - 1;

i++

){

const line =

document.createElement(
"div"
);

line.classList.add(
"constellation-line"
);

const p1 =
points[i];

const p2 =
points[i+1];

const x1 =
p1.x * 10;

const y1 =
p1.y * 6;

const x2 =
p2.x * 10;

const y2 =
p2.y * 6;

const distance =

Math.sqrt(

Math.pow(
x2 - x1,
2
)

*

Math.pow(
y2 - y1,
2
)

);

const angle =

Math.atan2(
y2-y1,
x2-x1
)

* 180

/

Math.PI;

line.style.left =
x1 + "px";

line.style.top =
y1 + "px";

line.style.width =
distance + "px";

line.style.transform =

`rotate(${angle}deg)`;

area.appendChild(
line
);

}

}

/* ==========================================
ESTRELAS EXTRAS
========================================== */

function createSkySparkles(){

const area =

document.getElementById(
"constellationArea"
);

if(!area) return;

for(let i=0;i<50;i++){

const star =

document.createElement(
"div"
);

star.classList.add(
"constellation-star"
);

star.style.width =
"4px";

star.style.height =
"4px";

star.style.left =
Math.random()*100 + "%";

star.style.top =
Math.random()*100 + "%";

star.style.opacity =
Math.random();

area.appendChild(
star
);

}

}

/* ==========================================
EVENTOS DE SCROLL
========================================== */

window.addEventListener(

"scroll",

()=>{

startTypingOnScroll();

revealOnScroll();

revealTitles();

revealCards();

}

);

/* ==========================================
INICIALIZAÇÃO
========================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

createConstellation();

createSkySparkles();

revealOnScroll();

revealTitles();

revealCards();

}

);
/* ==========================================
CARTA ANTIGA
========================================== */

const openLetterBtn =
document.getElementById(
"openLetter"
);

const letterContainer =
document.getElementById(
"letterContainer"
);

if(openLetterBtn){

openLetterBtn.addEventListener(
"click",
()=>{

letterContainer.classList.add(
"open"
);

createPetalRain();

}

);

}

/* ==========================================
PÉTALAS CAINDO
========================================== */

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌸";

petal.style.left =
Math.random()*100 + "%";

petal.style.top =
"-50px";

petal.style.fontSize =
(15 + Math.random()*25)

* "px";

petal.style.setProperty(

"--drift",

(Math.random()*300-150)

* "px"

);

const duration =

6 + Math.random()*5;

petal.style.animationDuration =
duration + "s";

document.body.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

},duration*1000);

}

function createPetalRain(){

for(let i=0;i<60;i++){

setTimeout(()=>{

createPetal();

},i*120);

}

}

/* ==========================================
PARTÍCULAS DE CORAÇÃO
========================================== */

const heartContainer =
document.getElementById(
"heartContainer"
);

const heartSymbols = [

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"💞",
"💓",
"✨",
"⭐",
"🌙"

];

function createHeart(){

if(!heartContainer) return;

const heart =
document.createElement(
"div"
);

heart.classList.add(
"heart"
);

heart.innerHTML =

heartSymbols[
Math.floor(
Math.random() *
heartSymbols.length
)
];

heart.style.left =
Math.random()*100 + "%";

heart.style.top =
"100vh";

heart.style.fontSize =

(15 + Math.random()*35)

* "px";

const duration =

8 + Math.random()*8;

heart.style.animationDuration =

duration + "s";

heart.style.setProperty(

"--drift",

(Math.random()*300-150)

* "px"

);

heartContainer.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},duration*1000);

}

function startHeartParticles(){

setInterval(()=>{

createHeart();

},600);

}

/* ==========================================
EXPLOSÃO DE AMOR
========================================== */
function createHeartBurst(x,y){

const symbols = [

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"💞",
"💓",
"✨",
"⭐"

];

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =

symbols[
Math.floor(
Math.random() *
symbols.length
)
];

heart.style.left =
x + "px";

heart.style.top =
y + "px";

const angle =
Math.random() * Math.PI * 2;

const distance =
100 + Math.random() * 350;

heart.animate([

{
transform:
"translate(0,0) scale(.5)",
opacity:1
},

{
transform:

`translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)

scale(2)`,

opacity:0
}

],{

duration:2000,

easing:"ease-out"

});

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},2000);

}

/* ==========================================
CLIQUE GLOBAL
========================================== */

document.addEventListener(
"click",
(e)=>{

for(let i=0;i<15;i++){

setTimeout(()=>{

createHeartBurst(
e.clientX,
e.clientY
);

},i*25);

}

}
);

/* ==========================================
BOTÃO ❤️
========================================== */

const loveExplosionBtn =
document.getElementById("loveExplosion");

if(loveExplosionBtn){

loveExplosionBtn.addEventListener("click",()=>{

for(let i=0;i<1500;i++){

setTimeout(()=>{

const angle =
Math.random() * Math.PI * 2;

const distance =
100 + Math.random() * 500;

const x =
(window.innerWidth / 2) +
Math.cos(angle) * distance;

const y =
(window.innerHeight / 2) +
Math.sin(angle) * distance;

createHeartBurst(
x,
y
);

},i * 3);

}

});

}


/* ==========================================
MENSAGEM SECRETA
========================================== */

const secretMessage =

document.getElementById(
"secretMessage"
);

function unlockSecretMessage(){

if(secretMessage){

secretMessage.classList.add(
"show"
);

}

}

setTimeout(

unlockSecretMessage,

60000

);

/* ==========================================
EFEITO ESTRELA CADENTE EXTRA
========================================== */

function createPremiumMeteor(){

const meteor =
document.createElement(
"div"
);

meteor.classList.add(
"meteor"
);

meteor.style.left =

Math.random()
*
window.innerWidth

* "px";

meteor.style.top =

Math.random()*200

* "px";

meteor.style.height =

(120 + Math.random()*100)

* "px";

document.body.appendChild(
meteor
);

setTimeout(()=>{

meteor.remove();

},2000);

}

function startPremiumMeteors(){

setInterval(()=>{

if(Math.random() > 0.4){

createPremiumMeteor();

}

},3000);

}

/* ==========================================
ASSINATURA ANIMADA
========================================== */

function animateSignature(){

const signature =

document.getElementById(
"signature"
);

if(!signature) return;

signature.animate([

{

opacity:0,

transform:
"translateX(-50px)"

},

{

opacity:1,

transform:
"translateX(0)"

}

],{

duration:3000,

fill:"forwards"

});

}

/* ==========================================
EFEITO DE DIGITAÇÃO FINAL
========================================== */

function finalLoveMessage(){

const finalSection =

document.getElementById(
"finalSection"
);

if(!finalSection) return;

finalSection.animate([

{

opacity:.5

},

{

opacity:1

}

],{

duration:2500,

iterations:Infinity,

direction:"alternate"

});

}

/* ==========================================
INICIALIZAÇÃO FINAL
========================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

startHeartParticles();

startPremiumMeteors();

animateSignature();

finalLoveMessage();

}

);

