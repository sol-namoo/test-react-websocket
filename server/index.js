const { WebSocketServer } = require('ws');
const http = require('http');
const uuidv4 = require('uuid').v4;

// http 서버와 websocket 서버 돌리기
//   일단 웹소켓 서버가 http 서버에 붙으면,
//   http 프로토콜을 websocket으로 업그레이드해서 들어오는 웹소캣 연결 요청을 받는다
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;
server.listen(port, () => {
    console.log(`WebSocket server is running on port ${port}`);
});

// 모든 active한 연결을 담아두기 위한 객체다
const clients = {};

// 새 클라이언트 연결 요청을 받으면
wsServer.on('connection', function(connection) {
    // 유저마다 유니크한 코드를 생성한다
    const userId = uuidv4();
    console.log(`Recieved a new connection.`);

    // 새 연결을 코드를 key로 하여 저장한다
    clients[userId] = connection;
    console.log(`${userId} connected.`);
});