# Life and Death of the `usePrevious` Hook in React  

Read the full article here:  
🔗 [Life and Death of the usePrevious Hook](https://giacomocerquone.com/blog/life-death-useprevious-hook/)  

This blog post explains how the `usePrevious` custom hook works in React, its common pitfalls, and alternative approaches to tracking previous state values effectively.

## Introduction

`usePrev` is a custom React Hook that captures the previous value of a state or prop across renders. This is useful for tracking state changes, implementing animations, and handling comparisons in components.

## Why Use `usePrev`?

- **Keeps track of previous state or props** across renders.
- **Useful for change detection** (e.g., comparing the previous and current values).
- **Lightweight and efficient**, using `useRef` under the hood.

## Implementation of `usePrev`

```jsx
import { useRef, useEffect } from 'react';

const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
```

### Explanation:
- Uses `useRef` to persist the previous value across renders.
- The `useEffect` updates the reference after each render.
- Returns the previous value.

## Basic Example: Tracking Previous State

```jsx
import React, { useState } from 'react';
import usePrev from './usePrev';

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Explanation:
- `usePrev` stores the previous value of `count`.
- Displays both the current and previous values in the UI.

## Tracking Prop Changes

```jsx
import React, { useState } from 'react';
import usePrev from './usePrev';

const UserProfile = ({ user }) => {
  const prevUser = usePrev(user);

  return (
    <div>
      <p>Current User: {user.name}</p>
      <p>Previous User: {prevUser?.name || 'None'}</p>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState({ name: 'Alice' });

  return (
    <div>
      <UserProfile user={user} />
      <button onClick={() => setUser({ name: 'Bob' })}>Change User</button>
    </div>
  );
}
```

### Explanation:
- Tracks changes in the `user` prop using `usePrev`.
- Displays the current and previous usernames.

## Industrial Use Cases

### 1. Detecting Value Changes

```jsx
import React, { useState, useEffect } from 'react';
import usePrev from './usePrev';

const DetectChange = ({ value }) => {
  const prevValue = usePrev(value);

  useEffect(() => {
    if (prevValue !== undefined && prevValue !== value) {
      console.log(`Value changed from ${prevValue} to ${value}`);
    }
  }, [value, prevValue]);

  return <p>Current Value: {value}</p>;
};
```

### 2. Implementing Animations

```jsx
import React, { useState } from 'react';
import usePrev from './usePrev';

const AnimatedBox = () => {
  const [position, setPosition] = useState(0);
  const prevPosition = usePrev(position);

  return (
    <div>
      <p>Previous Position: {prevPosition}</p>
      <p>Current Position: {position}</p>
      <button onClick={() => setPosition(position + 10)}>Move Right</button>
    </div>
  );
};

export default AnimatedBox;
```

### 3. Undo Feature in Forms

```jsx
import React, { useState } from 'react';
import usePrev from './usePrev';

const UndoForm = () => {
  const [text, setText] = useState('');
  const prevText = usePrev(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText(prevText || '')}>Undo</button>
    </div>
  );
};

export default UndoForm;
```

## Common Mistakes

### 1. Accessing `usePrev` Before First Render

```jsx
const prevValue = usePrev(someValue);
console.log(prevValue); // undefined on first render
```

**Solution:** Check for `undefined` before using the previous value.

### 2. Using `usePrev` for Renders Instead of `useState`

```jsx
const prevCount = usePrev(count);
setCount(prevCount + 1); // Incorrect usage
```

**Solution:** `usePrev` does not trigger re-renders; use `useState` if you need reactivity.

## Conclusion

- `usePrev` helps in tracking previous values of state or props.
- Ideal for animations, change detection, and form handling.
- Use it wisely to enhance user experience and performance.
