import './App.css';
import Card from './components/Card';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Logo />
      <h1>Testing Multiple Cards with different props</h1>
      <Card title="Card #1 Title" content="Card #1 Content" />
      <Card title="Card #2 Title" content="Card #2 Content" />
      <Card title="Card #3 Title" content="Card #3 Content" />
    </div>
  );
};

export default App;
