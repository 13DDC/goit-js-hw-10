import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");let a=null,o=null;n.setAttribute("disabled","");const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],a=Date.now(),o<a?(m.error({message:"Введіть дату в майбутньому",position:"topRight"}),n.setAttribute("disabled","")):n.removeAttribute("disabled","")}};n.addEventListener("click",()=>{const t=setInterval(()=>{const e=S(o-Date.now());h.textContent=r(e.days),y.textContent=r(e.hours),b.textContent=r(e.minutes),f.textContent=r(e.seconds),o-Date.now()<=1e3&&(clearInterval(t),s.removeAttribute("disabled",""))},1e3,o,a);n.setAttribute("disabled",""),s.setAttribute("disabled","")});function S(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:c,seconds:u}}function r(t){return t.toString().padStart(2,"0")}l(s,p);
//# sourceMappingURL=commonHelpers.js.map
