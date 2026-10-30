DX.add({
es:{title:"Generador de paletas de colores aleatorias — Daulex",desc:"Genera paletas de cinco colores aleatorios y copia sus códigos HEX con un clic. Gratis, sin registro y en tu navegador.",h1:"Generador de paletas",sub:"Genera combinaciones de cinco colores y copia cada código HEX.",pnote:"Haz clic en un color para copiar su código.",gen:"Generar otra paleta",ah:"¿Para qué sirve?",ap:"Es útil para buscar ideas de color al diseñar interfaces, páginas web o proyectos gráficos. Cada paleta tiene cinco colores con su código hexadecimal, listos para copiar."},
en:{title:"Random color palette generator — Daulex",desc:"Generate random five-color palettes and copy their HEX codes with one click. Free, no sign-up, in your browser.",h1:"Palette generator",sub:"Generate five-color combinations and copy each HEX code.",pnote:"Click a color to copy its code.",gen:"Generate another palette",ah:"What is it for?",ap:"Handy for finding color ideas when designing interfaces, websites or graphic projects. Each palette has five colors with their hexadecimal code, ready to copy."}
});
(function(){
var $=function(i){return document.getElementById(i)},T=DX.t;
var F=[.4,.5,.8,.9,1,.9,.94,1,.94,.94],LV=[96,90,80,70,60,50,40,30,20,10],ID=[50,100,200,300,400,500,600,700,800,900],PI=[50,100,200,500,700,900];
var st={h:214,s:84,v:50},shades=[];
function h2r(x){x=x.replace("#","");return[parseInt(x.substr(0,2),16),parseInt(x.substr(2,2),16),parseInt(x.substr(4,2),16)]}
function r2h(r,g,b){return"#"+[r,g,b].map(function(x){return("0"+Math.round(x).toString(16)).slice(-2)}).join("").toUpperCase()}
function hsv2rgb(h,s,v){s/=100;v/=100;var f=function(n){var k=(n+h/60)%6;return v-v*s*Math.max(0,Math.min(k,4-k,1))};return[f(5)*255,f(3)*255,f(1)*255]}
function rgb2hsv(r,g,b){r/=255;g/=255;b/=255;var mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn,h=0;if(d){if(mx===r)h=((g-b)/d)%6;else if(mx===g)h=(b-r)/d+2;else h=(r-g)/d+4;h*=60;if(h<0)h+=360}return[h,mx?d/mx*100:0,mx*100]}
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;var mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,d=mx-mn,h=0,s=0;if(d){s=d/(1-Math.abs(2*l-1));if(mx===r)h=((g-b)/d)%6;else if(mx===g)h=(b-r)/d+2;else h=(r-g)/d+4;h*=60;if(h<0)h+=360}return[h,s*100,l*100]}
function hsl2hex(h,s,l){s/=100;l/=100;var a=s*Math.min(l,1-l),f=function(n){var k=(n+h/30)%12;return l-a*Math.max(-1,Math.min(k-3,9-k,1))};return r2h(f(0)*255,f(8)*255,f(4)*255)}
function lum(x){var c=h2r(x).map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function cr(a,b){var x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
var CP='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>';
function build(){
  var rgb=hsv2rgb(st.h,st.s,st.v),base=r2h(rgb[0],rgb[1],rgb[2]),hsl=rgb2hsl(rgb[0],rgb[1],rgb[2]);
  var vib=+$("vib").value,sh=+$("hs").value,fac=vib/50;
  $("vibV").textContent=vib+"%";$("hsV").textContent=sh+"°";
  shades=ID.map(function(id,i){
    var h=(hsl[0]+sh+720)%360,s=Math.max(0,Math.min(100,hsl[1]*F[i]*fac));
    return{id:id,hex:hsl2hex(h,s,LV[i]),h:Math.round(h),s:Math.round(s),l:LV[i]};
  });
  ["bsw","bsw2","bsw3"].forEach(function(i){$(i).style.background=base});
  $("hxt").textContent=base;
  if(document.activeElement!==$("hxIn"))$("hxIn").value=base;
  $("hu").value=Math.round(st.h);
  $("sv").style.background="linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,hsl("+st.h+",100%,50%))";
  $("th").style.left=st.s+"%";$("th").style.top=(100-st.v)+"%";
  $("strip").innerHTML=shades.map(function(s){return'<i style="background:'+s.hex+'"></i>'}).join("");
  $("shades").innerHTML=shades.map(function(s){
    return'<div class="shade" data-hex="'+s.hex+'"><i class="sq" style="background:'+s.hex+'"></i><b>'+s.id+'</b><div class="mid"><span class="hx">'+s.hex+CP+'</span><div class="hsl"><div><small>H '+s.h+'</small><div class="bb"><i style="width:'+(s.h/360*100)+'%"></i></div></div><div><small>S '+s.s+'</small><div class="bb"><i style="width:'+s.s+'%"></i></div></div><div><small>L '+s.l+'</small><div class="bb"><i style="width:'+s.l+'%"></i></div></div></div></div></div>';
  }).join("");
  var by={};shades.forEach(function(s){by[s.id]=s.hex});
  var pr=[];for(var i=0;i<PI.length;i++)for(var j=i+1;j<PI.length;j++)pr.push({a:PI[i],b:PI[j],r:cr(by[PI[i]],by[PI[j]])});
  pr.sort(function(x,y){return y.r-x.r});
  var ok=pr.filter(function(x){return x.r>=4.5}),no=pr.filter(function(x){return x.r<4.5});
  function row(x,c){var A=by[x.a],B=by[x.b];return'<div class="pr '+c+'"><span class="ab"><i style="background:'+A+';color:'+B+'">A</i><i style="background:'+B+';color:'+A+'">A</i></span><span>'+x.a+' + '+x.b+'</span><em>'+x.r.toFixed(2)+':1</em><u>'+(x.r>=7?"AAA":x.r>=4.5?"AA":T("fail"))+'</u></div>'}
  $("okL").innerHTML=ok.map(function(x){return row(x,"ok")}).join("");
  $("badL").innerHTML=no.map(function(x){return row(x,"no")}).join("");
  $("pc").textContent=ok.length+" "+T("pas")+" / "+pr.length+" "+T("tot");
}
function fromHex(x){var r=h2r(x),v=rgb2hsv(r[0],r[1],r[2]);st.h=v[0];st.s=v[1];st.v=v[2]}
function mv(e){var r=$("sv").getBoundingClientRect();st.s=Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100));st.v=Math.max(0,Math.min(100,100-(e.clientY-r.top)/r.height*100));build()}
$("sv").addEventListener("pointerdown",function(e){try{$("sv").setPointerCapture(e.pointerId)}catch(x){}mv(e);$("sv").onpointermove=mv});
$("sv").addEventListener("pointerup",function(){$("sv").onpointermove=null});
$("hu").addEventListener("input",function(){st.h=+this.value;build()});
$("hxIn").addEventListener("input",function(){var v=this.value.trim();if(/^#?[0-9a-f]{6}$/i.test(v)){fromHex(v);build()}});
$("hxIn").addEventListener("blur",build);
$("vib").addEventListener("input",build);$("hs").addEventListener("input",build);
$("rnd").onclick=function(){st.h=Math.random()*360;st.s=55+Math.random()*35;st.v=45+Math.random()*45;build()};
$("shades").addEventListener("click",function(e){var n=e.target.closest?e.target.closest(".shade"):null;if(n)DX.copy(n.getAttribute("data-hex"))});
$("dl").onclick=function(){
  var css=":root{\n"+shades.map(function(s){return"  --color-"+s.id+": "+s.hex+";"}).join("\n")+"\n}\n";
  var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([css],{type:"text/css"}));a.download="palette.css";
  document.body.appendChild(a);a.click();a.remove();
};
$("dm").checked=DX.theme.get()!=="light";
$("dm").addEventListener("change",function(){DX.theme.set(this.checked?"dark":"light")});
DX.onLang(function(){$("dl").setAttribute("aria-label",T("dl"));build()});
fromHex("#15437F");build();
})();
DX.add({
pt:{title:"Gerador de paletas de cores aleatórias — Daulex",desc:"Gere paletas aleatórias de cinco cores e copie os códigos HEX com um clique. Grátis, sem cadastro, no navegador.",h1:"Gerador de paletas",sub:"Gere combinações de cinco cores e copie cada código HEX.",pnote:"Clique em uma cor para copiar seu código.",gen:"Gerar outra paleta",ah:"Para que serve?",ap:"Útil para buscar ideias de cor ao criar interfaces, sites ou projetos gráficos. Cada paleta tem cinco cores com seu código hexadecimal, prontas para copiar."},
fr:{title:"Générateur de palettes de couleurs aléatoires — Daulex",desc:"Générez des palettes aléatoires de cinq couleurs et copiez leurs codes HEX en un clic. Gratuit, sans inscription, dans votre navigateur.",h1:"Générateur de palettes",sub:"Générez des combinaisons de cinq couleurs et copiez chaque code HEX.",pnote:"Cliquez sur une couleur pour copier son code.",gen:"Générer une autre palette",ah:"À quoi ça sert ?",ap:"Pratique pour trouver des idées de couleurs en concevant des interfaces, des sites web ou des projets graphiques. Chaque palette compte cinq couleurs avec leur code hexadécimal, prêtes à copier."},
de:{title:"Zufälliger Farbpaletten-Generator — Daulex",desc:"Erzeuge zufällige Paletten mit fünf Farben und kopiere die HEX-Codes mit einem Klick. Kostenlos, ohne Anmeldung, im Browser.",h1:"Paletten-Generator",sub:"Erzeuge Kombinationen aus fünf Farben und kopiere jeden HEX-Code.",pnote:"Klicke auf eine Farbe, um ihren Code zu kopieren.",gen:"Neue Palette erzeugen",ah:"Wofür ist das gut?",ap:"Praktisch, um Farbideen für Oberflächen, Websites oder Grafikprojekte zu finden. Jede Palette enthält fünf Farben mit ihrem Hexadezimalcode, bereit zum Kopieren."},
zh:{title:"随机配色方案生成器 — Daulex",desc:"生成随机的五色配色方案，一键复制 HEX 代码。免费，无需注册，在浏览器中使用。",h1:"配色方案生成器",sub:"生成五种颜色的组合，并复制每个 HEX 代码。",pnote:"点击颜色即可复制其代码。",gen:"生成新的配色",ah:"有什么用？",ap:"在设计界面、网站或图形项目时，用来寻找配色灵感。每套配色包含五种颜色及其十六进制代码，可直接复制。"},
ja:{title:"ランダムカラーパレット生成 — Daulex",desc:"ランダムな5色のパレットを生成し、HEXコードをワンクリックでコピー。無料、登録不要、ブラウザで動作。",h1:"パレット生成",sub:"5色の組み合わせを生成し、各HEXコードをコピーできます。",pnote:"色をクリックするとコードをコピーできます。",gen:"別のパレットを生成",ah:"何に使えますか？",ap:"インターフェース、Webサイト、グラフィック制作で配色のヒントを探すのに便利です。各パレットは5色とその16進コードで構成され、そのままコピーできます。"},
ru:{title:"Генератор случайных цветовых палитр — Daulex",desc:"Создавайте случайные палитры из пяти цветов и копируйте HEX-коды одним щелчком. Бесплатно, без регистрации, в браузере.",h1:"Генератор палитр",sub:"Создавайте сочетания из пяти цветов и копируйте каждый HEX-код.",pnote:"Нажмите на цвет, чтобы скопировать его код.",gen:"Создать другую палитру",ah:"Для чего это нужно?",ap:"Удобно для поиска цветовых идей при создании интерфейсов, сайтов и графических проектов. В каждой палитре пять цветов с шестнадцатеричными кодами, готовыми к копированию."},
ar:{title:"مولّد لوحات ألوان عشوائية — Daulex",desc:"أنشئ لوحات عشوائية من خمسة ألوان وانسخ رموز HEX بنقرة واحدة. مجاني وبدون تسجيل وفي متصفحك.",h1:"مولّد لوحات الألوان",sub:"أنشئ تركيبات من خمسة ألوان وانسخ كل رمز HEX.",pnote:"انقر على لون لنسخ رمزه.",gen:"أنشئ لوحة أخرى",ah:"ما فائدتها؟",ap:"مفيد للبحث عن أفكار الألوان عند تصميم الواجهات أو المواقع أو المشاريع الرسومية. تحتوي كل لوحة على خمسة ألوان مع رمزها السداسي عشري، جاهزة للنسخ."}
});
DX.add({
es:{bc:"Color base",rnd:"Aleatorio",vib:"Vivacidad",hue:"Cambio de tono",acc:"Pares de accesibilidad",pas:"aprobados",tot:"en total",okc:"Combinaciones accesibles",bad:"Combinaciones no accesibles",fail:"Falla",dm:"Modo oscuro",dl:"Descargar paleta"},
en:{bc:"Base Color",rnd:"Randomize",vib:"Vibrancy",hue:"Hue Shift",acc:"Accessibility Pairs",pas:"passing",tot:"total",okc:"Accessible Combinations",bad:"Inaccessible Combinations",fail:"Fail",dm:"Dark Mode",dl:"Download palette"},
pt:{bc:"Cor base",rnd:"Aleatório",vib:"Vivacidade",hue:"Deslocamento de matiz",acc:"Pares de acessibilidade",pas:"aprovados",tot:"no total",okc:"Combinações acessíveis",bad:"Combinações não acessíveis",fail:"Reprovado",dm:"Modo escuro",dl:"Baixar paleta"},
fr:{bc:"Couleur de base",rnd:"Aléatoire",vib:"Vivacité",hue:"Décalage de teinte",acc:"Paires d’accessibilité",pas:"conformes",tot:"au total",okc:"Combinaisons accessibles",bad:"Combinaisons non accessibles",fail:"Échec",dm:"Mode sombre",dl:"Télécharger la palette"},
de:{bc:"Basisfarbe",rnd:"Zufall",vib:"Intensität",hue:"Farbtonverschiebung",acc:"Barrierefreie Paare",pas:"bestanden",tot:"gesamt",okc:"Barrierefreie Kombinationen",bad:"Nicht barrierefreie Kombinationen",fail:"Nicht bestanden",dm:"Dunkelmodus",dl:"Palette herunterladen"},
zh:{bc:"基础颜色",rnd:"随机",vib:"鲜艳度",hue:"色相偏移",acc:"无障碍配对",pas:"通过",tot:"总计",okc:"符合无障碍的组合",bad:"不符合无障碍的组合",fail:"未通过",dm:"深色模式",dl:"下载配色"},
ja:{bc:"ベースカラー",rnd:"ランダム",vib:"鮮やかさ",hue:"色相シフト",acc:"アクセシビリティの組み合わせ",pas:"合格",tot:"合計",okc:"アクセシブルな組み合わせ",bad:"アクセシブルでない組み合わせ",fail:"不合格",dm:"ダークモード",dl:"パレットをダウンロード"},
ru:{bc:"Базовый цвет",rnd:"Случайно",vib:"Насыщенность",hue:"Сдвиг оттенка",acc:"Пары для доступности",pas:"проходят",tot:"всего",okc:"Доступные сочетания",bad:"Недоступные сочетания",fail:"Не проходит",dm:"Тёмный режим",dl:"Скачать палитру"},
ar:{bc:"اللون الأساسي",rnd:"عشوائي",vib:"الحيوية",hue:"إزاحة الصبغة",acc:"أزواج إمكانية الوصول",pas:"ناجحة",tot:"من الإجمالي",okc:"تركيبات متاحة",bad:"تركيبات غير متاحة",fail:"فشل",dm:"الوضع الداكن",dl:"تنزيل اللوحة"}
});

DX.add({
it:{title:"Generatore di palette di colori casuali — Daulex",desc:"Genera palette casuali di cinque colori e copia i codici HEX con un clic. Gratis, senza registrazione, nel tuo browser.",h1:"Generatore di palette",sub:"Genera combinazioni di cinque colori e copia ogni codice HEX.",pnote:"Clicca su un colore per copiarne il codice.",gen:"Genera un’altra palette",ah:"A cosa serve?",ap:"Utile per cercare idee di colore quando progetti interfacce, siti web o progetti grafici. Ogni palette ha cinque colori con il loro codice esadecimale, pronti da copiare.",bc:"Colore base",rnd:"Casuale",vib:"Vivacità",hue:"Spostamento tonalità",acc:"Coppie di accessibilità",pas:"superate",tot:"totali",okc:"Combinazioni accessibili",bad:"Combinazioni non accessibili",fail:"Fallita",dm:"Modalità scura",dl:"Scarica la palette"},
ko:{title:"무작위 색상 팔레트 생성기 — Daulex",desc:"무작위로 다섯 가지 색상의 팔레트를 만들고 HEX 코드를 한 번에 복사하세요. 무료, 가입 불필요, 브라우저에서 바로 사용.",h1:"팔레트 생성기",sub:"다섯 가지 색상 조합을 만들고 각 HEX 코드를 복사하세요.",pnote:"색상을 클릭하면 코드가 복사됩니다.",gen:"다른 팔레트 생성",ah:"어디에 쓰나요?",ap:"인터페이스, 웹사이트, 그래픽 프로젝트를 디자인할 때 색상 아이디어를 찾는 데 유용합니다. 각 팔레트는 다섯 가지 색상과 16진수 코드로 구성되어 바로 복사할 수 있습니다.",bc:"기본 색상",rnd:"무작위",vib:"선명도",hue:"색조 이동",acc:"접근성 조합",pas:"통과",tot:"전체",okc:"접근 가능한 조합",bad:"접근 불가능한 조합",fail:"실패",dm:"다크 모드",dl:"팔레트 다운로드"},
he:{title:"מחולל פלטות צבעים אקראיות — Daulex",desc:"צרו פלטות אקראיות של חמישה צבעים והעתיקו את קודי ה-HEX בלחיצה אחת. חינם, ללא הרשמה, בדפדפן שלכם.",h1:"מחולל פלטות",sub:"צרו שילובים של חמישה צבעים והעתיקו כל קוד HEX.",pnote:"לחצו על צבע כדי להעתיק את הקוד שלו.",gen:"צור פלטה נוספת",ah:"למה זה טוב?",ap:"שימושי למציאת רעיונות לצבעים בעיצוב ממשקים, אתרים ופרויקטים גרפיים. בכל פלטה חמישה צבעים עם קוד הקסדצימלי, מוכנים להעתקה.",bc:"צבע בסיס",rnd:"אקראי",vib:"עוצמת צבע",hue:"הזזת גוון",acc:"זוגות נגישות",pas:"עוברים",tot:"סה״כ",okc:"שילובים נגישים",bad:"שילובים לא נגישים",fail:"נכשל",dm:"מצב כהה",dl:"הורד פלטה"}
});
