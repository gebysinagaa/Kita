// Toggle mode siang/malam
const btn = document.getElementById("toggleMode");
btn.addEventListener("click", ()=>{
  document.body.classList.toggle("day");
  btn.textContent = document.body.classList.contains("day") ? "☀️" : "🌙";
});

// Latar bintang
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars(120);
}
function createStars(n){
  stars = Array.from({length:n}, ()=>({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.5,
    a:Math.random(),
    s:Math.random()*0.02+0.005
  }));
}
function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const st of stars){
    st.a+=st.s;
    if(st.a>1){st.a=0;st.x=Math.random()*canvas.width;st.y=Math.random()*canvas.height;}
    ctx.beginPath();
    ctx.arc(st.x,st.y,st.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${st.a})`;
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}
window.addEventListener("resize",resizeCanvas);
resizeCanvas(); animateStars();

// === Musik kontrol kupu-kupu ===
const music = document.getElementById("backsound");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = true;

// tambahkan glow saat play
musicBtn.classList.add("glow");

musicBtn.addEventListener("click", ()=>{
  if(isPlaying){
    music.pause();
    musicBtn.style.opacity = "0.6"; 
    musicBtn.classList.remove("glow");
  } else {
    music.play();
    musicBtn.style.opacity = "1";
    musicBtn.classList.add("glow");
  }
  isPlaying = !isPlaying;
});
    
