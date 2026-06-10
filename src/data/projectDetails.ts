// 프로젝트 세부 페이지 데이터
export const PROJECT_DETAILS: Record<string, any> = {
  'daypoo': {
    tagline: '전국 5만 건 공공 화장실 데이터 시각화 + AI 건강 인사이트',
    overview: {
      problem: '공공 화장실 위치 정보가 분산되어 있고, 개인 건강 데이터를 체계적으로 관리할 도구가 부족',
      whyBuilt: '팀원 3명이 실생활 불편함에서 출발 — 위치 기반 서비스 + AI 분석이라는 복합 기술 통합 경험을 목표로 했습니다.',
      features: ['Java 21 Virtual Threads 기반 5만 건 병렬 동기화', 'PostGIS Geography 기반 구면 거리 위치 인증', 'JWT + OAuth2 카카오 인증', '토스페이먼츠 결제 + 멱등성 보장', 'Redis 다목적 활용 (GeoIndex, ZSET 랭킹, Rate Limit)', 'Docker + 3-Job CI/CD 파이프라인']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Java 21', r: '가상 스레드(Virtual Threads) 활용' }, { n: 'Spring Boot 3.4', r: '최신 LTS 프레임워크' }, { n: 'Spring Security', r: '인증/인가 필터 체인' }, { n: 'JWT + OAuth2', r: '토큰 기반 + 카카오 소셜 인증' }, { n: 'QueryDSL 5.0', r: '타입 안전 동적 쿼리' }, { n: 'MapStruct', r: '엔티티 ↔ DTO 매핑' }] },
      { name: 'Database', items: [{ n: 'PostgreSQL 16 + PostGIS', r: 'Geography 타입 공간 검색' }, { n: 'Redis 7', r: 'GeoIndex, ZSET 랭킹, Rate Limit, JWT 블랙리스트' }, { n: 'Flyway', r: 'DB 스키마 버전 관리' }] },
      { name: 'AI Service', items: [{ n: 'FastAPI (Python 3.12)', r: 'AI 특화 마이크로서비스' }, { n: 'OpenAI GPT-4o Vision', r: '배변 이미지 브리스톨 척도 분석' }] },
      { name: 'Infra', items: [{ n: 'Docker', r: '환경 표준화 + 멀티스테이지 빌드' }, { n: 'GitHub Actions', r: '3-Job 병렬 CI/CD' }, { n: 'AWS EC2 + S3 + CloudFront', r: '백엔드/프론트 분리 배포' }, { n: 'Nginx', r: 'SSL 터미네이션 + 리버스 프록시' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->Nginx\n  Nginx-->SpringBoot[Spring Boot 3.4 / Java 21]\n  SpringBoot-->PostgreSQL[(PostgreSQL+PostGIS)]\n  SpringBoot-->Redis[(Redis 7)]\n  SpringBoot-->FastAPI[FastAPI AI Service]\n  FastAPI-->GPT[GPT-4o Vision]\n  SpringBoot-->PublicAPI[공공데이터 API]',
    erdMermaid: 'erDiagram\n  USERS ||--o{ POO_RECORDS : creates\n  USERS ||--o{ PAYMENTS : makes\n  USERS ||--o{ SUBSCRIPTIONS : subscribes\n  USERS ||--o{ USER_TITLES : achieves\n  TOILETS ||--o{ TOILET_REVIEWS : has\n  TOILETS ||--o{ FAVORITES : bookmarked\n  POO_RECORDS ||--o{ HEALTH_REPORTS : generates\n  USERS { bigint id PK\n    string email\n    string provider\n    int points }\n  POO_RECORDS { bigint id PK\n    timestamp recorded_at\n    int bristol_scale\n    text ai_analysis }\n  TOILETS { bigint id PK\n    point location\n    string name }\n  PAYMENTS { bigint id PK\n    string idempotency_key\n    int amount }',
    useCases: [
      { title: 'AI 배변 분석 파이프라인 (Privacy-First)', mermaid: 'sequenceDiagram\n  participant U as 사용자\n  participant S as Spring Boot\n  participant AI as FastAPI\n  participant GPT as GPT-4o Vision\n  U->>S: 카메라 촬영(WebRTC 무음)\n  S->>AI: Multipart 이미지 바이트 스트리밍\n  AI->>GPT: Vision API 호출\n  GPT-->>AI: 브리스톨 척도 분류 + 건강 코멘트\n  AI-->>S: 분석 결과 (이미지 메모리 폐기)\n  S->>S: PooRecord 저장 (이미지 원본 미저장)\n  S-->>U: 건강 인사이트 응답' },
      { title: 'PostGIS 위치 인증 + Redis Rate Limit', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant S as Server\n  participant R as Redis\n  participant DB as PostgreSQL+PostGIS\n  C->>S: 배변 기록 요청 (좌표)\n  S->>R: Rate Limit 검증 (INCR + TTL)\n  R-->>S: 허용/차단\n  S->>DB: ST_DWithin 반경 50m 검증\n  DB-->>S: 화장실 존재 여부\n  S->>S: AI 분석 → 기록 저장 → 포인트 부여\n  S-->>C: 완료 응답' },
      { title: '토스페이먼츠 결제 플로우', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant T as 토스페이먼츠\n  participant S as Server\n  participant DB as Database\n  C->>T: 결제 요청\n  T-->>C: paymentKey\n  C->>S: 결제 승인 요청\n  S->>S: 멱등성 키 검증\n  S->>T: 승인 API 호출\n  T-->>S: 승인 결과\n  S->>DB: 결제 내역 저장\n  S-->>C: 완료 응답' }
    ],
    timeline: [
      { week: 'Week 1-2', milestone: '설계 및 인증', desc: 'ERD 설계, JWT/OAuth2 인증 시스템, Spring Security 필터 체인 구축' },
      { week: 'Week 3', milestone: '핵심 기능', desc: 'PostGIS 공간 검색, Redis 다목적 활용, 결제 API 구현' },
      { week: 'Week 4', milestone: 'AI + 인프라', desc: 'FastAPI AI 마이크로서비스 연동, Docker + 3-Job CI/CD 파이프라인 구축' },
      { week: 'Week 5', milestone: '배포 및 최적화', desc: 'Nginx SSL 설정, BCrypt 워밍업, 프로덕션 배포' }
    ],
    keyImpls: [
      { title: 'Java 21 Virtual Threads 동기화 엔진', summary: '공공데이터 포털 API 5만 건을 가상 스레드로 병렬 처리. I/O 대기 시 OS 스레드 즉시 반납으로 처리량 극대화', code: { lang: 'java', snippet: '@EnableAsync\n@Configuration\npublic class AsyncConfig {\n    @Bean\n    public Executor taskExecutor() {\n        return Executors.newVirtualThreadPerTaskExecutor();\n    }\n}\n\n// PublicDataSyncService — 5만 건 병렬 동기화\n@Async\npublic CompletableFuture<Void> syncPage(int page) {\n    List<ToiletDto> toilets = publicApi.fetch(page);\n    toiletRepo.saveAll(toilets.stream()\n        .map(ToiletMapper::toEntity).toList());\n    return CompletableFuture.completedFuture(null);\n}' } },
      { title: 'PostGIS Geography 위치 인증', summary: '구면 거리 계산(ST_DWithin)으로 화장실 반경 50m 검증. 평면 거리(Geometry) 대비 고위도 지역 오차 해결', code: { lang: 'java', snippet: '@Query(value = """\n    SELECT CASE WHEN COUNT(t) > 0 THEN true ELSE false END\n    FROM Toilet t\n    WHERE ST_DWithin(\n        CAST(t.location AS geography),\n        CAST(ST_SetSRID(ST_Point(:lon, :lat), 4326) AS geography),\n        :radiusMeters\n    )\n    """, nativeQuery = true)\nboolean existsWithinRadius(\n    @Param("lon") double lon,\n    @Param("lat") double lat,\n    @Param("radiusMeters") double radius);' } },
      { title: 'Redis Rate Limiting (AOP)', summary: '@RateLimit 커스텀 애노테이션 + AOP로 메서드 단위 Redis 기반 호출 횟수 제한. API 남용 방지', code: { lang: 'java', snippet: '@RateLimit(key = "poo-record", limit = 5, windowSeconds = 3600)\n@PostMapping("/records")\npublic ResponseEntity<?> createRecord(...) { ... }\n\n// RateLimitAspect\n@Around("@annotation(rateLimit)")\npublic Object enforce(ProceedingJoinPoint pjp, RateLimit rateLimit) {\n    String key = "rate:" + rateLimit.key() + ":" + getUserId();\n    Long count = redis.opsForValue().increment(key);\n    if (count == 1) redis.expire(key, rateLimit.windowSeconds(), SECONDS);\n    if (count > rateLimit.limit()) throw new RateLimitException();\n    return pjp.proceed();\n}' } },
      { title: 'BCrypt JVM 워밍업', summary: 't2.micro(1 vCPU, 1GB) 환경 첫 요청 수 초 지연 방지 — 서버 기동 직후 JIT 컴파일 유도', code: { lang: 'java', snippet: '@EventListener(ApplicationReadyEvent.class)\npublic void warmUpBCrypt() {\n    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();\n    encoder.matches("warmup", encoder.encode("warmup"));\n    log.info("BCrypt JVM warmup completed");\n}' } }
    ],
    troubleshooting: [
      { problem: 'PostGIS Geometry vs Geography 타입 혼동으로 위치 인증 부정확', cause: 'Geometry 타입은 좌표를 2D 평면으로 계산 — 고위도 지역에서 오차 증가', solution: 'Geography 타입 캐스팅으로 지구 타원체 위 구면 거리(ST_DWithin) 정밀 계산 적용', learned: '위치 기반 서비스에서 좌표 시스템(SRID)과 거리 계산 방식의 정확도가 핵심' },
      { problem: 'Redis Rate Limiting 키가 분산 환경에서 충돌', cause: '서버 인스턴스별 키 네이밍 규칙 불일치', solution: '키 prefix를 "rate:{endpoint}:{userId}" 형식으로 통일, TTL을 원자적 연산(INCR + EXPIRE)으로 설정', learned: '분산 시스템에서 네이밍 컨벤션과 원자적 연산의 중요성' },
      { problem: '토스페이먼츠 멱등성 키 설계 시 UUID 충돌 가능성', cause: '클라이언트에서 생성한 UUID의 유일성을 서버에서 보장해야 하는 문제', solution: 'DB unique constraint + try-catch로 중복 시 기존 결제 결과 반환', learned: '멱등성 설계는 "같은 요청은 같은 결과"라는 원칙에 충실해야 함' }
    ],
    retro: {
      good: ['Java 21 Virtual Threads + PostGIS + Redis + AI + 결제 복합 기술 스택 통합 경험', 'SOA 아키텍처(Spring Boot + FastAPI) 서비스 분리 설계', 'Privacy-First AI 파이프라인 — 이미지 무저장 원칙 아키텍처화', '3-Job 병렬 CI/CD 파이프라인으로 배포 시간 단축'],
      bad: ['테스트 커버리지 부족 — 통합 테스트 미작성', 'AI 서비스 장애 시 Fallback 전략 미흡 (Circuit Breaker 미적용)', 'EC2 단일 인스턴스 — 무중단 배포 미적용'],
      next: ['Testcontainers로 PostgreSQL/Redis 통합 테스트 구축', 'spring-retry + Circuit Breaker 패턴 AI 호출에 도입', '공공데이터 동기화 @Scheduled 자동화']
    }
  },
  'syncbridge': {
    tagline: 'IT 부서와 비IT 부서 간 언어 장벽을 줄이는 Spring AI 기반 협업 플랫폼',
    overview: {
      problem: 'IT 전문 용어에 대한 인지 격차로 소통 오류, 재작업(Rework), 일정 지연이 발생. 요청자는 기술 용어를 이해하기 어렵고, 실무자는 추상적 요청으로 의도 파악이 어려운 상황',
      whyBuilt: '단순 CRUD가 아닌, 실제 조직 내 문제를 도메인으로 정의하고 AI·캐시·실시간 알림으로 구체화하는 설계 경험을 목표로 했습니다.',
      features: ['Spring AI + GPT 기반 직무별 용어 자동 번역·캐싱', 'DDD 방식 도메인 분리 설계', 'WebSocket(STOMP) 실시간 알림', 'CommonResponse<T> 제네릭 응답 표준화', 'Docker Compose 원커맨드 환경 구축']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Spring Boot 3.4', r: '메인 프레임워크 (Java 17)' }, { n: 'Spring AI', r: 'GPT 기반 용어 번역 에이전트' }, { n: 'Spring Security 6', r: 'JWT 기반 인가' }, { n: 'Spring Data JPA', r: 'ORM + 도메인 모델링' }, { n: 'WebSocket(STOMP)', r: '실시간 알림 메시징' }] },
      { name: 'Database', items: [{ n: 'MySQL 8.0', r: '운영 DB' }, { n: 'H2', r: '로컬/테스트 프로파일' }] },
      { name: 'Frontend', items: [{ n: 'React 19 + TypeScript', r: '타입 안전 UI' }, { n: 'Zustand', r: '전역 상태 관리' }, { n: 'TanStack Query', r: '서버 상태 캐싱' }, { n: 'Framer Motion', r: '인터랙션 애니메이션' }] },
      { name: 'Infra', items: [{ n: 'Docker Compose', r: '멀티 서비스 통합 실행' }, { n: '.env.template', r: '환경 변수 표준화' }] }
    ],
    archMermaid: 'flowchart LR\n  Client[React 19 SPA]-->|REST/WebSocket|SpringBoot[Spring Boot 3.4]\n  SpringBoot-->MySQL[(MySQL 8.0)]\n  SpringBoot-->|Spring AI|GPT[OpenAI GPT]\n  SpringBoot-->|STOMP|WS[WebSocket 알림]\n  subgraph Docker Compose\n    SpringBoot\n    MySQL\n  end',
    erdMermaid: 'erDiagram\n  USERS ||--o{ PROJECTS : manages\n  PROJECTS ||--o{ TASKS : contains\n  USERS ||--o{ TASKS : assigned\n  JARGONS ||--o{ JARGON_EXPLANATIONS : has\n  USERS ||--o{ NOTIFICATIONS : receives\n  USERS { bigint id PK\n    string email\n    enum role }\n  PROJECTS { bigint id PK\n    string name\n    string description }\n  TASKS { bigint id PK\n    string title\n    enum status\n    date deadline }\n  JARGONS { bigint id PK\n    string term\n    string category }\n  JARGON_EXPLANATIONS { bigint id PK\n    enum target_role\n    text explanation }',
    useCases: [
      { title: '직무 맞춤형 용어 자동 번역 흐름', mermaid: 'sequenceDiagram\n  participant U as 사용자\n  participant F as Frontend\n  participant S as Spring Boot\n  participant DB as MySQL\n  participant AI as Spring AI (GPT)\n  U->>F: 업무 티켓 본문 열람\n  F->>S: 용어 번역 요청 (JWT Role 포함)\n  S->>DB: 용어 조회\n  alt DB에 존재\n    DB-->>S: 해당 Role 설명 반환\n  else 미등록 용어\n    S->>AI: GPT 호출 (직무별 설명 생성)\n    AI-->>S: 번역 결과\n    S->>DB: 용어+설명 저장 (캐싱)\n  end\n  S-->>F: 직무 맞춤 설명 응답\n  F-->>U: 하이라이트 + 툴팁 표시' },
      { title: 'WebSocket 실시간 알림', mermaid: 'sequenceDiagram\n  participant A as 요청자\n  participant S as Server\n  participant WS as WebSocket\n  participant D as 실무자(개발자)\n  A->>S: Task 생성 요청\n  S->>S: Task 저장 + 상태 TODO\n  S->>WS: 알림 메시지 발행\n  WS-->>D: 실시간 새 Task 알림\n  D->>S: Task 상태 변경 (IN_PROGRESS)\n  S->>WS: 상태 변경 알림 발행\n  WS-->>A: 실시간 상태 업데이트' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '도메인 설계', desc: 'DDD 기반 도메인 경계 정의, ERD 설계, API 명세 수립' },
      { week: 'Week 2', milestone: '인증·핵심 API', desc: 'Spring Security + JWT 인증, Task/Project CRUD, 칸반보드 API' },
      { week: 'Week 3', milestone: 'AI + 알림', desc: 'Spring AI Jargon 번역 파이프라인, WebSocket 실시간 알림 구축' },
      { week: 'Week 4', milestone: 'Frontend + 배포', desc: 'React 19 + Zustand UI, Docker Compose 통합 실행 환경 구성' }
    ],
    keyImpls: [
      { title: 'Spring AI Jargon 번역 파이프라인', summary: '미등록 IT 용어 발견 시 GPT로 직무별 설명 자동 생성 → DB 캐싱. 시간이 지날수록 성장하는 용어 사전', code: { lang: 'java', snippet: '@Service\n@RequiredArgsConstructor\npublic class JargonService {\n    private final JargonRepository jargonRepo;\n    private final AiTranslationClient aiClient;\n\n    @Transactional\n    public JargonExplanation getExplanation(String term, Role userRole) {\n        return jargonRepo.findByTermAndRole(term, userRole)\n            .orElseGet(() -> {\n                // AI 호출 → 직무별 설명 생성\n                String explanation = aiClient.translate(term, userRole);\n                Jargon jargon = jargonRepo.findByTerm(term)\n                    .orElseGet(() -> jargonRepo.save(new Jargon(term)));\n                return jargonRepo.saveExplanation(\n                    new JargonExplanation(jargon, userRole, explanation));\n            });\n    }\n}' } },
      { title: 'CommonResponse<T> 제네릭 응답 표준화', summary: '모든 REST API 응답을 success/data/error 구조로 통일. 프론트엔드 공통 에러 핸들링 용이', code: { lang: 'java', snippet: 'public record CommonResponse<T>(\n    boolean success,\n    T data,\n    ErrorInfo error\n) {\n    public static <T> CommonResponse<T> ok(T data) {\n        return new CommonResponse<>(true, data, null);\n    }\n    public static CommonResponse<?> fail(ErrorCode code) {\n        return new CommonResponse<>(false, null,\n            new ErrorInfo(code.name(), code.getMessage()));\n    }\n}' } }
    ],
    troubleshooting: [
      { problem: 'Spring AI GPT 호출 시 응답 지연으로 사용자 체감 속도 저하', cause: '외부 API 호출(GPT)은 네트워크 지연이 불가피하며, 매 요청마다 호출 시 UX 악화', solution: 'DB 캐싱 전략 도입 — 최초 1회만 GPT 호출 후 결과를 DB에 저장, 이후 요청은 캐시 응답', learned: '외부 AI API 연동 시 캐싱 전략이 비용과 응답 속도 모두에 핵심' },
      { problem: 'WebSocket 연결 시 JWT 인증 처리 방법 고민', cause: 'HTTP 헤더 기반 JWT 인증이 WebSocket 핸드셰이크에서는 직접 적용 불가', solution: 'STOMP CONNECT 프레임의 헤더에 JWT를 포함시키고, ChannelInterceptor에서 토큰 검증 후 SecurityContext 설정', learned: 'WebSocket + JWT 연동 시 HTTP와 다른 인증 흐름에 대한 이해 필요' }
    ],
    retro: {
      good: ['실제 조직 문제를 도메인으로 정의하고 DDD 방식으로 경계를 분리한 설계 경험', 'AI 캐싱 전략 — 시간이 지날수록 성장하는 시스템 설계', 'Docker Compose로 원커맨드 개발 환경 구축 — DX(Developer Experience) 고려'],
      bad: ['테스트 코드 부족 — 핵심 서비스 단위 테스트 필요', 'AI 응답 포맷 검증 로직 미흡', '모바일 반응형 UI 완성도 부족'],
      next: ['용어 추천 기능 — 텍스트 분석 기반 자동 하이라이트', '팀별 맞춤 용어 사전 관리 기능', '관리자 통계 대시보드 (Analytics 도메인 활용)']
    }
  },
  'knotnote': {
    tagline: '노트 간 연결과 지식 그래프 중심 개인 메모 서비스',
    overview: {
      problem: '기존 메모 앱은 단순 저장에 그치며, 노트 간 관계를 구조화하고 지식이 서로 엮이는 경험을 제공하지 못함',
      whyBuilt: '단순 CRUD를 넘어 "연결"을 1급 개념으로 설계하고, NoteLink + NoteEmbedding으로 지식 그래프와 AI 시맨틱 검색까지 확장 가능한 아키텍처를 구축하고자 했습니다.',
      features: ['NoteLink 양방향 연결 + 백링크 조회', 'JWT Access/Refresh Token + Axios 자동 재발급', 'SimpleEditor + MarkdownEditor 2종 에디터', '카드/리스트/피드 보기 전환 + 태그 필터 + 디바운스 검색', 'Springdoc OpenAPI Swagger 문서화']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Java 21', r: '메인 언어' }, { n: 'Spring Boot 3.2.5', r: '애플리케이션 프레임워크' }, { n: 'Spring Data JPA', r: 'ORM + 엔티티 관계 설계' }, { n: 'Spring Security + JWT', r: '인증·인가 (jjwt 0.12.3)' }, { n: 'Springdoc OpenAPI 2.3', r: 'Swagger UI API 문서화' }, { n: 'Bean Validation', r: '입력 검증' }] },
      { name: 'Database', items: [{ n: 'MySQL', r: '운영 DB' }, { n: 'H2', r: '로컬/테스트' }] },
      { name: 'Frontend', items: [{ n: 'React 18.3', r: 'UI 프레임워크' }, { n: 'Vite 5.2', r: '빌드 도구' }, { n: 'React Router v6', r: 'SPA 라우팅' }, { n: 'Axios 1.7', r: 'HTTP + 인터셉터 자동 토큰 재발급' }] }
    ],
    archMermaid: 'flowchart LR\n  Client[React 18 SPA :5173]-->|REST API|SpringBoot[Spring Boot :8080]\n  SpringBoot-->MySQL[(MySQL/H2)]\n  SpringBoot-->Swagger[Swagger UI /api-docs]',
    erdMermaid: 'erDiagram\n  USERS ||--o{ NOTES : creates\n  USERS ||--o{ TAGS : owns\n  NOTES }o--o{ TAGS : "tagged via NoteTag"\n  NOTES }o--o{ NOTES : "linked via NoteLink"\n  NOTES ||--o| NOTE_EMBEDDINGS : has\n  USERS ||--o| REFRESH_TOKENS : stores\n  USERS { bigint id PK\n    string email\n    string nickname\n    enum role }\n  NOTES { bigint id PK\n    string title\n    text content\n    boolean deleted }\n  TAGS { bigint id PK\n    string name }\n  NOTE_LINKS { bigint from_note FK\n    bigint to_note FK }\n  NOTE_EMBEDDINGS { bigint note_id PK\n    text embedding }',
    useCases: [
      { title: 'NoteLink 양방향 연결 플로우', mermaid: 'sequenceDiagram\n  participant U as 사용자\n  participant F as Frontend (Editor)\n  participant S as Server\n  participant DB as Database\n  U->>F: 노트 편집 중 연결 대상 선택\n  F->>S: POST /api/notes/{id}/links\n  S->>DB: NoteLink 생성 (UNIQUE 검증)\n  S-->>F: 연결 성공\n  F->>S: GET /api/notes/{id}/links\n  S->>DB: from_note = :id OR to_note = :id\n  DB-->>S: 양방향 연결된 노트 목록\n  S-->>F: 연결 메모 리스트\n  F-->>U: 우측 사이드바에 표시' },
      { title: 'JWT 자동 재발급 (Axios 인터셉터)', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant A as Axios\n  participant S as Server\n  C->>A: API 요청\n  A->>S: Access Token 포함\n  S-->>A: 401 Unauthorized (만료)\n  A->>S: POST /api/auth/refresh (Refresh Token)\n  S-->>A: 새 Access Token 발급\n  A->>S: 원래 요청 재시도 (새 토큰)\n  S-->>A: 정상 응답\n  A-->>C: 결과 전달 (사용자 미인지)' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '도메인 설계', desc: 'User, Note, Tag, NoteLink, NoteEmbedding 엔티티 관계 설계' },
      { week: 'Week 2', milestone: '백엔드 API', desc: 'JWT 인증, Note CRUD, Tag 시스템, NoteLink 양방향 연결 API' },
      { week: 'Week 3', milestone: '프론트엔드 UI', desc: 'Dashboard(검색/필터/정렬/보기 전환), SimpleEditor + MarkdownEditor' },
      { week: 'Week 4', milestone: 'API 문서화 + 마무리', desc: 'Springdoc OpenAPI 문서화, 공통 응답·예외 처리, Docker 구성' }
    ],
    keyImpls: [
      { title: 'NoteLink 양방향 연결 모델', summary: 'from_note ↔ to_note로 N:N 연결. UNIQUE 제약조건으로 중복 방지. 조회 시 from=:id OR to=:id로 양방향 백링크 구현', code: { lang: 'java', snippet: '@Entity\n@Table(uniqueConstraints = @UniqueConstraint(\n    columnNames = {"from_note_id", "to_note_id"}))\npublic class NoteLink {\n    @Id @GeneratedValue\n    private Long id;\n\n    @ManyToOne(fetch = LAZY)\n    @JoinColumn(name = "from_note_id")\n    private Note fromNote;\n\n    @ManyToOne(fetch = LAZY)\n    @JoinColumn(name = "to_note_id")\n    private Note toNote;\n}\n\n// Repository — 양방향 조회\n@Query("SELECT nl FROM NoteLink nl WHERE nl.fromNote.id = :id OR nl.toNote.id = :id")\nList<NoteLink> findAllByNoteId(@Param("id") Long noteId);' } },
      { title: 'SimpleEditor — 블록 에디터', summary: '아이폰 메모 스타일 블록 에디터. h1/h2/h3/p 블록 타입 지원. Enter/Backspace 커스터마이징으로 블록 생성·병합. 저장 시 마크다운 변환', code: { lang: 'javascript', snippet: 'function handleKeyDown(e, blockIndex) {\n  if (e.key === "Enter") {\n    e.preventDefault();\n    // 현재 블록 뒤에 새 본문(p) 블록 삽입\n    const newBlocks = [...blocks];\n    newBlocks.splice(blockIndex + 1, 0, { type: "p", content: "" });\n    setBlocks(newBlocks);\n    // 다음 블록에 포커스\n    setTimeout(() => focusBlock(blockIndex + 1), 0);\n  }\n  if (e.key === "Backspace" && blocks[blockIndex].content === "") {\n    e.preventDefault();\n    // 빈 블록 삭제 후 이전 블록으로 포커스\n    const newBlocks = blocks.filter((_, i) => i !== blockIndex);\n    setBlocks(newBlocks);\n    focusBlock(Math.max(0, blockIndex - 1));\n  }\n}' } },
      { title: '공통 ApiResponse + GlobalExceptionHandler', summary: '모든 API 응답을 status/data/message 구조로 통일. ErrorCode enum 기반 예외를 @RestControllerAdvice에서 일괄 처리', code: { lang: 'java', snippet: 'public record ApiResponse<T>(String status, T data, String message) {\n    public static <T> ApiResponse<T> success(T data) {\n        return new ApiResponse<>("success", data, null);\n    }\n    public static ApiResponse<?> error(String message) {\n        return new ApiResponse<>("error", null, message);\n    }\n}\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(CustomException.class)\n    public ResponseEntity<?> handle(CustomException e) {\n        return ResponseEntity.status(e.getErrorCode().getStatus())\n            .body(ApiResponse.error(e.getMessage()));\n    }\n}' } }
    ],
    troubleshooting: [
      { problem: 'NoteLink 양방향 조회 시 순환 참조 문제로 JSON 직렬화 무한 루프', cause: 'Note ↔ NoteLink 간 양방향 @ManyToOne 관계에서 Jackson이 순환 참조 발생', solution: 'Response DTO를 별도로 정의하여 필요한 필드만 포함. @JsonIgnore 대신 DTO 변환으로 깨끗한 분리', learned: 'JPA 엔티티를 직접 API 응답에 사용하면 안 되는 이유 — DTO 분리의 중요성' },
      { problem: 'Note 목록 변환 시 태그 조회 N+1 쿼리 성능 문제', cause: 'useSelector로 Note 목록 렌더링 시 각 Note마다 태그를 개별 조회', solution: '향후 EntityGraph 또는 fetch join 도입으로 한 번에 조회 최적화 가능. 현재는 데이터 규모가 작아 허용 범위', learned: 'N+1 문제를 인지하고 개선 방향을 명확히 파악하는 것이 중요' }
    ],
    retro: {
      good: ['NoteLink + NoteEmbedding으로 "연결"을 1급 도메인 개념으로 설계', 'SimpleEditor + MarkdownEditor를 외부 라이브러리 없이 직접 구현', 'Springdoc OpenAPI로 API 문서화 — 프론트·백엔드 협업 편의성 확보'],
      bad: ['자동 저장(Autosave) 미구현 — 수동 저장 의존', 'NoteEmbedding 연동 AI 시맨틱 검색 미구현 (엔티티만 선제 설계)', '모바일 에디터 UX 개선 필요'],
      next: ['D3.js / Cytoscape.js 기반 Knowledge Graph 시각화', 'AI 태그 추천 · 유사 노트 자동 연결 제안', '자동 저장 + 충돌 해결(Conflict Resolution) 로직']
    }
  },
  'spring-mvc': {
    tagline: 'JSP/Servlet Model2 → Spring MVC 6.2 + MyBatis 3.5 직접 마이그레이션',
    overview: {
      problem: '수동 if-else 라우팅, JDBC 직접 연결, Singleton 패턴 등 프레임워크 없이 작성된 코드의 유지보수 한계',
      whyBuilt: '부트캠프에서 JSP/Servlet으로 팀 프로젝트를 완성한 뒤, "왜 Spring이 필요한가"를 코드 레벨에서 직접 증명하고 싶었습니다.',
      features: ['DispatcherServlet + @RequestMapping 선언적 라우팅', 'MyBatis XML 매퍼로 SQL 분리', 'Spring IoC 컨테이너 기반 DI 전환', 'Spring Security @PreAuthorize 메서드 레벨 접근 제어', 'delflag 논리 삭제 + replyCnt 비정규화']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Java 21', r: '메인 언어' }, { n: 'Spring Framework 6.2.14', r: 'Web MVC + Context + AOP' }, { n: 'Spring Security 6.2.5', r: '인증·인가 + @PreAuthorize' }, { n: 'MyBatis 3.5.19', r: 'SQL 분리 + XML 매퍼' }, { n: 'HikariCP 7.0.2', r: '커넥션 풀' }, { n: 'Log4j2', r: '로깅 프레임워크' }] },
      { name: 'Database', items: [{ n: 'MySQL', r: '기존 스키마 유지' }] },
      { name: 'View', items: [{ n: 'JSP + JSTL 3.0.1', r: '서버 사이드 렌더링' }] },
      { name: 'Infra', items: [{ n: 'Maven', r: 'WAR 패키징 빌드' }, { n: 'Docker (Multi-stage)', r: 'Maven 빌드 → Tomcat 10.1 실행 분리' }, { n: 'Render', r: '무료 배포' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->|HTTP|DispatcherServlet\n  DispatcherServlet-->Controller[@Controller]\n  Controller-->Service[@Service + @Transactional]\n  Service-->MyBatis[@Mapper Interface]\n  MyBatis-->MySQL[(MySQL)]',
    erdMermaid: 'erDiagram\n  MEMBERS ||--o{ MEMBER_ROLES : has\n  MEMBERS ||--o{ BOARD : writes\n  BOARD ||--o{ REPLY : has\n  MEMBERS { string id PK\n    string password\n    string name\n    string email\n    boolean enabled }\n  MEMBER_ROLES { string id FK\n    string role }\n  BOARD { int seq PK\n    string writer FK\n    string title\n    text content\n    int hit\n    int replyCnt\n    boolean delflag }\n  REPLY { int rno PK\n    int bno FK\n    text replyText\n    string replyer\n    boolean delflag }',
    useCases: [
      { title: 'Before vs After 라우팅', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant D as DispatcherServlet\n  participant CT as @Controller\n  participant S as @Service\n  participant M as MyBatis Mapper\n  C->>D: HTTP Request\n  D->>CT: @RequestMapping 매칭\n  CT->>S: Business Logic\n  S->>M: SQL 실행 (XML)\n  M-->>S: DTO 결과\n  S-->>CT: Result\n  CT-->>D: View Name\n  D-->>C: JSP Response' },
      { title: '댓글 REST API (Ajax)', mermaid: 'sequenceDiagram\n  participant C as Client (Ajax)\n  participant R as @RestController\n  participant S as ReplyService\n  participant DB as Database\n  C->>R: POST /replies/new (JSON)\n  R->>S: create(ReplyDTO)\n  S->>DB: INSERT reply\n  S->>DB: UPDATE board SET replyCnt = replyCnt + 1\n  S-->>R: 성공\n  R-->>C: ResponseEntity 200' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '프로젝트 구조 분석', desc: '기존 Model2 코드 분석 + Spring 전환 계획 수립' },
      { week: 'Week 2', milestone: 'Spring MVC 전환', desc: 'DispatcherServlet + @Controller + ViewResolver 설정' },
      { week: 'Week 3', milestone: 'MyBatis + Security', desc: 'JDBC → MyBatis XML 매퍼, Spring Security + CustomUserDetailsService' },
      { week: 'Week 4', milestone: '배포 및 마무리', desc: 'Docker Multi-stage Build + Render 배포, 테스트 코드 작성' }
    ],
    keyImpls: [
      { title: '@PreAuthorize 메서드 레벨 접근 제어', summary: '본인 게시글만 수정·삭제 가능하도록 SpEL 기반 접근 제어 적용', code: { lang: 'java', snippet: '@Controller\n@RequestMapping("/board/*")\n@RequiredArgsConstructor\npublic class BoardController {\n    // 게시글 수정 — 본인만 가능\n    @PostMapping("/modify")\n    @PreAuthorize("principal.username == #board.writer")\n    public String modify(BoardDTO board, Criteria cri,\n                         RedirectAttributes rttr) {\n        service.modify(board);\n        rttr.addFlashAttribute("result", "success");\n        return "redirect:/board/list" + cri.getListLink();\n    }\n}' } },
      { title: '@Transactional 조회수 + 조회 원자성', summary: 'updateHit()와 read() 두 쿼리를 @Transactional로 묶어 조회수 증가와 데이터 조회를 원자적으로 처리', code: { lang: 'java', snippet: '@Service\n@RequiredArgsConstructor\npublic class BoardServiceImpl implements BoardService {\n    private final BoardMapper mapper;\n\n    @Transactional\n    @Override\n    public BoardDTO get(int bno) {\n        mapper.updateHit(bno);   // 조회수 +1\n        return mapper.read(bno); // 게시글 조회\n    }\n}' } },
      { title: '논리 삭제(Soft Delete)', summary: 'DELETE가 아닌 UPDATE delflag = true로 삭제 처리. 목록 조회 시 delflag = false 필터링', code: { lang: 'xml', snippet: '<!-- DELETE 쿼리가 아닌 UPDATE로 삭제 처리 -->\n<delete id="delete">\n    UPDATE board SET delflag = true WHERE seq = #{seq}\n</delete>\n\n<!-- 목록 조회 시 논리 삭제 필터링 -->\n<select id="getListWithPaging" resultType="BoardDTO">\n    SELECT * FROM board\n    WHERE delflag = false\n    ORDER BY seq DESC\n    LIMIT #{skip}, #{amount}\n</select>' } }
    ],
    troubleshooting: [
      { problem: 'MyBatis parameterType 불일치로 쿼리 실행 시 TypeException 발생', cause: 'XML에서 parameterType을 String으로 지정했으나 실제 int 전달', solution: 'parameterType을 int로 수정하고, #{} 바인딩 타입 명시', learned: 'MyBatis 타입 매핑의 엄격성과 디버깅 방법을 체득' },
      { problem: 'DispatcherServlet이 정적 리소스(CSS/JS)까지 가로채는 문제', cause: 'url-pattern을 /로 설정하여 모든 요청을 가로챔', solution: 'servlet-context.xml에 <resources> 태그로 정적 리소스 경로 예외 처리', learned: 'Spring MVC의 요청 흐름과 정적 리소스 처리 메커니즘 이해' }
    ],
    retro: {
      good: ['프레임워크의 필요성을 코드 레벨에서 직접 증명', 'Before vs After 비교 표로 구조적 차이를 명확히 정리', 'Spring Security @PreAuthorize 메서드 보안, CustomUserDetailsService DB 인증 통합'],
      bad: ['테스트 코드 부재 — 수동 테스트에 의존', 'XML 기반 설정의 복잡성 — Java Config 전환 미완'],
      next: ['JUnit + Mockito 테스트 코드 추가', 'Spring Boot로 재마이그레이션', 'Java Config(@Configuration) 전환']
    }
  },
  'creative-archive': {
    tagline: 'BGF 재직 시절 디자인 자산물 아카이빙 React 카탈로그',
    overview: {
      problem: '이전 직장에서 제작한 디자인 작업물이 흩어져 있어 체계적 관리 필요',
      whyBuilt: 'Redux Toolkit 실습 목적 + 디자인 경력 아카이빙을 동시에 달성하고자 6일간 집중 개발했습니다.',
      features: ['Redux Slice 패턴 상태 관리', '실시간 검색 + 카테고리 필터', '다크/라이트 모드 토글']
    },
    techCategories: [
      { name: 'Frontend', items: [{ n: 'React 18', r: '컴포넌트 기반 UI' }, { n: 'Redux Toolkit', r: '전역 상태 관리 실습' }, { n: 'Vite', r: '빠른 번들링' }, { n: 'React Router v6', r: 'SPA 라우팅' }, { n: 'CSS Modules', r: '스타일 격리' }] }
    ],
    archMermaid: 'flowchart LR\n  User-->React[React App]\n  React-->Redux[Redux Store]\n  Redux-->Slice[Category Slice]\n  React-->Router[React Router]\n  Router-->Pages[Gallery Pages]\n  React-->GHPages[GitHub Pages]',
    dataFlowMermaid: 'flowchart TD\n  Store[(Redux Store)]\n  Filter[Filter Slice]\n  Items[Items Data]\n  UI[Gallery UI]\n  Store --- Filter\n  Store --- Items\n  Filter -->|Selector| UI\n  Items -->|Selector| UI',
    useCases: [
      { title: '검색 + 필터 플로우', mermaid: 'sequenceDiagram\n  participant U as User\n  participant C as SearchComponent\n  participant R as Redux Store\n  participant G as Gallery\n  U->>C: 검색어 입력\n  C->>C: debounce 300ms\n  C->>R: dispatch(setFilter)\n  R->>R: createSelector 메모이제이션\n  R-->>G: 필터링된 결과\n  G-->>U: UI 업데이트' }
    ],
    timeline: [
      { week: 'Day 1-2', milestone: '프로젝트 셋업', desc: 'Vite + React + Redux Toolkit 초기 구성' },
      { week: 'Day 3-4', milestone: '핵심 기능', desc: '갤러리 UI, 검색, 필터, 정렬 구현' },
      { week: 'Day 5-6', milestone: '마무리', desc: '다크모드, 반응형, GitHub Pages 배포' }
    ],
    keyImpls: [
      { title: 'createSelector 무한 렌더링 해결', summary: 'useSelector가 매 렌더링마다 새 참조를 반환하여 무한 루프 발생 → createSelector로 메모이제이션 적용', code: { lang: 'javascript', snippet: 'const selectFilteredItems = createSelector(\n  [(state) => state.portfolio.items,\n   (state) => state.portfolio.filter],\n  (items, filter) => {\n    return items.filter(item =>\n      item.category === filter.category &&\n      item.title.includes(filter.search)\n    );\n  }\n);' } }
    ],
    troubleshooting: [
      { problem: 'useSelector 참조 동일성 문제로 컴포넌트 무한 리렌더링', cause: 'useSelector에서 매번 새 배열을 생성하는 filter() 호출', solution: 'createSelector를 사용해 입력이 같으면 동일 참조 반환', learned: 'React-Redux에서 참조 동일성(referential equality)이 성능의 핵심' }
    ],
    retro: {
      good: ['6일 만에 기획부터 배포까지 완료', 'Redux 상태 관리 패턴 체득'],
      bad: ['TypeScript 미적용으로 타입 안전성 부족', '테스트 코드 부재'],
      next: ['TypeScript 마이그레이션', 'React Testing Library 테스트 추가']
    }
  },
  '62dangnyang': {
    tagline: '공공데이터포털 유기동물 API 연동 반려동물 복지 플랫폼',
    overview: {
      problem: '유기동물 정보가 동물보호관리시스템(APMS)에 산재해 접근성 낮음. 입양·임보 의사가 있는 시민과 보호소를 효과적으로 연결하는 민간 플랫폼 부재',
      whyBuilt: '부트캠프 팀 프로젝트로, 공공데이터 API 실연동 + 쇼핑몰 아키텍처를 비영리 도메인에 재해석하는 설계 경험을 목표로 했습니다.',
      features: ['공공데이터포털 API 증분 동기화(AnimalSyncService)', 'JWT + OAuth 2.0 백채널 인증 (카카오·구글)', '쇼핑몰→비영리 도메인 모델 재해석', 'GitHub Actions CI/CD 자동 배포']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Java 21', r: '메인 언어' }, { n: 'Spring Boot 3.2', r: '프레임워크' }, { n: 'Spring Data JPA', r: 'ORM + 엔티티 설계' }, { n: 'Spring Security + JWT', r: '인증·인가' }, { n: 'WebClient', r: '공공API·OAuth 외부 HTTP 호출' }] },
      { name: 'Database', items: [{ n: 'MySQL 8.0 (RDS)', r: '운영 DB' }] },
      { name: 'Frontend', items: [{ n: 'React 18 + TypeScript', r: 'UI' }, { n: 'TailwindCSS', r: '스타일링' }, { n: 'React Query + Zustand', r: '상태 관리' }] },
      { name: 'Infra', items: [{ n: 'AWS EC2', r: '애플리케이션 서버' }, { n: 'AWS RDS', r: '운영 DB' }, { n: 'Nginx', r: '리버스 프록시 + 정적 파일 서빙' }, { n: 'GitHub Actions', r: 'CI/CD 자동 배포' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->Nginx[:80]\n  Nginx-->|/|React[React 정적 빌드]\n  Nginx-->|/api/|SpringBoot[Spring Boot :8080]\n  SpringBoot-->RDS[(MySQL RDS)]\n  SpringBoot-->PublicAPI[공공데이터포털 API]\n  SpringBoot-->OAuth[Kakao/Google OAuth]',
    erdMermaid: 'erDiagram\n  USERS ||--o{ FAVORITES : adds\n  USERS ||--o{ BOARDS : writes\n  USERS ||--o{ PREFERENCES : sets\n  ANIMALS ||--o{ FAVORITES : has\n  ANIMALS }o--|| SHELTERS : belongs\n  ANIMALS ||--o{ ANIMAL_IMAGES : has\n  BOARDS ||--o{ COMMENTS : has\n  USERS { bigint id PK\n    string email\n    enum role\n    string password }\n  ANIMALS { bigint id PK\n    string publicApiAnimalId\n    enum species\n    enum status }\n  SHELTERS { bigint id PK\n    string name\n    string regionSido }',
    useCases: [
      { title: '공공API 증분 동기화 흐름', mermaid: 'sequenceDiagram\n  participant Scheduler as @Scheduled\n  participant Sync as AnimalSyncService\n  participant API as 공공데이터포털\n  participant DB as MySQL\n  Scheduler->>Sync: cron 트리거\n  Sync->>API: 변경일 기준 페이징 조회\n  API-->>Sync: 유기동물 데이터\n  loop 각 건 독립 트랜잭션\n    Sync->>DB: desertionNo 기준 비교\n    alt 신규\n      Sync->>DB: INSERT\n    else 필드 변경\n      Sync->>DB: UPDATE (hasChanges 검증)\n    else 보호 종료\n      Sync->>DB: DELETE\n    end\n  end\n  Sync-->>Sync: SyncResult(added, updated, removed) 기록' },
      { title: 'OAuth 2.0 백채널 인증', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant S as AuthService\n  participant OAuth as Kakao/Google\n  participant DB as Database\n  C->>S: Authorization Code 전달\n  S->>OAuth: Access Token 교환 (WebClient, 백채널)\n  OAuth-->>S: Access Token\n  S->>OAuth: 사용자 정보 조회\n  OAuth-->>S: 프로필 정보\n  S->>DB: 사용자 조회/자동 회원가입\n  S->>S: JWT Access + Refresh Token 발급\n  S-->>C: JWT 토큰 응답' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '설계 및 환경 구성', desc: 'ERD 설계, Git 브랜치 전략, macOS/Windows 양환경 가이드 문서화' },
      { week: 'Week 2', milestone: 'API 연동', desc: '공공데이터 포털 API 연동 — 인증키 발급, XML 파싱, 증분 동기화' },
      { week: 'Week 3', milestone: '핵심 기능', desc: 'JWT+OAuth 인증, 입양/임보 신청 프로세스, 즐겨찾기' },
      { week: 'Week 4', milestone: 'CI/CD 및 배포', desc: 'GitHub Actions 파이프라인, EC2+RDS+Nginx 배포' }
    ],
    keyImpls: [
      { title: '증분 동기화 엔진 (AnimalSyncService)', summary: 'desertionNo를 자연 키로 DB 비교. 신규→INSERT, 변경→UPDATE, 종료→DELETE. PROPAGATION_REQUIRES_NEW로 단건 실패 격리', code: { lang: 'java', snippet: '@Transactional(propagation = REQUIRES_NEW)\npublic void syncSingleAnimal(AnimalApiDto dto) {\n    Optional<Animal> existing = animalRepo\n        .findByPublicApiAnimalId(dto.getDesertionNo());\n\n    if (existing.isEmpty()) {\n        animalRepo.save(AnimalMapper.toEntity(dto));\n        syncResult.incrementAdded();\n    } else if (existing.get().hasChanges(dto)) {\n        existing.get().updateFrom(dto);\n        syncResult.incrementUpdated();\n    }\n}\n\npublic record SyncResult(\n    int addedCount, int updatedCount, int removedCount\n) {}' } },
      { title: '도메인 모델 재해석 (쇼핑몰 → 비영리)', summary: '쇼핑몰의 상품→동물, 주문→입양신청으로 재해석. AdoptionRequest / VolunteerApply를 분리하여 비영리 도메인 특성 반영', code: { lang: 'java', snippet: '@Entity\npublic class AdoptionRequest {\n    @Id @GeneratedValue\n    private Long id;\n\n    @ManyToOne(fetch = LAZY)\n    private User applicant;\n\n    @ManyToOne(fetch = LAZY)\n    private Animal animal;\n\n    @Enumerated(STRING)\n    private AdoptionStatus status; // PENDING, APPROVED, REJECTED\n}' } }
    ],
    troubleshooting: [
      { problem: '공공데이터 API 응답 구조 불일치로 파싱 에러 발생', cause: 'API 문서와 실제 응답 XML 구조가 다름 (필드 누락, 타입 불일치)', solution: 'Optional + null-safe 파싱 유틸리티 작성, 실패 시 기본값 반환', learned: '외부 API 연동 시 방어적 프로그래밍의 필요성' },
      { problem: '이미지 URL 파싱 시 공공API 필드명이 일관되지 않음', cause: 'popfile1, popfile2, popfile, filename 등 다양한 필드에 이미지 URL 분산', solution: 'popfile1 → popfile2 → popfile → filename 우선순위 폴백 로직 구현', learned: '공공데이터 API는 문서만 믿으면 안 됨 — 실제 응답 기반 방어적 설계 필수' }
    ],
    retro: {
      good: ['공공API 증분 동기화를 전체 교체 아닌 upsert 방식으로 설계 — DB 부하·API 호출 비용 절감', 'PROPAGATION_REQUIRES_NEW로 단건 실패 격리', 'Nginx 리버스 프록시로 프론트·백 단일 도메인 서빙'],
      bad: ['테스트 코드 부재 (-x test 스킵)', 'Refresh Token 저장 미구현 (무상태)', '이미지 서빙: 공공API URL 직접 노출'],
      next: ['Redis 캐싱으로 API 응답 시간 개선', 'S3 + CloudFront CDN 이미지 서빙', 'Testcontainers 통합 테스트']
    }
  },
  'mermaid-studio': {
    tagline: 'Mermaid DSL → React Flow 그래프 변환 + 노드 편집 + PNG 내보내기 웹 툴',
    overview: {
      problem: 'Mermaid 다이어그램은 텍스트 기반이라 편리하지만, 생성된 다이어그램의 개별 노드 스타일 편집이나 이미지 내보내기가 불편',
      whyBuilt: 'Mermaid, React Flow, html-to-image 세 라이브러리를 연동하는 실험적 프로젝트. SVG DOM 파싱으로 그래프 변환 파이프라인을 직접 구현해보고 싶었습니다.',
      features: ['svgToFlow 함수로 Mermaid SVG → React Flow 변환', '노드 텍스트·색상·테두리·폰트 실시간 편집', '서버 없이 브라우저에서 PNG 다운로드']
    },
    techCategories: [
      { name: 'Frontend', items: [{ n: 'React', r: 'UI 프레임워크' }, { n: 'Vite', r: '개발 서버 + 번들링' }, { n: '@xyflow/react', r: 'React Flow 그래프 렌더링' }, { n: 'mermaid', r: 'DSL → SVG 변환' }, { n: 'html-to-image', r: 'DOM → PNG 캡처' }] }
    ],
    archMermaid: 'flowchart LR\n  Input[Mermaid Code textarea]-->|mermaid.render|SVG[Hidden SVG DOM]\n  SVG-->|svgToFlow 파싱|RF[React Flow Canvas]\n  RF-->|html-to-image toPng|PNG[PNG Download]',
    dataFlowMermaid: 'flowchart TD\n  Code[Mermaid Code State]\n  SVG[SVG DOM]\n  Nodes[React Flow Nodes]\n  Edges[React Flow Edges]\n  Selected[Selected Node]\n  Panel[Style Panel]\n  Code -->|render| SVG\n  SVG -->|parse| Nodes\n  SVG -->|parse| Edges\n  Nodes --> Selected\n  Selected --> Panel\n  Panel -->|update| Nodes',
    useCases: [
      { title: '다이어그램 생성 → 편집 → 내보내기', mermaid: 'sequenceDiagram\n  participant U as User\n  participant E as Editor\n  participant M as Mermaid\n  participant R as React Flow\n  participant P as html-to-image\n  U->>E: Mermaid 코드 입력\n  U->>E: "다이어그램 생성" 클릭\n  E->>M: mermaid.render(code)\n  M-->>E: SVG string\n  E->>E: svgToFlow(svgEl) 파싱\n  E->>R: setNodes + setEdges\n  R-->>U: 그래프 캔버스 표시\n  U->>R: 노드 클릭\n  R-->>U: SidePanel 스타일 편집\n  U->>E: "PNG 내보내기" 클릭\n  E->>P: toPng(.react-flow)\n  P-->>U: PNG 파일 다운로드' }
    ],
    timeline: [
      { week: 'Day 1-2', milestone: '프로토타입', desc: 'Mermaid + React Flow 연동, svgToFlow 파싱 로직 구현' },
      { week: 'Day 3-4', milestone: '편집 기능', desc: '노드 스타일 사이드 패널, 실시간 색상·폰트·테두리 편집' },
      { week: 'Day 5', milestone: 'PNG 내보내기', desc: 'html-to-image 통합, 다운로드 기능 구현' }
    ],
    keyImpls: [
      { title: 'svgToFlow — SVG DOM 파싱 엔진', summary: 'Mermaid가 생성하는 SVG DOM을 순회하며 .node와 .flowchart-link 요소에서 좌표·라벨·연결 정보를 추출해 React Flow 노드·엣지로 변환', code: { lang: 'javascript', snippet: 'function svgToFlow(svgEl) {\n  const nodes = [], edges = [];\n  const svgRect = svgEl.getBoundingClientRect();\n\n  // 노드 파싱\n  svgEl.querySelectorAll(".node").forEach((el) => {\n    const rect = el.getBoundingClientRect();\n    const label = el.querySelector("span")?.textContent\n      || el.querySelector("text")?.textContent || "";\n    const id = el.id.replace(/^flowchart-/, "").replace(/-\\d+$/, "");\n    nodes.push({\n      id, position: { x: rect.x - svgRect.x, y: rect.y - svgRect.y },\n      data: { label },\n    });\n  });\n\n  // 엣지 파싱\n  svgEl.querySelectorAll(".flowchart-link").forEach((el) => {\n    const match = el.id.match(/L-(\\w+)-(\\w+)/);\n    if (match) edges.push({ id: `e-${match[1]}-${match[2]}`,\n      source: match[1], target: match[2] });\n  });\n\n  return { nodes, edges };\n}' } },
      { title: 'PNG 내보내기 (서버리스)', summary: '.react-flow DOM 영역을 html-to-image로 캡처하여 data URL 생성 → 앵커 태그 click으로 다운로드', code: { lang: 'javascript', snippet: 'async function exportToPng() {\n  const flowEl = document.querySelector(".react-flow");\n  if (!flowEl) return;\n\n  const dataUrl = await toPng(flowEl, {\n    backgroundColor: "#ffffff",\n    quality: 1,\n  });\n\n  const link = document.createElement("a");\n  link.download = "mermaid-studio.png";\n  link.href = dataUrl;\n  link.click();\n}' } }
    ],
    troubleshooting: [
      { problem: 'Mermaid 버전 업데이트 시 SVG DOM 클래스명 변경으로 svgToFlow 파싱 실패', cause: '.node, .flowchart-link 등 Mermaid 내부 구현 클래스에 직접 의존하는 파싱 로직', solution: '현재 버전의 DOM 구조를 명시적으로 문서화하고, 버전 고정으로 안정성 확보. 장기적으로는 Mermaid AST 활용 검토', learned: '외부 라이브러리 내부 DOM 구조에 의존하는 파싱은 버전 변화에 취약 — 추상화 레이어 필요' }
    ],
    retro: {
      good: ['SVG DOM 파싱으로 다른 라이브러리 간 데이터 브릿지를 직접 구현한 경험', '서버 없이 브라우저만으로 완결되는 도구 설계', '3분할 레이아웃(에디터/캔버스/패널) UI 구성 경험'],
      bad: ['Mermaid 내부 DOM 의존으로 버전 변경 시 깨질 위험', '상태 영속화 미구현 (새로고침 시 초기화)', 'React Flow ↔ Mermaid 역변환 미구현'],
      next: ['localStorage/JSON 기반 상태 영속화', 'Mermaid AST 기반 안전한 파싱으로 전환', '다양한 다이어그램 타입(sequence, class 등) 지원']
    }
  },
  'portmanager': {
    tagline: 'Windows 포트 충돌(EADDRINUSE) 해결용 데스크톱 앱',
    overview: {
      problem: '개발 중 포트 충돌(EADDRINUSE) 에러가 반복 발생하지만, 매번 CLI로 PID를 찾아 종료하는 과정이 번거로움',
      whyBuilt: '직접 겪은 불편함을 도구로 해결하는 개발자 마인드셋 — 문제 인식부터 배포까지 전 과정을 경험하고자 했습니다.',
      features: ['LISTEN 포트 실시간 조회', 'PID 기반 프로세스 종료', '포터블 exe 배포']
    },
    techCategories: [
      { name: 'Desktop', items: [{ n: 'Electron 33', r: '크로스플랫폼 데스크톱' }, { n: 'Node.js 20+', r: '시스템 API 접근' }] },
      { name: 'Frontend', items: [{ n: 'HTML/CSS/JS', r: '경량 UI' }] }
    ],
    archMermaid: 'flowchart LR\n  UI[Renderer Process]-->|contextBridge|Main[Main Process]\n  Main-->|child_process|OS[Windows OS]\n  OS-->|netstat|Main\n  Main-->|IPC|UI',
    dataFlowMermaid: 'sequenceDiagram\n  participant U as User\n  participant R as Renderer\n  participant M as Main Process\n  participant OS as Windows OS\n  U->>R: 포트 조회 클릭\n  R->>M: IPC invoke\n  M->>OS: netstat -ano\n  OS-->>M: TCP/UDP 포트 목록\n  M-->>R: 파싱된 결과\n  R-->>U: 테이블 표시',
    useCases: [
      { title: '포트 조회 및 종료', mermaid: 'sequenceDiagram\n  participant U as User\n  participant App as PortManager\n  participant OS as Windows\n  U->>App: 포트 검색\n  App->>OS: netstat -ano\n  OS-->>App: 포트 목록\n  App-->>U: 결과 표시\n  U->>App: PID 종료 요청\n  App->>App: PID 정수 검증\n  App->>OS: taskkill /PID\n  OS-->>App: 종료 결과\n  App-->>U: 완료 알림' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '기획 및 프로토타입', desc: 'Electron 셋업, netstat 파싱 로직' },
      { week: 'Week 2', milestone: '핵심 기능', desc: '포트 조회, 프로세스 종료, 검색' },
      { week: 'Week 3', milestone: '보안 및 배포', desc: 'contextIsolation, CSP, 포터블 빌드' }
    ],
    keyImpls: [
      { title: 'contextBridge 보안 설계', summary: 'contextIsolation + contextBridge로 최소 권한 API만 렌더러에 노출. 커맨드 인젝션 방지를 위한 PID 정수 검증', code: { lang: 'javascript', snippet: '// preload.js\ncontextBridge.exposeInMainWorld("portAPI", {\n  getPorts: () => ipcRenderer.invoke("get-ports"),\n  killProcess: (pid) => {\n    if (!Number.isInteger(pid)) throw new Error("Invalid PID");\n    return ipcRenderer.invoke("kill-process", pid);\n  }\n});' } }
    ],
    troubleshooting: [
      { problem: 'Electron에서 netstat 출력 파싱 시 인코딩 깨짐', cause: 'Windows cmd 기본 인코딩(CP949)과 Node.js UTF-8 불일치', solution: 'child_process.exec에 encoding 옵션 지정 + iconv-lite로 변환', learned: '크로스플랫폼 개발 시 OS별 인코딩 차이 고려 필요' }
    ],
    retro: {
      good: ['불편함을 직접 도구로 만드는 경험', 'Electron 보안 모델(contextIsolation) 이해'],
      bad: ['Windows 전용 — macOS/Linux 미지원', 'UI 디자인 완성도 부족'],
      next: ['크로스플랫폼 지원 (macOS lsof 연동)', 'UI/UX 개선 및 시스템 트레이 상주']
    }
  }
};
