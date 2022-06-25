import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HotTopic from './component/HotTopic'
import Header from './component/Header';
import CardList from './component/CardList';
import CardDetail from './component/CardDetail'

function App() {
  const title = 'Blog'
  return (
    <div>
      <BrowserRouter>
        <Header title={title} />
          <Routes>
            <Route path='/' element={<HotTopic />} />
            <Route path='/cardList' element={<CardList />} />
            <Route path='/cardDetail'>
              <Route path='cardDetail/:id' element={<CardDetail />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
