# mingnar.github.io

Personal academic website for Yun Sanguk (MiniGnar).

## 파일 구조

```
mingnar.github.io/
├── index.html          ← About 페이지 (메인)
├── projects.html       ← Projects 페이지
├── studylog.html       ← Study Log (CS285 목록)
├── cs285-lecture.html  ← CS285 Lecture 목록
├── style.css           ← 전체 스타일
├── theme.js            ← 다크/라이트 모드 토글
└── README.md
```

## GitHub Pages 배포 방법

1. GitHub에서 `mingnar` 계정으로 로그인
2. 새 레포지토리 생성: 이름을 정확히 **`mingnar.github.io`** 로 설정
3. 이 폴더의 모든 파일을 레포지토리에 업로드 (또는 git push)
4. 레포지토리 Settings → Pages → Source: **Deploy from branch** → branch: `main` / `/ (root)` → Save
5. 몇 분 후 `https://mingnar.github.io/` 에서 확인

## 아바타 이미지 교체

`index.html` 의 `<img src="https://via.placeholder.com/160/888/888?text=+">` 부분을  
본인 사진 파일(예: `photo.jpg`)을 레포에 올린 뒤 `src="photo.jpg"` 로 변경하세요.

## 새 강의/프로젝트 추가 방법

- **강의 추가**: `cs285-lecture.html` 에서 `notion-item` 블록을 복사해서 붙여넣기
- **프로젝트 추가**: `projects.html` 에 동일하게 추가
- **새 과목**: `studylog.html` 에 새 `notion-item` 추가 후 해당 lecture HTML 파일 생성
