import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";const t=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),l=document.querySelectorAll(".value"),f=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");t.disabled=!0;h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){t.disabled=e[0]<=Date.now();const o=t.disabled?"Please choose a date in the future!":"Let's go?";y.show({title:t.disabled?"Error":"Success",message:o,position:"topCenter",color:t.disabled?"red":"green"})}});t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!0,l.forEach(o=>o.classList.toggle("end"));const e=setInterval(()=>{const s=new Date(d.value)-Date.now(),{days:i,hours:u,minutes:a,seconds:r}=g(s);f.textContent=n(i),b.textContent=n(u),p.textContent=n(a),S.textContent=n(r),s<1e3&&(l.forEach(c=>c.classList.toggle("end")),clearInterval(e),d.disabled=!1)},1e3)});function g(e){const a=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:c,seconds:m}}function n(e){return`${e}`.padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map