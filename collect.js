
javascript:(function(){
  'use strict';

  const SERVER   = 'http://www.goodmint1452.kro.kr:3000';
  const BASE_URL = 'https://maimaidx-eng.com/maimai-mobile';

  if (location.origin !== 'https://maimaidx-eng.com') {
    alert('이 북마클릿은 maimaidx-eng.com 에서 실행해야 합니다.');
    return;
  }
  if (window.__MAIMAI_COLLECT_RUNNING__) {
    alert('이미 수집 중입니다. 잠시 기다려주세요.');
    return;
  }
  window.__MAIMAI_COLLECT_RUNNING__ = true;

  const uploadWin = window.open(SERVER + '/upload', 'maimai-upload');

  const post = (topic, result) => {
    try { uploadWin?.postMessage({ topic, result }, SERVER); } catch(e) {}
  };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const fetchDoc = async (path, params) => {
    const url = new URL(BASE_URL + path);
    if (params) Object.entries(params).forEach(([k,v]) => url.searchParams.set(k, v));
    const res = await fetch(url.toString(), { credentials: 'include' });
    const html = await res.text();
    return new DOMParser().parseFromString(html, 'text/html');
  };

  // ── 파싱 헬퍼 ──
  const diffFromSrc = src => {
    const m = /diff_([a-z]+)\.png/.exec(src || '');
    return { remaster:'RE_MASTER', master:'MASTER', expert:'EXPERT', advanced:'ADVANCED', basic:'BASIC' }[m?.[1]] || 'MASTER';
  };

  const typeFromEl = el => {
    const src = el?.querySelector('img.music_kind_icon')?.src || '';
    return src.includes('music_dx') ? 'DX' : 'STANDARD';
  };

  const comboFromSrc = src => {
    if (!src) return 'PLAYED';
    if (/applus|music_icon_app/.test(src))  return 'ALL_PERFECT_PLUS';
    if (/\/ap\b|music_icon_ap\b/.test(src)) return 'ALL_PERFECT';
    if (/fcplus|music_icon_fcp/.test(src))  return 'FULL_COMBO_PLUS';
    if (/\/fc\b|music_icon_fc\b/.test(src)) return 'FULL_COMBO';
    return 'PLAYED';
  };

  const syncFromSrc = src => {
    if (!src) return 'PLAYED';
    if (/fsdplus|music_icon_fdxp/.test(src))  return 'FULL_SYNC_DX_PLUS';
    if (/\/fsd\b|music_icon_fdx\b/.test(src)) return 'FULL_SYNC_DX';
    if (/fsplus|music_icon_fsp/.test(src))    return 'FULL_SYNC_PLUS';
    if (/\/fs\b|music_icon_fs\b/.test(src))   return 'FULL_SYNC';
    if (/\/sync\b|music_icon_sync\b/.test(src)) return 'SYNC_PLAY';
    return 'PLAYED';
  };

  const parseAch = str => {
    const n = parseFloat((str||'0').replace(/[^0-9.]/g,''));
    return Math.round(n * 10000);
  };

  const parseDx = str => {
    const m = /([\d,]+)\s*\/\s*([\d,]+)/.exec(str||'');
    if (!m) return { score:0, max:0 };
    return { score: +m[1].replace(/,/g,''), max: +m[2].replace(/,/g,'') };
  };

  const displayLevelFmt = s =>
    (s||'').replace(/^(\d+)(\+)?$/, (_,n,p) => `LEVEL_${n}${p?'_PLUS':''}`);

  // 자켓 이미지 URL 추출 헬퍼
  const getJacketFromBlock = block => {
    // 여러 셀렉터 시도 (maimaidx-eng.com 페이지 구조에 따라)
    return block.querySelector('img.music_image_block')?.src
        || block.querySelector('img[src*="/img/Music/"]')?.src
        || block.querySelector('img[src*="Music"]')?.src
        || null;
  };

  // ── 메인 수집 ──
  const collect = async () => {

    // 1. 플레이어 데이터
    post('startWork', 'playerData');
    const pdDoc = await fetchDoc('/playerData');

    const name   = pdDoc.querySelector('.name_block')?.textContent?.trim() || '';
    const rating = parseInt(pdDoc.querySelector('.rating_block')?.textContent?.trim()||'0') || 0;
    const profileImageSrc = pdDoc.querySelector('.main_wrapper img.w_112')?.src || '';

    const trophyEl    = pdDoc.querySelector('.trophy_block');
    const trophyTitle = pdDoc.querySelector('.trophy_inner_block')?.textContent?.trim() || '';
    let trophyTier = 'NORMAL';
    if (trophyEl) {
      const cls = trophyEl.className;
      if (cls.includes('Rainbow')) trophyTier = 'RAINBOW';
      else if (cls.includes('Gold'))   trophyTier = 'GOLD';
      else if (cls.includes('Silver')) trophyTier = 'SILVER';
      else if (cls.includes('Bronze')) trophyTier = 'BRONZE';
    }

    const starsRaw = pdDoc.querySelector('.p_l_10.f_l.f_14')?.textContent?.trim() || '☆0';
    const stars = parseInt(starsRaw.replace(/[^0-9]/g,'')) || 0;

    const pcText = pdDoc.querySelector('.m_5.m_b_5.t_r.f_12')?.textContent || '';
    const currentPlayCount = parseInt((pcText.match(/current version[：:]\s*([\d,]+)/)||[])[1]?.replace(/,/g,'')||'0') || 0;
    const totalPlayCount   = parseInt((pcText.match(/total play count[：:]\s*([\d,]+)/)||[])[1]?.replace(/,/g,'')||'0') || 0;

    const imgs35 = pdDoc.querySelectorAll('.main_wrapper img.h_35.f_l');
    const courseRank = parseInt((/course_rank_(\d+)/.exec(imgs35[0]?.src||'')||['','0'])[1]) || 0;
    const classRank  = parseInt((/class_rank_s_(\d+)/.exec(imgs35[1]?.src||'')||['','0'])[1]) || 0;

    // 레이팅 프레임 이미지 (rating frame)
    const ratingFrame = pdDoc.querySelector('.rating_block img')?.src
                     || pdDoc.querySelector('img[src*="rating_base"]')?.src
                     || pdDoc.querySelector('.f_r.t_r.f_0 div > img')?.src
                     || '';

    // 단 이미지 (dan rank image)
    const danImg = pdDoc.querySelector('img[src*="class_rank"]')?.src
                || pdDoc.querySelector('.p_l_10.f_l > img:nth-child(5)')?.src
                || '';

    const playerData = {
      name, rating, profileImageSrc, ratingFrame, danImage: danImg,
      trophy: { tier: trophyTier, title: trophyTitle },
      courseRank, classRank, stars,
      playCount: { total: totalPlayCount, current: currentPlayCount }
    };

    await sleep(200);
    post('completeWork', 'playerData');

    // 2. 친구 코드
    post('startWork', 'friendCode');
    const fcDoc = await fetchDoc('/friend/userFriendCode');
    const friendCode = fcDoc.querySelector('.main_wrapper .town_block > div')?.textContent?.trim() || '';
    post('completeWork', 'friendCode');
    post('profile', { player: playerData, friendCode });

    // 3. 레이팅 대상곡 (NEW / OLD 분류)
    post('startWork', 'ratingTarget');
    const rtDoc  = await fetchDoc('/home/ratingTargetMusic');
    const rtDivs = Array.from(rtDoc.querySelectorAll('.main_wrapper > div'));
    const newEntries = [], oldEntries = [];
    let rtSection = null;

    rtDivs.forEach(div => {
      if (div.className.includes('screw_block')) {
        const t = div.textContent;
        if (/new/i.test(t))         rtSection = 'new';
        else if (/old|others/i.test(t)) rtSection = 'old';
      } else if (div.querySelector('.music_name_block')) {
        const achStr = div.querySelector('.music_score_block')?.textContent?.trim() || '0%';
        const entry = {
          track: {
            title:        div.querySelector('.music_name_block')?.textContent?.trim() || '',
            difficulty:   diffFromSrc(div.querySelector('img.h_20.f_l')?.src || ''),
            type:         typeFromEl(div),
            displayLevel: displayLevelFmt(div.querySelector('.music_lv_block')?.textContent?.trim()),
            idx:          div.querySelector('input[name=idx]')?.value || ''
          },
          achievement: parseAch(achStr)
        };
        if      (rtSection === 'new') newEntries.push(entry);
        else if (rtSection === 'old') oldEntries.push(entry);
      }
    });
    await sleep(200);
    post('completeWork', 'ratingTarget');

    // 4. 전체 악곡 점수 (5난이도)
    const DIFFS    = ['BASIC','ADVANCED','EXPERT','MASTER','RE_MASTER'];
    const DIFF_IDX = { BASIC:0, ADVANCED:1, EXPERT:2, MASTER:3, RE_MASTER:4 };
    const allRecords = [];

    for (const diff of DIFFS) {
      post('startWork', `songScores:${diff}`);

      const doc    = await fetchDoc('/record/musicGenre/search', { genre:99, diff: DIFF_IDX[diff] });
      const blocks = Array.from(doc.querySelectorAll('.main_wrapper > div'))
                       .filter(d => d.querySelector('form') && d.querySelector('input[name=idx]'));

      for (const block of blocks) {
        const form  = block.querySelector('form');
        const title = form.querySelector('.music_name_block')?.textContent?.trim() || '';
        const type  = typeFromEl(block);
        const idx   = form.querySelector('input[name=idx]')?.value || '';

        const scoreBlocks = form.querySelectorAll('.music_score_block');
        if (!scoreBlocks.length) continue;

        const achievement = parseAch(scoreBlocks[0]?.textContent?.trim());
        const dxScore     = parseDx(scoreBlocks[1]?.textContent?.trim());

        const markImgs = Array.from(form.querySelectorAll('img.h_30.f_r'));
        const combo = comboFromSrc(markImgs[1]?.src || '');
        const sync  = syncFromSrc(markImgs[0]?.src  || '');

        // 자켓 이미지 URL 수집
        const jacket = getJacketFromBlock(block);

        allRecords.push({
          track: { title, difficulty: diff, type, displayLevel: displayLevelFmt(form.querySelector('.music_lv_block')?.textContent?.trim()), idx },
          score: { achievement, dxScore, combo, sync, jacket }
        });
      }

      post('completeWork', `songScores:${diff}`);
      await sleep(300);
    }

    // 5. 레이팅 인덱스 매핑
    post('startWork', 'dedupeRecords');

    const findIdx = (track, entries) => {
      const i = entries.findIndex(e =>
        e.track.title      === track.title &&
        e.track.difficulty === track.difficulty &&
        e.track.type       === track.type
      );
      return i === -1 ? null : i;
    };

    const records = allRecords.map(({ track, score }) => ({
      track: { title: track.title, difficulty: track.difficulty, type: track.type },
      score: {
        achievement:    score.achievement,
        dxScore:        score.dxScore,
        combo:          score.combo,
        sync:           score.sync,
        jacket:         score.jacket,
        newRatingIndex: findIdx(track, newEntries),
        oldRatingIndex: findIdx(track, oldEntries),
      }
    }));

    post('completeWork', 'dedupeRecords');

    // 6. 완료
    post('complete', {
      date:      new Date().toISOString(),
      profile:   playerData,
      records,
      friendCode
    });
  };

  // upload.html 의 'start' 신호 대기
  const onMessage = async e => {
    if (e.origin !== SERVER) return;
    if (e.data?.topic !== 'start') return;
    window.removeEventListener('message', onMessage);
    try {
      await collect();
    } catch (err) {
      console.error('[maimai-collect]', err);
      post('error', err?.message || String(err));
    } finally {
      window.__MAIMAI_COLLECT_RUNNING__ = false;
    }
  };

  window.addEventListener('message', onMessage);
  setTimeout(() => {
    window.removeEventListener('message', onMessage);
    window.__MAIMAI_COLLECT_RUNNING__ = false;
  }, 30000);
})();
