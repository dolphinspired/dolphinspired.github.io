const e=new URL("https://static.nuffle.me"),a=a=>new URL(a,e),t=[a("site/avatar/avatar1.png"),a("site/avatar/avatar2.png"),a("site/avatar/avatar3.png"),a("site/avatar/avatar4.png"),a("site/avatar/avatar5.png"),a("site/avatar/avatar6.png"),a("site/avatar/avatar7.png"),a("site/avatar/avatar8.png"),a("site/avatar/avatar9.png")],r=[{name:"Bluesky",href:"https://bsky.app/profile/nuffle.me",image:a("site/logo/bluesky.png"),label:"@nuffle.me on Bluesky"},{name:"Telegram",href:"https://t.me/dolphinspired",image:a("site/logo/telegram.png"),label:"@dolphinspired on Telegram"},{name:"Toyhouse",href:"https://toyhou.se/25234327.nuffle-emberdrake",image:a("site/logo/toyhouse.png"),label:"Nuffle on Toyhouse"},{name:"Furtrack",href:"https://www.furtrack.com/index/character:nuffle",image:a("site/logo/furtrack.png"),label:"Nuffle on Furtrack"},{name:"Github",href:"https://github.com/dolphinspired",image:a("site/logo/github.png"),label:"dolphinspired on Github"}],n=document.getElementById("navTiles");n&&(n.innerHTML=r.map(e=>`
<div class="page-item-wrap relative">
  <div class="page-item flex-both-center absolute"></div>
  <a target="_blank" class="page-item-each py-10 flex-both-center" href="${e.href}">
    <img class="link-each-image" src="${e.image}" alt="${e.name}"/>
    <span class="item-title text-center">${e.label}</span>
  </a>
</div>
`).join(""));let l=(()=>{let e=Math.floor(Math.random()*t.length);return t[e]})();const i=document.getElementById("profile-image"),s=document.getElementById("sqek");i&&(i.src=l.href,i.onclick=()=>{let e=(e=>{let a=(t.indexOf(e)+1)%t.length;return t[a]})(l);l=e,i.src=e.href,s&&s.play().catch(e=>{console.error("Error playing sound:",e)})});
//# sourceMappingURL=dolphinspired.github.io.63d11d73.js.map
