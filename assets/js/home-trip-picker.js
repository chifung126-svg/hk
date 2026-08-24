(()=>{
  const actions=document.querySelector('.hero-actions');
  if(!actions||document.querySelector('#home-trip-picker')) return;
  const form=document.createElement('form');
  form.className='home-trip-picker';
  form.id='home-trip-picker';
  form.setAttribute('aria-label','快速選擇 eSIM 方案');
  form.innerHTML='<div class="home-trip-field"><label for="home-trip-destination">旅行目的地</label><select id="home-trip-destination"><option value="/jpesim/">日本</option><option value="/china/">中國內地</option><option value="/thailand/">泰國</option><option value="/korea/">韓國</option><option value="/taiwan/">台灣</option><option value="/europe/">歐洲</option><option value="/apac/">亞太多地</option><option value="/world/">全球多地</option></select></div><div class="home-trip-field"><label for="home-trip-data">流量需要</label><select id="home-trip-data"><option>每日 1GB</option><option>每日 2GB</option><option>每日 3GB</option><option>無限／MAX</option></select></div><div class="home-trip-field"><label for="home-trip-days">旅程日數</label><select id="home-trip-days"><option>1–3 日</option><option>4–7 日</option><option>8–15 日</option><option>16 日以上</option></select></div><button class="home-trip-submit" type="submit">查看方案 →</button>';
  actions.insertAdjacentElement('afterend',form);
  form.addEventListener('submit',event=>{event.preventDefault();const path=form.querySelector('#home-trip-destination')?.value;if(path) location.href=path;});
})();
