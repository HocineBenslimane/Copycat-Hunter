!function(){function i(){if(!document.body.contains(document.querySelector("div.container-fluid")))return setTimeout(i,500);var t=document.querySelector("div.container-fluid").querySelector(".row.mb-4 > .col-3:not(.p-base)");if(!t)return setTimeout(i,500);if(!t.querySelector("#dynamic-align-toggle-button"))return setTimeout(i,300);if(!t.querySelector("#bulk-upload-toggle-button")){var e=document.createElement("div");e.id="bulk-upload-toggle-button",e.style.cssText=`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;
`;const r=document.createElement("div"),a=(r.style.cssText=`
    width: 36px;
    height: 18px;
    border-radius: 18px;
    background-color: rgb(207, 212, 212);
    position: relative;
    transition: background-color 0.3s;
    margin-right: 10px;
`,document.createElement("span")),d=(a.style.cssText=`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.3s;
`,r.appendChild(a),document.createElement("span"));d.style.cssText=`
    font-size: 14px;
    color: rgb(100, 100, 100);
`;{var o=r;var n=a;var l=d;let t=localStorage.getItem("bulkUploadOn");null===t&&(t="true",localStorage.setItem("bulkUploadOn",t)),("true"===t?(o.style.backgroundColor="#470CED",n.style.transform="translateX(18px)",l.textContent="Bulk Upload On",l.style.color="rgb(0, 0, 0)",s):(o.style.backgroundColor="rgb(207, 212, 212)",n.style.transform="translateX(0)",l.textContent="Bulk Upload Off",l.style.color="rgb(100, 100, 100)",u))()}e.addEventListener("click",function(){var t,e,o,n;t=r,e=a,o=d,n=!(n="true"===localStorage.getItem("bulkUploadOn")),localStorage.setItem("bulkUploadOn",n.toString()),(n?(t.style.backgroundColor="#470CED",e.style.transform="translateX(18px)",o.textContent="Bulk Upload On",o.style.color="rgb(0, 0, 0)",s):(t.style.backgroundColor="rgb(207, 212, 212)",e.style.transform="translateX(0)",o.textContent="Bulk Upload Off",o.style.color="rgb(100, 100, 100)",u))()}),e.appendChild(r),e.appendChild(d);o=t.querySelector("#dynamic-align-toggle-button");o&&o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e)}}function u(){var t;document.getElementById("bulk-upload-toggle-style")||((t=document.createElement("style")).id="bulk-upload-toggle-style",t.textContent=`
        #snap-bulk-upload-btn {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `,document.head.appendChild(t))}function s(){var t=document.getElementById("bulk-upload-toggle-style");t&&t.remove()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i();new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&0<t.addedNodes.length&&i()})}).observe(document.body,{childList:!0,subtree:!0});var t=localStorage.getItem("bulkUploadOn");("true"===t||null===t?s:u)()}();