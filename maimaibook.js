javascript:(function() {
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
    const level = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog_"][class*="*container"] > div.basic_block.m_5.m_t_17.m_r_60.p_5.p_l_10.f_13.break > div.w_80.f_r > div')?.textContent.trim() || null;
    const jacketImg = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog*"][class*="*container"] > div.p_r.f_0 > img.music_img.m_5.m_b_17.m_r_0.f_l')?.src || null;     
    const trackCount = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span.red.f_b.v_b')?.textContent.trim() || null;     
    const realTime = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10 > div.playlog_top_container.p_r > div.sub_title.t_c.f_r.f_11 > span:nth-child(2)')?.textContent.trim() || null;     
    const imgElement = document.querySelector('body > div.wrapper.main_wrapper.t_c > div.p_10.t_l.f_0.v_b > div[class*="playlog*"][class*="*container"] > div.p_r.f_0 > img.playlog_music_kind_icon')?.src || null;     
    const musicKind = imgElement ? (imgElement.src === 'https://maimaidx-eng.com/maimai-mobile/img/music_standard.png' ? 'standard' : imgElement.src === 'https://maimaidx-eng.com/maimai-mobile/img/music_dx.png' ? 'delux' : null) : null;
    const diffImg = document.querySelector('img.playlog_diff.v_b')?.src || null;     
    const difficulty = diffImg ? diffImg.match(/diff*([a-z]+).png$/i)?.[1] : null;
   
    // === 2. 달성률 정확하게 추출 (정규식) ===
    const divElement = document.querySelector('div.playlog_achievement_txt.t_r');
    if (!divElement) {
        console.error("달성률 요소를 찾을 수 없습니다.");
        return;
    }
    const text = divElement.textContent.trim();
    const match = text.match(/(\d+)\.(\d+)%/);
    if (!match) {
        console.error("달성률 파싱 실패:", text);
        return;
    }
    const finalRate = parseFloat(`${match[1]}.${match[2]}`);
    console.log("게임 달성률:", finalRate);
    // === 3. 모든 가능한 해답 계산 ===
    function calcAllSolutions(tap, hold, slide, touch, breakCounts, finalRate, roundMode = "floor") {
        const weights = { TAP: 1, HOLD: 2, SLIDE: 3, TOUCH: 1, BREAK: 5 };
        // 전체 이론치 (W)
        const W =
            (tap.CRITICAL + tap.PERFECT + tap.GREAT + tap.GOOD + tap.MISS) * weights.TAP +
            (hold.CRITICAL + hold.PERFECT + hold.GREAT + hold.GOOD + hold.MISS) * weights.HOLD +
            (slide.CRITICAL + slide.PERFECT + slide.GREAT + slide.GOOD + slide.MISS) * weights.SLIDE +
            (touch.CRITICAL + touch.PERFECT + touch.GREAT + touch.GOOD + touch.MISS) * weights.TOUCH +
            (breakCounts.CRITICAL + breakCounts.PERFECT + breakCounts.GREAT + breakCounts.GOOD + breakCounts.MISS) * weights.BREAK;
        // 일반 노트 점수 합산
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
        // BREAK PERFECT 분할 (75% vs 50%)
        for (let x = 0; x <= P; x++) {
            const y = P - x;
            // BREAK GREAT 분할 (80%, 60%, 50%)
            for (let g80 = 0; g80 <= G; g80++) {
                for (let g60 = 0; g60 <= G - g80; g60++) {
                    const g50 = G - g80 - g60;
                    // BREAK 점수 계산
                    const Sg = 0.8 * g80 + 0.6 * g60 + 0.5 * g50;
                    const breakScore = (C + P) * 5 + 0.4 * D * 5 + 5 * Sg;
                    const noteScoreTotal = baseScore + breakScore;
                    const notePercent = (100 * noteScoreTotal) / W;
                    // BREAK 보너스 (최대 1%)
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
    // 선택: 결과 창에 alert 띄우기
    if (results.length > 0) {
        alert(`가능한 해답 ${results.length}개 발견!\n콘솔을 확인하세요.`);
    } else {
        alert("해답을 찾지 못했습니다.\n계산 로직을 확인해보세요.");
    }
})();

// === 추가 기능: 실시간 판정 조작 + 기여도 + 예상 달성률 ===
javascript:(function() {
    // 기존 변수 재사용 (수정 없음)
    const weights = { TAP: 1, HOLD: 2, SLIDE: 3, TOUCH: 1, BREAK: 5 };
    const W = (tap.CRITICAL + tap.PERFECT + tap.GREAT + tap.GOOD + tap.MISS) * weights.TAP +
              (hold.CRITICAL + hold.PERFECT + hold.GREAT + hold.GOOD + hold.MISS) * weights.HOLD +
              (slide.CRITICAL + slide.PERFECT + slide.GREAT + slide.GOOD + slide.MISS) * weights.SLIDE +
              (touch.CRITICAL + touch.PERFECT + touch.GREAT + touch.GOOD + touch.MISS) * weights.TOUCH +
              (breaks.CRITICAL + breaks.PERFECT + breaks.GREAT + breaks.GOOD + breaks.MISS) * weights.BREAK;

    const current = { tap: {...tap}, hold: {...hold}, slide: {...slide}, touch: {...touch}, breaks: {...breaks} };
    const solution = results[0] || {};

    function calcTotal() {
        let base = 0;
        ['tap','hold','slide','touch'].forEach(t => {
            base += (current[t].CRITICAL + current[t].PERFECT) * weights[t.toUpperCase()] +
                    current[t].GREAT * weights[t.toUpperCase()] * 0.8 +
                    current[t].GOOD * weights[t.toUpperCase()] * 0.5;
        });
        const x = solution["75%Perfect"] || 0;
        const g80 = solution["80%Great"] || 0, g60 = solution["60%Great"] || 0, g50 = solution["50%Great"] || 0;
        const breakScore = (breaks.CRITICAL + breaks.PERFECT) * 5 + 0.4 * breaks.GOOD * 5 + 5 * (0.8*g80 + 0.6*g60 + 0.5*g50);
        const noteP = 100 * (base + breakScore) / W;
        const B = Object.values(breaks).reduce((a,b)=>a+b,0);
        const bonusP = (breaks.CRITICAL + 0.5*breaks.PERFECT + 0.25*x + 0.4*breaks.GREAT + 0.3*breaks.GOOD) / B;
        return (noteP + bonusP).toFixed(4);
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'position:fixed;top:10px;left:10px;background:#000;color:#0f0;padding:12px;border:2px solid #0f0;font-family:monospace;font-size:12px;z-index:99999;max-width:90%;overflow:auto;border-radius:8px;';
    document.body.appendChild(panel);

    function render() {
        panel.innerHTML = `<div style="color:#0ff;font-weight:bold;margin-bottom:8px;">실시간 조작기 <button onclick="this.parentElement.parentElement.remove()" style="float:right;background:#f00;color:#fff;border:none;padding:1px 5px;font-size:10px;cursor:pointer;">X</button></div>`;
        ['tap','hold','slide','touch'].forEach(type => {
            const total = Object.values(current[type]).reduce((a,b)=>a+b,0);
            let row = `<div style="margin:6px 0;color:#ff0;font-weight:bold;">${type.toUpperCase()} (총 ${total})</div><div style="display:flex;gap:4px;flex-wrap:wrap;">`;
            ['PERFECT','GREAT','GOOD','MISS'].forEach(j => {
                const c = current[type][j];
                const score = j==='PERFECT'?1:j==='GREAT'?0.8:j==='GOOD'?0.5:0;
                const contrib = c * score * weights[type.toUpperCase()] * 100 / W;
                row += `<div style="background:#111;padding:3px 6px;border:1px solid #555;text-align:center;min-width:55px;">
                    <div>${j[0]}: ${c}</div>
                    <div style="font-size:9px;color:${contrib>0?'#0f0':'#666'}">+${contrib.toFixed(2)}%</div>
                    ${j!=='MISS'?`<button onclick="adj('${type}','${j}',-1)" style="font-size:9px;padding:0 3px;">-</button><button onclick="adj('${type}','${j}',1)" style="font-size:9px;padding:0 3px;">+</button>`:''}
                </div>`;
            });
            row += `</div>`;
            panel.innerHTML += row;
        });
        panel.innerHTML += `<div style="margin-top:12px;padding:10px;background:#001;border:2px solid #0ff;text-align:center;font-size:15px;font-weight:bold;color:#ff0;">
            예상 달성률: ${calcTotal()}%
        </div>`;
    }

    window.adj = (type, judg, delta) => {
        if (delta < 0 && current[type][judg] === 0) return;
        if (delta > 0 && current[type].MISS === 0) return;
        current[type][judg] += delta;
        if (delta > 0) current[type].MISS -= delta;
        else {
            const toMove = -delta;
            const others = ['PER完美的','GREAT','GOOD'].filter(j => j !== judg && current[type][j] > 0);
            if (others.length > 0) current[type][others[0]] -= toMove;
            else current[type].MISS += toMove;
        }
        render();
    };

    render();
})();
