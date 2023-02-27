import React from 'react';
import useWebSocket from 'react-use-websocket';

// ws 프로토콜로 8000번 포트에 접근 요청
const WS_URL = 'ws://127.0.0.1:8000';

function App() {
    useWebSocket(WS_URL, {
        // 서버가 연결 열어주자마자 콘솔에 메시지 띄우기
        onOpen: () => {
            console.log('WebSocket connection established.');
        }
    });

    return (
        <div>Hello WebSockets!</div>
    );
}

export default App;