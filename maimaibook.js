javascript:(function () {
    /* ============================= 기존 코드 (절대 건드리지 않음) ============================= */
    // === 1. 노트 판정 수 추출 ===
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
    const slidePerfect= parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const slideGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const slideGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const slideMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const touchCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const touchPerfect= parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const touchGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const touchGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const touchMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const breakCrit = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(2)')?.textContent.trim(), 10) || 0;
    const breakPerfect= parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(3)')?.textContent.trim(), 10) || 0;
    const breakGreat = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(4)')?.textContent.trim(), 10) || 0;
    const breakGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
    const breakMiss = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td:nth-child(6)')?.textContent.trim(), 10) || 0;
    const songName = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.basic_block.m_5.m_t_17.m_r_60.p_5.p_l_10.f_13.break').lastChild.textContent.trim();
    const level=document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.basic_block.m_5.m_t_17.m_r_60.p_5.p_l_10.f_13.break > div.w_80.f_r > div')?.textContent.trim()||null;
    const jacketImg=document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.p_r.f_0 > img.music_img.m_5.m_b_17.m_r_0.f_l')?.src||null;
    const trackCount=document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span.red.f_b.v_b')?.textContent.trim()||null;
    const realTime=document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span:nth-child(2)')?.textContent.trim()||null;
    const imgElement=document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="_container"] > div.p_r.f_0 > img.playlog_music_kind_icon')?.src||null;
    const musicKind=imgElement?(imgElement==='https://maimaidx-eng.com/maimai-mobile/img/music_standard.png'?'standard':imgElement==='https://maimaidx-eng.com/maimai-mobile/img/music_dx.png'?'delux':null):null;
    const diffImg=document.querySelector('img.playlog_diff.v_b')?.src||null;
    const difficulty=diffImg?diffImg.match(/diff_([a-z]+)\.png$/i)?.[1]:null;

    // === 2. 달성률 정확하게 추출 (정규식) ===
    const divElement = document.querySelector('div.playlog_achievement_txt.t_r');
    if (!divElement) {
        console.error("달성률 요소를 찾을 수 없습니다.");
        return;
    }
    const text = divElement.textContent.trim();
    const match = text.match(/(\d+).(\d+)%/);
    if (!match) {
        console.error("달성률 파싱 실패:", text);
        return;
    }
    const finalRate = parseFloat(`${match[1]}.${match[2]}`);

    // === 3. 모든 가능한 해답 계산 ===
    function calcAllSolutions(tap, hold, slide, touch, breakCounts, finalRate, roundMode = "floor") {
        const weights = { TAP: 1, HOLD: 2, SLIDE: 3, TOUCH: 1, BREAK: 5 };
        const W =
            (tap.CRITICAL + tap.PERFECT + tap.GREAT + tap.GOOD + tap.MISS) * weights.TAP +
            (hold.CRITICAL + hold.PERFECT + hold.GREAT + hold.GOOD + hold.MISS) * weights.HOLD +
            (slide.CRITICAL + slide.PERFECT + slide.GREAT + slide.GOOD + slide.MISS) * weights.SLIDE +
            (touch.CRITICAL + touch.PERFECT + touch.GREAT + touch.GOOD + touch.MISS) * weights.TOUCH +
            (breakCounts.CRITICAL + breakCounts.PERFECT + breakCounts.GREAT + breakCounts.GOOD + breakCounts.MISS) * weights.BREAK;
        function noteScore(counts, weight) {
            return (
                (counts.CRITICAL + counts.PERFECT) * weight * 1.0 +
                counts.GREAT * weight * 0.8 +
                counts.GOOD * weight * 0.5
            );
        }
        let baseScore =
            noteScore(tap, weights.TAP) +
            noteScore(hold, weights.HOLD) +
            noteScore(slide, weights.SLIDE) +
            noteScore(touch, weights.TOUCH);
        const C = breakCounts.CRITICAL;
        const P = breakCounts.PERFECT;
        const G = breakCounts.GREAT;
        const D = breakCounts.GOOD;
        const M = breakCounts.MISS;
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
                    const bonus = (C + 0.5 * P + 0.25 * x + 0.4 * G + 0.3 * D) / B;
                    const bonusPercent = bonus * 1.0;
                    const total = notePercent + bonusPercent;
                    let shown;
                    const val = total * 10000;
                    if (roundMode === "round") {
                        shown = Math.round(val) / 10000;
                    } else {
                        shown = Math.floor(val) / 10000;
                    }
                    const shown4 = shown.toFixed(4);
                    const target4 = finalRate.toFixed(4);
                    if (shown4 === target4) {
                        solutions.push({
                            "75%Perfect": x,
                            "50%Perfect": y,
                            "80%Great": g80,
                            "60%Great": g60,
                            "50%Great": g50,
                            notePercent: parseFloat(notePercent.toFixed(4)),
                            bonusPercent: parseFloat(bonusPercent.toFixed(4)),
                            total: parseFloat(total.toFixed(4))
                        });
                    }
                }
            }
        }
        return solutions;
    }

    // === 4. 데이터 정리 및 실행 ===
    const tap = { CRITICAL: tapCrit, PERFECT: tapPerfect, GREAT: tapGreat, GOOD: tapGood, MISS: tapMiss };
    const hold = { CRITICAL: holdCrit, PERFECT: holdPerfect, GREAT: holdGreat, GOOD: holdGood, MISS: holdMiss };
    const slide = { CRITICAL: slideCrit, PERFECT: slidePerfect, GREAT: slideGreat, GOOD: slideGood, MISS: slideMiss };
    const touch = { CRITICAL: touchCrit, PERFECT: touchPerfect, GREAT: touchGreat, GOOD: touchGood, MISS: touchMiss };
    const breaks = { CRITICAL: breakCrit, PERFECT: breakPerfect, GREAT: breakGreat, GOOD: breakGood, MISS: breakMiss };
    const results = calcAllSolutions(tap, hold, slide, touch, breaks, finalRate, "floor");

    // === 5. 결과 출력 ===
    console.log("가능한 해답 개수:", results.length);
    console.log("모든 가능한 BREAK 분배:", results);


    // 1. 데이터 저장
    const data = {
        songName, level, jacketImg, trackCount, realTime, musicKind, difficulty, finalRate,
        notes: { tap, hold, slide, touch, breaks },
        solutions: results.length > 0 ? results[0] : null   
    };
    localStorage.setItem('maimaiResultData', JSON.stringify(data));

    // 2. 새 탭 HTML 생성
    const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>Maimai 결과 상세</title>
