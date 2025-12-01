javascript:(function () {
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
    const musicKind = imgElement ? (imgElement === 'https://maimaidx-eng.com/maimai-mobile/img/music_standard.png' ? 'standard' : imgElement === 'https://maimaidx-eng.com/maimai-mobile/img/music_dx.png' ? 'delux' : null) : null;
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
                    if (shown.toFixed(4) === finalRate.toFixed(4)) {
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
    .header .title{position:absolute;bottom:15px;left:15px;right:15px;font-size:2.5rem;font-weight:900;color:#fff;-webkit-text-stroke:2px #000;text-stroke:2px #000;text-shadow:0 0 8px #000;}
    .header .info{position:absolute;top:15px;right:15px;text-align:right;font-size:1.1rem;background:rgba(0,0,0,0.8);padding:12px 15px;border-radius:10px;}
    .header .info div{margin:6px 0;}
    .diff-box{padding:8px 16px;border-radius:8px;display:inline-block;font-weight:900;font-size:1.2rem;text-shadow:1px 1px 2px #000;}
    .basic{background:linear-gradient(45deg,#4caf50,#45a049);color:#fff;}
    .advanced{background:linear-gradient(45deg,#ff9800,#f57c00);color:#000;}
    .expert{background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;}
    .master{background:linear-gradient(45deg,#9c27b0,#7b1fa2);color:#fff;}
    .reMaster{background:linear-gradient(45deg,#e1bee7,#ce93d8);color:#000;}
    table{border-collapse:collapse;width:100%;margin-top:25px;border:4px solid #ffeb3b;box-shadow:0 10px 30px rgba(255,235,59,0.3);}
    th,td{border:2px solid #ffeb3b;padding:8px 4px;text-align:center;position:relative;font-weight:600;font-size:1rem;}
    th{background:linear-gradient(45deg,#333,#555);color:#ffeb3b;font-size:1rem;}
    .crit{background:linear-gradient(45deg,#fff9c4,#fff176);color:#000;font-weight:900;}
    .perf{background:linear-gradient(45deg,#ffeb3b,#fdd835);color:#000;font-weight:900;}
    .great{background:linear-gradient(45deg,#f8bbd9,#f48fb1);color:#000;}
    .good{background:linear-gradient(45deg,#a5d6a7,#81c784);color:#000;}
    .miss{background:linear-gradient(45deg,#757575,#616161);color:#fff;}
    .total{background:linear-gradient(45deg,#424242,#212121);color:#ffeb3b;font-weight:900;}
    .count{font-size:1.6rem;font-weight:900;line-height:1;display:block;}
    .loss{font-size:0.7rem;display:block;margin-top:2px;font-weight:700;opacity:0.9;}
    .crit .loss,.perf .loss{color:transparent;}
    .great .loss{color:#c2185b;}
    .good .loss{color:#388e3c;}
    .miss .loss{color:#bbb;}
    .arrow{cursor:pointer;font-size:0.8rem;margin:0 1px;color:#ff5722;transition:all 0.2s;opacity:0.8;}
    .arrow:hover{color:#ffeb3b;opacity:1;transform:scale(1.3);}
    .finalRate{font-size:3.5rem;font-weight:900;margin:30px 0;text-align:center;background:linear-gradient(45deg,#ffeb3b,#ff9800);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 20px rgba(255,235,59,0.5);}
    .resetBtn{display:block;margin:20px auto 0;padding:12px 30px;background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;border:none;border-radius:25px;cursor:pointer;font-weight:900;font-size:1.2rem;transition:all 0.3s;box-shadow:0 5px 15px rgba(244,67,54,0.4);}
    .resetBtn:hover{background:linear-gradient(45deg,#ff5722,#e64a19);transform:translateY(-2px);box-shadow:0 8px 25px rgba(244,67,54,0.6);}
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
            <tr><td>BREAK</td>
                <td class="val crit" data-type="breaks" data-j="CRITICAL"></td>
                <td class="val perf" id="breakPerf"></td>
                <td class="val great" id="breakGreat"></td>
                <td class="val good" data-type="breaks" data-j="GOOD"></td>
                <td class="val miss" data-type="breaks" data-j="MISS"></td>
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
    <div class="finalRate" id="finalRate">101.0000%</div>
    <button class="resetBtn" id="resetBtn">원래대로 리셋</button>
</div>
<script>
const raw = localStorage.getItem('maimaiResultData');
if (!raw) { document.body.innerHTML = '<h1 style="color:#f66;text-align:center;">데이터 없음</h1>'; throw new Error('No data'); }
const d = JSON.parse(raw);
const orig = JSON.parse(JSON.stringify(d.notes));
const sol = d.solutions || { '75%Perfect':0, '50%Perfect':0, '80%Great':0, '60%Great':0, '50%Great':0 };
const noteTypes = ['tap','hold','slide','touch','breaks'];
const weights = {tap:1, hold:2, slide:3, touch:1, breaks:5};
document.getElementById('jacket').src = d.jacketImg || '';
document.getElementById('songName').textContent = d.songName || 'Unknown';
document.getElementById('track').textContent = 'Track ' + (d.trackCount || '?');
document.getElementById('time').textContent = d.realTime || '??:??';
document.getElementById('kind').textContent = d.musicKind === 'standard' ? 'Standard' : d.musicKind === 'delux' ? 'DX' : '?';
const lvl = document.getElementById('level');
lvl.textContent = 'Lv.' + (d.level || '??');
const diffMap = {basic:'basic', advanced:'advanced', expert:'expert', master:'master', reMaster:'reMaster'};
const diffClass = diffMap[d.difficulty] || '';
if (diffClass) lvl.className = 'diff-box ' + diffClass;
function getTotal(note) { return note.CRITICAL + note.PERFECT + note.GREAT + note.GOOD + note.MISS; }
function getMaxScore(note, w) { return getTotal(note) * w; }
function getJudgmentLoss(type, jud, count) {
    if (count === 0) return '0.0000';
    const w = weights[type];
    const totalNotes = getTotal(d.notes[type]);
    const maxScore = totalNotes * w;
    if (jud === 'CRITICAL' || jud === 'PERFECT') return '0.0000';
    let lossRate;
    if (jud === 'GREAT') {
        if (type === 'breaks') {
            const g80 = sol['80%Great'], g60 = sol['60%Great'], g50 = sol['50%Great'];
            const G = g80 + g60 + g50;
            if (G === 0) return '0.0000';
            const Sg = 0.8 * g80 + 0.6 * g60 + 0.5 * g50;
            lossRate = 1 - (Sg / G);
        } else {
            lossRate = 0.2;
        }
    } else if (jud === 'GOOD') {
        lossRate = (type === 'breaks') ? 0.6 : 0.5;
    } else if (jud === 'MISS') {
        lossRate = 1.0;
    } else return '0.0000';
    return (lossRate * w * count / maxScore * 100).toFixed(4);
}
function getTypeTotalLoss(type) {
    const n = d.notes[type]; const w = weights[type];
    const totalNotes = getTotal(n);
    const max = totalNotes * w;
    let actual;
    if (type === 'breaks') {
        const g80 = sol['80%Great'], g60 = sol['60%Great'], g50 = sol['50%Great'];
        const Sg = 0.8 * g80 + 0.6 * g60 + 0.5 * g50;
        actual = (n.CRITICAL + n.PERFECT) * w + Sg * w + n.GOOD * w * 0.4;
    } else {
        actual = (n.CRITICAL + n.PERFECT) * w + n.GREAT * w * 0.8 + n.GOOD * w * 0.5;
    }
    return max === 0 ? '0.0000' : ((max - actual) / max * 100).toFixed(4);
}
function getBreakBonus() {
    const b = d.notes.breaks; const B = getTotal(b); if (B === 0) return 0;
    return (b.CRITICAL * 1.0 + sol['75%Perfect'] * 0.75 + sol['50%Perfect'] * 0.5 + (sol['80%Great'] + sol['60%Great'] + sol['50%Great']) * 0.4 + b.GOOD * 0.3) / B;
}
function calcAll() {
    let W = 0, S = 0;
    noteTypes.forEach(t => {
        const w = weights[t]; const n = d.notes[t];
        W += getMaxScore(n, w);
        let actual_t;
        if (t === 'breaks') {
            const g80 = sol['80%Great'], g60 = sol['60%Great'], g50 = sol['50%Great'];
            const Sg = 0.8 * g80 + 0.6 * g60 + 0.5 * g50;
            actual_t = (n.CRITICAL + n.PERFECT) * w + Sg * w + n.GOOD * w * 0.4;
        } else {
            actual_t = (n.CRITICAL + n.PERFECT) * w + n.GREAT * w * 0.8 + n.GOOD * w * 0.5;
        }
        S += actual_t;
    });
    const notePct = (S / W * 100);
    const bonusPct = getBreakBonus();
    const totalPct = notePct + bonusPct;
    document.getElementById('finalRate').textContent = Math.floor(totalPct * 10000) / 10000 + '%';
    const totals = { CRITICAL:0, PERFECT:0, GREAT:0, GOOD:0, MISS:0 };
    let grandLoss = 0;
    noteTypes.forEach(t => {
        const n = d.notes[t];
        ['CRITICAL','PERFECT','GREAT','GOOD','MISS'].forEach(j => totals[j] += n[j]);
        const loss = parseFloat(getTypeTotalLoss(t));
        document.getElementById(t + '_total').innerHTML = \`<span class="loss">-\${loss}%</span>\`;
        grandLoss += loss;
    });
    document.getElementById('grand_total').innerHTML = \`<span class="loss">-\${grandLoss.toFixed(4)}%</span>\`;
    document.getElementById('total_cp').innerHTML = \`<span class="count">\${totals.CRITICAL + totals.PERFECT}</span>\`;
    document.getElementById('total_g').innerHTML = \`<span class="count">\${totals.GREAT}</span>\`;
    document.getElementById('total_go').innerHTML = \`<span class="count">\${totals.GOOD}</span>\`;
    document.getElementById('total_m').innerHTML = \`<span class="count">\${totals.MISS}</span>\`;
}
function updateCell(cell) {
    const type = cell.dataset.type; const jud = cell.dataset.j; if (!type || !jud) return;
    const val = d.notes[type][jud];
    cell.innerHTML = '';
    const countSpan = document.createElement('div'); countSpan.className = 'count'; countSpan.textContent = val; cell.appendChild(countSpan);
    if (type !== 'breaks' || (jud !== 'PERFECT' && jud !== 'GREAT')) {
        cell.appendChild(makeArrow(cell, 1)); cell.appendChild(makeArrow(cell, -1));
    }
    const loss = getJudgmentLoss(type, jud, val);
    if (loss !== '0.0000') {
        const lossSpan = document.createElement('div'); lossSpan.className = 'loss'; lossSpan.textContent = '-' + loss + '%'; cell.appendChild(lossSpan);
    }
}
function makeArrow(cell, delta) {
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = delta > 0 ? 'Up' : 'Down';
    arrow.onclick = () => adjust(cell, delta); return arrow;
}
function adjust(cell, delta) {
    const type = cell.dataset.type; const jud = cell.dataset.j; if (!type || !jud) return;
    const note = d.notes[type]; let cur = note[jud] || 0; let target = cur + delta;
    if (target < 0) return; const total = getTotal(note); if (target > total) return;
    if (jud === 'CRITICAL' || jud === 'PERFECT') {
        note[jud] = target;
        const diff = Math.abs(delta);
        if (delta > 0) {
            let remain = diff;
            if (note.MISS >= remain) { note.MISS -= remain; remain = 0; }
            else { remain -= note.MISS; note.MISS = 0; }
            if (remain > 0 && note.GOOD >= remain) { note.GOOD -= remain; remain = 0; }
            else if (remain > 0) { remain -= note.GOOD; note.GOOD = 0; }
            if (remain > 0 && note.GREAT >= remain) { note.GREAT -= remain; }
            else if (remain > 0) return;
        } else {
            note.GREAT += diff;
        }
    } else {
        const cpTotal = note.CRITICAL + note.PERFECT;
        if (delta > 0 && cpTotal < delta) return;
        note[jud] = target;
        if (delta > 0) {
            let remain = delta;
            if (note.CRITICAL >= remain) { note.CRITICAL -= remain; }
            else { remain -= note.CRITICAL; note.CRITICAL = 0; if (note.PERFECT >= remain) { note.PERFECT -= remain; } else return; }
        } else {
            note.CRITICAL += Math.abs(delta);
        }
    }
    document.querySelectorAll(\`td[data-type="\${type}"]\`).forEach(updateCell);
    updateBreakCells();
    calcAll();
}
function updateBreakCells() {
    const perfCell = document.getElementById('breakPerf');
    const greatCell = document.getElementById('breakGreat');
    if (perfCell) perfCell.innerHTML = \`<span class="count">\${sol['75%Perfect']}</span>-<span class="count">\${sol['50%Perfect']}</span>\`;
    if (greatCell) greatCell.innerHTML = \`<span class="count">\${sol['80%Great']}</span>-<span class="count">\${sol['60%Great']}</span>-<span class="count">\${sol['50%Great']}</span>\`;
}
document.querySelectorAll('td.val').forEach(cell => {
    const type = cell.dataset.type; const jud = cell.dataset.j;
    if (!type || !jud) return;
    if (type === 'breaks' && (jud === 'PERFECT' || jud === 'GREAT')) return;
    updateCell(cell);
});
updateBreakCells();
document.getElementById('resetBtn').onclick = () => {
    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));
    document.querySelectorAll('td.val').forEach(cell => {
        const type = cell.dataset.type; const jud = cell.dataset.j;
        if (!type || !jud) return;
        if (type === 'breaks' && (jud === 'PERFECT' || jud === 'GREAT')) return;
        updateCell(cell);
    });
    updateBreakCells();
    calcAll();
};
calcAll();
</script>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const btn = document.createElement('button');
    btn.textContent = '마이마이 분석기 열기';
    btn.style.cssText = `
        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        z-index:99999;padding:18px 36px;font-size:20px;font-weight:bold;
        background:#ffeb3b;color:#000;border:none;border-radius:16px;
        box-shadow:0 10px 30px rgba(0,0,0,0.6);cursor:pointer;
        transition:all 0.3s;outline:none;
    `;
    btn.onclick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
        document.body.removeChild(btn);
        URL.revokeObjectURL(url);
    };
    document.body.appendChild(btn);
    setTimeout(() => {
        if (document.body.contains(btn)) {
            document.body.removeChild(btn);
            URL.revokeObjectURL(url);
        }
    }, 8000);
})();
