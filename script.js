// Toggle mode siang/malam
const btn = document.getElementById("toggleMode");
btn.addEventListener("click", ()=>{
  document.body.classList.toggle("day");
  btn.textContent = document.body.classList.contains("day") ? "☀️" : "🌙";
});

// Tab navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.content-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.dataset.tab;
    
    // Remove active from all
    tabBtns.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Add active to clicked
    btn.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
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
const musicImg = musicBtn.querySelector('img');
let isPlaying = true;

musicBtn.addEventListener("click", ()=>{
  if(isPlaying){
    music.pause();
    musicBtn.style.opacity = "0.6"; 
    musicBtn.classList.remove("glow");
    // Optional: Bisa tambahkan efek grayscale saat pause
    musicImg.style.filter = "grayscale(70%)";
  } else {
    music.play();
    musicBtn.style.opacity = "1";
    musicBtn.classList.add("glow");
    musicImg.style.filter = "none";
  }
  isPlaying = !isPlaying;
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe scrapbook pages for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scrapbook-page').forEach(page => {
    page.style.opacity = '0';
    page.style.transform = 'translateY(30px)';
    page.style.transition = 'all 0.6s ease';
    observer.observe(page);
  });
});

// Enhanced interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to gallery cards
  const cards = document.querySelectorAll('.gallery .card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1) rotate(0deg)';
    });
  });
  
  // Add click effects to highlights
  const highlights = document.querySelectorAll('.highlight');
  highlights.forEach(highlight => {
    highlight.addEventListener('click', () => {
      highlight.style.backgroundColor = 'rgba(255, 105, 180, 0.3)';
      setTimeout(() => {
        highlight.style.backgroundColor = '';
      }, 300);
    });
  });
});
