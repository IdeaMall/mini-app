/*! For license information please see 316.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[316],{"9316":function(e,t,s){s.r(t),s.d(t,{"scopeCss":function(){return scopeCss}});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+n,"gim"),i=new RegExp("("+o+n,"gim"),p=new RegExp("("+c+n,"gim"),a=r+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,$=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",processRules=(e,t)=>{const s=escapeBlocks(e);let r=0;return s.escapedString.replace(_,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+S)&&(o=s.blocks[r++],n=n.substring(8),l="{");const i=t({"selector":c,"content":o});return`${e[1]}${i.selector}${e[3]}${l}${i.content}${n}`}))},escapeBlocks=e=>{const t=e.split(w),s=[],r=[];let c=0,o=[];for(let e=0;e<t.length;e++){const n=t[e];"}"===n&&c--,c>0?o.push(n):(o.length>0&&(r.push(o.join("")),s.push(S),o=[]),s.push(n)),"{"===n&&c++}o.length>0&&(r.push(o.join("")),s.push(S));return{"escapedString":s.join(""),"blocks":r}},convertColonRule=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(a,o,e[3]))}return r.join(",")}return a+e[3]})),colonHostPartReplacer=(e,t,s)=>e+t.replace(r,"")+s,colonHostContextPartReplacer=(e,t,s)=>t.indexOf(r)>-1?colonHostPartReplacer(e,t,s):e+t+s+", "+t+" "+e+s,selectorNeedsScoping=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},injectScopingSelector=(e,t)=>e.replace(b,((e,s="",r,c="",o="")=>s+t+c+o)),applyStrictSelectorScope=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),_scopeSelectorPart=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(a)>-1)c=((e,t,s)=>{if(g.lastIndex=0,g.test(e)){const t=`.${s}`;return e.replace(h,((e,s)=>injectScopingSelector(s,t))).replace(g,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(g,"");t.length>0&&(c=injectScopingSelector(t,r))}return c},c=(e=>{const t=[];let s=0;return{"content":(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),"placeholders":t}})(e);let o,n="",l=0;const i=/( |>|\+|~(?!=))\s*/g;let p=!((e=c.content).indexOf(a)>-1);for(;null!==(o=i.exec(e));){const t=o[1],s=e.slice(l,o.index).trim();p=p||s.indexOf(a)>-1;n+=`${p?_scopeSelectorPart(s):s} ${t} `,l=i.lastIndex}const u=e.substring(l);return p=p||u.indexOf(a)>-1,n+=p?_scopeSelectorPart(u):u,d=c.placeholders,n.replace(/__ph-(\d+)__/g,((e,t)=>d[+t]));var d},scopeSelectors=(e,t,s,r,c)=>processRules(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():selectorNeedsScoping(e,t)?applyStrictSelectorScope(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=scopeSelectors(e.content,t,s,r));return{"selector":c.replace(/\s{2,}/g," ").trim(),"content":o}})),scopeCssText=(e,t,s,n,h)=>{const g=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(p,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let t=e[4]-1;t>=0;t--){const s=e[5][t];if("}"===s||","===s)break;n=s+n}const l=n+o,i=`${n.trimRight()}${o.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({"orgSelector":l,"updatedSelector":e})}return o}return a+e[3]})),{"selectors":r,"cssText":e}})(e=(e=>convertColonRule(e,i,colonHostContextPartReplacer))(e=(e=>convertColonRule(e,l,colonHostPartReplacer))(e=e.replace(f,o).replace(d,r).replace(m,c))),n);return e=(e=>u.reduce(((e,t)=>e.replace(t," ")),e))(e=g.cssText),t&&(e=scopeSelectors(e,t,s,n)),{"cssText":(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),"slottedSelectors":g.selectors}},scopeCss=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=e.match(x)||[];e=(e=>e.replace($,""))(e);const n=[];if(s){const processCommentedSelector=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({"placeholder":t,"comment":s}),e.selector=t+e.selector,e};e=processRules(e,(e=>"@"!==e.selector[0]?processCommentedSelector(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=processRules(e.content,processCommentedSelector),e):e))}const l=scopeCssText(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({"placeholder":t,"comment":s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);