'use strict';
/* words.js – NỘI DUNG bài học: CÁC THÁNG TRONG NĂM (Months of the year)
   Mẫu câu: When’s your sports day? – It’s in + month.
   Muốn sửa: chỉnh MONTHS, PATTERNS, hoặc hình lịch cal(). File index.html không cần sửa. */
const svg=b=>`<svg class="pic" viewBox="0 0 120 120" role="img" aria-hidden="true">${b}</svg>`,emo=e=>`<div class="emo">${e}</div>`;
const MONTHS=[
 {w:'January',vi:'tháng 1'},{w:'February',vi:'tháng 2'},{w:'March',vi:'tháng 3'},{w:'April',vi:'tháng 4'},
 {w:'May',vi:'tháng 5'},{w:'June',vi:'tháng 6'},{w:'July',vi:'tháng 7'},{w:'August',vi:'tháng 8'},
 {w:'September',vi:'tháng 9'},{w:'October',vi:'tháng 10'},{w:'November',vi:'tháng 11'},{w:'December',vi:'tháng 12'}
];
const PATTERNS={q:'When’s your sports day?',a:m=>`It’s in ${m}.`};
/* Hình tờ lịch của một tháng */
const cal=m=>{const n=MONTHS.indexOf(m)+1,f=m.w.length>7?15:m.w.length>5?18:22,F='font-family="Baloo 2,Nunito,Segoe UI,sans-serif"';
 return svg(`<rect x="10" y="12" width="100" height="100" rx="14" fill="#fff" stroke="#c9bfe0" stroke-width="4"/><path d="M10 26Q10 12 24 12H96Q110 12 110 26V46H10Z" fill="#e0483e"/><circle cx="34" cy="12" r="5" fill="#7a3fb0"/><circle cx="86" cy="12" r="5" fill="#7a3fb0"/><text x="60" y="38" text-anchor="middle" font-size="${f}" font-weight="800" fill="#fff" ${F}>${m.w}</text><text x="60" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#2a1b4a" ${F}>${m.vi}</text>`)};
