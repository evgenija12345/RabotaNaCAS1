import logo from './logo.svg';
import './App.css';
import './App.css';
import Hello from './components/Hello';
import Profile from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalEvent from './components/FunctionalEvent';
import ClassEvent from './components/ClassEvent';

function App() {
  return (
    <div className="App">
     <Hello></Hello>
     <Profile name="Evgenija" lastname="Gjurovska"/>
     <Message messagetxt="Ova e poraka za Zdravo!"/>
     <Counter/>
    </div>
  );
}

export default App;
