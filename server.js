const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const USERS_FILE = path.join(__dirname, 'users.json');

// 홈
app.get('/', (req, res) => {
  res.render('index');
});

// 회원가입 폼
app.get('/register', (req, res) => {
  res.render('register');
});

// 회원가입 처리
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

  const exists = users.find(user => user.username === username);
  if (exists) {
    return res.send('이미 존재하는 아이디입니다.');
  }

  users.push({ username, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.send('회원가입 완료!');
});

// 로그인 폼
app.get('/login', (req, res) => {
  res.render('login');
});

// 로그인 처리
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send(`환영합니다, ${username}님!`);
  } else {
    res.send('아이디 또는 비밀번호가 틀렸습니다.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
