var e={};e=import.meta.resolve("6zA3s");var a={};a=import.meta.resolve("9fq3a");var t={};t=import.meta.resolve("fm2UA");var r={};r=import.meta.resolve("kfaVU");var l={};l=import.meta.resolve("8Uspr");const i=[{name:"Bluesky",href:"https://bsky.app/profile/nuffle.me",image:new URL(e),label:"@nuffle.me on Bluesky"},{name:"Telegram",href:"https://t.me/dolphinspired",image:new URL(a),label:"@dolphinspired on Telegram"},{name:"Toyhouse",href:"https://toyhou.se/25234327.nuffle-emberdrake",image:new URL(t),label:"Nuffle on Toyhouse"},{name:"Furtrack",href:"https://www.furtrack.com/index/character:nuffle",image:new URL(r),label:"Nuffle on Furtrack"},{name:"Github",href:"https://github.com/dolphinspired",image:new URL(l),label:"dolphinspired on Github"}],m=document.getElementById("navTiles");m&&(m.innerHTML=i.map(e=>`
<div class="page-item-wrap relative">
  <div class="page-item flex-both-center absolute"></div>
  <a target="_blank" class="page-item-each py-10 flex-both-center" href="${e.href}">
    <img class="link-each-image" src="${e.image}" alt="${e.name}"/>
    <span class="item-title text-center">${e.label}</span>
  </a>
</div>
`).join(""));
//# sourceMappingURL=dolphinspired.github.io.118e4f2c.js.map
