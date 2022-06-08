import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from '../helpers/context';
import Layout from '../containers/Layuot';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Request from '../pages/Request';
import Book from '../pages/Book';
import NotFound from '../pages/NotFound';

function App() {
  console.log(process.env.REACT_APP_LABEL);
  const [session, setSession] = useState({});
  // const [session, setSession] = useState({
  //   "id": 1,
  //   "username": "Lex Ortiz",
  //   "email": "lortiz@gmail.com",
  //   "role": 2,
  //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkxleCIsImxhc3RfbmFtZSI6Ik9ydGl6IiwiZW1haWwiOiJsb3J0aXpAZ21haWwuY29tIiwicm9sZV9pZCI6MSwiaWF0IjoxNjU0NTExMzM5LCJleHAiOjE2NTQ1MTQ5Mzl9.sk7Blpeaoi0TspJQTHT7MDNkwRJBM8_C-YQ_E6T0s-A"
  // });

  window.onbeforeunload = e => ('You are about to log out');

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{session, setSession}}>
        <Layout>
          <Routes>
            <Route exact path='/' element={ <Login/> } />
            <Route exact path='/login' element={ <Login/> } />
            <Route exact path='/signup' element={ <Signup roles={[2]} /> } />
            <Route exact path='/books' element={ <Home roles={[1, 2]} /> } />
            <Route exact path='/requests' element={ <Request roles={[1, 2]} /> } />
            <Route exact path='/addBook' element={ <Book roles={[2]} /> } />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Layout>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
