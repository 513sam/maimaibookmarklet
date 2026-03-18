javascript:(function () {
    fetch('https://api.counterapi.dev/v1/513sam-maimai/bookmarklet/up').catch(function(){});
    fetch('https://hits.sh/513sam.github.io/maimaibookmarklet.json').catch(function(){});
    const tapCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const tapPerfect = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const tapGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const tapGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const tapMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const holdCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const holdPerfect = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const holdGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const holdGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const holdMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const slideCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const slidePerfect = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const slideGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const slideGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const slideMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const touchCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const touchPerfect = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const touchGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const touchGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const touchMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const breakCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const breakPerfect = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const breakGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const breakGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const breakMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const songName = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.basic_block.m_5.m_t_17.m_r_60.p_5.p_l_10.f_13.break').lastChild.textContent.trim();
    const level = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.basic_block.m_5.m_t_17.m_r_60.p_5.p_l_10.f_13.break > div.w_80.f_r > div')?.textContent.trim() || null;
    const jacketImg = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.p_r.f_0 > img.music_img.m_5.m_b_17.m_r_0.f_l')?.src || null;
    const trackCount = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span.red.f_b.v_b')?.textContent.trim() || null;
    const realTime = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span:nth-child(2)')?.textContent.trim() || null;
    const imgElement = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.p_r.f_0 > img.playlog_music_kind_icon')?.src || null;
    const musicKind = imgElement ? (imgElement === 'https://maimaidx-eng.com/maimai-mobile/img/music_standard.png' ? 'standard' : imgElement === 'https://maimaidx-eng.com/maimai-mobile/img/music_dx.png' ? 'dx' : null) : null;
    const diffImg = document.querySelector('img.playlog_diff.v_b')?.src || null;
    const difficulty = diffImg ? diffImg.match(/diff_([a-z]+)\.png$/i)?.[1] : null;
    const divElement = document.querySelector('div.playlog_achievement_txt.t_r');
    if (!divElement) { console.error("달성률 요소를 찾을 수 없습니다."); return; }
    const text = divElement.textContent.trim();
    const match = text.match(/(\d+).(\d+)%/);
    if (!match) { console.error("달성률 파싱 실패:", text); return; }
    const finalRate = parseFloat(`${match[1]}.${match[2]}`);

    function calcAllSolutions(tap, hold, slide, touch, breakCounts, finalRate) {
        const weights = { TAP: 1, HOLD: 2, SLIDE: 3, TOUCH: 1, BREAK: 5 };
        const W = (tap.CRITICAL + tap.PERFECT + tap.GREAT + tap.GOOD + tap.MISS) * weights.TAP +
                  (hold.CRITICAL + hold.PERFECT + hold.GREAT + hold.GOOD + hold.MISS) * weights.HOLD +
                  (slide.CRITICAL + slide.PERFECT + slide.GREAT + slide.GOOD + slide.MISS) * weights.SLIDE +
                  (touch.CRITICAL + touch.PERFECT + touch.GREAT + touch.GOOD + touch.MISS) * weights.TOUCH +
                  (breakCounts.CRITICAL + breakCounts.PERFECT + breakCounts.GREAT + breakCounts.GOOD + breakCounts.MISS) * weights.BREAK;
        function noteScore(counts, weight) {
            return (counts.CRITICAL + counts.PERFECT) * weight + counts.GREAT * weight * 0.8 + counts.GOOD * weight * (weight === 5 ? 0.4 : 0.5);
        }
        let baseScore = noteScore(tap, weights.TAP) + noteScore(hold, weights.HOLD) + noteScore(slide, weights.SLIDE) + noteScore(touch, weights.TOUCH);
        const C = breakCounts.CRITICAL, P = breakCounts.PERFECT, G = breakCounts.GREAT, D = breakCounts.GOOD, M = breakCounts.MISS;
        const B = C + P + G + D + M;
        let solutions = [];
        for (let x = 0; x <= P; x++) {
            const y = P - x;
            for (let g80 = 0; g80 <= G; g80++) {
                for (let g60 = 0; g60 <= G - g80; g60++) {
                    const g50 = G - g80 - g60;
                    const Sg = 0.8 * g80 + 0.6 * g60 + 0.5 * g50;
                    const breakScore = (C + P) * 5 + 0.4 * D * 5 + 5 * Sg;
                    const noteScoreTotal = baseScore + breakScore;
                    const notePercent = (100 * noteScoreTotal) / W;
                    const bonus = (C + 0.75 * x + 0.5 * y + 0.4 * G + 0.3 * D) / B;
                    const bonusPercent = bonus * 1.0;
                    const total = notePercent + bonusPercent;
                    let shown = Math.floor(total * 10000) / 10000;
                    if (Math.abs(shown - finalRate) < 0.00005) {
                        solutions.push({
                            "75%Perfect": x, "50%Perfect": y, "80%Great": g80, "60%Great": g60, "50%Great": g50,
                            notePercent: parseFloat(notePercent.toFixed(4)), bonusPercent: parseFloat(bonusPercent.toFixed(4)),
                            total: parseFloat(total.toFixed(4))
                        });
                    }
                }
            }
        }
        return solutions;
    }

    const tap = { CRITICAL: tapCrit, PERFECT: tapPerfect, GREAT: tapGreat, GOOD: tapGood, MISS: tapMiss };
    const hold = { CRITICAL: holdCrit, PERFECT: holdPerfect, GREAT: holdGreat, GOOD: holdGood, MISS: holdMiss };
    const slide = { CRITICAL: slideCrit, PERFECT: slidePerfect, GREAT: slideGreat, GOOD: slideGood, MISS: slideMiss };
    const touch = { CRITICAL: touchCrit, PERFECT: touchPerfect, GREAT: touchGreat, GOOD: touchGood, MISS: touchMiss };
    const breaks = { CRITICAL: breakCrit, PERFECT: breakPerfect, GREAT: breakGreat, GOOD: breakGood, MISS: breakMiss };
    const results = calcAllSolutions(tap, hold, slide, touch, breaks, finalRate);

    const data = {
        songName, level, jacketImg, trackCount, realTime, musicKind, difficulty, finalRate,
        notes: { tap, hold, slide, touch, breaks },
        solutions: results.length > 0 ? results[0] : null
    };
    localStorage.setItem('maimaiResultData', JSON.stringify(data));

    const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>마이마이 결과 분석기</title>
<style>
    *{box-sizing:border-box;}
    body{font-family:'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 50%,#16213e 100%);color:#eee;margin:0;padding:20px;overflow-x:auto;}
    .container{max-width:1200px;margin:0 auto;padding:20px;background:rgba(30,30,40,0.95);border-radius:15px;box-shadow:0 20px 40px rgba(0,0,0,0.5);backdrop-filter:blur(10px);}
    .header{position:relative;text-align:center;margin-bottom:30px;}
    .header img{width:100%;max-height:280px;object-fit:cover;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.7);}
    .header .title{position:absolute;bottom:15px;left:15px;right:15px;font-size:2.5rem;font-weight:900;color:#fff;-webkit-text-stroke:2px #000;text-shadow:0 0 8px #000;}
    .header .info{position:absolute;top:15px;right:15px;text-align:right;font-size:1.1rem;background:rgba(0,0,0,0.8);padding:12px 15px;border-radius:10px;}
    .header .info div{margin:6px 0;}
    .diff-box{padding:8px 16px;border-radius:8px;display:inline-block;font-weight:900;font-size:1.2rem;text-shadow:1px 1px 2px #000;}
    .basic{background:linear-gradient(45deg,#4caf50,#45a049);color:#fff;}
    .advanced{background:linear-gradient(45deg,#ff9800,#f57c00);color:#000;}
    .expert{background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;}
    .master{background:linear-gradient(45deg,#9c27b0,#7b1fa2);color:#fff;}
    .reMaster{background:linear-gradient(45deg,#e1bee7,#ce93d8);color:#000;}
    table{border-collapse:collapse;width:100%;margin-top:25px;border:4px solid #ffeb3b;box-shadow:0 10px 30px rgba(255,235,59,0.3);}
    th,td{border:2px solid #ffeb3b;padding:8px 4px;text-align:center;position:relative;font-weight:600;font-size:1rem;vertical-align:middle;}
    th{background:linear-gradient(45deg,#333,#555);color:#ffeb3b;font-size:1rem;}
    .crit{background:linear-gradient(45deg,#fff9c4,#fff176);color:#000;font-weight:900;}
    .perf{background:linear-gradient(45deg,#ffeb3b,#fdd835);color:#000;font-weight:900;}
    .great{background:linear-gradient(45deg,#f8bbd9,#f48fb1);color:#000;}
    .good{background:linear-gradient(45deg,#a5d6a7,#81c784);color:#000;}
    .miss{background:linear-gradient(45deg,#757575,#616161);color:#fff;}
    .total{background:linear-gradient(45deg,#424242,#212121);color:#ffeb3b;font-weight:900;}
    .count{font-size:1.6rem;font-weight:900;line-height:1;display:block;}
    .loss{font-size:0.7rem;display:block;margin-top:2px;font-weight:700;opacity:0.9;}
    .total .loss{font-size:0.95rem;}
    .great .loss,.good .loss,.miss .loss{color:#c2185b;}
    .arrow{cursor:pointer;font-size:0.8rem;margin:0 1px;color:#ff5722;transition:all 0.2s;opacity:0.8;}
    .arrow:hover{color:#ffeb3b;opacity:1;transform:scale(1.3);}
    .resetBtn{display:block;margin:20px auto 0;padding:12px 30px;background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;border:none;border-radius:25px;cursor:pointer;font-weight:900;font-size:1.2rem;transition:all 0.3s;box-shadow:0 5px 15px rgba(244,67,54,0.4);}
    .resetBtn:hover{background:linear-gradient(45deg,#ff5722,#e64a19);transform:translateY(-2px);}
    .score-row{display:flex;align-items:center;justify-content:center;gap:30px;margin:30px 0 0;}
    .finalRate{font-size:3.5rem;font-weight:900;background:linear-gradient(45deg,#ffeb3b,#ff9800);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;flex-shrink:0;}
    .dx-box{background:rgba(255,255,255,0.07);border:2px solid rgba(100,200,255,0.4);border-radius:14px;padding:12px 20px;text-align:center;min-width:220px;}
    .dx-title{font-size:0.75rem;color:#80cfff;font-weight:700;letter-spacing:1px;margin-bottom:4px;opacity:0.85;}
    .dx-score-val{font-size:1.5rem;font-weight:900;color:#e0f4ff;line-height:1.1;}
    .dx-star{font-size:2rem;font-weight:900;margin-top:5px;color:#ffe066;text-shadow:0 0 8px rgba(255,224,102,0.7);letter-spacing:2px;}
    .dx-next{font-size:0.8rem;color:#aaa;margin-top:4px;}
    .bk-sub{display:block;padding:4px 2px;border-bottom:1px solid rgba(255,235,59,0.25);text-align:center;}
    .bk-sub:last-child{border-bottom:none;}
    .bk-lbl{font-size:0.6rem;opacity:0.65;display:block;line-height:1.2;}
    .bk-count{font-size:1.3rem;font-weight:900;line-height:1;display:block;}
    .bk-loss{font-size:0.65rem;display:block;margin-top:1px;font-weight:700;color:#c2185b;}
    .bk-cell{vertical-align:middle;}
    .footer{margin-top:24px;text-align:center;font-size:0.75rem;color:#555;letter-spacing:0.5px;line-height:1.8;}
    .footer a{color:#555;text-decoration:underline;}
    .footer a:hover{color:#888;}
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <img id="jacket" src="" alt="Jacket">
        <div class="title" id="songName"></div>
        <div class="info">
            <div id="track"></div>
            <div id="time"></div>
            <div id="kind"></div>
            <div><span id="level" class="diff-box"></span></div>
        </div>
    </div>
    <table id="scoreTable">
        <thead>
            <tr>
                <th>노트종류</th>
                <th class="crit">CRITICAL<br>PERFECT</th>
                <th class="perf">PERFECT</th>
                <th class="great">GREAT</th>
                <th class="good">GOOD</th>
                <th class="miss">MISS</th>
                <th class="total">TOTAL LOSS</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>TAP</td><td class="val crit" data-type="tap" data-j="CRITICAL"></td><td class="val perf" data-type="tap" data-j="PERFECT"></td><td class="val great" data-type="tap" data-j="GREAT"></td><td class="val good" data-type="tap" data-j="GOOD"></td><td class="val miss" data-type="tap" data-j="MISS"></td><td class="val total" id="tap_total"></td></tr>
            <tr><td>HOLD</td><td class="val crit" data-type="hold" data-j="CRITICAL"></td><td class="val perf" data-type="hold" data-j="PERFECT"></td><td class="val great" data-type="hold" data-j="GREAT"></td><td class="val good" data-type="hold" data-j="GOOD"></td><td class="val miss" data-type="hold" data-j="MISS"></td><td class="val total" id="hold_total"></td></tr>
            <tr><td>SLIDE</td><td class="val crit" data-type="slide" data-j="CRITICAL"></td><td class="val perf" data-type="slide" data-j="PERFECT"></td><td class="val great" data-type="slide" data-j="GREAT"></td><td class="val good" data-type="slide" data-j="GOOD"></td><td class="val miss" data-type="slide" data-j="MISS"></td><td class="val total" id="slide_total"></td></tr>
            <tr><td>TOUCH</td><td class="val crit" data-type="touch" data-j="CRITICAL"></td><td class="val perf" data-type="touch" data-j="PERFECT"></td><td class="val great" data-type="touch" data-j="GREAT"></td><td class="val good" data-type="touch" data-j="GOOD"></td><td class="val miss" data-type="touch" data-j="MISS"></td><td class="val total" id="touch_total"></td></tr>
            <tr>
                <td>BREAK</td>
                <td class="crit bk-cell" id="break_crit"></td>
                <td class="perf" style="padding:0;">
                    <div class="bk-sub" id="break75p"></div>
                    <div class="bk-sub" id="break50p"></div>
                </td>
                <td class="great" style="padding:0;">
                    <div class="bk-sub" id="break80g"></div>
                    <div class="bk-sub" id="break60g"></div>
                    <div class="bk-sub" id="break50g"></div>
                </td>
                <td class="good bk-cell" id="break_good"></td>
                <td class="miss bk-cell" id="break_miss"></td>
                <td class="val total" id="break_total"></td>
            </tr>
            <tr><td class="total"><b>TOTAL</b></td>
                <td class="val total crit" id="total_cp"></td>
                <td class="val total perf" id="total_p"></td>
                <td class="val total great" id="total_g"></td>
                <td class="val total good" id="total_go"></td>
                <td class="val total miss" id="total_m"></td>
                <td class="val total" id="grand_total"></td>
            </tr>
        </tbody>
    </table>
    <div class="score-row">
        <div class="finalRate" id="finalRate">101.0000%</div>
        <div class="dx-box">
            <div class="dx-title">DX SCORE</div>
            <div class="dx-score-val" id="dxScoreVal">0 / 0</div>
            <div class="dx-star" id="dxStar">—</div>
            <div class="dx-next" id="dxNext"></div>
        </div>
    </div>
    <button class="resetBtn" id="resetBtn">원래대로 리셋</button>
    <div class="footer">
        Made by sheamai &nbsp;&nbsp;&nbsp; X account : <a href="https://x.com/sheamai_" target="_blank">@sheamai_</a>
    </div>
</div>
<script>
const raw = localStorage.getItem('maimaiResultData');
if (!raw) { document.body.innerHTML = '<h1 style="color:#f66;text-align:center;">데이터 없음</h1>'; throw new Error('No data'); }
const d = JSON.parse(raw);
const orig = JSON.parse(JSON.stringify(d.notes));
const origSol = d.solutions ? JSON.parse(JSON.stringify(d.solutions)) : {
    '75%Perfect': d.notes.breaks.PERFECT, '50%Perfect': 0,
    '80%Great': d.notes.breaks.GREAT, '60%Great': 0, '50%Great': 0
};
const sol = d.solutions ? JSON.parse(JSON.stringify(d.solutions)) : {
    '75%Perfect': d.notes.breaks.PERFECT, '50%Perfect': 0,
    '80%Great': d.notes.breaks.GREAT, '60%Great': 0, '50%Great': 0
};
const noteTypes = ['tap','hold','slide','touch','breaks'];
const weights = {tap:1, hold:2, slide:3, touch:1, breaks:5};
let globalW = 0;

document.getElementById('jacket').src = d.jacketImg || '';
document.getElementById('songName').textContent = d.songName || 'Unknown';
document.getElementById('track').textContent = 'Track ' + (d.trackCount || '?');
document.getElementById('time').textContent = d.realTime || '??:??';
document.getElementById('kind').textContent = d.musicKind === 'standard' ? 'Standard' : d.musicKind === 'dx' ? 'DX' : '?';
const lvl = document.getElementById('level');
lvl.textContent = 'Lv.' + (d.level || '??');
const diffMap = {basic:'basic',advanced:'advanced',expert:'expert',master:'master',reMaster:'reMaster',remaster:'reMaster'};
const diffClass = diffMap[d.difficulty] || '';
if (diffClass) lvl.className = 'diff-box ' + diffClass;

// ===== BREAK 서브판정 헬퍼 =====
const BH_IDS = {
    'CRITICAL':'break_crit', '75%Perfect':'break75p', '50%Perfect':'break50p',
    '80%Great':'break80g', '60%Great':'break60g', '50%Great':'break50g',
    'GOOD':'break_good', 'MISS':'break_miss'
};
const BH_LABELS = {
    'CRITICAL':'CP', '75%Perfect':'75%P', '50%Perfect':'50%P',
    '80%Great':'80%G', '60%Great':'60%G', '50%Great':'50%G',
    'GOOD':'GOOD', 'MISS':'MISS'
};
const BH_ALL = ['CRITICAL','75%Perfect','50%Perfect','80%Great','60%Great','50%Great','GOOD','MISS'];

function getBreakVal(key) {
    if (key === 'CRITICAL') return d.notes.breaks.CRITICAL;
    if (key === 'GOOD')     return d.notes.breaks.GOOD;
    if (key === 'MISS')     return d.notes.breaks.MISS;
    return sol[key] || 0;
}
function setBreakVal(key, val) {
    if (key === 'CRITICAL') { d.notes.breaks.CRITICAL = val; return; }
    if (key === 'GOOD')     { d.notes.breaks.GOOD = val; return; }
    if (key === 'MISS')     { d.notes.breaks.MISS = val; return; }
    sol[key] = val;
    d.notes.breaks.PERFECT = sol['75%Perfect'] + sol['50%Perfect'];
    d.notes.breaks.GREAT   = sol['80%Great']   + sol['60%Great']  + sol['50%Great'];
}

// ===== BREAK 판정 조정 =====
// 모든 노트와 동일한 규칙:
//   ↑ (개수 증가): CRITICAL에서 1개 가져옴
//   ↓ (개수 감소): CRITICAL에 1개 돌려줌
//   CRITICAL ↑: MISS → GOOD → 50%Great → 60%Great → 80%Great → 50%Perfect → 75%Perfect 순으로 차감
//   CRITICAL ↓: 80%Great에 1개 줌 (일반 노트의 GREAT 해당)

function adjustBreakUp(key) {
    var idx = BH_ALL.indexOf(key);
    if (key === 'CRITICAL') {
        // CRITICAL ↑: 최하위부터 순차 차감 (MISS → GOOD → 50%G → 60%G → 80%G → 50%P → 75%P)
        var order = ['MISS','GOOD','50%Great','60%Great','80%Great','50%Perfect','75%Perfect'];
        for (var i = 0; i < order.length; i++) {
            if (getBreakVal(order[i]) > 0) {
                setBreakVal(order[i], getBreakVal(order[i]) - 1);
                setBreakVal('CRITICAL', getBreakVal('CRITICAL') + 1);
                return;
            }
        }
    } else {
        // 하위판정 ↑: 바로 위부터 순서대로 올라가며 0이 아닌 첫 번째 상위판정에서 차감
        for (var j = idx - 1; j >= 0; j--) {
            if (getBreakVal(BH_ALL[j]) > 0) {
                setBreakVal(BH_ALL[j], getBreakVal(BH_ALL[j]) - 1);
                setBreakVal(key, getBreakVal(key) + 1);
                return;
            }
        }
    }
}

function adjustBreakDown(key) {
    if (getBreakVal(key) === 0) return;
    if (key === 'CRITICAL') {
        // CRITICAL 감소 → 80%Great(GREAT 최상위)에 돌려줌
        setBreakVal('CRITICAL', d.notes.breaks.CRITICAL - 1);
        setBreakVal('80%Great', getBreakVal('80%Great') + 1);
    } else {
        // 하위판정 감소 → CRITICAL에 돌려줌
        setBreakVal(key, getBreakVal(key) - 1);
        setBreakVal('CRITICAL', d.notes.breaks.CRITICAL + 1);
    }
}

// ===== BREAK 손실 계산 =====
function getBreakSubLoss(key, count) {
    if (count === 0 || globalW <= 0) return null;
    const B = getTotal(d.notes.breaks);
    if (B === 0) return null;
    if (key === '75%Perfect') return (0.25 * count / B).toFixed(4);
    if (key === '50%Perfect') return (0.50 * count / B).toFixed(4);
    if (key === '80%Great')   return (1.0  * count / globalW * 100).toFixed(4);
    if (key === '60%Great')   return (2.0  * count / globalW * 100).toFixed(4);
    if (key === '50%Great')   return (2.5  * count / globalW * 100).toFixed(4);
    if (key === 'GOOD')       return (3.0  * count / globalW * 100).toFixed(4);
    if (key === 'MISS')       return (5.0  * count / globalW * 100).toFixed(4);
    return null;
}

function renderBreakCell(key) {
    var el = document.getElementById(BH_IDS[key]);
    if (!el) return;
    var count = getBreakVal(key);
    var loss  = getBreakSubLoss(key, count);
    el.innerHTML = '';
    var lbl = document.createElement('span'); lbl.className = 'bk-lbl'; lbl.textContent = BH_LABELS[key]; el.appendChild(lbl);
    var cnt = document.createElement('span'); cnt.className = 'bk-count'; cnt.textContent = count; el.appendChild(cnt);
    if (loss && loss !== '0.0000') {
        var ls = document.createElement('span'); ls.className = 'bk-loss'; ls.textContent = '-' + loss + '%'; el.appendChild(ls);
    }
    var up = document.createElement('span'); up.className = 'arrow'; up.textContent = '↑';
    up.onclick = (function(k){ return function(){ adjustBreakUp(k); updateAllBreakCells(); calcAll(); }; })(key);
    var dn = document.createElement('span'); dn.className = 'arrow'; dn.textContent = '↓';
    dn.onclick = (function(k){ return function(){ adjustBreakDown(k); updateAllBreakCells(); calcAll(); }; })(key);
    el.appendChild(up); el.appendChild(dn);
}

function updateAllBreakCells() {
    BH_ALL.forEach(function(k){ renderBreakCell(k); });
}

// ===== 일반 계산 =====
function getTotal(note) { return note.CRITICAL + note.PERFECT + note.GREAT + note.GOOD + note.MISS; }
function getMaxScore(note, w) { return getTotal(note) * w; }
function getActualScore(type) {
    var n = d.notes[type], w = weights[type];
    if (type === 'breaks') {
        var Sg = 0.8*sol['80%Great'] + 0.6*sol['60%Great'] + 0.5*sol['50%Great'];
        return (n.CRITICAL + n.PERFECT) * w + Sg * w + n.GOOD * w * 0.4;
    }
    return (n.CRITICAL + n.PERFECT) * w + n.GREAT * w * 0.8 + n.GOOD * w * 0.5;
}
function getBreakBonus() {
    var b = d.notes.breaks, B = getTotal(b);
    if (B === 0) return 0;
    return (b.CRITICAL + sol['75%Perfect']*0.75 + sol['50%Perfect']*0.5 +
            (sol['80%Great']+sol['60%Great']+sol['50%Great'])*0.4 + b.GOOD*0.3) / B;
}
function getJudgmentLoss(type, jud, count) {
    if (count === 0 || jud === 'CRITICAL' || jud === 'PERFECT' || globalW <= 0) return '0.0000';
    var w = weights[type];
    var lossRate = jud === 'GREAT' ? 0.2 : jud === 'GOOD' ? (type==='breaks'?0.6:0.5) : 1.0;
    return ((lossRate * w * count / globalW) * 100).toFixed(4);
}

function calcDXScore() {
    var score = 0, maxScore = 0;
    noteTypes.forEach(function(t) {
        var n = d.notes[t];
        maxScore += getTotal(n) * 3;
        if (t === 'breaks') {
            score += n.CRITICAL * 3;
            score += (sol['75%Perfect'] + sol['50%Perfect']) * 2;
            score += (sol['80%Great'] + sol['60%Great'] + sol['50%Great']) * 1;
        } else {
            score += n.CRITICAL * 3 + n.PERFECT * 2 + n.GREAT * 1;
        }
    });
    return { score: score, maxScore: maxScore };
}

function getDXRating(pct) {
    if (pct >= 100)  return { star: '★7',   next: null,  nextPct: null  };
    if (pct >= 99.5) return { star: '★6.5', next: '★7',  nextPct: 100   };
    if (pct >= 99)   return { star: '★6',   next: '★6.5',nextPct: 99.5  };
    if (pct >= 98)   return { star: '★5.5', next: '★6',  nextPct: 99    };
    if (pct >= 97)   return { star: '★5',   next: '★5.5',nextPct: 98    };
    if (pct >= 95)   return { star: '★4',   next: '★5',  nextPct: 97    };
    if (pct >= 93)   return { star: '★3',   next: '★4',  nextPct: 95    };
    if (pct >= 90)   return { star: '★2',   next: '★3',  nextPct: 93    };
    if (pct >= 85)   return { star: '★1',   next: '★2',  nextPct: 90    };
    return           { star: '—',    next: '★1',  nextPct: 85    };
}

function updateDXScore() {
    var res = calcDXScore();
    var pct = res.maxScore === 0 ? 0 : (res.score / res.maxScore * 100);
    var r = getDXRating(pct);
    document.getElementById('dxScoreVal').textContent = res.score + ' / ' + res.maxScore;
    document.getElementById('dxStar').textContent = r.star;
    if (r.next !== null && r.nextPct !== null) {
        var needed = Math.ceil(r.nextPct / 100 * res.maxScore) - res.score;
        document.getElementById('dxNext').textContent = pct.toFixed(2) + '%  (' + r.next + '  -' + needed + ')';
    } else {
        document.getElementById('dxNext').textContent = pct.toFixed(2) + '%';
    }
}

function calcAll() {
    var W = 0, S = 0;
    noteTypes.forEach(function(t){ W += getMaxScore(d.notes[t], weights[t]); S += getActualScore(t); });
    globalW = W;
    var notePct  = W === 0 ? 0 : (S / W * 100);
    var bonusPct = getBreakBonus();
    var totalPct = notePct + bonusPct;
    document.getElementById('finalRate').textContent = totalPct.toFixed(4) + '%';

    var totals = {CRITICAL:0, PERFECT:0, GREAT:0, GOOD:0, MISS:0};
    noteTypes.forEach(function(t) {
        var n = d.notes[t];
        ['CRITICAL','PERFECT','GREAT','GOOD','MISS'].forEach(function(j){ totals[j] += n[j]; });
        var max_t    = getMaxScore(n, weights[t]);
        var actual_t = getActualScore(t);
        if (t === 'breaks') {
            var noteScoreLoss = (max_t - actual_t) / W * 100;
            var bonusLoss     = 1.0 - bonusPct;
            document.getElementById('break_total').innerHTML = '<span class="loss">-' + (noteScoreLoss + bonusLoss).toFixed(4) + '%</span>';
        } else {
            var lossContrib = max_t === 0 ? 0 : ((max_t - actual_t) / W * 100);
            document.getElementById(t + '_total').innerHTML = '<span class="loss">-' + lossContrib.toFixed(4) + '%</span>';
        }
    });
    var grandLoss = (100 - notePct) + (1.0 - bonusPct);
    document.getElementById('grand_total').innerHTML = '<span class="loss">-' + grandLoss.toFixed(4) + '%</span>';
    document.getElementById('total_cp').innerHTML  = '<span class="count">' + (totals.CRITICAL + totals.PERFECT) + '</span>';
    document.getElementById('total_p').innerHTML   = '<span class="count">' + totals.PERFECT + '</span>';
    document.getElementById('total_g').innerHTML   = '<span class="count">' + totals.GREAT + '</span>';
    document.getElementById('total_go').innerHTML  = '<span class="count">' + totals.GOOD + '</span>';
    document.getElementById('total_m').innerHTML   = '<span class="count">' + totals.MISS + '</span>';
    updateDXScore();
}

// ===== 일반 노트 셀 =====
function makeArrow(cell, delta) {
    var a = document.createElement('span'); a.className = 'arrow';
    a.textContent = delta > 0 ? '↑' : '↓';
    a.onclick = function(){ adjust(cell, delta); };
    return a;
}
function updateCell(cell) {
    var type = cell.dataset.type, jud = cell.dataset.j;
    if (!type || !jud) return;
    var val = d.notes[type][jud];
    cell.innerHTML = '';
    var cnt = document.createElement('div'); cnt.className = 'count'; cnt.textContent = val; cell.appendChild(cnt);
    cell.appendChild(makeArrow(cell, 1)); cell.appendChild(makeArrow(cell, -1));
    var loss = getJudgmentLoss(type, jud, val);
    if (loss !== '0.0000') {
        var ls = document.createElement('div'); ls.className = 'loss'; ls.textContent = '-' + loss + '%'; cell.appendChild(ls);
    }
}
function adjust(cell, delta) {
    var type = cell.dataset.type, jud = cell.dataset.j;
    if (!type || !jud) return;
    var note = d.notes[type]; var cur = note[jud] || 0, target = cur + delta;
    if (target < 0) return; if (target > getTotal(note)) return;
    if (jud === 'CRITICAL' || jud === 'PERFECT') {
        note[jud] = target;
        var diff = Math.abs(delta);
        if (delta > 0) {
            var r = diff;
            if (note.MISS >= r) { note.MISS -= r; r = 0; } else { r -= note.MISS; note.MISS = 0; }
            if (r > 0 && note.GOOD >= r) { note.GOOD -= r; r = 0; } else if (r > 0) { r -= note.GOOD; note.GOOD = 0; }
            if (r > 0 && note.GREAT >= r) { note.GREAT -= r; } else if (r > 0) return;
        } else { note.GREAT += diff; }
    } else {
        var cpT = note.CRITICAL + note.PERFECT;
        if (delta > 0 && cpT < delta) return;
        note[jud] = target;
        if (delta > 0) {
            var r2 = delta;
            if (note.CRITICAL >= r2) { note.CRITICAL -= r2; }
            else { r2 -= note.CRITICAL; note.CRITICAL = 0; if (note.PERFECT >= r2) { note.PERFECT -= r2; } else return; }
        } else { note.CRITICAL += Math.abs(delta); }
    }
    document.querySelectorAll('td[data-type="' + type + '"]').forEach(function(c){ updateCell(c); });
    calcAll();
}

// ===== 초기화 =====
calcAll();
updateAllBreakCells();

document.querySelectorAll('td.val').forEach(function(cell) {
    if (!cell.dataset.type || !cell.dataset.j) return;
    updateCell(cell);
});

document.getElementById('resetBtn').onclick = function() {
    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));
    Object.assign(sol, JSON.parse(JSON.stringify(origSol)));
    document.querySelectorAll('td.val').forEach(function(cell) {
        if (!cell.dataset.type || !cell.dataset.j) return;
        updateCell(cell);
    });
    updateAllBreakCells();
    calcAll();
};
</script>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const btn = document.createElement('button');
    btn.textContent = '마이마이 분석기 열기';
    btn.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:99999;padding:18px 36px;font-size:20px;font-weight:bold;background:#ffeb3b;color:#000;border:none;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.6);cursor:pointer;transition:all 0.3s;outline:none;';
    btn.onclick = function() {
        window.open(url, '_blank', 'noopener,noreferrer');
        document.body.removeChild(btn);
        URL.revokeObjectURL(url);
    };
    document.body.appendChild(btn);
    setTimeout(function() {
        if (document.body.contains(btn)) { document.body.removeChild(btn); URL.revokeObjectURL(url); }
    }, 8000);
})();
