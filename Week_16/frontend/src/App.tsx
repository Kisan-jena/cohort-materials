import { useEffect, useState } from 'react'
import './App.css'

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'server';
  timestamp: string;
}

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    
    newSocket.onopen = () => {
      console.log('Connection established');
      setIsConnected(true);
      addMessage('Connected to server', 'server');
    }
    
    newSocket.onmessage = (messageEvent) => {
      console.log('Message received:', messageEvent.data);
      addMessage(messageEvent.data, 'server');
    }
    
    newSocket.onclose = () => {
      console.log('Connection closed');
      setIsConnected(false);
      addMessage('Disconnected from server', 'server');
    }
    
    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      addMessage('Connection error', 'server');
    }
    
    setSocket(newSocket);
    
    return () => {
      newSocket.close();
    }
  }, [])

  const addMessage = (text: string, sender: 'user' | 'server') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, newMessage]);
  }

  const sendMessage = () => {
    if (inputMessage.trim() && socket && isConnected) {
      // Add user message to chat
      addMessage(inputMessage, 'user');
      
      // Send message to server
      socket.send(inputMessage);
      
      // Clear input
      setInputMessage('');
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>WebSocket Chat</h2>
        <div>
          {isConnected ? ' 🟢 Connected' : ' 🔴 Disconnected'}
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <p>{msg.id}{msg.sender}</p>
            <div className="message-content">
              <span className="message-text">{msg.text}</span>
              <span className="message-time">{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          disabled={!isConnected}
        />
        <button 
          onClick={sendMessage} 
          disabled={!isConnected || !inputMessage.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App