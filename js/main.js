const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('nav');
if(toggle){toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)})}
const here=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===here)a.setAttribute('aria-current','page')});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const f=document.getElementById('order-form');
if(f){f.addEventListener('submit',e=>{e.preventDefault();const m=document.getElementById('form-msg');
m.textContent=`Thank you, ${f.name.value.trim().split(' ')[0]}! Your order request is in. We'll confirm by email soon.`;
m.classList.add('show');f.reset()})}
