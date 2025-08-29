import { useRef } from "react";

export default function App(){
  const inputRef=useRef(null);
  
  function focusinput(){
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text"/>
       <button onClick={focusinput}>submit</button>
    </div>
  )
}