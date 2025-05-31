// Check for valid license before executing
chrome.storage.local.get('license', ({license}) => {
  if (!license || license.invalid) return; // Exit if no valid license

(()=>{
  // Check if this is a page where we should show the report button
  function shouldShowReportButton() {
    // Always show on StyleSnap pages
    if (window.location.pathname.includes('/stylesnap')) {
      return true;
    }
    
    // Also show on Amazon search results pages with ?rh= pattern
    if (window.location.pathname === '/s' && window.location.search.includes('?rh=')) {
      return true;
    }
    
    // Check for product page elements
    const productTitle = document.getElementById('productTitle');
    const addToCartButton = document.getElementById('add-to-cart-button');
    const buyNowButton = document.getElementById('buy-now-button');
    
    // Check for product page URL patterns
    const isProductUrl = window.location.pathname.includes('/dp/') || 
                         window.location.pathname.includes('/gp/product/') || 
                         window.location.pathname.match(/\/[A-Z0-9]{10}(\/|$)/); // ASIN pattern
                         
    return (productTitle || addToCartButton || buyNowButton || isProductUrl);
  }
  
  // Only continue if we should show the report button
  if (!shouldShowReportButton()) {
    console.log('DupliGone: Not showing report button on this page');
    return;
  }
  var e=document.createElement("style");e.textContent=`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${chrome.runtime.getURL("fonts/AmazonEmber_Regular.ttf")}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${chrome.runtime.getURL("fonts/AmazonEmber_Bold.ttf")}') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${chrome.runtime.getURL("fonts/Amazon-Ember-Medium.ttf")}') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  .snap-hammer-element {
    font-family: 'Amazon Ember' !important;
  }
`,document.head.appendChild(e);const B=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Anguilla","Antarctica","Antigua And Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Democratic Republic of the Congo","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Honduras","Hong Kong, China","Hungary","Iceland","India","Indonesia","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea (South)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa (Independent)","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City State (Holy See)","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"],U=document.createElement("div");U.setAttribute("data-tooltip","Drag listings here to report"),U.style.cssText=`
  position: fixed;
  bottom: 80px;
  right: 80px;
  z-index: 999997;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease-out;
  cursor: pointer;
`;e=document.createElement("style");e.textContent=`
  [data-tooltip] {
    position: relative;
  }

  [data-tooltip]:before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 12px;
    background-color: #1F2937;
    color: white;
    font-size: 12px;
    font-family: 'Amazon Ember';
    font-weight: 500;
    white-space: nowrap;
    border-radius: 999px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 9;
  }

  [data-tooltip]:after {
    content: '';
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #1F2937;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 9;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    opacity: 1;
    visibility: visible;
  }
`,document.head.appendChild(e);const j=document.createElement("img");e=chrome.runtime.getURL("assets/hammer-ic.svg");j.src=e,j.style.cssText=`
  width: 36px;
  height: 36px;
  pointer-events: none;
  transition: transform 0.2s ease-out;
`,U.appendChild(j);const c=document.createElement("div"),M=(c.style.cssText=`
  position: absolute;
  top: 0px;
  right: 0px;
  background: #FA583A;
  color: white;
  border: 4px solid white;
  border-radius: 24px;
  padding: 2px 8px;
  font-family: 'Amazon Ember';
  font-weight: bold;
  font-size: 16px;
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`,c.textContent="0",U.appendChild(c),document.createElement("div")),m=(M.style.cssText=`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999998;
  display: none;
`,document.createElement("div"));m.style.cssText=`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 994px;
  height: 985px;
  background: #F7F8FA;
  border-radius: 28px;
  padding: 40px;
  z-index: 999999;
  display: none;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
`;var e=document.createElement("div"),t=(e.className="listings-top",e.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`,document.createElement("div")),n=(t.className="listings-left",t.style.cssText=`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-right: auto;
  padding-right: 48px;
`,document.createElement("img")),o=(n.src=chrome.runtime.getURL("assets/Snap-hammer-ic.svg"),n.style.cssText=`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`,document.createElement("div")),i=(o.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  width: 100%;
`,document.createElement("h2")),i=(i.textContent="Snap Hammer",i.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  margin: 0;
  line-height: 1.197;
  width: 100%;
`,o.appendChild(i),t.appendChild(n),t.appendChild(o),document.createElement("div"));i.className="listings-right",i.style.cssText=`
  display: flex;
  align-items: center;
  gap: 24px;
`;const P=document.createElement("div"),O=(P.style.cssText=`
  display: flex;
  align-items: center;
  gap: 16px;
`,[{number:"01",text:"Add Infringing ASINs",state:"active"},{number:"02",text:"Validate your ASIN",state:"inactive"},{number:"03",text:"Confirm & Report",state:"inactive"}]);O.forEach((e,t)=>{var n=document.createElement("div"),o=(n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
  `,document.createElement("div")),o=(o.style.cssText=`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 12px;
    background: ${"active"===e.state?"#470CED":"#E9EBF2"};
    color: ${"active"===e.state?"white":"#606F95"};
  `,o.textContent=e.number,n.appendChild(o),document.createElement("span"));o.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 14px;
    color: ${"active"===e.state?"#470CED":"#606F95"};
  `,o.textContent=e.text,n.appendChild(o),t<O.length-1&&((e=document.createElement("div")).style.cssText=`
      width: 24px;
      height: 1px;
      background: #E9EBF2;
      margin: 0 4px;
    `,n.appendChild(e)),P.appendChild(n)});n=document.createElement("button"),n.style.cssText=`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`,o=document.createElement("img"),o.src=chrome.runtime.getURL("assets/close-ham-popup-ic.svg"),o.style.cssText=`
  width: 24px;
  height: 24px;
`,n.appendChild(o),i.appendChild(P),i.appendChild(n),e.appendChild(t),e.appendChild(i),o=document.createElement("div"),o.style.cssText=`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0;
`,t=document.createElement("div");t.style.cssText=`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: #E9EBF2;
  border-radius: 6px;
  padding: 2px;
  width: 50%;
`;const s=document.createElement("button"),$=(s.style.cssText=`
  position: relative;
  background: white;
  border: 1px solid #DCE0E5;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  margin: 0;
`,document.createElement("button"));$.style.cssText=`
  position: relative;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;var i=document.createElement("div"),r=(i.style.cssText=`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 14px;
  color: #470CED;
  pointer-events: none;
`,document.createElement("div")),a=(r.style.cssText=`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  pointer-events: none;
`,document.createElement("img")),l=(a.src=chrome.runtime.getURL("assets/products-options-ic.svg"),a.style.cssText=`
  width: 16px;
  height: 16px;
  pointer-events: none;
`,document.createElement("span")),d=(l.textContent="Listings to Report",l.style.cssText=`
  pointer-events: none;
`,document.createElement("img")),p=(d.src=chrome.runtime.getURL("assets/history-ic.svg"),d.style.cssText=`
  width: 16px;
  height: 16px;
  pointer-events: none;
`,document.createElement("span"));p.textContent="Report History",p.style.cssText=`
  pointer-events: none;
`,i.appendChild(a),i.appendChild(l),r.appendChild(d),r.appendChild(p),s.appendChild(i),$.appendChild(r),s.style.height="30px",$.style.height="30px";const _=document.createElement("div"),V=(_.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  margin-top: 0;
  gap: 0;
  flex: 1;
`,document.createElement("div")),u=(V.style.cssText=`
  display: flex;
  gap: 8px;
  align-items: center;
`,document.createElement("button")),W=(u.setAttribute("data-tooltip","Delete selected"),u.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 36px;
  width: 36px;
  background: #FF391F;
  border: none;
  border-radius: 999px;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: visible;
`,u.disabled=!0,document.createElement("img")),y=(W.src=chrome.runtime.getURL("assets/clear.svg"),W.style.cssText=`
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
`,u.appendChild(W),document.createElement("button")),H=(y.setAttribute("data-tooltip","Download selected"),y.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 36px;
  width: 36px;
  background: #470CED;
  border: none;
  border-radius: 999px;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: visible;
`,y.disabled=!0,document.createElement("img"));H.src=chrome.runtime.getURL("assets/download-ic.svg"),H.style.cssText=`
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
`,y.appendChild(H);a=document.createElement("div");a.style.cssText=`
  position: relative;
  display: inline-block;
  width: 220px;
`;const Z=document.createElement("input"),J=(Z.placeholder="Search for ASIN, listings...",Z.style.cssText=`
  width: 100%;
  height: 36px;
  padding: 8px 36px 8px 12px;
  border: 1px solid #E4E4E7;
  border-radius: 999px;
  font-family: 'Amazon Ember';
  font-size: 14px;
  color: #09090B;
  outline: none;
`,document.createElement("button")),G=(J.style.cssText=`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: none;
  width: 16px;
  height: 16px;
`,document.createElement("img"));function K(o){var t=me.querySelectorAll('div[style*="grid"]');let i=!1;t.forEach(e=>{var t=e.querySelector("div:last-child").textContent,n=e.querySelector("div:nth-child(3)").textContent,t=t.toLowerCase().includes(o.toLowerCase())||n.toLowerCase().includes(o.toLowerCase());e.style.display=t?"grid":"none",t&&(i=!0)});var t=Y,n=document.querySelector(".listings-tab-content");if(!i&&o){t&&(t.style.display="none"),u.style.display="none",y.style.display="none";let e=n.querySelector(".no-results");e?((s=e.querySelector("p"))&&(s.textContent=`No results found for "${o}"`),e.style.display="flex"):((e=document.createElement("div")).className="no-results",e.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-family: 'Amazon Ember';
        font-size: 14px;
        color: #606F95;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding: 0 40px;
      `,(s=document.createElement("img")).src=chrome.runtime.getURL("assets/no-results-img.svg"),s.style.cssText=`
        width: 80px;
        height: 80px;
        margin-bottom: 8px;
      `,(r=document.createElement("p")).style.cssText=`
        font-family: 'Amazon Ember';
        font-size: 14px;
        color: #606F95;
        text-align: center;
        margin: 0;
      `,r.textContent=`No results found for "${o}"`,e.appendChild(s),e.appendChild(r),n.appendChild(e));var s=document.getElementById("report-button");s&&(s.style.display="none")}else{t&&(t.style.display="block"),u.style.display="flex",y.style.display="flex";var r=n.querySelector(".no-results"),s=(r&&(r.style.display="none"),document.getElementById("report-button"));s&&(s.style.display="flex")}}G.src=chrome.runtime.getURL("assets/close-ham-popup-ic.svg"),G.style.cssText=`
  width: 16px;
  height: 16px;
  opacity: 0.5;
  transition: opacity 0.2s ease;
`,J.appendChild(G),J.addEventListener("mouseenter",()=>{G.style.opacity="1"}),J.addEventListener("mouseleave",()=>{G.style.opacity="0.5"}),Z.addEventListener("input",e=>{e=e.target.value;J.style.display=e?"block":"none",K(e)}),J.addEventListener("click",()=>{Z.value="",J.style.display="none",K(""),Z.focus()}),a.appendChild(Z),a.appendChild(J),V.appendChild(u),V.appendChild(y),V.appendChild(a);const Y=document.createElement("div");Y.style.cssText=`
  width: 100%;
  max-height: 688px;
  background: white;
  border: 1px solid #E4E4E7;
  border-radius: 8px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;l=document.createElement("div"),l.className="header-div",l.style.cssText=`
  display: grid;
  grid-template-columns: 48px 100px 378px 130px 120px 120px;
  gap: 0;
  border-bottom: 1px solid #E4E4E7;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
`,d=document.createElement("div");d.style.cssText=`
  padding: 12px 16px 10px;
  display: flex;
  align-items: center;
  height: 52px;
`;const h=document.createElement("input"),g=(h.type="checkbox",h.style.cssText=`
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  border: 1.5px solid #E4E4E7;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  position: relative;
  background: white;
  transition: all 0.2s ease;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`,new Set);h.addEventListener("change",function(){if(!Pe.isFetchingActive){var e=Array.from(me.querySelectorAll('input[type="checkbox"]')).filter(e=>{e=e.closest('div[style*="grid"]');return e&&"none"!==e.style.display});const t=this.checked;g.clear(),this.checked?(this.style.backgroundColor="#470CED",this.style.borderColor="#470CED",this.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",this.style.backgroundRepeat="no-repeat",this.style.backgroundPosition="center"):(this.style.backgroundColor="white",this.style.borderColor="#E4E4E7",this.style.backgroundImage="none"),e.forEach(e=>{(e.checked=t)?(e.style.backgroundColor="#470CED",e.style.borderColor="#470CED",e.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center",g.add(e)):(e.style.backgroundColor="white",e.style.borderColor="#E4E4E7",e.style.backgroundImage="none")}),Ke(g.size)}}),d.appendChild(h);p=document.createElement("div"),p.style.cssText=`
  padding: 16px 16px 16px 0;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  display: flex;
  align-items: center;
  height: 100%;
`,p.textContent="Marketplace",i=document.createElement("div"),i.style.cssText=`
  padding: 16px 16px 16px 0;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  display: flex;
  align-items: center;
`,r=document.createElement("div");r.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,r.textContent="Listing";const X=document.createElement("img"),Q=(X.src=chrome.runtime.getURL("assets/Ascending.svg"),X.style.cssText=`
  width: 16px;
  height: 16px;
  display: block;
`,document.createElement("img"));Q.src=chrome.runtime.getURL("assets/Descending.svg"),Q.style.cssText=`
  width: 16px;
  height: 16px;
  display: none;
`;var a=document.createElement("div"),x=(a.style.cssText=`
  padding: 16px 16px 16px 0;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  display: flex;
  align-items: center;
`,document.createElement("div"));x.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,x.textContent="Published";const ee=document.createElement("img"),te=(ee.src=chrome.runtime.getURL("assets/Ascending.svg"),ee.style.cssText=`
  width: 16px;
  height: 16px;
  display: block;
`,document.createElement("img"));te.src=chrome.runtime.getURL("assets/Descending.svg"),te.style.cssText=`
  width: 16px;
  height: 16px;
  display: none;
`,x.appendChild(ee),x.appendChild(te),a.appendChild(x);var f=document.createElement("div"),b=(f.style.cssText=`
  padding: 16px 16px 16px 0;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  display: flex;
  align-items: center;
  width: 100%;
`,document.createElement("div")),v=(b.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,document.createElement("div"));v.style.cssText=`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;const ne=document.createElement("div"),oe=(ne.style.cssText=`
  padding: 4px 8px;
  margin-left: 16px;
  background: #470CED;
  border-radius: 4px;
  color: white;
  font-family: 'Amazon Ember';
  font-size: 14px;
  font-weight: 500;
`,ne.textContent="0/50",b.textContent="ASIN",document.createElement("img")),ie=(oe.src=chrome.runtime.getURL("assets/Ascending.svg"),oe.style.cssText=`
  width: 16px;
  height: 16px;
  display: block;
`,document.createElement("img"));ie.src=chrome.runtime.getURL("assets/Descending.svg"),ie.style.cssText=`
  width: 16px;
  height: 16px;
  display: none;
`,b.appendChild(oe),b.appendChild(ie),v.appendChild(b),v.appendChild(ne),f.appendChild(v);let se="asc",re=null,ae=null;function le(e){return e&&"N/A"!==e&&"Loading..."!==e?new Date(e):new Date(0)}function de(){var e=Array.from(me.children);"asc"===se||"desc"===se?e.sort((e,t)=>{e=e.querySelector("div:nth-child(3) a").textContent,t=t.querySelector("div:nth-child(3) a").textContent;return"asc"===se?e.localeCompare(t):t.localeCompare(e)}):"asc"===re||"desc"===re?e.sort((e,t)=>{e=e.querySelector("div:nth-child(6)").textContent,t=t.querySelector("div:nth-child(6)").textContent;return"asc"===re?e.localeCompare(t):t.localeCompare(e)}):"asc"===ae||"desc"===ae?e.sort((e,t)=>{e=le(e.querySelector("div:nth-child(4)").textContent),t=le(t.querySelector("div:nth-child(4)").textContent);return"asc"===ae?e-t:t-e}):"asc"!==Ve&&"desc"!==Ve||e.sort((e,t)=>{e=e.querySelector("div:nth-child(6)").textContent,t=t.querySelector("div:nth-child(6)").textContent,e=N.get(e)||"N/A",t=N.get(t)||"N/A",e="N/A"===e?Number.MAX_SAFE_INTEGER:parseInt(e,10),t="N/A"===t?Number.MAX_SAFE_INTEGER:parseInt(t,10);return"asc"===Ve?e-t:t-e}),me.innerHTML="",e.forEach(e=>me.appendChild(e))}x.addEventListener("click",()=>{"asc"===ae?(ae="desc",ee.style.display="none",te.style.display="block"):(ae="asc",ee.style.display="block",te.style.display="none"),se=null,re=null,X.style.display="block",Q.style.display="none",oe.style.display="block",ie.style.display="none",de()}),r.addEventListener("click",()=>{"asc"===se?(se="desc",X.style.display="none",Q.style.display="block"):(se="asc",X.style.display="block",Q.style.display="none"),ae=null,re=null,ee.style.display="block",te.style.display="none",oe.style.display="block",ie.style.display="none",de()}),b.addEventListener("click",()=>{"asc"===re?(re="desc",oe.style.display="none",ie.style.display="block"):(re="asc",oe.style.display="block",ie.style.display="none"),se=null,ae=null,X.style.display="block",Q.style.display="none",ee.style.display="block",te.style.display="none",oe.style.display="block",ie.style.display="none",de()}),i.appendChild(r),r.appendChild(X),r.appendChild(Q),a.appendChild(x),x.appendChild(ee),x.appendChild(te);v=document.createElement("div"),v.style.cssText=`
  padding: 16px 16px 16px 0;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #606F95;
  display: flex;
  align-items: center;
`,b=document.createElement("div");b.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,b.textContent="BSR";const ce=document.createElement("img"),pe=(ce.src=chrome.runtime.getURL("assets/Ascending.svg"),ce.style.cssText=`
  width: 16px;
  height: 16px;
  display: block;
`,document.createElement("img")),me=(pe.src=chrome.runtime.getURL("assets/Descending.svg"),pe.style.cssText=`
  width: 16px;
  height: 16px;
  display: none;
`,b.appendChild(ce),b.appendChild(pe),v.appendChild(b),l.appendChild(d),l.appendChild(p),l.appendChild(i),l.appendChild(a),l.appendChild(v),l.appendChild(f),document.createElement("div"));me.style.cssText=`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(660px - 52px);
`,Y.appendChild(l),Y.appendChild(me);r=document.createElement("div"),r.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,x=document.createElement("img"),x.src=chrome.runtime.getURL("assets/no-profile-img.svg"),x.style.cssText=`
  width: 80px;
  height: 91px;
`,d=document.createElement("div"),d.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`,p=document.createElement("h3"),p.textContent="No listings added yet",p.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  color: #606F95;
  margin: 0;
`,i=document.createElement("p");i.textContent="Drag listings from the Amazon search results into the\ncircle at the bottom-right to start reporting.",i.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 400;
  font-size: 14px;
  color: #606F95;
  margin: 0;
  text-align: center;
  white-space: pre-line;
`;const ue=document.createElement("button");ue.id="paste-btn",ue.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #470CED;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-top: 24px;
  transition: background 0.2s ease;
`;a=document.createElement("img");a.src=chrome.runtime.getURL("assets/paste-asin-ic.svg"),a.style.cssText=`
  width: 16px;
  filter: brightness(0) invert(1);
`,ue.appendChild(a),ue.appendChild(document.createTextNode("Click to paste ASINs or (Ctrl/CMD+V)")),ue.addEventListener("mouseenter",()=>{ue.style.background="#3D0BCE"}),ue.addEventListener("mouseleave",()=>{ue.style.background="#470CED"}),ue.addEventListener("click",async()=>{je&&$e()}),d.appendChild(p),d.appendChild(i),r.appendChild(x),r.appendChild(d),r.appendChild(ue);const ye=document.createElement("div");ye.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;v=document.createElement("img"),v.src=chrome.runtime.getURL("assets/soon-img.svg"),v.style.cssText=`
  width: 80px;
  height: 91px;
`,f=document.createElement("div"),f.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`,l=document.createElement("h3"),l.textContent="Report History is coming soon.",l.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  color: #606F95;
  margin: 0;
`,a=document.createElement("p");a.textContent="You'll be able to track the reported listings right here.",a.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 400;
  font-size: 14px;
  color: #606F95;
  margin: 0;
  text-align: center;
`,f.appendChild(l),f.appendChild(a),ye.appendChild(v),ye.appendChild(f);const E=document.createElement("div"),he=(E.className="listings-tab-content",E.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex: 1;
  width: 100%;
  height: 100%;
`,document.createElement("div"));he.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex: 1;
  width: 100%;
  height: 100%;
`,E.appendChild(r),he.appendChild(ye),e.appendChild(n),t.appendChild(s),t.appendChild($),o.appendChild(t),o.appendChild(V),m.appendChild(e),m.appendChild(o),m.appendChild(_);p=document.createElement("div"),p.className="tip-container",p.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 16px 40px;
`,i=document.createElement("div"),i.className="automation-tip",i.style.cssText=`
  display: inline-flex;
  align-items: center;
  background: rgba(0, 122, 255, 0.1);
  border-radius: 4px;
  padding: 4px 10px 4px 10px;
  margin-left: 0px;
  width: fit-content;
`,x=document.createElement("div"),x.className="tip-icon",x.style.cssText=`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: #470CED;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  z-index: 2;
`,d=document.createElement("img");d.src=chrome.runtime.getURL("assets/apply.svg"),d.style.cssText=`
  width: 14px;
  height: 14px;
  filter: brightness(0) invert(1);
`,x.appendChild(d);const ge=document.createElement("span");function xe(e){var t=window.location.href,n={"amazon.com":"com","amazon.co.uk":"co.uk","amazon.de":"de","amazon.fr":"fr","amazon.it":"it","amazon.es":"es","amazon.co.jp":"co.jp"};for(const o in n)if(t.includes(o))return n[o];return{US:"com",UK:"co.uk",DE:"de",FR:"fr",IT:"it",ES:"es",JP:"co.jp"}[e]||"com"}ge.style.cssText=`
  font-family: "Amazon Ember";
  font-size: 12px;
  font-weight: 500;
  color: #470CED !important;
  line-height: 16px;
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s cubic-bezier(0.0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.0, 0, 0.2, 1);
`;l=[`<strong>IMPORTANT*</strong> Sign in to amazon.${xe(L())} first, then switch the website language to <strong>English (EN)</strong> before you start the reporting process.`];ge.innerHTML=l[0],document.addEventListener("marketplaceChanged",()=>{ge.innerHTML=`<strong>IMPORTANT*</strong> Sign in to amazon.${xe(L())} first, then switch the website language to <strong>English (EN)</strong> before you start the reporting process.`});let fe=window.location.href;const be=new MutationObserver(()=>{fe!==window.location.href&&(fe=window.location.href,ge.innerHTML=`<strong>IMPORTANT*</strong> Sign in to amazon.${xe(L())} first, then switch the website language to <strong>English (EN)</strong> before you start the reporting process.`)}),C=(be.observe(document,{subtree:!0,childList:!0}),i.appendChild(ge),p.appendChild(x),p.appendChild(i),m.appendChild(p),document.createElement("button"));C.id="report-button",C.style.cssText=`
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: calc(100% - 80px);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #470CED;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: white;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s ease;
  z-index: 10;
  padding: 0;
`,C.disabled=!1;a=document.createElement("img");a.src=chrome.runtime.getURL("assets/apply.svg"),a.style.cssText=`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`,C.appendChild(a),C.appendChild(document.createTextNode("Report selected listings")),C.addEventListener("mouseenter",()=>{C.disabled||(C.style.background="#2A00A0")}),C.addEventListener("mouseleave",()=>{C.disabled||(C.style.background="#470CED")}),C.addEventListener("click",()=>{C.disabled||(m.style.display="none",z.style.display="flex")}),m.appendChild(C),document.body.appendChild(M),document.body.appendChild(m);const ve=document.createElement("div");ve.style.cssText=`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 994px;
  height: 985px;
  background: #F7F8FA;
  border-radius: 28px;
  padding: 40px;
  padding-bottom: 100px;
  z-index: 999999;
  display: none;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
`;v=document.createElement("div"),v.className="Asin-div",v.style.cssText=`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,f=document.createElement("div");f.textContent="What is your ASIN?",f.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  color: #606F95;
  line-height: 1.197;
`;const w=document.createElement("input");w.type="text",w.placeholder="Enter your ASIN here",w.id="originalasininput",w.className="asin-input",w.style.cssText=`
  width: 230px;
  height: 40px;
  padding: 13px 12px;
  background: #FFFFFF;
  border: 1.5px solid #DCE0E5;
  border-radius: 4px;
  font-family: 'Amazon Ember';
  font-size: 14px;
  line-height: 14px;
  color: #1F2937;
  transition: all 0.2s ease;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
`,w.addEventListener("focus",()=>{w.classList.contains("error")||(w.style.borderColor="#470CED",w.style.borderWidth="1.5px")}),w.addEventListener("blur",()=>{w.classList.contains("error")||(w.style.borderColor="#DCE0E5",w.style.borderWidth="1.5px")}),w.setError=e=>{e?(w.classList.add("error"),w.style.borderColor="#FF3920",w.style.borderWidth="1px"):(w.classList.remove("error"),w.style.borderColor="#DCE0E5",w.style.borderWidth="1.5px")};r=document.createElement("style");r.textContent=`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #1F2937 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`,document.head.appendChild(r);const Ee=document.createElement("button");Ee.id="back-btn",Ee.className="back-btn",Ee.style.cssText=`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 122px;
  height: 36px;
  background: #470CED;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #F8FAFC;
  cursor: pointer;
`;t=document.createElement("img"),t.src=chrome.runtime.getURL("assets/back-ic.svg"),t.style.cssText=`
  width: 20px;
  height: 20px;
`,e=document.createElement("span"),e.textContent="Back",e.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #F8FAFC;
  line-height: 1.714;
`,Ee.appendChild(t),Ee.appendChild(e),v.appendChild(f),v.appendChild(Ee),o=document.createElement("div"),o.className="issue-cards-container",o.style.cssText=`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,d=document.createElement("div"),d.textContent="What best describes your issue?",d.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  color: #606F95;
  line-height: 1.197;
`,l=document.createElement("div");function Ce(e,t,n,o="normal"){let i="";"Stolen Artwork"===e?i="assets/stolen-artwork-active-img.svg":"Copied Design"===e?i="assets/copied-design-active-img.svg":"Copied Listing"===e&&(i="assets/copied-listing-active-img.svg");const s=document.createElement("div");let r="";"Stolen Artwork"===e?r="stolen-artwork-card":"Copied Design"===e?r="copied-design-card":"Copied Listing"===e&&(r="copied-listing-card"),s.className=(`issue-card ${o} `+r).trim(),s.style.cssText=`
    width: 882px;
    box-sizing: border-box;
    background: ${"selected"!==o&&"hover"===o?"rgba(96, 111, 149, 0.01)":"#FFFFFF"};
    border: ${"selected"===o?"1.5px solid #470CED":"hover"===o?"none":"1.5px solid #E2E8F0"};
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  `;var a=document.createElement("div"),l=(a.style.cssText=`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: 16px;
    padding: 24px;
  `,document.createElement("div")),d=(l.style.cssText=`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  `,document.createElement("div")),c=(d.style.cssText=`
    display: flex;
    align-items: flex-start;
    gap: 16px;
  `,document.createElement("div"));c.style.cssText=`
    width: 48px;
    height: 48px;
  `;const p=document.createElement("img"),m=(p.src=chrome.runtime.getURL("selected"===o?i:n),p.className="card-icon",p.style.cssText=`
    width: 48px;
    height: 48px;
  `,p.dataset.normalIcon=n,p.dataset.activeIcon=i,document.createElement("img")),u=(m.src=chrome.runtime.getURL("assets/ham-checkbox.svg"),m.style.cssText=`
    width: 24px;
    height: 24px;
    filter: ${"selected"===o?"none":"brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"};
  `,c.appendChild(p),d.appendChild(c),l.appendChild(d),l.appendChild(m),document.createElement("div")),y=(u.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 700;
    font-size: 18px;
    color: ${"selected"===o?"#470CED":"#606F95"};
    letter-spacing: -1.5%;
    line-height: 1.197;
    text-align: left;
  `,u.textContent=e,document.createElement("div"));y.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 12px;
    color: ${"selected"===o?"#470CED":"#606F95"};
    line-height: 1.666;
    text-align: left;
  `,y.textContent=t,a.appendChild(l);n=document.createElement("div");return n.style.cssText=`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 100%;
  `,n.appendChild(u),n.appendChild(y),a.appendChild(n),s.appendChild(a),s.addEventListener("mouseenter",()=>{s.classList.contains("selected")||(s.style.background="rgba(96, 111, 149, 0.05)")}),s.addEventListener("mouseleave",()=>{s.classList.contains("selected")||(s.style.background="#FFFFFF")}),s.addEventListener("click",()=>{document.querySelectorAll(".issue-card").forEach(e=>{e.classList.remove("selected"),e.style.background="#FFFFFF",e.style.border="1.5px solid #E2E8F0";var t=e.querySelector(".issue-card > div > div:last-child > div:first-child"),t=(t&&(t.style.color="#606F95"),e.querySelector(".issue-card > div > div:last-child > div:last-child")),t=(t&&(t.style.color="#606F95"),e.querySelector(".issue-card > div > div:first-child > img:last-child")),t=(t&&(t.style.filter="brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"),e.querySelector(".card-icon"));t&&t.dataset.normalIcon&&(t.src=chrome.runtime.getURL(t.dataset.normalIcon))}),s.classList.add("selected"),s.style.background="#FFFFFF",s.style.border="1.5px solid #470CED",m.style.filter="none",u.style.color="#470CED",y.style.color="#470CED",p.dataset.activeIcon&&(p.src=chrome.runtime.getURL(p.dataset.activeIcon)),window.selectedIssueType=e,console.log(),S.cardSelected=!0,T(),Xe()}),s}l.style.cssText=`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 914px;
`;x=Ce("Stolen Artwork","Your exact artwork was re-uploaded","assets/stolen-artwork-img.svg","normal"),i=Ce("Copied Design","Your exact design layout was copied","assets/copied-design-img.svg"),p=Ce("Copied Listing","Your exact product details were duplicated","assets/copied-listing-img.svg"),l.appendChild(x),l.appendChild(i),l.appendChild(p),o.appendChild(d),o.appendChild(l),a=document.createElement("div"),a.style.cssText=`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 915px;
  height: fit-content;
  padding: 0;
`,r=document.createElement("div"),r.style.cssText=`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 215px;
  height: 37px;
`,t=document.createElement("div"),t.textContent="Primary contact information",t.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.197;
  color: #606F95;
  white-space: nowrap;
`,e=document.createElement("div"),e.textContent="This is the contact Amazon will use.",e.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.666;
  color: #606F95;
  white-space: nowrap;
`,r.appendChild(t),r.appendChild(e),f=document.createElement("div"),f.style.cssText=`
  display: flex;
  gap: 16px;
  width: 100%;
`,v=document.createElement("div"),v.style.cssText=`
  display: flex;
  gap: 16px;
  width: 100%;
`,x=document.createElement("div");function we(e,t,n=!1,o=!1){var i=document.createElement("div");i.style.cssText=`
    display: flex;
    flex-direction: column;
    width: 216.5px;
  `;let s="",r="";"First Name"===e?(s="first-name-div",r="first-name-input"):"Last Name"===e?(s="last-name-div",r="last-name-input"):"Company"===e?(s="company-div",r="company-input"):"Address Line 1"===e?(s="address-1-div",r="address-1-input"):"Address Line 2"===e?(s="address-2-div",r="address-2-input"):"Country/Region"===e?(s="country-dropdown-div",r="country-dropdown"):"State"===e?(s="state-div",r="state-input"):"City"===e?(s="city-div",r="city-input"):"ZIP Code"===e?(s="zipcode-div",r="zip-code-input"):"Phone Number"===e?(s="phone-number-div",r="phone-number-input"):"Contact Name"===e?(s="contact-name-div",r="contact-name-input"):"Contact E-mail"===e&&(s="contact-email-div",r="contact-email-input"),i.id=s,i.className=s;var a=document.createElement("div"),l=(a.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    margin-bottom: 8px;
  `,document.createElement("div"));if(l.textContent=e,l.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    color: #606F95;
  `,a.appendChild(l),n&&((l=document.createElement("div")).textContent="Optional",l.style.cssText=`
      padding: 0.5px 8.5px;
      background: rgba(0, 122, 255, 0.1);
      border-radius: 2px;
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #007AFF;
      margin-left: auto;
    `,a.appendChild(l)),o&&"Country/Region"===e){const c=document.createElement("div"),p=(c.className="select-dropdown snap-profile-dropdown",c.id=r,c.style.cssText=`
      position: relative;
      min-width: 216px;
      width: 216px;
      cursor: pointer;
      user-select: none;
    `,document.createElement("div")),m=(p.className="dropdown-header",p.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      height: 40px;
      border: 1.5px solid #DCE0E5;
      border-radius: 4px;
      background: white;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    `,document.createElement("span"));m.textContent=t,m.style.cssText=`
      padding-left: 12px;
      font-family: 'Amazon Ember';
      font-size: 13px;
      color: #1F2937;
    `;n=document.createElement("img");n.src=chrome.runtime.getURL("assets/dropdown-ic.svg"),n.style.cssText=`
      margin-right: 12px;
    `,p.appendChild(m),p.appendChild(n);const u=document.createElement("div");u.className="dropdown-menu",u.style.cssText=`
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      border: 1px solid #DCE0E5;
      border-radius: 4px;
      margin-top: 4px;
      z-index: 1000;
      display: none;
    `;l=document.createElement("div"),o=(l.className="search-container",l.style.cssText=`
      display: flex;
      align-items: center;
      padding: 8px 12px;
      border-bottom: 1px solid #E9EBEF;
    `,document.createElement("div"));o.className="search-icon",o.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      margin-right: 8px;
    `,o.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#470CED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 14L11.1 11.1" stroke="#470CED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;const y=document.createElement("input"),h=(y.type="text",y.className="search-input",y.placeholder="Search countries...",y.style.cssText=`
      width: 100%;
      border: none;
      outline: none;
      font-size: 13px;
      color: #1F2937;
      padding: 0;
      background: transparent;
      font-family: 'Amazon Ember';
      box-shadow: none;
    `,l.appendChild(o),l.appendChild(y),document.createElement("div"));function d(t=""){h.innerHTML="",B.filter(e=>e.toLowerCase().includes(t.toLowerCase())).forEach(e=>{const t=document.createElement("div");t.className="dropdown-item",t.textContent=e,t.style.cssText=`
          padding: 8px 12px;
          cursor: pointer;
          font-family: 'Amazon Ember';
          font-size: 13px;
          color: #1F2937;
        `,e===m.textContent&&(t.style.fontWeight="700",t.style.color="#470CED"),t.addEventListener("mouseover",()=>{t.style.backgroundColor="#F3F4F6"}),t.addEventListener("mouseout",()=>{t.style.backgroundColor="transparent"}),t.addEventListener("click",()=>{m.textContent=e,u.style.display="none",c.classList.remove("focused"),p.style.borderColor="#DCE0E5",p.style.borderWidth="1.5px",d(y.value)}),h.appendChild(t)})}h.className="dropdown-list",h.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
    `,y.addEventListener("input",e=>{d(e.target.value)}),p.addEventListener("click",()=>{var e="none"===u.style.display;u.style.display=e?"block":"none",c.classList.toggle("focused"),e?(p.style.borderColor="#470CED",p.style.borderWidth="1.5px"):(p.style.borderColor="#DCE0E5",p.style.borderWidth="1.5px",y.value="",d())}),document.addEventListener("click",e=>{c.contains(e.target)||p.contains(e.target)||(u.style.display="none",c.classList.remove("focused"),p.style.borderColor="#DCE0E5",p.style.borderWidth="1.5px")}),window.addEventListener("focus",()=>{setTimeout(()=>{c.classList.contains("focused")&&!u.contains(document.activeElement)&&(u.style.display="none",c.classList.remove("focused"),p.style.borderColor="#DCE0E5",p.style.borderWidth="1.5px")},500)}),document.addEventListener("focusout",e=>{c.contains(e.relatedTarget)||(u.style.display="none",c.classList.remove("focused"),p.style.borderColor="#DCE0E5",p.style.borderWidth="1.5px")}),u.style.display="none",c.classList.remove("focused"),u.appendChild(l),u.appendChild(h),c.appendChild(p),c.appendChild(u),d(),i.appendChild(a),i.appendChild(c)}else{const g=document.createElement("input");g.type="text",g.placeholder=t,g.id=r,g.className=r,g.style.cssText=`
    height: 40px;
    padding: 0 12px;
    border: 1.5px solid #DCE0E5;
    border-radius: 4px;
    font-family: 'Amazon Ember';
    font-size: 13px;
    color: #1F2937;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s ease;
    -webkit-appearance: none;
    box-shadow: none;
  `,g.addEventListener("focus",()=>{g.classList.contains("error")||(g.style.borderColor="#470CED",g.style.borderWidth="1.5px")}),g.addEventListener("blur",()=>{g.classList.contains("error")||(g.style.borderColor="#DCE0E5",g.style.borderWidth="1.5px")}),g.setError=e=>{e?(g.classList.add("error"),g.style.borderColor="#FF3920",g.style.borderWidth="1px"):(g.classList.remove("error"),g.style.borderColor="#DCE0E5",g.style.borderWidth="1.5px")},i.appendChild(a),i.appendChild(g)}return i}x.style.cssText=`
  display: flex;
  gap: 16px;
  width: 100%;
`,f.appendChild(we("First Name","Enter your first name")),f.appendChild(we("Last Name","Enter your last name")),f.appendChild(we("Company","Enter company name",!0)),f.appendChild(we("Address Line 1","Enter address")),v.appendChild(we("Address Line 2","Enter address",!0)),v.appendChild(we("Country/Region","Country/Region",!1,!0)),v.appendChild(we("State","Enter state",!0)),v.appendChild(we("City","Enter city")),x.appendChild(we("ZIP Code","Enter ZIP code")),x.appendChild(we("Phone Number","Enter phone number")),a.appendChild(r),a.appendChild(f),a.appendChild(v),a.appendChild(x),x.style.marginBottom="0";i=document.createElement("div"),i.style.cssText=`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,p=document.createElement("div"),p.style.cssText=`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`,d=document.createElement("div"),d.textContent="Secondary contact information",d.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.197;
  color: #606F95;
  width: 100%;
`,l=document.createElement("div"),l.textContent="This contact information will be shared with the party you're reporting.",l.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.666;
  color: #606F95;
  width: 100%;
`,p.appendChild(d),p.appendChild(l),t=document.createElement("div"),t.style.cssText=`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 66px;
`,t.appendChild(we("Contact Name","Enter contact name")),t.appendChild(we("Contact E-mail","Enter contact e-mail")),i.appendChild(p),i.appendChild(t),e=document.createElement("div");e.className="confirm-report-btn",e.style.cssText=`
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: calc(100% - 80px);
  z-index: 10;
`;const k=document.createElement("button");k.style.cssText=`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  background: #470CED;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: white;
  line-height: 1;
  cursor: pointer;
  height: 48px;
  width: 100%;
  transition: all 0.2s ease;
`;r=document.createElement("img"),r.src=chrome.runtime.getURL("assets/apply.svg"),r.style.cssText=`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`,k.appendChild(r),k.appendChild(document.createTextNode("Confirm and start reporting")),k.addEventListener("mouseenter",()=>{k.style.background="#2A00A0"}),k.addEventListener("mouseleave",()=>{k.style.background="#470CED"}),k.addEventListener("mouseleave",()=>{k.style.background="#470CED"}),k.addEventListener("click",async()=>{try{var e,t=document.querySelector(".issue-card.selected"),n=(t&&t.querySelector("div > div:last-child > div:first-child").textContent,{ReportedASINs:Array.from(g).map(e=>{return e.closest('div[style*="grid"]').querySelector("div:nth-child(6)").textContent.trim()}).join(", "),IssueSelected:window.selectedIssueType||"Stolen Artwork",originalAsin:w.value.trim(),originalAsinDate:await chrome.storage.local.get("originalAsinData").then(e=>{return e.originalAsinData&&JSON.parse(e.originalAsinData).date||"N/A"}),BrandName:await chrome.storage.local.get("originalAsinData").then(e=>{return e.originalAsinData&&JSON.parse(e.originalAsinData).brand||"N/A"}),PrimaryInfo:{firstName:document.querySelector("#first-name-input").value,lastName:document.querySelector("#last-name-input").value,company:document.querySelector("#company-input").value||"",addressLine1:document.querySelector("#address-1-input").value,addressLine2:document.querySelector("#address-2-input").value||"",city:document.querySelector("#city-input").value,state:document.querySelector("#state-input").value||"",zipCode:document.querySelector("#zip-code-input").value,country:document.querySelector(".dropdown-header span").textContent,phoneNumber:document.querySelector("#phone-number-input").value},SecInfo:{contactName:document.querySelector("#contact-name-input").value,contactEmail:document.querySelector("#contact-email-input").value}});console.log(),window.handleReport?(await window.handleReport(n),chrome.notifications.create({type:"basic",iconUrl:chrome.runtime.getURL("assets/hammer-ic.svg"),title:"Report Automation Started",message:"The report automation has been launched successfully."}),Se(),g.clear(),document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked=!1,e.style.backgroundColor="white",e.style.borderColor="#E4E4E7",e.style.backgroundImage="none"}),(e=document.querySelector('.header-div input[type="checkbox"]'))&&(e.checked=!1,e.style.backgroundColor="white",e.style.borderColor="#E4E4E7",e.style.backgroundImage="none"),u.style.opacity="0.5",u.style.cursor="not-allowed",u.style.pointerEvents="none",u.disabled=!0,y.style.opacity="0.5",y.style.cursor="not-allowed",y.style.pointerEvents="none",y.disabled=!0):(console.error(""),chrome.notifications.create({type:"basic",iconUrl:chrome.runtime.getURL("assets/hammer-ic.svg"),title:"Error",message:"Could not start report automation. Please try again."}))}catch(e){console.error(),chrome.notifications.create({type:"basic",iconUrl:chrome.runtime.getURL("assets/hammer-ic.svg"),title:"Error",message:"An error occurred while starting the report automation. Please try again."})}}),e.appendChild(k),f=document.createElement("div"),f.className="confirm-top",f.style.cssText=`
  width: 100%;
  height: 36px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,v=document.createElement("div"),v.className="left-div",v.style.cssText=`
  display: flex;
  align-items: center;
  height: 100%;
`,v.appendChild(Ee),x=document.createElement("div");x.className="right-div",x.style.cssText=`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`;const ke=document.createElement("div"),Ae=(ke.style.cssText=`
  display: flex;
  align-items: center;
  gap: 16px;
`,[{number:"01",text:"Add Infringing ASINs",state:"completed"},{number:"02",text:"Validate your ASIN",state:"completed"},{number:"03",text:"Confirm & Report",state:"active"}]);Ae.forEach((e,t)=>{var n=document.createElement("div"),o=(n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
  `,"completed"===e.state?((o=document.createElement("img")).src=chrome.runtime.getURL("assets/loaded.svg"),o.style.cssText=`
      width: 24px;
      height: 24px;
    `,n.appendChild(o)):((o=document.createElement("div")).style.cssText=`
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 12px;
      background: ${"active"===e.state?"#470CED":"#E9EBF2"};
      color: ${"active"===e.state?"white":"#606F95"};
    `,o.textContent=e.number,n.appendChild(o)),document.createElement("span"));o.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 14px;
    color: ${"completed"===e.state?"#0D0B26":"active"===e.state?"#470CED":"#606F95"};
  `,o.textContent=e.text,n.appendChild(o),t<Ae.length-1&&((o=document.createElement("div")).style.cssText=`
      width: 24px;
      height: 1px;
      background: ${"completed"===e.state?"#470CED":"#E9EBF2"};
      margin: 0 4px;
    `,n.appendChild(o)),ke.appendChild(n)});d=document.createElement("button"),d.style.cssText=`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,l=document.createElement("img");function Se(){M.style.display="none",m.style.display="none",ve.style.display="none",z.style.display="none",document.body.style.overflow="",q&&(q.value="",I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5")}l.src=chrome.runtime.getURL("assets/close-ham-popup-ic.svg"),l.style.cssText=`
  width: 24px;
  height: 24px;
`,d.appendChild(l),d.addEventListener("click",()=>{ve.style.display="none",M.style.display="none",document.body.style.overflow=""}),x.appendChild(ke),x.appendChild(d),f.appendChild(v),f.appendChild(x),ve.appendChild(f),ve.appendChild(o),ve.appendChild(a),ve.appendChild(i),ve.appendChild(e),document.body.appendChild(ve),Ee.addEventListener("click",()=>{ve.style.display="none",z.style.display="flex"}),U.addEventListener("click",function(){M.style.display="block",m.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",Se),M.addEventListener("click",Se);const A=new Set,Le=new Map,F=new Map,N=new Map,Te=new Map;new Map;function Fe(){chrome.storage.local.set({reportedAsins:JSON.stringify(Array.from(A)),productTitles:JSON.stringify(Object.fromEntries(Le)),asinMarketplaces:JSON.stringify(Object.fromEntries(F)),productBSRs:JSON.stringify(Object.fromEntries(N)),productPublishDates:JSON.stringify(Object.fromEntries(Te))})}chrome.storage.local.get(["reportedAsins","productTitles","asinMarketplaces","productBSRs","productPublishDates"],e=>{var t;e.reportedAsins&&JSON.parse(e.reportedAsins).forEach(e=>A.add(e)),e.productTitles&&(t=JSON.parse(e.productTitles),Object.entries(t).forEach(([e,t])=>{Le.set(e,t)})),e.asinMarketplaces&&(t=JSON.parse(e.asinMarketplaces),Object.entries(t).forEach(([e,t])=>{F.set(e,t)})),e.productBSRs&&(t=JSON.parse(e.productBSRs),Object.entries(t).forEach(([e,t])=>{N.set(e,t)})),e.productPublishDates&&(t=JSON.parse(e.productPublishDates),Object.entries(t).forEach(([e,t])=>{Te.set(e,t)}));const n=L();e=Array.from(A).filter(e=>F.get(e)===n).length;c.textContent=e,c.style.backgroundColor=0===e?"#FA583A":"#01BB87",ne.textContent=e+"/50",Oe()});const Ne={US:"amazon.com",UK:"amazon.co.uk",DE:"amazon.de",FR:"amazon.fr",IT:"amazon.it",ES:"amazon.es",JP:"amazon.co.jp"},ze={US:"assets/us.svg",UK:"assets/uk.svg",DE:"assets/de.svg",FR:"assets/fr.svg",IT:"assets/it.svg",ES:"assets/es.svg",JP:"assets/jp.svg"};function De(e){try{const t=new URL(e).hostname.toLowerCase();return Object.entries(Ne).find(([,e])=>t.includes(e.toLowerCase()))?.[0]||"US"}catch(e){return console.error(),"US"}}const qe={US:{rankText:["Best Sellers Rank","Amazon Best Sellers Rank"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div","#SalesRank","#productDetails_detailBullets_sections1"]},UK:{rankText:["Best Sellers Rank"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]},DE:{rankText:["Best Sellers Rank","Bestseller-Rang"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]},FR:{rankText:["Best Sellers Rank","Classement des meilleures ventes d'Amazon"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]},IT:{rankText:["Best Sellers Rank","Posizione nella classifica Bestseller di Amazon"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]},ES:{rankText:["Best Sellers Rank","Clasificación en los más vendidos de Amazon"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]},JP:{rankText:["Amazon Bestseller","ベストセラー順位"],selectors:["#detailBulletsWrapper_feature_div","#detailBullets_feature_div"]}};function Ie(e){var t;return e&&"N/A"!==e&&"Loading..."!==e?(t=e.toString().replace(/[#,]/g,""),t=parseInt(t,10),isNaN(t)?"N/A":"#"+t.toLocaleString()):e}async function Re(n,o="US"){var i,o=F.get(n)||o,s=Ne[o];if(Le.has(n)&&N.has(n)&&Te.has(n))return{title:Le.get(n),bsr:N.get(n),published:Te.get(n),isValid:!0,marketplace:o,brand:"N/A"};if(!s)return{title:"Listing not found in this marketplace",bsr:"N/A",published:"N/A",isValid:!1,marketplace:o,brand:"N/A"};try{var r=await fetch(`https://www.${s}/dp/`+n);if(!r.ok)return{title:"Listing not found in this marketplace",bsr:"N/A",published:"N/A",isValid:!1,marketplace:o,brand:"N/A"};var a=await r.text(),l=(new DOMParser).parseFromString(a,"text/html"),d=l.querySelector("#productTitle"),c=d?d.textContent.trim():"Listing title not found";let e="N/A";var p=qe[o]||qe.US;for(const S of p.selectors){var m=l.querySelector(S);if(m){var u=m.textContent;for(const L of p.rankText)if(u.includes(L)){var y=u.split(L)[1]?.match(/#?([0-9,]+)/);if(y){var h=(i=y[0])&&"N/A"!==i&&"Loading..."!==i?i.replace(/[#,]/g,""):i;if(h){e=h;break}}}if("N/A"!==e)break}}let t="N/A";var g=l.querySelector("#detailBullets_feature_div");if(g)for(const T of g.querySelectorAll("li")){var x=T.textContent.trim();if(x.includes("Date First Available")){var f,b,v,E,C,w,k,A=x.split(":")[1]?.trim();if(A)try{let e;e=/[A-Za-z]+ \d{1,2},? \d{4}/.test(A)?new Date(A):/\d{1,2} [A-Za-z]+ \d{4}/.test(A)?([f,b,v]=A.match(/(\d{1,2}) ([A-Za-z]+) (\d{4})/).slice(1),new Date(b+` ${f}, `+v)):/\d{1,2} [A-Za-z]+\. \d{4}/.test(A)?([E,C,w]=A.match(/(\d{1,2}) ([A-Za-z]+)\. (\d{4})/).slice(1),k=C.replace(".",""),new Date(k+` ${E}, `+w)):new Date(A),isNaN(e.getTime())||(t=e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))}catch(e){console.error(),t="N/A"}break}}return d&&(Le.set(n,c),"N/A"!==e&&N.set(n,e),"N/A"!==t&&Te.set(n,t),Fe()),{title:c,bsr:e,published:t,isValid:!!d,marketplace:o,brand:"N/A"}}catch(e){return console.error(),{title:"Error fetching listing",bsr:"N/A",published:"N/A",isValid:!1,marketplace:o,brand:"N/A"}}}const Be=50;function Ue(e,t){chrome.notifications.create({type:"basic",iconUrl:chrome.runtime.getURL("assets/hammer-ic.svg"),title:e,message:t})}U.addEventListener("dragover",e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",U.style.transform="scale(1.1)",j.style.transform="scale(1.1)"}),U.addEventListener("drop",n=>{n.preventDefault(),U.style.transform="scale(1)",j.style.transform="scale(1)";const t=L();if(Array.from(A).filter(e=>F.get(e)===t).length>=Be)Ue("Maximum ASINs Reached",`You can only report up to 50 ASINs at a time for ${t}. Please submit your current report first.`);else{var o=Array.from(n.dataTransfer.types);let e,t=!1;if(o.includes("Files")&&0<n.dataTransfer.files.length)n.dataTransfer.files[0].type.startsWith("image/")&&(t=!0,e=window.location.href);else if(o.includes("text/uri-list")?e=n.dataTransfer.getData("text/uri-list"):o.includes("text/plain")&&(e=n.dataTransfer.getData("text/plain")),e&&e.includes("amazon.com/images/"))t=!0,e=window.location.href;else if(!e){var o=n.dataTransfer.getData("text/html");if(o){var n=document.createElement("div"),o=(n.innerHTML=o,n.querySelector("a"));const j=n.querySelector("img");o?e=o.href:j&&j.src&&j.src.includes("amazon.com/images/")&&(t=!0,e=window.location.href)}}e&&(n=function e(t){var n=t.match(/\/dp\/([A-Z0-9]{10})/);if(n)return n[1];n=t.match(/[?&]pd_rd_i=([A-Z0-9]{10})/);if(n)return n[1];const o=t.match(/%2Fdp%2F([A-Z0-9]{10})/);if(o)return o[1];try{var i=new URL(t);if(i.pathname.startsWith("/sspa/click")){var s=i.searchParams.get("url");if(s){const o=s.match(/%2Fdp%2F([A-Z0-9]{10})/);return o?o[1]:e(s)}}var r=i.pathname.split("/"),a=r.indexOf("dp");if(-1!==a&&a+1<r.length){var l=r[a+1];if(10===l.length)return l}}catch(e){console.error()}return null}(e))&&(o=De(e),F.set(n,o),A.add(n),window.updateSnapCounter(A.size),Fe())}}),document.addEventListener("drop",e=>{e.preventDefault()}),document.addEventListener("dragover",e=>{e.preventDefault()}),document.body.appendChild(U),window.updateSnapCounter=e=>{const t=L();var n=Array.from(A).filter(e=>F.get(e)===t).length;c.textContent=n,c.style.backgroundColor=0===n?"#FA583A":"#01BB87",ne.textContent=n+"/50",Oe()};let je=!0;function Me(e,t,n,o){!(je=e===s)&&Pe&&Pe.hideFetchingLoader(),e.style.background="white",e.style.border="0.3px solid #DCE0E5",e.querySelector("div").style.color="#470CED",e.querySelector("div").style.fontWeight="700",e.querySelector("img").style.filter="none",t.style.background="transparent",t.style.border="none",t.querySelector("div").style.color="#606F95",t.querySelector("div").style.fontWeight="500",t.querySelector("img").style.filter="brightness(0) saturate(100%) invert(46%) sepia(11%) saturate(1013%) hue-rotate(189deg) brightness(90%) contrast(87%)";t=document.querySelector(".listings-right > div:first-child"),t&&(t.style.display=e===s?"flex":"none"),V.style.display=e===s?"flex":"none",t=document.getElementById("report-button");t&&(t.style.display=e===s?"flex":"none"),n.style.display="flex",o.style.display="none",e===s?Oe():(he.innerHTML="",he.appendChild(ye))}Me(s,$,E,he),s.addEventListener("click",()=>{Me(s,$,E,he)}),$.addEventListener("click",()=>{Me($,s,he,E)});const Pe={queue:[],isProcessing:!1,batchSize:10,isFetchingActive:!1,add:function(e,t){Le.has(e)&&N.has(e)&&Te.has(e)?this.updateRowWithStoredData(e,t):(this.queue.push({asin:e,row:t}),this.isProcessing||(this.processNext(),this.showFetchingLoader()))},showFetchingLoader:function(){var e,t,n;document.getElementById("fetching-loader")||je&&(this.isFetchingActive=!0,this.setUIElementsEnabled(!1),(e=document.createElement("div")).id="fetching-loader",e.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.95);
      z-index: 4000;
      pointer-events: none;
    `,(n=document.createElement("div")).style.cssText=`
      width: 40px;
      height: 40px;
      border: 4px solid rgba(96, 111, 149, 0.1);
      border-radius: 50%;
      border-left-color: #470CED;
      animation: spin 1s linear infinite;
      margin-bottom: 16px;
    `,(t=document.createElement("style")).textContent=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,document.head.appendChild(t),(t=document.createElement("div")).textContent="Fetching ASIN's data...",t.style.cssText=`
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 16px;
      color: #606F95;
    `,e.appendChild(n),e.appendChild(t),n=document.querySelector(".listings-tab-content")||_.querySelector("div:first-child"))&&(n.style.position="relative",n.appendChild(e))},hideFetchingLoader:function(){const e=document.getElementById("fetching-loader");e&&(e.style.opacity="0",e.style.transition="opacity 0.3s ease",setTimeout(()=>{e.remove()},300)),this.isFetchingActive=!1,this.setUIElementsEnabled(!0)},setUIElementsEnabled:function(n){if(document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.disabled=!n,n?(e.style.opacity="1",e.style.cursor="pointer"):(e.style.opacity="0.5",e.style.cursor="not-allowed")}),n){const g=document.querySelectorAll('#product-table tbody input[type="checkbox"]:checked');Je(0<g.length)}var e=document.querySelector('button[data-tooltip="Delete selected"]'),t=document.querySelector('button[data-tooltip="Download selected"]'),o=(e,t)=>{e&&(n?Ke(g?g.size:0):(e.disabled=!0,e.style.background="#CFD4D4",e.style.opacity="1",e.style.cursor="not-allowed",e.style.pointerEvents="none",e.style.color="rgba(0, 0, 0, 0.5)",t&&(t.style.filter="brightness(0)",t.style.opacity="0.5")))},i=(e&&(i=e.querySelector("img"),o(e,i)),t&&(e=t.querySelector("img"),o(t,e)),document.querySelector('input[placeholder="Search for ASIN, listings..."]')),o=(i&&(i.disabled=!n,n?(i.style.opacity="1",i.style.cursor="text"):(i.style.opacity="0.5",i.style.cursor="not-allowed")),document.querySelector('button:has(> img[src*="close-ham-popup-ic.svg"])'));o&&(n?(o.disabled=!1,o.style.pointerEvents="auto"):(o.disabled=!0,o.style.pointerEvents="none")),o||(t=(document.querySelector('input[placeholder="Search for ASIN, listings..."]')?.parentElement)?.querySelector("button"))&&(n?(t.disabled=!1,t.style.pointerEvents="auto"):(t.disabled=!0,t.style.pointerEvents="none"))},updateRowWithStoredData:function(e,t){var n=Le.get(e),o=N.get(e),i=Te.get(e),e=(F.get(e),t.querySelector("div:nth-child(3) a")),n=(!e||"Listing not found in this marketplace"!==(e.textContent=n)&&"Error fetching listing"!==n||(e.style.color="#FF391F",e.style.textDecoration="none",e.style.cursor="default",e.style.pointerEvents="none",e.style.pointerEvents="none"),t.querySelector("div:nth-child(4)")),e=(n&&(n.textContent=i||"N/A"),t.querySelector("div:nth-child(5)"));e&&(e.innerHTML="",(n=document.createElement("div")).style.cssText=`
        padding: 4px 8px;
        border-radius: 4px;
        font-family: 'Amazon Ember';
        font-size: 14px;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,i=Ie(o),n.textContent=i,t=_e(o),n.style.background=t.background,n.style.color=t.color,e.appendChild(n))},processBatch:async function(e){e=e.map(({asin:l,row:d})=>(async()=>{try{var e,t,n,o,i=await Re(l),s=d.querySelector("div:nth-child(3) a"),r=(s&&(s.textContent=i.title,i.isValid||(s.style.color="#FF391F",s.style.textDecoration="none",s.style.cursor="default",s.style.pointerEvents="none")),i.isValid||(e=d.querySelector("div:nth-child(2) span:last-child"))&&(e.style.color="#FF391F",e.title=i.title),d.querySelector("div:nth-child(4)")),a=(r&&(r.textContent=i.published),d.querySelector("div:nth-child(5)"));a&&(a.innerHTML="",(t=document.createElement("div")).style.cssText=`
              padding: 4px 8px;
              border-radius: 4px;
              font-family: 'Amazon Ember';
              font-size: 14px;
              font-weight: 700;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            `,n=Ie(i.bsr),t.textContent=n,o=_e(i.bsr),t.style.background=o.background,t.style.color=o.color,a.appendChild(t)),"N/A"!==i.bsr&&"Loading..."!==i.bsr&&(N.set(l,i.bsr),Fe())}catch(e){console.error(),this.handleError(d)}})());await Promise.all(e)},handleError:function(e){var t=e.querySelector("div:nth-child(3) a"),n=e.querySelector("div:nth-child(2) span:last-child"),o=e.querySelector("div:nth-child(4)"),e=e.querySelector("div:nth-child(5) div");t&&(t.textContent="Error fetching listing",t.style.color="#FF391F",t.style.textDecoration="none",t.style.cursor="default",t.style.pointerEvents="none"),n&&(n.style.color="#FF391F"),o&&(o.textContent="N/A"),e&&(e.textContent="N/A",e.style.background="rgba(250, 88, 58, 0.1)",e.style.color="#FA583A")},processNext:function(){var e;0===this.queue.length?(this.isProcessing=!1,this.hideFetchingLoader()):(this.isProcessing=!0,this.isFetchingActive&&document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.disabled=!0,e.style.opacity="0.5",e.style.cursor="not-allowed"}),e=this.queue.splice(0,this.batchSize),this.processBatch(e).catch(e=>{console.error()}).finally(()=>{setTimeout(()=>this.processNext(),100)}))}};function Oe(){const t=L();var e=Array.from(A).filter(e=>F.get(e)===t),n=0<e.length,o=(ne.textContent=e.length+"/50",document.getElementById("report-button"));if(n){o&&(o.style.display="flex"),E.style.justifyContent="flex-start",E.innerHTML="";n=document.createElement("div");function l(e){var t,n=document.getElementById("report-button");n&&(t=n.querySelector("img"),0<e?(u.style.background="#FF391F",u.style.opacity="1",u.style.cursor="pointer",u.style.pointerEvents="auto",u.style.color="white",u.disabled=!1,u.style.filter="none",W.style.filter="brightness(0) invert(1)",W.style.opacity="1",y.style.background="#470CED",y.style.opacity="1",y.style.cursor="pointer",y.style.pointerEvents="auto",y.style.color="white",y.disabled=!1,y.style.filter="none",H.style.filter="brightness(0) invert(1)",H.style.opacity="1",n.style.background="#470CED",n.style.opacity="1",n.style.cursor="pointer",n.style.pointerEvents="auto",n.style.color="white",n.disabled=!1,n.style.filter="none",t&&(t.style.filter="brightness(0) invert(1)",t.style.opacity="1")):(u.style.background="#CFD4D4",u.style.opacity="1",u.style.cursor="not-allowed",u.style.pointerEvents="none",u.style.color="rgba(0, 0, 0, 0.5)",u.disabled=!0,W.style.filter="brightness(0)",W.style.opacity="0.5",y.style.background="#CFD4D4",y.style.opacity="1",y.style.cursor="not-allowed",y.style.pointerEvents="none",y.style.color="rgba(0, 0, 0, 0.5)",y.disabled=!0,H.style.filter="brightness(0)",H.style.opacity="0.5",n.style.background="#CFD4D4",n.style.opacity="1",n.style.cursor="not-allowed",n.style.pointerEvents="none",n.style.color="rgba(0, 0, 0, 0.5)",n.disabled=!0,t&&(t.style.filter="brightness(0)",t.style.opacity="0.5")))}n.style.cssText=`
      display: flex;
      flex-direction: column;
      width: 100%;

    `,n.appendChild(Y),E.appendChild(n),V.style.display="flex",me.innerHTML="",h.checked=!1,h.style.backgroundColor="white",h.style.borderColor="#E4E4E7",h.style.backgroundImage="none",g.clear(),l(0),h.addEventListener("change",function(){if(!Pe.isFetchingActive){var e=Array.from(me.querySelectorAll('input[type="checkbox"]')).filter(e=>{e=e.closest('div[style*="grid"]');return e&&"none"!==e.style.display});const t=this.checked;g.clear(),this.checked?(this.style.backgroundColor="#470CED",this.style.borderColor="#470CED",this.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",this.style.backgroundRepeat="no-repeat",this.style.backgroundPosition="center"):(this.style.backgroundColor="white",this.style.borderColor="#E4E4E7",this.style.backgroundImage="none"),e.forEach(e=>{(e.checked=t)?(e.style.backgroundColor="#470CED",e.style.borderColor="#470CED",e.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center",g.add(e)):(e.style.backgroundColor="white",e.style.borderColor="#E4E4E7",e.style.backgroundImage="none")}),l(g.size)}});n=e;"asc"===se||"desc"===se?n.sort():"asc"===re?n.sort((e,t)=>e.localeCompare(t)):"desc"===re&&n.sort((e,t)=>t.localeCompare(e)),Pe.queue=[],Pe.isProcessing=!1,n.forEach(e=>{const t=document.createElement("div");t.style.cssText=`
        display: grid;
        grid-template-columns: 48px 100px 378px 130px 120px 120px;
        gap: 0;
        border-bottom: 1px solid #E4E4E7;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.2s ease;
      `,t.addEventListener("mouseenter",()=>{t.style.backgroundColor="#F7F8FA"}),t.addEventListener("mouseleave",()=>{t.style.backgroundColor="transparent"});var n=document.createElement("div"),o=(n.style.cssText=`
        padding: 12px 12px 18px 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing: grayscale;
      `,document.createElement("input")),o=(o.type="checkbox",o.style.cssText=`
        min-width: 20px;
        min-height: 20px;
        width: 20px;
        height: 20px;
        border: 1.5px solid #E4E4E7;
        border-radius: 4px;
        appearance: none;
        cursor: pointer;
        position: relative;
        background: white;
        transition: all 0.2s ease;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      `,Pe.isFetchingActive&&(o.disabled=!0,o.style.opacity="0.5",o.style.cursor="not-allowed"),o.addEventListener("change",function(){var e;Pe.isFetchingActive||(this.checked?(this.style.backgroundColor="#470CED",this.style.borderColor="#470CED",this.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",this.style.backgroundRepeat="no-repeat",this.style.backgroundPosition="center",g.add(this)):(this.style.backgroundColor="white",this.style.borderColor="#E4E4E7",this.style.backgroundImage="none",g.delete(this)),e=me.querySelectorAll('input[type="checkbox"]'),e=Array.from(e).every(e=>e.checked),(h.checked=e)?(h.style.backgroundColor="#470CED",h.style.borderColor="#470CED",h.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='white' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",h.style.backgroundRepeat="no-repeat",h.style.backgroundPosition="center"):(h.style.backgroundColor="white",h.style.borderColor="#E4E4E7",h.style.backgroundImage="none"),l(g.size))}),n.appendChild(o),document.createElement("div")),i=(o.style.cssText=`
        padding: 16px 16px 16px 0;
        display: flex;
        align-items: center;
        gap: 8px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,F.get(e)||"US"),s=document.createElement("img"),r=(s.src=chrome.runtime.getURL(ze[i]),s.style.cssText=`
        width: 20px;
        height: 20px;
        display: block;
        image-rendering: -webkit-optimize-contrast;
      `,document.createElement("span")),s=(r.textContent=i,r.style.cssText=`
        font-family: 'Amazon Ember';
        font-size: 14px;
        line-height: 1.4;
        color: #09090B;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,o.appendChild(s),o.appendChild(r),document.createElement("div")),r=(s.style.cssText=`
        padding: 16px 16px 16px 0;
        font-family: 'Amazon Ember';
        font-size: 14px;
        line-height: 1.4;
        color: #09090B;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        align-items: center;
        max-width: 100%;
        overflow: hidden;
      `,document.createElement("a")),i=(r.href=`https://www.${Ne[i]}/dp/`+e,r.target="_blank",r.style.cssText=`
        color: #09090B;
        text-decoration: none;
        cursor: pointer;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.4;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        display: block;
        &:hover {
          color: #470CED;
          text-decoration: underline;
        }
      `,r.textContent="Loading...",s.appendChild(r),document.createElement("div")),r=(i.style.cssText=`
        padding: 16px 16px 16px 0;
        font-family: 'Amazon Ember';
        font-size: 14px;
        line-height: 1.4;
        color: #09090B;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        align-items: center;
      `,i.textContent="Loading...",document.createElement("div")),a=(r.style.cssText=`
        padding: 16px 16px 16px 0;
        display: flex;
        align-items: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,document.createElement("div")),a=(a.style.cssText=`
        padding: 4px 8px;
        background: rgba(96, 111, 149, 0.1);
        border-radius: 4px;
        font-family: 'Amazon Ember';
        font-size: 14px;
        font-weight: 700;
        color: #606F95;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,a.textContent="Loading...",r.appendChild(a),document.createElement("div"));a.style.cssText=`
        padding: 16px 16px 16px 0;
        font-family: 'Amazon Ember';
        font-size: 14px;
        line-height: 1.4;
        color: #09090B;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        align-items: center;
      `,a.textContent=e,t.appendChild(n),t.appendChild(o),t.appendChild(s),t.appendChild(i),t.appendChild(r),t.appendChild(a),me.appendChild(t),Pe.add(e,t)})}else{o&&(o.style.display="none"),E.style.justifyContent="center",E.innerHTML="";var e=document.createElement("div"),n=(e.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    `,document.createElement("img")),o=(n.src=chrome.runtime.getURL("assets/no-profile-img.svg"),n.style.cssText=`
      width: 80px;
      height: 91px;
    `,document.createElement("div")),i=(o.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    `,document.createElement("h3")),s=(i.textContent="No listings added yet",i.style.cssText=`
      font-family: 'Amazon Ember';
      font-weight: 700;
      font-size: 16px;
      color: #606F95;
      margin: 0;
    `,document.createElement("p"));s.textContent="Drag listings from the Amazon search results into the\ncircle at the bottom-right to start reporting.",s.style.cssText=`
      font-family: 'Amazon Ember';
      font-weight: 400;
      font-size: 14px;
      color: #606F95;
      margin: 0;
      text-align: center;
      white-space: pre-line;
    `;const a=document.createElement("button");a.id="paste-btn",a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: #470CED;
      border: none;
      border-radius: 6px;
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 14px;
      color: white;
      cursor: pointer;
      margin-top: 24px;
      transition: background 0.2s ease;
    `;var r=document.createElement("img");r.src=chrome.runtime.getURL("assets/paste-asin-ic.svg"),r.style.cssText=`
      width: 16px;
      filter: brightness(0) invert(1);
    `,a.appendChild(r),a.appendChild(document.createTextNode("Click to paste ASINs or (Ctrl/CMD+V)")),a.addEventListener("mouseenter",()=>{a.style.background="#3D0BCE"}),a.addEventListener("mouseleave",()=>{a.style.background="#470CED"}),a.addEventListener("click",async()=>{je&&$e()}),o.appendChild(i),o.appendChild(s),e.appendChild(n),e.appendChild(o),e.appendChild(a),E.appendChild(e),V.style.display="none"}}window.updateSnapCounter;async function $e(t){if(je){let e;try{if(e=t instanceof ClipboardEvent?t.clipboardData.getData("text"):await navigator.clipboard.readText()){var n=e.split(/[\s,;\n]+/).filter(Boolean).filter(e=>/^[A-Z0-9]{10}$/.test(e));if(0<n.length){const a=L();var o,i,s=Array.from(A).filter(e=>F.get(e)===a),r=Be-s.length;r<=0?Ue("Maximum ASINs Reached",`You can only report up to 50 ASINs at a time for ${a}. Please submit your current report first.`):(o=n.slice(0,r),i=n.slice(r),o.forEach(e=>{A.has(e)||(A.add(e),F.set(e,a))}),Fe(),window.updateSnapCounter(A.size),0<i.length&&Ue("Some ASINs Skipped",`Added ${o.length} ASINs for ${a}. Skipped ${i.length} ASINs due to 50 ASIN limit.

Skipped ASINs: `+i.join(", ")),u.style.background="#CFD4D4",u.style.opacity="1",u.style.cursor="not-allowed",u.style.pointerEvents="none",u.style.color="rgba(0, 0, 0, 0.5)",u.disabled=!0,W.style.filter="brightness(0)",W.style.opacity="0.5")}}}catch(e){console.error()}}}function L(){return De(window.location.href)}function _e(e){return"N/A"!==e&&e&&"Loading..."!==e?"Error"===e?{background:"rgba(250, 88, 58, 0.1)",color:"#FA583A"}:(e=parseInt(e,10),isNaN(e)?{background:"rgba(96, 111, 149, 0.1)",color:"#606F95"}:e<=2e5?{background:"rgba(1, 187, 135, 0.1)",color:"#01BB87"}:e<=1e6?{background:"rgba(71, 12, 237, 0.1)",color:"#470CED"}:e<=2e6?{background:"rgba(255, 174, 0, 0.1)",color:"#FFAE00"}:{background:"rgba(250, 88, 58, 0.1)",color:"#FA583A"}):{background:"rgba(96, 111, 149, 0.1)",color:"#606F95"}}window.updateSnapCounter=e=>{const t=L();var n=Array.from(A).filter(e=>F.get(e)===t).length;c.textContent=n,c.style.backgroundColor=0===n?"#FA583A":"#01BB87",ne.textContent=n+"/50",Oe()},_.appendChild(E),_.appendChild(he),u.addEventListener("click",()=>{if(0!==g.size){Array.from(g).map(e=>e.closest('div[style*="grid"]')).forEach(e=>{var t=e.querySelector("div:nth-child(6)");t&&(t=t.textContent.trim(),A.delete(t),Le.delete(t),F.delete(t),N.delete(t),e.remove())});var e=me.querySelectorAll('div[style*="grid"]');if(0===e.length){var t=E.querySelector("div");t&&t.remove();const l=document.getElementById("report-button");l&&(l.style.display="none"),E.style.justifyContent="center",E.innerHTML="";var t=document.createElement("div"),n=(t.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    `,document.createElement("img")),o=(n.src=chrome.runtime.getURL("assets/no-profile-img.svg"),n.style.cssText=`
      width: 80px;
      height: 91px;
    `,document.createElement("div")),i=(o.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    `,document.createElement("h3")),s=(i.textContent="No listings added yet",i.style.cssText=`
      font-family: 'Amazon Ember';
      font-weight: 700;
      font-size: 16px;
      color: #606F95;
      margin: 0;
    `,document.createElement("p"));s.textContent="Drag listings from the Amazon search results into the\ncircle at the bottom-right to start reporting.",s.style.cssText=`
      font-family: 'Amazon Ember';
      font-weight: 400;
      font-size: 14px;
      color: #606F95;
      margin: 0;
      text-align: center;
      white-space: pre-line;
    `;const d=document.createElement("button");d.id="paste-btn",d.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: #470CED;
      border: none;
      border-radius: 6px;
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 14px;
      color: white;
      cursor: pointer;
      margin-top: 24px;
      transition: background 0.2s ease;
    `;var r=document.createElement("img");r.src=chrome.runtime.getURL("assets/paste-asin-ic.svg"),r.style.cssText=`
      width: 16px;
      filter: brightness(0) invert(1);
    `,d.appendChild(r),d.appendChild(document.createTextNode("Click to paste ASINs or (Ctrl/CMD+V)")),d.addEventListener("mouseenter",()=>{d.style.background="#3D0BCE"}),d.addEventListener("mouseleave",()=>{d.style.background="#470CED"}),d.addEventListener("click",async()=>{je&&$e()}),o.appendChild(i),o.appendChild(s),t.appendChild(n),t.appendChild(o),t.appendChild(d),E.appendChild(t),V.style.display="none"}Fe();const a=L();r=Array.from(A).filter(e=>F.get(e)===a).length;c.textContent=r,c.style.backgroundColor=0===r?"#FA583A":"#01BB87",ne.textContent=r+"/50",h.checked=!1,h.style.backgroundColor="white",h.style.borderColor="#E4E4E7",h.style.backgroundImage="none",g.clear(),u.style.background="#CFD4D4",u.style.opacity="1",u.style.cursor="not-allowed",u.style.pointerEvents="none",u.style.color="rgba(0, 0, 0, 0.5)",u.disabled=!0,W.style.filter="brightness(0)",W.style.opacity="0.5",y.style.background="#CFD4D4",y.style.opacity="1",y.style.cursor="not-allowed",y.style.pointerEvents="none",y.style.color="rgba(0, 0, 0, 0.5)",y.disabled=!0,H.style.filter="brightness(0)",H.style.opacity="0.5";const l=document.getElementById("report-button");if(l&&(l.style.background="#CFD4D4",l.style.opacity="1",l.style.cursor="not-allowed",l.style.pointerEvents="none",l.style.color="rgba(0, 0, 0, 0.5)",l.disabled=!0,i=l.querySelector("img"))&&(i.style.filter="brightness(0)",i.style.opacity="0.5"),0<e.length){const l=document.getElementById("report-button");l&&(l.style.display="flex",l.style.background="#CFD4D4",l.style.opacity="1",l.style.cursor="not-allowed",l.style.pointerEvents="none",l.style.color="rgba(0, 0, 0, 0.5)",l.disabled=!0,s=l.querySelector("img"))&&(s.style.filter="brightness(0)",s.style.opacity="0.5")}}}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&"v"===e.key&&"flex"===m.style.display&&je&&(e.preventDefault(),$e(e))}),document.addEventListener("paste",e=>{"flex"===m.style.display&&je&&(e.preventDefault(),$e(e))}),y.addEventListener("click",()=>{var e,t,n;0!==g.size&&(0===(e=Array.from(g).map(e=>e.closest('div[style*="grid"]')).filter(e=>{var t=e.querySelector("div:nth-child(2) span:last-child"),e=e.querySelector("div:nth-child(3) a").textContent;return"#FF391F"!==t.style.color&&"Listing not found in this marketplace"!==e&&"Error fetching listing"!==e}).map((e,t)=>{var n=e.querySelector("div:nth-child(2) span:last-child").textContent.trim(),o=e.querySelector("div:nth-child(3) a").textContent.trim(),i=e.querySelector("div:nth-child(4)").textContent.trim(),e=e.querySelector("div:nth-child(6)"),e=e?e.textContent.trim():"",s=N.get(e);return[t+1,n,o,i,s?Ie(s):"N/A",e]})).length?Ue("No Valid Listings","All selected listings have errors or are invalid. Please select valid listings to download."):(e=[["#","Marketplace","Listing","Published","BSR","ASIN"].join(","),...e.map(e=>e.map(e=>`"${e}"`).join(","))].join("\n"),e=new Blob([e],{type:"text/csv;charset=utf-8;"}),t=document.createElement("a"),n=L(),t.href=URL.createObjectURL(e),t.download=`Snap_ASIN_${n}.csv`,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)))});let Ve=null;b.addEventListener("click",()=>{"asc"===Ve?(Ve="desc",ce.style.display="none",pe.style.display="block"):(Ve="asc",ce.style.display="block",pe.style.display="none"),se=null,ae=null,re=null,X.style.display="block",Q.style.display="none",ee.style.display="block",te.style.display="none",oe.style.display="block",ie.style.display="none",de()}),Ee.addEventListener("mouseenter",()=>{Ee.style.background="#2A00A0"}),Ee.addEventListener("mouseleave",()=>{Ee.style.background="#470CED"});const S={cardSelected:!1,firstName:!1,lastName:!1,addressLine1:!1,country:!1,city:!1,zipCode:!1,phoneNumber:!1,contactName:!1,contactEmail:!1};function We(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function He(e){return/^\+?[\d\s-()]{10,}$/.test(e)}function Ze(e,t){(e.disabled=t)?(e.style.background="#CFD4D4",e.style.opacity="1",e.style.cursor="not-allowed",e.style.pointerEvents="none",e.style.color="rgba(0, 0, 0, 0.5)",(t=e.querySelector("img"))&&(t.style.filter="brightness(0)",t.style.opacity="0.5")):(e.style.background="#470CED",e.style.opacity="1",e.style.cursor="pointer",e.style.pointerEvents="auto",e.style.color="white",(t=e.querySelector("img"))&&(t.style.filter="brightness(0) invert(1)",t.style.opacity="1")),setTimeout(()=>tt(e),50)}function T(){var e=S.cardSelected,t=S.country,n=Object.keys(Ye).every(e=>S[e]),e=e&&t&&n;Ze(k,!e),setTimeout(()=>tt(k),10)}function Je(e){Pe&&Pe.isFetchingActive?Ze(C,!0):Ze(C,!e)}function Ge(e){e.addEventListener("mouseenter",()=>{e.disabled||(e.style.background="#2A00A0")}),e.addEventListener("mouseleave",()=>{e.disabled||(e.style.background="#470CED")})}function Ke(e){Je(0<e)}Ge(C),Ge(k),Je(!0),T(),w.addEventListener("input",e=>{e=e.target.value.trim();S.asin=10===e.length,T()}),document.querySelectorAll(".issue-card").forEach(e=>{e.addEventListener("click",()=>{S.cardSelected=!0,T(),Xe()})});const Ye={firstName:"First Name",lastName:"Last Name",addressLine1:"Address Line 1",city:"City",zipCode:"ZIP Code",phoneNumber:"Phone Number",contactName:"Contact Name",contactEmail:"Contact E-mail"};Object.entries(Ye).forEach(([t,n])=>{var e=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>e.previousElementSibling?.textContent.includes(n));e&&e.addEventListener("input",e=>{e=e.target.value.trim();S[t]="phoneNumber"===t?He(e):"contactEmail"===t?We(e):0<e.length,T()})});p=document.querySelector(".dropdown-header");if(p){const xt=p.querySelector("span"),be=new MutationObserver(()=>{S.country="Country/Region"!==xt.textContent,T()});be.observe(xt,{childList:!0,characterData:!0,subtree:!0})}k.disabled=!0,k.style.opacity="0.5",k.style.cursor="not-allowed",k.style.background="#CFD4D4",k.style.pointerEvents="none";t=k.querySelector("img");t&&(t.style.filter="brightness(0)",t.style.opacity="0.5");{const ft=document.querySelector(".select-dropdown"),bt=ft?.querySelector(".dropdown-list");if(ft&&bt){let o=-1,i=[];ft.addEventListener("keydown",e=>{if(!bt.classList.contains("hidden")&&0!==(i=Array.from(bt.querySelectorAll(".dropdown-item"))).length)if("ArrowDown"===e.key||"ArrowUp"===e.key)e.preventDefault(),o="ArrowDown"===e.key?(o+1)%i.length:o<=0?i.length-1:o-1,i.forEach((e,t)=>{e.style.backgroundColor=t===o?"#F3F4F6":"transparent"}),i[o].scrollIntoView({block:"nearest"});else if("Enter"===e.key)e.preventDefault(),0<=o&&i[o].click();else if(1===e.key.length){const n=e.key.toLowerCase();var t,e=i.filter(e=>e.textContent.toLowerCase().startsWith(n));0<e.length&&(t=e.findIndex(e=>i.indexOf(e)===o),t=e[t===e.length-1?0:t+1]||e[0],o=i.indexOf(t),i[o].scrollIntoView({block:"nearest"}),i.forEach((e,t)=>{e.style.backgroundColor=t===o?"#F3F4F6":"transparent"}))}}),document.addEventListener("click",e=>{ft.contains(e.target)||(o=-1,i.forEach(e=>{e.style.backgroundColor="transparent"}))})}}function Xe(){const n={},o={"First Name":"firstName","Last Name":"lastName",Company:"company","Address Line 1":"addressLine1","Address Line 2":"addressLine2","Phone Number":"phoneNumber","Contact Name":"contactName","Contact E-mail":"contactEmail",City:"city",State:"state","ZIP Code":"zipCode"};document.querySelectorAll('input[type="text"]').forEach(e=>{var t=e.previousElementSibling,t=t?.querySelector("div")?.textContent||t?.textContent;t&&!t.includes("ASIN")&&(t=t.replace(/\s*Optional\s*$/,"").trim(),t=o[t])&&(n[t]=e.value||"")});var e=document.querySelector(".dropdown-header span")?.textContent,e=(n.country=e||"",document.querySelector(".issue-card.selected"));e&&(e.classList.contains("stolen-artwork-card")?n.selectedIssueCard="Stolen Artwork":e.classList.contains("copied-design-card")?n.selectedIssueCard="Copied Design":e.classList.contains("copied-listing-card")&&(n.selectedIssueCard="Copied Listing")),console.log(),chrome.storage.local.set({confirmUserSettings:n},()=>{chrome.runtime.lastError?console.error():chrome.storage.local.get(["confirmUserSettings"],e=>{console.log()})})}function Qe(){chrome.storage.local.get(["confirmUserSettings"],e=>{if(console.log(),e.confirmUserSettings){var t,e=e.confirmUserSettings;Object.keys(S).forEach(e=>{S[e]=!1});const i={firstName:"First Name",lastName:"Last Name",company:"Company",addressLine1:"Address Line 1",addressLine2:"Address Line 2",phoneNumber:"Phone Number",contactName:"Contact Name",contactEmail:"Contact E-mail",city:"City",state:"State",zipCode:"ZIP Code"};Object.entries(e).forEach(([e,t])=>{if("country"!==e&&"selectedIssueCard"!==e){const o=i[e];var n;o&&(n=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>{e=e.previousElementSibling;return(e?.querySelector("div")?.textContent||e?.textContent)?.replace(/\s*Optional\s*$/,"").trim()===o}))&&(n.value=t,Ye[e])&&(S[e]="phoneNumber"===e?He(t):"contactEmail"===e?We(t):0<t.length)}}),e.country&&"Country/Region"!==e.country&&(t=document.querySelector(".dropdown-header span"))&&(t.textContent=e.country,S.country=!0),e.selectedIssueCard?(t={"Stolen Artwork":".stolen-artwork-card","Copied Design":".copied-design-card","Copied Listing":".copied-listing-card"}[e.selectedIssueCard])&&(t=document.querySelector(t))&&t.click():(document.querySelectorAll(".issue-card").forEach(e=>{e.classList.remove("selected"),e.style.background="#FFFFFF",e.style.border="1.5px solid #E2E8F0";var t=e.querySelector("div > div:last-child > div:first-child"),n=e.querySelector("div > div:last-child > div:last-child"),t=(t&&(t.style.color="#606F95"),n&&(n.style.color="#606F95"),e.querySelector("div > div:first-child > img:last-child")),n=(t&&(t.style.filter="brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"),e.querySelector(".card-icon"));n&&n.dataset.normalIcon&&(n.src=chrome.runtime.getURL(n.dataset.normalIcon))}),S.cardSelected=!1,T()),st(e)}})}document.querySelectorAll(".issue-card").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".issue-card").forEach(e=>{e.classList.remove("selected"),e.style.background="#FFFFFF",e.style.border="1.5px solid #E2E8F0";var t=e.querySelector("div > div:last-child > div:first-child"),n=e.querySelector("div > div:last-child > div:last-child"),t=(t&&(t.style.color="#606F95"),n&&(n.style.color="#606F95"),e.querySelector("div > div:first-child > img:last-child")),n=(t&&(t.style.filter="brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"),e.querySelector(".card-icon"));n&&n.dataset.normalIcon&&(n.src=chrome.runtime.getURL(n.dataset.normalIcon))}),n.classList.add("selected"),n.style.background="#FFFFFF",n.style.border="1.5px solid #470CED";var e=n.querySelector("div > div:last-child > div:first-child"),t=n.querySelector("div > div:last-child > div:last-child"),e=(e&&(e.style.color="#470CED"),t&&(t.style.color="#470CED"),n.querySelector("div > div:first-child > img:last-child")),t=(e&&(e.style.filter="none"),n.querySelector(".card-icon"));t&&t.dataset.activeIcon&&(t.src=chrome.runtime.getURL(t.dataset.activeIcon)),S.cardSelected=!0,T(),Xe()})}),document.querySelectorAll('input[type="text"]').forEach(t=>{var e=t.previousElementSibling,e=e?.querySelector("div")?.textContent||e?.textContent;e&&!e.includes("ASIN")&&["input","change","blur"].forEach(e=>{t.addEventListener(e,()=>{Xe()})})}),(r=document.querySelector(".dropdown-header"))&&(r=r.querySelector("span"),new MutationObserver(()=>{Xe()}).observe(r,{childList:!0,characterData:!0,subtree:!0})),document.querySelectorAll(".issue-card").forEach(e=>{e.addEventListener("click",()=>{setTimeout(()=>{Xe()},0)})}),Qe();const et=Fe;function T(){var e=["cardSelected","firstName","lastName","addressLine1","country","city","zipCode","phoneNumber","contactName","contactEmail"].every(e=>S[e]);k.disabled=!e,e?(k.style.background="#470CED",k.style.opacity="1",k.style.cursor="pointer",k.style.pointerEvents="auto",k.style.color="white",(e=k.querySelector("img"))&&(e.style.filter="brightness(0) invert(1)",e.style.opacity="1")):(k.style.background="#CFD4D4",k.style.opacity="1",k.style.cursor="not-allowed",k.style.pointerEvents="none",k.style.color="rgba(0, 0, 0, 0.5)",(e=k.querySelector("img"))&&(e.style.filter="brightness(0)",e.style.opacity="0.5"))}function Qe(){chrome.storage.local.get(["confirmUserSettings"],e=>{if(e.confirmUserSettings){const o=e.confirmUserSettings;Object.keys(S).forEach(e=>{"cardSelected"!==e&&(S[e]=!1)}),Object.entries(Ye).forEach(([e,t])=>{var n=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>e.previousElementSibling?.textContent.includes(t));n&&o[e]&&(n.value=o[e],n=o[e].trim(),S[e]="phoneNumber"===e?He(n):"contactEmail"===e?We(n):0<n.length)}),o.country&&"Country/Region"!==o.country&&(e=document.querySelector(".dropdown-header span"))&&(e.textContent=o.country,S.country=!0),["company","addressLine2","state"].forEach(t=>{var e=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>e.previousElementSibling?.textContent.includes(t.replace(/([A-Z])/g," $1").trim()));e&&o[t]&&(e.value=o[t])}),setTimeout(()=>{T()},0)}})}function tt(e){e.disabled&&(e.style.background="#CFD4D4",e.style.opacity="1",e.style.cursor="not-allowed",e.style.pointerEvents="none",e.style.color="rgba(0, 0, 0, 0.5)",e=e.querySelector("img"))&&(e.style.filter="brightness(0)",e.style.opacity="0.5")}Fe=function(){var e;et(),e={reportedAsins:Array.from(A),asinMarketplaces:Object.fromEntries(F),productTitles:Object.fromEntries(Le),productBSRs:Object.fromEntries(N),productPublishDates:Object.fromEntries(Te)},chrome.storage.local.set({snapHammerAsins:e},()=>{chrome.runtime.lastError?console.error():console.log()})},chrome.storage.local.get(["snapHammerAsins"],e=>{if(e.snapHammerAsins){e=e.snapHammerAsins;A.clear(),F.clear(),Le.clear(),N.clear(),Te.clear(),e.reportedAsins.forEach(e=>A.add(e)),Object.entries(e.asinMarketplaces).forEach(([e,t])=>F.set(e,t)),Object.entries(e.productTitles).forEach(([e,t])=>Le.set(e,t)),Object.entries(e.productBSRs).forEach(([e,t])=>N.set(e,t)),Object.entries(e.productPublishDates).forEach(([e,t])=>Te.set(e,t));const t=L();e=Array.from(A).filter(e=>F.get(e)===t).length;c.textContent=e,c.style.backgroundColor=0===e?"#FA583A":"#01BB87",ne.textContent=e+"/50",Oe(),console.log()}}),Object.entries(Ye).forEach(([t,n])=>{const o=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>e.previousElementSibling?.textContent.includes(n));o&&(o.addEventListener("input",e=>{e=e.target.value.trim();S[t]="phoneNumber"===t?He(e):"contactEmail"===t?We(e):0<e.length,T(),Xe()}),o.addEventListener("blur",()=>{var e=o.value.trim();S[t]="phoneNumber"===t?He(e):"contactEmail"===t?We(e):0<e.length,T()}))});const nt=document.createElement("div");nt.id="asin-fetching-loader",nt.style.cssText=`
  position: absolute;
  right: 12px;
  top: calc(50% + 6.5px);
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 1.5px solid rgba(96, 111, 149, 0.1);
  border-radius: 50%;
  border-left-color: #470CED;
  animation: spin 1s linear infinite;
  pointer-events: none;
  display: none;
  box-sizing: border-box;
`,document.querySelector("#spin-keyframes")||((l=document.createElement("style")).id="spin-keyframes",l.textContent=`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(l));d=w.parentElement;d&&(d.style.position="relative",d.appendChild(nt));let ot="";function Se(){M.style.display="none",m.style.display="none",ve.style.display="none",z.style.display="none",document.body.style.overflow="",q&&(q.value="",I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5")}function it(){var e=function(){const n={};document.querySelectorAll('input[type="text"]').forEach(e=>{var t=e.previousElementSibling;if(t){t=t.querySelector("div")?.textContent||t.textContent;if(t&&!t.includes("ASIN"))switch(t.replace(/\s*Optional\s*$/,"").trim()){case"First Name":n.firstName=e.value;break;case"Last Name":n.lastName=e.value;break;case"Company":n.company=e.value;break;case"Address Line 1":n.addressLine1=e.value;break;case"Address Line 2":n.addressLine2=e.value;break;case"Phone Number":n.phoneNumber=e.value;break;case"Contact Name":n.contactName=e.value;break;case"Contact E-mail":n.contactEmail=e.value;break;case"City":n.city=e.value;break;case"State":n.state=e.value;break;case"ZIP Code":n.zipCode=e.value}}});var e=document.querySelector(".dropdown-header span")?.textContent;return n.country=e||"",(e=document.querySelector(".issue-card.selected"))&&(e.classList.contains("stolen-artwork-card")?n.selectedIssueCard="Stolen Artwork":e.classList.contains("copied-design-card")?n.selectedIssueCard="Copied Design":e.classList.contains("copied-listing-card")&&(n.selectedIssueCard="Copied Listing")),n}();chrome.storage.local.set({confirmUserSettings:e},()=>{chrome.runtime.lastError&&console.error()})}function Qe(){chrome.storage.local.get(["confirmUserSettings"],e=>{if(e.confirmUserSettings){const o=e.confirmUserSettings;document.querySelectorAll('input[type="text"]').forEach(t=>{var n=t.previousElementSibling;if(n){n=n.querySelector("div")?.textContent||n.textContent;if(n&&!n.includes("ASIN")){let e="";switch(n.replace(/\s*Optional\s*$/,"").trim()){case"First Name":e=o.firstName;break;case"Last Name":e=o.lastName;break;case"Company":e=o.company;break;case"Address Line 1":e=o.addressLine1;break;case"Address Line 2":e=o.addressLine2;break;case"Phone Number":e=o.phoneNumber;break;case"Contact Name":e=o.contactName;break;case"Contact E-mail":e=o.contactEmail;break;case"City":e=o.city;break;case"State":e=o.state;break;case"ZIP Code":e=o.zipCode}t.value=e||""}}}),o.country&&(e=document.querySelector(".dropdown-header span"))&&(e.textContent=o.country),o.selectedIssueCard?(e={"Stolen Artwork":".stolen-artwork-card","Copied Design":".copied-design-card","Copied Listing":".copied-listing-card"}[o.selectedIssueCard])&&(e=document.querySelector(e))&&e.click():(document.querySelectorAll(".issue-card").forEach(e=>{e.classList.remove("selected"),e.style.background="#FFFFFF",e.style.border="1.5px solid #E2E8F0";var t=e.querySelector("div > div:last-child > div:first-child"),n=e.querySelector("div > div:last-child > div:last-child"),t=(t&&(t.style.color="#606F95"),n&&(n.style.color="#606F95"),e.querySelector("div > div:first-child > img:last-child")),n=(t&&(t.style.filter="brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"),e.querySelector(".card-icon"));n&&n.dataset.normalIcon&&(n.src=chrome.runtime.getURL(n.dataset.normalIcon))}),S.cardSelected=!1,T()),st(o)}})}function st(e){Object.keys(S).forEach(e=>{S[e]=!1}),e.firstName&&(S.firstName=!0),e.lastName&&(S.lastName=!0),e.addressLine1&&(S.addressLine1=!0),e.city&&(S.city=!0),e.zipCode&&(S.zipCode=!0),e.phoneNumber&&(S.phoneNumber=He(e.phoneNumber)),e.contactName&&(S.contactName=!0),e.contactEmail&&(S.contactEmail=We(e.contactEmail)),e.country&&"Country/Region"!==e.country&&(S.country=!0),e.selectedIssueCard&&(S.cardSelected=!0),setTimeout(()=>{T(),tt(k)},0)}w.addEventListener("input",e=>{const c=e.target.value.trim();S.asin=10===c.length;var e=document.querySelector(".issue-card.selected");e&&e.querySelector("div > div:last-child > div:first-child")?.textContent&&Xe(),S.asin&&(e=Ne.US,ot=c,w.disabled=!0,w.style.backgroundColor="#F7F8FA",w.style.cursor="not-allowed",nt.style.display="block",w.style.paddingRight="36px",fetch(`https://www.${e}/dp/`+c).then(async e=>{if(!e.ok)throw new Error;e=await e.text(),e=(new DOMParser).parseFromString(e,"text/html");let n="N/A";console.log();var t=e.querySelector("#titleBlockLeftSection");if(console.log(),t&&(t=t.querySelector("a#bylineInfo"),console.log(),t)&&(n=(t.textContent.includes("Brand:")?t.textContent.split("Brand:")[1]:t.textContent).trim(),console.log()),"N/A"===n&&(t=e.querySelector("#bylineInfo"),console.log(),t)&&(o=t.querySelector("a"),console.log(),o?(n=o.textContent.trim(),console.log()):t.textContent&&(n=t.textContent.trim(),console.log())),"N/A"===n){var o=e.querySelector('a[href*="field-brandtextbin"]');if(console.log(),o&&o.href)try{var i=new URL(o.href).searchParams.get("field-brandtextbin");i&&(n=decodeURIComponent(i).replace(/\+/g," "),console.log())}catch(e){console.error()}}if("N/A"===n){console.log();for(const l of Array.from(e.querySelectorAll("*")))if(l.textContent&&l.textContent.includes("Brand:")){n=l.textContent.split("Brand:")[1].trim(),console.log(),console.log();break}}"N/A"===n&&(console.log(),t=e.querySelector("#productDetails_detailBullets_sections1"))&&t.querySelectorAll("tr").forEach(e=>{var t=e.querySelector("th");t&&t.textContent.includes("Brand")&&(t=e.querySelector("td"))&&(n=t.textContent.trim(),console.log())}),"N/A"!==n&&(n=n.replace(/^Visit the |\sStore$/g,"").replace(/Brand:\s*/i,"").replace(/\s+/g," ").trim(),console.log()),console.log();let s="N/A";o=e.querySelector("#detailBullets_feature_div");if(o)for(const d of o.querySelectorAll("li")){var r=d.textContent.trim();if(r.includes("Date First Available")){r=r.split(":")[1]?.trim();if(r)try{var a=new Date(r);isNaN(a.getTime())||(s=a.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))}catch(e){console.error()}break}}i={asin:c,brand:n,date:s};console.log(),"N/A"===n&&e.documentElement.innerHTML.includes("Brand")&&(console.log(),t=e.documentElement.textContent.match(/Brand:?\s*([^"\n\r]+)/))&&t[1]&&(n=t[1].trim().replace(/^Visit the |\sStore$/g,"").replace(/Brand:\s*/i,"").replace(/\s+/g," ").trim(),console.log(),i.brand=n);try{chrome.storage.local.set({originalAsinData:JSON.stringify(i)},()=>{chrome.runtime.lastError?console.error():Xe()})}catch(e){console.error(),chrome.storage.local.set({originalAsinData:JSON.stringify({asin:c,brand:"N/A",date:"N/A"})}),Xe()}}).catch(e=>{console.error(),chrome.storage.local.set({originalAsinData:JSON.stringify({asin:c,brand:"N/A",date:"N/A"})}),Xe()}).finally(()=>{w.disabled=!1,w.style.backgroundColor="white",w.style.cursor="text",nt.style.display="none",w.style.paddingRight="12px",Xe()})),T()}),w.addEventListener("change",()=>{var e=w.value.trim();S.asin=10===e.length,S.asin&&e!==ot&&Re(e).then(e=>{e.isValid&&console.log()}).catch(e=>{console.error()}),ot=e,setTimeout(()=>{T(),tt(k)},0)}),w.addEventListener("blur",()=>{var e=w.value.trim();S.asin=10===e.length,S.asin&&e!==ot&&Re(e).then(e=>{e.isValid&&console.log()}).catch(e=>{console.error()}),ot=e,T()}),chrome.storage.local.get(["confirmUserSettings"],e=>{var t;e.confirmUserSettings&&(e=e.confirmUserSettings,console.log(),Object.entries(e).forEach(([e,t])=>{if("country"!==e&&"selectedIssueCard"!==e){const o=fieldMapping[e];var n;o&&(n=Array.from(document.querySelectorAll('input[type="text"]')).find(e=>{return(e.previousElementSibling?.querySelector("div")?.textContent||e.previousElementSibling?.textContent)?.includes(o)}))&&(n.value=t,Ye[e])&&(S[e]="phoneNumber"===e?He(t):"contactEmail"===e?We(t):0<t.length)}}),e.country&&"Country/Region"!==e.country&&(t=document.querySelector(".dropdown-header span"))&&(t.textContent=e.country,S.country=!0),e.selectedIssueCard?(t={"Stolen Artwork":".stolen-artwork-card","Copied Design":".copied-design-card","Copied Listing":".copied-listing-card"}[e.selectedIssueCard])&&(t=document.querySelector(t))&&t.click():(document.querySelectorAll(".issue-card").forEach(e=>{e.classList.remove("selected"),e.style.background="#FFFFFF",e.style.border="1.5px solid #E2E8F0";var t=e.querySelector("div > div:last-child > div:first-child"),n=e.querySelector("div > div:last-child > div:last-child"),t=(t&&(t.style.color="#606F95"),n&&(n.style.color="#606F95"),e.querySelector("div > div:first-child > img:last-child")),n=(t&&(t.style.filter="brightness(0) saturate(100%) invert(93%) sepia(5%) saturate(851%) hue-rotate(178deg) brightness(83%) contrast(90%)"),e.querySelector(".card-icon"));n&&n.dataset.normalIcon&&(n.src=chrome.runtime.getURL(n.dataset.normalIcon))}),S.cardSelected=!1,T()),st(e))}),document.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("input",it),e.addEventListener("change",it),e.addEventListener("blur",it)}),(v=document.querySelector(".dropdown-header"))&&(new MutationObserver(it).observe(v.querySelector("span"),{childList:!0,characterData:!0,subtree:!0}),document.querySelectorAll(".dropdown-item").forEach(e=>{e.addEventListener("click",()=>{setTimeout(it,0)})})),document.querySelectorAll(".issue-card").forEach(e=>{e.addEventListener("click",()=>{setTimeout(it,0)})});const z=document.createElement("div");z.className="validation-section",z.style.cssText=`
  display: none;
  flex-direction: column;
  width: 994px;
  height: 985px;
  background: #F7F8FA;
  border-radius: 28px;
  padding: 40px;
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
`;x=document.createElement("div"),x.className="validation-top",x.style.cssText=`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  height: 36px;
`,f=document.createElement("div");f.className="validation-left";const rt=document.createElement("button");rt.style.cssText=`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 122px;
  height: 36px;
  background: #470CED;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #F8FAFC;
  cursor: pointer;
`;o=document.createElement("img"),o.src=chrome.runtime.getURL("assets/back-ic.svg"),o.style.cssText=`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`,a=document.createElement("span"),a.textContent="Back",a.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 14px;
  color: #F8FAFC;
  line-height: 24px;
  display: flex;
  align-items: center;
`,rt.appendChild(o),rt.appendChild(a),f.appendChild(rt),rt.addEventListener("mouseenter",()=>{rt.style.background="#3D0BCE"}),rt.addEventListener("mouseleave",()=>{rt.style.background="#470CED"}),i=document.createElement("div");i.className="validation-right",i.style.cssText=`
  display: flex;
  align-items: center;
  gap: 24px;
`;const at=document.createElement("div"),lt=(at.style.cssText=`
  display: flex;
  align-items: center;
  gap: 16px;
`,[{number:"01",text:"Add Infringing ASINs",state:"completed"},{number:"02",text:"Validate your ASIN",state:"active"},{number:"03",text:"Confirm & Report",state:"inactive"}]);lt.forEach((e,t)=>{var n=document.createElement("div"),o=(n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
  `,"completed"===e.state?((o=document.createElement("img")).src=chrome.runtime.getURL("assets/loaded.svg"),o.style.cssText=`
      width: 24px;
      height: 24px;
    `,n.appendChild(o)):((o=document.createElement("div")).style.cssText=`
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Amazon Ember';
      font-weight: 500;
      font-size: 12px;
      background: ${"active"===e.state?"#470CED":"#E9EBF2"};
      color: ${"active"===e.state?"white":"#606F95"};
    `,o.textContent=e.number,n.appendChild(o)),document.createElement("span"));o.style.cssText=`
    font-family: 'Amazon Ember';
    font-weight: 500;
    font-size: 14px;
    color: ${"completed"===e.state?"#0D0B26":"active"===e.state?"#470CED":"#606F95"};
  `,o.textContent=e.text,n.appendChild(o),t<lt.length-1&&((o=document.createElement("div")).style.cssText=`
      width: 24px;
      height: 1px;
      background: ${"completed"===e.state?"#470CED":"#E9EBF2"};
      margin: 0 4px;
    `,n.appendChild(o)),at.appendChild(n)});e=document.createElement("button"),e.style.cssText=`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,n=document.createElement("img");n.src=chrome.runtime.getURL("assets/close-ham-popup-ic.svg"),n.style.cssText=`
  width: 24px;
  height: 24px;
`,e.appendChild(n),i.appendChild(at),i.appendChild(e),x.appendChild(f),x.appendChild(i);const D=document.createElement("div");D.style.cssText=`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;b=document.createElement("div"),b.textContent="ASIN VALIDATION",b.style.cssText=`
  padding: 4px 12px;
  background: rgba(71, 12, 237, 0.1);
  border-radius: 999px;
  font-family: 'Amazon Ember';
  font-size: 12px;
  font-weight: 500;
  color: #470CED;
  margin-bottom: 16px;
`,p=document.createElement("h2"),p.textContent="What is your ASIN?",p.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 24px;
  color: #1F2937;
  margin: 0 0 24px 0;
`,t=document.createElement("div");t.style.cssText=`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
`;const q=document.createElement("input"),I=(q.type="text",q.placeholder="Enter your ASIN",q.id="originalasininput",q.style.cssText=`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #DCE0E5;
  border-radius: 4px;
  font-family: 'Amazon Ember';
  font-size: 14px;
  color: #1F2937;
  transition: border-color 0.2s ease;
  outline: none;
  box-shadow: none;
`,q.addEventListener("focus",()=>{q.style.borderColor="#470CED"}),q.addEventListener("blur",()=>{q.style.borderColor="#DCE0E5"}),t.appendChild(q),document.createElement("button")),R=(I.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  height: 48px;
  background: #CFD4D4;
  border: none;
  border-radius: 6px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  cursor: not-allowed;
  transition: all 0.2s ease;
  opacity: 1;
  pointer-events: none;
`,document.createElement("img")),dt=(R.src=chrome.runtime.getURL("assets/apply.svg"),R.style.cssText=`
  width: 20px;
  height: 20px;
  filter: brightness(0);
  opacity: 0.5;
`,I.appendChild(R),I.appendChild(document.createTextNode("Validate your ASIN")),q.addEventListener("input",e=>{10===e.target.value.trim().length?(I.style.background="#470CED",I.style.opacity="1",I.style.cursor="pointer",I.style.pointerEvents="auto",I.style.color="white",I.disabled=!1,I.style.filter="none",R.style.filter="brightness(0) invert(1)",R.style.opacity="1",I.addEventListener("mouseenter",()=>{I.style.background="#3D0BCE"}),I.addEventListener("mouseleave",()=>{I.style.background="#470CED"})):(I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5")}),D.appendChild(b),D.appendChild(p),D.appendChild(t),D.appendChild(I),z.appendChild(x),z.appendChild(D),document.body.appendChild(z),C.addEventListener("click",()=>{C.disabled||(m.style.display="none",z.style.display="flex")}),rt.addEventListener("click",()=>{z.style.display="none",m.style.display="flex"}),e.addEventListener("click",Se),rt.replaceWith(rt.cloneNode(!0)),document.querySelector('.validation-section button:has(img[src*="back-ic.svg"])').addEventListener("click",()=>{z.style.display="none",m.style.display="flex"}),e.replaceWith(e.cloneNode(!0)),document.querySelector('.validation-section button:has(img[src*="close-ham-popup-ic.svg"])').addEventListener("click",Se),document.createElement("div"));dt.style.cssText=`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F7F8FA;
  z-index: 2;
  padding: 40px;
  border-radius: 28px;
`;r=document.createElement("img"),r.src=chrome.runtime.getURL("assets/vali-fetch-error-img.svg"),r.style.cssText=`
  width: 80px;
  height: 91px;
  margin-bottom: 24px;
`,l=document.createElement("h2"),l.textContent="Validation Unsuccessful",l.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: #606F95;
  margin: 0 0 4px 0;
  text-align: center;
`,d=document.createElement("p");d.textContent="One or more ASINs were listed before your product's publication date, You can only report listings that copied your original work.",d.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #606F95;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 450px;
`;const ct=document.createElement("button"),pt=(ct.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  height: 42px;
  background: #470CED;
  border: none;
  border-radius: 8px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 403px;
`,ct.textContent="Done",ct.addEventListener("mouseenter",()=>{ct.style.background="#2A00A0"}),ct.addEventListener("mouseleave",()=>{ct.style.background="#470CED"}),ct.addEventListener("click",()=>{dt.style.display="none",D.style.display="flex",q.value="",I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5"}),dt.appendChild(r),dt.appendChild(l),dt.appendChild(d),dt.appendChild(ct),z.appendChild(dt),document.createElement("div"));pt.style.cssText=`
  position: absolute;
  inset: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1;
  border-radius: 28px;
`;v=document.createElement("div");v.style.cssText=`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(96, 111, 149, 0.1);
  border-radius: 50%;
  border-left-color: #470CED;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
`;const mt=document.createElement("div"),ut=(mt.textContent="Fetching ASIN's data...",mt.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 16px;
  color: #606F95;
`,pt.appendChild(v),pt.appendChild(mt),z.appendChild(pt),I.addEventListener("click",async()=>{const t=q.value.trim();if(10===t.length){mt.textContent="Fetching ASIN's data...",pt.style.display="flex",D.style.opacity="0.5",D.style.pointerEvents="none";try{const d=L();if(console.log(),Array.from(A).some(e=>e===t&&F.get(e)===d))D.style.display="none",ht.style.display="flex";else{var n=await async function(n,o=null){try{var i=await new Promise(t=>{chrome.storage.local.get(["originalAsinData"],e=>{t(e)})});if(i.originalAsinData){var s=JSON.parse(i.originalAsinData);if(s.asin===n&&"N/A"!==s.brand)return console.log(),{brand:s.brand,date:s.date,isValid:!0}}o=o||L();var r=Ne[o];if(!r)return{brand:"N/A",date:"N/A",isValid:!1};console.log();var a=await fetch(`https://www.${r}/dp/`+n);if(!a.ok)return console.log(),{brand:"N/A",date:"N/A",isValid:!1};var l=await a.text(),d=(new DOMParser).parseFromString(l,"text/html");let e="N/A";var c,p,m,u=d.querySelector("#titleBlockLeftSection");if("N/A"===(e=u&&(c=u.querySelector("a#bylineInfo"))?(c.textContent.includes("Brand:")?c.textContent.split("Brand:")[1]:c.textContent).trim():e)&&(p=d.querySelector("#bylineInfo"))&&((m=p.querySelector("a"))?e=m.textContent.trim():p.textContent&&(e=p.textContent.trim())),"N/A"===e){var y=d.querySelector('a[href*="field-brandtextbin"]');if(y&&y.href)try{var h=new URL(y.href).searchParams.get("field-brandtextbin");h&&(e=decodeURIComponent(h).replace(/\+/g," "))}catch(e){console.error()}}"N/A"!==e&&(e=e.replace(/^Visit the |\sStore$/g,"").replace(/Brand:\s*/i,"").replace(/\s+/g," ").trim());let t="N/A";var g=d.querySelector("#detailBullets_feature_div");if(g)for(const S of g.querySelectorAll("li")){var x=S.textContent.trim();if(x.includes("Date First Available")){var f,b,v,E,C,w,k,A=x.split(":")[1]?.trim();if(A)try{let e;e=/[A-Za-z]+ \d{1,2},? \d{4}/.test(A)?new Date(A):/\d{1,2} [A-Za-z]+ \d{4}/.test(A)?([f,b,v]=A.match(/(\d{1,2}) ([A-Za-z]+) (\d{4})/).slice(1),new Date(b+` ${f}, `+v)):/\d{1,2} [A-Za-z]+\. \d{4}/.test(A)?([E,C,w]=A.match(/(\d{1,2}) ([A-Za-z]+)\. (\d{4})/).slice(1),k=C.replace(".",""),new Date(k+` ${E}, `+w)):new Date(A),isNaN(e.getTime())||(t=e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))}catch(e){console.error()}break}}return{brand:e,date:t,isValid:!0,marketplace:o}}catch(e){return console.error(),{brand:"N/A",date:"N/A",isValid:!1}}}(t,d);if(console.log(),mt.textContent="Validating ASIN's data...",n.date&&"N/A"!==n.date){var o=Array.from(A).filter(e=>F.get(e)===d),i=(console.log(`Found ${o.length} ASINs in ${d} marketplace`),[]);for(const c of o){var s=await Re(c,d);i.push({asin:c,date:s.published}),await new Promise(e=>setTimeout(e,500))}var r=l(n.date);console.log();let e=!1;for(const p of i)if("N/A"!==p.date){var a=l(p.date);if(console.log(),a<r){e=!0,console.log();break}}function l(e){if(console.log(),!e||"N/A"===e)return new Date(0);try{return new Date(e)}catch(e){return console.error(),new Date(0)}}e?(D.style.display="none",dt.style.display="flex"):chrome.storage.local.set({originalAsinData:JSON.stringify({asin:t,brand:n.brand,date:n.date,marketplace:d})},()=>{z.style.display="none",m.style.display="none",ve.style.display="flex",document.body.style.overflow="hidden",Qe(),setTimeout(()=>{T(),tt(k)},100)})}else D.style.display="none",ut.style.display="flex"}}catch(e){console.error(),D.style.display="none",ut.style.display="flex"}finally{pt.style.display="none",D.style.opacity="1",D.style.pointerEvents="auto"}}}),document.createElement("div"));ut.style.cssText=`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F7F8FA;
  z-index: 2;
  padding: 40px;
  border-radius: 28px;
`;o=document.createElement("img"),o.src=chrome.runtime.getURL("assets/vali-fetch-error-img.svg"),o.style.cssText=`
  width: 80px;
  height: 91px;
  margin-bottom: 24px;
`,a=document.createElement("h2"),a.textContent="Unable to fetch your ASIN's data",a.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: #606F95;
  margin: 0 0 4px 0;
  text-align: center;
`,n=document.createElement("p");n.innerHTML="Product information unavailable. Ensure the site is in English<br>and the ASIN exists in the marketplace.",n.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #606F95;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 450px;
`;const yt=document.createElement("button"),ht=(yt.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  height: 42px;
  background: #470CED;
  border: none;
  border-radius: 8px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 403px;
`,yt.textContent="Try again",yt.addEventListener("mouseenter",()=>{yt.style.background="#2A00A0"}),yt.addEventListener("mouseleave",()=>{yt.style.background="#470CED"}),yt.addEventListener("click",()=>{ut.style.display="none",D.style.display="flex",q.value="",I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5"}),ut.appendChild(o),ut.appendChild(a),ut.appendChild(n),ut.appendChild(yt),z.appendChild(ut),document.createElement("div"));ht.style.cssText=`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F7F8FA;
  z-index: 2;
  padding: 40px;
  border-radius: 28px;
`;f=document.createElement("img"),f.src=chrome.runtime.getURL("assets/vali-fetch-error-img.svg"),f.style.cssText=`
  width: 80px;
  height: 91px;
  margin-bottom: 24px;
`,i=document.createElement("h2"),i.textContent="Original ASIN Conflict",i.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: #606F95;
  margin: 0 0 4px 0;
  text-align: center;
`,b=document.createElement("p");b.textContent="Your ASIN cannot be listed as both the original and reported listing.",b.style.cssText=`
  font-family: 'Amazon Ember';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #606F95;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 450px;
`;const gt=document.createElement("button");gt.style.cssText=`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  height: 42px;
  background: #470CED;
  border: none;
  border-radius: 8px;
  font-family: 'Amazon Ember';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 403px;
`,gt.textContent="Go back",gt.addEventListener("mouseenter",()=>{gt.style.background="#2A00A0"}),gt.addEventListener("mouseleave",()=>{gt.style.background="#470CED"}),gt.addEventListener("click",()=>{ht.style.display="none",D.style.display="flex",q.value="",I.style.background="#CFD4D4",I.style.opacity="1",I.style.cursor="not-allowed",I.style.pointerEvents="none",I.style.color="rgba(0, 0, 0, 0.5)",I.disabled=!0,R.style.filter="brightness(0)",R.style.opacity="0.5"}),ht.appendChild(f),ht.appendChild(i),ht.appendChild(b),ht.appendChild(gt),z.appendChild(ht)})();
});