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
    const slideGood = parseInt(document.querySelector('body > div.wrapper.main_wrapper.t_c > div.gray_block.m_10.m_t_0.p_b_5.f_0 > div. nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(5)')?.textContent.trim(), 10) || 0;
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
    const finalRate = parseFloat(match[1] + '.' + match[2]);

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

    /* ============================= 새 탭 시각화 (문법 완전 수정) ============================= */
    const data = {
        songName, level, jacketImg, trackCount, realTime, musicKind, difficulty, finalRate,
        notes: { tap, hold, slide, touch, breaks },
        solutions: results.length > 0 ? results[0] : null
    };
    localStorage.setItem('maimaiResultData', JSON.stringify(data));

    const html = '<!DOCTYPE html>\n' +
'<html lang="ko">\n' +
'<head>\n' +
'<meta charset="UTF-8">\n' +
'<title>Maimai 결과 상세</title>\n' +
'<style>\n' +
'    body{font-family:Arial,sans-serif;background:#111;color:#eee;margin:0;padding:0;}\n' +
'    .container{max-width:960px;margin:20px auto;padding:15px;background:#222;border-radius:8px;}\n' +
'    .header{position:relative;text-align:center;margin-bottom:20px;}\n' +
'    .header img{width:100%;max-height:260px;object-fit:contain;border-radius:8px;}\n' +
'    .header .title{position:absolute;top:10px;left:10px;font-size:2.2rem;font-weight:bold;text-shadow:2px 2px 4px #000;}\n' +
'    .header .info{position:absolute;top:10px;right:10px;text-align:right;font-size:1rem;}\n' +
'    .header .info div{margin:4px 0;}\n' +
'    .diff-box{padding:8px 12px;border-radius:6px;display:inline-block;margin-top:8px;font-weight:bold;}\n' +
'    .basic{background:#0a0;} .advanced{background:#aa0;} .expert{background:#a00;}\n' +
'    .master{background:#a0a;} .reMaster{background:#d0d8ff;color:#000;}\n' +
'    table{border-collapse:collapse;width:100%;margin-top:20px;border:3px solid #ff0;}\n' +
'    th,td{border:1px solid #ff0;padding:6px;text-align:center;position:relative;}\n' +
'    th{background:#333;}\n' +
'    .crit{background:#ffff99;color:#000;}\n' +
'    .perf{background:#ff0;color:#000;}\n' +
'    .great{background:#ffb6c1;color:#000;}\n' +
'    .good{background:#90ee90;color:#000;}\n' +
'    .miss{background:#aaa;color:#000;}\n' +
'    .ach{background:#555;color:#fff;font-weight:bold;}\n' +
'    .arrow{cursor:pointer;font-size:1.2rem;margin:0 4px;color:#fff;}\n' +
'    .arrow:hover{color:#ff0;}\n' +
'    .finalRate{font-size:1.8rem;font-weight:bold;margin-top:12px;text-align:center;color:#ff0;}\n' +
'    .resetBtn{margin-top:15px;padding:8px 16px;background:#c00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;}\n' +
'    .resetBtn:hover{background:#f00;}\n' +
'    .break-special{font-size:0.85rem;line-height:1.2;}\n' +
'</style>\n' +
'</head>\n' +
'<body>\n' +
'<div class="container" id="main">\n' +
'    <div class="header">\n' +
'        <img id="jacket" src="" alt="jacket">\n' +
'        <div class="title" id="songName"></div>\n' +
'        <div class="info">\n' +
'            <div id="track"></div>\n' +
'            <div id="time"></div>\n' +
'            <div id="kind"></div>\n' +
'            <div><span id="level" class="diff-box"></span></div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <table id="scoreTable">\n' +
'        <thead>\n' +
'            <tr><th></th><th class="crit">CRITICAL PERFECT</th><th class="perf">PERFECT</th><th class="great">GREAT</th><th class="good">GOOD</th><th class="miss">MISS</th><th class="ach">ACHIVEMENT</th></tr>\n' +
'        </thead>\n' +
'        <tbody>\n' +
'            <tr><td>TAP</td><td class="val crit editable" data-type="tap" data-j="CRITICAL"></td><td class="val perf editable" data-type="tap" data-j="PERFECT"></td><td class="val great editable" data-type="tap" data-j="GREAT"></td><td class="val good editable" data-type="tap" data-j="GOOD"></td><td class="val miss editable" data-type="tap" data-j="MISS"></td><td class="ach" id="ach_tap"></td></tr>\n' +
'            <tr><td>HOLD</td><td class="val crit editable" data-type="hold" data-j="CRITICAL"></td><td class="val perf editable" data-type="hold" data-j="PERFECT"></td><td class="val great editable" data-type="hold" data-j="GREAT"></td><td class="val good editable" data-type="hold" data-j="GOOD"></td><td class="val miss editable" data-type="hold" data-j="MISS"></td><td class="ach" id="ach_hold"></td></tr>\n' +
'            <tr><td>SLIDE</td><td class="val crit editable" data-type="slide" data-j="CRITICAL"></td><td class="val perf editable" data-type="slide" data-j="PERFECT"></td><td class="val great editable" data-type="slide" data-j="GREAT"></td><td class="val good editable" data-type="slide" data-j="GOOD"></td><td class="val miss editable" data-type="slide" data-j="MISS"></td><td class="ach" id="ach_slide"></td></tr>\n' +
'            <tr><td>TOUCH</td><td class="val crit editable" data-type="touch" data-j="CRITICAL"></td><td class="val perf editable" data-type="touch" data-j="PERFECT"></td><td class="val great editable" data-type="touch" data-j="GREAT"></td><td class="val good editable" data-type="touch" data-j="GOOD"></td><td class="val miss editable" data-type="touch" data-j="MISS"></td><td class="ach" id="ach_touch"></td></tr>\n' +
'            <tr><td>BREAK</td><td class="val crit editable" data-type="breaks" data-j="CRITICAL"></td>\n' +
'                <td class="val perf break-special" id="breakPerf">75%:0<br>50%:0</td>\n' +
'                <td class="val great break-special" id="breakGreat">80%:0<br>60%:0<br>50%:0</td>\n' +
'                <td class="val good editable" data-type="breaks" data-j="GOOD"></td>\n' +
'                <td class="val miss editable" data-type="breaks" data-j="MISS"></td>\n' +
'                <td class="ach" id="ach_breaks"></td></tr>\n' +
'            <tr><td>TOTAL</td><td colspan="5" id="totalCounts"></td><td class="ach" id="ach_total"></td></tr>\n' +
'        </tbody>\n' +
'    </table>\n' +
'\n' +
'    <div class="finalRate" id="finalRate">99.9999%</div>\n' +
'    <button class="resetBtn" id="resetBtn">리셋</button>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'const raw = localStorage.getItem("maimaiResultData");\n' +
'if (!raw) { document.body.innerHTML = "<h1 style=\\"color:#f66;text-align:center;padding:50px;\\">데이터 없음</h1>"; }\n' +
'const d = JSON.parse(raw);\n' +
'const orig = JSON.parse(JSON.stringify(d.notes));\n' +
'const sol = d.solutions;\n' +
'let breakPerf75 = sol ? sol["75%Perfect"] : 0;\n' +
'let breakPerf50 = sol ? sol["50%Perfect"] : 0;\n' +
'let breakGreat80 = sol ? sol["80%Great"] : 0;\n' +
'let breakGreat60 = sol ? sol["60%Great"] : 0;\n' +
'let breakGreat50 = sol ? sol["50%Great"] : 0;\n' +
'document.getElementById("jacket").src = d.jacketImg || "";\n' +
'document.getElementById("songName").textContent = d.songName || "Unknown";\n' +
'document.getElementById("track").textContent = "Track " + (d.trackCount || "?");\n' +
'document.getElementById("time").textContent = d.realTime || "?";\n' +
'document.getElementById("kind").textContent = d.musicKind === "standard" ? "Standard" : d.musicKind === "delux" ? "Deluxe" : "?";\n' +
'const lvl = document.getElementById("level");\n' +
'lvl.textContent = d.level || "?";\n' +
'const diffMap = {basic:"#0a0",advanced:"#aa0",expert:"#a00",master:"#a0a",reMaster:"#d0d8ff"};\n' +
'lvl.style.background = diffMap[d.difficulty] || "#555";\n' +
'const weights = {tap:1, hold:2, slide:3, touch:1, breaks:5};\n' +
'const noteTypes = ["tap","hold","slide","touch","breaks"];\n' +
'function getTotal(t) {\n' +
'    const n = d.notes[t];\n' +
'    return n.CRITICAL + n.PERFECT + n.GREAT + n.GOOD + n.MISS;\n' +
'}\n' +
'function getScore(t) {\n' +
'    const n = d.notes[t];\n' +
'    const w = weights[t];\n' +
'    if (t !== "breaks") return (n.CRITICAL + n.PERFECT)*w + n.GREAT*w*0.8 + n.GOOD*w*0.5;\n' +
'    return n.CRITICAL*5 + (breakPerf75 + breakPerf50)*5 + breakGreat80*4 + breakGreat60*3 + breakGreat50*2.5 + n.GOOD*2;\n' +
'}\n' +
'function getMax(t) { return getTotal(t) * weights[t]; }\n' +
'function getLoss(t) { const m = getMax(t); return m===0?0:((m-getScore(t))/m*100).toFixed(2); }\n' +
'function getBonus() {\n' +
'    const B = getTotal("breaks");\n' +
'    if (B===0) return 0;\n' +
'    return (d.notes.breaks.CRITICAL + 0.75*breakPerf75 + 0.5*breakPerf50 + 0.4*d.notes.breaks.GREAT + 0.3*d.notes.breaks.GOOD) / B;\n' +
'}\n' +
'function calc() {\n' +
'    let W=0, S=0;\n' +
'    noteTypes.forEach(t=>{W+=getMax(t); S+=getScore(t);});\n' +
'    const notePct = W===0?0:(S/W*100);\n' +
'    const bonus = getBonus();\n' +
'    const total = notePct + bonus;\n' +
'    noteTypes.forEach(t=>document.getElementById("ach_"+t).textContent="-"+getLoss(t)+"%");\n' +
'    document.getElementById("ach_total").textContent=total.toFixed(4)+"%";\n' +
'    document.getElementById("finalRate").textContent=total.toFixed(4)+"%";\n' +
'    document.getElementById("totalCounts").textContent=noteTypes.map(getTotal).join(" / ");\n' +
'    document.getElementById("breakPerf").innerHTML="75%: "+breakPerf75+"<br>50%: "+breakPerf50;\n' +
'    document.getElementById("breakGreat").innerHTML="80%: "+breakGreat80+"<br>60%: "+breakGreat60+"<br>50%: "+breakGreat50;\n' +
'}\n' +
'function arrows(c) {\n' +
'    c.querySelectorAll(".arrow").forEach(a=>a.remove());\n' +
'    const up=document.createElement("span"); up.className="arrow"; up.textContent="↑"; up.onclick=()=>adj(c,1);\n' +
'    const dn=document.createElement("span"); dn.className="arrow"; dn.textContent="↓"; dn.onclick=()=>adj(c,-1);\n' +
'    c.appendChild(up); c.appendChild(dn);\n' +
'}\n' +
'function adj(cell, delta) {\n' +
'    const t=cell.dataset.type, j=cell.dataset.j, n=d.notes[t], tot=getTotal(t);\n' +
'    let val = n[j] + delta;\n' +
'    if (val<0 || val>tot) return;\n' +
'    if (j==="CRITICAL" || j==="PERFECT") {\n' +
'        n[j] = val;\n' +
'        const d = Math.abs(delta);\n' +
'        if (delta>0) {\n' +
'            if (t==="breaks") {\n' +
'                if (breakGreat80>=d) breakGreat80-=d; else return;\n' +
'            } else {\n' +
'                if (n.GREAT>=d) n.GREAT-=d; else return;\n' +
'            }\n' +
'        } else {\n' +
'            if (t==="breaks") breakGreat80+=d; else n.GREAT+=d;\n' +
'        }\n' +
'    } else {\n' +
'        const cp = n.CRITICAL + n.PERFECT;\n' +
'        if (delta>0 && cp<delta) return;\n' +
'        n[j] = val;\n' +
'        if (delta>0) {\n' +
'            if (n.CRITICAL>=delta) n.CRITICAL-=delta; else { const r=delta-n.CRITICAL; n.CRITICAL=0; n.PERFECT-=r; }\n' +
'        } else n.CRITICAL+=Math.abs(delta);\n' +
'    }\n' +
'    cell.textContent = n[j];\n' +
'    arrows(cell);\n' +
'    calc();\n' +
'}\n' +
'document.querySelectorAll("td.editable").forEach(c=>{\n' +
'    const t=c.dataset.type, j=c.dataset.j;\n' +
'    c.textContent = d.notes[t][j];\n' +
'    arrows(c);\n' +
'});\n' +
'calc();\n' +
'document.getElementById("resetBtn").onclick=()=>{\n' +
'    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));\n' +
'    breakPerf75 = sol ? sol["75%Perfect"] : 0;\n' +
'    breakPerf50 = sol ? sol["50%Perfect"] : 0;\n' +
'    breakGreat80 = sol ? sol["80%Great"] : 0;\n' +
'    breakGreat60 = sol ? sol["60%Great"] : 0;\n' +
'    breakGreat50 = sol ? sol["50%Great"] : 0;\n' +
'    document.querySelectorAll("td.editable").forEach(c=>{\n' +
'        const t=c.dataset.type, j=c.dataset.j;\n' +
'        c.textContent = d.notes[t][j];\n' +
'        arrows(c);\n' +
'    });\n' +
'    calc();\n' +
'};\n' +
'</script>\n' +
'</body>\n' +
'</html>';

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');

    if (results.length > 0) {
        alert('가능한 해답 ' + results.length + '개 발견!\n새 탭에서 편집 가능!');
    } else {
        alert('해답을 찾지 못했습니다.');
    }
})();
