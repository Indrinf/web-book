import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Novel from './components/Novel';
import Komik from './components/Komik';
import './style/landingPage.css';

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}
      <div className='novel'>
        <Novel />
      </div>
      <div className='komik'>
        <Komik />
      </div>
    </div>
  );
}

export default App;
