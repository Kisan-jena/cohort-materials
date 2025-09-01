import { useEffect, useState, useRef } from 'react'
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
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Focus input when component mounts and when connected
  useEffect(() => {
    if (isConnected && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isConnected])

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
    
    if (socket && isConnected) {
      // Add user message to chat
      addMessage(inputRef.current?.value || '', 'user');
      
      // Send message to server
      socket.send(inputRef.current?.value || '');
      
      // Clear input
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      
      // Focus input field after sending message
      inputRef.current?.focus();
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
            {/* <p>{msg.id}{msg.sender}</p> */}
            <div className="message-content">
              <span className="message-text">{msg.text}</span>
              <span className="message-time">{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <input
          ref={inputRef}
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          disabled={!isConnected}
        />
        <button 
          onClick={sendMessage} 
          disabled={!isConnected}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App