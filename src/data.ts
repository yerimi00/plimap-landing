export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  n: string;
  ref: string;
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
    n: '01',
    ref: 'youtube music',
    title: '취향의 고착화',
    problem: '개인 청취 기록 중심의 추천은 비슷한 음악의 반복 안에 머물게 해요.',
    solution: '추천이 아닌 우연한 마주침으로 새로운 음악을 발견해요.',
  },
  {
    n: '02',
    ref: 'instagram',
    title: '기록의 휘발성',
    problem: 'SNS에 음악 취향을 공유할 수는 있지만, 시간이 지나면 사라져요.',
    solution: '핀은 지도 위에 계속 남아 누적되는 아카이브가 돼요.',
  },
  {
    n: '03',
    ref: 'naver maps',
    title: '감성의 부재',
    problem: '장소의 위치 정보는 제공하지만, 그 공간의 분위기를 담지는 못해요.',
    solution: '좌표를 누군가의 감정이 담긴 음악적 흔적으로 바꿔요.',
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
    desc: '카페·공연장 등 장소가 직접 남기는 스폰서 핀',
    items: ['장소 브랜딩 핀 노출', 'HOT한 장소 상단 배치', '방문 유도 리워드'],
  },
  {
    ...neonPlan,
    label: 'MODEL 02',
    name: 'PLIMAP Plus',
    price: '₩0,000',
    unit: '/ 월',
    desc: '더 넓게, 더 깊게 탐색하는 구독 플랜',
    items: ['500m 밖 지도 열람', '핀 무제한 등록', '광고 없는 피드'],
  },
  {
    ...darkPlan,
    label: 'MODEL 03',
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
