const articles={
password:{title:"Password Security",text:"وشەی نهێنییەکی بەهێز دروست بکە: درێژ بێت، بۆ هەر هەژمارێک جیاواز بێت و لە password manager ـێکی متمانەپێکراو بەکاری بهێنە. وشەی نهێنی لەگەڵ کەسێک هاوبەش مەکە."},
phishing:{title:"Phishing",text:"پێش کلیککردن لە لینک، ناونیشانی دۆمەین بە وردی بپشکنە. ئەگەر نامەکە داوای password، کۆد یان زانیاریی هەستیاری کرد و سەرچاوەکە دڵنیانەبوو، وەڵامی مەدە."},
malware:{title:"Malware",text:"Malware ناوی گشتی بۆ software ـی زیانبەخشە. سیستەم و ئەپەکان نوێ بکەرەوە، فایلە نەناسراوەکان مەکەرەوە و software لە سەرچاوەی متمانەپێکراو دابەزێنە."},
"2fa":{title:"Two-Factor Authentication",text:"2FA چینێکی زیادەی پاراستنە. تەنانەت ئەگەر password ـەکەت بدزدرێت، هێشتا هێرشکەر بە ئاسانیدا ناتوانێت بچێتە ناو هەژمارەکەت."},
network:{title:"Network Security",text:"لە Wi‑Fi ـی گشتی کاتی داخڵکردنی زانیاریی هەستیاری هۆشیار بە. Wi‑Fi ـی نەناسراو بە شێوەی خۆکار متمانەپێکراو مەزانە."},
social:{title:"Social Engineering",text:"Social Engineering پشت بە فێڵکردنی مرۆڤ دەبەستێت، نەک تەنها تەکنەلۆجیا. داواکارییە نائاساییەکان لە ڕێگای کەناڵێکی دووەم پشتڕاست بکەرەوە."},
account:{title:"٥ هەنگاو بۆ پاراستنی هەژمار",text:"1) password ـی جیاواز بەکاربهێنە. 2) 2FA چالاک بکە. 3) recovery information ـەکان بپارێزە. 4) ئاگاداری login ـە نامۆکان بە. 5) کۆدی پشتڕاستکردنەوە بە هیچ کەسێک مەدە."},
cyber:{title:"Cyber Security چییە؟",text:"Cyber Security کۆمەڵێک ڕێکار و تەکنیکە بۆ پاراستنی سیستەم، تۆڕ، ئەپلیکەیشن و زانیاری لە دەستپێگەیشتنی نادروست، تێکدان یان دزین."},
link:{title:"لینکی گومانلێکراو",text:"دۆمەینەکە بخوێنەوە، هەڵەی نووسین بپشکنە، ئاگاداری short links بە و هیچ فایلێک لە سەرچاوەی نەناسراو دابەزێنە. HTTPS بە تەنیا بەڵگەی متمانەی تەواو نییە."}
};
function openArticle(key){const a=articles[key];document.getElementById("modalContent").innerHTML=`<p class="eyebrow">CYBERN KURD</p><h2 class="modal-title">${a.title}</h2><p>${a.text}</p>`;document.getElementById("modal").showModal()}
function closeArticle(){document.getElementById("modal").close()}
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelector(".menu").addEventListener("click",()=>{const n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="78px";n.style.right="0";n.style.left="0";n.style.padding="20px";n.style.background="#03070d";n.style.flexDirection="column"});
