document.addEventListener('DOMContentLoaded', function () {
  // mobile menu
  const btn = document.querySelector('.menu'), links = document.querySelector('.links');
  if (btn && links) {
    btn.addEventListener('click', () => btn.setAttribute('aria-expanded', String(links.classList.toggle('open'))));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }
  // headline words light up one by one
  const hl = document.getElementById('hl');
  if (hl) {
    hl.innerHTML = hl.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
    [...hl.children].forEach((w, i) => setTimeout(() => w.classList.add('on'), 300 + i * 140));
  }
  // reveal on scroll
  const io = new IntersectionObserver(e => e.forEach(i => i.isIntersecting && i.target.classList.add('in')), { threshold: .12 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
  // hide sticky bar near the contact block
  const st = document.querySelector('.sticky'), ct = document.querySelector('.cta');
  if (st && ct) new IntersectionObserver(e => st.classList.toggle('hide', e[0].isIntersecting), { threshold: .2 }).observe(ct);
});
