const message =
"Happy 18th Birthday My Love ❤️";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

function openGift() {

    document.querySelector(".gift-box").style.display = "none";

    document.getElementById("birthdayCard").classList.remove("hidden");

    typeWriter();

    createHearts();

    launchConfetti();

    const music = document.getElementById("music");

    music.play().catch(()=>{});
}

function showLove(){

document.getElementById("loveMessage").classList.remove("hidden");

launchConfetti();

}

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},300);

}

function launchConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.innerHTML=["🎉","✨","🎊","💖","🌸"][Math.floor(Math.random()*5)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(15+Math.random()*25)+"px";

c.style.pointerEvents="none";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform="rotate(720deg)";

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}
