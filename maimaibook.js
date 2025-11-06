javascript:(function () {
    /* ============================= 기존 코드 (절대 건드리지 않음) ============================= */
    // [당신의 기존 코드 전체 복사 붙여넣기]
    
    // === 완전 수정된 새 탭 코드 (기존 코드 끝난 후 추가) ===
    (() => {
        const raw = localStorage.getItem('maimaiResultData');
        if (!raw) {
            alert('데이터가 없습니다. 먼저 결과를 계산해주세요.');
            return;
        }
        const d = JSON.parse(raw);
        const orig = JSON.parse(JSON.stringify(d.notes));
        const sol = d.solutions;

        const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>🎵 Maimai DX 결과 분석기</title>
<style>
    *{box-sizing:border-box;}
    body{font-family:'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 50%,#16213e 100%);color:#eee;margin:0;padding:20px;overflow-x:auto;}
    .container{max-width:1000px;margin:0 auto;padding:20px;background:rgba(30,30,40,0.95);border-radius:15px;box-shadow:0 20px 40px rgba(0,0,0,0.5);backdrop-filter:blur(10px);}
    .header{position:relative;text-align:center;margin-bottom:30px;}
    .header img{width:100%;max-height:280px;object-fit:cover;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.7);}
    .header .title{position:absolute;bottom:15px;left:15px;right:15px;font-size:2.5rem;font-weight:900;text-shadow:3px 3px 6px #000;background:linear-gradient(45deg,#ffeb3b,#ff9800);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
    .header .info{position:absolute;top:15px;right:15px;text-align:right;font-size:1.1rem;background:rgba(0,0,0,0.8);padding:12px 15px;border-radius:10px;}
    .header .info div{margin:6px 0;}
    .diff-box{padding:8px 16px;border-radius:8px;display:inline-block;font-weight:900;font-size:1.2rem;text-shadow:1px 1px 2px #000;}
    .basic{background:linear-gradient(45deg,#4caf50,#45a049);color:#fff;}
    .advanced{background:linear-gradient(45deg,#ff9800,#f57c00);color:#000;}
    .expert{background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;}
    .master{background:linear-gradient(45deg,#9c27b0,#7b1fa2);color:#fff;}
    .reMaster{background:linear-gradient(45deg,#e1bee7,#ce93d8);color:#000;}
    
    table{border-collapse:collapse;width:100%;margin-top:25px;border:4px solid #ffeb3b;box-shadow:0 10px 30px rgba(255,235,59,0.3);}
    th,td{border:2px solid #ffeb3b;padding:12px 8px;text-align:center;position:relative;font-weight:600;}
    th{background:linear-gradient(45deg,#333,#555);color:#ffeb3b;font-size:1.1rem;}
    .crit{background:linear-gradient(45deg,#fff9c4,#fff176);color:#000;font-weight:900;}
    .perf{background:linear-gradient(45deg,#ffeb3b,#fdd835);color:#000;font-weight:900;}
    .great{background:linear-gradient(45deg,#f8bbd9,#f48fb1);color:#000;}
    .good{background:linear-gradient(45deg,#a5d6a7,#81c784);color:#000;}
    .miss{background:linear-gradient(45deg,#757575,#616161);color:#fff;}
    .ach{background:linear-gradient(45deg,#424242,#212121);color:#ffeb3b;font-weight:900;}
    
    .arrow{cursor:pointer;font-size:1.5rem;margin:0 4px;color:#ff5722;transition:all 0.2s;}
    .arrow:hover{color:#ffeb3b;transform:scale(1.2);}
    
    .loss{font-size:0.75rem;display:block;margin-top:4px;font-weight:700;}
    .crit .loss{color:#ff9800;}
    .perf .loss{color:#f57c00;}
    .great .loss{color:#c2185b;}
    .good .loss{color:#388e3c;}
    .miss .loss{color:#616161;}
    
    .finalRate{font-size:3rem;font-weight:900;margin:25px 0;text-align:center;background:linear-gradient(45deg,#ffeb3b,#ff9800);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 20px rgba(255,235,59,0.5);}
    .resetBtn{display:block;margin:25px auto 0;padding:12px 30px;background:linear-gradient(45deg,#f44336,#d32f2f);color:#fff;border:none;border-radius:25px;cursor:pointer;font-weight:900;font-size:1.2rem;transition:all 0.3s;box-shadow:0 5px 15px rgba(244,67,54,0.4);}
    .resetBtn:hover{background:linear-gradient(45deg,#ff5722,#e64a19);transform:translateY(-2px);box-shadow:0 8px 25px rgba(244,67,54,0.6);}
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <img id="jacket" src="" alt="Jacket">
        <div class="title" id="songName">곡명 로딩중...</div>
        <div class="info">
            <div id="track"></div>
            <div id="time"></div>
            <div id="kind"></div>
            <div><span id="level" class="diff-box">Lv.??</span></div>
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
                <th class="ach">ACHIEVEMENT</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>TAP</td><td class="val crit" data-type="tap" data-j="CRITICAL"></td><td class="val perf" data-type="tap" data-j="PERFECT"></td><td class="val great" data-type="tap" data-j="GREAT"></td><td class="val good" data-type="tap" data-j="GOOD"></td><td class="val miss" data-type="tap" data-j="MISS"></td><td class="ach" id="ach_tap"></td></tr>
            <tr><td>HOLD</td><td class="val crit" data-type="hold" data-j="CRITICAL"></td><td class="val perf" data-type="hold" data-j="PERFECT"></td><td class="val great" data-type="hold" data-j="GREAT"></td><td class="val good" data-type="hold" data-j="GOOD"></td><td class="val miss" data-type="hold" data-j="MISS"></td><td class="ach" id="ach_hold"></td></tr>
            <tr><td>SLIDE</td><td class="val crit" data-type="slide" data-j="CRITICAL"></td><td class="val perf" data-type="slide" data-j="PERFECT"></td><td class="val great" data-type="slide" data-j="GREAT"></td><td class="val good" data-type="slide" data-j="GOOD"></td><td class="val miss" data-type="slide" data-j="MISS"></td><td class="ach" id="ach_slide"></td></tr>
            <tr><td>TOUCH</td><td class="val crit" data-type="touch" data-j="CRITICAL"></td><td class="val perf" data-type="touch" data-j="PERFECT"></td><td class="val great" data-type="touch" data-j="GREAT"></td><td class="val good" data-type="touch" data-j="GOOD"></td><td class="val miss" data-type="touch" data-j="MISS"></td><td class="ach" id="ach_touch"></td></tr>
            <tr><td>BREAK</td>
                <td class="val crit" data-type="breaks" data-j="CRITICAL"></td>
                <td class="val perf" id="breakPerf">0-0</td>
                <td class="val great" id="breakGreat">0-0-0</td>
                <td class="val good" data-type="breaks" data-j="GOOD"></td>
                <td class="val miss" data-type="breaks" data-j="MISS"></td>
                <td class="ach" id="ach_break"></td>
            </tr>
            <tr><td><b>TOTAL</b></td><td colspan="5" id="totalCounts"></td><td class="ach" id="ach_total"></td></tr>
        </tbody>
    </table>
    
    <div class="finalRate" id="finalRate">101.0000%</div>
    <button class="resetBtn" id="resetBtn">🔄 원래대로 리셋</button>
</div>

<script>
const noteTypes = ['tap','hold','slide','touch','breaks'];
const judgments = ['CRITICAL','PERFECT','GREAT','GOOD','MISS'];
const weights = {tap:1, hold:2, slide:3, touch:1, breaks:5};

// 데이터 초기화
noteTypes.forEach(t => {
    judgments.forEach(j => {
        const cell = document.querySelector(\`td[data-type="\${t}"][data-j="\${j}"]\`);
        if (cell) cell.dataset.orig = d.notes[t][j];
    });
});

// 상단 정보
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

// BREAK 특수 표시
if (sol) {
    document.getElementById('breakPerf').textContent = sol['75%Perfect'] + '-' + sol['50%Perfect'];
    document.getElementById('breakGreat').textContent = sol['80%Great'] + '-' + sol['60%Great'] + '-' + sol['50%Great'];
}

// 계산 함수들
function getTotal(note) { return note.CRITICAL + note.PERFECT + note.GREAT + note.GOOD + note.MISS; }
function getMaxScore(note, w) { return getTotal(note) * w; }
function getScore(note, w) {
    return (note.CRITICAL + note.PERFECT) * w + note.GREAT * w * 0.8 + note.GOOD * w * 0.5;
}
function getLoss(note, w) {
    const max = getMaxScore(note, w);
    return max === 0 ? '0.0000' : ((getMaxScore(note, w) - getScore(note, w)) / max * 100).toFixed(4);
}
function getBreakBonus() {
    const b = d.notes.breaks;
    const B = getTotal(b);
    if (B === 0) return 0;
    const p75 = sol ? sol['75%Perfect'] : 0;
    const p50 = sol ? sol['50%Perfect'] : 0;
    const g80 = sol ? sol['80%Great'] : 0;
    const g60 = sol ? sol['60%Great'] : 0;
    const g50 = sol ? sol['50%Great'] : 0;
    const bonus = (b.CRITICAL * 1.0 + p75 * 0.75 + p50 * 0.5 + (g80 + g60 + g50) * 0.4 + b.GOOD * 0.3) / B;
    return bonus;
}

function calcAll() {
    let W = 0, S = 0;
    noteTypes.forEach(t => {
        const w = weights[t];
        const n = d.notes[t];
        W += getMaxScore(n, w);
        S += getScore(n, w);
    });
    const notePct = W === 0 ? 0 : (S / W * 100);
    const bonusPct = getBreakBonus();
    const totalPct = notePct + bonusPct;

    // 각 노트 ACHIEVEMENT
    noteTypes.forEach(t => {
        const loss = getLoss(d.notes[t], weights[t]);
        document.getElementById('ach_' + t).innerHTML = '<b>-' + loss + '%</b>';
    });
    document.getElementById('ach_total').innerHTML = '<b>' + totalPct.toFixed(4) + '%</b>';
    document.getElementById('finalRate').textContent = totalPct.toFixed(4) + '%';

    // TOTAL counts
    const totals = noteTypes.map(t => getTotal(d.notes[t]));
    document.getElementById('totalCounts').textContent = totals.join(' / ');
}

// 완전 수정된 조정 함수 (버그 모두 픽스)
function makeArrow(cell, delta) {
    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = delta > 0 ? '↑' : '↓';
    arrow.onclick = () => adjust(cell, delta);
    return arrow;
}

function adjust(cell, delta) {
    const type = cell.dataset.type;
    const jud = cell.dataset.j;
    if (!type || !jud) return;
    
    const note = d.notes[type];
    let cur = note[jud] || 0;
    let target = cur + delta;

    if (target < 0) return;
    const total = getTotal(note);
    if (target > total) return;

    // 🔧 CRITICAL/PERFECT 조정 (버그 픽스)
    if (jud === 'CRITICAL' || jud === 'PERFECT') {
        note[jud] = target;
        const diff = Math.abs(delta);
        
        if (delta < 0) { // ↓ → GREAT ↑
            note.GREAT += diff;
        } else { // ↑ → GREAT ↓
            if (note.GREAT >= diff) {
                note.GREAT -= diff;
            } else {
                const remain = diff - note.GREAT;
                note.GREAT = 0;
                if (note.PERFECT >= remain) {
                    note.PERFECT -= remain;
                } else return;
            }
        }
    } 
    // 🔧 GREAT/GOOD/MISS 조정 (버그 픽스)
    else {
        const cpTotal = note.CRITICAL + note.PERFECT;
        if (delta > 0 && cpTotal < delta) return; // CP 부족
        
        note[jud] = target;
        
        if (delta > 0) { // ↑ → CRITICAL ↓
            let remain = delta;
            if (note.CRITICAL >= remain) {
                note.CRITICAL -= remain;
            } else {
                remain -= note.CRITICAL;
                note.CRITICAL = 0;
                if (note.PERFECT >= remain) {
                    note.PERFECT -= remain;
                } else return;
            }
        } else { // ↓ → CRITICAL ↑
            note.CRITICAL += diff;
        }
    }

    // 🔧 UI 완전 재생성 (화살표 무한생성 버그 픽스)
    cell.innerHTML = note[jud];
    cell.appendChild(makeArrow(cell, 1));
    cell.appendChild(makeArrow(cell, -1));
    
    // 🔧 판정별 실점률 표시
    const loss = getLoss(d.notes[type], weights[type]);
    const lossSpan = document.createElement('div');
    lossSpan.className = 'loss';
    lossSpan.textContent = '-' + loss + '%';
    cell.appendChild(lossSpan);
    
    calcAll();
}

// 셀 초기화
document.querySelectorAll('td.val').forEach(td => {
    const type = td.dataset.type;
    const jud = td.dataset.j;
    if (!type || !jud) return;
    
    const val = d.notes[type][jud];
    td.innerHTML = val;
    td.appendChild(makeArrow(td, 1));
    td.appendChild(makeArrow(td, -1));
    
    // 초기 실점률 표시
    const loss = getLoss(d.notes[type], weights[type]);
    const lossSpan = document.createElement('div');
    lossSpan.className = 'loss';
    lossSpan.textContent = '-' + loss + '%';
    td.appendChild(lossSpan);
});

// 리셋 버튼
document.getElementById('resetBtn').onclick = () => {
    Object.assign(d.notes, JSON.parse(JSON.stringify(orig)));
    
    document.querySelectorAll('td.val').forEach(td => {
        const type = td.dataset.type;
        const jud = td.dataset.j;
        if (!type || !jud) return;
        
        const val = d.notes[type][jud];
        td.innerHTML = val;
        td.appendChild(makeArrow(td, 1));
        td.appendChild(makeArrow(td, -1));
        
        // 리셋 후 실점률
        const loss = getLoss(d.notes[type], weights[type]);
        const lossSpan = document.createElement('div');
        lossSpan.className = 'loss';
        lossSpan.textContent = '-' + loss + '%';
        td.appendChild(lossSpan);
    });
    
    if (sol) {
        document.getElementById('breakPerf').textContent = sol['75%Perfect']+'-'+sol['50%Perfect'];
        document.getElementById('breakGreat').textContent = sol['80%Great']+'-'+sol['60%Great']+'-'+sol['50%Great'];
    }
    
    calcAll();
};

// 최초 계산
calcAll();
</script>
</body>
</html>`;

        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');

        if (sol) {
            alert(`✨ 분석 완료!\n새 탭에서 확인하세요\n\nBREAK PERFECT: ${sol['75%Perfect']}-${sol['50%Perfect']}\nBREAK GREAT: ${sol['80%Great']}-${sol['60%Great']}-${sol['50%Great']}`);
        } else {
            alert('✨ 분석 완료! 새 탭에서 확인하세요.');
        }
    })();
})();
