DX.add({
es:{title:"Analizador de texto online: palabras, caracteres y frases — Daulex",desc:"Cuenta palabras, caracteres y frases y calcula el tiempo de lectura de tu texto al instante. Gratis y sin registro.",h1:"Analizador de texto",sub:"Escribe o pega un texto y mira sus estadísticas en tiempo real.",tin:"Escribe o pega tu texto",sw:"Palabras",sc:"Caracteres",ss:"Frases",sr:"Min. de lectura",tnote:"Tiempo estimado a 200 palabras por minuto. Es una aproximación.",ah:"¿Para qué sirve?",ap:"Sirve para revisar la extensión de artículos, descripciones, publicaciones o trabajos. Cuenta palabras, caracteres con espacios y frases, y estima cuánto tarda en leerse el texto. Todo se calcula en tu navegador."},
en:{title:"Free online text analyzer: words, characters and sentences — Daulex",desc:"Count words, characters and sentences and get the reading time of your text instantly. Free, no sign-up.",h1:"Text analyzer",sub:"Type or paste some text and see its stats in real time.",tin:"Type or paste your text",sw:"Words",sc:"Characters",ss:"Sentences",sr:"Reading min.",tnote:"Estimated at 200 words per minute. This is an approximation.",ah:"What is it for?",ap:"Use it to check the length of articles, descriptions, posts or assignments. It counts words, characters including spaces and sentences, and estimates how long the text takes to read. Everything is calculated in your browser."}
});
(function(){
var $=function(i){return document.getElementById(i)},T=DX.t,exp=false;
function p(n){return String(n).padStart(2,"0")}
function stats(){
  var v=$("tIn").value,tr=v.trim();
  var c=$("xs").checked?v.replace(/\s/g,"").length:v.length;
  var w=tr?tr.split(/\s+/).length:0;
  var s=tr?(tr.match(/[^.!?…。！？]+[.!?…。！？]+|[^.!?…。！？]+$/g)||[]).filter(function(x){return x.trim()}).length:0;
  $("sC").textContent=p(c);$("sW").textContent=p(w);$("sS").textContent=p(s);
  $("rtN").textContent=w?Math.max(1,Math.ceil(w/200)):0;
  var on=$("lim").checked,n=parseInt($("limN").value,10)||0;
  $("limN").hidden=!on;
  var over=on&&n>0&&c>n;
  $("tIn").classList.toggle("err",over);
  $("limMsg").hidden=!over;$("limMsg").textContent=T("lx")+" "+n;
  var map={},tot=0;
  (v.toLowerCase().match(/\p{L}/gu)||[]).forEach(function(ch){map[ch]=(map[ch]||0)+1;tot++});
  var arr=Object.keys(map).map(function(k){return[k,map[k]]}).sort(function(a,b){return b[1]-a[1]});
  var d=$("dens"),m=$("more");
  if(!tot){d.innerHTML='<p class="nold"></p>';d.firstChild.textContent=T("nold");m.hidden=true;return}
  var shown=exp?arr:arr.slice(0,5),h="";
  shown.forEach(function(r){var pc=r[1]/tot*100;h+='<div class="ld"><span class="l">'+r[0].toUpperCase()+'</span><div class="bar"><i style="width:'+pc.toFixed(1)+'%"></i></div><span class="c">'+r[1]+' ('+pc.toFixed(2)+'%)</span></div>'});
  d.innerHTML=h;
  m.hidden=arr.length<=5;m.textContent=exp?T("les"):T("mor");
}
function icon(){$("thm").textContent=DX.theme.get()==="light"?"☾":"☀"}
["input","change"].forEach(function(e){["tIn","xs","lim","limN"].forEach(function(i){$(i).addEventListener(e,stats)})});
$("more").onclick=function(){exp=!exp;stats()};
$("thm").onclick=function(){DX.theme.toggle();icon()};
DX.onLang(function(){$("thm").setAttribute("aria-label",T("thm"));stats()});
icon();stats();
})();
DX.add({
pt:{title:"Analisador de texto online: palavras, caracteres e frases — Daulex",desc:"Conte palavras, caracteres e frases e calcule o tempo de leitura do seu texto na hora. Grátis e sem cadastro.",h1:"Analisador de texto",sub:"Escreva ou cole um texto e veja as estatísticas em tempo real.",tin:"Escreva ou cole seu texto",sw:"Palavras",sc:"Caracteres",ss:"Frases",sr:"Min. de leitura",tnote:"Tempo estimado a 200 palavras por minuto. É uma aproximação.",ah:"Para que serve?",ap:"Serve para conferir a extensão de artigos, descrições, publicações ou trabalhos. Conta palavras, caracteres com espaços e frases, e estima quanto tempo o texto leva para ser lido. Tudo é calculado no seu navegador."},
fr:{title:"Analyseur de texte en ligne : mots, caractères et phrases — Daulex",desc:"Comptez les mots, caractères et phrases et obtenez le temps de lecture de votre texte instantanément. Gratuit, sans inscription.",h1:"Analyseur de texte",sub:"Saisissez ou collez un texte et voyez ses statistiques en temps réel.",tin:"Saisissez ou collez votre texte",sw:"Mots",sc:"Caractères",ss:"Phrases",sr:"Min. de lecture",tnote:"Temps estimé à 200 mots par minute. C’est une approximation.",ah:"À quoi ça sert ?",ap:"Utile pour vérifier la longueur d’articles, de descriptions, de publications ou de devoirs. Il compte les mots, les caractères espaces compris et les phrases, et estime le temps de lecture. Tout est calculé dans votre navigateur."},
de:{title:"Textanalyse online: Wörter, Zeichen und Sätze — Daulex",desc:"Zähle Wörter, Zeichen und Sätze und erfahre sofort die Lesezeit deines Textes. Kostenlos, ohne Anmeldung.",h1:"Textanalyse",sub:"Schreibe oder füge einen Text ein und sieh die Statistik in Echtzeit.",tin:"Text eingeben oder einfügen",sw:"Wörter",sc:"Zeichen",ss:"Sätze",sr:"Lesezeit (Min.)",tnote:"Geschätzt bei 200 Wörtern pro Minute. Das ist ein Näherungswert.",ah:"Wofür ist das gut?",ap:"Nützlich, um die Länge von Artikeln, Beschreibungen, Beiträgen oder Arbeiten zu prüfen. Es zählt Wörter, Zeichen inklusive Leerzeichen und Sätze und schätzt die Lesezeit. Alles wird in deinem Browser berechnet."},
zh:{title:"在线文本分析器：字数、字符数和句子数 — Daulex",desc:"即时统计文本的字数、字符数和句子数，并估算阅读时间。免费，无需注册。",h1:"文本分析器",sub:"输入或粘贴文本，实时查看统计结果。",tin:"输入或粘贴文本",sw:"字数",sc:"字符数",ss:"句子数",sr:"阅读时间（分钟）",tnote:"按每分钟 200 字估算，仅为近似值。",ah:"有什么用？",ap:"可用于检查文章、描述、帖子或作业的篇幅。它会统计字数、含空格的字符数和句子数，并估算阅读所需时间。所有计算都在你的浏览器中完成。"},
ja:{title:"オンラインテキスト分析：単語数・文字数・文の数 — Daulex",desc:"テキストの単語数、文字数、文の数と読了時間をすぐに確認。無料、登録不要。",h1:"テキスト分析",sub:"テキストを入力または貼り付けると、統計がリアルタイムで表示されます。",tin:"テキストを入力または貼り付け",sw:"単語数",sc:"文字数",ss:"文の数",sr:"読了時間（分）",tnote:"1分あたり200語で見積もっています。目安としてご利用ください。",ah:"何に使えますか？",ap:"記事、説明文、投稿、課題の長さの確認に使えます。単語数、スペースを含む文字数、文の数を数え、読むのにかかる時間を見積もります。計算はすべてブラウザ内で行われます。"},
ru:{title:"Онлайн-анализатор текста: слова, символы и предложения — Daulex",desc:"Считайте слова, символы и предложения и мгновенно узнавайте время чтения текста. Бесплатно, без регистрации.",h1:"Анализатор текста",sub:"Введите или вставьте текст и смотрите статистику в реальном времени.",tin:"Введите или вставьте текст",sw:"Слова",sc:"Символы",ss:"Предложения",sr:"Время чтения, мин.",tnote:"Оценка из расчёта 200 слов в минуту. Это приблизительное значение.",ah:"Для чего это нужно?",ap:"Подходит для проверки объёма статей, описаний, публикаций и работ. Считает слова, символы с пробелами и предложения и оценивает время чтения. Все вычисления выполняются в вашем браузере."},
ar:{title:"محلّل نصوص مجاني: الكلمات والأحرف والجمل — Daulex",desc:"احسب الكلمات والأحرف والجمل واعرف وقت قراءة نصك فورًا. مجاني وبدون تسجيل.",h1:"محلّل النصوص",sub:"اكتب نصًا أو الصقه وشاهد الإحصاءات لحظيًا.",tin:"اكتب نصك أو الصقه",sw:"الكلمات",sc:"الأحرف",ss:"الجمل",sr:"دقائق القراءة",tnote:"التقدير بمعدل 200 كلمة في الدقيقة، وهو تقريبي.",ah:"ما فائدتها؟",ap:"مفيد لمراجعة طول المقالات والأوصاف والمنشورات والواجبات. يحسب الكلمات والأحرف مع المسافات والجمل ويقدّر وقت القراءة. تتم جميع الحسابات داخل متصفحك."}
});
DX.add({
es:{hd:"Analiza tu texto en tiempo real.",xs:"Excluir espacios",lim:"Establecer límite de caracteres",rt:"Tiempo de lectura aprox.:",mn:"min",ld:"Densidad de letras",nold:"No hay caracteres. Empieza a escribir para ver la densidad de letras.",lx:"Límite superado:",mor:"Ver más",les:"Ver menos",thm:"Cambiar tema"},
en:{hd:"Analyze your text in real-time.",xs:"Exclude Spaces",lim:"Set Character Limit",rt:"Approx. reading time:",mn:"min",ld:"Letter Density",nold:"No characters found. Start typing to see letter density.",lx:"Limit exceeded:",mor:"See more",les:"See less",thm:"Toggle theme"},
pt:{hd:"Analise seu texto em tempo real.",xs:"Excluir espaços",lim:"Definir limite de caracteres",rt:"Tempo de leitura aprox.:",mn:"min",ld:"Densidade de letras",nold:"Nenhum caractere. Comece a digitar para ver a densidade de letras.",lx:"Limite excedido:",mor:"Ver mais",les:"Ver menos",thm:"Alternar tema"},
fr:{hd:"Analysez votre texte en temps réel.",xs:"Exclure les espaces",lim:"Définir une limite de caractères",rt:"Temps de lecture approx. :",mn:"min",ld:"Densité des lettres",nold:"Aucun caractère. Commencez à écrire pour voir la densité des lettres.",lx:"Limite dépassée :",mor:"Voir plus",les:"Voir moins",thm:"Changer de thème"},
de:{hd:"Analysiere deinen Text in Echtzeit.",xs:"Leerzeichen ausschließen",lim:"Zeichenlimit festlegen",rt:"Ca. Lesezeit:",mn:"Min.",ld:"Buchstabenhäufigkeit",nold:"Keine Zeichen. Beginne zu tippen, um die Buchstabenhäufigkeit zu sehen.",lx:"Limit überschritten:",mor:"Mehr anzeigen",les:"Weniger anzeigen",thm:"Design wechseln"},
zh:{hd:"实时分析你的文本。",xs:"不计空格",lim:"设置字符上限",rt:"预计阅读时间：",mn:"分钟",ld:"字母分布",nold:"暂无字符。开始输入即可查看字母分布。",lx:"已超出上限：",mor:"查看更多",les:"收起",thm:"切换主题"},
ja:{hd:"テキストをリアルタイムで分析。",xs:"スペースを除く",lim:"文字数の上限を設定",rt:"読了時間の目安：",mn:"分",ld:"文字の出現率",nold:"文字がありません。入力すると文字の出現率が表示されます。",lx:"上限を超えています：",mor:"もっと見る",les:"閉じる",thm:"テーマを切り替え"},
ru:{hd:"Анализируйте текст в реальном времени.",xs:"Без пробелов",lim:"Задать лимит символов",rt:"Время чтения ≈",mn:"мин.",ld:"Частота букв",nold:"Символов нет. Начните вводить текст, чтобы увидеть частоту букв.",lx:"Лимит превышен:",mor:"Показать ещё",les:"Свернуть",thm:"Сменить тему"},
ar:{hd:"حلّل نصك لحظيًا.",xs:"استبعاد المسافات",lim:"تحديد حد للأحرف",rt:"وقت القراءة التقريبي:",mn:"د",ld:"تكرار الأحرف",nold:"لا توجد أحرف. ابدأ الكتابة لرؤية تكرار الأحرف.",lx:"تم تجاوز الحد:",mor:"عرض المزيد",les:"عرض أقل",thm:"تبديل المظهر"}
});

