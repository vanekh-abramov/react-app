import Content from './Components/Content/Content';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News'
import mainStyles from './mainStyles.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={mainStyles.container}>
        <Header />
        <div className={mainStyles.inner_container}>
          <Navbar />
          <div className={mainStyles.content_wrapper}> 
            <Routes>
              <Route path="/profile" element={<Content />}/>
              <Route path="/dialogs" element={<Dialogs />}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
