import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from './Pages';
import * as S from './style';

function App() {
  return (
    <div className="App">
      <S.Body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<P.Main />}></Route>
            <Route
              path="/login"
              element={<P.Login />}
            ></Route>
            <Route path='/login/success' element={<P.SuccessLogin />}></Route>
          </Routes>
        </BrowserRouter>
      </S.Body>
    </div>
  );
}

export default App;
