// Toggle siang/malam
const btn = document.getElementById("toggleMode");
btn.addEventListener("click", ()=>{
  document.body.classList.toggle("day");
  btn.textContent = document.body.classList.contains("day") ? "☀️" : "🌙";
});

// Latar bintang
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars=[];
function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  stars = Array.from({length:100}, ()=>({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.5,
    a:Math.random(), s:Math.random()*0.02+0.005
  }));
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const st of stars){
    st.a+=st.s; if(st.a>1){st.a=0;st.x=Math.random()*canvas.width;st.y=Math.random()*canvas.height;}
    ctx.beginPath();
    ctx.arc(st.x,st.y,st.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${st.a})`;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
window.addEventListener("resize",resize);
resize(); draw();

// ====== Latar bintang ======
const canvas = document.getElementById("stars");
if (canvas){
  const ctx = canvas.getContext("2d");
  let stars = [];
  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(120);
  }
  function createStars(n){
    stars = Array.from({length:n}, ()=>({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*1.5,
      a: Math.random(),
      s: Math.random()*0.02+0.005
    }));
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (const st of stars){
      st.a += st.s;
      if (st.a > 1){ st.a = 0; st.x=Math.random()*canvas.width; st.y=Math.random()*canvas.height; }
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${st.a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  resize(); draw();
}
}

window.addEventListener("load", scatterCards);
window.addEventListener("resize", scatterCards);

// === TOGGLE MODE SIANG/MALAM ===
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("day");
  toggleBtn.textContent = document.body.classList.contains("day") ? "☀️" : "🌙";
});

// === TYPEWRITER ANIMASI CAPTION ===
function typeWriter(element) {
  const text = element.getAttribute("data-text");
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 80); // kecepatan ketik
    }
  }
  typing();
}

// === BACKGROUND BINTANG KELAP-KELIP ===
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha > 1) {
      star.alpha = 0;
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

createStars(120);
animateStars();
