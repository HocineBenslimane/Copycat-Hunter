function initInjection(){const A=[{name:"POP_SOCKET",injectPosition:"third",class:"product-card",id:"POP_SOCKET-card",editButtonClass:"POP_SOCKET-edit-btn",productDetails:"product-editor",scalablecolorClass:"pop-scalable-color",colorPickerToggle:["https://m.media-amazon.com/images/G/01/gear/designerapp/icons/icon_palette.svg","btn btn-secondary icon"],colorHex:"color-editable-input"},{name:"PHONE_CASE_APPLE_IPHONE",injectPosition:"third",class:"product-card",id:"PHONE_CASE_APPLE_IPHONE-card",editButtonClass:"PHONE_CASE_APPLE_IPHONE-edit-btn",productDetails:"product-editor",scalablecolorClass:"phone-scalable-color",colorPickerToggle:["https://m.media-amazon.com/images/G/01/gear/designerapp/icons/icon_palette.svg","btn btn-secondary icon"],colorHex:"color-editable-input"},{name:"TOTE_BAG",injectPosition:"second",class:"product-card",id:"TOTE_BAG-card",editButtonClass:"TOTE_BAG-edit-btn",productDetails:"product-editor",scalablecolorClass:"tote-scalable-color",colorPickerToggle:["https://m.media-amazon.com/images/G/01/gear/designerapp/icons/icon_palette.svg","btn btn-secondary icon"],colorHex:"color-editable-input"},{name:"THROW_PILLOW",injectPosition:"third",class:"product-card",id:"THROW_PILLOW-card",editButtonClass:"THROW_PILLOW-edit-btn",productDetails:"product-editor",scalablecolorClass:"throw-scalable-color",colorPickerToggle:["https://m.media-amazon.com/images/G/01/gear/designerapp/icons/icon_palette.svg","btn btn-secondary icon"],colorHex:"color-editable-input"}],T=A.map(e=>e.name);function e(){document.querySelectorAll('[id$="-card"]').forEach(e=>{var t=e.id.replace("-card","").toUpperCase();T.includes(t)||(t=e.querySelector(".form-row > .col-6:nth-child(2)"))&&t.querySelectorAll('[class*="scalable-color"]').forEach(e=>e.remove())})}let D=null;function F(e){console.log(),D=e}var t=document.createElement("style");t.textContent=`
      .color-swatch.disabled {
          pointer-events: none;
          opacity: 0.5;
          cursor: not-allowed !important;
          border-color: #d6d6d6 !important;
          transition: opacity 0.2s ease, border-color 0.2s ease;
      }
      .color-swatch.disabled[data-tooltip]:before,
      .color-swatch.disabled[data-tooltip]:after {
          display: none !important;
      }
      .color-swatch.deletable {
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
      }
      .color-swatch.deletable.disabled {
        cursor: not-allowed !important;
        opacity: 0.5;
      }
      .color-swatch.color-applying {
          pointer-events: none;
          opacity: 0.5;
          transition: opacity 0.2s ease;
      }
      .color-swatch.color-applying[data-tooltip]:before,
      .color-swatch.color-applying[data-tooltip]:after {
          display: none !important;
      }
  `,document.head.appendChild(t);const i=(t=!0)=>{document.querySelectorAll(".color-swatch").forEach(e=>{t?e.classList.add("color-applying"):e.classList.remove("color-applying")})},o=(t=!0)=>{document.querySelectorAll(".color-swatch").forEach(e=>{t?(e.classList.add("disabled"),e.draggable=!1):(e.classList.remove("disabled"),e.draggable=!0)}),document.querySelectorAll(".current-to-all-btn").forEach(e=>{t?(e.style.opacity="0.5",e.style.cursor="not-allowed",e.disabled=!0):(e.style.opacity="",e.style.cursor="pointer",e.disabled=!1)})};t=()=>{var e=document.querySelector(".delete-button"),e=e&&"none"!==window.getComputedStyle(e).display&&null!==e.offsetParent;o(!e)};setInterval(t,100);t();async function q(o){console.log(),i(!0);let r=0;try{for(;r<3;)try{r++,console.log();if(!await(async(e=1e3)=>{for(var t=Date.now();Date.now()-t<e;){if("complete"===document.readyState)return!0;await new Promise(e=>setTimeout(e,50))}return!1})())throw new Error("Page not ready after timeout");var a=async(e=2e3)=>{var t=Date.now();let o=0;for(var r=async(e,t=500)=>{for(var o=Date.now();Date.now()-o<t;){var r=document.querySelector(e);if(r)return r;await new Promise(e=>setTimeout(e,50))}return null};Date.now()-t<e;){var a=await r(["button#color-btn.btn.btn-secondary.icon",'button.btn.btn-secondary.icon[id*="color"]','button.btn-secondary.icon[id*="color"]'].join(",")),n=await r('.sketch-picker, div[class*="sketch-picker"]');if(a&&n)return console.log(),{colorButton:a,sketchPicker:n};if(a&&!n&&o<5){console.log(),a.click(),o++;var l=await r(".sketch-picker",300);if(l)return{colorButton:a,sketchPicker:l}}if(5<=o&&!n&&a){console.log(),a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),o=0;l=await r(".sketch-picker",300);if(l)return{colorButton:a,sketchPicker:l}}await new Promise(e=>setTimeout(e,100))}throw new Error("Color picker elements not found")};let e=await a();if(!(e||(console.log(),e=await a())))throw new Error;var n=await(async(e,t=1e3)=>{for(var o=Date.now();Date.now()-o<t;){var r=e.querySelector(".sketch-fields input");if(r)return r;await new Promise(e=>setTimeout(e,50))}throw new Error("Could not find hex input")})(e.sketchPicker);if(!n||!n.offsetParent)throw new Error("Hex input not visible or accessible");var l=o.replace("#","").toUpperCase();if(n.value="",n.dispatchEvent(new Event("input",{bubbles:!0})),await new Promise(e=>setTimeout(e,50)),n.value=l,n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0})),await new Promise(e=>setTimeout(e,100)),n.value.toUpperCase()!==l)throw new Error("Hex value not set correctly");n.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",keyCode:13,bubbles:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,50)),n.dispatchEvent(new KeyboardEvent("keyup",{key:"Enter",code:"Enter",keyCode:13,bubbles:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,150));let t=!1;for(let e=0;e<5;e++){if(await(async()=>{var e=document.querySelector(".color-preview, .color-swatch.selected");if(e){e=(e=>{e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?"#"+e.slice(1).map(e=>{e=parseInt(e).toString(16);return 1===e.length?"0"+e:e}).join("").toUpperCase():null})(window.getComputedStyle(e).backgroundColor);if(e&&e.toUpperCase()===o.toUpperCase())return!0}return!1})()){t=!0;break}await new Promise(e=>setTimeout(e,100))}if(t)return console.log(),!0;throw new Error("Color application could not be verified")}catch(e){if(console.error(),3===r)throw e;await new Promise(e=>setTimeout(e,500))}}finally{await new Promise(e=>setTimeout(e,500)),i(!1),await new Promise(e=>setTimeout(e,100)),document.body.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,200)),document.body.classList.remove("temp-hide-color-picker")}}document.addEventListener("click",async e=>{if((e.target.matches(".btn.btn-outline-primary.btn-DESIGN")||e.target.closest(".btn.btn-outline-primary.btn-DESIGN"))&&(console.log(),D)){console.log();try{await q(D)}catch(e){console.error(),o(!1)}}});function n(t,o){if(A.forEach(e=>{e.name!==t.name&&o.querySelectorAll("."+e.scalablecolorClass).forEach(e=>e.remove())}),o.querySelector("."+t.scalablecolorClass))return;var e=document.createElement("div"),r=(e.className=t.scalablecolorClass,e.style.width="492px",e.style.border="1px solid #d6d6d6",e.style.marginTop="10px",e.style.backgroundColor="#fff",e.style.display="flex",e.style.flexDirection="column",document.createElement("div")),a=(r.style.display="flex",r.style.alignItems="center",r.style.padding="8px 8px 8px 15px",r.style.backgroundColor="#fafafa",r.style.borderBottom="1px solid #eee",document.createElement("span"));a.textContent="Select color:",a.style.fontSize="13px",a.style.fontWeight="600",a.style.color="rgb(51, 51, 51)",a.style.marginLeft="0",r.appendChild(a);const n=document.createElement("div");n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="10px",n.style.margin="15px",n.style.padding="0";a=document.createElement("style");a.textContent=`
      .color-swatch {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .color-swatch .checkmark {
        width: 16px;
        height: 16px;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .color-swatch.selected .checkmark {
        opacity: 1;
      }
      .color-swatch.dragging {
        cursor: grabbing !important;
      }

      body.temp-hide-color-picker .sketch-picker,
      body.temp-hide-color-picker .popover.color-picker-popover,
      body.temp-hide-color-picker ngb-popover-window[class*="color-picker-popover"] {
        position: absolute !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        height: 0 !important;
        overflow: hidden !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        width: 0 !important;
      }

      body.temp-hide-color-picker .popover.color-picker-popover .arrow,
      body.temp-hide-color-picker ngb-popover-window[class*="color-picker-popover"] .arrow {
        display: none !important;
      }

      .sketch-picker input {
        pointer-events: auto !important;
      }
    `,document.head.appendChild(a);let l=null;[{name:"Dark Red",color:"#840A08"},{name:"Crimson",color:"#C70010"},{name:"Vivid Orange",color:"#F36900"},{name:"Bright Yellow",color:"#FEC600"},{name:"Kelly Green",color:"#01B62F"},{name:"Forest Green",color:"#1C8C46"},{name:"Dark Olive",color:"#37602B"},{name:"Sky Blue",color:"#1AB7EA"},{name:"Royal Blue",color:"#002BB6"},{name:"Purple",color:"#5C2D91"},{name:"Hot Pink",color:"#E0218A"},{name:"Pale Pink",color:"#E9CDDB"},{name:"Brown",color:"#7B4A1B"},{name:"Gray",color:"#979797"},{name:"White",color:"#ffffff"},{name:"Black",color:"#000000"}].forEach(o=>{const r=document.createElement("div");r.className="color-swatch",r.setAttribute("data-tooltip",o.name),r.style.width="32px",r.style.height="32px",r.style.backgroundColor=o.color,r.style.border="1px solid #d6d6d6",r.style.borderRadius="0",r.style.cursor="pointer",r.style.position="relative";var e=document.createElement("img");e.src=chrome.runtime.getURL("assets/check-color-ic.svg"),e.className="checkmark",e.alt="",r.appendChild(e),"#ffffff"===o.color.toLowerCase()&&(r.classList.add("selected"),l=r,F(o.color)),r.addEventListener("click",async e=>{if(!r.classList.contains("dragging"))try{document.body.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,100)),l&&l.classList.remove("selected"),r.classList.add("selected"),l=r,D=o.color,await new Promise(e=>setTimeout(e,150)),document.body.classList.add("temp-hide-color-picker");var t=document.querySelector(".btn.btn-outline-primary.btn-DESIGN.ng-star-inserted");t&&(console.log(),t.click())}catch(e){console.error()}}),n.appendChild(r)});var a=document.createElement("style"),a=(a.textContent=`
      .color-swatch[data-tooltip] {
        position: relative;
      }

      .color-swatch[data-tooltip]:before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 12px;
        background-color: #1F2937;
        color: white;
        font-size: 12px;
        border-radius: 999px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: none;
        z-index: 1000;
        pointer-events: none;
      }

      .color-swatch[data-tooltip]:after {
        content: '';
        position: absolute;
        bottom: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #1F2937;
        opacity: 0;
        visibility: hidden;
        transition: none;
        z-index: 1000;
        pointer-events: none;
      }

      .color-swatch[data-tooltip]:hover:not(.dragging):before,
      .color-swatch[data-tooltip]:hover:not(.dragging):after {
        opacity: 1;
        visibility: visible;
      }

      .color-swatch.dragging[data-tooltip]:before,
      .color-swatch.dragging[data-tooltip]:after {
        opacity: 0 !important;
        visibility: hidden !important;
      }

      .current-to-all-btn {
        position: relative;
        font-family: "Amazon Ember", sans-serif;
        transition: background-color 0.2s ease;
      }

      .current-to-all-btn:hover {
        background-color: #3A0ABD;
      }

      .current-to-all-btn:active {
        background-color: #2D0894;
      }

      .current-to-all-btn img {
        width: 16px;
        height: 16px;
        filter: brightness(0) invert(1);
      }

      .current-to-all-btn span {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
      }
    `,document.head.appendChild(a),document.createElement("div")),i=(a.className="color-to-swatch",a.style.display="flex",a.style.alignItems="center",a.style.gap="10px",a.style.margin="0 15px 15px",a.style.justifyContent="space-between",document.createElement("div")),s=(i.style.display="flex",i.style.alignItems="center",i.style.gap="10px",document.createElement("span"));s.textContent="Save a swatch:",s.style.fontSize="14px",s.style.color="#212529";const c=document.createElement("div"),d=(c.className="snap-hex-container",c.style.position="relative",c.style.width="144px",c.style.height="33px",c.style.border="1px solid rgb(220, 224, 229) !important",c.style.borderRadius="4px",c.style.display="flex",c.style.alignItems="center",document.createElement("div"));d.className="hex-#",d.style.width="32px",d.style.height="31px",d.style.backgroundColor="#DCE0E5",d.style.display="flex",d.style.alignItems="center",d.style.justifyContent="center";var p=document.createElement("span");p.textContent="#",p.style.color="#FFFFFF",p.style.fontSize="14px",p.style.fontWeight="400",p.style.lineHeight="19px",d.appendChild(p);const m=document.createElement("input");m.type="text",m.className="snap-hex-input",m.placeholder="Enter a hex code",m.style.width="80px",m.style.height="100%",m.style.padding="0 8px",m.style.border="none",m.style.outline="none",m.style.fontSize="12px",m.style.color="#1F2937",m.style.backgroundColor="transparent",m.style.fontFamily='"Amazon Ember", sans-serif',m.style.fontWeight="400",m.style.lineHeight="normal",m.style.webkitAppearance="none",m.style.mozAppearance="none",m.style.appearance="none",m.setAttribute("tabindex","-1");p=document.createElement("style");p.textContent=`
      input::placeholder {
        color: #DCE0E5;
        font-size: 12px;
        font-family: "Amazon Ember", sans-serif;
        font-weight: 400;
        line-height: normal;
        opacity: 1;
      }

      .snap-hex-container {
        border: 1px solid rgb(220, 224, 229) !important;
      }

      .snap-hex-input {
        border: none !important;
        outline: none !important;
        background-color: transparent !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        color: #1F2937 !important;
      }

      .snap-hex-input,
      .snap-hex-input:hover,
      .snap-hex-input:focus,
      .snap-hex-input:focus-visible,
      .snap-hex-input:focus-within,
      .snap-hex-input:active,
      .snap-hex-input:-webkit-autofill,
      .snap-hex-input:-webkit-autofill:hover,
      .snap-hex-input:-webkit-autofill:focus {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -webkit-text-fill-color: #1F2937 !important;
        background: transparent !important;
        -webkit-background-clip: text !important;
      }

      .snap-hex-container:hover,
      .snap-hex-container:focus,
      .snap-hex-container:focus-within,
      .snap-hex-container:active {
        border: 1px solid rgb(220, 224, 229) !important;
        outline: none !important;
        box-shadow: none !important;
      }
    `,document.head.appendChild(p);const u=document.createElement("button");u.className="color-wheel-btn",u.setAttribute("data-tooltip","Color Picker"),u.style.width="32px",u.style.height="31px",u.style.border="none",u.style.background="transparent",u.style.padding="0",u.style.display="flex",u.style.alignItems="center",u.style.justifyContent="center",u.style.cursor="pointer",u.style.outline="none",u.style.webkitTapHighlightColor="transparent",u.setAttribute("type","button"),u.style.position="relative";p=document.createElement("style");p.textContent=`
      .color-wheel-btn:focus {
        outline: none;
        box-shadow: none;
      }

      .color-wheel-btn[data-tooltip]:before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 12px;
        background-color: #1F2937;
        color: white;
        font-size: 12px;
        border-radius: 999px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
        z-index: 1000;
        pointer-events: none;
      }

      .color-wheel-btn[data-tooltip]:after {
        content: '';
        position: absolute;
        bottom: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #1F2937;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
        z-index: 1000;
        pointer-events: none;
      }

      .color-wheel-btn[data-tooltip]:hover:before,
      .color-wheel-btn[data-tooltip]:hover:after {
        opacity: 1;
        visibility: visible;
      }
    `,document.head.appendChild(p);const h=document.createElement("div"),b=(h.className="color-picker-container",h.style.position="absolute",h.style.top="calc(100% + 10px)",h.style.left="0",h.style.zIndex="1000",h.style.backgroundColor="#fff",h.style.padding="15px",h.style.borderRadius="8px",h.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)",h.style.display="none",document.createElement("div"));b.id="color-picker-"+Math.random().toString(36).substr(2,9),h.appendChild(b);p=document.createElement("style");p.textContent=`
      .color-picker-container {
        animation: fadeIn 0.2s ease;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,document.head.appendChild(p);let y=null,g=!1;u.addEventListener("click",()=>{var e;g?(h.style.display="none",g=!1):(h.style.display="block",g=!0,y?(e=m.value?"#"+m.value:"#ffffff",y.color.set(e)):(y=new iro.ColorPicker(b,{width:200,color:m.value?"#"+m.value:"#ffffff",layout:[{component:iro.ui.Wheel,options:{}},{component:iro.ui.Slider,options:{sliderType:"value"}}]})).on("color:change",e=>{e=e.hexString.replace("#","");m.value=e,m.dispatchEvent(new Event("input",{bubbles:!0}))}))}),document.addEventListener("click",e=>{!g||h.contains(e.target)||u.contains(e.target)||(h.style.display="none",g=!1)});const f=document.createElement("img"),v=(f.src=chrome.runtime.getURL("assets/colorwheel-ic.svg"),f.alt="Color Wheel",f.style.width="16px",f.style.height="16px",f.style.opacity="1",f.style.transition="opacity 0.2s ease",u.addEventListener("mouseenter",()=>{f.style.opacity="0.8"}),u.addEventListener("mouseleave",()=>{f.style.opacity="1"}),u.appendChild(f),c.appendChild(d),c.appendChild(m),c.appendChild(u),c.appendChild(h),m.addEventListener("input",e=>{let t=e.target.value;t=(t=t.replace("#","")).slice(0,6).replace(/[^0-9A-Fa-f]/g,""),m.value=t,/^[0-9A-F]{6}$/i.test(t)?(e="#"+t,"ffffff"!==t.toLowerCase()&&(c.style.cssText+=`border-color: ${e} !important;`,d.style.backgroundColor=e),v.classList.remove("disabled"),v.style.cursor="pointer"):(c.style.cssText+="border-color: rgb(220, 224, 229) !important;",d.style.backgroundColor="#DCE0E5",v.classList.add("disabled"),v.style.cursor="not-allowed")}),document.createElement("div"));v.className="save-btn disabled",v.setAttribute("data-tooltip","Save Color"),v.style.cursor="not-allowed",v.style.position="relative";p=document.createElement("style"),p.textContent=`
      .save-btn[data-tooltip] {
        position: relative;
      }

      .save-btn[data-tooltip]:before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 12px;
        background-color: #1F2937;
        color: white;
        font-size: 12px;
        border-radius: 999px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
        z-index: 1000;
      }

      .save-btn[data-tooltip]:after {
        content: '';
        position: absolute;
        bottom: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #1F2937;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
        z-index: 1000;
      }

      .save-btn[data-tooltip]:hover:before,
      .save-btn[data-tooltip]:hover:after {
        opacity: 1;
        visibility: visible;
      }

      .save-btn {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: transparent;
        border: none;
        background-image: url("data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='32' height='32' rx='16' stroke='%23470CED' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 3'/%3E%3C/svg%3E");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: all 0.2s ease;
      }

      .save-btn.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-image: url("data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='32' height='32' rx='16' stroke='%23DCE0E5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 3'/%3E%3C/svg%3E");
      }

      .save-btn.disabled img {
        filter: brightness(0);
        opacity: 0.2 !important;
      }

      .save-btn:not(.disabled):hover {
        background-image: none;
        background-color: #470CED;
      }

      .save-btn:not(.disabled):hover img {
        filter: brightness(0) invert(1) !important;
      }

      .save-btn img {
        width: 16px !important;
        height: 16px !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: none;
        filter: none;
      }
    `,document.head.appendChild(p),p=document.createElement("img");p.src=chrome.runtime.getURL("assets/save-color-ic.svg"),p.alt="Save Color",p.style.width="16px",p.style.height="16px",v.appendChild(p),v.addEventListener("click",async()=>{var e=m.value;if(/^[0-9A-F]{6}$/i.test(e)){const t="#"+e;L(t)||(e=await C()).includes(t)||(e.push(t),await chrome.storage.sync.set({globalSavedColors:e}),document.querySelectorAll(".form-row > .col-6:nth-child(2)").forEach(e=>{e&&(e=e.querySelector('[class*="scalable-color"]'))&&e.querySelector("div:nth-child(2)")&&P(t)}),F(t))}});const x=document.createElement("button"),E=(x.className="current-to-all-btn",x.style.cssText=`
      height: 33px;
      flex: none;
      border: 1.5px solid #E9EBEF;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 0 10px;
      outline: none;
      border-radius: 4px;
    `,x.addEventListener("mouseenter",()=>{x.classList.contains("selected")||x.disabled||(x.style.backgroundColor="#F9FAFC")}),x.addEventListener("mouseleave",()=>{x.classList.contains("selected")||x.disabled||(x.style.backgroundColor="white")}),document.createElement("img")),k=(E.src=chrome.runtime.getURL("assets/quick-color-selection-ic.svg"),E.alt="Apply to all",E.style.width="16px",E.style.height="16px",E.style.filter="brightness(0) saturate(100%) invert(45%) sepia(11%) saturate(1129%) hue-rotate(189deg) brightness(94%) contrast(87%)",document.createElement("span"));k.textContent="Current color to All",k.style.cssText=`
      font-size: 12px;
      color: #606F95;
      font-weight: 400;
      transition: all 0.2s ease;
    `,x.appendChild(E),x.appendChild(k);x.addEventListener("click",async()=>{if(!x.disabled)try{x.classList.add("selected"),x.style.backgroundColor="#EBF0FF",x.style.borderColor="#470CED",k.style.color="#470CED",E.style.filter="brightness(0) saturate(100%) invert(24%) sepia(87%) saturate(7352%) hue-rotate(246deg) brightness(91%) contrast(99%)",k.textContent="Applying...";let e=null,t=null;if(!(e=document.querySelector(".product-editor")?.closest('[id$="-card"]')))for(const f of A){var o=document.querySelector("."+f.scalablecolorClass);if(o&&"none"!==window.getComputedStyle(o).display&&null!==o.offsetParent&&(e=document.getElementById(f.name+"-card"))){t=f.name,console.log("");break}}if(!e){var r=document.querySelector(".color-swatch.selected");if(r){var a=r.closest('[class*="scalable-color"]');if(a){var n=a.className;for(const v of A)if(n.includes(v.scalablecolorClass)){e=document.getElementById(v.name+"-card"),t=v.name,console.log("");break}}}}var l;if(e||(l=A.find(e=>T.includes(e.name)))&&(e=document.getElementById(l.name+"-card"),t=l.name,console.log("")),!e)throw new Error("Cannot determine current product. Please select a product first.");const g=e.id;t=t||g.replace("-card",""),console.log("");var i=document.querySelector(".color-swatch.selected");if(!i)throw new Error("");var s=i.style.backgroundColor,c=(console.log(""),document.querySelectorAll('[id$="-card"]')),d=(console.log(""),Array.from(c).filter(e=>{var t=e.id,o=t.replace("-card","");return t!==g&&!(e.classList.contains("disabled")||e.hasAttribute("disabled")||"none"===window.getComputedStyle(e).pointerEvents||window.getComputedStyle(e).opacity<"1")&&(t=e.querySelector(`.${o}-edit-btn`))&&!t.disabled&&!t.classList.contains("disabled")&&"none"!==window.getComputedStyle(t).display&&"none"!==window.getComputedStyle(t).pointerEvents&&T.includes(o)?(console.log(""),!0):(console.log(""),!1)}));if(console.log(""),0===d.length)throw new Error("");var p=async(e=3e3)=>{for(var t=Date.now();Date.now()-t<e;){let e=!1;for(const o of document.querySelectorAll(".color-swatch"))if(!o.classList.contains("disabled")){e=!0;break}if(e)return!0;await new Promise(e=>setTimeout(e,100))}return!1};for(let e=0;e<d.length;e++)try{var m=d[e],u=m.id,h=u.replace("-card","");if(u===g)console.log("");else{k.textContent=`${e+1}/${d.length}...`;var b=m.querySelector(`.${h}-edit-btn`);if(b)if(console.log(""),b.click(),await new Promise(e=>setTimeout(e,500)),await p()){var y=document.querySelectorAll(".color-swatch:not(.disabled)");let e=null;for(const w of y)if(w.style.backgroundColor===s){e=w;break}e?(e.click(),await new Promise(e=>setTimeout(e,500))):(console.log(""),D&&await q(D)),await new Promise(e=>setTimeout(e,2e3)),await p()}else console.warn("")}}catch(e){console.error()}x.classList.remove("selected"),k.textContent="Current color to All",x.style.backgroundColor="white",x.style.borderColor="#E9EBEF",k.style.color="#606F95",E.style.filter="brightness(0) saturate(100%) invert(45%) sepia(11%) saturate(1129%) hue-rotate(189deg) brightness(94%) contrast(87%)"}catch(e){console.error(),x.classList.remove("selected"),k.textContent="Current color to All",x.style.backgroundColor="white",x.style.borderColor="#E9EBEF",k.style.color="#606F95",E.style.filter="brightness(0) saturate(100%) invert(45%) sepia(11%) saturate(1129%) hue-rotate(189deg) brightness(94%) contrast(87%)"}}),i.appendChild(s),i.appendChild(c),i.appendChild(v),a.appendChild(i),a.appendChild(x),e.appendChild(r),e.appendChild(n),e.appendChild(a);let w;switch(t.injectPosition){case"first":w=o.firstChild,o.insertBefore(e,w);break;case"second":(w=o.children[1])?o.insertBefore(e,w):o.appendChild(e);break;case"third":(w=o.children[2])?o.insertBefore(e,w):o.appendChild(e);break;default:o.appendChild(e)}const C=async()=>{try{return(await chrome.storage.sync.get("globalSavedColors")).globalSavedColors||[]}catch(e){return console.error(),[]}};p=document.createElement("style");p.textContent=`
      @keyframes flash-swatch {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      .flash-swatch {
        animation: flash-swatch 0.15s 2;
      }
    `,document.head.appendChild(p);const L=t=>{for(const r of n.children){var o=r.style.backgroundColor;let e=o;if(o.startsWith("rgb")&&(o=o.match(/\d+/g),e="#"+o.map(e=>{e=parseInt(e).toString(16);return 1===e.length?"0"+e:e}).join("")),e.toUpperCase()===t.toUpperCase())return r.classList.add("flash-swatch"),setTimeout(()=>{r.classList.remove("flash-swatch")},600),!0}return!1};s=document.createElement("style");s.textContent=`
      .color-swatch.dragging {
        opacity: 0.6;
        cursor: no-drop !important;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      .color-swatch.dragging[data-tooltip]:before,
      .color-swatch.dragging[data-tooltip]:after {
        display: none !important;
      }
      .color-swatch.deletable {
        cursor: grab;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      .delete-zone {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        padding: 12px 24px;
        background-color: #FF391F;
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease;
        z-index: 9999;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: no-drop;
      }
      .delete-zone.active {
        transform: translateX(-50%) scale(1);
      }
      .delete-zone.highlight {
        background-color: #D92E19;
      }
    `,document.head.appendChild(s);let S=document.querySelector(".delete-zone");S||((S=document.createElement("div")).className="delete-zone",(i=document.createElement("img")).src=chrome.runtime.getURL("assets/clear.svg"),i.alt="Delete",i.style.width="16px",i.style.height="16px",i.style.filter="brightness(0) invert(1)",(r=document.createElement("span")).textContent="Drop to delete",S.appendChild(i),S.appendChild(r),document.body.appendChild(S));const P=o=>{var e=Array.from(n.children).find(e=>e.getAttribute("data-tooltip")===o);if(!e){const r=document.createElement("div");r.className="color-swatch deletable",r.setAttribute("data-tooltip",o),r.setAttribute("data-saved","true"),r.style.width="32px",r.style.height="32px",r.style.backgroundColor=o,r.style.border="1px solid #d6d6d6",r.style.borderRadius="0",r.style.position="relative",r.style.cursor="pointer",r.draggable=!0;e=document.createElement("img");e.src=chrome.runtime.getURL("assets/check-color-ic.svg"),e.className="checkmark",e.alt="",r.appendChild(e),r.addEventListener("dragstart",e=>{if(r.classList.contains("disabled"))return e.preventDefault(),!1;"true"===r.getAttribute("data-saved")&&(r.classList.add("dragging"),S.classList.add("active"),e.dataTransfer.setData("text/plain",r.getAttribute("data-tooltip")),e.dataTransfer.setDragImage(r,16,16),e.dataTransfer.effectAllowed="move")}),r.addEventListener("dragend",()=>{r.classList.remove("dragging"),S.classList.remove("active"),S.classList.remove("highlight")}),r.addEventListener("click",async e=>{if(!r.classList.contains("disabled")&&!r.classList.contains("dragging"))try{document.body.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,100)),l&&l.classList.remove("selected"),r.classList.add("selected"),l=r,D=o,await new Promise(e=>setTimeout(e,150)),document.body.classList.add("temp-hide-color-picker");var t=document.querySelector(".btn.btn-outline-primary.btn-DESIGN.ng-star-inserted");t&&(console.log(),t.click())}catch(e){console.error()}}),n.appendChild(r)}};S.addEventListener("dragenter",e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",S.classList.add("highlight")}),S.addEventListener("dragleave",()=>{S.classList.remove("highlight")}),S.addEventListener("dragover",e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"}),S.addEventListener("drop",async e=>{e.preventDefault();const o=e.dataTransfer.getData("text/plain");if(console.log(),o)try{var t=await C(),r=(console.log(),t.filter(e=>e.toLowerCase()!==o.toLowerCase()));console.log(),await chrome.storage.sync.set({globalSavedColors:r}),document.querySelectorAll('.color-swatch[data-saved="true"]').forEach(e=>{var t;e.getAttribute("data-tooltip")===o&&(t=e.classList.contains("selected"),e.remove(),t)&&(document.querySelectorAll('.color-swatch[style*="background-color: rgb(255, 255, 255)"]').forEach(e=>{e.classList.add("selected"),l=e,F("#ffffff")}),e=document.querySelector(".btn.btn-outline-primary.btn-DESIGN.ng-star-inserted"))&&(console.log(),e.click())})}catch(e){console.error()}S.classList.remove("active"),S.classList.remove("highlight")}),C().then(e=>{e.forEach(e=>P(e))});a=n.querySelector('.color-swatch[style*="background-color: rgb(255, 255, 255)"]');a&&(a.classList.add("selected"),l=a,F("#ffffff"))}new MutationObserver(()=>{e(),A.forEach(e=>{var t=document.getElementById(e.name+"-card");t&&(t=t.querySelector(".form-row > .col-6:nth-child(2)"))&&!t.querySelector("."+e.scalablecolorClass)&&n(e,t)})}).observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("click",function(e){if(e.target.matches(".btn.btn-secondary.btn-edit")||e.target.matches(".btn-secondary.btn-edit")){e=e.target;let t=Array.from(e.classList).find(e=>e.endsWith("-edit-btn"));if(t)if(t=t.replace("-edit-btn","").toUpperCase(),T.includes(t)){var o=A.find(e=>e.name===t);if(o){var r=e.closest("div.mb-base");if(r){const a=r.querySelector(".form-row > .col-6:nth-child(2)");a&&(A.forEach(e=>{a.querySelectorAll("."+e.scalablecolorClass).forEach(e=>e.remove())}),n(o,a))}}}else{r=e.closest("div.mb-base");r&&(o=r.querySelector(".form-row > .col-6:nth-child(2)"))&&o.querySelectorAll('[class*="scalable-color"]').forEach(e=>e.remove())}}}),e(),A.forEach(e=>{var t=document.getElementById(e.name+"-card");t&&(t=t.querySelector(".form-row > .col-6:nth-child(2)"))&&n(e,t)});t=document.createElement("style");t.textContent=`

    body.temp-hide-color-picker .sketch-picker,
    body.temp-hide-color-picker .popover.color-picker-popover,
    body.temp-hide-color-picker ngb-popover-window[class*="color-picker-popover"] {
      position: absolute !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      height: 0 !important;
      overflow: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      width: 0 !important;
    }

    body.temp-hide-color-picker .popover.color-picker-popover .arrow,
    body.temp-hide-color-picker ngb-popover-window[class*="color-picker-popover"] .arrow {
      display: none !important;
    }

    .sketch-picker input {
      pointer-events: auto !important;
    }
  `,document.head.appendChild(t)}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",initInjection):initInjection();