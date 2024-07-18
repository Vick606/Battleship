(()=>{"use strict";var n={249:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,':root {\n  --sea-blue: #1e3d59;\n  --light-blue: #a0d2eb;\n  --ship-gray: #444;\n  --hit-red: #ff595e;\n  --miss-white: #fff;\n  --accent-color: #ffc13b;\n}\n\nbody {\n  font-family: "Inter", sans-serif;\n  background-color: var(--sea-blue);\n  color: var(--light-blue);\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 1rem;\n  text-align: center;\n}\n\nh1 {\n  margin: 0;\n  color: var(--accent-color);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n.game-container {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  max-width: 1200px;\n  margin-bottom: 2rem;\n}\n\n.board-container {\n  text-align: center;\n  width: 45%; /* Adjusted as recommended */\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 1rem;\n  width: 100%;\n  aspect-ratio: 1 / 1; /* Added as recommended */\n}\n\n.cell {\n  background-color: var(--light-blue);\n  border-radius: 5px;\n  aspect-ratio: 1 / 1; /* Added as recommended */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.cell:hover {\n  transform: scale(1.1);\n}\n\n.ship {\n  background-color: var(--ship-gray);\n}\n\n.hit {\n  background-color: var(--hit-red);\n  animation: explosion 0.5s;\n}\n\n.miss {\n  background-color: var(--miss-white);\n  animation: splash 0.5s;\n}\n\n@keyframes explosion {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n\n@keyframes splash {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n\n#setup-screen, #game-screen {\n  width: 90%; \n  max-width: 1200px;  \n  margin: 0 auto;\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n#player-name {\n  margin-right: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: var(--light-blue);\n}\n\nbutton {\n  padding: 10px 20px;\n  margin: 10px;\n  cursor: pointer;\n  background-color: var(--accent-color);\n  color: var(--sea-blue);\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n\nbutton:hover {\n  transform: scale(1.05);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);\n}\n\n.game-controls {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n#turn-display {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  text-align: center;\n  color: var(--accent-color);\n}\n\n#message-box {\n  margin-top: 2rem;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.2em;\n  color: var(--accent-color);\n}\n\nfooter {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: var(--light-blue);\n  text-align: center;\n  padding: 1rem;\n  margin-top: auto;\n}\n\n@media (max-width: 768px) {\n  .game-container {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .board-container {\n    width: 100%; \n    margin-bottom: 2rem;\n  }\n\n  .cell {\n    width: 25px;\n    height: 25px;\n  }\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var m=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=a(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),c=t(659),s=t.n(c),l=t(56),u=t.n(l),d=t(540),m=t.n(d),p=t(113),f=t.n(p),g=t(249),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=m(),a()(g.A,h),g.A&&g.A.locals&&g.A.locals;const v=function(n){var e=0;return{length:n,hit:function(){e++},isSunk:function(){return e>=n}}};function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function b(n){throw new TypeError('"'+n+'" is read-only')}const x=function(){var n=Array(10).fill(null).map((function(){return Array(10).fill(null)})),e=[];return{placeShip:function(t,r,a,o){if("horizontal"===o){if(a+t.length>10)return!1;for(var i=0;i<t.length;i++)if(null!==n[r][a+i])return!1;for(var c=0;c<t.length;c++)n[r][a+c]=t}else{if(r+t.length>10)return!1;for(var s=0;s<t.length;s++)if(null!==n[r+s][a])return!1;for(var l=0;l<t.length;l++)n[r+l][a]=t}return e.push(t),!0},receiveAttack:function(e,t){return"hit"!==n[e][t]&&"miss"!==n[e][t]&&(null===n[e][t]?(n[e][t]="miss","miss"):(n[e][t].hit(),n[e][t]="hit","hit"))},allShipsSunk:function(){return e.every((function(n){return n.isSunk()}))},getBoard:function(){return n.map((function(n){return function(n){if(Array.isArray(n))return y(n)}(e=n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,e){if(n){if("string"==typeof n)return y(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var e}))},isValidMove:function(e,t){return e>=0&&e<10&&t>=0&&t<10&&"hit"!==n[e][t]&&"miss"!==n[e][t]},resetBoard:function(){Array(10).fill(null).map((function(){return Array(10).fill(null)})),b("board"),b("ships")}}},k=function(n){var e=new Set;return{type:n,makeMove:function(t){if("computer"===n){var r,a;do{r=Math.floor(10*Math.random()),a=Math.floor(10*Math.random())}while(!t.isValidMove(r,a)||e.has("".concat(r,",").concat(a)));return e.add("".concat(r,",").concat(a)),{x:r,y:a}}return{x:-1,y:-1}}}};var E,w,M,A,S,B,I;const L=(S=function(){E.resetBoard(),w.resetBoard(),[v(5),v(4),v(3),v(3),v(2)].forEach((function(n){B(E,n),B(w,n)}))},B=function(n,e){for(var t=!1;!t;){var r=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),o=Math.random()<.5?"horizontal":"vertical";n.placeShip(e,r,a,o)&&(t=!0)}},I=function(){var n=A.makeMove(E),e=n.x,t=n.y,r=E.receiveAttack(e,t);return M="player",{target:"player",x:e,y:t,result:r}},{initGame:function(){E=x(),w=x(),k("human"),A=k("computer"),M="player",S()},playTurn:function(n,e){if("player"===M){var t=w.receiveAttack(n,e);return t||(M="computer",setTimeout(I,500)),{target:"computer",result:t,x:n,y:e}}},checkGameOver:function(){return E.allShipsSunk()?"computer":!!w.allShipsSunk()&&"player"},getPlayerBoard:function(){return E.getBoard()},getComputerBoard:function(){return w.getBoard()},getCurrentPlayer:function(){return M},randomizeShips:S});var C,T,O,j,P,z,H,G,D=(C="",T=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.innerHTML="",n.forEach((function(n,r){n.forEach((function(n,a){var o=document.createElement("div");o.classList.add("cell"),t?("hit"===n&&o.classList.add("hit"),"miss"===n&&o.classList.add("miss")):("ship"===n&&o.classList.add("ship"),"hit"===n&&o.classList.add("hit"),"miss"===n&&o.classList.add("miss")),t&&o.addEventListener("click",(function(){return O(r,a)})),e.appendChild(o)}))}))},O=function(n,e){if("player"===L.getCurrentPlayer()){var t=L.playTurn(n,e);j(t.target,n,e,t.result),z(),P()}},j=function(n,e,t,r){var a=document.getElementById("".concat(n,"-board")).children[10*e+t];"hit"===r?(a.classList.add("hit"),a.innerHTML='<img src="assets/explosion.svg" alt="Hit">'):"miss"===r&&(a.classList.add("miss"),a.innerHTML='<img src="assets/water.svg" alt="Miss">')},P=function(){var n=L.checkGameOver();if(n){var e=document.getElementById("message-box");e.textContent="Game Over! ".concat("player"===n?C:"Computer"," wins!"),e.style.display="block",document.getElementById("computer-board").removeEventListener("click",O)}},z=function(){var n=document.getElementById("turn-display"),e=L.getCurrentPlayer();n.textContent="".concat("player"===e?C+"'s":"Computer's"," turn")},H=function(){L.initGame(),G(),z()},G=function(){var n=document.getElementById("player-board"),e=document.getElementById("computer-board");T(L.getPlayerBoard(),n),T(L.getComputerBoard(),e,!0)},{initDOM:function(){var n=document.getElementById("setup-screen"),e=document.getElementById("game-screen"),t=document.getElementById("start-game"),r=document.getElementById("player-name"),a=document.getElementById("randomize-ships"),o=document.getElementById("reset-game");t.addEventListener("click",(function(){C=r.value||"Player",n.style.display="none",e.style.display="block",H()})),a.addEventListener("click",(function(){L.randomizeShips(),G()})),o.addEventListener("click",(function(){n.style.display="block",e.style.display="none",r.value=""}))}});const N=D;document.addEventListener("DOMContentLoaded",N.initDOM)})();