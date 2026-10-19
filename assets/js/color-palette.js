DX.add({
es:{title:"Generador de paletas de colores aleatorias — Daulex",desc:"Genera paletas de cinco colores aleatorios y copia sus códigos HEX con un clic. Gratis, sin registro y en tu navegador.",h1:"Generador de paletas",sub:"Genera combinaciones de cinco colores y copia cada código HEX.",pnote:"Haz clic en un color para copiar su código.",gen:"Generar otra paleta",ah:"¿Para qué sirve?",ap:"Es útil para buscar ideas de color al diseñar interfaces, páginas web o proyectos gráficos. Cada paleta tiene cinco colores con su código hexadecimal, listos para copiar."},
en:{title:"Random color palette generator — Daulex",desc:"Generate random five-color palettes and copy their HEX codes with one click. Free, no sign-up, in your browser.",h1:"Palette generator",sub:"Generate five-color combinations and copy each HEX code.",pnote:"Click a color to copy its code.",gen:"Generate another palette",ah:"What is it for?",ap:"Handy for finding color ideas when designing interfaces, websites or graphic projects. Each palette has five colors with their hexadecimal code, ready to copy."}
});
(function(){
var g=document.getElementById("palGrid");
function make(){
  g.innerHTML="";
  for(var i=0;i<5;i++){
    var h="#"+("000000"+Math.floor(Math.random()*16777216).toString(16)).slice(-6).toUpperCase();
    var d=document.createElement("div");d.className="sw";d.tabIndex=0;d.setAttribute("role","button");
    d.style.background=h;d.innerHTML="<span>"+h+"</span>";
    (function(c,el){el.onclick=function(){DX.copy(c)};el.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();DX.copy(c)}}})(h,d);
    g.appendChild(d);
  }
}
document.getElementById("palGen").onclick=make;
make();
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
