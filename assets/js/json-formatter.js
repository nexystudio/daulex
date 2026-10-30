DX.add({
es:{title:"JSON Formatter online gratis — Daulex",desc:"Valida, formatea y comprime JSON gratis en tu navegador. Sin registro y sin enviar tus datos a ningún servidor.",h1:"JSON Formatter",sub:"Pega tu JSON para validarlo, darle formato legible o comprimirlo.",jin:"Pega tu JSON",jout:"Resultado",fmt:"Formatear",min:"Comprimir",jok:"JSON válido.",jerr:"Error de sintaxis: ",jempty:"Pega primero un JSON.",ah:"¿Para qué sirve?",ap:"Un JSON Formatter ayuda a leer y revisar configuraciones, respuestas de API y estructuras de datos. Esta herramienta valida la sintaxis, aplica sangría de dos espacios o elimina los espacios sobrantes, y todo ocurre en tu navegador."},
en:{title:"Free online JSON Formatter — Daulex",desc:"Validate, format and minify JSON for free in your browser. No sign-up, and your data is never sent to a server.",h1:"JSON Formatter",sub:"Paste your JSON to validate it, make it readable or minify it.",jin:"Paste your JSON",jout:"Result",fmt:"Format",min:"Minify",jok:"Valid JSON.",jerr:"Syntax error: ",jempty:"Paste some JSON first.",ah:"What is it for?",ap:"A JSON formatter helps you read and review configs, API responses and data structures. This tool validates the syntax, applies two-space indentation or strips extra whitespace, and everything runs in your browser."}
});
(function(){
var $=function(i){return document.getElementById(i)},T=DX.t;
var S=['{"id":12345,"status":"success","data":{"user":{"name":"John Doe","email":"john.doe@example.com","roles":["admin","editor"],"profile":{"age":28,"location":"New York","active":true}}}}',
'{"sku":"DX-1042","name":"Wireless Mouse","price":24.99,"stock":120,"tags":["usb","ergonomic"],"dimensions":{"w":6,"h":11,"unit":"cm"}}',
'{"orderId":"A-9981","items":[{"sku":"DX-1042","qty":2},{"sku":"DX-2210","qty":1}],"total":71.5,"paid":true,"shipping":null}',
'{"theme":"dark","language":"es","notifications":{"email":true,"push":false},"shortcuts":["ctrl+s","ctrl+k"]}'];
var obj=null,ind=2,out="";
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function hl(s){return esc(s).replace(/("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+\.?\d*(?:[eE][+-]?\d+)?/g,function(m,a,c,k){return a?(c?'<i class="k">'+a+'</i>'+c:'<i class="s">'+a+'</i>'):k?'<i class="b">'+m+'</i>':'<i class="n">'+m+'</i>'})}
function walk(v,s){if(Array.isArray(v)){s.arrays++;v.forEach(function(x){walk(x,s)})}else if(v&&typeof v==="object"){s.objects++;Object.keys(v).forEach(function(k){s.keys++;walk(v[k],s)})}else s.values++}
function sz(b){return b<1024?b+" B":(b/1024).toFixed(1)+" KB"}
function srt(o){if(Array.isArray(o))return o.map(srt);if(o&&typeof o==="object"){var r={};Object.keys(o).sort().forEach(function(k){r[k]=srt(o[k])});return r}return o}
function span(c,t){var e=document.createElement("span");e.className=c;e.textContent=t;return e}
function node(k,v){
  var d=document.createElement("div");
  if(v!==null&&typeof v==="object"){
    var a=Array.isArray(v),ks=a?v.map(function(_,i){return i}):Object.keys(v);
    var dt=document.createElement("details");dt.open=true;
    var sm=document.createElement("summary");sm.appendChild(span("tk",k));
    sm.appendChild(document.createTextNode(a?" ["+ks.length+"]":" {"+ks.length+"}"));
    dt.appendChild(sm);ks.forEach(function(x){dt.appendChild(node(x,v[x]))});d.appendChild(dt);
  }else{
    d.className="leaf";d.appendChild(span("tk",k));d.appendChild(document.createTextNode(" : "));
    d.appendChild(span(typeof v==="string"?"s":typeof v==="number"?"n":"b",JSON.stringify(v)));
  }
  return d;
}
function update(){
  var v=$("jIn").value,has=v.trim().length>0,err="",vc=$("jVal"),pill=$("jPill");
  obj=null;out="";
  if(has){try{obj=JSON.parse(v)}catch(e){err=e.message}}
  var ok=has&&!err;
  pill.hidden=!has;pill.className="pill "+(ok?"ok":"bad");
  var title=ok?T("jok").replace(/[.。]$/,""):T("ij");
  pill.textContent=title;
  vc.className="vcard "+(has?(ok?"ok":"bad"):"");
  vc.innerHTML="";
  if(has){
    var i=document.createElement("span");i.className="vi";i.textContent=ok?"✓":"!";
    var w=document.createElement("div"),b=document.createElement("b"),s=document.createElement("small");
    b.textContent=title;s.textContent=ok?T("ne"):err;w.appendChild(b);w.appendChild(s);vc.appendChild(i);vc.appendChild(w);
  }
  var st={keys:0,values:0,arrays:0,objects:0};if(ok)walk(obj,st);
  ["keys","values","arrays","objects"].forEach(function(k){$("st_"+k).textContent=ok?st[k]:"–"});
  $("st_size").textContent=has?sz(new Blob([v]).size):"–";
  var code=$("jOut"),tr=$("jTree");tr.innerHTML="";code.innerHTML="";
  if(ok){
    out=JSON.stringify(obj,null,ind);
    var n=out.split("\n").length,nums=[];for(var j=1;j<=n;j++)nums.push(j);
    code.innerHTML='<span class="nums">'+nums.join("\n")+'</span><code>'+hl(out)+'</code>';
    tr.appendChild(node(Array.isArray(obj)?"array":typeof obj==="object"&&obj?"object":"value",obj));
  }
}
function load(i){$("jIn").value=JSON.stringify(JSON.parse(S[i]),null,2);update()}
$("bF").onclick=function(){ind=2;update()};
$("bM").onclick=function(){ind=0;update()};
$("bV").onclick=function(){update();var c=$("jVal");c.classList.remove("flash");void c.offsetWidth;c.classList.add("flash")};
$("bC").onclick=function(){DX.copy(out)};
$("bD").onclick=function(){
  if(!out){DX.toast(T("nores"));return}
  var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([out],{type:"application/json"}));a.download="daulex.json";
  document.body.appendChild(a);a.click();a.remove();
};
$("qC").onclick=function(){$("jIn").value="";update()};
$("qS").onclick=function(){if(obj!==null){$("jIn").value=JSON.stringify(srt(obj),null,2);update()}};
$("qH").onclick=function(){DX.copy(location.origin+location.pathname+"#j="+encodeURIComponent($("jIn").value))};
$("qP").onclick=function(){
  if(navigator.clipboard&&navigator.clipboard.readText){navigator.clipboard.readText().then(function(x){$("jIn").value=x;update()},function(){DX.toast(T("nopaste"))})}
  else DX.toast(T("nopaste"));
};
document.querySelectorAll("[data-s]").forEach(function(b){b.onclick=function(){load(+b.getAttribute("data-s"))}});
var hs=location.hash;if(hs.indexOf("#j=")===0){try{$("jIn").value=decodeURIComponent(hs.slice(3))}catch(e){}}
$("jIn").addEventListener("input",update);
DX.onLang(function(){document.querySelectorAll("[data-i18n-al]").forEach(function(e){e.setAttribute("aria-label",T(e.getAttribute("data-i18n-al")))});update()});
if(!$("jIn").value)load(0);else update();
})();
DX.add({
pt:{title:"JSON Formatter online grátis — Daulex",desc:"Valide, formate e comprima JSON grátis no navegador. Sem cadastro e sem enviar seus dados a nenhum servidor.",h1:"JSON Formatter",sub:"Cole seu JSON para validá-lo, deixá-lo legível ou comprimi-lo.",jin:"Cole seu JSON",jout:"Resultado",fmt:"Formatar",min:"Comprimir",jok:"JSON válido.",jerr:"Erro de sintaxe: ",jempty:"Cole um JSON primeiro.",ah:"Para que serve?",ap:"Um JSON Formatter ajuda a ler e revisar configurações, respostas de API e estruturas de dados. Esta ferramenta valida a sintaxe, aplica indentação de dois espaços ou remove espaços extras, e tudo acontece no seu navegador."},
fr:{title:"JSON Formatter en ligne gratuit — Daulex",desc:"Validez, formatez et compressez du JSON gratuitement dans votre navigateur. Sans inscription, et vos données ne sont envoyées à aucun serveur.",h1:"JSON Formatter",sub:"Collez votre JSON pour le valider, le rendre lisible ou le compresser.",jin:"Collez votre JSON",jout:"Résultat",fmt:"Formater",min:"Compresser",jok:"JSON valide.",jerr:"Erreur de syntaxe : ",jempty:"Collez d’abord un JSON.",ah:"À quoi ça sert ?",ap:"Un JSON Formatter aide à lire et vérifier des configurations, des réponses d’API et des structures de données. Cet outil valide la syntaxe, applique une indentation de deux espaces ou supprime les espaces superflus, le tout dans votre navigateur."},
de:{title:"Kostenloser JSON Formatter online — Daulex",desc:"JSON kostenlos im Browser prüfen, formatieren und komprimieren. Ohne Anmeldung, deine Daten werden an keinen Server gesendet.",h1:"JSON Formatter",sub:"Füge dein JSON ein, um es zu prüfen, lesbar zu machen oder zu komprimieren.",jin:"JSON einfügen",jout:"Ergebnis",fmt:"Formatieren",min:"Komprimieren",jok:"Gültiges JSON.",jerr:"Syntaxfehler: ",jempty:"Füge zuerst ein JSON ein.",ah:"Wofür ist das gut?",ap:"Ein JSON Formatter hilft beim Lesen und Prüfen von Konfigurationen, API-Antworten und Datenstrukturen. Dieses Tool prüft die Syntax, rückt mit zwei Leerzeichen ein oder entfernt überflüssige Leerzeichen – alles in deinem Browser."},
zh:{title:"免费在线 JSON 格式化工具 — Daulex",desc:"在浏览器中免费验证、格式化和压缩 JSON。无需注册，数据不会发送到任何服务器。",h1:"JSON 格式化",sub:"粘贴 JSON，即可验证、美化或压缩。",jin:"粘贴 JSON",jout:"结果",fmt:"格式化",min:"压缩",jok:"JSON 有效。",jerr:"语法错误：",jempty:"请先粘贴 JSON。",ah:"有什么用？",ap:"JSON 格式化工具可帮助你阅读和检查配置、API 响应和数据结构。本工具会验证语法，使用两个空格缩进或去除多余空白，所有操作都在你的浏览器中完成。"},
ja:{title:"無料オンラインJSONフォーマッター — Daulex",desc:"ブラウザ上でJSONを無料で検証、整形、圧縮。登録不要で、データはサーバーに送信されません。",h1:"JSONフォーマッター",sub:"JSONを貼り付けて、検証、整形、圧縮ができます。",jin:"JSONを貼り付け",jout:"結果",fmt:"整形",min:"圧縮",jok:"有効なJSONです。",jerr:"構文エラー：",jempty:"先にJSONを貼り付けてください。",ah:"何に使えますか？",ap:"JSONフォーマッターは、設定ファイル、APIレスポンス、データ構造の確認に役立ちます。このツールは構文を検証し、スペース2つでインデントするか余分な空白を削除します。処理はすべてブラウザ内で行われます。"},
ru:{title:"Бесплатный онлайн JSON Formatter — Daulex",desc:"Проверяйте, форматируйте и сжимайте JSON бесплатно в браузере. Без регистрации, данные не отправляются на сервер.",h1:"JSON Formatter",sub:"Вставьте JSON, чтобы проверить его, сделать читаемым или сжать.",jin:"Вставьте JSON",jout:"Результат",fmt:"Форматировать",min:"Сжать",jok:"JSON корректен.",jerr:"Синтаксическая ошибка: ",jempty:"Сначала вставьте JSON.",ah:"Для чего это нужно?",ap:"JSON Formatter помогает читать и проверять конфигурации, ответы API и структуры данных. Инструмент проверяет синтаксис, добавляет отступ в два пробела или убирает лишние пробелы, и всё это происходит в вашем браузере."},
ar:{title:"منسّق JSON مجاني على الإنترنت — Daulex",desc:"تحقق من JSON ونسّقه واضغطه مجانًا في متصفحك. بدون تسجيل، ولا تُرسل بياناتك إلى أي خادم.",h1:"منسّق JSON",sub:"الصق JSON للتحقق منه أو جعله مقروءًا أو ضغطه.",jin:"الصق JSON",jout:"النتيجة",fmt:"تنسيق",min:"ضغط",jok:"JSON صالح.",jerr:"خطأ في الصياغة: ",jempty:"الصق JSON أولًا.",ah:"ما فائدتها؟",ap:"يساعدك منسّق JSON على قراءة ومراجعة ملفات الإعداد واستجابات API وهياكل البيانات. تتحقق هذه الأداة من الصياغة وتضيف مسافة بادئة من مسافتين أو تزيل المسافات الزائدة، ويتم كل شيء داخل متصفحك."}
});
DX.add({
es:{ed:"Editor",tv:"Vista de árbol",ij:"JSON no válido",ne:"No se encontraron errores",stt:"Estadísticas",ky:"Claves",vl:"Valores",ar:"Listas",ob:"Objetos",sz:"Tamaño",val:"Validar",spl:"Ejemplos de datos",sp1:"Perfil de usuario",sp2:"Datos de producto",sp3:"Detalle de pedido",sp4:"Configuración",qa:"Acciones rápidas",pst:"Pegar",srt:"Ordenar claves",shr:"Compartir",dl:"Descargar",nopaste:"No se pudo pegar",jin2:"Entrada JSON",vtl:"Validación"},
en:{ed:"Editor",tv:"Tree View",ij:"Invalid JSON",ne:"No errors found",stt:"Statistics",ky:"Keys",vl:"Values",ar:"Arrays",ob:"Objects",sz:"Size",val:"Validate",spl:"Sample Payloads",sp1:"User Profile",sp2:"Product Data",sp3:"Order Details",sp4:"Settings",qa:"Quick Actions",pst:"Paste",srt:"Sort Keys",shr:"Share",dl:"Download",nopaste:"Couldn’t paste",jin2:"JSON Input",vtl:"Validation"},
pt:{ed:"Editor",tv:"Visualização em árvore",ij:"JSON inválido",ne:"Nenhum erro encontrado",stt:"Estatísticas",ky:"Chaves",vl:"Valores",ar:"Arrays",ob:"Objetos",sz:"Tamanho",val:"Validar",spl:"Exemplos de dados",sp1:"Perfil de usuário",sp2:"Dados de produto",sp3:"Detalhes do pedido",sp4:"Configurações",qa:"Ações rápidas",pst:"Colar",srt:"Ordenar chaves",shr:"Compartilhar",dl:"Baixar",nopaste:"Não foi possível colar",jin2:"Entrada JSON",vtl:"Validação"},
fr:{ed:"Éditeur",tv:"Vue en arbre",ij:"JSON invalide",ne:"Aucune erreur trouvée",stt:"Statistiques",ky:"Clés",vl:"Valeurs",ar:"Tableaux",ob:"Objets",sz:"Taille",val:"Valider",spl:"Exemples de données",sp1:"Profil utilisateur",sp2:"Données produit",sp3:"Détails de commande",sp4:"Paramètres",qa:"Actions rapides",pst:"Coller",srt:"Trier les clés",shr:"Partager",dl:"Télécharger",nopaste:"Collage impossible",jin2:"Entrée JSON",vtl:"Validation"},
de:{ed:"Editor",tv:"Baumansicht",ij:"Ungültiges JSON",ne:"Keine Fehler gefunden",stt:"Statistik",ky:"Schlüssel",vl:"Werte",ar:"Arrays",ob:"Objekte",sz:"Größe",val:"Prüfen",spl:"Beispieldaten",sp1:"Benutzerprofil",sp2:"Produktdaten",sp3:"Bestelldetails",sp4:"Einstellungen",qa:"Schnellaktionen",pst:"Einfügen",srt:"Schlüssel sortieren",shr:"Teilen",dl:"Herunterladen",nopaste:"Einfügen nicht möglich",jin2:"JSON-Eingabe",vtl:"Prüfung"},
zh:{ed:"编辑器",tv:"树形视图",ij:"JSON 无效",ne:"未发现错误",stt:"统计",ky:"键",vl:"值",ar:"数组",ob:"对象",sz:"大小",val:"验证",spl:"示例数据",sp1:"用户资料",sp2:"产品数据",sp3:"订单详情",sp4:"设置",qa:"快捷操作",pst:"粘贴",srt:"键排序",shr:"分享",dl:"下载",nopaste:"无法粘贴",jin2:"JSON 输入",vtl:"验证"},
ja:{ed:"エディター",tv:"ツリービュー",ij:"無効なJSON",ne:"エラーはありません",stt:"統計",ky:"キー",vl:"値",ar:"配列",ob:"オブジェクト",sz:"サイズ",val:"検証",spl:"サンプルデータ",sp1:"ユーザープロフィール",sp2:"商品データ",sp3:"注文詳細",sp4:"設定",qa:"クイック操作",pst:"貼り付け",srt:"キーを並べ替え",shr:"共有",dl:"ダウンロード",nopaste:"貼り付けできませんでした",jin2:"JSON入力",vtl:"検証"},
ru:{ed:"Редактор",tv:"Дерево",ij:"Недопустимый JSON",ne:"Ошибок не найдено",stt:"Статистика",ky:"Ключи",vl:"Значения",ar:"Массивы",ob:"Объекты",sz:"Размер",val:"Проверить",spl:"Примеры данных",sp1:"Профиль пользователя",sp2:"Данные товара",sp3:"Детали заказа",sp4:"Настройки",qa:"Быстрые действия",pst:"Вставить",srt:"Сортировать ключи",shr:"Поделиться",dl:"Скачать",nopaste:"Не удалось вставить",jin2:"Ввод JSON",vtl:"Проверка"},
ar:{ed:"المحرر",tv:"عرض شجري",ij:"JSON غير صالح",ne:"لا توجد أخطاء",stt:"إحصاءات",ky:"المفاتيح",vl:"القيم",ar:"المصفوفات",ob:"الكائنات",sz:"الحجم",val:"تحقق",spl:"نماذج بيانات",sp1:"ملف المستخدم",sp2:"بيانات المنتج",sp3:"تفاصيل الطلب",sp4:"الإعدادات",qa:"إجراءات سريعة",pst:"لصق",srt:"ترتيب المفاتيح",shr:"مشاركة",dl:"تنزيل",nopaste:"تعذّر اللصق",jin2:"إدخال JSON",vtl:"التحقق"}
});

DX.add({
it:{title:"JSON Formatter online gratis — Daulex",desc:"Convalida, formatta e comprimi JSON gratis nel tuo browser. Senza registrazione e senza inviare i tuoi dati a nessun server.",h1:"JSON Formatter",sub:"Incolla il tuo JSON per convalidarlo, renderlo leggibile o comprimerlo.",jin:"Incolla il tuo JSON",jout:"Risultato",fmt:"Formatta",min:"Comprimi",jok:"JSON valido.",jerr:"Errore di sintassi: ",jempty:"Incolla prima un JSON.",ah:"A cosa serve?",ap:"Un JSON Formatter aiuta a leggere e verificare configurazioni, risposte di API e strutture di dati. Questo strumento convalida la sintassi, applica un rientro di due spazi o elimina gli spazi superflui, e tutto avviene nel tuo browser.",ed:"Editor",tv:"Vista ad albero",ij:"JSON non valido",ne:"Nessun errore trovato",stt:"Statistiche",ky:"Chiavi",vl:"Valori",ar:"Array",ob:"Oggetti",sz:"Dimensione",val:"Convalida",spl:"Esempi di payload",sp1:"Profilo utente",sp2:"Dati prodotto",sp3:"Dettagli ordine",sp4:"Impostazioni",qa:"Azioni rapide",pst:"Incolla",srt:"Ordina chiavi",shr:"Condividi",dl:"Scarica",nopaste:"Impossibile incollare",jin2:"Input JSON",vtl:"Convalida"},
ko:{title:"무료 온라인 JSON 포맷터 — Daulex",desc:"브라우저에서 JSON을 무료로 검증, 정리, 압축하세요. 가입이 필요 없으며 데이터는 서버로 전송되지 않습니다.",h1:"JSON 포맷터",sub:"JSON을 붙여 넣어 검증하고, 읽기 쉽게 정리하거나 압축하세요.",jin:"JSON 붙여넣기",jout:"결과",fmt:"정리",min:"압축",jok:"올바른 JSON입니다.",jerr:"구문 오류: ",jempty:"먼저 JSON을 붙여 넣으세요.",ah:"어디에 쓰나요?",ap:"JSON 포맷터는 설정 파일, API 응답, 데이터 구조를 읽고 점검하는 데 도움이 됩니다. 이 도구는 구문을 검증하고, 공백 두 칸으로 들여쓰기하거나 불필요한 공백을 제거하며, 모든 처리는 브라우저에서 이루어집니다.",ed:"편집기",tv:"트리 보기",ij:"잘못된 JSON",ne:"오류가 없습니다",stt:"통계",ky:"키",vl:"값",ar:"배열",ob:"객체",sz:"크기",val:"검증",spl:"샘플 데이터",sp1:"사용자 프로필",sp2:"상품 데이터",sp3:"주문 상세",sp4:"설정",qa:"빠른 작업",pst:"붙여넣기",srt:"키 정렬",shr:"공유",dl:"다운로드",nopaste:"붙여넣을 수 없습니다",jin2:"JSON 입력",vtl:"검증"},
he:{title:"מעצב JSON אונליין בחינם — Daulex",desc:"אמתו, עצבו וכווצו JSON בחינם בדפדפן. ללא הרשמה, והנתונים שלכם לא נשלחים לאף שרת.",h1:"מעצב JSON",sub:"הדביקו את ה-JSON כדי לאמת אותו, להפוך אותו לקריא או לכווץ אותו.",jin:"הדביקו את ה-JSON",jout:"תוצאה",fmt:"עצב",min:"כווץ",jok:"JSON תקין.",jerr:"שגיאת תחביר: ",jempty:"הדביקו קודם JSON.",ah:"למה זה טוב?",ap:"מעצב JSON עוזר לקרוא ולבדוק קובצי הגדרות, תגובות API ומבני נתונים. הכלי מאמת את התחביר, מוסיף הזחה של שני רווחים או מסיר רווחים מיותרים, והכול מתבצע בדפדפן שלכם.",ed:"עורך",tv:"תצוגת עץ",ij:"JSON לא תקין",ne:"לא נמצאו שגיאות",stt:"סטטיסטיקה",ky:"מפתחות",vl:"ערכים",ar:"מערכים",ob:"אובייקטים",sz:"גודל",val:"אמת",spl:"דוגמאות נתונים",sp1:"פרופיל משתמש",sp2:"נתוני מוצר",sp3:"פרטי הזמנה",sp4:"הגדרות",qa:"פעולות מהירות",pst:"הדבק",srt:"מיין מפתחות",shr:"שתף",dl:"הורד",nopaste:"לא ניתן להדביק",jin2:"קלט JSON",vtl:"אימות"}
});
