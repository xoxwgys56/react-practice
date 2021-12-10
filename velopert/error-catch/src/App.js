import logo from './logo.svg';
import './App.css';
// import User from './User';
import Users from './Users';
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: 'developer'
  };
  const users = [user, {
    id: 2,
    username: 'designer'
  }];

  return (
    // <User user={undefined}/>
      <ErrorBoundary>
        <Users/>
      </ErrorBoundary>
  );
}

export default App;
