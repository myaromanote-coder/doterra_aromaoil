// ═══════════════════════════════════════════════════════
//  my.aroma.note — 아로마 레시피 데이터베이스
//  타입: diffuser(디퓨저) | rollon(롤온) | diy(DIY 제품) | drink(음료)
// ═══════════════════════════════════════════════════════

const RECIPE_TYPES = {
  diffuser: { label: '디퓨저 블렌드', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' },
  rollon:   { label: '롤온 레시피',   icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' },
  diy:      { label: 'DIY 제품',      icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' },
  drink:    { label: '음용 레시피',   icon: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z' },
};

const RECIPES_DATA = [

  // ────────────────────────────────────────
  //  디퓨저 블렌드
  // ────────────────────────────────────────
  {
    id: 1,
    name: "숙면 유도 블렌드",
    type: "diffuser",
    oilIds: [1, 14, 25],
    ingredients: [
      { oilId: 1,  nameKr: "라벤더",   amount: "3방울" },
      { oilId: 14, nameKr: "시더우드", amount: "2방울" },
      { oilId: 25, nameKr: "베티버",   amount: "1방울" },
    ],
    instructions: "취침 30분 전 디퓨저에 물과 함께 넣고 확산. 실내 조명을 낮추고 편안한 음악과 함께 사용하면 효과가 배가됩니다.",
    benefits: ["깊은 수면 유도", "긴장 완화", "마음 안정"],
    tags: ["수면", "이완", "밤루틴"]
  },
  {
    id: 2,
    name: "아침 에너지 충전",
    type: "diffuser",
    oilIds: [4, 2, 3],
    ingredients: [
      { oilId: 4, nameKr: "와일드오렌지", amount: "3방울" },
      { oilId: 2, nameKr: "페퍼민트",     amount: "2방울" },
      { oilId: 3, nameKr: "레몬",         amount: "2방울" },
    ],
    instructions: "기상 직후 또는 아침 루틴 시작 시 디퓨저에 확산. 상쾌하고 활기찬 하루를 시작하는 데 도움을 줍니다.",
    benefits: ["에너지 충전", "기분 전환", "상쾌함"],
    tags: ["에너지", "아침루틴", "기분전환"]
  },
  {
    id: 3,
    name: "집중력 향상 스터디 블렌드",
    type: "diffuser",
    oilIds: [9, 2, 3],
    ingredients: [
      { oilId: 9, nameKr: "로즈마리", amount: "3방울" },
      { oilId: 2, nameKr: "페퍼민트", amount: "2방울" },
      { oilId: 3, nameKr: "레몬",     amount: "2방울" },
    ],
    instructions: "공부·업무 시작 전 디퓨저에 확산. 시험 기간이나 중요한 작업 시 특히 효과적입니다.",
    benefits: ["집중력 향상", "기억력 지원", "정신 명료함"],
    tags: ["집중력", "공부", "업무"]
  },
  {
    id: 4,
    name: "면역 방어 쉴드",
    type: "diffuser",
    oilIds: [101, 8, 3],
    ingredients: [
      { oilId: 101, nameKr: "온가드",     amount: "3방울" },
      { oilId: 8,   nameKr: "유칼립투스", amount: "2방울" },
      { oilId: 3,   nameKr: "레몬",       amount: "2방울" },
    ],
    instructions: "감기 시즌, 환절기에 하루 2~3회 디퓨저로 확산. 외출 전후로 사용하면 면역 지원에 효과적입니다.",
    benefits: ["면역 강화", "공기 정화", "항균 환경"],
    tags: ["면역", "항균", "감기예방"]
  },
  {
    id: 5,
    name: "스트레스 릴리프",
    type: "diffuser",
    oilIds: [1, 10, 5],
    ingredients: [
      { oilId: 1,  nameKr: "라벤더",      amount: "3방울" },
      { oilId: 10, nameKr: "베르가못",    amount: "2방울" },
      { oilId: 5,  nameKr: "프랑킨센스", amount: "1방울" },
    ],
    instructions: "스트레스가 많은 날 퇴근 후 또는 휴식 시간에 디퓨저로 확산. 깊게 호흡하며 긴장을 내려놓으세요.",
    benefits: ["스트레스 해소", "불안 완화", "감정 균형"],
    tags: ["스트레스", "불안", "휴식"]
  },
  {
    id: 6,
    name: "호흡기 케어 블렌드",
    type: "diffuser",
    oilIds: [8, 104, 2],
    ingredients: [
      { oilId: 8,   nameKr: "유칼립투스", amount: "3방울" },
      { oilId: 104, nameKr: "이지에어",   amount: "2방울" },
      { oilId: 2,   nameKr: "페퍼민트",   amount: "1방울" },
    ],
    instructions: "코막힘이나 호흡이 불편할 때 디퓨저로 확산. 샤워 시 욕실 바닥에 2~3방울 떨어뜨려도 효과적입니다.",
    benefits: ["호흡기 개통", "코막힘 완화", "기관지 지원"],
    tags: ["호흡기", "코막힘", "감기"]
  },
  {
    id: 7,
    name: "명상 & 마음챙김",
    type: "diffuser",
    oilIds: [5, 29, 30],
    ingredients: [
      { oilId: 5,  nameKr: "프랑킨센스", amount: "2방울" },
      { oilId: 29, nameKr: "샌달우드",   amount: "2방울" },
      { oilId: 30, nameKr: "미르",       amount: "1방울" },
    ],
    instructions: "명상, 요가, 기도 시간에 디퓨저로 확산. 조용한 공간에서 눈을 감고 깊은 호흡을 반복하며 내면에 집중하세요.",
    benefits: ["영적 집중", "깊은 평화", "마음 정화"],
    tags: ["명상", "영성", "마음챙김"]
  },
  {
    id: 8,
    name: "로맨틱 이브닝",
    type: "diffuser",
    oilIds: [11, 10, 27],
    ingredients: [
      { oilId: 11, nameKr: "일랑일랑", amount: "2방울" },
      { oilId: 10, nameKr: "베르가못", amount: "2방울" },
      { oilId: 27, nameKr: "자스민",   amount: "1방울" },
    ],
    instructions: "특별한 저녁을 위해 식사 1시간 전부터 디퓨저로 확산. 은은한 조명과 함께 사용하면 분위기가 더욱 살아납니다.",
    benefits: ["로맨틱 분위기", "감각 고취", "자신감"],
    tags: ["로맨틱", "분위기", "데이트"]
  },
  {
    id: 9,
    name: "공기 정화 클린 블렌드",
    type: "diffuser",
    oilIds: [109, 3, 8],
    ingredients: [
      { oilId: 109, nameKr: "퓨리파이",   amount: "3방울" },
      { oilId: 3,   nameKr: "레몬",       amount: "2방울" },
      { oilId: 8,   nameKr: "유칼립투스", amount: "2방울" },
    ],
    instructions: "요리 후 냄새 제거, 신발장·화장실 등 냄새가 나는 공간에 효과적. 밀폐된 공간에서 2~3시간 확산하세요.",
    benefits: ["공기 정화", "냄새 제거", "청결한 환경"],
    tags: ["정화", "냄새제거", "청결"]
  },
  {
    id: 10,
    name: "행복 바이브 업 블렌드",
    type: "diffuser",
    oilIds: [112, 1, 2],
    ingredients: [
      { oilId: 112, nameKr: "시트러스블리스", amount: "3방울" },
      { oilId: 1,   nameKr: "라벤더",         amount: "2방울" },
      { oilId: 2,   nameKr: "페퍼민트",        amount: "1방울" },
    ],
    instructions: "기분이 처지거나 우울할 때 즉각적으로 사용. 환기가 잘 되는 밝은 공간에서 사용하면 효과 배가됩니다.",
    benefits: ["기분 향상", "긍정 에너지", "활력"],
    tags: ["기분전환", "행복", "에너지"]
  },

  // ────────────────────────────────────────
  //  롤온 레시피 (10ml 롤온 기준)
  // ────────────────────────────────────────
  {
    id: 11,
    name: "두통 즉각 완화 롤온",
    type: "rollon",
    oilIds: [2, 1],
    ingredients: [
      { oilId: 2, nameKr: "페퍼민트", amount: "6방울" },
      { oilId: 1, nameKr: "라벤더",   amount: "6방울" },
      { nameKr: "FCO(코코넛오일)", amount: "10ml 롤온 채우기" },
    ],
    instructions: "10ml 롤온 병에 오일을 넣고 FCO로 채운 뒤 잘 흔들어 혼합. 두통 시 관자놀이, 이마, 뒷목에 바르고 부드럽게 마사지하세요.",
    benefits: ["두통 완화", "긴장성 두통", "편두통"],
    tags: ["두통", "편두통", "즉각완화"]
  },
  {
    id: 12,
    name: "숙면 베드타임 롤온",
    type: "rollon",
    oilIds: [1, 25, 14],
    ingredients: [
      { oilId: 1,  nameKr: "라벤더",   amount: "6방울" },
      { oilId: 25, nameKr: "베티버",   amount: "4방울" },
      { oilId: 14, nameKr: "시더우드", amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "취침 15분 전 발바닥, 손목, 귀 뒤에 바릅니다. 바른 후 발바닥을 마사지하면 흡수가 더 잘 됩니다.",
    benefits: ["수면 유도", "깊은 숙면", "긴장 이완"],
    tags: ["수면", "불면증", "베드타임"]
  },
  {
    id: 13,
    name: "면역 강화 방어 롤온",
    type: "rollon",
    oilIds: [101, 7],
    ingredients: [
      { oilId: 101, nameKr: "온가드",  amount: "8방울" },
      { oilId: 7,   nameKr: "오레가노", amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "감기 시즌, 환절기에 발바닥과 척추 라인을 따라 아침저녁 도포. 어린이는 오레가노 제외 후 온가드만 사용하세요.",
    benefits: ["면역 강화", "감기 예방", "바이러스 방어"],
    tags: ["면역", "감기예방", "겨울"]
  },
  {
    id: 14,
    name: "근육·관절 통증 롤온",
    type: "rollon",
    oilIds: [102, 13],
    ingredients: [
      { oilId: 102, nameKr: "딥블루",  amount: "8방울" },
      { oilId: 13,  nameKr: "코파이바", amount: "5방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "통증 부위에 직접 바르고 부드럽게 마사지. 운동 전·후, 무릎·허리·어깨 통증에 하루 2~3회 사용하세요.",
    benefits: ["근육통 완화", "관절 지원", "운동 회복"],
    tags: ["근육통", "관절", "운동회복"]
  },
  {
    id: 15,
    name: "여성 호르몬 밸런스 롤온",
    type: "rollon",
    oilIds: [208, 36, 1],
    ingredients: [
      { oilId: 208, nameKr: "클래리캄",   amount: "6방울" },
      { oilId: 36,  nameKr: "로즈제라늄", amount: "4방울" },
      { oilId: 1,   nameKr: "라벤더",     amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "생리 전 1주일부터 복부·허리·발목 안쪽에 하루 2회 바릅니다. 생리 기간 동안 계속 사용하면 효과가 더욱 좋습니다.",
    benefits: ["호르몬 균형", "생리통 완화", "PMS 지원"],
    tags: ["여성건강", "생리통", "PMS", "호르몬"]
  },
  {
    id: 16,
    name: "집중력 포커스 롤온",
    type: "rollon",
    oilIds: [206, 2, 9],
    ingredients: [
      { oilId: 206, nameKr: "인튠",     amount: "8방울" },
      { oilId: 2,   nameKr: "페퍼민트", amount: "4방울" },
      { oilId: 9,   nameKr: "로즈마리", amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "공부·업무 시작 전 관자놀이, 손목, 목 뒤에 바릅니다. 집중이 필요할 때마다 손목에 발라 흡입하면 즉각적인 효과를 느낄 수 있어요.",
    benefits: ["집중력 향상", "ADHD 지원", "명료한 사고"],
    tags: ["집중력", "공부", "ADHD"]
  },
  {
    id: 17,
    name: "감정 안정 그라운딩 롤온",
    type: "rollon",
    oilIds: [105, 5, 1],
    ingredients: [
      { oilId: 105, nameKr: "밸런스",     amount: "6방울" },
      { oilId: 5,   nameKr: "프랑킨센스", amount: "5방울" },
      { oilId: 1,   nameKr: "라벤더",     amount: "4방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "불안하거나 감정이 흔들릴 때 손목·가슴·발바닥에 바르고 깊게 호흡. 아침 루틴에 포함해 매일 사용하면 감정 안정에 도움이 됩니다.",
    benefits: ["감정 균형", "불안 완화", "심리적 안정"],
    tags: ["감정균형", "불안", "스트레스"]
  },
  {
    id: 18,
    name: "소화 케어 복부 롤온",
    type: "rollon",
    oilIds: [103, 16, 2],
    ingredients: [
      { oilId: 103, nameKr: "다이제스트젠", amount: "8방울" },
      { oilId: 16,  nameKr: "진저",         amount: "4방울" },
      { oilId: 2,   nameKr: "페퍼민트",     amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "식사 후 또는 소화 불편 시 복부에 시계 방향으로 마사지. 발바닥 소화 반사구(발바닥 중앙)에도 함께 사용하면 효과적입니다.",
    benefits: ["소화 촉진", "복부 팽만 완화", "메스꺼움 해소"],
    tags: ["소화", "복부팽만", "메스꺼움"]
  },
  {
    id: 19,
    name: "피부 재생 안티에이징 롤온",
    type: "rollon",
    oilIds: [5, 1, 116],
    ingredients: [
      { oilId: 5,   nameKr: "프랑킨센스", amount: "6방울" },
      { oilId: 1,   nameKr: "라벤더",     amount: "4방울" },
      { oilId: 116, nameKr: "살루벨",     amount: "4방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "세안 후 얼굴·목·데콜테에 롤온으로 바르고 부드럽게 마사지. 아침저녁 매일 사용하면 4~6주 후 효과를 확인할 수 있습니다.",
    benefits: ["피부 재생", "노화 방지", "탄력 향상"],
    tags: ["피부재생", "노화방지", "안티에이징"]
  },
  {
    id: 20,
    name: "두피 탈모 케어 롤온",
    type: "rollon",
    oilIds: [9, 14, 1],
    ingredients: [
      { oilId: 9,  nameKr: "로즈마리", amount: "7방울" },
      { oilId: 14, nameKr: "시더우드", amount: "5방울" },
      { oilId: 1,  nameKr: "라벤더",   amount: "3방울" },
      { nameKr: "FCO", amount: "10ml 채우기" },
    ],
    instructions: "취침 전 두피에 골고루 바르고 5분간 지압 마사지. 다음날 아침 샴푸로 세척. 최소 8주 이상 꾸준히 사용하세요.",
    benefits: ["모발 성장", "두피 혈액순환", "탈모 예방"],
    tags: ["두피", "탈모", "모발건강"]
  },

  // ────────────────────────────────────────
  //  DIY 제품
  // ────────────────────────────────────────
  {
    id: 21,
    name: "천연 페이셜 세럼",
    type: "diy",
    oilIds: [5, 1, 29],
    ingredients: [
      { nameKr: "FCO(호호바 오일)", amount: "30ml" },
      { oilId: 5,  nameKr: "프랑킨센스", amount: "6방울" },
      { oilId: 1,  nameKr: "라벤더",     amount: "5방울" },
      { oilId: 29, nameKr: "샌달우드",   amount: "4방울" },
    ],
    instructions: "30ml 유리 드로퍼 병에 FCO를 넣고 오일을 차례로 추가한 뒤 잘 흔듭니다. 세안 후 얼굴에 3~4방울 덜어 부드럽게 펴 바르세요. 냉암소 보관, 2개월 내 사용.",
    benefits: ["피부 보습", "탄력 개선", "노화 방지"],
    tags: ["피부", "세럼", "페이셜케어"]
  },
  {
    id: 22,
    name: "두피 케어 헤어 오일",
    type: "diy",
    oilIds: [9, 14, 1],
    ingredients: [
      { nameKr: "FCO 또는 아르간 오일", amount: "50ml" },
      { oilId: 9,  nameKr: "로즈마리", amount: "10방울" },
      { oilId: 14, nameKr: "시더우드", amount: "8방울" },
      { oilId: 1,  nameKr: "라벤더",   amount: "5방울" },
    ],
    instructions: "50ml 용기에 캐리어 오일과 에센셜 오일을 혼합. 주 2~3회 두피에 골고루 적용 후 10분 지압 마사지, 따뜻한 물로 샴푸하세요.",
    benefits: ["모발 성장 촉진", "두피 혈행 개선", "탈모 예방"],
    tags: ["두피", "탈모", "헤어케어"]
  },
  {
    id: 23,
    name: "룸&린넨 스프레이",
    type: "diy",
    oilIds: [1, 3, 109],
    ingredients: [
      { nameKr: "정제수 또는 증류수", amount: "100ml" },
      { nameKr: "알코올(에탄올)", amount: "10ml" },
      { oilId: 1,   nameKr: "라벤더",   amount: "15방울" },
      { oilId: 3,   nameKr: "레몬",     amount: "10방울" },
      { oilId: 109, nameKr: "퓨리파이", amount: "8방울" },
    ],
    instructions: "100ml 스프레이 병에 알코올과 오일을 먼저 혼합한 뒤 정제수를 넣고 잘 흔듭니다. 베개, 이불, 커튼, 소파에 뿌리세요. 사용 전 항상 흔들어 주세요.",
    benefits: ["공기 정화", "섬유 탈취", "기분 전환"],
    tags: ["정화", "탈취", "홈케어"]
  },
  {
    id: 24,
    name: "수면 베개 스프레이",
    type: "diy",
    oilIds: [1, 14, 25],
    ingredients: [
      { nameKr: "정제수", amount: "100ml" },
      { nameKr: "알코올", amount: "10ml" },
      { oilId: 1,  nameKr: "라벤더",   amount: "18방울" },
      { oilId: 14, nameKr: "시더우드", amount: "8방울" },
      { oilId: 25, nameKr: "베티버",   amount: "4방울" },
    ],
    instructions: "스프레이 병에 알코올+오일 먼저 혼합 후 정제수 추가. 취침 10분 전 베개 양면에 2~3회 분사. 서늘한 곳 보관, 2주 내 사용 권장.",
    benefits: ["수면 유도", "긴장 완화", "숙면 환경"],
    tags: ["수면", "베개스프레이", "밤루틴"]
  },
  {
    id: 25,
    name: "라벤더 페퍼민트 바디 스크럽",
    type: "diy",
    oilIds: [1, 2],
    ingredients: [
      { nameKr: "백설탕 또는 흑설탕", amount: "1컵(200g)" },
      { nameKr: "코코넛 오일(정제)", amount: "½컵 (녹인 것)" },
      { oilId: 1, nameKr: "라벤더",   amount: "10방울" },
      { oilId: 2, nameKr: "페퍼민트", amount: "6방울" },
    ],
    instructions: "모든 재료를 볼에 넣고 잘 섞어 유리 용기에 보관. 샤워 시 젖은 피부에 원을 그리며 마사지 후 따뜻한 물로 헹굽니다. 냉암소 보관 2주 내 사용.",
    benefits: ["각질 제거", "피부 보습", "혈액순환"],
    tags: ["스크럽", "각질제거", "바디케어"]
  },
  {
    id: 26,
    name: "여드름 스팟 트리트먼트",
    type: "diy",
    oilIds: [6, 1, 115],
    ingredients: [
      { nameKr: "FCO", amount: "5ml" },
      { oilId: 6,   nameKr: "티트리",   amount: "5방울" },
      { oilId: 1,   nameKr: "라벤더",   amount: "4방울" },
      { oilId: 115, nameKr: "HD 클리어", amount: "3방울" },
    ],
    instructions: "소형 용기에 혼합 보관. 면봉에 소량 묻혀 트러블 부위에만 점 도포. 자기 전 사용 후 씻어내지 말고 그대로 두세요. 눈 주위 피하기.",
    benefits: ["여드름 살균", "트러블 진정", "모공 관리"],
    tags: ["여드름", "피부트러블", "스팟케어"]
  },
  {
    id: 27,
    name: "천연 방충 스프레이",
    type: "diy",
    oilIds: [114, 35, 8],
    ingredients: [
      { nameKr: "정제수", amount: "100ml" },
      { nameKr: "알코올", amount: "15ml" },
      { oilId: 114, nameKr: "테라쉴드",  amount: "15방울" },
      { oilId: 35,  nameKr: "레몬그라스", amount: "10방울" },
      { oilId: 8,   nameKr: "유칼립투스", amount: "8방울" },
    ],
    instructions: "알코올에 오일을 먼저 용해시킨 후 정제수를 추가. 야외 활동 전 노출된 피부와 옷에 뿌리세요. 어린이 사용 시 농도 절반으로 줄이세요.",
    benefits: ["모기 퇴치", "천연 방충", "야외 활동 보호"],
    tags: ["방충제", "모기", "야외활동"]
  },
  {
    id: 28,
    name: "천연 핸드 새니타이저",
    type: "diy",
    oilIds: [101, 6, 1],
    ingredients: [
      { nameKr: "알로에베라 젤", amount: "60ml" },
      { nameKr: "70% 알코올", amount: "30ml" },
      { oilId: 101, nameKr: "온가드", amount: "12방울" },
      { oilId: 6,   nameKr: "티트리", amount: "8방울" },
      { oilId: 1,   nameKr: "라벤더", amount: "6방울" },
    ],
    instructions: "알코올과 알로에베라 젤을 혼합한 후 에센셜 오일 추가, 잘 섞어 펌프 용기에 담습니다. 일반 핸드새니타이저처럼 사용하세요.",
    benefits: ["손 소독", "항균", "피부 보호"],
    tags: ["소독", "항균", "손위생"]
  },

  // ────────────────────────────────────────
  //  음용 레시피
  // ────────────────────────────────────────
  {
    id: 29,
    name: "모닝 레몬 디톡스",
    type: "drink",
    oilIds: [3],
    ingredients: [
      { nameKr: "따뜻한 물", amount: "250ml" },
      { oilId: 3, nameKr: "레몬", amount: "1~2방울" },
      { nameKr: "꿀 (선택)", amount: "1 티스푼" },
    ],
    instructions: "기상 직후 공복에 따뜻한 물(뜨겁지 않게)에 레몬 오일 1~2방울을 떨어뜨려 천천히 마십니다. 플라스틱 컵 사용 시 오일이 분해될 수 있어 유리 또는 스테인리스 컵 사용을 권장합니다.",
    benefits: ["디톡스", "소화 촉진", "면역 지원", "상쾌한 시작"],
    tags: ["디톡스", "아침루틴", "소화"]
  },
  {
    id: 30,
    name: "면역 강화 웰니스 드링크",
    type: "drink",
    oilIds: [4, 3, 101],
    ingredients: [
      { nameKr: "따뜻한 물 또는 허브차", amount: "250ml" },
      { oilId: 4,   nameKr: "와일드오렌지", amount: "1방울" },
      { oilId: 3,   nameKr: "레몬",         amount: "1방울" },
      { oilId: 101, nameKr: "온가드",        amount: "1방울" },
      { nameKr: "꿀", amount: "1 티스푼" },
    ],
    instructions: "유리잔에 따뜻한 물을 붓고 꿀을 먼저 녹인 뒤 오일을 추가합니다. 감기 초기 또는 면역이 약할 때 하루 1~2잔 마시세요. 임산부·어린이는 사용 전 전문가 상담 필수.",
    benefits: ["면역 강화", "항바이러스", "인후 케어"],
    tags: ["면역", "감기", "인후통"]
  },
  {
    id: 31,
    name: "소화 지원 페퍼민트 티",
    type: "drink",
    oilIds: [2, 103],
    ingredients: [
      { nameKr: "따뜻한 물 또는 캐모마일 티", amount: "250ml" },
      { oilId: 2,   nameKr: "페퍼민트",     amount: "1방울" },
      { oilId: 103, nameKr: "다이제스트젠", amount: "1방울" },
    ],
    instructions: "식사 후 30분 뒤 따뜻한 음료에 오일을 넣어 마십니다. 소화불량, 배부름, 가스가 찰 때 즉각적인 도움이 됩니다. 반드시 유리 용기 사용.",
    benefits: ["소화 촉진", "복부 팽만 해소", "메스꺼움 완화"],
    tags: ["소화", "메스꺼움", "식후루틴"]
  },
];

// 오일 ID로 관련 레시피 찾기
function getRecipesByOilId(oilId) {
  return RECIPES_DATA.filter(r =>
    r.oilIds.includes(oilId) ||
    r.ingredients.some(i => i.oilId === oilId)
  );
}
