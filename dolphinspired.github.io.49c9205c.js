const e=new URL(import.meta.resolve("6zA3s"));new URL(import.meta.resolve("bp0VY"));const a=new URL(import.meta.resolve("kfaVU")),t=new URL(import.meta.resolve("8Uspr"));new URL(import.meta.resolve("fFeBZ"));const l=new URL(import.meta.resolve("9fq3a")),r=[{name:"Bluesky",href:"https://bsky.app/profile/nuffle.me",image:e,label:"@nuffle.me on Bluesky"},{name:"Telegram",href:"https://t.me/dolphinspired",image:l,label:"@dolphinspired on Telegram"},{name:"Toyhouse",href:"https://toyhou.se/25234327.nuffle-emberdrake",image:new URL(import.meta.resolve("fm2UA")),label:"Nuffle on Toyhouse"},{name:"Furtrack",href:"https://www.furtrack.com/index/character:nuffle",image:a,label:"Nuffle on Furtrack"},{name:"Github",href:"https://github.com/dolphinspired",image:t,label:"dolphinspired on Github"}],m=document.getElementById("navTiles");m&&(m.innerHTML=r.map(e=>`
<div class="page-item-wrap relative">
  <div class="page-item flex-both-center absolute"></div>
  <a target="_blank" class="page-item-each py-10 flex-both-center" href="${e.href}">
    <img class="link-each-image" src="${e.image}" alt="${e.name}"/>
    <span class="item-title text-center">${e.label}</span>
  </a>
</div>
`).join(""));
//# sourceMappingURL=dolphinspired.github.io.49c9205c.js.map
