import React from 'react';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
      
    </div>
  );
};

function Card1() {
  return (
    <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
      hi there
    </div>
  );
}

function Card2() {
  return (
    <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>
      hello
    </div>
  );
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        // eslint-disable-next-line react/prop-types
        return this.props.children; 
    }
}



export default App;
