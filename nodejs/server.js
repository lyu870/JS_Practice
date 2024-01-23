const express = require('express');
const path = require('path')
const app = express();

// 기본적으로 index.html을 가리키게 됨
app.use(express.static(path.join(__dirname + '..', '..', '..', '/JS_PRACTICE')));

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중');
});

// main페이지는 상위폴더의 index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '..', '..', 'list.html'))
// })

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '..', '..', 'list.html'))
})

app.get('/news', (req, res) => {
  res.send('비가 옵니다')
})