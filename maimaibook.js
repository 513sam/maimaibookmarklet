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

    /* ============================= 수정된 새 탭 시각화 코드 ============================= */
    // 1. 데이터 저장 (BREAK 분배 정보 추가)
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
    .arrow{cursor:pointer;font-size:1.2rem;margin:0 4px;color:#fff;}
    .arrow:hover{color:#ff0;}
    .loss{font-size:0.8rem;}
    .finalRate{font-size:1.8rem;font-weight:bold;margin-top:12px;text-align:center;color:#ff0;}
    .resetBtn{margin-top:15px;padding:8px 16px;background:#c00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;}
    .resetBtn:hover{background:#f00;}
    .break-special{font-size:0.85rem;line-height:1.2;}
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
            <tr><td>TAP</td><td class="val crit editable" data-type="tap" data-j="CRITICAL"></td><td class="val perf editable" data-type="tap" data-j="PERFECT"></td><td class="val great editable" data-type="tap" data-j="GREAT"></td><td class="val good editable" data-type="tap" data-j="GOOD"></td><td class="val miss editable" data-type="tap" data-j="MISS"></td><td class="ach" id="ach_tap"></td></tr>
            <tr><td>HOLD</td><td class="val crit editable" data-type="hold" data-j="CRITICAL"></td><td class="val perf editable" data-type="hold" data-j="PERFECT"></td><td class="val great editable" data-type="hold" data-j="GREAT"></td><td class="val good editable" data-type="hold" data-j="GOOD"></td><td class="val miss editable" data-type="hold" data-j="MISS"></td><td class="ach" id="ach_hold"></td></tr>
            <tr><td>SLIDE</td><td class="val crit editable" data-type="slide" data-j="CRITICAL"></td><td class="val perf editable" data-type="slide" data-j="PERFECT"></td><td class="val great editable" data-type="slide" data-j="GREAT"></td><td class="val good editable" data-type="slide" data-j="GOOD"></td><td class="val miss editable" data-type="slide" data-j="MISS"></td><td class="ach" id="ach_slide"></td></tr>
            <tr><td>TOUCH</td><td class="val crit editable" data-type="touch" data-j="CRITICAL"></td><td class="val perf editable" data-type="touch" data-j="PERFECT"></td><td class="val great editable" data-type="touch" data-j="GREAT"></td><td class="val good editable" data-type="touch" data-j="GOOD"></td><td class="val miss editable" data-type="touch" data-j="MISS"></td><td class="ach" id="ach_touch"></td></tr>
            <tr><td>BREAK</td><td class="val crit editable" data-type="breaks" data-j="CRITICAL"></td>
                <td class="val perf break-special" id="breakPerf">75%:0<br>50%:0</td>
                <td class="val great break-special" id="breakGreat">80%:0<br>60%:0<br>50%:0</td>
                <td class="val good editable" data-type="breaks" data-j="GOOD"></td>
                <td class="val miss editable" data-type="breaks" data-j="MISS"></td>
                <td class="ach" id="ach_breaks"></td></tr>
            <tr><td>TOTAL</td><td colspan="5" id="totalCounts"></td><td class="ach" id="ach_total"></td></tr>
        </tbody>
    </table>

    <div class="finalRate" id="finalRate">99.9999%</div>
    <button class="resetBtn" id="resetBtn">🔄 리셋</button>
</div>

<script>
/* ---------- 데이터 로드 ---------- */
const raw = localStorage.getItem('maimaiResultData');
if (!raw) { 
    document.body.innerHTML = '<h1 style="color:#f66;text-align:center;padding:50px;">데이터 없음 - 결과화면에서 다시 실행</h1>'; 
    throw new Error('No data');
}
const d = JSON.parse(raw);
const orig = JSON.parse(JSON.stringify(d.notes)); 
const sol = d.solutions;

// BREAK 분배 상태 관리
let breakPerf75 = sol ? sol['75%Perfect'] : 0;
let breakPerf50 = sol ? sol['50%Perfect'] : 0;
let breakGreat80 = sol ? sol['80%Great'] : 0;
let breakGreat60 = sol ? sol['60%Great'] : 0;
let breakGreat50 = sol ? sol['50%Great'] : 0;

/* ---------- 상단 정보 ---------- */
document.getElementById('jacket').src = d.jacketImg || '';
document.getElementById('songName').textContent = d.songName || 'Unknown';
document.getElementById('track').textContent = 'Track ' + (d.trackCount || '?');
document.getElementById('time').textContent = d.realTime || '?';
document.getElementById('kind').textContent = d.musicKind === 'standard' ? 'Standard' : d.musicKind === 'delux' ? 'Deluxe' : '?';
const lvl = document.getElementById('level');
lvl.textContent = d.level || '?';
const diffMap = {basic:'#0a0',advanced:'#aa0',expert:'#a00',master:'#a0a',reMaster:'#d0d8ff'};
lvl.style.background = diffMap[d.difficulty] || '#555';

/* ---------- 계산 로직 ---------- */
const weights = {tap:1, hold:2, slide:3, touch:1, breaks:5};
const noteTypes = ['tap','hold','slide','touch','breaks'];

function getTotal(noteType) {
    const note = d.notes[noteType];
    if (noteType === 'breaks') {
        return note.CRITICAL + d.notes.breaks.PERFECT + d.notes.breaks.GREAT + note.GOOD + note.MISS;
    }
    return note.CRITICAL + note.PERFECT + note.GREAT + note.GOOD + note.MISS;
}

function getNoteScore(noteType) {
    const note = d.notes[noteType];
    const w = weights[noteType];
    let score = (note.CRITICAL + note.PERFECT) * w;
    score += note.GREAT * w * 0.8;
    score += note.GOOD * w * 0.5;
    
    // BREAK 특수 계산
    if (noteType === 'breaks') {
        const gScore = breakGreat80 * 5 * 0.8 + breakGreat60 * 5 * 0.6 + breakGreat50 * 5 * 0.5;
        score = note.CRITICAL * 5 + (breakPerf75 + breakPerf50) * 5 + note.GOOD * 5 * 0.4 + gScore;
    }
    
    return score;
}

function getMaxScore(noteType) {
    return getTotal(noteType) * weights[noteType];
}

function getLoss(noteType) {
    const maxS = getMaxScore(noteType);
    const curS = getNoteScore(noteType);
    return ((maxS - curS) / maxS * 100).toFixed(2);
}

function getBreakBonus() {
    const B = getTotal('breaks');
    if (B === 0) return 0;
    return (d.notes.breaks.CRITICAL + 
            0.75 * breakPerf75 + 
            0.5 * breakPerf50 + 
            0.4 * d.notes.breaks.GREAT + 
            0.3 * d.notes.breaks.GOOD) / B;
}

function calcAll() {
    let W = 0, S = 0;
    noteTypes.forEach(t => {
        W += getMaxScore(t);
        S += getNoteScore(t);
    });
    
    const notePct = W === 0 ? 0 : (S / W * 100);
    const bonusPct = getBreakBonus();
    const totalPct = notePct + bonusPct;
    
    // 각 노트 손실률
    noteTypes.forEach(t => {
        document.getElementById('ach_' + t).textContent = '-' + getLoss(t) + '%';
    });
    
    // TOTAL
    document.getElementById('ach_total').textContent = totalPct.toFixed(4) + '%';
    document.getElementById('finalRate').textContent = totalPct.toFixed(4) + '%';
    
    // 총 개수
    const totals = noteTypes.map(t => getTotal(t));
    document.getElementById('totalCounts').textContent = totals.join(' / ');
    
    // BREAK 분배 업데이트
    document.getElementById('breakPerf').innerHTML = \`75%: \${breakPerf75}<br>50%: \${breakPerf50}\`;
    document.getElementById('breakGreat').innerHTML = \`80%: \${breakGreat80}<br>60%: \${breakGreat60}<br>50%: \${breakGreat50}\`;
}

/* ---------- 판정 조정 로직 (수정됨) ---------- */
function createArrows(cell) {
    // 기존 화살표 제거
    cell.querySelectorAll('.arrow').forEach(a => a.remove());
    
    const up = document.createElement('span');
    up.className = 'arrow';
    up.textContent = '↑';
    up.onclick = () => adjustValue(cell, 1);
    
    const down = document.createElement('span');
    down.className = 'arrow';
    down.textContent = '↓';
    down.onclick = () => adjustValue(cell, -1);
    
    cell.appendChild(up);
    cell.appendChild(down);
}

function adjustValue(cell, delta) {
    const type = cell.dataset.type;
    const jud = cell.dataset.j;
    const note = d.notes[type];
    const total = getTotal(type);
    
    if (jud === 'CRITICAL' || jud === 'PERFECT') {
        // CRITICAL/PERFECT 변경
        let newVal = note[jud] + delta;
        if (newVal < 0 || newVal > total) return;
        
        note[jud] += delta;
        const diff = Math.abs(delta);
        
        if (delta > 0) {
            // 올리면 → GREAT에서 차감 (BREAK은 80% 우선)
            if (type === 'breaks') {
                if (breakGreat80 >= diff) {
                    breakGreat80 -= diff;
                } else {
                    const remain = diff - breakGreat80;
                    breakGreat80 = 0;
                    if (breakGreat60 >= remain) {
                        breakGreat60 -= remain;
                    } else {
                        return; // 부족
                    }
                }
            } else {
                if (note.GREAT >= diff) {
                    note.GREAT -= diff;
                } else {
                    return;
                }
            }
        } else {
            // 내리면 → GREAT으로 이동 (BREAK은 80%)
            if (type === 'breaks') {
                breakGreat80 += diff;
            } else {
                note.GREAT += diff;
            }
        }
    } else {
        // GREAT/GOOD/MISS 변경
        let newVal = note[jud] + delta;
        if (newVal < 0 || newVal > total) return;
        
        const cpTotal = note.CRITICAL + note.PERFECT;
        if (delta > 0 && cpTotal < Math.abs(delta)) return;
        
        note[jud] += delta;
        
        if (delta > 0) {
            // 올리면 → CRITICAL 우선 차감
            if (note.CRITICAL >= Math.abs(delta)) {
                note.CRITICAL -= Math.abs(delta);
            } else {
                const remain = Math.abs(delta) - note.CRITICAL;
                note.CRITICAL = 0;
                note.PERFECT -= remain;
            }
        } else {
            // 내리면 → CRITICAL 증가
            note.CRITICAL += Math.abs(delta);
        }
    }
    
    // UI 갱신
    cell.textContent = note[jud];
    createArrows(cell);
    calcAll();
}

/* ---------- 초기화 ---------- */
noteTypes.forEach(t => {
    ['CRITICAL', 'PERFECT', 'GREAT', 'GOOD', 'MISS'].forEach(j => {
        const cell = document.querySelector(\`td[data-type="\${t}"][data-j="\${j}"]\`);
        if (cell) {
            cell.textContent = d.notes[t][j];
            createArrows(cell);
        }
    });
});

// 최초 계산
calcAll();

/* ---------- 리셋 ---------- */
document.getElementById('resetBtn').onclick = () => {
    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));
    breakPerf75 = sol ? sol['75%Perfect'] : 0;
    breakPerf50 = sol ? sol['50%Perfect'] : 0;
    breakGreat80 = sol ? sol['80%Great'] : 0;
    breakGreat60 = sol ? sol['60%Great'] : 0;
    breakGreat50 = sol ? sol['50%Great'] : 0;
    
    noteTypes.forEach(t => {
        ['CRITICAL', 'PERFECT', 'GREAT', 'GOOD', 'MISS'].forEach(j => {
            const cell = document.querySelector(\`td[data-type="\${t}"][data-j="\${j}"]\`);
            if (cell) {
                cell.textContent = d.notes[t][j];
                createArrows(cell);
            }
        });
    });
    
    calcAll();
};
</script>
</body>
</html>`;

    // 3. 새 탭 열기
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');

    // 4. 알림
    if (results.length > 0) {
        alert(\`가능한 해답 \${results.length}개 발견!\n새 탭에서 상세 결과 + 편집 가능!\`);
    } else {
        alert("해답을 찾지 못했습니다.\\n계산 로직을 확인해보세요.");
    }
})();
