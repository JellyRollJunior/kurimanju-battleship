(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbody {\n  --body-background-color: #538bab;\n  --menu-buttons-color: #f0fdfa;\n  --border-color: #678a96;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  height: 100vh;\n  background-color: var(--body-background-color);\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-top: 45px;\n  padding: 35px 24px 40px 24px;\n  border-radius: 50px;\n  border: 5px solid #678a96;\n  background: linear-gradient(#94d4ee, #c4e8f8);\n}\n\nh3 {\n  margin-top: 12px;\n}\n\n.quad-content-separated {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 240px 1fr 80px 1fr 240px;\n  gap: 12px;\n\n  margin-top: 45px;\n  text-align: center;\n}\n\n.separator {\n  height: 105%;\n  width: 1px;\n  margin-top: 10px;\n  border-left: 3px solid black;\n}\n\n#rival-board {\n  margin-left: -14px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd,\nth {\n  text-align: center;\n\n  --td-size: 33px;\n  height: var(--td-size);\n  width: var(--td-size);\n  margin: 0;\n}\n\ntd.hit {\n  border: 3px solid red;\n}\n\ntd.ship {\n  border: 3px solid navy;\n}\n\ntd.miss {\n  background-color: #bebebe;\n}\n\ntd,\ntd.unhit {\n  border: 1px solid black;\n}\n\ntd.highlight {\n  border: 3px solid red;\n}\n\n.menu {\n  --button-width: 250px;\n  --display-width: 460px;\n  display: grid;\n  grid-template-columns: var(--button-width) var(--display-width) var(--button-width);\n  gap: 55px;\n\n  margin-top: 45px;\n}\n\n.game-state-display {\n  --display-height: 50px;\n\n  flex: 1;\n  text-align: center;\n  line-height: var(--display-height);\n  font-weight: bold;\n  font-size: 1.1rem;\n  height: var(--display-height);\n  width: var(--display-width);\n  background-color: var(--menu-buttons-color);\n  border: 2px solid var(--border-color);\n  border-radius: 25px;\n}\n\nbutton {\n  background-color: var(--menu-buttons-color);\n  border: 2px solid var(--border-color);\n  border-radius: 25px;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  margin-top: 32px;\n  background-color: #678a96;\n}\n\n#cheat {\n  background: none;\n\tborder: none;\n\tpadding: 0;\n\tcursor: pointer;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,6BAA6B;EAC7B,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,gBAAgB;EAChB,4BAA4B;EAC5B,mBAAmB;EACnB,yBAAyB;EACzB,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,+CAA+C;EAC/C,SAAS;;EAET,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;;EAElB,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,aAAa;EACb,mFAAmF;EACnF,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;;EAEtB,OAAO;EACP,kBAAkB;EAClB,kCAAkC;EAClC,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;EAC7B,2BAA2B;EAC3B,2CAA2C;EAC3C,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;EAC3C,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;CACjB,YAAY;CACZ,UAAU;CACV,eAAe;AAChB",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbody {\n  --body-background-color: #538bab;\n  --menu-buttons-color: #f0fdfa;\n  --border-color: #678a96;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  height: 100vh;\n  background-color: var(--body-background-color);\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-top: 45px;\n  padding: 35px 24px 40px 24px;\n  border-radius: 50px;\n  border: 5px solid #678a96;\n  background: linear-gradient(#94d4ee, #c4e8f8);\n}\n\nh3 {\n  margin-top: 12px;\n}\n\n.quad-content-separated {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 240px 1fr 80px 1fr 240px;\n  gap: 12px;\n\n  margin-top: 45px;\n  text-align: center;\n}\n\n.separator {\n  height: 105%;\n  width: 1px;\n  margin-top: 10px;\n  border-left: 3px solid black;\n}\n\n#rival-board {\n  margin-left: -14px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd,\nth {\n  text-align: center;\n\n  --td-size: 33px;\n  height: var(--td-size);\n  width: var(--td-size);\n  margin: 0;\n}\n\ntd.hit {\n  border: 3px solid red;\n}\n\ntd.ship {\n  border: 3px solid navy;\n}\n\ntd.miss {\n  background-color: #bebebe;\n}\n\ntd,\ntd.unhit {\n  border: 1px solid black;\n}\n\ntd.highlight {\n  border: 3px solid red;\n}\n\n.menu {\n  --button-width: 250px;\n  --display-width: 460px;\n  display: grid;\n  grid-template-columns: var(--button-width) var(--display-width) var(--button-width);\n  gap: 55px;\n\n  margin-top: 45px;\n}\n\n.game-state-display {\n  --display-height: 50px;\n\n  flex: 1;\n  text-align: center;\n  line-height: var(--display-height);\n  font-weight: bold;\n  font-size: 1.1rem;\n  height: var(--display-height);\n  width: var(--display-width);\n  background-color: var(--menu-buttons-color);\n  border: 2px solid var(--border-color);\n  border-radius: 25px;\n}\n\nbutton {\n  background-color: var(--menu-buttons-color);\n  border: 2px solid var(--border-color);\n  border-radius: 25px;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  margin-top: 32px;\n  background-color: #678a96;\n}\n\n#cheat {\n  background: none;\n\tborder: none;\n\tpadding: 0;\n\tcursor: pointer;\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],d=r.base?A[0]+r.base:A[0],l=a[d]||0,c="".concat(d," ").concat(l);a[d]=l+1;var p=t(c),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var A=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),A=t.n(s),d=t(56),l=t.n(d),c=t(540),p=t.n(c),u=t(113),h=t.n(u),g=t(365),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=A().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals;const E=()=>{let n=!1,e=null;return{isHit:()=>n,hit:()=>n=!0,hasShip:()=>null!=e,setShip:n=>e=n,getShip:()=>e}},b=()=>{const n=10,e=(n,e,t)=>n>=0&&n<t&&e>=0&&e<t,t=(n,e)=>!a(n,e).hasShip();let r=(()=>{const n=[];for(let e=0;e<10;e++){const e=[];for(let n=0;n<10;n++)e.push(E());n.push(e)}return n})();const o=()=>r,a=(n,e)=>r[e][n],i=(r,o,i=1,s=!0)=>{if(!((r,o,a,i=!0)=>{let s=!0;for(let A=0;A<a;A++)s=i?s&&e(r,o+A,n)&&t(r,o):s&&e(r+A,o,n)&&t(r,o);return s})(r,o,i,s))return!1;const A=((n=1)=>{let e=n;return{length:n,getHealth:()=>e,hit:()=>{e-=1},isSunk:()=>e<=0}})(i);for(let n=0;n<i;n++)s?a(r,o+n).setShip(A):a(r+n,o).setShip(A);return!0},s=()=>{const n=o();let e=!0;return n.forEach((n=>{n.forEach((n=>{n.hasShip()&&n.getShip().getHealth()>0&&(e=!1)}))})),e},A=[1,1,2,2,2,3,3,4];return{length:n,getBoard:o,getCell:a,placeShip:i,receiveHit:(t,r)=>{if(!e(t,r,n))return!1;const o=a(t,r);return o.isHit()?void 0:(o.hit(),o.hasShip()&&o.getShip().hit(),!0)},areAllSunk:s,getRandomUnhitCoordinate:()=>{for(;0==s();){let e=Math.floor(Math.random()*n),t=Math.floor(Math.random()*n);if(!a(e,t).isHit())return[e,t]}return[1,1]},useRandomShipLayout:()=>{A.forEach((e=>{for(;;){let t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*n),o=Math.random()<.5;if(i(t,r,e,o))break}}))},usePresetShipLayout:()=>{i(1,8,1,!1),i(4,5,1,!0),i(0,0,2,!0),i(5,1,2,!1),i(1,4,2,!0),i(3,7,3,!1),i(3,3,3,!1),i(8,5,4,!0)},prettyPrintBoard:()=>{console.log("Gameboard:"),console.log("====================="),r.forEach((n=>{let e="";n.forEach((n=>{n.hasShip()?n.isHit()?e+=" Ꞩ":e+=" S":n.isHit()?e+=" X":e+=" O"})),console.log(e)})),console.log("=====================")}}},B=b();B.placeShip(0,0,1,!0),B.placeShip(0,1,1,!0),B.receiveHit(0,0),B.areAllSunk();const C=(n=!0,e="Kurimanju senpai")=>({isHuman:n,board:b(),name:e}),f=n=>n.hasShip()?n.isHit()?"Ꞩ":"S":n.isHit()?"·":"",v=n=>n.hasShip()?n.isHit()?"hit":"ship":n.isHit()?"miss":"unhit",x=n=>n.hasShip()?n.isHit()?"Ꞩ":"":n.isHit()?"·":"",y=n=>n.hasShip()?n.isHit()?"hit":"unhit":n.isHit()?"miss":"unhit",S=(n,e,t,r,o,a)=>{(n=>{const e=[],t=document.createElement("tr");t.appendChild(document.createElement("th"));for(let e=0;e<n;e++){const n=document.createElement("th");n.textContent=e,t.appendChild(n)}e.push(t);for(let t=0;t<n;t++){const n=document.createElement("tr");n.dataset.row=t;const r=document.createElement("th");r.textContent=t,n.appendChild(r),e.push(n)}return e})(e.length).forEach((e=>n.appendChild(e))),e.forEach(((e,i)=>{const s=n.querySelector(`tr[data-row="${i}"]`);e.forEach(((n,e)=>{const A=((n,e,t)=>{const r=document.createElement("td");return r.textContent=n,r.dataset.row=t,r.dataset.column=e,r})(t(n),e,i);A.classList.add(r(n)),e==o&&i==a&&A.classList.add("highlight"),s.appendChild(A)}))}))},k=document.querySelector("#rival-board"),w=(n,e,t)=>{const r=document.querySelector("#challenger-board");r.textContent="",S(r,n,f,v,e,t)},q=(n,e,t)=>{k.textContent="",S(k,n,x,y,e,t)},R=n=>{document.querySelector(".game-state-display").textContent=n},H=n=>{let e="Kurimanju senpai"==n.name?`The goat ${n.name}'s turn!`:`${n.name}'s turn!`;R(e)},j=()=>{k.style.pointerEvents="none"},M=()=>{k.style.pointerEvents="auto"},L=document.querySelector("#randomize"),P=document.querySelector("#restart");(()=>{const n=((n="Challenger")=>{let e=C(!0,n),t=C(!1);const r=()=>e,o=()=>t;let a=o();const i=()=>a,s=()=>r().board.areAllSunk()||o().board.areAllSunk(),A=()=>{r().board.usePresetShipLayout(),o().board.useRandomShipLayout()};return A(),{getChallenger:r,getRival:o,getDefendingPlayer:i,playRound:(n,e)=>{const t=i().board;if(!t.receiveHit(n,e))return!1;t.getCell(n,e).hasShip()||(a=a==r()?o():r())},isGameOver:s,getWinner:()=>s()?r().board.areAllSunk()?o():r():null,restart:()=>{e=C(!0,n),t=C(!1),a=o()},useDefaultShipPlacements:A,useRandomShipPlacements:()=>{r().board.useRandomShipLayout(),o().board.useRandomShipLayout()}}})("Shisa");w(n.getChallenger().board.getBoard()),q(n.getRival().board.getBoard()),(n=>{document.querySelector("#rival-board").addEventListener("click",(async e=>{const t=e.target;if("TD"==t.tagName){const e=t.dataset.column,r=t.dataset.row;for(n.playRound(e,r),q(n.getRival().board.getBoard(),e,r);n.getDefendingPlayer()==n.getChallenger()&&0==n.getRival().isHuman;){j(),L.style.pointerEvents="none",P.style.pointerEvents="none",H(n.getRival()),await new Promise((n=>setTimeout(n,2e3)));const e=n.getChallenger().board.getRandomUnhitCoordinate();n.playRound(e[0],e[1]),w(n.getChallenger().board.getBoard(),e[0],e[1]),M(),L.style.pointerEvents="auto",P.style.pointerEvents="auto"}H(n.getChallenger()),(n=>{if(n.isGameOver()){const e=n.getWinner();console.log(`winner is ${e.name}!`),(n=>{let e="Kurimanju senpai"==n.name?`My glorious king ${n.name} is the Winner!`:`${n.name} is the Winner!`;R(e)})(e),j()}})(n)}}))})(n),(n=>{document.querySelector("#restart").addEventListener("click",(()=>{M(),n.restart(),n.useDefaultShipPlacements(),w(n.getChallenger().board.getBoard()),q(n.getRival().board.getBoard())}))})(n),(n=>{document.querySelector("#randomize").addEventListener("click",(()=>{M(),n.restart(),n.useRandomShipPlacements(),w(n.getChallenger().board.getBoard()),q(n.getRival().board.getBoard())}))})(n),(n=>{document.querySelector("#cheat").addEventListener("click",(()=>{(n=>{k.textContent="",S(k,n,f,v,void 0,void 0)})(n.getRival().board.getBoard())}))})(n)})()})();
//# sourceMappingURL=main.js.map