import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (messageEvent) => {
      console.log('Message received:', messageEvent.data);
      setMessage(messageEvent.data);
    }
    setSocket(newSocket);
    
    return 
  }, [])
  return (
    <>
      <p>{socket ? 'Connected' : 'Disconnected'}</p>
      <p>Last message: {message}</p>
    </>
  )
}

export default App