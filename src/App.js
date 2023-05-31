import { Routes, Route } from 'react-router-dom'
import './App.scss';
import RatingCom from './components/rating/rating.component.jsx';
import PopUp from './components/popup/popup.component.jsx'
import { useState } from 'react';


function App() {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className="App">
      <Routes basename="/Rating-Component">
        <Route
          path="/"
          element={<RatingCom setClickedIndex={setClickedIndex} />}
        />
        <Route path="/rating" element={<PopUp clickedIndex={clickedIndex} />} />
      </Routes>
    </div>
  );
}

export default App;
