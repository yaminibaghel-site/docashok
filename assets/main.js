/* nav toggle */
document.addEventListener('click', function(e){
  const t = e.target.closest('[data-nav]');
  if(t){ document.getElementById('nav').classList.toggle('open'); return; }
  if(!e.target.closest('#nav') && !e.target.closest('[data-nav]')){
    const n=document.getElementById('nav'); if(n) n.classList.remove('open');
  }
});

/* scroll reveal */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* publications filter */
function pubFilter(cat, btn){
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.pubgroup').forEach(g=>{
    g.style.display = (cat==='all' || g.dataset.cat===cat) ? '' : 'none';
  });
}

/* contact form (static, no backend) */
function fakeSubmit(e){
  e.preventDefault();
  const m=document.getElementById('formmsg');
  if(m){ m.textContent='Thank you — please use the email or LinkedIn link above to reach the office directly. This form is illustrative on the static site.'; m.style.display='block'; }
  return false;
}
