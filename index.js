// express 모듈 불러오기
const express = require('express');
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // views 폴더 위치 설정

// Static 폴더 연결
app.use(express.static('public'));  // 'public' 폴더에서 static 파일을 서빙

// 서버 포트 설정
const PORT = 3000;

// 기본 경로("/")로 요청이 오면 응답
app.get('/', (req, res) => {
    res.render('index'); // index.ejs를 렌더링
});

// 기부 라우트
app.post('/donate', (req, res) => {
  const donationAmount = 1; // 기부 금액 예시
  res.send(`감사합니다! ${donationAmount}달러가 기부되었습니다.`);
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 로그인/회원가입 버튼 만들기
const authButtons = document.createElement("div");
authButtons.id = "auth-buttons";
authButtons.style.position = "fixed";
authButtons.style.top = "20px";
authButtons.style.right = "20px";
authButtons.style.zIndex = "1000";

const signupBtn = document.createElement("button");
signupBtn.textContent = "회원가입";
signupBtn.style.marginLeft = "10px";
signupBtn.style.padding = "8px 14px";
signupBtn.style.fontSize = "14px";
signupBtn.style.cursor = "pointer";

const loginBtn = document.createElement("button");
loginBtn.textContent = "로그인";
loginBtn.style.marginLeft = "10px";
loginBtn.style.padding = "8px 14px";
loginBtn.style.fontSize = "14px";
loginBtn.style.cursor = "pointer";

authButtons.appendChild(signupBtn);
authButtons.appendChild(loginBtn);
document.body.appendChild(authButtons);