DX.add({
it:{title:"Analizzatore di testo online: parole, caratteri e frasi — Daulex",desc:"Conta parole, caratteri e frasi e scopri subito il tempo di lettura del tuo testo. Gratis e senza registrazione.",h1:"Analizzatore di testo",sub:"Scrivi o incolla un testo e guarda le statistiche in tempo reale.",tin:"Scrivi o incolla il tuo testo",sw:"Parole",sc:"Caratteri",ss:"Frasi",sr:"Min. di lettura",tnote:"Tempo stimato a 200 parole al minuto. È un valore approssimativo.",ah:"A cosa serve?",ap:"Serve a controllare la lunghezza di articoli, descrizioni, post o compiti. Conta parole, caratteri inclusi gli spazi e frasi, e stima quanto tempo serve per leggere il testo. Tutto viene calcolato nel tuo browser.",hd:"Analizza il tuo testo in tempo reale.",xs:"Escludi gli spazi",lim:"Imposta un limite di caratteri",rt:"Tempo di lettura circa:",mn:"min",ld:"Densità delle lettere",nold:"Nessun carattere trovato. Inizia a scrivere per vedere la densità delle lettere.",lx:"Limite superato:",mor:"Mostra altro",les:"Mostra meno",thm:"Cambia tema"},
ko:{title:"온라인 텍스트 분석기: 단어, 글자, 문장 — Daulex",desc:"단어, 글자, 문장 수를 세고 텍스트의 읽는 시간을 바로 확인하세요. 무료, 가입 불필요.",h1:"텍스트 분석기",sub:"텍스트를 입력하거나 붙여 넣으면 통계를 실시간으로 볼 수 있습니다.",tin:"텍스트를 입력하거나 붙여 넣으세요",sw:"단어",sc:"글자",ss:"문장",sr:"읽는 시간(분)",tnote:"분당 200단어 기준으로 추정한 값이며 대략적인 수치입니다.",ah:"어디에 쓰나요?",ap:"기사, 설명, 게시물, 과제의 분량을 확인할 때 유용합니다. 단어, 공백을 포함한 글자, 문장 수를 세고 텍스트를 읽는 데 걸리는 시간을 추정합니다. 모든 계산은 브라우저에서 이루어집니다.",hd:"텍스트를 실시간으로 분석하세요.",xs:"공백 제외",lim:"글자 수 제한 설정",rt:"예상 읽는 시간:",mn:"분",ld:"글자 빈도",nold:"글자가 없습니다. 입력을 시작하면 글자 빈도가 표시됩니다.",lx:"제한 초과:",mor:"더 보기",les:"접기",thm:"테마 전환"},
he:{title:"מנתח טקסט אונליין: מילים, תווים ומשפטים — Daulex",desc:"ספרו מילים, תווים ומשפטים וגלו מיד את זמן הקריאה של הטקסט. חינם וללא הרשמה.",h1:"מנתח טקסט",sub:"הקלידו או הדביקו טקסט וראו את הנתונים בזמן אמת.",tin:"הקלידו או הדביקו את הטקסט",sw:"מילים",sc:"תווים",ss:"משפטים",sr:"דקות קריאה",tnote:"הערכה לפי 200 מילים בדקה. זהו ערך מקורב.",ah:"למה זה טוב?",ap:"מתאים לבדיקת האורך של מאמרים, תיאורים, פוסטים או עבודות. הכלי סופר מילים, תווים כולל רווחים ומשפטים, ומעריך כמה זמן לוקח לקרוא את הטקסט. כל החישובים מתבצעים בדפדפן שלכם.",hd:"נתחו את הטקסט שלכם בזמן אמת.",xs:"ללא רווחים",lim:"הגדרת מגבלת תווים",rt:"זמן קריאה משוער:",mn:"דק׳",ld:"שכיחות אותיות",nold:"לא נמצאו תווים. התחילו להקליד כדי לראות את שכיחות האותיות.",lx:"חרגתם מהמגבלה:",mor:"עוד",les:"פחות",thm:"החלפת ערכת נושא"}
});
