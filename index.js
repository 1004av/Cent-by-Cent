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

//로그인/회원가입 화면
app.get('/login', (req, res) => {
  res.render('login'); // login.ejs 파일을 렌더링
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 라우트
app.get('/', (req, res) => {
  res.render('ignored.ejs', { user: req.session.user, posts, comments });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) return res.send('이미 존재하는 아이디');
  users.push({ username, password });
  req.session.user = { username };
  res.redirect('/');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.send('로그인 실패');
  req.session.user = { username };
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.session.user) return res.redirect('/');
  posts.push({
    id: Date.now().toString(),
    imageUrl: '/uploads/' + req.file.filename,
    description: req.body.description,
    author: req.session.user.username,
    likes: []
  });
  res.redirect('/');
});

app.post('/like/:id', (req, res) => {
  if (!req.session.user) return res.redirect('/');
  const post = posts.find(p => p.id === req.params.id);
  if (post && !post.likes.includes(req.session.user.username)) post.likes.push(req.session.user.username);
  res.redirect('/');
});

app.post('/comment/:id', (req, res) => {
  if (!req.session.user) return res.redirect('/');
  comments.push({ postId: req.params.id, user: req.session.user.username, text: req.body.comment });
  res.redirect('/');
});

app.listen(3000, () => console.log('http://localhost:3000'));
