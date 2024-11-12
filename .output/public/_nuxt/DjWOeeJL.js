import{_ as j,r as F,g as c,t as p,J as v,A as a,z as s,x as o,v as E,K as S,L as A,M as k,B as L,N as V,y as b,d as D,O as H}from"./DoiGmfXD.js";var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var z={exports:{}};(function(_,w){(function(m,l){l()})(h,function(){function m(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function l(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,r)},n.onerror=function(){console.error("could not download file")},n.send()}function y(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof h=="object"&&h.global===h?h:void 0,g=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(e,t,r){var n=d.URL||d.webkitURL,f=document.createElement("a");t=t||e.name||"download",f.download=t,f.rel="noopener",typeof e=="string"?(f.href=e,f.origin===location.origin?i(f):y(f.href)?l(e,t,r):i(f,f.target="_blank")):(f.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(f.href)},4e4),setTimeout(function(){i(f)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(m(e,r),t);else if(y(e))l(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){i(n)})}}:function(e,t,r,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return l(e,t,r);var f=e.type==="application/octet-stream",B=/constructor/i.test(d.HTMLElement)||d.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||f&&B||g)&&typeof FileReader<"u"){var T=new FileReader;T.onloadend=function(){var x=T.result;x=R?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=x:location=x,n=null},T.readAsDataURL(e)}else{var U=d.URL||d.webkitURL,M=U.createObjectURL(e);n?n.location=M:location.href=M,n=null,setTimeout(function(){U.revokeObjectURL(M)},4e4)}});d.saveAs=u.saveAs=u,_.exports=u})})(z);var J=z.exports;const N=C(J),I=[{title:"GitHub",link:"https://github.com/victorpessoa01",icon:"mdi-github"},{title:"LinkedIn",link:"https://www.linkedin.com/in/victor-pessoa-b93703241/",icon:"mdi-linkedin"},{title:"Mail",link:"mailto:victorpessoa0011@gmail.com",icon:"mdi-email"}],$=[{name:"HTML",icon:"mdi-language-html5",color:"#e34f26",star:3},{name:"CSS",icon:"mdi-language-css3",color:"#1572b6",star:2},{name:"Vue JS",icon:"mdi-vuejs",color:"#4fc08d",star:2},{name:"Typescript",icon:"mdi-language-typescript",color:"#007acc",star:1}],q={__name:"home",setup(_){const{saveAs:w}=N,m=F("/curriculo.pdf");function l(){w(m.value,"curriculo-José_Victor_Pessoa.pdf")}return(y,i)=>{const d=c("v-row"),g=c("v-icon"),u=c("v-card"),e=c("v-col"),t=c("v-btn"),r=c("v-container");return p(),v(r,{id:"home",class:"container"},{default:a(()=>[s(e,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[i[1]||(i[1]=o("h1",{class:"ma-0 pa-0 mb-n2",style:{"font-size":"2rem","font-weight":"600"}},"Desenvolvedor",-1)),s(d,{class:"d-flex align-center ma-0 pa-0"},{default:a(()=>i[0]||(i[0]=[o("h1",{class:"spacing text-secondary mr-7 ma-0 pa-0",style:{"font-size":"1.9rem","font-weight":"600"}},"FRONT",-1),o("h1",{class:"spacing text-primary ma-0 pa-0 mr-0",style:{"font-size":"1.9rem","font-weight":"600"}},"END",-1)])),_:1}),s(d,{class:"d-flex align-center ma-0 pa-0 mt-6"},{default:a(()=>[(p(!0),E(S,null,A(k(I),n=>(p(),v(u,{key:n.title,href:n.link,target:"_blank",class:"btn ma-0 pa-0 mr-6",color:"primary"},{default:a(()=>[s(g,{color:"secondary",icon:n.icon,size:"30",class:"ma-1 pa-0"},null,8,["icon"])]),_:2},1032,["href"]))),128))]),_:1})]),_:1}),i[4]||(i[4]=o("br",null,null,-1)),s(e,{cols:"12",class:"ma-0 pa-0 mt-10 text-right"},{default:a(()=>[s(d,{justify:"end",class:"ma-0 pa-0"},{default:a(()=>i[2]||(i[2]=[o("span",{class:"ma-0 pa-0 text-textSecondary",style:{"font-size":"1rem","font-weight":"600"}},[L(' Escreval ("'),o("span",{class:"ma-0 pa-0 text-primary",style:{"font-size":"1.5rem"}},"Olá, Mundo!!!"),L('") ')],-1)])),_:1}),s(d,{justify:"end",class:"ma-0 pa-0 mt-6"},{default:a(()=>[s(t,{class:"btn d-flex pa-0 ma-0 rounded-xl",elevation:"3",onClick:l,color:"secondary"},{default:a(()=>i[3]||(i[3]=[o("span",{class:"ma-4 pa-0 text-primary font-weight-bold"}," Baixar CV ",-1)])),_:1})]),_:1})]),_:1})]),_:1})}}},G=j(q,[["__scopeId","data-v-63e7c8c8"]]),O=[{mes:"Nov",ano:"2022",description:"Tive meu primeiro contato com a área de programação, onde essas experiências despertaram meu interesse pela tecnologia."},{mes:"Dez",ano:"2023",description:"Fui aprovado na Jala University, ficando entre quase 2% dos aprovados do Brasil e entre os 6 selecionados da minha cidade natal."},{mes:"Jul",ano:"2024-2028",description:"Atualmente, estou me aprimorando com os melhores profissionais na Jala University, com o objetivo de concluir minha formação e me tornar um profissional de excelência."}],P={class:"ma-0 pa-0"},K={class:"perfil d-flex justify-center mt-4 mt-sm-0"},X={class:"text-primary"},W={class:"text-primary"},Q={__name:"about-me",setup(_){const{smAndUp:w}=V();return(m,l)=>{const y=c("v-col"),i=c("v-img"),d=c("v-avatar"),g=c("v-row"),u=c("v-timeline-item"),e=c("v-timeline"),t=c("v-container");return p(),v(t,{id:"about-me",class:"container mt-6"},{default:a(()=>[o("div",P,[l[1]||(l[1]=o("br",null,null,-1)),l[2]||(l[2]=o("h2",{class:"topics text-primary"},"Sobre Mim",-1)),s(y,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[s(g,{justify:"space-between",class:"d-flex align-center"},{default:a(()=>[s(y,{cols:"12",sm:"7",class:"d-flex align-center text-center"},{default:a(()=>l[0]||(l[0]=[o("div",null,[o("p",{class:"ma-0 pa-0 text-justify"},[L(" Sou um desenvolvedor front-end cursando Engenharia de Software na "),o("span",{class:"font-weight-bold"},[o("a",null,[o("a",{href:"https://jala.university/",target:"_blank",class:"text-secondary text-decoration-none"},"Jala University")])]),L(". Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. ")])],-1)])),_:1}),s(y,{cols:"12",sm:"5"},{default:a(()=>[o("div",K,[s(d,{class:"border-lg",color:"secondary",rounded:"1",size:"200"},{default:a(()=>[s(i,{src:"https://github.com/victorpessoa01.png",cover:""})]),_:1})])]),_:1})]),_:1})]),_:1}),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=o("br",null,null,-1)),s(y,{cols:"12",class:"ma-0 pa-0 mt-15"},{default:a(()=>[k(w)?(p(),v(e,{key:0,direction:"horizontal"},{default:a(()=>[(p(!0),E(S,null,A(k(O),r=>(p(),v(u,{key:r.mes,"dot-color":"secondary",class:"ma-0 pa-0 text-start algign-center"},{opposite:a(()=>[o("h3",X,b(r.mes)+"/"+b(r.ano),1)]),default:a(()=>[o("div",null,[o("p",null,b(r.description),1)])]),_:2},1024))),128))]),_:1})):(p(),v(e,{key:1,side:"end"},{default:a(()=>[(p(!0),E(S,null,A(k(O),r=>(p(),v(u,{key:r.mes,"dot-color":"secondary",class:"ma-0 pa-0 text-start algign-center"},{default:a(()=>[o("h3",W,b(r.mes)+"/"+b(r.ano),1),o("div",null,[o("p",null,b(r.description),1)])]),_:2},1024))),128))]),_:1}))]),_:1})])]),_:1})}}},Y=j(Q,[["__scopeId","data-v-de06be3e"]]),Z={class:"ma-0 pa-0"},ee={class:"ma-0 pa-0"},te=D({__name:"skills",setup(_){return(w,m)=>{const l=c("v-icon"),y=c("v-rating"),i=c("v-col"),d=c("v-row"),g=c("v-container");return p(),v(g,{id:"skills",class:"container"},{default:a(()=>[m[2]||(m[2]=o("br",null,null,-1)),o("div",Z,[m[1]||(m[1]=o("h2",{class:"topics text-primary"},"Habilidades",-1)),s(i,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[m[0]||(m[0]=o("br",null,null,-1)),s(d,{class:"ma-0 pa-0 d-flex justify-center",wrap:"nowrap"},{default:a(()=>[(p(!0),E(S,null,A(k($),u=>(p(),v(i,{cols:"auto",key:u.name,style:H({color:u.color}),class:"lang text-center d-flex flex-column align-center ma-2 pa-2"},{default:a(()=>[s(l,{icon:u.icon,size:"70"},null,8,["icon"]),o("span",ee,b(u.name),1),s(y,{modelValue:u.star,"onUpdate:modelValue":e=>u.star=e,"full-icon":"mdi-star","half-icon":"mdi-star-half",size:"small",density:"compact",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["style"]))),128))]),_:1})]),_:1})])]),_:1})}}}),ne=j(te,[["__scopeId","data-v-28767f21"]]),oe={};function ae(_,w){const m=c("v-container");return p(),v(m,{id:"project",class:"container"})}const se=j(oe,[["render",ae],["__scopeId","data-v-e7afbc4d"]]),le={__name:"index",setup(_){return(w,m)=>{const l=c("v-container");return p(),v(l,{class:"container bg-background"},{default:a(()=>[s(G),s(Y),s(ne),s(se)]),_:1})}}},ie=j(le,[["__scopeId","data-v-d07d66be"]]);export{ie as default};
