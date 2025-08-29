// ^ using selectors

import { RecoilRoot, atom, useRecoilValue, useSetRecoilState, selector } from 'recoil';
import './App.css';

const countAtom = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const evenSelector = selector({
  key: 'isEven',
  get: ({ get }) => {
    const value = get(countAtom);
    return value % 2 === 0;
  },
});

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
      <IsEven />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countAtom);
  return <button onClick={() => setCount(c => c - 1)}>Decrease</button>;
}

function Increase() {
  const setCount = useSetRecoilState(countAtom);
  return <button onClick={() => setCount(c => c + 2)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(countAtom);
  return <p>Count: {countValue}</p>;
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "Even" : "Odd"}
  </div>
}

// App Component
const App = () => {
  return (
    <div className="container">
      <h1>Recoil Counter Example</h1>
      <Parent />
    </div>
  );
};

export default App;