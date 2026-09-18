export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  n: string;
  stat: string;
  title: string;
  problem: string;
  solution: string;
}

export interface Goal {
  hi: string;
  rest: string;
  icon: string;
}

export interface Strength {
  n: string;
  title: string;
  desc: string;
}

export interface Axis {
  label: string;
  bg: string;
  fg: string;
  border: string;
}

export interface Feature {
  n: string;
  eyebrow: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
  textOrder: number;
  imgOrder: number;
}

export interface Plan {
  label: string;
  name: string;
  price: string;
  unit: string;
  desc: string;
  items: string[];
  bg: string;
  border: string;
  fg: string;
  dot: string;
  hot?: boolean;
}

export interface Review {
  quote: string;
  name: string;
  meta: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export const marquee: string[] = [
  '위치 기반 음악 큐레이션',
  '반경 500m 음악 지도',
  '감정 태그 PIN',
  '친구 피드',
  '우연한 발견',
];

export const stats: Stat[] = [
  { value: '72.2%', label: '외부 활동 시 매일 음악을 들어요' },
  { value: '70.8%', label: '특정 장소에 어울리는 음악이 궁금했던 적이 있어요' },
  { value: '54.2%', label: '장소에 남긴 음악을 듣기 위해 방문할 의향이 있어요' },
];

export const problems: Problem[] = [
  {
    n: '①',
    title: '소비는 기록되지만, 취향의 서사는 기록되지 않는다',
    problem: '무엇을 들었는지는 쌓이지만, 왜·언제·어떤 맥락에서 좋아하게 됐는지는 어디에도 남지 않아요.',
    stat: 'Spotify Wrapped 이용자 3천만(2017) → 1.56억+(2022), 그마저 연 1회뿐',
    solution: '핀을 남길 때마다 그 순간의 감정과 이유를 함께 기록해요.',
  },
  {
    n: '②',
    title: "공유가 '리스트 전달'에 그치고, 맥락 공유가 안 된다",
    problem: '트랙 리스트나 링크를 보내는 것만으로는, 그 곡을 듣던 순간의 기억과 감정이 전달되지 않아요.',
    stat: '플레이리스트 제작 58% vs 실제 공유 32% — 26%p 격차',
    solution: '핀에는 누가·언제·어디서·왜 남겼는지 맥락이 함께 담겨요.',
  },
  {
    n: '③',
    title: '음악과 장소·순간이 연결되어 기억되지 않는다',
    problem: '특정 장소·시기에 좋아하게 된 음악이라도, 그 맥락은 스트리밍 서비스 어디에도 남지 않고 휘발돼요.',
    stat: '응답자 54%가 노래로 여행 기억을 연상, 99%가 좋은 기억이라 답함',
    solution: '음악을 장소와 시간에 그대로 남겨, 지도 위에서 다시 꺼내볼 수 있어요.',
  },
];

export const goals: Goal[] = [
  { hi: '직접 방문 인증', rest: '으로 음악 등록', icon: '/uploads/cropped/goal-visit.png' },
  { hi: '장소 기반', rest: ' 음악 큐레이션', icon: '/uploads/cropped/goal-place.png' },
  { hi: '사람과 사람을', rest: ' 연결하는 피드', icon: '/uploads/cropped/goal-feed.png' },
];

export const strengths: Strength[] = [
  { n: '1', title: '공간의 음악화', desc: '좌표를 ‘누군가의 감정이 담긴 음악적 흔적’으로 전환' },
  { n: '2', title: '발견형 UX', desc: '추천이 아닌 우연한 마주침 기반 경험 제공' },
  { n: '3', title: '오프라인 동기 부여', desc: '그 장소에 가야만 들을 수 있는 음악 (도달 시 콘텐츠 해금)' },
  { n: '4', title: '참여형 큐레이션', desc: '모든 사용자가 큐레이터가 되는 분산형 음악 지도' },
];

export const axes: Axis[] = [
  { label: '취향 기반', bg: 'transparent', fg: 'rgba(253,253,253,0.6)', border: 'rgba(200,249,64,0.14)' },
  { label: '휘발 · 피드', bg: 'transparent', fg: 'rgba(253,253,253,0.6)', border: 'rgba(200,249,64,0.14)' },
  { label: '장소 기반', bg: '#c8f940', fg: '#0c0d0f', border: '#c8f940' },
  { label: '누적 · 아카이브', bg: '#c8f940', fg: '#0c0d0f', border: '#c8f940' },
];

export const features: Feature[] = [
  {
    n: '01',
    eyebrow: 'Home',
    title: '오늘, 내 주변에서 어떤 음악이 흐르고 있을까',
    desc: '내 주변의 실시간 음악 지도를 가장 빠르게 탐색할 수 있는 공간이에요. 친구의 취향, 우리 동네 인기곡, 내가 저장한 장소까지 볼 수 있어요.',
    tags: ['팔로우 피드', '노래 탐색', 'HOT한 장소'],
    img: '/uploads/cropped/feature-home.png',
    textOrder: 1,
    imgOrder: 2,
  },
  {
    n: '02',
    eyebrow: 'Explore MAP',
    title: '지금 여기, 사람들은 어떤 노래를 듣고 있을지 궁금하다면?',
    desc: '장소를 검색하면 그곳에 등록된 핀과 곡을 바로 만날 수 있어요. 지도 위 핀에 보이는 앨범 커버는 이곳에서 가장 인기 있는 곡을 의미해요.',
    tags: ['핀 탐색', '인기순 · 최신순', '바텀시트'],
    img: '/uploads/cropped/feature-explore.png',
    textOrder: 2,
    imgOrder: 1,
  },
  {
    n: '03',
    eyebrow: 'Register PIN',
    title: '내 감정을 지도에 남겨볼까요?',
    desc: '장소를 검색하거나 지도에서 직접 위치를 선택하고, 원하는 노래와 하이라이트 구간을 골라 느끼는 감정을 태그로 함께 기록해 보세요.',
    tags: ['장소 선택', '하이라이트 구간', '감정 태그'],
    img: '/uploads/cropped/feature-register.png',
    textOrder: 1,
    imgOrder: 2,
  },
  {
    n: '04',
    eyebrow: 'Feed',
    title: '친구들과 음악 취향을 공유해보아요!',
    desc: '프로필에서 그동안 등록한 노래를 모아볼 수 있어요. 마음에 드는 노래엔 좋아요로 반응을 남겨보세요.',
    tags: ['팔로우', '좋아요', '프로필 공유'],
    img: '/uploads/cropped/feature-feed.png',
    textOrder: 2,
    imgOrder: 1,
  },
];

const darkPlan = { bg: 'rgba(200,249,64,0.03)', border: 'rgba(200,249,64,0.14)', fg: '#fdfdfd', dot: '#c8f940' };
const neonPlan = { bg: 'linear-gradient(180deg,#c8f940,#fcff98)', border: '#c8f940', fg: '#0c0d0f', dot: '#0c0d0f', hot: true };

export const plans: Plan[] = [
  {
    ...darkPlan,
    label: 'MODEL 01',
    name: '로컬 광고 핀',
    price: '지역 상권',
    unit: '',
    desc: '카페·공연장 등 장소가 직접 남기는 스폰서 핀 — 계절·시간대별 등록 데이터를 분석해 제공',
    items: ['장소 브랜딩 핀 노출', '계절·시간대별 인기곡 데이터 제공', '방문 유도 리워드'],
  },
  {
    ...darkPlan,
    label: 'MODEL 02',
    name: '신곡 홍보 핀',
    price: '협의',
    unit: '',
    desc: '신곡을 낸 아티스트의 곡을 홍보하고 관련 장소에 상위 노출',
    items: ['비슷한 곡을 듣는 인기 장소·시간대 추천', '공연 장소 추천 광고', '클러스터 무관 상시 열람 옵션'],
  },
  {
    ...neonPlan,
    label: 'MODEL 03',
    name: 'PLIMAP Plus',
    price: '₩0,000',
    unit: '/ 월',
    desc: '더 넓게, 더 깊게 탐색하는 구독 플랜',
    items: [
      '30초 미리듣기 → 풀 곡 재생',
      '주간 리포트로 내 플리·통계 제공',
      '핀 1일 1개 → 3개까지 등록',
      '광고 없는 피드',
      '내 핀에 전용 디자인 칩 추가',
      '캐릭터 인터랙션 커스텀',
    ],
  },
  {
    ...darkPlan,
    label: 'MODEL 04',
    name: '데이터 · 제휴',
    price: '협의',
    unit: '',
    desc: '장소별 음악 취향 데이터를 활용한 B2B 제휴',
    items: ['음악 플랫폼 제휴', '장소 기반 취향 리포트', '이벤트 · 페스티벌 협업'],
  },
];

export const reviews: Review[] = [
  {
    quote: '뚝섬 한강공원에 남긴 노래에 누가 좋아요를 눌러줬어요. 낯선 사람과 취향이 통한 기분.',
    name: '사용자 이름',
    meta: '20대 · 서울',
  },
  {
    quote: '여행 가서 그 장소에 어떤 노래가 남아 있는지 보는 게 재밌어요. 새로운 곡을 계속 알게 돼요.',
    name: '사용자 이름',
    meta: '20대 · 부산',
  },
  {
    quote: '인스타 스토리는 하루면 사라지는데, 여기 남긴 핀은 계속 남아 있어서 좋아요.',
    name: '사용자 이름',
    meta: '20대 · 서울',
  },
];

export const faqData: FaqEntry[] = [
  {
    q: '핀은 어디서든 등록할 수 있나요?',
    a: '반경 500m 이내에서만 등록할 수 있어요. 직접 방문한 장소에만 음악을 남기는 것이 PLIMAP의 원칙이에요.',
  },
  {
    q: '음악은 어떻게 재생되나요?',
    a: '등록 시 선택한 하이라이트 구간이 미리듣기로 재생돼요. 전체 곡은 연결된 스트리밍 서비스로 이동해 들을 수 있어요.',
  },
  {
    q: '내가 남긴 핀은 사라지나요?',
    a: '아니요. 핀은 지도 위에 계속 남아요. 원하면 MY 화면에서 직접 수정하거나 삭제할 수 있어요.',
  },
  {
    q: '어떤 기기에서 사용할 수 있나요?',
    a: 'iOS와 Android 앱으로 제공될 예정이에요.',
  },
];

export const bars = 9;
