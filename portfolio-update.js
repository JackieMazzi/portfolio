(() => {
  // Keep existing saved edits attached to their original elements.
  const main = document.querySelector('main');
  let n = 0;
  main.querySelectorAll('img,.slot').forEach(el => {
    if (el.matches('.slot') && el.querySelector('img')) return;
    el.dataset.editId ||= `main-image-${n}`; n++;
  });
  n = 0;
  main.querySelectorAll('h1,h2,h3,h4,p,small,figcaption,td,th,.awards li span,.awards li b,.skills-text,.prism-face strong,.author-name,.work-names button>span,.extra-cover-link>span').forEach(el => {
    if (el.querySelector('img') || el.closest('#layout-editor')) return;
    el.dataset.editId ||= `main-text-${n}`; n++;
  });
  document.querySelector('#experience')?.remove();
  const records = document.querySelector('.bio-record');
  records.id = 'experience';
  const entry = document.createElement('article');
  entry.className = 'resume-record';
  entry.innerHTML = '<time>2026.07-2026.08</time><h4 data-edit-id="laites-company">莱特斯家居有限公司</h4><p data-edit-id="laites-description">在本次实习中，我主导前期家居设计工作，通过科学设计调研方案精准覆盖不同年龄段和地域的目标消费群体，在项目执行中，我作为设计团队代表与工程、市场等部门保持高效协作。</p>';
  records.querySelector('h3').after(entry);
  document.querySelectorAll('.extra-cover-link small,.face-5 span,.directory-grid a small').forEach(el => {
    if (/实习/.test(el.textContent)) { el.textContent = '实践经历'; el.dataset.editId = 'practice-label-' + el.closest('a').className; }
  });
})();
