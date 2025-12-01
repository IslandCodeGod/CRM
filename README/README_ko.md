# Trae CRM - 고객 관리 시스템

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 프로젝트 개요

Trae CRM은 중소기업을 위한 오픈 소스 고객 관계 관리(CRM) 시스템입니다. 고객, 영업 기회, 리드, 후속 조치 활동을 관리하기 위한 완전한 기능을 제공하여 기업이 영업 성과와 고객 만족도를 향상시키는 데 도움을 줍니다.

## ✨ 주요 기능

- 🎯 **고객 관리**: 고객 정보 추가, 수정, 검색 및 관리
- 📊 **대시보드**: 영업 통계 및 주요 지표 시각화
- 💰 **영업 기회**: 영업 파이프라인을 통한 영업 기회 추적
- 📈 **리드 관리**: 잠재 리드와 전환율 관리
- 📞 **연락처**: 고객 연락처 정리 및 유지
- 📝 **작업**: 활동 및 후속 조치 계획 및 관리
- 🔐 **접근 제어**: 사용자 역할을 갖춘 안전한 인증 시스템

## 🛠️ 기술 스택

- **프론트엔드**: HTML, CSS, JavaScript, Bootstrap 5
- **백엔드**: Python, Flask
- **데이터베이스**: SQLite
- **구조**: MVC (Model-View-Controller)

## 🚀 빠른 시작

### 사전 요구 사항

- Python 3.8+
- pip (Python 패키지 관리자)

### 설치 방법

1. 리포지토리를 클론합니다.
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. 의존성을 설치합니다.
   ```bash
   pip install -r requirements.txt
   ```

3. 애플리케이션을 시작합니다.
   ```bash
   python run.py
   ```

4. 브라우저를 열고 `http://localhost:5000`으로 접속합니다.

### 테스트 계정

- **사용자 이름**: admin
- **비밀번호**: admin123

## 📁 프로젝트 구조

```
trae_crm/
├── app/
│   ├── __init__.py          # Flask 애플리케이션 초기화
│   ├── models/              # 데이터 모델 (ORM)
│   ├── routes/              # 라우트 정의 (컨트롤러)
│   ├── static/              # 정적 파일 (CSS, JS, 이미지)
│   ├── templates/           # HTML 템플릿
│   └── utils/               # 유틸리티 및 지원 함수
├── config.py                # 애플리케이션 설정
├── run.py                   # 메인 진입점
├── requirements.txt         # 프로젝트 의존성
└── README.md                # 프로젝트 문서
```

## 📖 사용 가이드

### 1. 대시보드

대시보드는 비즈니스의 주요 지표에 대한 개요를 제공합니다:

- **영업 지표**: 총 고객 수, 리드 수, 기회 수, 예상 수익
- **영업 파이프라인**: 영업 기회의 진행 상황 시각화
- **주요 지표**: 월간 신규 고객, 전환율 등
- **최근 활동**: 최신 활동 및 작업

![대시보드](screenshots/dashboard.png)

### 2. 고객 관리

- **고객 추가**: 새로운 고객을 추가하기 위한 양식 작성
- **고객 목록**: 필터링 및 정렬 기능을 갖춘 모든 고객 표시
- **고객 상세**: 고객 정보 보기 및 수정
- **고객 검색**: 이름, 이메일, 전화번호로 고객 찾기

### 3. 영업 기회 관리

- **기회 추가**: 새로운 영업 기회 생성
- **영업 파이프라인**: 단계를 통해 기회 상태 추적
- **기회 평가**: 종결 금액 및 확률 할당
- **수익 예측**: 기회에서 예상되는 수익 계산

### 4. 리드 관리

- **리드 추가**: 새로운 잠재 리드 입력
- **자격 평가**: 리드 평가 및 자격 부여
- **전환**: 리드에서 고객으로의 전환 추적
- **분석**: 전환 통계 표시

### 5. 연락처

- **연락처 관리**: 고객 연락처 정리 및 유지
- **연락 정보**: 전화번호, 이메일, 위치 등
- **분류**: 액세스를 용이하게 하기 위해 연락처 분류

### 6. 작업

- **작업 생성**: 회의, 전화, 작업 계획
- **마감일**: 작업에 대한 마감일 설정
- **완료**: 작업을 완료로 표시
- **표시**: 리스트 또는 캘린더에서 작업 표시

## ❓ 자주 묻는 질문

**Q: SQLite에서 MySQL/PostgreSQL로 데이터베이스를 변경할 수 있나요?**
A: 예, `config.py` 파일의 설정을 수정하여 다른 데이터베이스를 사용할 수 있습니다.

**Q: 새로운 사용자 역할을 추가하려면 어떻게 해야 하나요?**
A: `app/models/user.py`의 User 모델을 수정하여 새로운 역할을 추가할 수 있습니다.

**Q: 인터페이스를 사용자 정의할 수 있나요?**
A: 예, `app/templates/`의 HTML 템플릿과 `app/static/css/`의 CSS 파일을 수정할 수 있습니다.

## 🛠️ 개발

### 개발 환경

1. 가상 환경을 생성합니다.
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. 개발 의존성을 설치합니다.
   ```bash
   pip install -r requirements.txt
   ```

3. 개발 모드로 앱을 실행합니다.
   ```bash
   python run.py
   ```

### 기여

1. 리포지토리를 포크합니다.
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`).
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`).
5. Pull Request를 엽니다.

## 📋 할 일

- [ ] 이메일 및 SMS API 통합
- [ ] 고급 보고 기능 추가
- [ ] 데이터 내보내기(Excel, PDF) 구현
- [ ] 푸시 알림 추가
- [ ] 모바일 인터페이스 개선

## 📄 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하십시오.

## 📞 연락처

- **프로젝트**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **이메일**: your.email@example.com
- **문제**: [문제 보고](https://github.com/yourusername/trae_crm/issues)

---

Trae CRM을 선택해 주셔서 감사합니다! 🎉