<style>
    body{font-family:Arial,Helvetica,sans-serif;background:#111;color:#eee;margin:0;padding:0;}
    .container{max-width:960px;margin:20px auto;padding:15px;background:#222;border-radius:8px;}
    .header{position:relative;text-align:center;margin-bottom:20px;}
    .header img{width:100%;max-height:260px;object-fit:contain;border-radius:8px;}
    .header .title{position:absolute;top:10px;left:10px;font-size:2.2rem;font-weight:bold;text-shadow:2px 2px 4px #000;}
    .header .info{position:absolute;top:10px;right:10px;text-align:right;font-size:1rem;}
    .header .info div{margin:4px 0;}
    .diff-box{padding:8px 12px;border-radius:6px;display:inline-block;margin-top:8px;font-weight:bold;}
    .basic{background:#0a0;} .advanced{background:#aa0;} .expert{background:#a00;}
    .master{background:#a0a;} .reMaster{background:#d0d8ff;color:#000;}
    table{border-collapse:collapse;width:100%;margin-top:20px;border:3px solid #ff0;}
    th,td{border:1px solid #ff0;padding:6px;text-align:center;position:relative;}
    th{background:#333;}
    .crit{background:#ffff99;color:#000;}
    .perf{background:#ff0;color:#000;}
    .great{background:#ffb6c1;color:#000;}
    .good{background:#90ee90;color:#000;}
    .miss{background:#aaa;color:#000;}
    .ach{background:#555;color:#fff;font-weight:bold;}
    .arrow{cursor:pointer;font-size:1.2rem;margin:0 4px;}
    .loss{font-size:0.8rem;}
    .finalRate{font-size:1.8rem;font-weight:bold;margin-top:12px;text-align:center;}
    .resetBtn{margin-top:15px;padding:8px 16px;background:#c00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;}
    .resetBtn:hover{background:#f00;}
</style>
</head>
<body>
<div class="container" id="main">
    <div class="header">
        <img id="jacket" src="" alt="jacket">
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
            <tr><th></th><th class="crit">CRITICAL PERFECT</th><th class="perf">PERFECT</th><th class="great">GREAT</th><th class="good">GOOD</th><th class="miss">MISS</th><th class="ach">ACHIVEMENT</th></tr>
        </thead>
        <tbody>
            <tr><td>TAP</td><td class="val crit" data-type="tap" data-j="CRITICAL"></td><td class="val perf" data-type="tap" data-j="PERFECT"></td><td class="val great" data-type="tap" data-j="GREAT"></td><td class="val good" data-type="tap" data-j="GOOD"></td><td class="val miss" data-type="tap" data-j="MISS"></td><td class="ach" id="ach_tap"></td></tr>
            <tr><td>HOLD</td><td class="val crit" data-type="hold" data-j="CRITICAL"></td><td class="val perf" data-type="hold" data-j="PERFECT"></td><td class="val great" data-type="hold" data-j="GREAT"></td><td class="val good" data-type="hold" data-j="GOOD"></td><td class="val miss" data-type="hold" data-j="MISS"></td><td class="ach" id="ach_hold"></td></tr>
            <tr><td>SLIDE</td><td class="val crit" data-type="slide" data-j="CRITICAL"></td><td class="val perf" data-type="slide" data-j="PERFECT"></td><td class="val great" data-type="slide" data-j="GREAT"></td><td class="val good" data-type="slide" data-j="GOOD"></td><td class="val miss" data-type="slide" data-j="MISS"></td><td class="ach" id="ach_slide"></td></tr>
            <tr><td>TOUCH</td><td class="val crit" data-type="touch" data-j="CRITICAL"></td><td class="val perf" data-type="touch" data-j="PERFECT"></td><td class="val great" data-type="touch" data-j="GREAT"></td><td class="val good" data-type="touch" data-j="GOOD"></td><td class="val miss" data-type="touch" data-j="MISS"></td><td class="ach" id="ach_touch"></td></tr>
            <tr><td>BREAK</td><td class="val crit" data-type="breaks" data-j="CRITICAL"></td>
                <td class="val perf" id="breakPerf">0-0</td>
                <td class="val great" id="breakGreat">0-0-0</td>
                <td class="val good" data-type="breaks" data-j="GOOD"></td>
                <td class="val miss" data-type="breaks" data-j="MISS"></td>
                <td class="ach" id="ach_break"></td></tr>
            <tr><td>TOTAL</td><td colspan="5" id="totalCounts"></td><td class="ach" id="ach_total"></td></tr>
        </tbody>
    </table>

    <div class="finalRate" id="finalRate"></div>
    <button class="resetBtn" id="resetBtn">리셋</button>
</div>

<script>
/* ---------- 데이터 로드 ---------- */
const raw = localStorage.getItem('maimaiResultData');
if (!raw) { document.body.innerHTML = '<h1 style="color:#f66;text-align:center;">데이터 없음</h1>'; }
const d = JSON.parse(raw);
const orig = JSON.parse(JSON.stringify(d.notes)); // 초기값 보관
const sol = d.solutions;

/* ---------- 상단 정보 ---------- */
document.getElementById('jacket').src = d.jacketImg;
document.getElementById('songName').textContent = d.songName;
document.getElementById('track').textContent = 'Track ' + (d.trackCount || '?');
document.getElementById('time').textContent = d.realTime || '?';
document.getElementById('kind').textContent = d.musicKind === 'standard' ? 'Standard' : d.musicKind === 'delux' ? 'Deluxe' : '?';
const lvl = document.getElementById('level');
lvl.textContent = d.level;
const diffMap = {basic:'#0a0',advanced:'#aa0',expert:'#a00',master:'#a0a',reMaster:'#d0d8ff'};
lvl.style.background = diffMap[d.difficulty] || '#555';

/* ---------- 판정값 초기화 ---------- */
const noteTypes = ['tap','hold','slide','touch','breaks'];
const judgments = ['CRITICAL','PERFECT','GREAT','GOOD','MISS'];
noteTypes.forEach(t => {
    judgments.forEach(j => {
        const cell = document.querySelector(\`td[data-type="\${t}"][data-j="\${j}"]\`);
        if (cell) cell.dataset.orig = d.notes[t][j];
    });
});
if (sol) {
    document.getElementById('breakPerf').textContent = sol['75%Perfect'] + '-' + sol['50%Perfect'];
    document.getElementById('breakGreat').textContent = sol['80%Great'] + '-' + sol['60%Great'] + '-' + sol['50%Great'];
}

/* ---------- 계산 로직 ---------- */
const weights = {tap:1,hold:2,slide:3,touch:1,breaks:5};
function getTotal(note) { return note.CRITICAL+note.PERFECT+note.GREAT+note.GOOD+note.MISS; }
function getMaxScore(note,w) { return getTotal(note)*w; }
function getScore(note,w) {
    return (note.CRITICAL+note.PERFECT)*w + note.GREAT*w*0.8 + note.GOOD*w*0.5;
}
function getLoss(note,w) {
    const max = getMaxScore(note,w);
    const cur = getScore(note,w);
    return ((max-cur)/max*100).toFixed(2);
}
function getBreakBonus() {
    const b = d.notes.breaks;
    const B = getTotal(b);
    if (B===0) return 0;
    const p75 = sol ? sol['75%Perfect'] : 0;
    const p50 = sol ? sol['50%Perfect'] : 0;
    const g80 = sol ? sol['80%Great'] : 0;
    const g60 = sol ? sol['60%Great'] : 0;
    const g50 = sol ? sol['50%Great'] : 0;
    const bonus = (b.CRITICAL + 0.75*p75 + 0.5*p50 + 0.4*b.GREAT + 0.3*b.GOOD)/B;
    return bonus*1;
}
function calcAll() {
    let W = 0, S = 0;
    noteTypes.forEach(t => {
        const w = weights[t];
        const n = d.notes[t];
        W += getMaxScore(n,w);
        S += getScore(n,w);
    });
    const notePct = W===0 ? 0 : (S/W*100);
    const bonusPct = getBreakBonus();
    const totalPct = notePct + bonusPct;

    // ACHIVEMENT
    noteTypes.forEach(t => {
        const loss = getLoss(d.notes[t], weights[t]);
        document.getElementById('ach_'+t).textContent = '-' + loss + '%';
    });
    document.getElementById('ach_total').textContent = totalPct.toFixed(4)+'%';

    // Final Rate
    document.getElementById('finalRate').textContent = totalPct.toFixed(4)+'%';

    // TOTAL counts
    const totals = noteTypes.map(t=>getTotal(d.notes[t]));
    document.getElementById('totalCounts').textContent = totals.join(' / ');
}

/* ---------- 화살표 동작 ---------- */
function makeArrow(cell, delta) {
    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = delta>0?'↑':'↓';
    arrow.onclick = () => adjust(cell, delta);
    return arrow;
}
function adjust(cell, delta) {
    const type = cell.dataset.type;
    const jud = cell.dataset.j;
    const note = d.notes[type];
    const orig = parseInt(cell.dataset.orig);

    // 현재 값
    let cur = note[jud];
    if (isNaN(cur)) cur = 0;

    // 목표값
    let target = cur + delta;
    if (target < 0) return;

    // 총량 고정
    const total = getTotal(note);
    if (target > total) return;

    // PERFECT / CRITICAL PERFECT 우선순위
    if (jud === 'CRITICAL' || jud === 'PERFECT') {
        // CRITICAL ↓ → GREAT ↑ (BREAK은 80%GREAT)
        if (delta < 0 && cur + delta < 0) return;
        note[jud] = target;
        const diff = delta < 0 ? -delta : delta;
        if (delta < 0) { // 내려서 GREAT 올림
            const greatJud = type==='breaks' ? 'GREAT' : 'GREAT';
            note[greatJud] += diff;
        } else { // 올려서 GREAT 내림
            const greatJud = type==='breaks' ? 'GREAT' : 'GREAT';
            if (note[greatJud] >= diff) {
                note[greatJud] -= diff;
            } else {
                // GREAT 부족 → PERFECT에서 차감
                if (note.PERFECT >= diff - note[greatJud]) {
                    note.PERFECT -= (diff - note[greatJud]);
                    note[greatJud] = 0;
                } else return;
            }
        }
    } else {
        // GREAT/GOOD/MISS 변동 → CRITICAL PERFECT ↑↓
        const cp = note.CRITICAL + note.PERFECT;
        if (delta > 0 && cp < delta) return;
        note[jud] = target;
        note.CRITICAL += (delta > 0 ? -delta : Math.abs(delta));
        if (note.CRITICAL < 0) {
            const extra = -note.CRITICAL;
            note.PERFECT -= extra;
            note.CRITICAL = 0;
            if (note.PERFECT < 0) return;
        }
    }

    // UI 갱신
    cell.textContent = note[jud];
    cell.appendChild(makeArrow(cell, 1));
    cell.appendChild(makeArrow(cell, -1));
    calcAll();
}

/* ---------- 셀 초기화 ---------- */
document.querySelectorAll('td.val').forEach(td => {
    const type = td.dataset.type;
    const jud = td.dataset.j;
    if (!type || !jud) return;
    const val = d.notes[type][jud];
    td.textContent = val;
    td.appendChild(makeArrow(td, 1));
    td.appendChild(makeArrow(td, -1));
});

/* ---------- BREAK 특수 표시 ---------- */
if (sol) {
    document.getElementById('breakPerf').textContent = sol['75%Perfect']+'-'+sol['50%Perfect'];
    document.getElementById('breakGreat').textContent = sol['80%Great']+'-'+sol['60%Great']+'-'+sol['50%Great'];
}

/* ---------- 리셋 버튼 ---------- */
document.getElementById('resetBtn').onclick = () => {
    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));
    document.querySelectorAll('td.val').forEach(td => {
        const type = td.dataset.type;
        const jud = td.dataset.j;
        if (!type || !jud) return;
        const val = d.notes[type][jud];
        td.textContent = val;
        td.appendChild(makeArrow(td, 1));
        td.appendChild(makeArrow(td, -1));
    });
    if (sol) {
        document.getElementById('breakPerf').textContent = sol['75%Perfect']+'-'+sol['50%Perfect'];
        document.getElementById('breakGreat').textContent = sol['80%Great']+'-'+sol['60%Great']+'-'+sol['50%Great'];
    }
    calcAll();
};

/* ---------- 최초 계산 ---------- */
calcAll();
</script>
</body>
</html>`;

    // 3. 새 탭 열기
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');

    // 4. 알림
    if (results.length > 0) {
        alert(`가능한 해답 ${results.length}개 발견!\n새 탭에서 상세 결과를 확인하세요.`);
    } else {
        alert("해답을 찾지 못했습니다.\n계산 로직을 확인해보세요.");
    }
})();
