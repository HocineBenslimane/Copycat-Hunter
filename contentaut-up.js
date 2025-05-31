!function(){"use strict";let e=!1,t;function o(o=!1){let r=document.querySelector(".snap-bulk-upload-overlay");o&&function e(){let t={saveToDrafts:document.getElementById("save-to-drafts")?.checked||!1,copyEnToAll:document.getElementById("copy-en-to-all")?.checked||!1,autoTextSwap:document.getElementById("auto-text-swap")?.checked||!1,clothingProducts:{},scalableProducts:{},tumblerProducts:{}},o=document.querySelectorAll(".clothing-products-card");o.forEach(e=>{let o=e.querySelector(".header-text").textContent,r=e.querySelector(".toggle-btn"),l=e.querySelector(".shirts-control-group .snap-dropdown .dropdown-header span"),s=e.querySelector(".hoodie-control-group .snap-dropdown .dropdown-header span"),n=e.querySelector(".zip-control-group .snap-dropdown .dropdown-header span"),a=e.querySelector(".allproducts-colors-control-group .snap-dropdown .dropdown-header span"),i=e.querySelector(".allproducts-prices-control-group .snap-dropdown .dropdown-header span");t.clothingProducts[o]={isActive:r.classList.contains("active"),shirts:{sides:l?l.textContent:"Default (Front)"},pulloverHoodie:{sides:s?s.textContent:"Default (Front)"},zipHoodie:{sides:n?n.textContent:"Default (Front)"},colors:a?a.textContent:"Skip",prices:i?i.textContent:"Skip"}});let r=document.querySelectorAll(".scalable-products-card");r.forEach(e=>{let o=e.querySelector(".header-text").textContent,r=e.querySelector(".toggle-btn"),l=e.querySelector(".scale-options-control-group .snap-dropdown .dropdown-header span"),s=e.querySelector(".color-options-control-group .snap-dropdown .dropdown-header span"),n=e.querySelector(".price-options-control-group .snap-dropdown .dropdown-header span"),a="";if(l&&"Custom scale"===l.textContent.trim()){let i=e.querySelector(".custom-scale-control-group .scale-input");!i||i.classList.contains("error")||i.closest(".custom-scale-input")?.classList.contains("error")||(a=i.value)}let c="";if(s&&"Custom Color"===s.textContent.trim()){let d=e.querySelector(".control-group-custom-colors-control-group .custom-color-input .color-input");!d||d.classList.contains("error")||d.closest(".custom-color-input")?.classList.contains("error")||(c=d.value)}t.scalableProducts[o]={isActive:r.classList.contains("active"),scale:l?l.textContent:"",customScale:a,color:s?s.textContent:"",customColor:c,price:n?n.textContent:""}});let l=document.querySelectorAll(".tumbler-products-card");l.forEach(e=>{let o=e.querySelector(".header-text").textContent,r=e.querySelector(".toggle-btn"),l=e.querySelector(".tumbler-sides-control-group .snap-dropdown .dropdown-header span"),s=e.querySelector(".tumbler-scale-control-group .snap-dropdown .dropdown-header span"),n=e.querySelector(".tumbler-colors-control-group .snap-dropdown .dropdown-header span"),a=e.querySelector(".tumbler-prices-control-group .snap-dropdown .dropdown-header span"),i="";if(s&&"Custom scale"===s.textContent.trim()){let c=e.querySelector(".tumbler-custom-scale-control-group .scale-input");!c||c.classList.contains("error")||c.closest(".custom-scale-input")?.classList.contains("error")||(i=c.value)}t.tumblerProducts[o]={isActive:r.classList.contains("active"),sides:l?l.textContent:"",scale:s?s.textContent:"100%",customScale:i,color:n?n.textContent:"",price:a?a.textContent:""}});let s=document.getElementById("native-uploader");s&&(t.uploaderType=s.checked?"native":"snap"),localStorage.setItem("snapSettings",JSON.stringify(t))}(),r.classList.add("closing"),r.classList.remove("show"),setTimeout(()=>{r.classList.remove("closing"),r.style.display="none",document.body.style.overflow="",document.body.style.height=""},400),e=!1,t&&clearInterval(t)}function r(e,t=!1){e&&(e.addEventListener("change",e=>{e.target.checked?e.target.style.filter="none":e.target.style.filter="invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)",x()}),e.checked=t,e.style.filter=t?"none":"invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)")}let l;function s(){!function e(){let t=window.location.href;return t.includes("merch.amazon.com")&&t.includes("/designs")}()?function e(){let t=document.querySelector("#snap-bulk-upload-btn");t&&t.remove();let o=document.querySelector("#automation-style");o&&o.remove(),document.body.style.overflow="",document.body.style.height=""}():function e(){if(document.querySelector("#snap-bulk-upload-btn"))return;(l=document.createElement("style")).id="automation-style",l.textContent=`
            @font-face {
                font-family: "Amazon Ember";
                src: url("${chrome.runtime.getURL("fonts/Amazon-Ember-Medium.ttf")}") format("truetype");
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }

            @font-face {
                font-family: "Amazon Ember";
                src: url("${chrome.runtime.getURL("fonts/AmazonEmber_Bold.ttf")}") format("truetype");
                font-weight: 700;
                font-style: normal;
                font-display: swap;
            }

            * {
                font-weight: 500;
            }

            input::placeholder {
                color: #BFC7D2 !important;
                opacity: 1 !important;
            }
            
            input::-webkit-input-placeholder {
                color: #BFC7D2 !important;
                opacity: 1 !important;
            }
            
            input::-moz-placeholder {
                color: #BFC7D2 !important;
                opacity: 1 !important;
            }
            
            input:-ms-input-placeholder {
                color: #BFC7D2 !important;
                opacity: 1 !important;
            }
            
            input:-moz-placeholder {
                color: #BFC7D2 !important;
                opacity: 1 !important;
            }

            :root {
                --color-1: 0 100% 63%;
                --color-2: 270 100% 63%;
                --color-3: 210 100% 63%;
                --color-4: 195 100% 63%;
                --color-5: 90 100% 63%;
                --speed: 2s;
                --primary-color: #470CED;
                --text-secondary: #606D85;
                --border-color: #DCE0E5;
            }

            @keyframes rainbow-border {
                0% {
                    background-position: 0 0, 0 0, 0 0;
                }
                100% {
                    background-position: 0 0, 0 0, 200% 0;
                }
            }

            @keyframes rainbow-glow {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 200% 0;
                }
            }

            #snap-bulk-upload-btn {
                position: fixed;
                bottom: 40px;
                right: 40px;
                z-index: 999;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                padding: 0 24px;
                font-size: 1rem;
                color: #fff;
                border: calc(0.08 * 1rem) solid transparent;
                border-radius: 12px;
                cursor: pointer;
                gap: 8px;
                text-decoration: none !important;
                box-shadow: none !important;
                outline: none !important;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                pointer-events: auto !important;
                background-image:
                    linear-gradient(#121213, #121213),
                    linear-gradient(#121213 50%, rgba(18,18,19,0.6) 80%, rgba(18,18,19,0)),
                    linear-gradient(
                        90deg,
                        hsl(var(--color-1)),
                        hsl(var(--color-5)),
                        hsl(var(--color-3)),
                        hsl(var(--color-4)),
                        hsl(var(--color-2))
                    );
                background-size: 100% 100%, 100% 100%, 200% 100%;
                background-position: 0 0, 0 0, 0 0;
                background-clip: padding-box, border-box, border-box;
                background-origin: border-box;
                animation: rainbow-border var(--speed) infinite linear;
                transition: all 0.5s ease-in-out;
            }

            #snap-bulk-upload-btn:hover {
                background-image:
                    linear-gradient(#2A00A0, #2A00A0),
                    linear-gradient(#2A00A0 50%, rgba(42,0,160,0.6) 80%, rgba(42,0,160,0)),
                    linear-gradient(
                        90deg,
                        hsl(var(--color-1)),
                        hsl(var(--color-5)),
                        hsl(var(--color-3)),
                        hsl(var(--color-4)),
                        hsl(var(--color-2))
                    );
            }

            #snap-bulk-upload-btn::before {
                content: "";
                position: absolute;
                z-index: -1;
                bottom: -20%;
                left: 50%;
                width: 60%;
                height: 20%;
                transform: translateX(-50%);
                background-image: linear-gradient(
                    90deg,
                    hsl(var(--color-1)),
                    hsl(var(--color-5)),
                    hsl(var(--color-3)),
                    hsl(var(--color-4)),
                    hsl(var(--color-2))
                );
                background-size: 200%;
                filter: blur(calc(0.8 * 1rem));
                pointer-events: none;
                animation: rainbow-glow var(--speed) infinite linear;
            }

            .snap-bulk-upload-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 99999;
                display: none;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease-out;
                overflow: hidden;
            }


            .snap-bulk-upload-overlay.show {
                display: flex;
                opacity: 1;
            }

            .snap-bulk-upload-container {
                width: 994px;
                max-height: 96vh;
                min-height: 500px;
                background: #F7F8FA;
                border-radius: 28px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, calc(-50% + 30px)) scale(0.95);
                z-index: 100000;
                padding: 24px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                overflow-y: auto;
                scrollbar-width: thin;
                scrollbar-color: #DCE0E5 transparent;
                scroll-behavior: smooth;
                overscroll-behavior: contain;
            }

            .snap-bulk-upload-container::-webkit-scrollbar {
                width: 8px;
            }

            .snap-bulk-upload-container::-webkit-scrollbar-track {
                background: transparent;
                margin: 10px 0;
            }

            .snap-bulk-upload-container::-webkit-scrollbar-thumb {
                background-color: #DCE0E5;
                border-radius: 20px;
                border: 2px solid #F7F8FA;
            }

            .snap-bulk-upload-container::-webkit-scrollbar-thumb:hover {
                background-color: #C7CDD5;
            }

            @media screen and (max-height: 700px) {
                .snap-bulk-upload-container {
                    max-height: 96vh;
                    top: 48%;
                }
                
                .snap-bulk-upload-overlay.show .snap-bulk-upload-container {
                    max-height: 96vh;
                }
            }

            .snap-bulk-upload-overlay.show .snap-bulk-upload-container {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
                max-height: 96vh;
            }

            .snap-bulk-upload-overlay.closing .snap-bulk-upload-container {
                transform: translate(-50%, calc(-50% - 30px)) scale(0.95);
                opacity: 0;
            }

            .upload-tray-container {
                width: 100%;
                background: #FFFFFF;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                margin: 0;
            }

            .upload-tray-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin: 0;
            }

            .upload-tray-header .header-left {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .upload-tray-header .header-right {
                display: flex;
                align-items: center;
            }

            .donation-btn {
                height: 40px;
                width: auto;
                cursor: pointer;
                display: block;
                position: relative;
            }

            .upload-tray-header h2 {
                font-family: "Amazon Ember";
                font-weight: 700;
                font-size: 16px;
                color: #000000;
                margin: 0;
            }

            .drag-drop-area, .loaded-files {
                width: 100%;
                box-sizing: border-box;
                border-radius: 6px;
                margin: 0;
            }

            .dashed-border {
                border-style: none;
                background: linear-gradient(90deg, #DCE0E5 4px, transparent 0) repeat-x,
                           linear-gradient(90deg, #DCE0E5 4px, transparent 0) repeat-x,
                           linear-gradient(0deg, #DCE0E5 4px, transparent 0) repeat-y,
                           linear-gradient(0deg, #DCE0E5 4px, transparent 0) repeat-y;
                background-size: 10px 1.5px, 10px 1.5px, 1.5px 10px, 1.5px 10px;
                background-position: 0px 0px, 0px 100%, 0px 0px, 100% 0px;
            }

            .drag-drop-area {
                height: 122px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 20px;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
            }

            .drag-drop-area.drag-active {
                background-color: #470CED;
                border: none;
                background-image: none;
            }

            .drag-drop-area.drag-active img {
                filter: brightness(0) invert(1);
            }

            .drag-drop-area.drag-active .primary-text,
            .drag-drop-area.drag-active .secondary-text {
                color: #FFFFFF;
            }

            .drag-drop-area::before {
                display: none;
            }

            .drag-drop-area img {
                width: 60px;
                height: 47.72px;
                flex-shrink: 0;
                position: relative;
                top: -2px;
            }

            .drag-drop-area .text-container {
                display: flex;
                flex-direction: column;
                gap: 4px;
                align-items: flex-start;
                white-space: nowrap;
            }

            .drag-drop-area p {
                font-family: "Amazon Ember";
                font-weight: 500;
                margin: 0;
                white-space: nowrap;
                text-align: left;
                width: 100%;
            }

            .drag-drop-area .primary-text {
                font-family: "Amazon Ember";
                font-size: 14px;
                line-height: 17px;
                font-weight: 700;
                color: #606F95;
                text-align: left;
            }

            .drag-drop-area .secondary-text {
                font-family: "Amazon Ember";
                font-size: 12px;
                line-height: 14px;
                font-weight: 500;
                color: #606F95;
                text-align: left;
            }

            .lottie-icon {
                width: 24px !important;
                height: 24px !important;
                min-width: 24px !important;
                min-height: 24px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
                outline: none !important;
                overflow: visible !important;
            }

            .lottie-icon svg {
                width: 100% !important;
                height: 100% !important;
                display: block !important;
                fill: currentColor !important;
                stroke: currentColor !important;
            }

            .button-text {
                font-family: "Amazon Ember";
                font-weight: 500;
                text-decoration: none !important;
                white-space: nowrap;
            }

            .loaded-files {
                width: 100%;
                height: 72px;
                padding: 20px 24px;
                box-sizing: border-box;
                display: none;
                border-style: none;
                background: linear-gradient(90deg, #01BB87 4px, transparent 0) repeat-x,
                           linear-gradient(90deg, #01BB87 4px, transparent 0) repeat-x,
                           linear-gradient(0deg, #01BB87 4px, transparent 0) repeat-y,
                           linear-gradient(0deg, #01BB87 4px, transparent 0) repeat-y;
                background-size: 10px 1.5px, 10px 1.5px, 1.5px 10px, 1.5px 10px;
                background-position: 0px 0px, 0px 100%, 0px 0px, 100% 0px;
            }

            .loaded-files.active {
                display: flex;
                gap: 24px;
            }

            .files-main {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .files-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .files-label {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .files-label span {
                font-family: "Amazon Ember";
                font-weight: 500;
                color: var(--text-secondary);
                line-height: 10px;
            }

            .files-counter {
                height: 17px;
                padding: 0.5px 8.5px;
                background: rgba(1, 187, 135, 0.1);
                border-radius: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .files-counter span {
                font-family: "Amazon Ember";
                font-weight: 500;
                color: #01BB87;
                line-height: 16px;
            }

            .progress-info {
                font-family: "Amazon Ember";
                font-weight: 500;
                color: var(--text-secondary);
                line-height: 8px;
            }

            .snap-progress-bar {
                width: 100%;
                height: 5px;
                background: #F7F8FA;
                border-radius: 10px;
                overflow: hidden;
            }

            .snap-progress-fill {
                height: 100%;
                background: #01BB87;
                border-radius: 10px;
                transition: width 1s ease-in-out;
                width: 0;
                max-width: 100%;
            }

            .snap-progress-fill.active {
                width: 0;
                max-width: 100%;
            }

            .clear-section {
                display: flex;
                align-items: center;
            }

            .clear-all-btn {
                width: 32px;
                height: 32px;
                background: rgba(250, 88, 57, 0.05);
                border-radius: 40px;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s ease-in-out;
                position: relative;
            }

            .clear-all-btn[data-tooltip]:before {
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

            .clear-all-btn[data-tooltip]:after {
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

            .clear-all-btn[data-tooltip]:hover:before,
            .clear-all-btn[data-tooltip]:hover:after {
                opacity: 1;
                visibility: visible;
            }

            .clear-all-btn:hover {
                background: rgba(250, 88, 57, 0.1);
            }

            .clear-all-btn img {
                width: 14.64px;
                height: 15.99px;
            }

            .products-options-container {
                width: 100%;
                background: #FFFFFF;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                margin: 0;
            }

            .products-options-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin: 0;
            }

            .header-left {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .header-left img {
                width: 20.76px;
                height: 20.76px;
            }

            .header-left h2 {
                font-family: "Amazon Ember";
                font-weight: 700;
                font-size: 16px;
                color: #000000;
                margin: 0;
            }

            .tip-container {
                display: flex;
                align-items: center;
                position: relative;
            }

            .tip-icon {
                width: 24px;
                height: 24px;
                background: #470CED;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
            }

            .tip-icon img {
                width: 14px;
                height: 14px;
                filter: brightness(0) invert(1);
            }

            .automation-tip {
                display: flex;
                align-items: center;
                background: rgba(0, 122, 255, 0.1);
                border-radius: 4px;
                padding: 4px 10px 4px 10px;
                margin-left: 10px;
            }

            .automation-tip span {
                font-family: "Amazon Ember";
                font-size: 12px;
                color: #470CED !important;
                line-height: 16px;
            }

            .clothing-products-card {
                width: 100%;
                border: 1.5px solid #fafafa;
                border-radius: 8px;
                padding: 24px;
                background: linear-gradient(135deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
            }

            .clothing-products-card.off {
                border: none;
                background: linear-gradient(137.14deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
            }

            .clothing-products-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0px;
            }

            .clothing-products-card.off .clothing-products-header {
                margin-bottom: 0;
            }

            .clothing-products-card.off .clothing-products-controls {
                display: none;
            }

            .toggle-container {
                display: flex;
                align-items: center;
            }

            .toggle-btn {
                width: 36px;
                height: 18px;
                background-color: #470CED;
                border-radius: 18px;
                padding: 2px;
                border: none;
                cursor: pointer;
                position: relative;
                transition: background-color 0.3s;
                display: flex;
                align-items: center;
            }

            .toggle-btn:not(.active) {
                background-color: #cfd4d4;
            }

            .toggle-handle {
                width: 12px;
                height: 12px;
                background-color: white;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 3px;
                transform: translateY(-50%);
                transition: transform 0.3s;
            }

            .toggle-btn.active .toggle-handle {
                transform: translate(18px, -50%);
            }

            .header-text {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 14px;
                color: #000000;
                display: flex;
                align-items: center;
                margin: 0;
            }

            .clothing-products-controls {
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin-top: 20px;
            }

            .clothing-products-controls.off {
                opacity: 0.5;
                pointer-events: none;
            }

            .control-group {
                display: flex;
                flex-direction: column;
                gap: 0px;
                width: calc((100% - 40px) / 5);
            }

            .scalable-products-controls {
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin: 20px 0 0 0;
                width: 100%;
                padding-right: 0px;
            }

            .scalable-products-card {
                width: 100%;
                border: 1.5px solid #fafafa;
                border-radius: 8px;
                padding: 24px 24px 24px 24px;
                margin: 0;
                background: linear-gradient(135deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
            }

            .scalable-products-card.off {
                border: none;
                background: linear-gradient(137.14deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
            }

            .scalable-products-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0px;
            }

            .scalable-products-card.off .scalable-products-header {
                margin-bottom: 0;
            }

            .scalable-products-card.off .scalable-products-controls {
                display: none;
            }

            .scalable-products-card .control-group {
                display: flex;
                flex-direction: column;
                gap: 0;
                width: calc((100% - 40px) / 5);
                margin: 0;
            }

            .control-group-wrapper {
                width: 100%;
                display: flex;
                gap: 8px;
            }
            
            .custom-scale-input {
                display: flex;
                align-items: center;
                border: 1.5px solid #DCE0E5;
                border-radius: 4px;
                padding: 0;
                height: 40px;
                width: 100%;
                background: #FFFFFF;
            }
            
            .percent-prefix {
                width: 32px !important;
                min-width: 32px !important;
                max-width: 32px !important;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #DCE0E5;
                border-radius: 4px 0 0 4px;
                flex-shrink: 0 !important;
                box-sizing: border-box !important;
            }
            
            .percent-prefix * {
                all: unset !important;
            }
            
            .percent-prefix span {
                font-family: "Amazon Ember" !important;
                font-size: 14px !important;
                color: #606D85 !important;
                display: block !important;
                width: 100% !important;
                text-align: center !important;
            }

            // Add debug styles
            .percent-prefix.debug {
                background: red !important;
                border: 2px solid blue !important;
            }

            .scale-input {
                flex: 1;
                border: none;
                outline: none;
                font-family: "Amazon Ember";
                font-size: 12px;
                color: #181818;
                background: transparent;
                padding: 0 10px;
                height: 100%;
            }
            
            .scale-input::placeholder {
                color: #BFC7D2 !important;
            }

            .product-type-label {
                display: inline-flex;
                padding: 0 8px;
                height: 17px;
                background: rgba(0, 122, 255, 0.1);
                border: 1px solid #470CED;
                border-radius: 2px;
                align-items: center;
                margin-bottom: 4px;
                width: fit-content;
            }

            .product-type-label span {
                font-family: "Amazon Ember";
                font-size: 10px;
                font-weight: 500;
                color: #470CED;
                white-space: nowrap;
            }

            .control-label {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 14px;
                color: #000000;
                margin-bottom: 4px;
                width: fit-content;
            }

            .snap-dropdown {
                position: relative;
                width: 100%;
                cursor: pointer;
                user-select: none;
            }

            .snap-dropdown .dropdown-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 12px;
                height: 40px;
                border: 1.5px solid #DCE0E5;
                border-radius: 4px;
                background: white;
                box-sizing: border-box;
                transition: border-color 0.2s ease;
                outline: none;
            }

            .snap-dropdown.focused .dropdown-header {
                border-color: #470CED;
                outline: none;
                box-shadow: none;
            }

            .snap-dropdown .dropdown-header span {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 12px;
                color: #181818;
                line-height: 40px;
            }

            .snap-dropdown .dropdown-header img {
                width: 16px;
                height: 16px;
            }

            .snap-dropdown .dropdown-menu {
                max-height: 300px;
                overflow-y: auto;
            }

            .snap-dropdown .dropdown-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 12px;
                color: #181818;
                transition: background-color 0.2s ease;
            }

            .snap-dropdown .dropdown-item:hover {
                background: #F3F4F6;
            }

            .snap-dropdown .dropdown-item.selected {
                font-weight: 700;
                color: #470CED;
            }

            .snap-bulk-upload-overlay * {
                -webkit-tap-highlight-color: transparent !important;
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                outline: none !important;
            }

            .snap-bulk-upload-overlay button:focus {
                outline: none !important;
            }

            .snap-bulk-upload-overlay input[type="file"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                outline: none;
                border: none;
                background: transparent;
            }

            .snap-bulk-upload-overlay input[type="file"]:focus {
                outline: none;
                box-shadow: none;
            }

            .custom-scale-input:focus-within,
                border-color: #470CED !important;
                outline: none;
                box-shadow: 0 0 0 2px rgba(71, 12, 237, 0.1);
            }

            .custom-scale-input.disabled,
                opacity: 0.5;
                pointer-events: none;
            }

            .custom-scale-control-group .control-label,
            .control-group-custom-colors-control-group .control-label,
            .tumbler-custom-scale-control-group .control-label {
                display: none;
            }

            .custom-scale-control-group,
            .control-group-custom-colors-control-group {
                align-self: flex-end;
                margin-top: auto;
            }

            .scale-options-control-group + .custom-scale-control-group,
            .color-options-control-group + .control-group-custom-colors-control-group {
                margin-top: 8px;
            }

            .custom-scale-input:focus-within,
            .scale-input:focus,
                outline: none !important;
                box-shadow: none !important;
                border-color: #DCE0E5 !important;
            }

            input:focus,
            textarea:focus,
            select:focus {
                outline: none !important;
                box-shadow: none !important;
            }

            .custom-scale-input input:focus {
                outline: none !important;
                box-shadow: none !important;
            }

            .snap-dropdown.focused .dropdown-header {
                border-color: #470CED !important;
            }

            .custom-scale-input:focus-within {
                border-color: #470CED !important;
                outline: none !important;
                box-shadow: none !important;
            }

            .scale-input:focus {
                outline: none !important;
                box-shadow: none !important;
            }

            .percent-prefix:focus {
                outline: none !important;
                box-shadow: none !important;
            }

            .snap-dropdown.focused .dropdown-header {
                border-color: #470CED !important;
                outline: none !important;
                box-shadow: none !important;
            }

            .custom-scale-input:focus-within {
                border-color: #470CED !important;
                outline: none !important;
                box-shadow: none !important;
            }

            .custom-scale-input:focus-within .percent-prefix {
                background: #470CED !important;
            }

            .custom-scale-input:focus-within .percent-prefix span {
                color: #FFFFFF !important;
            }

            .custom-scale-input.error {
                border-color: #FF391F !important;
            }

            .custom-scale-input.error .percent-prefix {
                background: #FF391F !important;
            }

            .custom-scale-input.error .percent-prefix span {
                color: #FFFFFF !important;
            }

            .scale-input {
                flex: 1;
                border: none;
                outline: none;
                font-family: "Amazon Ember";
                font-size: 12px;
                color: #181818;
                background: transparent;
                padding: 0 10px;
                height: 100%;
            }

            .scale-input.error {
                color: #FF391F !important;
            }

            .color-options-control-group .dropdown-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                font-family: "Amazon Ember";
                font-weight: 400;
                font-size: 12px;
                color: #181818;
                transition: background-color 0.2s ease;
            }

            .color-options-control-group .color-indicator {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 0.5px solid #E5E5E5;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: none;
            }

            .color-options-control-group .dropdown-header {
                display: flex;
                align-items: center;
                gap: 10px !important;
                padding: 0 12px;
            }

            .color-options-control-group .dropdown-header .color-indicator {
                width: 10px !important;
                height: 10px !important;
                min-width: 10px !important;
                border-radius: 50%;
                border: 0.5px solid #E5E5E5;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .color-options-control-group .dropdown-header .color-indicator img {
                width: 10px !important;
                height: 10px !important;
                display: block;
            }

            .color-options-control-group .dropdown-header {
                display: flex;
                align-items: center;
                gap: 10px !important;
                padding: 0 12px;
                justify-content: flex-start !important;
            }

            .color-options-control-group .dropdown-header span {
                text-align: left !important;
                justify-content: flex-start !important;
            }

            .color-options-control-group .dropdown-header .color-indicator {
                width: 10px !important;
                height: 10px !important;
                min-width: 10px !important;
                border-radius: 50%;
                border: 0.5px solid #E5E5E5;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .color-options-control-group .dropdown-header .color-indicator img {
                width: 10px !important;
                height: 10px !important;
                display: block;
            }

            .color-options-control-group .dropdown-header {
                display: flex;
                align-items: center;
                padding: 0 12px;
                justify-content: space-between !important;
            }

            .color-options-control-group .dropdown-header .header-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .color-options-control-group .dropdown-header .color-indicator {
                width: 10px !important;
                height: 10px !important;
                min-width: 10px !important;
                border-radius: 50%;
                border: 0.5px solid #E5E5E5;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .color-options-control-group .dropdown-header span {
                text-align: left !important;
            }

            .color-options-control-group .dropdown-header img {
                margin-left: auto;
                padding-right: 0;
            }

            .control-group.custom-scale-control-group,
            .control-group.tumbler-custom-scale-control-group {
                width: 100% !important;
            }

            .control-group.custom-scale-control-group .custom-scale-input,
            .control-group.tumbler-custom-scale-control-group .custom-scale-input {
                width: 100% !important;
            }

            .control-group {
                display: flex;
                flex-direction: column;
                gap: 0px;
                width: calc((100% - 40px) / 5);
            }

            .control-group.custom-scale-control-group,
            .control-group.colors-control-group,
            .control-group.tumbler-custom-scale-control-group {
                width: calc((100% - 40px) / 5) !important;
            }

            .tumbler-products-controls .control-group.tumbler-custom-scale-control-group {
                width: calc((100% - 40px) / 5) !important;
            }

            .tumbler-products-controls .control-group.tumbler-custom-scale-control-group .custom-scale-input {
                width: 100% !important;
            }

            .tumbler-products-card {
                width: 100%;
                border: 1.5px solid #fafafa;
                border-radius: 8px;
                padding: 24px;
                background: linear-gradient(135deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
                margin-top: 0px;
            }

            .tumbler-products-card.off {
                border: none;
                background: linear-gradient(137.14deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
            }

            .tumbler-products-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0px;
            }

            .tumbler-products-controls {
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin-top: 20px;
            }

            .tumbler-products-controls.off {
                display: none;
            }

            .tumbler-products-card .tumbler-custom-scale-control-group .control-label {
                display: none;
            }

            .tumbler-products-card .tumbler-custom-scale-control-group {
                margin-top: auto;
            }

            .tumbler-products-card .tumbler-custom-scale-control-group .custom-scale-input {
                margin-bottom: 0;
            }

            .tumbler-products-card .tumbler-custom-scale-control-group .custom-scale-input:focus-within {
                border-color: #470CED;
                outline: none;
                box-shadow: none;
            }

            .tumbler-products-card .tumbler-custom-scale-control-group .scale-input:focus {
                outline: none;
                box-shadow: none;
                border-color: #DCE0E5;
            }

            .terms-container {
                width: 100%;
                background: #FFFFFF;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                margin-top: 0px;
            }

            .terms-content {
                display: flex;
                align-items: center;
                gap: 10px !important;
            }

            .terms-checkbox {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .terms-checkbox-input {
                width: 20px;
                height: 20px;
                appearance: none;
                background-color: transparent;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }

            .terms-checkbox-input:checked {
                background-color: transparent;
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
            }

            .terms-checkbox-input:not(:checked) {
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
                filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%);
            }

            .terms-checkbox-label {
                font-family: "Amazon Ember";
                font-weight: 400;
                font-size: 13px;
                color: #000000;
                cursor: pointer;
                user-select: none;
                margin-bottom: 0;
                display: block;
            }

            .automate-container {
                width: 100%;
                background-color: #FFFFFF;
                border-radius: 10px;
                padding: 24px;
                margin-top: 0px;
            }

            .automate-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }

            .automate-options {
                display: flex;
                gap: 20px;
            }

            .automate-option {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .automate-option.text-swap {
                gap: 10px;
            }

            .text-swap-link {
                color: #470CED !important;
                text-decoration: underline !important;
                cursor: pointer;
                display: flex;
                align-items: center;
            }

            .text-swap-link:hover {
                color: #470CED !important;
                text-decoration: underline !important;
            }

            .text-swap-link .text-link {
                padding-left: 8px;
            }

            .text-swap-link .text-link:hover {
                color: #470CED !important;
                text-decoration: underline !important;
            }

            .text-swap-link .gap-spacer {
                width: 4px;
            }

            .text-swap-link .pdf-icon {
                width: 32px;
                height: 14px;
            }

            .automate-checkbox {
                width: 20px;
                height: 20px;
                appearance: none;
                background-color: transparent;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }

            .automate-checkbox:checked {
                background-color: transparent;
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
            }

            .automate-checkbox:not(:checked) {
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
                filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%);
            }

            .automate-label {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 13px;
                color: #000000;
                cursor: pointer;
                user-select: none;
                margin-bottom: 0;
                display: block;
            }

            .automate-label .text-link {
                color: #470CED !important;
                text-decoration: underline;
                padding: 0 4px;
                display: inline-block;
            }

            .text-container {
                display: flex;
                align-items: center;
                gap: 0;
            }

            .pdf-icon {
                width: 32px;
                height: 14px;
                margin-left: 0;
            }

            .automate-buttons {
                display: flex;
                gap: 10px;
            }

            .automate-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 32px;
                padding: 0 16px;
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 14px;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .close-btn {
                border: 1.5px solid #470CED;
                color: #470CED;
                background-color: transparent;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                padding: 0 16px;
                gap: 0;
            }

            .close-btn:hover {
                background-color: #470CED;
                color: #FFFFFF;
                border-color: #470CED;
            }

            .close-btn:hover .save-icon {
                filter: brightness(0) invert(1);
            }

            .save-icon {
                width: 16px;
                height: 16px;
                margin-right: 10px;
                transition: filter 0.2s ease;
            }

            .save-settings-btn {
                border: 1px solid #C7CDD5;
                color: #470CED;
                background-color: transparent;
                transition: all 0.2s ease;
            }

            .save-settings-btn:hover {
                background-color: #470CED;
                color: #FFFFFF;
                border-color: #470CED;
            }

            .save-settings-btn:hover .save-icon {
                filter: brightness(0) invert(1);
            }

            .save-icon {
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }

            .start-automation-btn {
                background-color: #470CED;
                color: #FFFFFF;
                border: none;
            }

            .start-automation-btn:hover:not(:disabled) {
                background-color: #2A00A0;
            }


            .start-automation-btn:disabled {
                background-color: #cfd4d4 !important;
                color: rgba(0, 0, 0, 0.8) !important;
                cursor: not-allowed !important;
                pointer-events: none !important;
            }

            .start-automation-btn:disabled img {
                opacity: 0.8 !important;
                transition: none !important;
                filter: brightness(0) !important;
                -webkit-transition: none !important;
                -moz-transition: none !important;
                -o-transition: none !important;
            }

            .apply-icon {
                width: 16px;
                height: 16px;
                margin-right: 10px;
                opacity: 1;
                transition: none;
                filter: brightness(0) invert(1);
                -webkit-transition: none;
                -moz-transition: none;
                -o-transition: none;
            }

            #snap-bulk-upload-btn .button-text {
                font-family: "Amazon Ember";
                font-size: 14px;
                font-weight: 500;
                line-height: 1;
            }

            .reset-default-btn {
                color: #606F95 !important;
                cursor: pointer;
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 13px;
                background: none;
                border: none;
                padding-right: 10px;
                margin-right: auto;
                transition: color 0.2s ease;
            }

            .reset-default-btn:hover {
                color: #470CED !important;
            }

            .control-group.custom-scale-control-group .control-label,
            .control-group.tumbler-custom-scale-control-group .control-label {
                display: none !important;
            }

            .control-group-custom-colors-control-group {
                display: flex;
                flex-direction: column;
                gap: 0;
                width: calc((100% - 40px) / 5);
                margin: 0;
            }

            .custom-color-input {
                display: flex;
                align-items: center;
                border: 1.5px solid #DCE0E5;
                border-radius: 4px;
                padding: 0;
                height: 40px;
                width: 100%;
                background: #FFFFFF;
            }

            .hex-prefix {
                width: 32px !important;
                min-width: 32px !important;
                max-width: 32px !important;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #DCE0E5;
                border-radius: 4px 0 0 4px;
                flex-shrink: 0 !important;
                box-sizing: border-box !important;
            }

            .hex-prefix * {
                all: unset !important;
            }

            .hex-prefix span {
                font-family: "Amazon Ember" !important;
                font-size: 14px !important;
                color: #606D85 !important;
                display: block !important;
                width: 100% !important;
                text-align: center !important;
            }

            .color-input {
                flex: 1;
                border: none;
                outline: none;
                font-family: "Amazon Ember";
                font-size: 12px;
                color: #181818;
                background: transparent;
                padding: 0px;
                height: 100%;
            }

            .color-input::placeholder {
                color: #BFC7D2 !important;
            }

            .custom-color-input:focus-within {
                border-color: #470CED !important;
                outline: none;
                box-shadow: none;
            }

            .custom-color-input:focus-within .hex-prefix {
                background: #470CED !important;
            }

            .custom-color-input:focus-within .hex-prefix span {
                color: #FFFFFF !important;
            }

            .custom-color-input.error {
                border-color: #FF391F !important;
            }

            .custom-color-input.error .hex-prefix {
                background: #FF391F !important;
            }

            .custom-color-input.error .hex-prefix span {
                color: #FFFFFF !important;
            }

            .color-input.error {
                color: #FF391F !important;
            }

            .custom-color-input.disabled {
                opacity: 0.5;
                pointer-events: none;
            }

            .donation-btn-wrapper {
                position: relative;
                overflow: visible;
                z-index: 1;
                display: inline-block;
                transition: transform 0.2s ease;
            }

            .donation-btn-wrapper:hover {
                transform: scale(1.05);
            }

            .donation-btn-wrapper[data-tooltip]:before {
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

            .donation-btn-wrapper[data-tooltip]:after {
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

            .donation-btn-wrapper[data-tooltip]:hover:before,
            .donation-btn-wrapper[data-tooltip]:hover:after {
                opacity: 1;
                visibility: visible;
            }

            .tooltip-wrapper {
                position: relative;
                display: flex;
                align-items: center;
            }

            .tooltip-wrapper[data-tooltip]:before {
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
                font-family: "Amazon Ember";
                font-weight: 500;
            }

            .tooltip-wrapper[data-tooltip]:after {
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

            .tooltip-wrapper[data-tooltip]:hover:before,
            .tooltip-wrapper[data-tooltip]:hover:after {
                opacity: 1;
                visibility: visible;
            }

            .automate-option.text-swap .tooltip-wrapper {
                display: flex;
                align-items: center;
                width: 100%;
            }

            .tooltip-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .automate-option {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .automate-checkbox {
                margin: 0;
                width: 20px;
                height: 20px;
                flex-shrink: 0;
            }

            .automate-label {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 13px;
                color: #000000;
                cursor: pointer;
                user-select: none;
                margin: 0;
                display: block;
            }

            .automate-option.text-swap .tooltip-wrapper {
                display: flex;
                align-items: center;
                width: 100%;
                gap: 10px;
            }

            .automate-option.text-swap .text-container {
                display: flex;
                align-items: center;
                gap: 0;
            }

            .clear-all-btn:hover {
                background: #FF391F !important;
            }

            .clear-all-btn:hover img {
                filter: brightness(0) invert(1) !important;
            }

            .social-btn-wrapper {
                position: relative;
                overflow: visible;
                z-index: 1;
                display: inline-block;
                transition: transform 0.2s ease;
            }

            .social-btn-wrapper:hover {
                transform: scale(1.05);
            }

            .social-btn-wrapper[data-tooltip]:before {
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

            .social-btn-wrapper[data-tooltip]:after {
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

            .social-btn-wrapper[data-tooltip]:hover:before,
            .social-btn-wrapper[data-tooltip]:hover:after {
                opacity: 1;
                visibility: visible;
            }

            .automate-radio {
                width: 20px;
                height: 20px;
                appearance: none;
                background-color: transparent;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s ease;
                margin: 0;
                flex-shrink: 0;
            }
            .automate-radio:checked {
                background-color: transparent;
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
            }
            .automate-radio:not(:checked) {
                background-image: url("${chrome.runtime.getURL("assets/checkbox-ic.svg")}");
                background-size: 20px 20px;
                background-position: center;
                background-repeat: no-repeat;
                filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%);
            }
            .automate-radio-label {
                font-family: "Amazon Ember";
                font-weight: 500;
                font-size: 13px;
                color: #000000;
                cursor: pointer;
                user-select: none;
                margin: 0;
                display: block;
            }
        `,document.head.appendChild(l),setTimeout(()=>{let e=document.querySelector(".percent-prefix");e&&e.classList.add("debug")},1e3);let t=`
            <div class="snap-bulk-upload-overlay">
                <div class="snap-bulk-upload-container">
                    <div class="upload-tray-container">
                        <div class="upload-tray-header">
                            <div class="header-left" style="display: flex; align-items: center;">
                                <img src="${chrome.runtime.getURL("assets/upload-tray-ic.svg")}" alt="Upload Tray Icon" style="width: 20.76px; height: 20.76px;">
                                <h2 style="margin-right: 32px;">Upload Tray</h2>
                                <div style="display: flex; gap: 32px;">
                                    <div class="native-uploader" style="display: flex; align-items: center;">
                                        <input type="radio" id="native-uploader" name="uploader-type" class="automate-radio" style="margin: 0;">
                                        <label for="native-uploader" class="automate-radio-label" style="margin-left: 10px;">Use Native Uploader</label>
                                    </div>
                                    <div class="snap-uploader" style="display: flex; align-items: center;">
                                        <input type="radio" id="snap-uploader" name="uploader-type" class="automate-radio" checked style="margin: 0;">
                                        <label for="snap-uploader" class="automate-radio-label" style="margin-left: 10px;">Use Snap Uploader</label>
                                    </div>
                                </div>
                            </div>
                            <div class="header-right">
                                <button class="social-btn-wrapper" data-tooltip="Join Merch Momentum Group" style="background: none; border: none; padding: 0; cursor: pointer; margin-right: 10px; position: relative; overflow: visible;">
                                    <a href="https://www.facebook.com/groups/1828483987467702" target="_blank">
                                        <img src="${chrome.runtime.getURL("assets/fb-ic.svg")}" alt="Join Facebook Group" class="social-btn" style="height: 24px; width: auto;">
                                    </a>
                                </button>
                                <button class="social-btn-wrapper" data-tooltip="Join Discord Server" style="background: none; border: none; padding: 0; cursor: pointer; margin-right: 10px; position: relative; overflow: visible;">
                                    <a href="https://discord.com/invite/ZAq3MQkvNj" target="_blank">
                                        <img src="${chrome.runtime.getURL("assets/discord-ic.svg")}" alt="Join Discord Server" class="social-btn" style="height: 24px; width: auto;">
                                    </a>
                                </button>
                                <button class="social-btn-wrapper" data-tooltip="Subscribe to Philip Anders on YouTube" style="background: none; border: none; padding: 0; cursor: pointer; margin-right: 10px; position: relative; overflow: visible;">
                                    <a href="https://www.youtube.com/watch?v=zCkAg68r0S4" target="_blank">
                                        <img src="${chrome.runtime.getURL("assets/youtube-ic.svg")}" alt="Subscribe to Philip Anders on YouTube" class="social-btn" style="height: 24px; width: auto;">
                                    </a>
                                </button>
                                <button class="donation-btn-wrapper" data-tooltip="Support Snap" style="background: none; border: none; padding: 0; cursor: pointer;">
                                    <img src="${chrome.runtime.getURL("assets/bmc-button.png")}" alt="Buy Me a Coffee" class="donation-btn" style="height: 28px; width: auto;">
                                </button>
                            </div>
                        </div>
                        <input type="file" id="fileInput" multiple accept="image/png" style="display: none;">
                        <div class="drag-drop-area dashed-border" id="dragDropArea">
                            <img src="${chrome.runtime.getURL("assets/drag-drop-multiple-ic.svg")}" alt="Drag and Drop Icon">
                            <div class="text-container">
                                <p class="primary-text">Drag and drop a folder or multiple PNG files here.</p>
                                <p class="secondary-text">Maximum file size: 25MB, up to 50 files allowed.</p>
                            </div>
                        </div>
                        <div class="loaded-files dashed-border" id="loadedFiles">
                            <div class="files-main">
                                <div class="files-header">
                                    <div class="files-label">
                                        <span>Loaded files</span>
                                        <div class="files-counter">
                                            <span>48 of 50</span>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <span class="progress-text">100%</span>
                                    </div>
                                </div>
                                <div class="snap-progress-bar">
                                    <div class="snap-progress-fill"></div>
                                </div>
                            </div>
                            <div class="clear-section">
                                <button class="clear-all-btn" data-tooltip="Clear Loaded Files">
                                    <img src="${chrome.runtime.getURL("assets/clear.svg")}" alt="Clear All">
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="products-options-container">
                        <div class="products-options-header">
                            <div class="header-left">
                                <img src="${chrome.runtime.getURL("assets/products-options-ic.svg")}" alt="Products Options Icon">
                                <h2>Products Options</h2>
                            </div>
                            <div class="tip-container">
                                <div class="tip-icon">
                                    <img src="${chrome.runtime.getURL("assets/apply.svg")}" alt="Tip Icon">
                                </div>
                                <div class="automation-tip">
                                    <span>For quick automation, use <strong>'Save Publish Settings'</strong> in Merch Create to save colors and prices.</span>
                                </div>
                            </div>
                        </div>

                        <div class="clothing-products-card">
                            <div class="clothing-products-header">
                                <div class="header-left">
                                    <div class="toggle-container">
                                        <button class="toggle-btn active">
                                            <span class="toggle-handle"></span>
                                        </button>
                                    </div>
                                    <span class="header-text">Clothing Products</span>
                                </div>
                            </div>
                            <div class="clothing-products-controls">
                                <div class="control-group shirts-control-group">
                                    <div class="product-type-label">
                                        <span>Shirts</span>
                                    </div>
                                    <span class="control-label">Sides Options:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Default (Front)</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Default (Front)</div>
                                                <div class="dropdown-item">Back</div>
                                                <div class="dropdown-item">Frontside (Pocket)</div>
                                                <div class="dropdown-item">Back & Pocket</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group hoodie-control-group">
                                    <div class="product-type-label">
                                        <span>Pullover Hoodie</span>
                                    </div>
                                    <span class="control-label">Sides Options:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Default (Front)</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Default (Front)</div>
                                                <div class="dropdown-item">Back</div>
                                                <div class="dropdown-item">Frontside (Pocket)</div>
                                                <div class="dropdown-item">Back & Pocket</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group zip-control-group">
                                    <div class="product-type-label">
                                        <span>ZIP Hoodie</span>
                                    </div>
                                    <span class="control-label">Sides Options:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Default (Front)</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Default (Front)</div>
                                                <div class="dropdown-item">Back</div>
                                                <div class="dropdown-item">Frontside (Pocket)</div>
                                                <div class="dropdown-item">Back & Pocket</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group allproducts-colors-control-group">
                                    <div class="product-type-label">
                                        <span>All Products</span>
                                    </div>
                                    <span class="control-label">Colors:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Dark Colors</div>
                                                <div class="dropdown-item">Light Colors</div>
                                                <div class="dropdown-item">All Colors</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group allproducts-prices-control-group">
                                    <div class="product-type-label">
                                        <span>All Products</span>
                                    </div>
                                    <span class="control-label">Prices:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Default Prices</div>
                                                <div class="dropdown-item">Suggested Prices</div>
                                                <div class="dropdown-item">Market Average</div>
                                                <div class="dropdown-item">Max Prices</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scalable-products-card">
                            <div class="scalable-products-header">
                                <div class="header-left">
                                    <div class="toggle-container">
                                        <button class="toggle-btn active">
                                            <span class="toggle-handle"></span>
                                        </button>
                                    </div>
                                    <span class="header-text">Scalable Products</span>
                                </div>
                            </div>
                            <div class="scalable-products-controls">
                                <div class="control-group scale-options-control-group">
                                    <span class="control-label">Scale & Pattern Options:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Keep current</div>
                                                <div class="dropdown-item">Custom scale</div>
                                                <div class="dropdown-item">100%</div>
                                                <div class="dropdown-item">85%</div>
                                                <div class="dropdown-item">75%</div>
                                                <div class="dropdown-item">Pattern</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group custom-scale-control-group">
                                    <span class="control-label">Custom Scale</span>
                                    <div class="control-group-wrapper">
                                        <div class="custom-scale-input disabled">
                                            <div class="percent-prefix">
                                                <span>%</span>
                                            </div>
                                            <input type="text" class="scale-input" placeholder="50 to 100%" maxlength="3" disabled>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group color-options-control-group">
                                    <span class="control-label">Color:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <div class="header-content">
                                                <div class="color-indicator" style="background-color: #FFFFFF;"></div>
                                                <span>Default (White)</span>
                                            </div>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item">
                                                    <div class="color-indicator">
                                                        <img src="${chrome.runtime.getURL("assets/colorwheel-ic.svg")}" alt="Color Wheel">
                                                    </div>
                                                    Custom Color
                                                </div>
                                                <div class="dropdown-item selected">
                                                    <div class="color-indicator" style="background-color: #FFFFFF;"></div>
                                                    Default (White)
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #000000;"></div>
                                                    Black
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #840A08;"></div>
                                                    Dark Red
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #C70010;"></div>
                                                    Crimson
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #F36900;"></div>
                                                    Vivid Orange
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #FEC600;"></div>
                                                    Bright Yellow
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #01B62F;"></div>
                                                    Kelly Green
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #1C8C46;"></div>
                                                    Forest Green
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #37602B;"></div>
                                                    Dark Olive
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #1AB7EA;"></div>
                                                    Sky Blue
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #002BB6;"></div>
                                                    Royal Blue
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #5C2D91;"></div>
                                                    Purple
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #E0218A;"></div>
                                                    Hot Pink
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #E9CDDB;"></div>
                                                    Pale Pink
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #7B4A1B;"></div>
                                                    Brown
                                                </div>
                                                <div class="dropdown-item">
                                                    <div class="color-indicator" style="background-color: #979797;"></div>
                                                    Gray
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group-custom-colors-control-group">
                                    <div class="control-group-wrapper">
                                        <div class="custom-color-input disabled">
                                            <div class="hex-prefix">
                                                <span>#</span>
                                            </div>
                                            <input type="text" class="color-input" placeholder="Hexcode" disabled>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group price-options-control-group">
                                    <span class="control-label">Prices:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Default Prices</div>
                                                <div class="dropdown-item">Suggested Prices</div>
                                                <div class="dropdown-item">Market Average</div>
                                                <div class="dropdown-item">Max Prices</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tumbler-products-card">
                            <div class="tumbler-products-header">
                                <div class="header-left">
                                    <div class="toggle-container">
                                        <button class="toggle-btn active">
                                            <span class="toggle-handle"></span>
                                        </button>
                                    </div>
                                    <span class="header-text">Tumbler Product</span>
                                </div>
                            </div>
                            <div class="tumbler-products-controls">
                                <div class="control-group tumbler-sides-control-group">
                                    <span class="control-label">Sides Options:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Default (One Side)</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Default (One Side)</div>
                                                <div class="dropdown-item">Two Sides</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group tumbler-scale-control-group">
                                    <span class="control-label">Scale:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>100%</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item">Custom scale</div>
                                                <div class="dropdown-item selected">100%</div>
                                                <div class="dropdown-item">85%</div>
                                                <div class="dropdown-item">75%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group tumbler-custom-scale-control-group">
                                    <span class="control-label">Custom Scale</span>
                                    <div class="control-group-wrapper">
                                        <div class="custom-scale-input disabled">
                                            <div class="percent-prefix">
                                                <span>%</span>
                                            </div>
                                            <input type="text" class="scale-input" placeholder="50 to 100%" maxlength="3" disabled>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group tumbler-colors-control-group">
                                    <span class="control-label">Colors:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Dark Colors</div>
                                                <div class="dropdown-item">Light Colors</div>
                                                <div class="dropdown-item">All Colors</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group tumbler-prices-control-group">
                                    <span class="control-label">Prices:</span>
                                    <div class="snap-dropdown">
                                        <div class="dropdown-header">
                                            <span>Skip</span>
                                            <img src="${chrome.runtime.getURL("assets/dropdown-ic.svg")}" alt="Dropdown">
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-list">
                                                <div class="dropdown-item selected">Skip</div>
                                                <div class="dropdown-item">Default Prices</div>
                                                <div class="dropdown-item">Suggested Prices</div>
                                                <div class="dropdown-item">Market Average</div>
                                                <div class="dropdown-item">Max Prices</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="terms-container">
                        <div class="terms-content">
                            <div class="terms-checkbox">
                                <input type="checkbox" id="terms-checkbox" class="terms-checkbox-input">
                                <label for="terms-checkbox" class="terms-checkbox-label">
                                    You agree that originality matters, and uploading others' designs without consent is unfair and unethical. <strong>You're not a THIEF.</strong>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="automate-container">
                        <div class="automate-content">
                            <div class="automate-options">
                                <div class="automate-option">
                                    <div class="tooltip-wrapper" data-tooltip="Save listing to drafts">
                                        <input type="checkbox" id="save-to-drafts" class="automate-checkbox">
                                        <label for="save-to-drafts" class="automate-label">Save to Drafts</label>
                                    </div>
                                </div>
                                <div class="automate-option">
                                    <div class="tooltip-wrapper" data-tooltip="Copy EN to all languages">
                                        <input type="checkbox" id="copy-en-to-all" class="automate-checkbox">
                                        <label for="copy-en-to-all" class="automate-label">Copy EN to All</label>
                                    </div>
                                </div>
                                <div class="automate-option text-swap">
                                    <div class="tooltip-wrapper" data-tooltip="Place #snap in your text to be replaced with the uploaded file name">
                                        <input type="checkbox" id="auto-text-swap" class="automate-checkbox">
                                        <div class="text-container">
                                            <label for="auto-text-swap" class="automate-label">Text Swap </label>
                                            <a href="#" class="text-swap-link">
                                                <span class="text-link">How?</span>
                                                <span class="gap-spacer"></span>
                                                <img src="${chrome.runtime.getURL("assets/pdf-ic.svg")}" alt="PDF Icon" class="pdf-icon">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="automate-buttons">
                                <button class="reset-default-btn">Reset to default</button>
                                <button id="close-btn" class="automate-btn close-btn">
                                    <img src="${chrome.runtime.getURL("assets/save-color-ic.svg")}" alt="Save Icon" class="save-icon">
                                    Save & Close
                                </button>
                                <button id="start-automation-btn" class="automate-btn start-automation-btn">
                                    <img src="${chrome.runtime.getURL("assets/apply.svg")}" alt="Apply Icon" class="apply-icon">
                                    Start Automation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,s=document.createElement("div");s.innerHTML=t,document.body.appendChild(s),C(),function e(){let t=document.getElementById("terms-checkbox");r(t)}(),function e(){let t={saveToDrafts:document.getElementById("save-to-drafts"),copyEnToAll:document.getElementById("copy-en-to-all"),autoTextSwap:document.getElementById("auto-text-swap")};Object.values(t).forEach(e=>r(e))}(),function e(){let t=document.querySelector(".reset-default-btn");t&&(t.removeEventListener("click",b),t.addEventListener("click",()=>{b()}))}(),S();let n=document.getElementById("close-btn");n&&n.addEventListener("click",()=>o(!0));let a=document.querySelector(".snap-bulk-upload-overlay");a.addEventListener("click",e=>{e.target===a&&o(!1)});let i=document.querySelectorAll(".toggle-btn");i.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active");let t=e.classList.contains("active");e.style.backgroundColor=t?"#470CED":"#cfd4d4";let o=e.closest(".clothing-products-card, .scalable-products-card, .tumbler-products-card"),r=o.querySelector(".clothing-products-controls, .scalable-products-controls, .tumbler-products-controls");t?(o.classList.remove("off"),r.classList.remove("off")):(o.classList.add("off"),r.classList.add("off")),x()})}),!function e(){let t=document.getElementById("dragDropArea"),o=document.getElementById("fileInput");function r(e){let t=[],o={wrongFormat:[],tooLarge:[],excess:[]};if(Array.from(e).forEach((e,r)=>{if(t.length>=50){o.excess.push(e.name);return}"image/png"===e.type?e.size<=25165824?t.push(e):o.tooLarge.push(e.name):o.wrongFormat.push(e.name)}),o.wrongFormat.length>0||o.tooLarge.length>0||o.excess.length>0){let r="",l=o.wrongFormat.length+o.tooLarge.length+o.excess.length;r=1===l?"One file was skipped:\n\n":`${l} files were skipped:

`,o.wrongFormat.length>0&&(1===o.wrongFormat.length?r+="Non-PNG file (skipped):\n":r+="Non-PNG files (skipped):\n",r+=o.wrongFormat.join("\n")+"\n\n"),o.tooLarge.length>0&&(1===o.tooLarge.length?r+="File larger than 24MB (skipped):\n":r+="Files larger than 24MB (skipped):\n",r+=o.tooLarge.join("\n")+"\n\n"),o.excess.length>0&&(1===o.excess.length?r+="File exceeding 50 file limit (skipped):\n":r+="Files exceeding 50 file limit (skipped):\n",r+=o.excess.join("\n")),setTimeout(()=>{alert(r),t.length>0&&n(t)},500)}else t.length>0&&n(t);if(0===t.length){let s=document.getElementById("dragDropArea");s.style.display="flex",s.style.alignItems="center",s.style.justifyContent="center",s.classList.remove("drag-active");return}function n(e){let t=document.getElementById("loadedFiles"),o=document.getElementById("dragDropArea"),r=t.querySelector(".files-counter span"),l=t.querySelector(".progress-text"),s=t.querySelector(".snap-progress-fill"),n=Math.min(Math.round(e.length/50*100),100);window.validFilesForAutomation=e,o.style.display="none",t.classList.add("active"),r.textContent=`${e.length} of 50`,l.textContent="0% of max files",x(),setTimeout(()=>{s.classList.add("active"),s.style.width=`${n}%`},50);let a;function i(e){a||(a=e);let t=e-a,o=Math.min(t/1e3,1);l.textContent=`${Math.round(o*n)}% of max files`,o<1&&requestAnimationFrame(i)}requestAnimationFrame(i);let c=t.querySelector(".clear-all-btn");c.addEventListener("click",()=>{t.classList.remove("active"),s.classList.remove("active"),s.style.width="0",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.classList.remove("drag-active"),x();let e=o.querySelector(".text-container");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";let r=e.querySelector(".primary-text"),l=e.querySelector(".secondary-text");r.textContent="Drag and drop a folder or multiple PNG files here, or paste (Ctrl/CMD+V).",l.textContent="Maximum file size: 25MB, up to 50 files allowed.",r.style.textAlign="left",l.style.textAlign="left";let n=document.getElementById("fileInput");n&&(n.value=""),window.validFilesForAutomation=null})}return t}t.setAttribute("tabindex","0"),t.addEventListener("focus",()=>{t.classList.add("drag-active")}),t.addEventListener("blur",()=>{t.classList.remove("drag-active")}),t.addEventListener("paste",e=>{e.preventDefault(),e.stopPropagation();let t=e.clipboardData.items,o=[],l=0;function s(e){return new Promise(t=>{if("file"===e.kind){let r=e.getAsFile();r&&o.push(r)}l++,t()})}let n=[];for(let a=0;a<t.length;a++)n.push(s(t[a]));Promise.all(n).then(()=>{o.length>0&&r(o)})}),t.addEventListener("click",()=>{o.click(),t.focus()}),o.addEventListener("change",e=>{r(e.target.files)}),t.addEventListener("dragenter",e=>{e.preventDefault(),t.classList.add("drag-active")}),t.addEventListener("dragover",e=>{e.preventDefault()}),t.addEventListener("dragleave",e=>{e.preventDefault(),t.contains(e.relatedTarget)||t.classList.remove("drag-active")}),t.addEventListener("drop",e=>{e.preventDefault(),t.classList.remove("drag-active");let o=e.dataTransfer.items,l=[],s=0;function n(e,t){return new Promise(o=>{if(e.isFile)e.file(e=>{s++,l.push(e),o()});else if(e.isDirectory){let r=e.createReader();r.readEntries(r=>{let l=r.map(o=>n(o,t+e.name+"/"));Promise.all(l).then(()=>{s++,o()})})}else s++,o()})}o.length;let a=[];for(let i=0;i<o.length;i++){let c=o[i].webkitGetAsEntry();c&&a.push(n(c,""))}Promise.all(a).then(()=>{r(l)})})}();let c=document.createElement("button");c.id="snap-bulk-upload-btn";let d=document.createElement("div");d.className="lottie-icon";let p=document.createElement("span");p.className="button-text",p.textContent="Snap Bulk Upload",c.appendChild(d),c.appendChild(p);let u=!1;c.addEventListener("click",()=>{(function e(){let t=localStorage.getItem("snapSettings");if(!t)return;let o=JSON.parse(t),r=document.getElementById("save-to-drafts"),l=document.getElementById("copy-en-to-all"),s=document.getElementById("auto-text-swap"),n=document.getElementById("terms-checkbox");r&&(r.checked=o.saveToDrafts,r.style.filter=o.saveToDrafts?"none":"invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)"),l&&(l.checked=o.copyEnToAll,l.style.filter=o.copyEnToAll?"none":"invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)"),s&&(s.checked=o.autoTextSwap,s.style.filter=o.autoTextSwap?"none":"invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)"),n&&(n.checked=!1,n.style.filter="invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)");let a=document.querySelectorAll(".clothing-products-card");a.forEach(e=>{let t=e.querySelector(".header-text");if(!t)return;let r=t.textContent,l=o.clothingProducts[r];if(l){let s=e.querySelector(".toggle-btn"),n=e.querySelector(".clothing-products-controls");l.isActive?(s.classList.add("active"),s.style.backgroundColor="#470CED",e.classList.remove("off"),n&&n.classList.remove("off")):(s.classList.remove("active"),s.style.backgroundColor="#cfd4d4",e.classList.add("off"),n&&n.classList.add("off"));let a=e.querySelector(".shirts-control-group .snap-dropdown");l.shirts&&l.shirts.sides&&A(a,l.shirts.sides);let i=e.querySelector(".hoodie-control-group .snap-dropdown");l.pulloverHoodie&&l.pulloverHoodie.sides&&A(i,l.pulloverHoodie.sides);let c=e.querySelector(".zip-control-group .snap-dropdown");l.zipHoodie&&l.zipHoodie.sides&&A(c,l.zipHoodie.sides);let d=e.querySelector(".allproducts-colors-control-group .snap-dropdown");A(d,l.colors);let p=e.querySelector(".allproducts-prices-control-group .snap-dropdown");A(p,l.prices)}});let i=document.querySelectorAll(".scalable-products-card");i.forEach(e=>{let t=e.querySelector(".header-text");if(!t)return;let r=t.textContent,l=o.scalableProducts[r];if(l){let s=e.querySelector(".toggle-btn"),n=e.querySelector(".scalable-products-controls");if(l.isActive?(s.classList.add("active"),s.style.backgroundColor="#470CED",e.classList.remove("off"),n&&n.classList.remove("off")):(s.classList.remove("active"),s.style.backgroundColor="#cfd4d4",e.classList.add("off"),n&&n.classList.add("off")),"Custom Color"===l.color){let a=e.querySelector(".control-group-custom-colors-control-group .custom-color-input"),i=a?.querySelector(".color-input");if(a&&i){if(a.classList.remove("disabled"),i.disabled=!1,l.customColor){i.value="",i.focus();let c=l.customColor;for(let d=0;d<c.length;d++)i.value+=c[d],i.dispatchEvent(new Event("input",{bubbles:!0}));i.blur()}else i.focus(),"FFFFFF".split("").forEach(e=>{i.value+=e,i.dispatchEvent(new Event("input",{bubbles:!0}))}),i.blur()}}let p=e.querySelector(".scale-options-control-group .snap-dropdown");if(A(p,l.scale),"Custom scale"===l.scale&&l.customScale){let u=e.querySelector(".custom-scale-control-group .scale-input");u&&(u.value=l.customScale,u.dispatchEvent(new Event("input")))}let g=e.querySelector(".color-options-control-group .snap-dropdown");A(g,l.color);let m=e.querySelector(".price-options-control-group .snap-dropdown");A(m,l.price)}});let c=document.querySelectorAll(".tumbler-products-card");c.forEach(e=>{let t=e.querySelector(".header-text");if(!t)return;let r=t.textContent,l=o.tumblerProducts[r];if(l){let s=e.querySelector(".toggle-btn"),n=e.querySelector(".tumbler-products-controls");l.isActive?(s.classList.add("active"),s.style.backgroundColor="#470CED",e.classList.remove("off"),n&&n.classList.remove("off")):(s.classList.remove("active"),s.style.backgroundColor="#cfd4d4",e.classList.add("off"),n&&n.classList.add("off"));let a=e.querySelector(".tumbler-sides-control-group .snap-dropdown");if(A(a,l.sides),"Two Sides"===l.sides){let i=e.querySelector(".tumbler-scale-control-group .snap-dropdown"),c=i?.querySelector(".dropdown-list");if(c&&!c.querySelector(".dropdown-item:last-child")?.textContent.includes("Pattern")){let d=document.createElement("div");d.className="dropdown-item",d.textContent="Pattern",d.addEventListener("click",t=>{t.stopPropagation();let o=i.querySelector(".dropdown-header span");o.textContent="Pattern",c.querySelectorAll(".dropdown-item").forEach(e=>e.classList.remove("selected")),d.classList.add("selected");let r=c.closest(".dropdown-menu");r.classList.remove("show"),r.closest(".snap-dropdown").classList.remove("focused");let l=e.querySelector(".tumbler-custom-scale-control-group .custom-scale-input");if(l){l.classList.add("disabled");let s=l.querySelector(".scale-input");s&&(s.disabled=!0,s.value="")}}),c.appendChild(d)}}let p=e.querySelector(".tumbler-scale-control-group .snap-dropdown");if(A(p,l.scale),"Custom scale"===l.scale&&l.customScale){let u=e.querySelector(".tumbler-custom-scale-control-group .scale-input");u&&(u.value=l.customScale,u.dispatchEvent(new Event("input")))}let g=e.querySelector(".tumbler-colors-control-group .snap-dropdown");A(g,l.color);let m=e.querySelector(".tumbler-prices-control-group .snap-dropdown");A(m,l.price)}}),x();let d=document.getElementById("native-uploader"),p=document.getElementById("snap-uploader");d&&p&&("native"===o.uploaderType?(d.checked=!0,p.checked=!1):(d.checked=!1,p.checked=!0))})();let e=document.querySelector(".snap-bulk-upload-overlay");e.classList.remove("closing"),e.style.display="flex",document.body.style.overflow="hidden",document.body.style.height="100%",e.offsetHeight,e.classList.add("show"),u=!0,setTimeout(()=>{k()},100),setTimeout(()=>{(function e(){let t=document.querySelector(".color-options-control-group .snap-dropdown");if(!t)return;let o=t.querySelector(".dropdown-header"),r=t.querySelector(".dropdown-menu"),l=[];t.querySelectorAll(".dropdown-item").forEach(e=>{let s=e.cloneNode(!0);e.parentNode.replaceChild(s,e),l.push(s),s.addEventListener("click",e=>{if(e.stopPropagation(),s.classList.contains("selected"))return;let n=s.querySelector(".color-indicator"),a=s.textContent.trim(),i=o.querySelector(".header-content"),c=i.querySelector(".color-indicator");"Custom Color"===a?(c.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',c.style.backgroundColor=""):(c.innerHTML="",c.style.backgroundColor=n.style.backgroundColor),i.querySelector("span").textContent=a,l.forEach(e=>e.classList.remove("selected")),s.classList.add("selected"),r.classList.remove("show"),t.classList.remove("focused");let d=document.querySelector(".control-group-custom-colors-control-group .custom-color-input"),p=d?.querySelector(".color-input");if("Custom Color"===a){if(d&&p){d.classList.remove("disabled"),p.disabled=!1;let u=d.querySelector(".color-live-indicator");u&&(u.style.backgroundColor="#FFFFFF"),p.value,p.value="FFFFFF",D(d,"FFFFFF"),d.style.borderColor="#DCE0E5";let g=d.querySelector(".hex-prefix");g&&(g.style.backgroundColor="#DCE0E5",g.querySelector("span").style.color="#606D85"),setTimeout(()=>p.focus(),0)}}else if(d&&p){d.classList.add("disabled"),d.classList.remove("error"),p.classList.remove("error"),p.disabled=!0,p.value="",d.style.borderColor="#DCE0E5";let m=d.querySelector(".hex-prefix");m&&(m.style.backgroundColor="#DCE0E5",m.querySelector("span").style.color="#606D85");let $=d.querySelector(".color-live-indicator");$&&($.style.cssText=`
                                width: 16px;
                                height: 16px;
                                border-radius: 50%;
                                border: 0.6px solid #C8CDD9;
                                margin: 0 8px;
                                background-color: #FFFFFF !important;
                                flex-shrink: 0;
                            `)}x()})})})(),q(),function e(){let t=document.querySelectorAll(".snap-dropdown");t.forEach(e=>{let t=e.querySelector(".dropdown-header"),o=e.querySelector(".dropdown-menu"),r=e.querySelectorAll(".dropdown-item");r.forEach(l=>{l.addEventListener("click",s=>{s.stopPropagation();let n=l.textContent.trim();t.querySelector("span").textContent=n,r.forEach(e=>e.classList.remove("selected")),l.classList.add("selected"),o.classList.remove("show"),e.classList.remove("focused"),e.closest(".scale-options-control-group")?$(n,e):e.closest(".tumbler-scale-control-group")?v(n):e.closest(".color-options-control-group")&&w(n,e)})})})}()},200);let t=document.getElementById("dragDropArea"),o=t.querySelector(".text-container"),r=o.querySelector(".primary-text"),l=o.querySelector(".secondary-text");r.textContent="Drag and drop a folder or multiple PNG files here, or paste (Ctrl/CMD+V).",l.textContent="Maximum file size: 25MB, up to 50 files allowed.",x()}),document.addEventListener("paste",async e=>{if(!u)return;let t=document.getElementById("dragDropArea");if(!t)return;let o=document.activeElement;"INPUT"===o.tagName||"TEXTAREA"===o.tagName||o.isContentEditable;let r=e.clipboardData.items,l=Array.from(r).some(e=>"file"===e.kind);if(l){e.preventDefault(),e.stopPropagation();let s=[],n=[];async function a(e){if(e.isFile)return new Promise(t=>{e.file(e=>{s.push(e),t()})});if(e.isDirectory){let t=e.createReader();return new Promise(e=>{t.readEntries(async t=>{let o=t.map(e=>a(e));await Promise.all(o),e()})})}}for(let i=0;i<r.length;i++){let c=r[i];if("file"===c.kind){let d=c.webkitGetAsEntry?.()||c.getAsEntry?.();if(d)n.push(a(d));else{let p=c.getAsFile();p&&s.push(p)}}}try{if(await Promise.all(n),s.length>0){let g=new DataTransfer;s.forEach(e=>{try{g.items.add(e)}catch(t){}});let m=document.getElementById("fileInput");if(m)try{m.files=g.files;let $=new Event("change",{bubbles:!0});m.dispatchEvent($)}catch(v){handleFiles(s)}else handleFiles(s)}}catch(b){}}}),document.addEventListener("keydown",e=>{if(!u)return}),document.body.appendChild(c),function e(){try{let t=c.querySelector(".lottie-icon");t&&lottie.loadAnimation({container:t,renderer:"svg",loop:!0,autoplay:!0,path:chrome.runtime.getURL("assets/lightning-white.json"),rendererSettings:{progressiveLoad:!0,preserveAspectRatio:"xMidYMid meet"}})}catch(o){}}(),document.querySelectorAll(".snap-dropdown").forEach(e=>{let t=e.querySelector(".dropdown-header"),o=e.querySelector(".dropdown-menu"),r=e.querySelectorAll(".dropdown-item");t.addEventListener("click",t=>{t.stopPropagation(),o.classList.contains("show"),document.querySelectorAll(".snap-dropdown .dropdown-menu.show").forEach(e=>{e!==o&&(e.classList.remove("show"),e.closest(".snap-dropdown").classList.remove("focused"))}),o.classList.toggle("show"),e.classList.toggle("focused")}),r.forEach(l=>{l.addEventListener("click",s=>{if(s.stopPropagation(),l.classList.contains("selected"))return;let n=l.textContent.trim();if(t.querySelector("span").textContent=n,r.forEach(e=>e.classList.remove("selected")),l.classList.add("selected"),o.classList.remove("show"),e.classList.remove("focused"),e.closest(".scale-options-control-group"))$(n,e);else if(e.closest(".color-options-control-group"))w(n,e);else if(e.closest(".tumbler-scale-control-group"))v(n);else if(e.closest(".tumbler-sides-control-group")){let a=document.querySelector(".tumbler-scale-control-group .snap-dropdown"),i=a.querySelector(".dropdown-list"),c=a.querySelector(".dropdown-header span");if("Two Sides"===n){if(!i.querySelector(".dropdown-item:last-child").textContent.includes("Pattern")){let d=document.createElement("div");d.className="dropdown-item",d.textContent="Pattern",d.addEventListener("click",e=>{e.stopPropagation(),c.textContent="Pattern",i.querySelectorAll(".dropdown-item").forEach(e=>e.classList.remove("selected")),d.classList.add("selected");let t=i.closest(".dropdown-menu");t.classList.remove("show"),t.closest(".snap-dropdown").classList.remove("focused");let o=document.querySelector(".tumbler-products-card .tumbler-custom-scale-control-group .custom-scale-input");if(o){o.classList.add("disabled");let r=o.querySelector(".scale-input");r.disabled=!0,r.value="",o.classList.remove("error"),r.classList.remove("error"),o.style.borderColor="#DCE0E5",o.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",o.querySelector(".percent-prefix span").style.color="#606D85"}x()}),i.appendChild(d)}}else{let p=i.querySelector(".dropdown-item:last-child");if(p&&p.textContent.includes("Pattern")){if(p.classList.contains("selected")){let u=i.querySelector(".dropdown-item");u&&(u.classList.add("selected"),c.textContent=u.textContent)}p.remove()}}}x()})})}),document.addEventListener("click",e=>{let t=e.target.closest(".snap-dropdown");t||document.querySelectorAll(".snap-dropdown .dropdown-menu.show").forEach(e=>{e.classList.remove("show"),e.closest(".snap-dropdown").classList.remove("focused")})});let g=document.querySelector(".color-options-control-group .snap-dropdown");if(g){let m=g.querySelector(".dropdown-header"),f=g.querySelector(".dropdown-menu"),h=g.querySelectorAll(".dropdown-item"),y=m.querySelector(".header-content"),_=g.querySelector(".dropdown-item.selected");if(_){let F=_.querySelector(".color-indicator").cloneNode(!0);y.innerHTML="",y.appendChild(F);let E=document.createElement("span");E.textContent=_.textContent.trim(),y.appendChild(E)}m.addEventListener("click",e=>{e.stopPropagation(),document.querySelectorAll(".snap-dropdown .dropdown-menu.show").forEach(e=>{e!==f&&(e.classList.remove("show"),e.closest(".snap-dropdown").classList.remove("focused"))}),f.classList.toggle("show"),g.classList.toggle("focused")}),h.forEach(e=>{e.addEventListener("click",t=>{if(t.stopPropagation(),e.classList.contains("selected"))return;let o=e.querySelector(".color-indicator"),r=e.textContent.trim(),l=m.querySelector(".header-content"),s=l.querySelector(".color-indicator");"Custom Color"===r?(s.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',s.style.backgroundColor=""):(s.innerHTML="",s.style.backgroundColor=o.style.backgroundColor),l.querySelector("span").textContent=r,h.forEach(e=>e.classList.remove("selected")),e.classList.add("selected"),f.classList.remove("show"),g.classList.remove("focused"),w(r,g),x()})})}let L=document.querySelector(".automation-tip span"),z,B=!1;if(L){let P=["For quick automation, use <strong>'Save Publish Settings'</strong> in Merch Create to save colors and prices.","Your designs will be uploaded with default settings when products options are turned off.","Your designs will be uploaded, compressed, and converted to 4500x5400px with <strong>Snap Uploader</strong>.","When automation starts, feel free to browse in another window, but <strong>DO NOT MINIMIZE</strong> the automation window.","Due to browser restrictions, the automation window must remain at least partially visible when you're multi-tasking."],I=0,U=L.closest(".automation-tip");function T(e){let t=document.createElement("span");t.style.visibility="hidden",t.style.position="absolute",t.style.whiteSpace="nowrap",t.style.font=window.getComputedStyle(L).font,t.style.display="inline-block",t.innerHTML=e,document.body.appendChild(t);let o=t.offsetWidth;return document.body.removeChild(t),o+20}if(U&&(U.style.display="flex",U.style.alignItems="center",U.style.background="rgba(0, 122, 255, 0.1)",U.style.borderRadius="4px",U.style.padding="4px 0",U.style.marginLeft="10px",U.style.transition="width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",U.style.overflow="hidden"),L.style.position="relative",L.style.display="inline-block",L.style.padding="0 10px",L.style.margin="0",L.style.whiteSpace="nowrap",L.style.overflow="hidden",L.style.boxSizing="border-box",L.innerHTML=P[0],L.style.transform="translateX(0)",L.style.transition="transform 0.3s cubic-bezier(0.0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.0, 0, 0.2, 1)",L.style.fontWeight="500",U){let R=T(P[0]);U.style.width=`${R}px`}c.addEventListener("click",()=>{if(z&&clearInterval(z),I=0,L.innerHTML=P[0],L.style.opacity="1",L.style.transform="translateX(0)",B=!1,U){let e=T(P[0]);U.style.width=`${e}px`}z=setInterval(()=>{B||B||(B=!0,I=(I+1)%P.length,L.style.transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",L.style.transform="translateX(-10px)",L.style.opacity="0",setTimeout(()=>{if(L.style.transition="none",L.style.transform="translateX(10px)",L.innerHTML=P[I],L.offsetHeight,U){let e=T(P[I]);U.style.width=`${e}px`}L.style.transition="transform 0.3s cubic-bezier(0.0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.0, 0, 0.2, 1)",L.style.transform="translateX(0)",L.style.opacity="1",setTimeout(()=>{B=!1},400)},400))},7e3)}),a.addEventListener("click",e=>{e.target===a&&(clearInterval(z),z=null,B=!1,L.style.opacity="1",L.style.transform="translateX(0)")})}let M=document.querySelector(".scale-input");M&&(M.addEventListener("input",e=>{let t=e.target.value,o=e.target.closest(".custom-scale-input"),r=t.replace(/[^0-9]/g,"");if(r.length>0&&(r=parseInt(r,10).toString()),parseInt(r)>100&&(r=r.slice(0,-1)),e.target.value=r,1===r.length&&["0","1","2","3","4","5","6","7","8","9"].includes(r))o.classList.add("error"),e.target.classList.add("error"),x();else if(r.length>=2){let l=parseInt(r);if(l<50)o.classList.add("error"),e.target.classList.add("error"),x();else{let s=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),s&&x()}}else{let n=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),n&&x()}o.classList.contains("error")?(o.style.borderColor="#FF391F",o.querySelector(".percent-prefix").style.backgroundColor="#FF391F",o.querySelector(".percent-prefix span").style.color="#FFFFFF"):(o.style.borderColor="#DCE0E5",o.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",o.querySelector(".percent-prefix span").style.color="#606D85"),x()}),M.addEventListener("blur",e=>{let t=e.target.closest(".custom-scale-input");e.target.value||(t.classList.add("error"),e.target.classList.add("error"),t.style.borderColor="#FF391F",t.querySelector(".percent-prefix").style.backgroundColor="#FF391F",t.querySelector(".percent-prefix span").style.color="#FFFFFF"),x()})),function e(){let t=document.querySelector(".tumbler-products-card .tumbler-custom-scale-control-group .scale-input");t&&(t.addEventListener("input",e=>{let t=e.target.value,o=e.target.closest(".custom-scale-input"),r=t.replace(/[^0-9]/g,"");if(r.length>0&&(r=parseInt(r,10).toString()),parseInt(r)>100&&(r=r.slice(0,-1)),e.target.value=r,1===r.length&&["0","1","2","3","4","5","6","7","8","9"].includes(r))o.classList.add("error"),e.target.classList.add("error"),x();else if(r.length>=2){let l=parseInt(r);if(l<50)o.classList.add("error"),e.target.classList.add("error"),x();else{let s=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),s&&x()}}else{let n=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),n&&x()}o.classList.contains("error")?(o.style.borderColor="#FF391F",o.querySelector(".percent-prefix").style.backgroundColor="#FF391F",o.querySelector(".percent-prefix span").style.color="#FFFFFF"):(o.style.borderColor="#DCE0E5",o.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",o.querySelector(".percent-prefix span").style.color="#606D85"),x()}),t.addEventListener("blur",e=>{let t=e.target.closest(".custom-scale-input");e.target.value||(t.classList.add("error"),e.target.classList.add("error"),t.style.borderColor="#FF391F",t.querySelector(".percent-prefix").style.backgroundColor="#FF391F",t.querySelector(".percent-prefix span").style.color="#FFFFFF"),x()}))}();let H=document.createElement("style");H.textContent=`
            .color-wheel-btn:focus {
                outline: none;
                box-shadow: none;
            }

            }
        `;let N=document.querySelector(".color-options-control-group .dropdown-list");N&&(N.innerHTML=`
                <div class="dropdown-item">
                    <div class="color-indicator">
                        <img src="${chrome.runtime.getURL("assets/colorwheel-ic.svg")}" alt="Color Wheel" style="width: 10px; height: 10px;">
                    </div>
                    Custom Color
                </div>
                <div class="dropdown-item selected">
                    <div class="color-indicator" style="background-color: #FFFFFF;"></div>
                    Default (White)
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #000000;"></div>
                    Black
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #840A08;"></div>
                    Dark Red
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #C70010;"></div>
                    Crimson
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #F36900;"></div>
                    Vivid Orange
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #FEC600;"></div>
                    Bright Yellow
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #01B62F;"></div>
                    Kelly Green
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #1C8C46;"></div>
                    Forest Green
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #37602B;"></div>
                    Dark Olive
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #1AB7EA;"></div>
                    Sky Blue
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #002BB6;"></div>
                    Royal Blue
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #5C2D91;"></div>
                    Purple
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #E0218A;"></div>
                    Hot Pink
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #E9CDDB;"></div>
                    Pale Pink
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #7B4A1B;"></div>
                    Brown
                </div>
                <div class="dropdown-item">
                    <div class="color-indicator" style="background-color: #979797;"></div>
                    Gray
                </div>
            `),l.textContent+=`

            .color-options-control-group .color-indicator {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 0.5px solid #E5E5E5;  
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: none;
            }

            .color-options-control-group .dropdown-header {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .snap-dropdown .dropdown-item {
                font-family: "Amazon Ember";
                font-size: 12px !important;
                font-weight: 400 !important;
                color: #181818;
            }

            .snap-dropdown .dropdown-item.selected {
                font-weight: 700 !important;
                color: #470CED !important;
            }

            .color-options-control-group .dropdown-item {
                font-size: 12px !important;
                font-weight: 400 !important;
            }

            .color-options-control-group .dropdown-item.selected {
                font-weight: 700 !important;
                color: #470CED !important;
            }
        `;let j=document.querySelector(".color-options-control-group .snap-dropdown");if(j){let O=j.querySelector(".dropdown-header"),G=j.querySelector(".dropdown-menu");G.innerHTML=`
                <div class="dropdown-list">
                    <div class="dropdown-item">
                        <div class="color-indicator">
                            <img src="${chrome.runtime.getURL("assets/colorwheel-ic.svg")}" alt="Color Wheel">
                        </div>
                        Custom Color
                    </div>
                    <div class="dropdown-item selected">
                        <div class="color-indicator" style="background-color: #FFFFFF;"></div>
                        Default (White)
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #000000;"></div>
                        Black
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #840A08;"></div>
                        Dark Red
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #C70010;"></div>
                        Crimson
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #F36900;"></div>
                        Vivid Orange
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #FEC600;"></div>
                        Bright Yellow
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #01B62F;"></div>
                        Kelly Green
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #1C8C46;"></div>
                        Forest Green
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #37602B;"></div>
                        Dark Olive
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #1AB7EA;"></div>
                        Sky Blue
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #002BB6;"></div>
                        Royal Blue
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #5C2D91;"></div>
                        Purple
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #E0218A;"></div>
                        Hot Pink
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #E9CDDB;"></div>
                        Pale Pink
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #7B4A1B;"></div>
                        Brown
                    </div>
                    <div class="dropdown-item">
                        <div class="color-indicator" style="background-color: #979797;"></div>
                        Gray
                    </div>
                </div>
            `,l.textContent+=`

                .color-options-control-group .dropdown-menu {
                    max-height: 300px;
                    overflow-y: auto;
                }

                .color-options-control-group .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    font-family: "Amazon Ember";
                    font-weight: 500;
                    font-size: 12px;
                    color: #181818;
                    transition: background-color 0.2s ease;

                .color-options-control-group .color-indicator {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 0.5px solid #E5E5E5;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    filter: none;
                }

                .color-options-control-group .color-indicator img {
                    width: 10px;
                    height: 10px;
                    display: block;
                }

                .color-options-control-group .dropdown-item.selected {
                    font-weight: 700 !important;
                    color: #470CED !important;
                    background-color: transparent;
                }

                .color-options-control-group .dropdown-item:hover {
                    background-color: #F3F4F6;
                }
            `,O.addEventListener("click",e=>{e.stopPropagation(),G.classList.contains("show"),document.querySelectorAll(".snap-dropdown .dropdown-menu.show").forEach(e=>{e!==G&&(e.classList.remove("show"),e.closest(".snap-dropdown").classList.remove("focused"))}),G.classList.toggle("show"),j.classList.toggle("focused")});let W=G.querySelectorAll(".dropdown-item");W.forEach(e=>{e.addEventListener("click",t=>{if(t.stopPropagation(),e.classList.contains("selected"))return;let o=e.querySelector(".color-indicator"),r=e.textContent.trim(),l=O.querySelector(".header-content"),s=l.querySelector(".color-indicator");"Custom Color"===r?(s.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',s.style.backgroundColor=""):(s.innerHTML="",s.style.backgroundColor=o.style.backgroundColor),l.querySelector("span").textContent=r,W.forEach(e=>e.classList.remove("selected")),e.classList.add("selected"),G.classList.remove("show"),j.classList.remove("focused"),w(r,g),x()})})}let X=document.querySelector(".tumbler-products-card .tumbler-custom-scale-control-group .scale-input");X&&(X.addEventListener("input",e=>{let t=e.target.value,o=e.target.closest(".custom-scale-input"),r=t.replace(/[^0-9]/g,"");if(r.length>0&&(r=parseInt(r,10).toString()),parseInt(r)>100&&(r=r.slice(0,-1)),e.target.value=r,1===r.length&&["0","1","2","3","4","5","6","7","8","9"].includes(r))o.classList.add("error"),e.target.classList.add("error"),x();else if(r.length>=2){let l=parseInt(r);if(l<50)o.classList.add("error"),e.target.classList.add("error"),x();else{let s=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),s&&x()}}else{let n=o.classList.contains("error");o.classList.remove("error"),e.target.classList.remove("error"),n&&x()}o.classList.contains("error")?(o.style.borderColor="#FF391F",o.querySelector(".percent-prefix").style.backgroundColor="#FF391F",o.querySelector(".percent-prefix span").style.color="#FFFFFF"):(o.style.borderColor="#DCE0E5",o.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",o.querySelector(".percent-prefix span").style.color="#606D85"),x()}),X.addEventListener("blur",e=>{let t=e.target.closest(".custom-scale-input");e.target.value||(t.classList.add("error"),e.target.classList.add("error"),t.style.borderColor="#FF391F",t.querySelector(".percent-prefix").style.backgroundColor="#FF391F",t.querySelector(".percent-prefix span").style.color="#FFFFFF"),x()}))}()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):s();{let n=window.location.href;setInterval(()=>{window.location.href!==n&&(n=window.location.href,s())},1e3);let a=history.pushState;history.pushState=function(...e){a.apply(this,e),window.dispatchEvent(new Event("locationchange"))};let i=history.replaceState;history.replaceState=function(...e){i.apply(this,e),window.dispatchEvent(new Event("locationchange"))},window.addEventListener("locationchange",s)}let c=document.getElementById("save-to-drafts");c&&c.addEventListener("change",function e(t){});let d=document.getElementById("copy-en-to-all");d&&d.addEventListener("change",function e(t){});let p=document.getElementById("auto-text-swap");p&&p.addEventListener("change",function e(t){});let u=document.getElementById("close-btn");u&&u.addEventListener("click",()=>o(!0));let g=document.getElementById("start-automation-btn");function m(){let e=document.getElementById("native-uploader"),t=document.getElementById("snap-uploader");if(!e||!t)return;let o="true"===localStorage.getItem("useNativeUploader");e.checked=o,t.checked=!o,e.addEventListener("change",function(){localStorage.setItem("useNativeUploader",this.checked.toString()),t.checked=!this.checked}),t.addEventListener("change",function(){localStorage.setItem("useNativeUploader",(!this.checked).toString()),e.checked=!this.checked})}function $(e,t){let o=t.closest(".scalable-products-controls").querySelector(".custom-scale-control-group .custom-scale-input");if("Custom scale"===e){o.classList.remove("disabled");let r=o.querySelector(".scale-input");r.disabled=!1,r.value="50",setTimeout(()=>r.focus(),0)}else{let l=o.querySelector(".scale-input");o.classList.add("disabled"),o.classList.remove("error"),l.classList.remove("error"),l.disabled=!0,l.value="",o.style.borderColor="#DCE0E5",o.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",o.querySelector(".percent-prefix span").style.color="#606D85"}}function v(e){let t=document.querySelector(".tumbler-products-card .tumbler-custom-scale-control-group .custom-scale-input");if("Custom scale"===e){t.classList.remove("disabled");let o=t.querySelector(".scale-input");o.disabled=!1,o.value="50",setTimeout(()=>o.focus(),0)}else{let r=t.querySelector(".scale-input");t.classList.add("disabled"),t.classList.remove("error"),r.classList.remove("error"),r.disabled=!0,r.value="",t.style.borderColor="#DCE0E5",t.querySelector(".percent-prefix").style.backgroundColor="#DCE0E5",t.querySelector(".percent-prefix span").style.color="#606D85"}}function b(){let e={saveToDrafts:document.getElementById("save-to-drafts"),copyEnToAll:document.getElementById("copy-en-to-all"),autoTextSwap:document.getElementById("auto-text-swap"),termsCheckbox:document.getElementById("terms-checkbox")};Object.values(e).forEach(e=>{e&&(e.checked=!1,e.style.filter="invert(97%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(103%) contrast(101%)")}),x(),f(".clothing-products-card .shirts-control-group .snap-dropdown","Default (Front)"),f(".clothing-products-card .hoodie-control-group .snap-dropdown","Default (Front)"),f(".clothing-products-card .zip-control-group .snap-dropdown","Default (Front)"),f(".clothing-products-card .allproducts-colors-control-group .snap-dropdown","Skip"),f(".clothing-products-card .allproducts-prices-control-group .snap-dropdown","Skip"),h(".clothing-products-card",!0),f(".scalable-products-card .scale-options-control-group .snap-dropdown","Skip"),f(".scalable-products-card .color-options-control-group .snap-dropdown","Default (White)"),f(".scalable-products-card .price-options-control-group .snap-dropdown","Skip"),h(".scalable-products-card",!0);let t=document.querySelector(".control-group.custom-scale-control-group .custom-scale-input");if(t){let o=t.querySelector(".scale-input");o&&(o.value="",o.disabled=!0,o.classList.remove("error")),t.classList.add("disabled"),t.classList.remove("error"),t.style.borderColor="#DCE0E5";let r=t.querySelector(".percent-prefix");r&&(r.style.backgroundColor="#DCE0E5",r.querySelector("span").style.color="#606D85")}let l=document.querySelector(".control-group-custom-colors-control-group .custom-color-input");if(l){let s=l.querySelector(".color-input"),n=l.querySelector(".color-live-indicator");s&&(s.value="",s.disabled=!0,s.classList.remove("error")),n&&(n.style.backgroundColor="#FFFFFF",n.style.borderColor="#C8CDD9"),l.classList.add("disabled"),l.classList.remove("error"),l.style.borderColor="#DCE0E5";let a=l.querySelector(".hex-prefix");a&&(a.style.backgroundColor="#DCE0E5",a.querySelector("span").style.color="#606D85")}f(".tumbler-products-card .tumbler-sides-control-group .snap-dropdown","Default (One Side)"),f(".tumbler-products-card .tumbler-scale-control-group .snap-dropdown","100%"),f(".tumbler-products-card .tumbler-colors-control-group .snap-dropdown","Skip"),f(".tumbler-products-card .tumbler-prices-control-group .snap-dropdown","Skip"),h(".tumbler-products-card",!0);let i=document.querySelector(".tumbler-products-card .tumbler-custom-scale-control-group .custom-scale-input");if(i){let c=i.querySelector(".scale-input");c&&(c.value="",c.disabled=!0,c.classList.remove("error")),i.classList.add("disabled"),i.classList.remove("error"),i.style.borderColor="#DCE0E5";let d=i.querySelector(".percent-prefix");d&&(d.style.backgroundColor="#DCE0E5",d.querySelector("span").style.color="#606D85")}}function f(e,t){let o=document.querySelector(e);if(o){let r=o.querySelector(".dropdown-header span"),l=o.querySelectorAll(".dropdown-item");if(e.includes("tumbler-sides-control-group")&&"Default (One Side)"===t){let s=document.querySelector(".tumbler-scale-control-group .snap-dropdown");if(s){let n=s.querySelector(".dropdown-list");if(n){let a=Array.from(n.querySelectorAll(".dropdown-item")).find(e=>e.textContent.includes("Pattern"));a&&a.remove()}}}if(r&&(r.textContent=t,e.includes("color-options-control-group"))){let i=o.querySelector(".dropdown-header .header-content");if(i){i.innerHTML="";let c=document.createElement("div");c.className="color-indicator",c.style.backgroundColor="#FFFFFF",i.appendChild(c);let d=document.createElement("span");d.textContent=t,i.appendChild(d)}}l.forEach(e=>{e.textContent.trim()===t?e.classList.add("selected"):e.classList.remove("selected")})}}function h(e,t){let o=document.querySelector(e);if(!o)return;let r=o.querySelector(".toggle-btn"),l=o.querySelector(".clothing-products-controls, .scalable-products-controls, .tumbler-products-controls");r&&"boolean"==typeof t&&(r.classList.toggle("active",t),r.style.backgroundColor=t?"#470CED":"#cfd4d4",t?(o.classList.remove("off"),l?.classList.remove("off")):(o.classList.add("off"),l?.classList.add("off")))}function y(){o(!1),S()}function x(){let e=document.getElementById("start-automation-btn"),t=document.getElementById("loadedFiles"),o=document.getElementById("terms-checkbox"),r={scalable:{card:document.querySelector(".scalable-products-card"),input:document.querySelector(".scalable-products-card .custom-scale-input"),dropdown:document.querySelector(".scalable-products-card .scale-options-control-group .dropdown-header span")},tumbler:{card:document.querySelector(".tumbler-products-card"),input:document.querySelector(".tumbler-products-card .custom-scale-input"),dropdown:document.querySelector(".tumbler-products-card .tumbler-scale-control-group .dropdown-header span")}},l={card:document.querySelector(".scalable-products-card"),input:document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input"),dropdown:document.querySelector(".scalable-products-card .color-options-control-group .dropdown-header .header-content span")};if(e){let s=!1;if(t&&t.classList.contains("active")&&o?.checked||(s=!0),Object.values(r).forEach(({card:e,input:t,dropdown:o})=>{if(e&&!e.classList.contains("off")&&t&&o&&"Custom scale"===o.textContent.trim()&&!t.classList.contains("disabled")){let r=t.querySelector(".scale-input");(!r||!r.value||t.classList.contains("error")||50>parseInt(r.value)||parseInt(r.value)>100)&&(s=!0)}}),l.card&&!l.card.classList.contains("off")&&l.input&&l.dropdown&&"Custom Color"===l.dropdown.textContent.trim()&&!l.input.classList.contains("disabled")){let n=l.input.querySelector(".color-input");(!n||!n.value||l.input.classList.contains("error")||6!==n.value.length)&&(s=!0)}s?(e.classList.add("disabled"),e.disabled=!0):(e.classList.remove("disabled"),e.disabled=!1)}}function w(e,t){let o=document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input"),r=o?.querySelector(".color-input");if("Custom Color"===e){if(o&&r){o.classList.remove("disabled"),r.disabled=!1,r.value="FFFFFF";let l=o.querySelector(".color-live-indicator");l&&(l.style.backgroundColor="#FFFFFF"),o.style.borderColor="#DCE0E5";let s=o.querySelector(".hex-prefix");s&&(s.style.backgroundColor="#DCE0E5",s.querySelector("span").style.color="#606D85"),setTimeout(()=>r.focus(),0)}}else if(o&&r){o.classList.add("disabled"),o.classList.remove("error"),r.classList.remove("error"),r.disabled=!0,r.value="",o.style.borderColor="#DCE0E5";let n=o.querySelector(".hex-prefix");n&&(n.style.backgroundColor="#DCE0E5",n.querySelector("span").style.color="#606D85");let a=o.querySelector(".color-live-indicator");a&&(a.style.cssText=`
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        border: 0.6px solid #C8CDD9;
                        margin: 0 8px;
                        background-color: #FFFFFF !important;
                        flex-shrink: 0;
                    `)}}function _(e=!0){let t=document.querySelector(".donation-btn");t&&(e?t.classList.add("show"):t.classList.remove("show"))}function k(){let e=document.querySelector(".donation-btn-wrapper");if(e){let t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),window.open("https://buymeacoffee.com/nemocreativestudio","_blank")})}}g&&g.addEventListener("click",function e(){let t=document.getElementById("loadedFiles");if(!t||!t.classList.contains("active")||!window.validFilesForAutomation||0===window.validFilesForAutomation.length)return;let r=window.validFilesForAutomation.map((e,t)=>({filename:e.name,index:t,file:e}));Promise.all(r.map(e=>new Promise(t=>{let o=URL.createObjectURL(e.file);t({filename:e.filename,blobUrl:o,index:e.index})}))).then(e=>{let t={clothingProducts:function e(){let t=document.querySelector(".clothing-products-card");if(!t)return{isActive:!1};let o=t.querySelector(".toggle-btn").classList.contains("active");return o?{isActive:!0,shirts:{sidesOptions:t.querySelector(".shirts-control-group .dropdown-header span")?.textContent||"Default (Front)"},pulloverHoodie:{sidesOptions:t.querySelector(".hoodie-control-group .dropdown-header span")?.textContent||"Default (Front)"},zipHoodie:{sidesOptions:t.querySelector(".zip-control-group .dropdown-header span")?.textContent||"Default (Front)"},allProducts:{colors:t.querySelector(".allproducts-colors-control-group .dropdown-header span")?.textContent||"Skip",prices:t.querySelector(".allproducts-prices-control-group .dropdown-header span")?.textContent||"Skip"}}:{isActive:!1}}(),scalableProducts:function e(){let t=document.querySelector(".scalable-products-card");if(!t)return{isActive:!1};let o=t.querySelector(".toggle-btn").classList.contains("active");if(!o)return{isActive:!1};let r=t.querySelector(".scale-options-control-group .dropdown-header span")?.textContent||"Skip",l="";if("Custom scale"===r){let s=t.querySelector(".custom-scale-control-group .scale-input");s&&!s.disabled&&(l=s.value)}let n=t.querySelector(".color-options-control-group .dropdown-header span")?.textContent||"Default (White)",a="";if("Custom Color"===n){let i=t.querySelector(".control-group-custom-colors-control-group .color-input");i&&!i.disabled&&(a=i.value)}return{isActive:!0,scale:r,customScale:l,color:n,customColor:a,prices:t.querySelector(".price-options-control-group .dropdown-header span")?.textContent||"Skip"}}(),tumblerProduct:function e(){let t=document.querySelector(".tumbler-products-card");if(!t)return{isActive:!1};let o=t.querySelector(".toggle-btn").classList.contains("active");if(!o)return{isActive:!1};let r=t.querySelector(".tumbler-scale-control-group .dropdown-header span")?.textContent||"100%",l="";if("Custom scale"===r){let s=t.querySelector(".tumbler-custom-scale-control-group .scale-input");s&&!s.disabled&&(l=s.value)}return{isActive:!0,sides:t.querySelector(".tumbler-sides-control-group .dropdown-header span")?.textContent||"Default (One Side)",scale:r,customScale:l,colors:t.querySelector(".tumbler-colors-control-group .dropdown-header span")?.textContent||"Skip",prices:t.querySelector(".tumbler-prices-control-group .dropdown-header span")?.textContent||"Skip"}}(),actions:{saveToDrafts:document.getElementById("save-to-drafts")?.checked||!1,copyEnToAll:document.getElementById("copy-en-to-all")?.checked||!1,textSwap:document.getElementById("auto-text-swap")?.checked||!1},useNativeUploader:document.getElementById("native-uploader")?.checked||!1};console.log("Starting automation with settings:",JSON.stringify({actions:t.actions,useNativeUploader:t.useNativeUploader,nativeChecked:document.getElementById("native-uploader")?.checked,snapChecked:document.getElementById("snap-uploader")?.checked,localStorageValue:localStorage.getItem("useNativeUploader")})),chrome.runtime.sendMessage({action:"startAutomation",files:e,settings:t},e=>{if(e&&e.success)setTimeout(()=>{let e=document.querySelector(".clear-all-btn");e&&e.click(),setTimeout(()=>{o(!1)},500)},500);else{let t=document.getElementById("start-automation-btn");t&&(t.disabled=!1,t.textContent="Start Automation"),alert("Failed to start automation. Please try again.")}})}).catch(e=>{let t=document.getElementById("start-automation-btn");t&&(t.disabled=!1,t.textContent="Start Automation"),alert("Error processing files: "+e.message)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".text-swap-link");e&&e.addEventListener("click",e=>{e.preventDefault(),window.open("https://drive.google.com/file/d/1pGlS0MEfTy1mzgpIPufCV6iZ_NPHj-5z/view?usp=sharing","_blank")}),setTimeout(m,500)}),!function e(){let t=document.querySelector(".control-group-custom-colors-control-group .custom-color-input"),o=t?t.querySelector(".color-input"):null;o&&(o.addEventListener("input",()=>{x()}),o.addEventListener("blur",()=>{x()}))}(),document.addEventListener("click",e=>{e.target.classList.contains("donation-btn")&&window.open("https://buymeacoffee.com/nemocreativestudio","_blank")});let F=new MutationObserver(e=>{e.forEach(e=>{if(e.addedNodes.length){let t=document.querySelector(".donation-btn");t&&(k(),F.disconnect())}})});function C(){let e=document.querySelector(".snap-bulk-upload-container");if(e){e.addEventListener("wheel",t=>{let o=t.target.closest(".dropdown-list");if(o)return;let r=0===e.scrollTop,l=e.scrollHeight-e.scrollTop===e.clientHeight;(r&&t.deltaY<0||l&&t.deltaY>0)&&t.preventDefault(),t.stopPropagation()},{passive:!1});let t=0;e.addEventListener("touchstart",e=>{t=e.touches[0].clientY},{passive:!1}),e.addEventListener("touchmove",o=>{let r=o.target.closest(".dropdown-list");if(r)return;let l=o.touches[0].clientY,s=l>t,n=l<t,a=e.scrollTop<=0,i=1>Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight);(a&&s||i&&n)&&o.preventDefault(),t=l},{passive:!1})}}function S(){q(),document.addEventListener("input",function(e){if(e.target.classList.contains("color-input")){let t=e.target.closest(".custom-color-input");if(!t)return;let o=e.target.value.replace(/[^0-9A-Fa-f]/g,"").toUpperCase();o=o.slice(0,6),e.target.value=o,D(t,o);let r=6!==o.length;E(t,r),x()}}),document.addEventListener("blur",function(e){if(e.target.classList.contains("color-input")){let t=e.target.closest(".custom-color-input");if(!t)return;let o=e.target.value,r=6!==o.length;E(t,r),D(t,o),x()}},!0),document.addEventListener("paste",function(e){if(e.target.classList.contains("color-input")){e.preventDefault();let t=(e.clipboardData||window.clipboardData).getData("text"),o=t.replace(/[^0-9A-Fa-f]/g,"").toUpperCase().slice(0,7),r=e.target,l=r.selectionStart,s=r.selectionEnd,n=r.value.substring(0,l),a=r.value.substring(s),i=(n+o+a).slice(0,7);r.value=i;let c=Math.min(l+o.length,7);r.setSelectionRange(c,c);let d=r.closest(".custom-color-input");E(d,i.length<6||i.length>6),x()}})}function E(e,t){if(t){e.classList.add("error"),e.style.borderColor="#FF391F";let o=e.querySelector(".hex-prefix");o&&(o.style.backgroundColor="#FF391F",o.querySelector("span").style.color="#FFFFFF"),e.querySelector(".color-input").classList.add("error")}else{e.classList.remove("error"),e.style.borderColor="#DCE0E5";let r=e.querySelector(".hex-prefix");r&&(r.style.backgroundColor="#DCE0E5",r.querySelector("span").style.color="#606D85"),e.querySelector(".color-input").classList.remove("error")}}function L(e,t){let o=document.querySelector(".scalable-products-card .color-options-control-group .snap-dropdown"),r=document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input"),l=r?.querySelector(".color-input");if(o&&r&&l){if("Custom Color"===e){r.classList.remove("disabled"),l.disabled=!1;let s=(t||"").replace(/[^0-9A-Fa-f]/g,"").toUpperCase();6!==(s=s.slice(0,7)).length&&(s="FFFFFF"),l.value=s,E(r,s.length<6||s.length>6);let n=o.querySelector(".dropdown-header .header-content");if(n){let a=n.querySelector(".color-indicator");a&&(a.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',a.style.backgroundColor="")}}else r.classList.add("disabled"),l.disabled=!0,l.value="",r.classList.remove("error"),l.classList.remove("error")}}function q(){let e=document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input");if(!e||e.querySelector(".color-live-indicator"))return;let t=document.createElement("div");t.className="color-live-indicator",t.style.cssText=`
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 0.6px solid #C8CDD9;
            margin: 0 8px;
            background-color: #FFFFFF;
            flex-shrink: 0;
        `;let o=e.querySelector(".hex-prefix");o&&o.insertAdjacentElement("afterend",t)}function D(e,t){let o=e.querySelector(".color-live-indicator");if(o){if(6===t.length)try{o.style.backgroundColor="#"+t}catch(r){o.style.backgroundColor="#FFFFFF"}else o.style.backgroundColor="#FFFFFF"}}function S(){q(),document.addEventListener("input",function(e){if(e.target.classList.contains("color-input")){let t=e.target.closest(".custom-color-input");if(!t)return;let o=e.target.value.replace(/[^0-9A-Fa-f]/g,"").toUpperCase();o=o.slice(0,6),e.target.value=o,D(t,o);let r=6!==o.length;E(t,r),x()}}),document.addEventListener("blur",function(e){if(e.target.classList.contains("color-input")){let t=e.target.closest(".custom-color-input");if(!t)return;let o=e.target.value,r=6!==o.length;E(t,r),D(t,o),x()}},!0)}function L(e,t){let o=document.querySelector(".scalable-products-card .color-options-control-group .snap-dropdown"),r=document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input"),l=r?.querySelector(".color-input");if(o&&r&&l){if("Custom Color"===e){r.querySelector(".color-live-indicator")||q(),r.classList.remove("disabled"),l.disabled=!1;let s=(t||"").replace(/[^0-9A-Fa-f]/g,"").toUpperCase();6!==(s=s.slice(0,6)).length&&(s="FFFFFF"),l.value=s,D(r,s),E(r,6!==s.length);let n=o.querySelector(".dropdown-header .header-content");if(n){let a=n.querySelector(".color-indicator");a&&(a.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',a.style.backgroundColor="")}}else{r.classList.add("disabled"),l.disabled=!0,l.value="",r.classList.remove("error"),l.classList.remove("error");let i=r.querySelector(".color-live-indicator");i&&(i.style.backgroundColor="#FFFFFF")}}}function w(e,t){if("Custom Color"===e){let o=document.querySelector(".scalable-products-card .control-group-custom-colors-control-group .custom-color-input");if(o&&!o.querySelector(".color-live-indicator")&&(q(),!document.querySelector("#custom-color-input-styles"))){let r=document.createElement("style");r.id="custom-color-input-styles",r.textContent=`

                        .custom-color-input {
                            display: flex;
                            align-items: center;
                            border: 1.5px solid #DCE0E5;
                            border-radius: 4px;
                            padding: 0;
                            height: 40px;
                            width: 100%;
                            background: #FFFFFF;
                            gap: 0;
                        }

                        .custom-color-input .hex-prefix {
                            width: 32px !important;
                    `,document.head.appendChild(r)}}}function D(e,t){let o=e.querySelector(".color-live-indicator");if(o){if(6===t.length)try{o.style.backgroundColor="#"+t}catch(r){o.style.backgroundColor="#FFFFFF"}else o.style.backgroundColor="#FFFFFF"}}function E(e,t){if(t){e.classList.add("error"),e.style.borderColor="#FF391F";let o=e.querySelector(".hex-prefix");o&&(o.style.backgroundColor="#FF391F",o.querySelector("span").style.color="#FFFFFF"),e.querySelector(".color-input").classList.add("error")}else{e.classList.remove("error"),e.style.borderColor="#DCE0E5";let r=e.querySelector(".hex-prefix");r&&(r.style.backgroundColor="#DCE0E5",r.querySelector("span").style.color="#606D85"),e.querySelector(".color-input").classList.remove("error")}}function A(e,t){if(!e)return;let o=e.querySelectorAll(".dropdown-item"),r=Array.from(o).find(e=>e.textContent.trim()===t);if(r){o.forEach(e=>e.classList.remove("selected")),r.classList.add("selected");let l=e.querySelector(".dropdown-header span");if(l&&(l.textContent=t),e.closest(".color-options-control-group")){let s=e.querySelector(".dropdown-header .header-content"),n=s?.querySelector(".color-indicator"),a=r.querySelector(".color-indicator");if(n&&a){if("Custom Color"===t){n.innerHTML='<img src="'+chrome.runtime.getURL("assets/colorwheel-ic.svg")+'" alt="Color Wheel">',n.style.backgroundColor="";let i=e.closest(".scalable-products-card")?.querySelector(".control-group-custom-colors-control-group .custom-color-input"),c=i?.querySelector(".color-input");i&&c&&(i.classList.remove("disabled"),c.disabled=!1,c.value||(c.value="FFFFFF",c.dispatchEvent(new Event("input"))))}else{n.innerHTML="",n.style.backgroundColor=a.style.backgroundColor;let d=e.closest(".scalable-products-card")?.querySelector(".control-group-custom-colors-control-group .custom-color-input"),p=d?.querySelector(".color-input");d&&p&&(d.classList.add("disabled"),p.disabled=!0,p.value="")}}}e.closest(".scale-options-control-group")?$(t,e):e.closest(".color-options-control-group")?w(t,e):e.closest(".tumbler-scale-control-group")&&v(t)}}F.observe(document.body,{childList:!0,subtree:!0}),C(),l.textContent=l.textContent.replace(/\.custom-color-input \.color-live-indicator \{[^}]+\}/,".custom-color-input .color-live-indicator {width: 16px;height: 16px;border-radius: 50%;border: 0.6px solid #C8CDD9 !important;margin-left: 8px;margin-right: 4px;background-color: #FFFFFF;flex-shrink: 0;transition: background-color 0.2s ease;}"),l.textContent=l.textContent.replace(/\.custom-color-input\.error \.color-live-indicator \{[^}]+\}/,".custom-color-input.error .color-live-indicator {border-color: #C8CDD9 !important;}"),l.textContent=l.textContent.replace(/\.custom-color-input\.disabled \.color-live-indicator \{[^}]+\}/,".custom-color-input.disabled .color-live-indicator {opacity: 0.5;background-color: #FFFFFF !important;border-color: #C8CDD9 !important;}");let z=document.createElement("style");z.id="custom-color-styles",z.textContent="",document.head.appendChild(z);let B=document.createElement("style");B.id="additional-color-styles",B.textContent="",document.head.appendChild(B);let P=document.getElementById("additional-color-styles");function m(){let e=document.getElementById("native-uploader"),t=document.getElementById("snap-uploader");if(!e||!t)return;let o="true"===localStorage.getItem("useNativeUploader");e.checked=o,t.checked=!o,e.addEventListener("change",function(){localStorage.setItem("useNativeUploader",this.checked.toString()),t.checked=!this.checked}),t.addEventListener("change",function(){localStorage.setItem("useNativeUploader",(!this.checked).toString()),e.checked=!this.checked})}P&&(P.textContent+=`
            .custom-color-input.disabled .color-live-indicator {
                background-color: #FFFFFF !important;
            }
        `),document.addEventListener("click",e=>{let t=e.target.closest(".text-swap-link");t&&(e.preventDefault(),window.open("https://drive.google.com/file/d/1pGlS0MEfTy1mzgpIPufCV6iZ_NPHj-5z/view?usp=sharing","_blank"))})}();