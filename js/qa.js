const QA = (() => {
  const STORAGE_KEY = 'aroma_note_qa';

  const defaultQA = [
    {
      id: 1, title: "라벤더 오일 처음 쓸 때 어떻게 시작하면 좋을까요?",
      content: "도테라 오일이 처음인데요, 라벤더부터 시작하려고 합니다. 디퓨저가 없으면 어떻게 쓸 수 있을까요?",
      oilIds: [1], author: "초보 아로마", date: "2026-05-10",
      answers: [
        { id: 1, content: "디퓨저 없이도 쉽게 활용할 수 있어요! 손바닥에 1-2방울 떨어뜨린 후 양 손을 비벼 따뜻하게 만들고, 코 가까이 대고 천천히 깊게 호흡하는 방법이 가장 간단합니다. 또는 베개 귀퉁이에 1방울 떨어뜨려 수면에 도움받을 수도 있어요. 캐리어 오일(코코넛오일 등)과 희석해서 손목이나 뒷목에 발라도 좋습니다 😊", author: "아로마 선생님", date: "2026-05-10", likes: 5 },
        { id: 2, content: "저는 처음에 수건에 2방울 떨어뜨려서 샤워 후 욕실에 걸어두고 스팀 효과로 흡입했어요. 간단하고 효과 좋습니다!", author: "라벤더러버", date: "2026-05-11", likes: 3 }
      ],
      likes: 8, views: 42
    },
    {
      id: 2, title: "온가드 오일이 면역에 좋다고 하는데, 어떻게 섭취하나요?",
      content: "감기 시즌이라 면역 관리를 하고 싶은데요, 온가드 오일을 내복으로 먹어도 되나요? 방법이 궁금합니다.",
      oilIds: [101], author: "건강맘", date: "2026-05-12",
      answers: [
        { id: 1, content: "온가드는 내복 가능 오일입니다! 가장 쉬운 방법은 물 한 컵(200ml)에 1-2방울 떨어뜨려 마시거나, 온가드 비즈소프트젤 제품을 구매해 캡슐로 드시는 거예요. 또는 공석 젤라틴 캡슐에 1-2방울 채워 드셔도 됩니다. 단, 하루 2-3회 이상은 피하시고 어린이는 희석하거나 비즈소프트젤로 드세요.", author: "도테라 상담사", date: "2026-05-12", likes: 7 }
      ],
      likes: 12, views: 67
    },
    {
      id: 3, title: "딥블루와 코파이바 같이 써도 되나요?",
      content: "무릎 통증이 있어서 딥블루를 쓰고 있는데, 코파이바도 항염에 좋다고 해서 같이 쓰면 더 효과적일지 궁금합니다.",
      oilIds: [102, 13], author: "무릎통증러", date: "2026-05-14",
      answers: [
        { id: 1, content: "네, 딥블루 + 코파이바 조합은 도테라 상담사들이 자주 추천하는 최고의 조합이에요! 딥블루로 먼저 마사지하고 2-3분 후 코파이바를 위에 덮어주면 흡수율이 높아집니다. 블랙 페퍼 오일을 함께 쓰면 흡수가 더 잘 된다고 알려져 있어요. 꾸준히 아침저녁으로 사용해보세요!", author: "자연치유사", date: "2026-05-15", likes: 9 }
      ],
      likes: 15, views: 89
    },
    {
      id: 4, title: "아이 수면에 어떤 오일이 좋을까요? (5살)",
      content: "5살 아이가 잠들기 어려워해요. 어린이에게 안전한 수면 오일이 무엇인지, 어떻게 써야 하는지 알려주세요.",
      oilIds: [1, 106, 26], author: "아기엄마", date: "2026-05-16",
      answers: [
        { id: 1, content: "어린이 수면에는 라벤더, 로만 카모마일, 세레니티 블렌드가 안전하고 효과적이에요. 5살이라면 프락셔네이티드 코코넛오일 10ml에 라벤더 1방울만 희석해서 발바닥에 발라주는 게 가장 안전합니다. 디퓨저 사용 시 아이 방에서 1-2방울, 자기 1시간 전부터 틀어주세요. 얼굴 가까이 직접 흡입은 피해주세요!", author: "소아 아로마 전문가", date: "2026-05-16", likes: 11 }
      ],
      likes: 18, views: 103
    },
    {
      id: 5, title: "프랑킨센스 가격이 비싼 이유가 뭔가요?",
      content: "프랑킨센스가 다른 오일보다 훨씬 비싸더라고요. 어떤 이유가 있는 건가요? 그만한 가치가 있을까요?",
      oilIds: [5], author: "가성비고민", date: "2026-05-17",
      answers: [
        { id: 1, content: "프랑킨센스는 소말리아, 에티오피아 등 특정 지역에서 자라는 보스웰리아 나무에서만 수집할 수 있어요. 나무에 상처를 내어 흘러나오는 수지(레진)를 수집 후 증류하는데, 나무 한 그루에서 얻을 수 있는 양이 매우 적습니다. 또한 그 효능이 피부 재생, 세포 보호, 항염증 등 다양하고 강력해서 '오일의 왕'이라 불리죠. 한 번 써보시면 가격이 납득됩니다 😊", author: "오일 교육자", date: "2026-05-17", likes: 14 }
      ],
      likes: 22, views: 156
    }
  ];

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : defaultQA;
    } catch { return defaultQA; }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getAll() { return load(); }

  function getById(id) { return load().find(q => q.id === id); }

  function add(title, content, oilIds, author) {
    const all = load();
    const newQ = {
      id: Date.now(),
      title, content,
      oilIds: oilIds || [],
      author: author || '익명',
      date: new Date().toISOString().slice(0, 10),
      answers: [],
      likes: 0,
      views: 0
    };
    all.unshift(newQ);
    save(all);
    return newQ;
  }

  function addAnswer(questionId, content, author) {
    const all = load();
    const q = all.find(q => q.id === questionId);
    if (!q) return null;
    const answer = {
      id: Date.now(),
      content,
      author: author || '익명',
      date: new Date().toISOString().slice(0, 10),
      likes: 0
    };
    q.answers.push(answer);
    save(all);
    return answer;
  }

  function likeQuestion(id) {
    const all = load();
    const q = all.find(q => q.id === id);
    if (q) { q.likes++; save(all); }
  }

  function likeAnswer(questionId, answerId) {
    const all = load();
    const q = all.find(q => q.id === questionId);
    if (!q) return;
    const a = q.answers.find(a => a.id === answerId);
    if (a) { a.likes++; save(all); }
  }

  function incrementViews(id) {
    const all = load();
    const q = all.find(q => q.id === id);
    if (q) { q.views = (q.views || 0) + 1; save(all); }
  }

  function search(keyword) {
    const kw = keyword.toLowerCase();
    return load().filter(q =>
      q.title.toLowerCase().includes(kw) ||
      q.content.toLowerCase().includes(kw) ||
      q.answers.some(a => a.content.toLowerCase().includes(kw))
    );
  }

  return { getAll, getById, add, addAnswer, likeQuestion, likeAnswer, incrementViews, search };
})();
