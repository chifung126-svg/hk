(()=>{
  if(location.pathname!=='/')return;
  const nav=document.querySelector('.navlinks');
  if(nav&&!nav.querySelector('a[href="/help/"]')){
    const link=document.createElement('a');link.href='/help/';link.textContent='Help Center';link.className='home-help-link';nav.insertBefore(link,nav.querySelector('.help')||null)
  }
  const setup=document.querySelector('#setup .section-head p');
  if(setup&&!setup.querySelector('a[href="/help/"]')){
    const link=document.createElement('a');link.href='/help/';link.textContent='Help Center：規格、安裝及排障 →';link.className='home-help-cta';link.style='display:inline-flex;margin-left:10px;color:var(--green-dark);font-weight:950';setup.append(link)
  }
  if(nav&&!nav.querySelector('.home-content-menu')){
    const menu=document.createElement('details');menu.className='home-content-menu';
    menu.innerHTML='<summary>內容中心</summary><div class="home-content-menu-panel"><a href="/blog/">旅遊指南總覽</a><a href="/help/">Help Center</a><a href="/setup/">iPhone／Android 安裝</a><a href="/help/troubleshooting/">網絡排障 FAQ</a><a href="/blog/japan-esim-guide/">日本 eSIM 指南</a><a href="/blog/japan-hotel-cp-ranking/">日本酒店 CP值排名</a><a href="/blog/mainland-short-trip-esim-guide/">中國內地短途指南</a></div>';
    nav.insertBefore(menu,nav.querySelector('.help')||null)
  }
  const member=nav?.querySelector('a[href*="checkout.easygosim.us/account"]');
  if(member&&nav.lastElementChild!==member)nav.appendChild(member);
})();
