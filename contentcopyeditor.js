!function(){const g=["#designCreator-productEditor-title","#designCreator-productEditor-brandName","#designCreator-productEditor-featureBullet1","#designCreator-productEditor-featureBullet2","#designCreator-productEditor-description"],e={"#designCreator-productEditor-featureBullet1":256,"#designCreator-productEditor-featureBullet2":256,"#designCreator-productEditor-description":2e3};let c=!1,d=!1;function f(e){var t=new Event("input",{bubbles:!0});e.dispatchEvent(t)}function h(e){var t;e&&(e.style.height="auto",t=e.scrollHeight+"px",e.style.height=t)}function m(e){let t=e;for(;t&&t.getRootNode&&t.getRootNode().host;)t=t.getRootNode().host;e=t.closest("[id]");return e||null}function v(){var e=document.querySelector("#translation-request-no");e&&!e.checked&&(e.checked=!0,e.dispatchEvent(new Event("change",{bubbles:!0})));{e=()=>{var e=localStorage.getItem("sharedClipboard");if(e)try{const r=JSON.parse(e);for(const o of["en","de","fr","it","es","ja"]){var t=document.getElementById(o);t&&t.querySelectorAll(g.join(", ")).forEach(e=>{var t=e.getAttribute("id");void 0!==r[t]&&(e.value=r[t],f(e),"textarea"===e.tagName.toLowerCase())&&h(e)})}b()}catch(e){}};let t=0;["en","de","fr","it","es","ja"].forEach(e=>{e=document.querySelector(`button.btn.btn-link[aria-controls="${e}"]`);e&&"false"===e.getAttribute("aria-expanded")&&(e.click(),t++)}),e&&0<t?setTimeout(e,500):e&&e()}}function t(l){l&&Object.entries(e).forEach(([e,t])=>{let r=l.querySelector(e);if(r){if(d&&!c&&("#designCreator-productEditor-featureBullet1"===e||"#designCreator-productEditor-featureBullet2"===e)&&"textarea"!==r.tagName.toLowerCase()){const a=r,i=document.createElement("textarea");i.id=a.id,i.className=a.className,i.value=a.value,i.placeholder=a.placeholder||"",i.rows=4,a.removeAttribute("id"),a.style.display="none",a.parentNode.insertBefore(i,a.nextSibling),(n=i)&&(h(n),n.addEventListener("input",function(){h(n)})),i.addEventListener("input",function(){a.value=i.value,f(a)}),r=i}e=r,o=t,e&&!e._charLimitAttached&&(e.addEventListener("input",function(){this.value.length>o&&(this.value=this.value.substring(0,o),f(this));var e,t=this.parentNode.querySelector("small");t&&(e=o-this.value.length,t.textContent=e+" characters remaining",t.style.color=0==e?"#cd103d":"")}),e._charLimitAttached=!0)}var o,n})}function n(e){if(!e)return;var t=e.attachShadow({mode:"open"}),e=e.closest("[id]");const n=e?e.id:"default";var e=document.createElement("style"),e=(e.textContent=`
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Amazon Ember", sans-serif;
          }
          .copy-find-replace {
              width: 100%;
              margin: 0;
              padding: 12px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              min-width: 0px;
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 12.5px;
              box-sizing: border-box;
              justify-content: space-between;
              align-items: flex-start;
          }
          .toolbar {
              display: flex;
              align-items: center;
              width: 100%;
              margin-bottom: 32px;
          }
          .button-group button {
              padding: 12px 48px;
              border: none;
              border-radius: 4px;
              color: white;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              background-color: #470CED;
              margin-right: 4px;
          }
          .button-group button:hover {
              background-color: #2A00A0;
          }
          .toggle-container {
              margin-left: auto;
              display: flex;
              align-items: center;
              gap: 8px;
          }
          .toggle {
              width: 36px;
              height: 18px;
              border-radius: 18px;
              background-color: rgb(207, 212, 212);
              position: relative;
              cursor: pointer;
              transition: background-color 0.3s;
          }
          .toggle.active {
              background-color: #470CED;
          }
          .toggle::after {
              content: '';
              position: absolute;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: white;
              top: 3px;
              left: 3px;
              transition: transform 0.3s;
          }
          .toggle.active::after {
              transform: translateX(18px);
          }
          .header {
              margin-bottom: 24px;
          }
          .header h1 {
              font-size: 14px;
              color: #111;
              margin-bottom: 0px;
          }
          .header p {
              color: #667575;
              font-size: 12px;
          }
          .find-replace-section {
              width: 100%;
              transition: opacity 0.3s, max-height 0.3s;
              max-height: 1000px;
              opacity: 1;
              overflow: hidden;
          }
          .find-replace-section.hidden {
              opacity: 0;
              max-height: 0;
          }
          .find-replace-container {
              display: flex;
              flex-direction: column;
              gap: 24px;
              margin-bottom: 24px;
          }
          .find-replace-row {
              display: grid;
              grid-template-columns: 1fr 1fr auto;
              gap: 16px;
              align-items: flex-end;
          }
          .input-group {
              display: flex;
              flex-direction: column;
              gap: 8px;
          }
          .input-group label {
              font-size: 13px;
              font-weight: 500;
              color: #374151;
          }
          .input-group input[type="text"] {
              padding: 8px 12px;
              border: 1.5px solid #d1d5db;
              border-radius: 2px;
              font-size: 13px;
              transition: border-color 0.2s ease;
          }
          .input-group input[type="text"]:focus {
              outline: none;
              border-color: #470CED;
              border-width: 1.5px;
          }
          .input-group input[type="text"]::placeholder {
              color: #9ca3af;
          }
          .action-button {
              width: 36px;
              height: 36px;
              border: 1pt dashed #d1d5db;
              border-radius: 4px;
              background: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #008296;
              font-size: 14px;
          }
          .action-button img {
              max-width: 16px;
          }
          .action-button.remove {
              color: #ef4444;
          }
          .action-button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }
          .replace-button {
              width: 100%;
              padding: 12px;
              background-color: #470CED;
              color: white;
              border: none;
              border-radius: 4px;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
          }
          .replace-button:hover {
              background-color: #2A00A0;
          }
          @media (max-width: 768px) {
              .find-replace-row {
                  grid-template-columns: 1fr;
              }
              .action-button {
                  margin-top: 8px;
              }
          }
      `,t.appendChild(e),document.createElement("div")),e=(e.className="copy-find-replace",e.innerHTML=`
          <div class="toolbar">
              <div class="button-group">
                  <button class="button primary" id="copyBtn">Copy</button>
                  <button class="button primary" id="pasteBtn">Paste</button>
                  <button class="button primary" id="pasteAllBtn">Paste to All</button>
                  <button class="button primary" id="copyBulletsBtn">Copy Bullets to Description</button>
              </div>
              <div class="toggle-container">
                  <span>Find and replace</span>
                  <div class="toggle" id="toggle"></div>
              </div>
          </div>
          <div class="find-replace-section hidden" id="findReplaceSection">
              <div class="header">
                  <h1>Find and replace</h1>
                  <p>Find and replace keywords easily. Add up to 4 find-and-replace fields.</p>
              </div>
              <div class="find-replace-container" id="findReplaceContainer"></div>
              <button class="replace-button">Replace</button>
          </div>
      `,t.appendChild(e),t.querySelector("#copyBtn")),r=t.querySelector("#pasteBtn"),o=t.querySelector("#pasteAllBtn"),a=t.querySelector("#copyBulletsBtn"),i=t.querySelector("#toggle");const l=t.querySelector("#findReplaceSection"),c=t.querySelector("#findReplaceContainer");t=t.querySelector(".replace-button"),e.addEventListener("click",function(){var e=m(this);if(e)if(e&&e.id){e=e.querySelectorAll(g.join(", "));const r={};e.forEach(e=>{var t=e.getAttribute("id");r[t]=e.value});e=JSON.stringify(r);localStorage.setItem("sharedClipboard",e)}}),r.addEventListener("click",function(){var e=m(this);if(e)if(e&&e.id){var t=localStorage.getItem("sharedClipboard");if(t)try{const r=JSON.parse(t);e.querySelectorAll(g.join(", ")).forEach(e=>{var t=e.getAttribute("id");void 0!==r[t]&&(e.value=r[t],f(e),"textarea"===e.tagName.toLowerCase())&&h(e)}),b()}catch(e){}}}),o.addEventListener("click",v),a.addEventListener("click",function(){var r=m(this);if(r){r=r.querySelector('[id$="description"]');if(r)if(n=r.closest(".col-6.pr-4.pb-3.pl-2")){var o=n.querySelector('[id$="featureBullet1"]'),n=n.querySelector('[id$="featureBullet2"]'),a=o?o.nextElementSibling:null,i=n?n.nextElementSibling:null;let e="",t="";o&&(e=(a&&"textarea"===a.tagName.toLowerCase()?a:o).value.trim()),n&&(t=(i&&"textarea"===i.tagName.toLowerCase()?i:n).value.trim()),e&&!/[.!?]$/.test(e)&&(e+="."),t&&!/[.!?]$/.test(t)&&(t+=".");a=t?e+" "+t:e;r.value=a,f(r),h(r)}}}),e=localStorage.getItem("toggleState_"+n);function d(){var e=c.querySelectorAll(".find-replace-row");const r=[];e.forEach(e=>{var t,e=e.querySelectorAll('input[type="text"]');2<=e.length&&(t=e[0].value.trim(),e=e[1].value.trim(),""===t&&""===e||r.push({find:t,replace:e}))}),localStorage.setItem("findReplacePreferences_"+n,JSON.stringify(r))}function s(e=!1){const t=document.createElement("div");t.className="find-replace-row";var r=document.createElement("div"),o=(r.className="input-group",document.createElement("label")),n=(o.textContent="Find",document.createElement("input")),o=(n.type="text",n.placeholder="e.g., basketball",r.appendChild(o),r.appendChild(n),document.createElement("div")),a=(o.className="input-group",document.createElement("label")),i=(a.textContent="Replace with",document.createElement("input")),a=(i.type="text",i.placeholder="e.g., soccer",o.appendChild(a),o.appendChild(i),document.createElement("button")),l=(a.className="action-button",e||a.classList.add("remove"),document.createElement("img"));return e?(l.src=chrome.runtime.getURL("assets/add-row-ic.svg"),l.alt="Add row"):(l.src=chrome.runtime.getURL("assets/clear.svg"),l.alt="Remove row"),a.appendChild(l),e||a.addEventListener("click",function(){t.remove(),p(),d()}),[n,i].forEach(e=>{e.addEventListener("input",d)}),t.appendChild(r),t.appendChild(o),t.appendChild(a),t}function p(){var e=c.children.length;u.disabled=4<=e}"active"===e&&(i.classList.add("active"),l.classList.remove("hidden")),i.addEventListener("click",function(){this.classList.toggle("active"),l.classList.toggle("hidden"),localStorage.setItem("toggleState_"+n,this.classList.contains("active")?"active":"inactive"),b()});r=localStorage.getItem("findReplacePreferences_"+n);if(r)try{JSON.parse(r).forEach((e,t)=>{var r;0===t?(c.appendChild(s(!0)),2<=(t=c.querySelector(".find-replace-row").querySelectorAll('input[type="text"]')).length&&(t[0].value=e.find,t[1].value=e.replace)):(2<=(r=(t=s()).querySelectorAll('input[type="text"]')).length&&(r[0].value=e.find,r[1].value=e.replace),c.appendChild(t))}),p()}catch(e){}else c.appendChild(s(!0));const u=c.querySelector(".action-button");u.addEventListener("click",function(){c.appendChild(s()),p(),d()}),t.addEventListener("click",function(){var t,o,e=c.querySelectorAll(".find-replace-row");const r=[];e.forEach(e=>{e=e.querySelectorAll('input[type="text"]');2<=e.length&&e[0].value&&e[1].value&&r.push({find:e[0].value,replace:e[1].value})}),0<r.length&&(localStorage.setItem("findReplacePreferences_"+n,JSON.stringify(r)),e=document.getElementById(n),t=r,o=e)&&g.forEach(e=>{const r=o.querySelector(e);r&&t.forEach(e=>{var t=e.find,e=e.replace;""!==t&&(t=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`\\b${t}\\b`,"gi"),e=e.replace(/\$/g,"$$$$"),r.value=r.value.replace(t,e),f(r),"textarea"===r.tagName.toLowerCase())&&h(r)})})})}function b(){var e=document.querySelector("ngb-accordion");e&&(e.querySelectorAll(".form-row").forEach(e=>{var t,r,o;[...e.children].forEach(e=>e.style.flexGrow="1"),(o=(e=e).closest("[id]"))&&o.querySelector(".snap-copy-find-container")||((o=document.createElement("div")).className="snap-copy-find-container",o.style.display="flex",o.style.width="100%",e.insertBefore(o,e.firstChild),n(o),o=e.querySelector(".col-6.pr-2.pb-3.pl-4"),t=e.querySelector(".col-6.pr-4.pb-3.pl-2"),o&&t&&((r=document.createElement("div")).style.display="flex",r.style.width="100%",o.style.width="50%",t.style.width="50%",r.appendChild(o),r.appendChild(t),e.appendChild(r)))}),c||document.querySelectorAll("[id]").forEach(e=>{t(e)}),[{prefix:"prdm-copy-find-",newPrefix:"find-",placeholder:"e.g. T-Shirt"},{prefix:"prdm-copy-replace-",newPrefix:"replace-",placeholder:"e.g. Design or leave empty"}].forEach(n=>{document.querySelectorAll(`textarea[id^="${n.prefix}"]`).forEach(e=>{var t=e.id.substring(n.prefix.length);const r=document.createElement("input"),o=(r.type="text",r.className=e.className,r.id=n.newPrefix+t,r.placeholder=n.placeholder,r.value=e.value,r.style.borderRadius="0.25rem",r.style.border="0px",e.hasAttribute("maxlength")&&(r.maxLength=e.getAttribute("maxlength")),r.id+"_value");t=localStorage.getItem(o);null!==t&&(r.value=t),r.addEventListener("input",()=>{localStorage.setItem(o,r.value)}),e.parentNode.replaceChild(r,e)})}))}function r(){b(),setTimeout(()=>{(document.querySelector(".productor-style-container")||document.querySelector(".productor-manage-menu"))&&(c=!0),d=!0,b()},4e3)}function o(){const e=document.body;if(e){const t=new MutationObserver(()=>{t.disconnect(),b(),t.observe(e,{childList:!0,subtree:!0})});t.observe(e,{childList:!0,subtree:!0})}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>{r(),o()}):(r(),o())}();