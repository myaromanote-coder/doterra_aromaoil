const OILS_DATA = [
  // ───────────────────────────────────────────────
  //  단일 에센셜 오일 (Single Essential Oils)
  // ───────────────────────────────────────────────
  {
    id: 1, nameKr: "라벤더", nameEn: "Lavender", category: "single",
    plantType: "flower", productImage: "images/oils/lavender.jpg", plantImageUrl: "images/plants/lavender.jpg", color: "#9B7EC8", emoji: "💜",
    origin: "불가리아, 프랑스", extraction: "수증기 증류", plant: "꽃",
    scent: "플로럴, 허브, 청량한",
    description: "'오일의 어머니'라 불리는 가장 다재다능한 에센셜 오일입니다. 수천 년 역사를 가진 라벤더는 진정·이완·피부 케어 등 폭넓게 활용됩니다. 도테라 오일 중 가장 대표적이며 초보자에게도 추천되는 오일입니다.",
    benefits: ["수면 질 개선", "스트레스 및 불안 완화", "피부 진정·재생", "두통 완화", "상처 치유 촉진", "항균·항산화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 베개 귀퉁이에 1-2방울. 손바닥에 비비고 깊게 흡입.",
      topical: "캐리어 오일과 희석 후 관자놀이·뒷목·발바닥에 적용. 피부가 민감하지 않으면 직접 도포 가능.",
      internal: "물·음료에 1-2방울. 베이킹·요리에 소량 사용."
    },
    blendsWith: ["베르가못", "클라리 세이지", "제라늄", "시더우드", "유칼립투스"],
    precautions: "임산부 사용 시 전문의 상담. 어린이는 반드시 희석.",
    tags: ["수면", "진정", "피부", "스트레스", "두통"], featured: true
  },
  {
    id: 2, nameKr: "페퍼민트", nameEn: "Peppermint", category: "single", plantType: "herb", productImage: "images/oils/peppermint.jpg", plantImageUrl: "images/plants/peppermint.jpg",
    color: "#3DAF7F", emoji: "🌿",
    origin: "미국, 인도", extraction: "수증기 증류", plant: "잎",
    scent: "청량한, 민트, 허브",
    description: "강렬하고 상쾌한 향의 페퍼민트는 에너지 증진과 소화 지원에 탁월합니다. 멘톨 성분이 풍부하여 두통 완화와 집중력 향상에도 효과적입니다. 여름철 체온 조절에도 활용됩니다.",
    benefits: ["에너지·집중력 향상", "두통·편두통 완화", "소화 촉진", "체온 조절", "근육통 완화", "입 냄새 제거"],
    usage: {
      aromatic: "디퓨저에 2-3방울. 피로할 때 직접 흡입. 라벤더와 블렌딩 시 두통에 효과적.",
      topical: "반드시 희석 후 사용(민감성 오일). 이마·뒷목에 두통 시 적용. 근육 부위에 마사지.",
      internal: "물에 1방울(매우 강함). 소화 불편 시 복부에 희석 도포."
    },
    blendsWith: ["라벤더", "로즈마리", "유칼립투스", "레몬", "바질"],
    precautions: "6세 이하 어린이 얼굴 근처 사용 금지. 임산부 주의. 반드시 희석 사용.",
    tags: ["에너지", "두통", "소화", "집중력", "청량감"], featured: true
  },
  {
    id: 3, nameKr: "레몬", nameEn: "Lemon", category: "single", plantType: "citrus", productImage: "images/oils/lemon.jpg", plantImageUrl: "images/plants/lemon.jpg",
    color: "#F5C842", emoji: "🍋",
    origin: "이탈리아, 아르헨티나", extraction: "냉압착", plant: "껍질",
    scent: "상큼, 시트러스, 청결한",
    description: "밝고 상쾌한 시트러스 향의 레몬 오일은 기분 전환과 정화에 탁월합니다. 강력한 항균 성분으로 가정 청소에도 활용되며, 물에 한 방울 넣어 디톡스 음료로도 즐길 수 있습니다.",
    benefits: ["기분 전환·기운 충전", "면역력 지원", "천연 세정·정화", "소화 지원", "피부 미백 보조", "공기 정화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 다른 오일과 블렌딩으로 기분 상승. 냄새 제거에 효과적.",
      topical: "캐리어 오일과 희석 후 사용. 피부 미백 관리에 소량 활용.",
      internal: "물 한 컵에 1-2방울. 아침 디톡스 루틴에 활용."
    },
    blendsWith: ["라벤더", "페퍼민트", "와일드 오렌지", "로즈마리", "유칼립투스"],
    precautions: "광독성 주의 — 도포 후 12시간 자외선 노출 피하기. 산성이므로 직접 도포 시 희석 권장.",
    tags: ["정화", "기분전환", "면역", "디톡스", "세정"], featured: true
  },
  {
    id: 4, nameKr: "와일드 오렌지", nameEn: "Wild Orange", category: "single", plantType: "citrus", productImage: "images/oils/wild-orange.jpg", plantImageUrl: "images/plants/wild-orange.jpg",
    color: "#FF8C00", emoji: "🍊",
    origin: "브라질", extraction: "냉압착", plant: "껍질",
    scent: "달콤한, 시트러스, 과일향",
    description: "도테라에서 가장 인기 있는 오일 중 하나로, 달콤하고 활기찬 향이 즉각적인 기분 전환을 선사합니다. 항산화 성분이 풍부하며 가정용 세정제로도 탁월한 효과를 보입니다.",
    benefits: ["기분 전환·행복감", "불안 완화", "면역력 지원", "천연 세정", "에너지 증진", "항산화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 시나몬과 블렌딩 시 따뜻하고 달콤한 향. 기분이 처질 때 직접 흡입.",
      topical: "캐리어 오일과 희석. 복부 마사지로 기분 전환.",
      internal: "물·스무디에 1-2방울. 디저트·베이킹에 활용."
    },
    blendsWith: ["시나몬", "클로브", "프랑킨센스", "라벤더", "베르가못"],
    precautions: "광독성 주의 — 도포 후 햇빛 노출 주의.",
    tags: ["기분전환", "에너지", "면역", "세정", "달콤한향"], featured: true
  },
  {
    id: 5, nameKr: "프랑킨센스", nameEn: "Frankincense", category: "single", plantType: "resin", productImage: "images/oils/frankincense.jpg", plantImageUrl: "images/plants/frankincense.jpg",
    color: "#C8956C", emoji: "✨",
    origin: "소말리아, 에티오피아", extraction: "수증기 증류", plant: "수지(레진)",
    scent: "우디, 향신료, 은은한",
    description: "'오일의 왕'으로 불리는 프랑킨센스는 수천 년간 영적·의학적 목적으로 사용되었습니다. 세포 재생과 피부 건강에 탁월하며 명상과 집중력 향상에도 도움이 됩니다.",
    benefits: ["세포 재생·노화 방지", "피부 건강", "명상·영적 집중", "면역력 강화", "항염증", "기분 안정"],
    usage: {
      aromatic: "명상 시 디퓨저에 2-3방울. 집중력 향상을 위해 직접 흡입.",
      topical: "얼굴 보습제에 혼합. 주름·잡티 관리. 캐리어 오일과 1:4로 희석 후 전신 마사지.",
      internal: "캡슐에 1-2방울 또는 물에 희석. 면역 지원 루틴에 활용."
    },
    blendsWith: ["라벤더", "와일드 오렌지", "샌달우드", "미르", "베르가못"],
    precautions: "임산부 사용 전 전문의 상담.",
    tags: ["피부", "명상", "노화방지", "면역", "세포재생"], featured: true
  },
  {
    id: 6, nameKr: "멜라루카", nameEn: "Melaleuca (Tea Tree)", category: "single", plantType: "leaf",
    color: "#6BAF8C", emoji: "🌱",
    origin: "호주", extraction: "수증기 증류", plant: "잎",
    scent: "신선한, 약초향, 청결한",
    description: "강력한 항균·항진균·항바이러스 성분을 가진 천연 항생제로 불립니다. 피부 트러블, 여드름, 손발톱 관리에 탁월하며 가정용 천연 소독제로도 활용됩니다.",
    benefits: ["항균·항바이러스", "피부 트러블 개선", "여드름 관리", "두피·모발 건강", "상처 소독", "면역 지원"],
    usage: {
      aromatic: "디퓨저에 2-3방울로 공기 정화. 감기 시즌 방어에 활용.",
      topical: "여드름에 소량 직접 도포. 샴푸에 3-4방울 혼합. 상처 소독 시 희석 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "레몬", "유칼립투스", "로즈마리", "사이프러스"],
    precautions: "눈 주위 사용 금지. 구강 섭취 금지. 어린이 희석 사용.",
    tags: ["항균", "여드름", "두피", "소독", "피부트러블"]
  },
  {
    id: 7, nameKr: "오레가노", nameEn: "Oregano", category: "single", plantType: "herb", productImage: "images/oils/oregano.jpg", plantImageUrl: "images/plants/oregano.jpg",
    color: "#8B6914", emoji: "🌿",
    origin: "터키, 그리스", extraction: "수증기 증류", plant: "잎/줄기",
    scent: "강렬한, 허브, 자극적인",
    description: "'자연의 항생제'라 불리는 강력한 오일입니다. 카르바크롤 성분이 풍부하여 강한 항균·항바이러스·항진균 효과를 발휘합니다. 면역 지원에 탁월하지만 매우 강렬하여 반드시 희석 사용해야 합니다.",
    benefits: ["강력한 항균·항바이러스", "면역 강화", "소화 지원", "항산화", "호흡기 지원"],
    usage: {
      aromatic: "디퓨저에 1-2방울(매우 강함). 다른 오일과 블렌딩 권장.",
      topical: "반드시 캐리어 오일과 1:4 이상 희석. 발바닥에 도포. 피부 직접 노출 주의.",
      internal: "캡슐에 1방울. 단기간만 사용 권장."
    },
    blendsWith: ["레몬", "로즈마리", "멜라루카", "사이프러스"],
    precautions: "핫 오일(자극 강함) — 반드시 희석. 임산부·수유부 사용 금지. 어린이 사용 금지.",
    tags: ["항균", "면역", "호흡기", "강력한", "핫오일"]
  },
  {
    id: 8, nameKr: "유칼립투스", nameEn: "Eucalyptus", category: "single", plantType: "needle", productImage: "images/oils/eucalyptus.jpg", plantImageUrl: "images/plants/eucalyptus.jpg",
    color: "#4AABB0", emoji: "🌿",
    origin: "호주", extraction: "수증기 증류", plant: "잎",
    scent: "상쾌한, 캠퍼향, 청량한",
    description: "시원하고 상쾌한 향으로 호흡기 건강에 특히 탁월한 오일입니다. 1,8-시네올 성분이 기관지를 편안하게 하고 코막힘을 완화합니다. 집중력 향상과 피로 회복에도 도움이 됩니다.",
    benefits: ["호흡기 개통·편안함", "코막힘 완화", "항균·항바이러스", "집중력 향상", "근육 이완", "공기 정화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 샤워 시 바닥에 2-3방울. 스팀 흡입으로 코막힘 완화.",
      topical: "가슴·목·등에 희석 도포. 브리드 블렌드와 함께 사용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["페퍼민트", "라벤더", "레몬", "로즈마리", "멜라루카"],
    precautions: "10세 이하 어린이 얼굴 근처 사용 주의. 눈에 닿지 않도록 주의.",
    tags: ["호흡기", "코막힘", "집중력", "항균", "상쾌함"]
  },
  {
    id: 9, nameKr: "로즈마리", nameEn: "Rosemary", category: "single", plantType: "herb", productImage: "images/oils/rosemary.jpg", plantImageUrl: "images/plants/rosemary.jpg",
    color: "#5A8A5A", emoji: "🌿",
    origin: "스페인, 모로코", extraction: "수증기 증류", plant: "꽃/잎",
    scent: "허브, 캠퍼향, 신선한",
    description: "집중력과 기억력 향상에 탁월한 오일로 '학생의 오일'이라고도 불립니다. 두피와 모발 건강에도 효과적이며 근육통 완화에도 활용됩니다.",
    benefits: ["기억력·집중력 향상", "두피·모발 건강", "근육통 완화", "소화 지원", "항산화", "피로 회복"],
    usage: {
      aromatic: "공부·업무 시 디퓨저에 3방울. 직접 흡입으로 집중력 향상.",
      topical: "샴푸에 3-4방울 혼합. 두피 마사지. 근육 부위에 희석 도포.",
      internal: "요리에 소량 사용. 물에 1-2방울."
    },
    blendsWith: ["페퍼민트", "바질", "라벤더", "유칼립투스", "레몬"],
    precautions: "임산부·간질 환자 사용 주의. 고혈압 환자 주의.",
    tags: ["집중력", "기억력", "두피", "모발", "피로회복"]
  },
  {
    id: 10, nameKr: "베르가못", nameEn: "Bergamot", category: "single", plantType: "citrus", productImage: "images/oils/bergamot.jpg", plantImageUrl: "images/plants/bergamot.jpg",
    color: "#8BC34A", emoji: "🍋",
    origin: "이탈리아", extraction: "냉압착", plant: "껍질",
    scent: "시트러스, 플로럴, 달콤한",
    description: "이탈리아 남부의 달콤한 감귤 베르가못에서 추출한 오일로, 얼 그레이 차의 향기로 유명합니다. 기분 전환과 긍정적 감정 유도에 탁월하며 피부 건강에도 도움이 됩니다.",
    benefits: ["기분 전환·우울감 완화", "스트레스·불안 감소", "피부 건강", "소화 지원", "자신감 향상"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 라벤더와 블렌딩으로 불안 완화. 향수 대용으로 직접 흡입.",
      topical: "캐리어 오일과 희석 후 피부 관리. 목·가슴에 도포.",
      internal: "차에 1방울. 요리에 소량 사용."
    },
    blendsWith: ["라벤더", "일랑일랑", "로즈", "샌달우드", "프랑킨센스"],
    precautions: "광독성 주의 — 도포 후 햇빛 노출 피하기 (FCF 버전 제외).",
    tags: ["기분전환", "불안", "피부", "스트레스", "향수"]
  },
  {
    id: 11, nameKr: "일랑일랑", nameEn: "Ylang Ylang", category: "single", plantType: "flower", productImage: "images/oils/ylang-ylang.jpg", plantImageUrl: "images/plants/ylang-ylang.jpg",
    color: "#F0B429", emoji: "🌸",
    origin: "마다가스카르", extraction: "수증기 증류", plant: "꽃",
    scent: "달콤한, 플로럴, 이국적인",
    description: "강렬하고 달콤한 꽃향기로 유명한 일랑일랑은 감정 균형과 로맨틱한 분위기 조성에 탁월합니다. 심박수를 안정시키고 혈압을 낮추는 효과가 있으며 모발과 피부에도 유익합니다.",
    benefits: ["감정 균형·행복감", "불안·긴장 완화", "혈압 안정", "피부·모발 건강", "로맨틱 분위기", "자신감 향상"],
    usage: {
      aromatic: "디퓨저에 2방울(강함). 베르가못·라벤더와 블렌딩. 로맨틱한 분위기 연출에 활용.",
      topical: "캐리어 오일과 1:4 이상 희석. 모발 끝에 소량. 목·가슴에 도포.",
      internal: "소량 요리에 사용 가능."
    },
    blendsWith: ["베르가못", "로즈", "재스민", "샌달우드", "라벤더"],
    precautions: "농도 진하면 두통 유발 가능 — 소량 사용. 임산부 주의.",
    tags: ["감정균형", "로맨틱", "피부", "모발", "불안완화"]
  },
  {
    id: 12, nameKr: "클라리 세이지", nameEn: "Clary Sage", category: "single", plantType: "flower", productImage: "images/oils/clary-sage.jpg", plantImageUrl: "images/plants/clary-sage.jpg",
    color: "#7B68EE", emoji: "🌾",
    origin: "러시아, 우크라이나", extraction: "수증기 증류", plant: "꽃/잎",
    scent: "허브, 견과류, 달콤한",
    description: "여성 건강의 대표 오일로 생리주기 관련 불편함 완화에 특히 효과적입니다. 호르몬 균형을 돕고 감정 안정에 기여하며 갱년기 증상에도 도움이 됩니다.",
    benefits: ["생리통·PMS 완화", "호르몬 균형", "갱년기 지원", "스트레스 완화", "기분 안정", "수면 개선"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 생리 전 증후군 시 흡입.",
      topical: "복부·허리에 캐리어 오일과 희석 도포. 발목·손목에 도포.",
      internal: "사용 비권장."
    },
    blendsWith: ["라벤더", "베르가못", "제라늄", "일랑일랑", "로즈"],
    precautions: "임신 중 사용 금지. 알코올 섭취와 병행 금지. 에스트로겐 관련 질환 주의.",
    tags: ["여성건강", "생리통", "호르몬", "갱년기", "감정안정"]
  },
  {
    id: 13, nameKr: "코파이바", nameEn: "Copaiba", category: "single", plantType: "resin", productImage: "images/oils/copaiba.jpg", plantImageUrl: "images/plants/copaiba.jpg",
    color: "#D4A853", emoji: "🌳",
    origin: "브라질", extraction: "수증기 증류", plant: "수지(레진)",
    scent: "우디, 달콤한, 향긋한",
    description: "아마존 원주민들이 수천 년간 활용해 온 코파이바는 강력한 항염증 효과로 주목받습니다. 베타-카리오필렌(BCP) 성분이 풍부하여 통증 완화와 신경계 지원에 탁월합니다.",
    benefits: ["항염증", "통증 완화", "신경계 지원", "피부 건강", "소화 지원", "심신 안정"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 프랑킨센스와 블렌딩으로 명상에 활용.",
      topical: "통증 부위에 희석 도포. 피부 케어에 소량 적용.",
      internal: "캡슐에 1-2방울. 물에 희석."
    },
    blendsWith: ["프랑킨센스", "라벤더", "세레니티", "샌달우드"],
    precautions: "일반적으로 안전. 임산부 주의.",
    tags: ["항염", "통증", "신경계", "피부", "명상"]
  },
  {
    id: 14, nameKr: "시더우드", nameEn: "Cedarwood", category: "single", plantType: "wood", productImage: "images/oils/cedarwood.jpg", plantImageUrl: "images/plants/cedarwood.jpg",
    color: "#8B5E3C", emoji: "🌲",
    origin: "미국", extraction: "수증기 증류", plant: "나무",
    scent: "우디, 흙냄새, 따뜻한",
    description: "따뜻하고 안정감 있는 우디 향의 시더우드는 수면 유도와 감정 안정에 탁월합니다. 세다롤 성분이 송과체를 자극하여 멜라토닌 분비를 도와 자연스러운 수면을 유도합니다.",
    benefits: ["수면 유도", "긴장·불안 완화", "두피·탈모 케어", "집중력 향상", "벌레 퇴치", "감정 안정"],
    usage: {
      aromatic: "수면 전 디퓨저에 3-4방울. 라벤더와 블렌딩으로 수면 향상.",
      topical: "두피 마사지에 샴푸와 혼합. 관자놀이에 희석 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "베티버", "프랑킨센스", "로즈", "버그아못"],
    precautions: "임산부 사용 주의.",
    tags: ["수면", "탈모", "두피", "긴장완화", "집중력"]
  },
  {
    id: 15, nameKr: "사이프러스", nameEn: "Cypress", category: "single", plantType: "needle", productImage: "images/oils/cypress.jpg", plantImageUrl: "images/plants/cypress.jpg",
    color: "#4A7C59", emoji: "🌲",
    origin: "스페인", extraction: "수증기 증류", plant: "잎/가지",
    scent: "신선한, 우디, 청량한",
    description: "혈액순환 개선에 특화된 오일로 부종, 정맥류, 셀룰라이트 케어에 활용됩니다. 기침과 호흡기 불편함 완화에도 효과적이며 감정적 강인함을 높이는 데 도움이 됩니다.",
    benefits: ["혈액순환 개선", "부종 완화", "정맥류 케어", "호흡기 지원", "근육경련 완화", "감정 강화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 운동 후 흡입으로 회복 지원.",
      topical: "다리·발에 위에서 아래로 마사지. 가슴·등에 호흡기 지원.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "레몬", "멜라루카", "로즈마리", "딥블루"],
    precautions: "임산부 사용 주의.",
    tags: ["혈액순환", "부종", "정맥류", "호흡기", "셀룰라이트"]
  },
  {
    id: 16, nameKr: "진저", nameEn: "Ginger", category: "single", plantType: "root", productImage: "images/oils/ginger.jpg", plantImageUrl: "images/plants/ginger.jpg",
    color: "#E8821A", emoji: "🫚",
    origin: "인도네시아", extraction: "수증기 증류", plant: "뿌리",
    scent: "따뜻한, 향신료, 자극적인",
    description: "따뜻하고 자극적인 생강 오일은 소화 지원의 대표 오일입니다. 메스꺼움, 멀미, 소화 불량에 즉각적인 효과를 보이며 관절과 근육 통증 완화에도 활용됩니다.",
    benefits: ["소화 촉진", "메스꺼움·구역질 완화", "멀미 예방", "근육·관절 통증 완화", "혈액순환 촉진", "면역 지원"],
    usage: {
      aromatic: "멀미 시 직접 흡입. 디퓨저에 2-3방울.",
      topical: "복부에 희석 마사지. 관절·근육에 딥블루와 함께 도포.",
      internal: "물·차에 1방울. 요리에 활용."
    },
    blendsWith: ["레몬", "오렌지", "계피", "클로브", "다이제스트젠"],
    precautions: "핫 오일 — 반드시 희석. 임산부 소량 사용 (전문의 상담).",
    tags: ["소화", "메스꺼움", "멀미", "관절", "혈액순환"]
  },
  {
    id: 17, nameKr: "시나몬", nameEn: "Cinnamon Bark", category: "single", plantType: "spice", productImage: "images/oils/cinnamon-bark.jpg", plantImageUrl: "images/plants/cinnamon-bark.jpg",
    color: "#C44B17", emoji: "🧡",
    origin: "스리랑카", extraction: "수증기 증류", plant: "껍질",
    scent: "따뜻한, 달콤한, 향신료",
    description: "달콤하고 따뜻한 시나몬은 혈당 조절 지원과 강력한 항균 효과로 유명합니다. 겨울철 면역 지원과 따뜻한 분위기 연출에 탁월하며 소화 지원에도 활용됩니다.",
    benefits: ["혈당 조절 지원", "강력한 항균", "면역 강화", "소화 지원", "혈액순환 촉진", "따뜻한 분위기"],
    usage: {
      aromatic: "디퓨저에 1-2방울(강함). 와일드 오렌지·클로브와 블렌딩.",
      topical: "반드시 1:10 이상 희석. 발바닥에만 도포 권장.",
      internal: "물에 1방울. 요리·베이킹에 소량."
    },
    blendsWith: ["와일드 오렌지", "클로브", "프랑킨센스", "진저", "온가드"],
    precautions: "극도로 강한 핫 오일 — 피부에 직접 도포 절대 금지. 임산부 금지. 어린이 금지.",
    tags: ["혈당", "항균", "면역", "따뜻함", "핫오일"]
  },
  {
    id: 18, nameKr: "클로브", nameEn: "Clove", category: "single", plantType: "spice", productImage: "images/oils/clove.jpg", plantImageUrl: "images/plants/clove.jpg",
    color: "#8B4513", emoji: "🌰",
    origin: "인도네시아, 마다가스카르", extraction: "수증기 증류", plant: "꽃봉오리",
    scent: "따뜻한, 향신료, 달콤한",
    description: "강력한 항산화 오일로 ORAC(산화방지 지수) 최고 수준을 자랑합니다. 치통 완화와 구강 건강에 전통적으로 활용되어 왔으며 강력한 항균·항바이러스 효과를 가집니다.",
    benefits: ["강력한 항산화", "치통·구강 건강", "항균·항바이러스", "면역 지원", "소화 지원", "혈액순환"],
    usage: {
      aromatic: "디퓨저에 1-2방울. 와일드 오렌지·시나몬과 블렌딩.",
      topical: "치통 시 1방울 직접 도포. 반드시 희석 후 피부 사용.",
      internal: "물에 1방울. 요리에 소량."
    },
    blendsWith: ["와일드 오렌지", "시나몬", "진저", "로즈마리", "온가드"],
    precautions: "핫 오일 — 반드시 희석. 임산부 금지. 혈액 희석제 복용자 주의.",
    tags: ["항산화", "구강건강", "치통", "항균", "면역"]
  },
  {
    id: 19, nameKr: "블랙 페퍼", nameEn: "Black Pepper", category: "single", plantType: "spice", productImage: "images/oils/black-pepper.jpg",
    color: "#3D3D3D", emoji: "🌶️",
    origin: "인도", extraction: "수증기 증류", plant: "열매",
    scent: "따뜻한, 향신료, 자극적인",
    description: "요리에서 친숙한 후추의 에센셜 오일 버전으로, 혈액순환 촉진과 근육통 완화에 탁월합니다. 다른 오일의 흡수를 도와주는 역할도 하며 금연 지원에 활용되기도 합니다.",
    benefits: ["혈액순환 촉진", "근육·관절 통증 완화", "소화 지원", "금연 지원", "오일 흡수 향상", "항산화"],
    usage: {
      aromatic: "금연 지원 시 직접 흡입. 디퓨저에 1-2방울.",
      topical: "근육 부위에 희석 마사지. 딥블루와 블렌딩.",
      internal: "요리에 소량. 물에 1방울."
    },
    blendsWith: ["진저", "라벤더", "딥블루", "프랑킨센스", "레몬"],
    precautions: "핫 오일 — 반드시 희석. 민감한 피부 주의.",
    tags: ["혈액순환", "근육통", "소화", "금연", "오일흡수"]
  },
  {
    id: 20, nameKr: "카다몬", nameEn: "Cardamom", category: "single", plantType: "spice", productImage: "images/oils/cardamom.jpg",
    color: "#7BAF6E", emoji: "🌿",
    origin: "과테말라", extraction: "수증기 증류", plant: "씨앗",
    scent: "달콤한, 향신료, 플로럴",
    description: "따뜻하고 달콤한 향신료 오일로 소화 지원과 호흡기 건강에 탁월합니다. 구토·메스꺼움 완화에 효과적이며 에너지를 충전시켜 주는 따뜻한 향이 특징입니다.",
    benefits: ["소화 지원", "메스꺼움 완화", "호흡기 건강", "구강 청결", "에너지 충전", "항균"],
    usage: {
      aromatic: "디퓨저에 3방울. 다른 향신료 오일과 블렌딩.",
      topical: "복부에 희석 마사지. 가슴에 호흡기 지원.",
      internal: "커피·차에 1방울. 요리에 활용."
    },
    blendsWith: ["진저", "레몬", "시나몬", "오렌지", "다이제스트젠"],
    precautions: "임산부 소량 사용 (전문의 상담).",
    tags: ["소화", "호흡기", "메스꺼움", "에너지", "구강청결"]
  },
  {
    id: 21, nameKr: "바질", nameEn: "Basil", category: "single", plantType: "herb", productImage: "images/oils/basil.jpg", plantImageUrl: "images/plants/basil.jpg",
    color: "#4CAF50", emoji: "🌿",
    origin: "인도, 이탈리아", extraction: "수증기 증류", plant: "잎/줄기",
    scent: "허브, 달콤한, 아니스향",
    description: "허브의 왕으로 불리는 바질은 집중력과 명료한 사고를 지원합니다. 근육 경련 완화와 소화 지원에도 활용되며 요리에 흔히 쓰이는 익숙한 향입니다.",
    benefits: ["집중력·명료한 사고", "근육 경련 완화", "소화 지원", "항피로", "머리 편안함", "감정 지원"],
    usage: {
      aromatic: "업무·공부 시 디퓨저에 3방울. 로즈마리와 블렌딩.",
      topical: "목·어깨 근육에 희석 마사지. 관자놀이에 희석 도포.",
      internal: "요리에 활용. 물에 1방울."
    },
    blendsWith: ["로즈마리", "페퍼민트", "레몬", "라벤더", "베르가못"],
    precautions: "임산부 사용 주의. 에스트라골 함량으로 장기 과다 복용 주의.",
    tags: ["집중력", "근육경련", "소화", "피로", "업무"]
  },
  {
    id: 22, nameKr: "마조람", nameEn: "Marjoram", category: "single", plantType: "herb", productImage: "images/oils/marjoram.jpg", plantImageUrl: "images/plants/marjoram.jpg",
    color: "#9B9B3F", emoji: "🌿",
    origin: "이집트", extraction: "수증기 증류", plant: "잎",
    scent: "따뜻한, 허브, 나무향",
    description: "근육 이완과 심혈관 건강에 특화된 오일입니다. 스트레스와 긴장으로 굳은 근육을 풀어주며 혈압 안정에 도움을 줍니다. '고독의 위안자'라는 별명처럼 감정적 지원에도 탁월합니다.",
    benefits: ["근육 이완·통증 완화", "심혈관 건강", "혈압 안정", "소화 지원", "감정 위안", "수면 개선"],
    usage: {
      aromatic: "디퓨저에 3방울. 운동 후 근육 회복에 활용.",
      topical: "근육 부위에 희석 마사지. 딥블루와 블렌딩.",
      internal: "요리에 소량. 물에 1방울."
    },
    blendsWith: ["라벤더", "딥블루", "프랑킨센스", "오레가노", "바질"],
    precautions: "임산부 사용 주의. 저혈압 환자 주의.",
    tags: ["근육이완", "혈압", "심혈관", "수면", "감정위안"]
  },
  {
    id: 23, nameKr: "타임", nameEn: "Thyme", category: "single", plantType: "herb", productImage: "images/oils/thyme.jpg", plantImageUrl: "images/plants/thyme.jpg",
    color: "#6B8F3A", emoji: "🌿",
    origin: "스페인", extraction: "수증기 증류", plant: "잎/꽃",
    scent: "허브, 따뜻한, 약초향",
    description: "강력한 항균·항바이러스·항진균 효과를 가진 오일입니다. 면역 강화와 호흡기 건강에 탁월하며 피로 회복과 에너지 증진에도 활용됩니다.",
    benefits: ["강력한 항균·항바이러스", "면역 강화", "호흡기 건강", "에너지 증진", "소화 지원", "항산화"],
    usage: {
      aromatic: "디퓨저에 1-2방울. 유칼립투스와 블렌딩.",
      topical: "반드시 1:5 이상 희석. 발바닥·가슴에 도포.",
      internal: "요리에 소량. 물에 1방울."
    },
    blendsWith: ["레몬", "로즈마리", "멜라루카", "라벤더", "온가드"],
    precautions: "핫 오일 — 반드시 희석. 임산부·어린이 사용 주의.",
    tags: ["항균", "면역", "호흡기", "에너지", "항산화"]
  },
  {
    id: 24, nameKr: "헬리크리섬", nameEn: "Helichrysum", category: "single", plantType: "flower", productImage: "images/oils/helichrysum.jpg", plantImageUrl: "images/plants/helichrysum.jpg",
    color: "#D4AF37", emoji: "🌼",
    origin: "코르시카", extraction: "수증기 증류", plant: "꽃",
    scent: "꿀향, 허브, 약초향",
    description: "'영원한 꽃'에서 추출한 고귀한 오일로 상처 치유와 피부 재생에 탁월합니다. 신경 보호 효과와 강력한 항염 작용으로 '자연의 응급키트'라 불립니다.",
    benefits: ["상처·멍 치유", "피부 재생·노화 방지", "신경 보호", "항염증", "혈액순환 개선", "간 지원"],
    usage: {
      aromatic: "디퓨저에 2-3방울. 명상·치유 의도 시 사용.",
      topical: "상처·멍에 직접 소량 도포. 얼굴 세럼에 혼합. 신경 부위에 도포.",
      internal: "물에 1방울. 간 지원 루틴에 활용."
    },
    blendsWith: ["프랑킨센스", "라벤더", "로즈", "제라늄", "사이프러스"],
    precautions: "임산부 주의. 혈액 희석제 복용자 주의.",
    tags: ["상처치유", "피부재생", "항염", "신경보호", "노화방지"]
  },
  {
    id: 25, nameKr: "베티버", nameEn: "Vetiver", category: "single", plantType: "root", productImage: "images/oils/vetiver.jpg", plantImageUrl: "images/plants/vetiver.jpg",
    color: "#4A3728", emoji: "🌾",
    origin: "아이티", extraction: "수증기 증류", plant: "뿌리",
    scent: "흙냄새, 스모키, 깊은",
    description: "가장 무겁고 깊은 향의 오일 중 하나로 '고요함의 오일'이라 불립니다. ADHD·집중력 지원과 깊은 수면 유도에 탁월하며 뿌리로부터 추출되어 심리적 안정감을 제공합니다.",
    benefits: ["깊은 집중력·ADHD 지원", "수면 유도", "불안·패닉 완화", "감정 안정", "피부 보습", "독소 제거"],
    usage: {
      aromatic: "수면 전 디퓨저에 1-2방울. 라벤더·시더우드와 블렌딩.",
      topical: "발바닥·척추 라인에 도포. 손목·목 뒤에 소량.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "시더우드", "프랑킨센스", "일랑일랑", "세레니티"],
    precautions: "임산부 주의.",
    tags: ["수면", "집중력", "ADHD", "감정안정", "불안완화"]
  },
  {
    id: 26, nameKr: "로만 카모마일", nameEn: "Roman Chamomile", category: "single", plantType: "flower", productImage: "images/oils/roman-chamomile.jpg",
    color: "#F0D060", emoji: "🌼",
    origin: "영국", extraction: "수증기 증류", plant: "꽃",
    scent: "달콤한, 사과향, 허브",
    description: "어린이와 민감한 피부에도 안전하게 사용할 수 있는 온화한 오일입니다. 진정과 수면 유도에 특히 탁월하며 피부 알레르기, 습진 케어에도 효과적입니다.",
    benefits: ["진정·이완", "어린이 수면 지원", "피부 알레르기·습진", "소화 지원", "두통 완화", "불안 감소"],
    usage: {
      aromatic: "어린이 수면 시 디퓨저에 1-2방울. 라벤더와 블렌딩.",
      topical: "어린이 — 캐리어 오일과 1:10 희석. 피부 트러블 부위에 도포.",
      internal: "차에 1방울. 소량 섭취 가능."
    },
    blendsWith: ["라벤더", "베르가못", "로즈", "제라늄", "클라리 세이지"],
    precautions: "국화과 알레르기 주의. 임산부 초기 사용 주의.",
    tags: ["진정", "어린이", "수면", "피부알레르기", "습진"]
  },
  {
    id: 27, nameKr: "재스민", nameEn: "Jasmine", category: "single", plantType: "flower",
    color: "#FFF0D0", emoji: "🌸",
    origin: "인도", extraction: "용매 추출", plant: "꽃",
    scent: "달콤한, 강렬한 플로럴, 이국적인",
    description: "'향기의 여왕'이라 불리는 재스민은 자신감과 낭만적 감정을 고취시킵니다. 우울감 완화와 산후 감정 지원에 활용되며 피부 탄력 유지에도 효과적입니다.",
    benefits: ["자신감·긍정 감정", "우울감 완화", "산후 감정 지원", "피부 탄력", "로맨틱 분위기", "수면 개선"],
    usage: {
      aromatic: "디퓨저에 2-3방울. 베르가못·일랑일랑과 블렌딩.",
      topical: "캐리어 오일과 희석 후 얼굴·목에 도포.",
      internal: "차에 소량."
    },
    blendsWith: ["베르가못", "일랑일랑", "로즈", "샌달우드", "위스퍼"],
    precautions: "임산부 사용 주의.",
    tags: ["자신감", "우울감", "로맨틱", "피부탄력", "산후"]
  },
  {
    id: 28, nameKr: "로즈페탈", nameEn: "Rose Petal", category: "single", plantType: "flower",
    color: "#E8537A", emoji: "🌹",
    origin: "불가리아", extraction: "수증기 증류", plant: "꽃잎",
    scent: "달콤한, 고귀한 플로럴, 깊은",
    description: "세계에서 가장 고귀하고 비싼 오일 중 하나입니다. 진정한 사랑과 자기 수용, 감정 치유에 탁월합니다. 피부 재생과 노화 방지에 탁월한 효능을 가집니다.",
    benefits: ["감정 치유·자기 수용", "우울·슬픔 완화", "피부 재생·탄력", "노화 방지", "호르몬 균형", "자신감"],
    usage: {
      aromatic: "1-2방울만으로도 충분. 마음의 안정에 직접 흡입.",
      topical: "얼굴 세럼에 혼합. 심장 부위·손목에 소량.",
      internal: "물에 1방울. 초콜릿·디저트에 소량."
    },
    blendsWith: ["재스민", "일랑일랑", "프랑킨센스", "샌달우드", "베르가못"],
    precautions: "임산부 주의.",
    tags: ["감정치유", "피부재생", "노화방지", "자기수용", "고귀한향"]
  },
  {
    id: 29, nameKr: "샌달우드", nameEn: "Sandalwood", category: "single", plantType: "wood", productImage: "images/oils/sandalwood.jpg", plantImageUrl: "images/plants/sandalwood.jpg",
    color: "#C4956A", emoji: "🌳",
    origin: "하와이, 호주", extraction: "수증기 증류", plant: "나무",
    scent: "우디, 달콤한, 크리미한",
    description: "깊고 따뜻한 우디 향으로 명상과 영적 집중에 수천 년간 활용된 성스러운 오일입니다. 피부 수분 공급과 노화 방지에도 탁월하며 심리적 안정감을 제공합니다.",
    benefits: ["명상·영적 집중", "피부 수분·탄력", "노화 방지", "감정 안정", "집중력 향상", "항염증"],
    usage: {
      aromatic: "명상 시 디퓨저에 2-3방울. 프랑킨센스와 블렌딩.",
      topical: "얼굴 보습제에 혼합. 심장·손목에 도포.",
      internal: "물에 1방울."
    },
    blendsWith: ["프랑킨센스", "로즈", "라벤더", "베르가못", "일랑일랑"],
    precautions: "일반적으로 안전. 임산부 주의.",
    tags: ["명상", "피부수분", "노화방지", "감정안정", "영적"]
  },
  {
    id: 30, nameKr: "몰약", nameEn: "Myrrh", category: "single", plantType: "resin", productImage: "images/oils/myrrh.jpg", plantImageUrl: "images/plants/myrrh.jpg",
    color: "#8B4513", emoji: "🌳",
    origin: "소말리아, 에티오피아", extraction: "수증기 증류", plant: "수지",
    scent: "우디, 스모키, 약초향",
    description: "성경에도 등장하는 역사적인 오일로 피부 치유와 항산화에 탁월합니다. 갑상선 지원과 감정적 해방에도 활용되며 프랑킨센스와 함께 신성한 블렌딩으로 알려져 있습니다.",
    benefits: ["피부 치유·재생", "강력한 항산화", "갑상선 지원", "구강 건강", "감정 해방", "면역 강화"],
    usage: {
      aromatic: "디퓨저에 2-3방울. 프랑킨센스와 명상에 활용.",
      topical: "피부 트러블에 소량 도포. 갑상선 부위에 희석.",
      internal: "캡슐에 1-2방울."
    },
    blendsWith: ["프랑킨센스", "라벤더", "샌달우드", "로즈", "시더우드"],
    precautions: "임산부 사용 금지.",
    tags: ["피부치유", "항산화", "갑상선", "구강건강", "명상"]
  },
  {
    id: 31, nameKr: "터메릭", nameEn: "Turmeric", category: "single", plantType: "root", productImage: "images/oils/turmeric.jpg", plantImageUrl: "images/plants/turmeric.jpg",
    color: "#F5A623", emoji: "🌿",
    origin: "인도", extraction: "수증기 증류", plant: "뿌리",
    scent: "따뜻한, 향신료, 흙냄새",
    description: "강황에서 추출한 터메릭은 강력한 항염증 효과로 주목받습니다. 커큐민 성분이 관절 건강과 두뇌 보호에 효과적이며 면역 지원에도 활용됩니다.",
    benefits: ["항염증", "관절 건강", "두뇌 보호", "소화 지원", "면역 강화", "항산화"],
    usage: {
      aromatic: "디퓨저에 2-3방울.",
      topical: "관절 부위에 희석 도포. 코파이바와 블렌딩.",
      internal: "캡슐에 1-2방울. 골든 밀크에 1방울."
    },
    blendsWith: ["진저", "코파이바", "프랑킨센스", "블랙 페퍼", "레몬"],
    precautions: "혈액 희석제 복용자 주의. 담석 환자 주의.",
    tags: ["항염", "관절", "두뇌", "면역", "소화"]
  },
  {
    id: 32, nameKr: "스피어민트", nameEn: "Spearmint", category: "single", plantType: "herb", productImage: "images/oils/spearmint.jpg", plantImageUrl: "images/plants/spearmint.jpg",
    color: "#50C878", emoji: "🌿",
    origin: "미국", extraction: "수증기 증류", plant: "잎",
    scent: "달콤한 민트, 청량한",
    description: "페퍼민트보다 부드러운 버전으로 어린이에게 더 적합합니다. 소화 지원과 구강 청결에 탁월하며 집중력 향상에도 도움이 됩니다. 상쾌하고 달콤한 향이 특징입니다.",
    benefits: ["소화 지원", "구강 청결", "집중력 향상", "메스꺼움 완화", "에너지 충전", "기분 전환"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 페퍼민트 대신 어린이 환경에 사용.",
      topical: "복부에 희석 도포. 관자놀이에 소량.",
      internal: "물·차에 1방울. 요리에 활용."
    },
    blendsWith: ["라벤더", "바질", "로즈마리", "레몬", "유칼립투스"],
    precautions: "페퍼민트보다 안전하지만 어린이는 희석 사용.",
    tags: ["소화", "구강청결", "어린이", "집중력", "청량감"]
  },
  {
    id: 33, nameKr: "라임", nameEn: "Lime", category: "single", plantType: "citrus", productImage: "images/oils/lime.jpg", plantImageUrl: "images/plants/lime.jpg",
    color: "#90EE90", emoji: "🍈",
    origin: "멕시코", extraction: "냉압착/수증기 증류", plant: "껍질",
    scent: "상큼한, 시트러스, 청량한",
    description: "밝고 상쾌한 라임은 기분 전환과 에너지 충전에 탁월합니다. 청소·세정제로도 활용되며 음식과 음료에 더해 상큼한 풍미를 더할 수 있습니다.",
    benefits: ["기분 전환", "에너지 충전", "피로 회복", "면역 지원", "천연 세정", "입냄새 제거"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 다른 시트러스와 블렌딩.",
      topical: "캐리어 오일과 희석 후 도포.",
      internal: "물·음료에 1-2방울. 요리에 활용."
    },
    blendsWith: ["레몬", "와일드 오렌지", "베르가못", "코코넛오일", "민트"],
    precautions: "냉압착 버전은 광독성 주의. 증류 버전은 광독성 없음.",
    tags: ["기분전환", "에너지", "피로회복", "세정", "시트러스"]
  },
  {
    id: 34, nameKr: "그레이프프루트", nameEn: "Grapefruit", category: "single", plantType: "citrus", productImage: "images/oils/grapefruit.jpg", plantImageUrl: "images/plants/grapefruit.jpg",
    color: "#FF69B4", emoji: "🍇",
    origin: "미국", extraction: "냉압착", plant: "껍질",
    scent: "상큼한, 쌉쌀한, 시트러스",
    description: "체중 관리와 셀룰라이트 케어에 특화된 오일입니다. 식욕 억제와 신진대사 지원에 활용되며 긍정적 에너지와 자신감을 높여주는 향이 특징입니다.",
    benefits: ["체중 관리 지원", "식욕 억제", "셀룰라이트 케어", "기분 전환", "신진대사 지원", "림프 순환"],
    usage: {
      aromatic: "식욕 억제를 위해 직접 흡입. 디퓨저에 3-4방울.",
      topical: "셀룰라이트 부위에 희석 마사지. 복부에 도포.",
      internal: "물에 1방울. 슬림 앤 새시와 함께."
    },
    blendsWith: ["레몬", "라임", "슬림 앤 새시", "페퍼민트", "로즈마리"],
    precautions: "광독성 주의 — 도포 후 햇빛 노출 피하기.",
    tags: ["체중관리", "셀룰라이트", "식욕억제", "기분전환", "신진대사"]
  },
  {
    id: 35, nameKr: "레몬그라스", nameEn: "Lemongrass", category: "single", plantType: "herb", productImage: "images/oils/lemongrass.jpg", plantImageUrl: "images/plants/lemongrass.jpg",
    color: "#BDE038", emoji: "🌾",
    origin: "인도", extraction: "수증기 증류", plant: "잎",
    scent: "시트러스, 허브, 풀냄새",
    description: "상큼하고 허브향이 어우러진 레몬그라스는 에너지 충전과 정화에 탁월합니다. 근육통과 관절 지원에도 효과적이며 천연 방충제로도 활용됩니다.",
    benefits: ["에너지 충전", "근육통 완화", "천연 방충제", "공기 정화", "소화 지원", "스트레스 완화"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 방충 목적으로 공간에 분사.",
      topical: "근육 부위에 희석 마사지. 발에 도포.",
      internal: "요리에 소량. 차에 1방울."
    },
    blendsWith: ["라벤더", "로즈마리", "코코넛오일", "유칼립투스", "사이프러스"],
    precautions: "핫 오일 — 반드시 희석. 민감한 피부 주의.",
    tags: ["에너지", "근육통", "방충제", "정화", "소화"]
  },
  {
    id: 36, nameKr: "제라늄", nameEn: "Geranium", category: "single", plantType: "flower", productImage: "images/oils/geranium.jpg", plantImageUrl: "images/plants/geranium.jpg",
    color: "#E8A0C0", emoji: "🌸",
    origin: "이집트", extraction: "수증기 증류", plant: "잎/줄기",
    scent: "플로럴, 로즈향, 청량한",
    description: "장미와 비슷한 플로럴 향으로 피부 건강과 호르몬 균형에 탁월합니다. 피부 탄력 개선과 모공 축소에 효과적이며 감정 균형과 스트레스 완화에도 도움이 됩니다.",
    benefits: ["피부 탄력·재생", "호르몬 균형", "감정 균형", "지혈·상처 치유", "부종 완화", "모발 건강"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 라벤더와 블렌딩.",
      topical: "얼굴 세럼에 혼합. 캐리어 오일과 희석 후 피부 도포.",
      internal: "소량 음료에 사용 가능."
    },
    blendsWith: ["라벤더", "로즈", "클라리 세이지", "베르가못", "로즈마리"],
    precautions: "임산부 사용 주의.",
    tags: ["피부탄력", "호르몬균형", "감정균형", "모발건강", "모공"]
  },
  {
    id: 37, nameKr: "파출리", nameEn: "Patchouli", category: "single", plantType: "leaf", productImage: "images/oils/patchouli.jpg", plantImageUrl: "images/plants/patchouli.jpg",
    color: "#6B4226", emoji: "🌿",
    origin: "인도네시아", extraction: "수증기 증류", plant: "잎",
    scent: "흙냄새, 달콤한, 이국적인",
    description: "깊고 이국적인 향의 파출리는 감정 안정과 자신감 향상에 도움을 줍니다. 피부 재생과 항노화에 탁월하며 향수의 베이스 노트로 자주 활용됩니다.",
    benefits: ["감정 안정·자신감", "피부 재생", "항노화", "체중 관리 지원", "항균·항진균", "스트레스 완화"],
    usage: {
      aromatic: "디퓨저에 2-3방울. 라벤더·베르가못과 블렌딩.",
      topical: "피부 관리에 캐리어 오일과 혼합. 얼굴·몸에 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "베르가못", "일랑일랑", "샌달우드", "로즈"],
    precautions: "일반적으로 안전. 임산부 주의.",
    tags: ["감정안정", "피부재생", "항노화", "향수", "자신감"]
  },
  {
    id: 38, nameKr: "주니퍼베리", nameEn: "Juniper Berry", category: "single", plantType: "berry", productImage: "images/oils/juniper-berry.jpg",
    color: "#4682B4", emoji: "🍇",
    origin: "불가리아", extraction: "수증기 증류", plant: "열매",
    scent: "신선한, 우디, 과일향",
    description: "신장과 요로 건강에 특화된 오일입니다. 독소 제거와 체액 균형에 효과적이며 감정적 정화와 보호 효과로도 알려져 있습니다.",
    benefits: ["신장·요로 건강", "독소 제거", "체액 균형", "피부 정화", "감정 정화", "항균"],
    usage: {
      aromatic: "디퓨저에 3-4방울. 정화 목적으로 활용.",
      topical: "신장 부위에 희석 도포. 피부 정화에 활용.",
      internal: "물에 1방울. 단기 사용 권장."
    },
    blendsWith: ["레몬", "라벤더", "프랑킨센스", "사이프러스", "시더우드"],
    precautions: "신장 질환자 사용 주의. 임산부 사용 금지.",
    tags: ["신장", "독소제거", "정화", "요로건강", "체액균형"]
  },

  // ───────────────────────────────────────────────
  //  블렌드 오일 (Proprietary Blends)
  // ───────────────────────────────────────────────
  {
    id: 101, nameKr: "온가드", nameEn: "On Guard", category: "blend", plantType: "blend", productImage: "images/oils/on-guard.jpg", plantImageUrl: "images/plants/on-guard.jpg",
    color: "#E8821A", emoji: "🛡️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "따뜻한, 향신료, 달콤한",
    description: "도테라 대표 면역 지원 블렌드입니다. 와일드 오렌지, 클로브, 시나몬, 유칼립투스, 로즈마리가 블렌딩되어 면역 시스템을 강력하게 지원하고 환경 위협으로부터 보호합니다.",
    benefits: ["면역 강화", "항균·항바이러스", "호흡기 지원", "공기 정화", "천연 세정", "에너지 충전"],
    ingredients: ["와일드 오렌지", "클로브", "시나몬 바크", "유칼립투스", "로즈마리"],
    usage: {
      aromatic: "디퓨저에 3-4방울로 공기 정화. 면역 시즌에 매일 확산.",
      topical: "발바닥에 도포. 목·가슴에 희석 도포. 온가드 로션 활용.",
      internal: "캡슐에 1-2방울. 온가드 비즈소프트젤 활용."
    },
    blendsWith: ["레몬", "유칼립투스", "프랑킨센스"],
    precautions: "핫 오일 포함 — 피부 사용 시 희석. 어린이 희석 사용.",
    tags: ["면역", "항균", "호흡기", "세정", "보호"], featured: true
  },
  {
    id: 102, nameKr: "딥블루", nameEn: "Deep Blue", category: "blend", plantType: "blend", productImage: "images/oils/deep-blue.jpg", plantImageUrl: "images/plants/deep-blue.jpg",
    color: "#1565C0", emoji: "💙",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "청량한, 민트, 허브",
    description: "도테라의 대표 통증 관리 블렌드입니다. 겨울그린, 캠퍼, 페퍼민트, 유칼립투스, 청량 성분들이 근육과 관절의 통증을 빠르게 완화합니다.",
    benefits: ["근육·관절 통증 완화", "운동 후 회복", "염증 완화", "냉각·진정 효과", "부상 케어"],
    ingredients: ["겨울그린", "캠퍼", "페퍼민트", "유칼립투스", "레몬그라스", "마조람", "오스만서스", "블루 탠지"],
    usage: {
      aromatic: "통증 부위 근처에서 직접 흡입.",
      topical: "통증 부위에 직접 도포 또는 희석. 딥블루 럽과 함께 사용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "코파이바", "프랑킨센스", "사이프러스"],
    precautions: "눈 주위 사용 금지. 민감한 피부 희석 사용. 어린이 희석 사용.",
    tags: ["근육통", "관절통", "운동회복", "염증", "냉각"], featured: true
  },
  {
    id: 103, nameKr: "다이제스트젠", nameEn: "DigestZen", category: "blend", plantType: "blend", productImage: "images/oils/digestzen.jpg", plantImageUrl: "images/plants/digestzen.jpg",
    color: "#4CAF50", emoji: "🌿",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "아니스향, 허브, 달콤한",
    description: "소화 지원에 특화된 블렌드입니다. 진저, 페퍼민트, 캐러웨이, 코리앤더 등이 블렌딩되어 소화 불량, 복부 팽만, 메스꺼움을 완화합니다.",
    benefits: ["소화 촉진", "복부 팽만 완화", "메스꺼움 억제", "위 편안함", "속쓰림 완화", "장 건강"],
    ingredients: ["진저", "페퍼민트", "캐러웨이", "코리앤더", "아니스", "타라곤", "펜넬"],
    usage: {
      aromatic: "소화 불편 시 직접 흡입. 디퓨저에 3방울.",
      topical: "복부에 시계 방향으로 마사지. 발바닥 소화 반사구에 도포.",
      internal: "물에 1-2방울. 식사 후 캡슐 1방울."
    },
    blendsWith: ["진저", "페퍼민트", "레몬"],
    precautions: "임산부 주의. 어린이 희석 사용.",
    tags: ["소화", "복부팽만", "메스꺼움", "위건강", "장건강"], featured: true
  },
  {
    id: 104, nameKr: "브리드", nameEn: "Breathe", category: "blend", plantType: "blend",
    color: "#00BCD4", emoji: "💨",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "청량한, 민트, 유칼립투스향",
    description: "호흡기 건강에 특화된 블렌드입니다. 로렐, 유칼립투스, 페퍼민트 등이 기도를 열어주고 코막힘을 완화하며 숨쉬기를 편안하게 합니다.",
    benefits: ["호흡기 개통", "코막힘 완화", "수면 중 숨쉬기", "기관지 지원", "공기 정화", "알레르기 지원"],
    ingredients: ["로렐잎", "유칼립투스", "페퍼민트", "멜라루카", "레몬", "라빈차라", "카다몬"],
    usage: {
      aromatic: "수면 전 디퓨저에 3-4방울. 코 막힘 시 직접 흡입.",
      topical: "가슴·등·목에 도포. 발바닥에 도포. 코 아래 소량.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "레몬", "유칼립투스", "온가드"],
    precautions: "눈 주위 사용 금지. 어린이 희석 사용.",
    tags: ["호흡기", "코막힘", "수면", "알레르기", "기관지"]
  },
  {
    id: 105, nameKr: "밸런스", nameEn: "Balance", category: "mood", plantType: "mood", productImage: "images/oils/balance.jpg", plantImageUrl: "images/plants/balance.jpg",
    color: "#6B8F71", emoji: "⚖️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "우디, 허브, 따뜻한",
    description: "그라운딩 블렌드라고도 불리는 밸런스는 감정적 안정과 심리적 균형에 탁월합니다. 스프루스, 호오우드, 프랑킨센스가 어우러져 스트레스와 불안을 완화합니다.",
    benefits: ["감정 균형·안정", "스트레스 완화", "집중력", "자신감", "그라운딩 효과", "수면 지원"],
    ingredients: ["스프루스 잎/나무", "호오우드", "프랑킨센스", "블루 탠지", "블루 캐모마일"],
    usage: {
      aromatic: "아침 루틴에 디퓨저로 하루 시작. 스트레스 시 직접 흡입.",
      topical: "손목·발바닥·척추 라인에 도포. 명상 시 가슴에 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "세레니티", "베르가못", "프랑킨센스"],
    precautions: "일반적으로 안전. 임산부 주의.",
    tags: ["감정균형", "스트레스", "그라운딩", "자신감", "수면"]
  },
  {
    id: 106, nameKr: "세레니티", nameEn: "Serenity", category: "mood", plantType: "mood", productImage: "images/oils/serenity.jpg", plantImageUrl: "images/plants/serenity.jpg",
    color: "#7B68EE", emoji: "🌙",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 달콤한, 우디",
    description: "수면 유도 블렌드입니다. 라벤더, 세다우드, 로만 카모마일 등이 긴장을 풀어주고 깊은 수면을 유도합니다. '잠의 블렌드'라 불립니다.",
    benefits: ["수면 유도·개선", "긴장·불안 완화", "스트레스 해소", "과민 반응 완화", "심신 이완"],
    ingredients: ["라벤더", "세다우드", "호오우드", "일랑일랑", "로만 카모마일", "베티버", "샌달우드"],
    usage: {
      aromatic: "취침 30분 전 디퓨저에 4방울. 베개에 1-2방울.",
      topical: "발바닥·손목·목 뒤에 도포. 가슴에 하트 모양으로 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "베티버", "시더우드", "베르가못"],
    precautions: "일반적으로 안전. 주간 과다 사용 시 졸음 유발.",
    tags: ["수면", "이완", "긴장완화", "불안", "스트레스"], featured: true
  },
  {
    id: 107, nameKr: "엘리베이트에센스", nameEn: "Elevation", category: "mood", plantType: "mood", productImage: "images/oils/elevation.jpg",
    color: "#FFD700", emoji: "☀️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 시트러스, 달콤한",
    description: "조이풀 블렌드라고도 불리며 기분을 즉각적으로 향상시킵니다. 라브라도라이트, 탄제린, 재스민 등이 어우러져 행복감과 긍정적 에너지를 채웁니다.",
    benefits: ["기분 향상·행복감", "우울감 완화", "자신감 충전", "에너지 증진", "동기 부여", "감정 균형"],
    ingredients: ["탄제린", "일랑일랑", "네롤리", "재스민", "인스파이어 블렌드", "로즈"],
    usage: {
      aromatic: "아침에 디퓨저로 하루 시작. 기분이 처질 때 직접 흡입.",
      topical: "손목·가슴에 도포. 향수로 활용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["와일드 오렌지", "베르가못", "치어"],
    precautions: "일반적으로 안전. 광독성 성분 포함 — 햇빛 노출 주의.",
    tags: ["기분향상", "행복감", "우울감", "에너지", "동기부여"]
  },
  {
    id: 108, nameKr: "아로마터치", nameEn: "AromaTouch", category: "blend", plantType: "blend", productImage: "images/oils/aromatouch.jpg", plantImageUrl: "images/plants/aromatouch.jpg",
    color: "#C0A882", emoji: "🤲",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "따뜻한, 허브, 스파향",
    description: "마사지 전용 블렌드로 도테라 아로마터치 테크닉에 사용됩니다. 사이프러스, 페퍼민트, 마조람 등이 근육을 이완시키고 긴장을 풀어주며 몸 전체를 편안하게 합니다.",
    benefits: ["근육 이완·긴장 완화", "스트레스 해소", "혈액순환 개선", "몸 전체 웰빙", "스파 효과"],
    ingredients: ["사이프러스", "페퍼민트", "마조람", "바질", "제라늄", "라벤더"],
    usage: {
      aromatic: "마사지 중 확산. 스파 분위기 연출.",
      topical: "등·척추 라인을 따라 마사지. 아로마터치 테크닉에 활용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["딥블루", "라벤더", "세레니티"],
    precautions: "민감한 피부 희석 사용.",
    tags: ["마사지", "근육이완", "스파", "혈액순환", "스트레스"]
  },
  {
    id: 109, nameKr: "퓨리파이", nameEn: "Purify", category: "blend", plantType: "blend", productImage: "images/oils/purify.jpg", plantImageUrl: "images/plants/purify.jpg",
    color: "#87CEEB", emoji: "🌬️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "신선한, 청량한, 허브",
    description: "공기와 표면 정화에 탁월한 클렌징 블렌드입니다. 레몬, 라임, 시베리안 퍼 등이 공기 중 냄새를 제거하고 환경을 정화합니다.",
    benefits: ["공기 정화", "냄새 제거", "표면 소독", "곰팡이 예방", "청량한 환경", "천연 방충제"],
    ingredients: ["레몬", "라임", "파인", "시트로넬라", "멜라루카", "시베리안 퍼"],
    usage: {
      aromatic: "냄새 나는 공간에 디퓨저 사용. 냉장고·신발장 등에 활용.",
      topical: "피부 정화에 희석 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["레몬", "온가드", "라임"],
    precautions: "일반적으로 안전.",
    tags: ["공기정화", "냄새제거", "소독", "청결", "방충제"]
  },
  {
    id: 110, nameKr: "젠도크린", nameEn: "Zendocrine", category: "blend", plantType: "blend", productImage: "images/oils/zendocrine.jpg",
    color: "#8FBC8F", emoji: "🌿",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "허브, 청량한, 신선한",
    description: "해독 지원 블렌드로 간, 신장, 피부의 자연 해독 과정을 돕습니다. 탠저린, 로즈마리, 클로브 등이 독소 제거와 전반적인 해독 기능을 지원합니다.",
    benefits: ["간 해독 지원", "신장 기능 지원", "피부 정화", "소화 해독", "호르몬 균형", "전신 정화"],
    ingredients: ["탠저린", "로즈마리", "진저", "클로브", "페퍼민트"],
    usage: {
      aromatic: "디퓨저에 3방울. 해독 루틴에 활용.",
      topical: "간·신장 부위에 희석 도포. 발바닥에 도포.",
      internal: "캡슐에 1-2방울. 물에 1방울."
    },
    blendsWith: ["레몬", "터메릭", "진저"],
    precautions: "임산부 주의. 처방약 복용자 상담.",
    tags: ["해독", "간건강", "신장", "정화", "호르몬균형"]
  },
  {
    id: 111, nameKr: "DDR 프라임", nameEn: "DDR Prime", category: "blend", plantType: "blend", productImage: "images/oils/ddr-prime.jpg",
    color: "#1A4A8A", emoji: "🔬",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "시트러스, 우디, 청량한",
    description: "세포 보호와 재생에 특화된 블렌드입니다. 클로브, 타임, 와일드 오렌지, 오레가노 등 강력한 항산화 오일들이 DNA 보호와 세포 건강을 지원합니다.",
    benefits: ["세포 보호·재생", "DNA 보호", "항산화", "면역 강화", "노화 방지", "전반적 건강"],
    ingredients: ["클로브", "타임", "와일드 오렌지", "프랑킨센스", "오레가노"],
    usage: {
      aromatic: "디퓨저에 3방울.",
      topical: "척추 라인·발바닥에 희석 도포.",
      internal: "캡슐에 1-2방울. 물에 1방울."
    },
    blendsWith: ["프랑킨센스", "코파이바", "레몬"],
    precautions: "임산부 주의.",
    tags: ["세포보호", "항산화", "노화방지", "DNA보호", "면역"]
  },
  {
    id: 112, nameKr: "시트러스 블리스", nameEn: "Citrus Bliss", category: "mood", plantType: "mood", productImage: "images/oils/citrus-bliss.jpg", plantImageUrl: "images/plants/citrus-bliss.jpg",
    color: "#FF8C00", emoji: "🌟",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "달콤한 시트러스, 발랄한",
    description: "다양한 시트러스 과일이 블렌딩된 기분 전환의 블렌드입니다. 와일드 오렌지, 레몬, 그레이프프루트, 만다린 등이 즉각적으로 기분을 밝게 만들어 줍니다.",
    benefits: ["기분 향상", "에너지 충전", "스트레스 완화", "피로 해소", "면역 지원", "집중력"],
    ingredients: ["와일드 오렌지", "레몬", "그레이프프루트", "만다린", "탄제린", "라임", "클레멘타인"],
    usage: {
      aromatic: "아침 기분 전환으로 디퓨저에 4방울. 직접 흡입.",
      topical: "캐리어 오일과 희석 후 전신 마사지. 손목·가슴에 도포.",
      internal: "물·스무디에 1-2방울."
    },
    blendsWith: ["베르가못", "라벤더", "엘리베이션"],
    precautions: "광독성 주의 — 도포 후 햇빛 노출 피하기.",
    tags: ["기분전환", "에너지", "시트러스", "스트레스", "활력"]
  },
  {
    id: 113, nameKr: "슬림 앤 새시", nameEn: "Slim & Sassy", category: "blend", plantType: "blend",
    color: "#98FB98", emoji: "💚",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "민트, 시트러스, 향신료",
    description: "체중 관리와 신진대사 지원에 특화된 블렌드입니다. 그레이프프루트, 레몬, 페퍼민트, 진저가 식욕을 조절하고 신진대사를 활성화합니다.",
    benefits: ["신진대사 지원", "식욕 조절", "에너지 증진", "소화 지원", "체중 관리", "기분 전환"],
    ingredients: ["그레이프프루트", "레몬", "페퍼민트", "진저", "시나몬"],
    usage: {
      aromatic: "식사 전 직접 흡입. 디퓨저에 3방울.",
      topical: "복부·허벅지에 희석 마사지.",
      internal: "물에 3-4방울. 식사 30분 전 섭취."
    },
    blendsWith: ["그레이프프루트", "레몬", "진저"],
    precautions: "임산부 주의. 광독성 성분 주의.",
    tags: ["체중관리", "신진대사", "식욕조절", "소화", "에너지"]
  },
  {
    id: 114, nameKr: "테라쉴드", nameEn: "TerraShield", category: "blend", plantType: "blend", productImage: "images/oils/terrashield.jpg",
    color: "#228B22", emoji: "🦟",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "레몬그라스, 허브, 신선한",
    description: "천연 방충 블렌드입니다. 레몬그라스, 유칼립투스, 시트로넬라가 화학 방충제 없이 벌레를 효과적으로 차단합니다.",
    benefits: ["방충 보호", "천연 벌레 퇴치", "야외 활동 지원", "피부 보호"],
    ingredients: ["레몬그라스", "시트로넬라 자바", "테아스피디아", "타모아누", "노니"],
    usage: {
      aromatic: "야외에서 디퓨저 사용. 텐트·공간에 분사.",
      topical: "피부에 희석 도포. 캐리어 오일과 스프레이 제작.",
      internal: "섭취 비권장."
    },
    blendsWith: ["레몬그라스", "시더우드", "레몬"],
    precautions: "어린이 희석 사용. 눈 주위 금지.",
    tags: ["방충제", "모기퇴치", "야외활동", "천연", "보호"]
  },
  {
    id: 115, nameKr: "HD 클리어", nameEn: "HD Clear", category: "blend", plantType: "blend", productImage: "images/oils/hd-clear.jpg",
    color: "#E0F0FF", emoji: "✨",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "청량한, 허브, 신선한",
    description: "여드름과 피부 트러블에 특화된 블렌드입니다. 멜라루카, 블랙쿠민, 호호바오일 등이 피부를 맑고 건강하게 유지시킵니다.",
    benefits: ["여드름 관리", "피부 정화", "모공 케어", "피지 조절", "피부 진정", "피부 밸런스"],
    ingredients: ["블랙쿠민씨드", "호호바씨드", "유칼립투스", "멜라루카", "카란자오일"],
    usage: {
      aromatic: "해당 없음.",
      topical: "트러블 부위에 직접 소량 도포. 얼굴 전체에 얇게 바름.",
      internal: "섭취 비권장."
    },
    blendsWith: ["멜라루카", "라벤더", "프랑킨센스"],
    precautions: "눈 주위 사용 금지.",
    tags: ["여드름", "피부정화", "모공", "피지조절", "트러블"]
  },
  {
    id: 116, nameKr: "이모탈", nameEn: "Immortelle", category: "blend", plantType: "blend", productImage: "images/oils/immortelle.jpg",
    color: "#FFD700", emoji: "👑",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 우디, 허브",
    description: "도테라의 프리미엄 안티에이징 블렌드입니다. 프랑킨센스, 로즈, 헬리크리섬 등이 피부 노화를 늦추고 탄력을 회복시킵니다.",
    benefits: ["강력한 노화 방지", "피부 탄력 회복", "주름 개선", "피부 재생", "세포 보호", "광채 피부"],
    ingredients: ["프랑킨센스", "헬리크리섬", "로즈", "샌달우드", "라벤더", "미르"],
    usage: {
      aromatic: "해당 없음 (국소 사용 전용).",
      topical: "아침·저녁 얼굴 세럼으로 사용. 목·데콜테에 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["프랑킨센스", "로즈", "라벤더"],
    precautions: "임산부 주의.",
    tags: ["노화방지", "주름개선", "피부탄력", "세포재생", "프리미엄"]
  },

  // ───────────────────────────────────────────────
  //  감정 관리 오일 (Emotional Aromatherapy)
  // ───────────────────────────────────────────────
  {
    id: 201, nameKr: "모티베이트", nameEn: "Motivate", category: "emotional", plantType: "emotional",
    color: "#FF8C42", emoji: "🔥",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "민트, 시트러스, 발랄한",
    description: "도전하는 블렌드입니다. 페퍼민트, 클레멘타인, 코리앤더가 용기와 자신감을 채우고 두려움을 극복하게 도와줍니다.",
    benefits: ["자신감·용기", "동기 부여", "두려움 극복", "긍정적 사고", "집중력", "에너지 충전"],
    ingredients: ["페퍼민트", "클레멘타인", "코리앤더", "바질", "유향"],
    usage: {
      aromatic: "아침 루틴에 직접 흡입. 도전 앞에 디퓨저 사용.",
      topical: "손목·가슴에 도포. 향수로 활용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["엘리베이션", "와일드 오렌지", "치어"],
    precautions: "일반적으로 안전.",
    tags: ["자신감", "동기부여", "두려움극복", "긍정", "용기"]
  },
  {
    id: 202, nameKr: "치어", nameEn: "Cheer", category: "emotional", plantType: "emotional",
    color: "#FFD700", emoji: "😊",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "달콤한, 시트러스, 밝은",
    description: "행복의 블렌드입니다. 와일드 오렌지, 클로브, 스타아니스 등이 슬픔과 우울감을 밀어내고 밝고 긍정적인 감정을 채웁니다.",
    benefits: ["행복감·기쁨", "우울감 완화", "슬픔 극복", "낙관적 태도", "감사함", "활력"],
    ingredients: ["와일드 오렌지", "클로브", "스타아니스", "베이", "탄제린", "그레이프프루트"],
    usage: {
      aromatic: "기분이 처질 때 직접 흡입. 디퓨저에 3방울.",
      topical: "손목·가슴에 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["엘리베이션", "모티베이트", "와일드 오렌지"],
    precautions: "광독성 주의.",
    tags: ["행복감", "우울감", "기쁨", "긍정", "활력"]
  },
  {
    id: 203, nameKr: "패션", nameEn: "Passion", category: "emotional", plantType: "emotional",
    color: "#DC143C", emoji: "❤️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "따뜻한, 향신료, 이국적인",
    description: "고취하는 블렌드입니다. 카다몬, 시나몬, 진저, 야세민, 바닐라가 창의성과 열정을 깨우고 삶의 의욕을 되살립니다.",
    benefits: ["열정·창의성", "삶의 의욕", "감각 깨우기", "로맨틱 분위기", "에너지 충전", "자기표현"],
    ingredients: ["카다몬", "시나몬", "진저", "재스민", "야로우", "바닐라"],
    usage: {
      aromatic: "창의적 작업 중 디퓨저. 로맨틱한 저녁에 활용.",
      topical: "손목·목에 향수로 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["일랑일랑", "로즈", "베르가못"],
    precautions: "핫 오일 성분 포함 — 희석 사용.",
    tags: ["열정", "창의성", "로맨틱", "의욕", "감각"]
  },
  {
    id: 204, nameKr: "포기브", nameEn: "Forgive", category: "emotional", plantType: "emotional",
    color: "#90EE90", emoji: "🕊️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "신선한, 우디, 허브",
    description: "새롭게 하는 블렌드입니다. 스프루스, 베르가못, 말레트 나무 등이 분노, 죄책감, 억울함을 내려놓고 마음의 자유를 찾도록 돕습니다.",
    benefits: ["용서·내려놓기", "분노 완화", "죄책감 해방", "마음의 평화", "감정 치유", "자기 수용"],
    ingredients: ["스프루스", "베르가못", "말레트 나무", "아르버바이트", "누트메그"],
    usage: {
      aromatic: "명상·반성 시 디퓨저. 직접 흡입.",
      topical: "가슴·손목에 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["밸런스", "프랑킨센스", "세레니티"],
    precautions: "일반적으로 안전.",
    tags: ["용서", "내려놓기", "분노완화", "마음의평화", "감정치유"]
  },
  {
    id: 205, nameKr: "콘솔", nameEn: "Console", category: "emotional", plantType: "emotional",
    color: "#9370DB", emoji: "💜",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 허브, 따뜻한",
    description: "위로하는 블렌드입니다. 프랑킨센스, 페퍼콘, 라브라도라이트 등이 슬픔, 상실, 비통함을 따뜻하게 감싸 안고 치유의 시간을 함께합니다.",
    benefits: ["슬픔·상실 치유", "비통함 완화", "감정적 위로", "내면의 평화", "애도 지원"],
    ingredients: ["프랑킨센스", "페퍼콘", "라브라도라이트", "일랑일랑", "빌베리"],
    usage: {
      aromatic: "슬픔의 시간에 디퓨저. 직접 흡입.",
      topical: "가슴·손목에 부드럽게 도포.",
      internal: "섭취 비권장."
    },
    blendsWith: ["세레니티", "프랑킨센스", "로즈"],
    precautions: "일반적으로 안전.",
    tags: ["슬픔", "상실", "위로", "애도", "치유"]
  },
  {
    id: 206, nameKr: "인튠", nameEn: "InTune", category: "blend", plantType: "blend", productImage: "images/oils/intune.jpg",
    color: "#4169E1", emoji: "🧠",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "허브, 우디, 신선한",
    description: "집중력 향상 블렌드입니다. 아마이리스, 파출리, 프랑킨센스, 라임 등이 주의력을 높이고 산만함을 줄여줍니다. ADHD 지원에도 활용됩니다.",
    benefits: ["집중력 향상", "주의력 지원", "ADHD 지원", "명료한 사고", "기억력", "업무 효율"],
    ingredients: ["아마이리스", "파출리", "프랑킨센스", "라임", "일랑일랑", "샌달우드", "로만 카모마일"],
    usage: {
      aromatic: "공부·업무 시 디퓨저. 직접 흡입.",
      topical: "관자놀이·뒷목에 도포. 손목에 롤온 사용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["로즈마리", "페퍼민트", "바질"],
    precautions: "일반적으로 안전.",
    tags: ["집중력", "주의력", "ADHD", "기억력", "업무효율"]
  },
  {
    id: 207, nameKr: "어댑티브", nameEn: "Adaptiv", category: "blend", plantType: "blend", productImage: "images/oils/adaptiv.jpg",
    color: "#6495ED", emoji: "🌊",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 우디, 청량한",
    description: "진정 블렌드입니다. 라벤더, 화이트 퍼, 세다우드, 코파이바 등이 새로운 환경과 스트레스에 적응하고 마음을 안정시킵니다.",
    benefits: ["스트레스 적응", "마음 안정", "불안 완화", "긴장 이완", "균형 유지", "회복력"],
    ingredients: ["라벤더", "화이트 퍼", "세다우드", "코파이바", "보웰리아", "멜리사"],
    usage: {
      aromatic: "스트레스 상황에 디퓨저. 직접 흡입.",
      topical: "손목·가슴·뒷목에 도포.",
      internal: "어댑티브 캡슐 활용."
    },
    blendsWith: ["라벤더", "밸런스", "세레니티"],
    precautions: "일반적으로 안전.",
    tags: ["스트레스", "불안완화", "마음안정", "적응력", "회복력"]
  },
  {
    id: 208, nameKr: "클라리칼름", nameEn: "ClaryCalm", category: "blend", plantType: "blend",
    color: "#DA70D6", emoji: "🌸",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "플로럴, 허브, 따뜻한",
    description: "여성 월경 주기 블렌드입니다. 클라리 세이지, 라벤더, 버치, 페퍼민트 등이 생리 불편함과 갱년기 증상을 완화하고 호르몬 균형을 지원합니다.",
    benefits: ["생리통 완화", "PMS 지원", "갱년기 증상 완화", "호르몬 균형", "감정 안정", "열감 완화"],
    ingredients: ["클라리 세이지", "라벤더", "버치", "페퍼민트", "야로우", "카렌듈라", "베티버", "제라늄", "로만 카모마일"],
    usage: {
      aromatic: "직접 흡입.",
      topical: "복부·허리에 희석 마사지. 발목·손목에 도포. 롤온 사용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["클라리 세이지", "라벤더", "제라늄"],
    precautions: "임신 중 사용 금지.",
    tags: ["생리통", "PMS", "갱년기", "호르몬균형", "여성건강"]
  },
  {
    id: 210, nameKr: "피스필", nameEn: "Peace", category: "emotional", plantType: "emotional", productImage: "images/oils/peace.jpg",
    color: "#7EC8C8", emoji: "🕊️",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "우디, 플로럴, 허브",
    description: "안심하게 하는 블렌드입니다. 베티버, 라벤더, 일랑일랑, 프랑킨센스 등이 불안과 걱정을 가라앉히고 깊은 내면의 평화와 안정감을 선사합니다. 과민하거나 불안한 마음을 진정시켜 주는 강력한 감정 지원 블렌드입니다.",
    benefits: ["불안·걱정 완화", "내면의 평화·안정감", "과민 반응 조절", "깊은 진정 효과", "스트레스 해소", "공황 완화"],
    ingredients: ["베티버", "라벤더", "일랑일랑", "프랑킨센스", "클라리 세이지", "마조람", "라브다눔", "스피어민트"],
    usage: {
      aromatic: "불안하거나 긴장될 때 직접 흡입. 디퓨저에 3-4방울.",
      topical: "손목·가슴·발바닥에 도포. 롤온 사용.",
      internal: "섭취 비권장."
    },
    blendsWith: ["라벤더", "세레니티", "밸런스", "프랑킨센스"],
    precautions: "일반적으로 안전. 임산부 주의.",
    tags: ["불안완화", "내면의평화", "과민반응", "안정감", "공황완화"]
  },
  {
    id: 209, nameKr: "위스퍼", nameEn: "Whisper", category: "blend", plantType: "blend",
    color: "#F5CBA7", emoji: "🌺",
    origin: "블렌드", extraction: "블렌드", plant: "복합",
    scent: "따뜻한, 달콤한, 이국적인",
    description: "여성을 위한 향수 블렌드입니다. 재스민, 일랑일랑, 파출리 등이 각자의 피부와 어우러져 독특하고 아름다운 향기를 만들어 냅니다. '피부의 향기'로 불립니다.",
    benefits: ["독특한 향기", "여성스러운 매력", "자신감", "감각 고취", "로맨틱"],
    ingredients: ["재스민", "일랑일랑", "동인도 샌달우드", "코코아", "복숭아", "로즈", "베티버", "파출리"],
    usage: {
      aromatic: "직접 흡입으로 향기 즐기기.",
      topical: "손목·목·가슴에 향수로 도포. 피부 온도로 발향.",
      internal: "섭취 비권장."
    },
    blendsWith: ["로즈", "재스민", "샌달우드"],
    precautions: "일반적으로 안전.",
    tags: ["향수", "여성매력", "자신감", "로맨틱", "감각"]
  }
];

const CATEGORIES = {
  single:    { label: "단일 오일",   color: "#6B8F71", emoji: "🌱" },
  blend:     { label: "블렌드",      color: "#C8956C", emoji: "✨" },
  mood:      { label: "기분조절오일", color: "#D4A853", emoji: "☀️" },
  emotional: { label: "감정조절오일", color: "#9B7EC8", emoji: "💜" }
};

const ALL_TAGS = [...new Set(OILS_DATA.flatMap(o => o.tags))].sort();
