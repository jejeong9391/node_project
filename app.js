// 참고 : https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/Hello-World/Express%EB%A1%9C-%EC%84%9C%EB%B2%84-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0

var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World! node!'); // "Hello World!"를 보냅니다.
});

var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

// node app.js 명령어로 실행