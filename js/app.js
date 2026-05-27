const App = (() => {
  let currentPage = 'home';
  let activeCat = 'all';
  let activeTag = null;
  let activeUsageTab = {};  // oilId → tab index
  let qaOilFilter = null;

  // ── 페이지 전환 ──────────────────────────────────
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    const nav = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (nav) nav.classList.add('active');
    currentPage = page;
    window.scrollTo(0, 0);
    if (page === 'home')   renderHome();
    if (page === 'oils')   renderOils();
    if (page === 'qa')     renderQAList();
    if (page === 'search') setTimeout(() => document.getElementById('search-input')?.focus(), 100);
  }

  // ── 홈 ──────────────────────────────────────────
  function renderHome() {
    renderOilOfDay();
    renderFeatured();
    renderRecentQAHome();
  }

  function renderOilOfDay() {
    const oil = OILS_DATA[new Date().getDate() % OILS_DATA.length];
    const el = document.getElementById('oil-of-day');
    if (!el || !oil) return;
    const imgHtml = oil.productImage
      ? `<img class="ood-product-img" src="${oil.productImage}" alt="${oil.nameKr}">`
      : `<span style="font-size:42px">${oil.emoji}</span>`;
    el.innerHTML = `
      <div class="ood-card" onclick="App.openOilDetail(${oil.id})">
        <div class="ood-img-wrap">${imgHtml}</div>
        <div class="ood-info">
          <div class="ood-label">오늘의 오일</div>
          <div class="ood-name-kr">${oil.nameKr}</div>
          <div class="ood-name-en">${oil.nameEn}</div>
          <div class="ood-desc">${oil.description.slice(0,65)}…</div>
        </div>
        <div class="ood-arrow">›</div>
      </div>`;
  }

  function renderFeatured() {
    const featured = OILS_DATA.filter(o => o.featured);
    const el = document.getElementById('featured-scroll');
    if (!el) return;
    el.innerHTML = featured.map(oil => {
      const cat = CATEGORIES[oil.category] || {};
      const imgHtml = oil.productImage
        ? `<img class="feat-product-img" src="${oil.productImage}" alt="${oil.nameKr}">`
        : `<span style="font-size:48px;filter:drop-shadow(0 4px 12px rgba(0,0,0,.15))">${oil.emoji}</span>`;
      return `
        <div class="featured-card" onclick="App.openOilDetail(${oil.id})">
          <div class="feat-img-wrap plant-${oil.plantType||'blend'}">${imgHtml}</div>
          <div class="featured-body">
            <div class="featured-cat" style="color:${cat.color||'#888'}">${cat.label||''}</div>
            <div class="featured-name-kr">${oil.nameKr}</div>
            <div class="featured-name-en">${oil.nameEn}</div>
          </div>
        </div>`;
    }).join('');
  }

  function renderRecentQAHome() {
    const el = document.getElementById('recent-qa');
    if (!el) return;
    el.innerHTML = QA.getAll().slice(0, 3).map(q => qaCardSmall(q)).join('');
  }

  function qaCardSmall(q) {
    return `
      <div class="qa-preview-card" onclick="App.openQADetail(${q.id})">
        <div class="qa-preview-title">${q.title}</div>
        <div class="qa-preview-meta">
          <span>💬 ${q.answers?.length||0}개</span>
          <span>❤️ ${q.likes||0}</span>
          <span>${q.date}</span>
        </div>
      </div>`;
  }

  // ── 오일 목록 ────────────────────────────────────
  function renderOils() {
    renderCatTabs();
    renderTagRow();
    renderOilGrid();
  }

  function renderCatTabs() {
    const el = document.getElementById('cat-tabs');
    if (!el) return;
    const tabs = [
      { key: 'all',       label: '전체',      emoji: '🌿' },
      { key: 'single',    label: '단일 오일',  emoji: '🌱' },
      { key: 'blend',     label: '블렌드',     emoji: '✨' },
      { key: 'mood',      label: '기분조절',   emoji: '☀️' },
      { key: 'emotional', label: '감정조절',   emoji: '💜' },
    ];
    el.innerHTML = tabs.map(t => `
      <button class="cat-tab ${activeCat === t.key ? 'active' : ''}"
        onclick="App.setCat('${t.key}')">
        ${t.emoji} ${t.label}
      </button>`).join('');
  }

  function renderTagRow() {
    const el = document.getElementById('tag-row');
    if (!el) return;
    const tags = ['수면','진정','피부','면역','소화','에너지','두통','스트레스','호흡기','항균','여성건강','집중력','통증','항염','노화방지'];
    el.innerHTML = tags.map(t => `
      <button class="tag-pill ${activeTag === t ? 'active' : ''}"
        onclick="App.setTag('${t}')">
        #${t}
      </button>`).join('');
  }

  function setCat(cat) {
    activeCat = cat; activeTag = null;
    renderCatTabs(); renderTagRow(); renderOilGrid();
  }

  function setTag(tag) {
    activeTag = activeTag === tag ? null : tag;
    renderTagRow(); renderOilGrid();
  }

  function renderOilGrid(oils = null) {
    let list = oils || OILS_DATA;
    if (!oils) {
      if (activeCat !== 'all') list = list.filter(o => o.category === activeCat);
      if (activeTag) list = list.filter(o => (o.tags||[]).includes(activeTag));
    }
    const el = document.getElementById('oils-list');
    if (!el) return;
    if (!list.length) { el.innerHTML = '<div class="empty-state">해당하는 오일이 없습니다.</div>'; return; }
    el.innerHTML = list.map(oilCard).join('');
  }

  function oilCard(oil) {
    const cat = CATEGORIES[oil.category] || {};
    const thumbHtml = oil.productImage
      ? `<img class="oil-thumb-img" src="${oil.productImage}" alt="${oil.nameKr}">`
      : `<div class="oil-thumb-fallback plant-${oil.plantType||'blend'}"><span>${oil.emoji}</span></div>`;
    return `
      <div class="oil-card" onclick="App.openOilDetail(${oil.id})">
        <div class="oil-thumb-wrap">${thumbHtml}</div>
        <div class="oil-info">
          <div class="oil-info-top">
            <span class="oil-kr">${oil.nameKr}</span>
            <span class="oil-cat-dot" style="background:${cat.color||'#888'}"></span>
          </div>
          <div class="oil-en">${oil.nameEn}</div>
          <div class="oil-benefit">${(oil.benefits||[]).slice(0,2).join(' · ')}</div>
          <div class="oil-tags-row">${(oil.tags||[]).slice(0,3).map(t=>`<span class="oil-tag">#${t}</span>`).join('')}</div>
        </div>
        <div class="oil-chevron">›</div>
      </div>`;
  }

  // ── 오일 검색 (오일 페이지 내) ───────────────────
  function doOilsSearch(keyword) {
    if (!keyword?.trim()) { renderOilGrid(); return; }
    const kw = keyword.toLowerCase();
    const results = OILS_DATA.filter(o =>
      o.nameKr.includes(keyword) ||
      o.nameEn.toLowerCase().includes(kw) ||
      (o.tags||[]).some(t => t.includes(keyword)) ||
      o.description.includes(keyword) ||
      (o.benefits||[]).some(b => b.includes(keyword)) ||
      (o.ingredients||[]).some(i => i.includes(keyword))
    );
    renderOilGrid(results);
  }

  // ── 오일 상세 모달 ────────────────────────────────
  function openOilDetail(id) {
    const oil = OILS_DATA.find(o => o.id === id);
    if (!oil) return;
    const cat = CATEGORIES[oil.category] || {};
    const modal = document.getElementById('oil-modal');
    const content = document.getElementById('oil-modal-content');
    activeUsageTab[id] = activeUsageTab[id] || 0;

    const usageMethods = [
      oil.usage?.aromatic ? { icon: '💨', label: '방향', text: oil.usage.aromatic } : null,
      oil.usage?.topical  ? { icon: '🤲', label: '국소', text: oil.usage.topical  } : null,
      oil.usage?.internal ? { icon: '💊', label: '내복', text: oil.usage.internal } : null,
    ].filter(Boolean);

    const activeIdx = Math.min(activeUsageTab[id], usageMethods.length - 1);

    const hasProduct = !!oil.productImage;
    const hasPlant   = !!oil.plantImageUrl;
    const heroHtml = (hasProduct || hasPlant) ? `
      <div class="modal-hero-photos">
        <div class="modal-hero-product-wrap">
          ${hasProduct
            ? `<img class="modal-hero-product-img" src="${oil.productImage}" alt="${oil.nameKr}"
                onerror="this.style.display='none'">`
            : `<span style="font-size:70px">${oil.emoji}</span>`}
        </div>
        ${hasPlant ? `
        <div class="modal-hero-plant-wrap">
          <img class="modal-hero-plant-img" src="${oil.plantImageUrl}" alt="${oil.nameKr} 식물"
            onerror="this.closest('.modal-hero-plant-wrap').style.display='none'">
        </div>` : ''}
        <div class="modal-hero-info-bar">
          <div class="modal-hero-kr">${oil.nameKr}</div>
          <div class="modal-hero-en">${oil.nameEn}</div>
        </div>
        <button class="modal-close" onclick="App.closeModal('oil-modal')">✕</button>
      </div>` : `
      <div class="modal-hero plant-${oil.plantType||'blend'}">
        <span class="modal-hero-emoji">${oil.emoji}</span>
        <div class="modal-hero-overlay"></div>
        <div class="modal-hero-info">
          <div class="modal-hero-kr">${oil.nameKr}</div>
          <div class="modal-hero-en">${oil.nameEn}</div>
        </div>
        <button class="modal-close" onclick="App.closeModal('oil-modal')">✕</button>
      </div>`;

    content.innerHTML = `
      ${heroHtml}

      <div class="modal-body">
        <span class="modal-cat-badge" style="background:${cat.color}18;color:${cat.color}">
          ${cat.emoji||''} ${cat.label||''}
        </span>

        <div class="info-chips">
          ${oil.origin     ? `<div class="info-chip">🌍 <strong>${oil.origin}</strong></div>` : ''}
          ${oil.extraction ? `<div class="info-chip">🔬 <strong>${oil.extraction}</strong></div>` : ''}
          ${oil.plant      ? `<div class="info-chip">🌿 <strong>${oil.plant}</strong></div>` : ''}
          ${oil.scent      ? `<div class="info-chip">👃 ${oil.scent}</div>` : ''}
        </div>

        <div class="detail-block">
          <div class="detail-block-title">소개</div>
          <p>${oil.description}</p>
        </div>

        ${oil.ingredients?.length ? `
        <div class="detail-block">
          <div class="detail-block-title">주요 성분</div>
          <div class="ingredient-chips">
            ${oil.ingredients.map(i=>`<span class="ingredient-chip">${i}</span>`).join('')}
          </div>
        </div>` : ''}

        <div class="detail-block">
          <div class="detail-block-title">주요 효능</div>
          <div class="benefit-grid">
            ${(oil.benefits||[]).map(b=>`
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <span>${b}</span>
              </div>`).join('')}
          </div>
        </div>

        ${usageMethods.length ? `
        <div class="detail-block">
          <div class="detail-block-title">사용 방법</div>
          <div class="usage-tabs" id="usage-tabs-${id}">
            ${usageMethods.map((m,i)=>`
              <button class="usage-tab ${i===activeIdx?'active':''}"
                onclick="App.switchUsageTab(${id},${i})">
                ${m.icon} ${m.label}
              </button>`).join('')}
          </div>
          <div class="usage-content" id="usage-content-${id}">
            ${usageMethods[activeIdx]?.text||''}
          </div>
        </div>` : ''}

        ${oil.blendsWith?.length ? `
        <div class="detail-block">
          <div class="detail-block-title">잘 어울리는 오일</div>
          <div class="blend-chips">
            ${oil.blendsWith.map(b=>`<span class="blend-chip">${b}</span>`).join('')}
          </div>
        </div>` : ''}

        ${oil.precautions ? `
        <div class="detail-block caution-block">
          <div class="detail-block-title">⚠️ 주의사항</div>
          <p>${oil.precautions}</p>
        </div>` : ''}

        <button class="qa-link-btn" onclick="App.goToQAWithOil(${oil.id})">
          💬 이 오일 Q&A 보기
        </button>
      </div>`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function switchUsageTab(oilId, idx) {
    const oil = OILS_DATA.find(o => o.id === oilId);
    if (!oil) return;
    activeUsageTab[oilId] = idx;
    const usageMethods = [
      oil.usage?.aromatic ? { icon:'💨', label:'방향', text: oil.usage.aromatic } : null,
      oil.usage?.topical  ? { icon:'🤲', label:'국소', text: oil.usage.topical  } : null,
      oil.usage?.internal ? { icon:'💊', label:'내복', text: oil.usage.internal } : null,
    ].filter(Boolean);
    document.querySelectorAll(`#usage-tabs-${oilId} .usage-tab`).forEach((btn,i) => {
      btn.classList.toggle('active', i === idx);
    });
    const contentEl = document.getElementById(`usage-content-${oilId}`);
    if (contentEl) contentEl.textContent = usageMethods[idx]?.text || '';
  }

  function goToQAWithOil(oilId) {
    closeModal('oil-modal');
    showPage('qa');
    setTimeout(() => filterQAByOil(oilId), 100);
  }

  // ── Q&A ─────────────────────────────────────────
  function renderQAList(oilId = null) {
    qaOilFilter = oilId;
    let questions = QA.getAll();
    const filterEl = document.getElementById('qa-filter-label');

    if (oilId) {
      questions = questions.filter(q => q.oilIds?.includes(oilId));
      const oil = OILS_DATA.find(o => o.id === oilId);
      if (filterEl && oil) {
        filterEl.innerHTML = `
          <span class="filter-label">
            ${oil.emoji} ${oil.nameKr} 관련 질문만
            <button onclick="App.clearQAFilter()">✕</button>
          </span>`;
      }
    } else {
      if (filterEl) filterEl.innerHTML = '';
    }

    const el = document.getElementById('qa-list');
    if (!el) return;
    if (!questions.length) {
      el.innerHTML = '<div class="empty-state">아직 질문이 없습니다.<br>첫 질문을 올려보세요!</div>';
      return;
    }
    el.innerHTML = questions.map(qaCard).join('');
  }

  function filterQAByOil(oilId) { renderQAList(oilId); }
  function clearQAFilter() { renderQAList(null); }

  function qaCard(q) {
    const oilTags = (q.oilIds||[]).map(id => {
      const oil = OILS_DATA.find(o => o.id === id);
      return oil ? `<span class="qa-oil-tag" style="background:${oil.color}18;color:${oil.color}">${oil.emoji} ${oil.nameKr}</span>` : '';
    }).join('');
    return `
      <div class="qa-card" onclick="App.openQADetail(${q.id})">
        <div class="qa-title">${q.title}</div>
        ${oilTags ? `<div class="qa-oil-tags">${oilTags}</div>` : ''}
        <div class="qa-footer">
          <span>✍️ ${q.author}</span>
          <span>📅 ${q.date}</span>
          <span>💬 ${q.answers?.length||0}개</span>
          <span>❤️ ${q.likes||0}</span>
        </div>
      </div>`;
  }

  function openQADetail(id) {
    QA.incrementViews(id);
    const q = QA.getById(id);
    if (!q) return;
    const modal = document.getElementById('qa-modal');
    const content = document.getElementById('qa-modal-content');
    const oilTags = (q.oilIds||[]).map(oid => {
      const oil = OILS_DATA.find(o => o.id === oid);
      return oil ? `<span class="qa-oil-tag" style="background:${oil.color}18;color:${oil.color}"
        onclick="event.stopPropagation();App.closeModal('qa-modal');App.showPage('oils');App.openOilDetail(${oil.id})">
        ${oil.emoji} ${oil.nameKr}</span>` : '';
    }).join('');

    content.innerHTML = `
      <div class="qa-modal-hd">
        <button class="modal-close" style="position:absolute;top:16px;right:16px;background:var(--cream2);color:var(--text)"
          onclick="App.closeModal('qa-modal')">✕</button>
        <h2>${q.title}</h2>
        ${oilTags ? `<div class="qa-oil-tags" style="margin-top:10px">${oilTags}</div>` : ''}
        <div class="qa-footer" style="margin-top:8px">
          <span>✍️ ${q.author}</span>
          <span>📅 ${q.date}</span>
          <button class="like-btn" onclick="App.likeQuestion(${q.id},this)">❤️ ${q.likes||0}</button>
        </div>
      </div>
      <div class="qa-modal-body">
        <div class="q-content-box">${q.content}</div>

        <div class="answers-title">ANSWERS · ${q.answers?.length||0}</div>
        ${(q.answers||[]).map(a=>`
          <div class="answer-card">
            <div class="answer-text">${a.content}</div>
            <div class="answer-meta">
              <span>✍️ ${a.author}</span>
              <span>${a.date}</span>
              <button class="like-btn" onclick="App.likeAnswer(${q.id},${a.id},this)">❤️ ${a.likes||0}</button>
            </div>
          </div>`).join('') || '<p class="empty-sm">아직 답변이 없습니다. 첫 답변을 달아보세요!</p>'}

        <div class="add-answer-sec">
          <h4>답변 작성</h4>
          <input id="ans-author" class="form-input" placeholder="닉네임 (선택)">
          <textarea id="ans-content" class="form-textarea" placeholder="도움이 될 답변을 작성해 주세요..." rows="4" style="margin-top:8px"></textarea>
          <button class="submit-btn" onclick="App.submitAnswer(${q.id})">답변 등록</button>
        </div>
      </div>`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function likeQuestion(id, btn) {
    QA.likeQuestion(id);
    const q = QA.getById(id);
    if (btn && q) btn.textContent = `❤️ ${q.likes}`;
  }

  function likeAnswer(qId, aId, btn) {
    QA.likeAnswer(qId, aId);
    const q = QA.getById(qId);
    const a = q?.answers?.find(a => a.id === aId);
    if (btn && a) btn.textContent = `❤️ ${a.likes}`;
  }

  function submitAnswer(qId) {
    const content = document.getElementById('ans-content')?.value?.trim();
    const author  = document.getElementById('ans-author')?.value?.trim();
    if (!content) { alert('답변 내용을 입력해주세요.'); return; }
    QA.addAnswer(qId, content, author);
    openQADetail(qId);
  }

  // ── Q&A 작성 ─────────────────────────────────────
  function openWriteQA() {
    const modal = document.getElementById('write-modal');
    const content = document.getElementById('write-modal-content');
    const oilOptions = OILS_DATA.map(o=>`<option value="${o.id}">${o.nameKr} (${o.nameEn})</option>`).join('');
    content.innerHTML = `
      <div class="write-modal-hd">
        <button class="modal-close" style="position:absolute;top:16px;right:16px;background:var(--cream2);color:var(--text)"
          onclick="App.closeModal('write-modal')">✕</button>
        <h2>질문하기</h2>
      </div>
      <div class="write-modal-body">
        <label class="form-label">닉네임</label>
        <input id="q-author" class="form-input" placeholder="닉네임 입력 (선택)">
        <label class="form-label">관련 오일</label>
        <select id="q-oil" class="form-select" multiple size="4">${oilOptions}</select>
        <p class="form-hint">Ctrl / Cmd + 클릭으로 여러 오일 선택</p>
        <label class="form-label">제목 *</label>
        <input id="q-title" class="form-input" placeholder="질문 제목을 입력하세요">
        <label class="form-label">내용 *</label>
        <textarea id="q-content" class="form-textarea" rows="6" placeholder="질문 내용을 자세히 적어주세요..."></textarea>
        <button class="submit-btn" onclick="App.submitQuestion()">질문 등록</button>
      </div>`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function submitQuestion() {
    const title   = document.getElementById('q-title')?.value?.trim();
    const content = document.getElementById('q-content')?.value?.trim();
    const author  = document.getElementById('q-author')?.value?.trim();
    const sel     = document.getElementById('q-oil');
    const oilIds  = sel ? [...sel.selectedOptions].map(o=>parseInt(o.value)) : [];
    if (!title)   { alert('제목을 입력해주세요.'); return; }
    if (!content) { alert('내용을 입력해주세요.'); return; }
    QA.add(title, content, oilIds, author);
    closeModal('write-modal');
    renderQAList(qaOilFilter);
    alert('질문이 등록되었습니다!');
  }

  // ── 통합 검색 ─────────────────────────────────────
  function doSearch() {
    const keyword = document.getElementById('search-input')?.value?.trim();
    if (!keyword) return;
    const kw = keyword.toLowerCase();

    const oilResults = OILS_DATA.filter(o =>
      o.nameKr.includes(keyword) ||
      o.nameEn.toLowerCase().includes(kw) ||
      (o.tags||[]).some(t => t.includes(keyword)) ||
      o.description.includes(keyword) ||
      (o.benefits||[]).some(b => b.includes(keyword)) ||
      (o.ingredients||[]).some(i => i.includes(keyword))
    );
    const qaResults = QA.search(keyword);

    const el = document.getElementById('search-results');
    if (!el) return;
    let html = '';

    if (oilResults.length) {
      html += `<div class="search-section-label">🌿 오일 (${oilResults.length})</div>`;
      html += `<div class="oils-list">${oilResults.map(oilCard).join('')}</div>`;
    }
    if (qaResults.length) {
      html += `<div class="search-section-label">💬 Q&A (${qaResults.length})</div>`;
      html += qaResults.map(qaCard).join('');
    }
    if (!html) html = `<div class="empty-state">'${keyword}'에 대한 결과가 없어요.<br>다른 키워드로 검색해보세요.</div>`;
    el.innerHTML = html;
  }

  function searchSymptom(keyword) {
    const input = document.getElementById('search-input');
    if (input) input.value = keyword;
    doSearch();
  }

  // ── 모달 닫기 ─────────────────────────────────────
  function closeModal(id) {
    document.getElementById(id)?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── 초기화 ───────────────────────────────────────
  function init() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(()=>{});
    }
    showPage('home');
  }

  // 모달 외부 클릭 닫기
  document.addEventListener('click', e => {
    ['oil-modal','qa-modal','write-modal'].forEach(id => {
      const m = document.getElementById(id);
      if (m && e.target === m) closeModal(id);
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
      ['oil-modal','qa-modal','write-modal'].forEach(id => closeModal(id));
  });

  return {
    showPage, openOilDetail, openWriteQA, openQADetail, closeModal,
    setCat, setTag, filterQAByOil, clearQAFilter,
    likeQuestion, likeAnswer, submitAnswer, submitQuestion,
    doSearch, doOilsSearch, searchSymptom, switchUsageTab, goToQAWithOil, init
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
