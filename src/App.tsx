import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Main from './views/main/main';
import Login from './views/login/login';
import { StudentProvider } from './contexts/student-context/StudentContext';
import StudentsList from './views/students/students-list/StudentList';
import StudentDetails from './views/students/student-details/StudentDetails';
import StudentCreateForm from './views/students/student-form/StudentCreateForm';
import StudentEditForm from './views/students/student-form/StudentEditForm';
import FacultyList from './views/faculties/faculty-list/FacultyList';
import FacultyEditForm from './views/faculties/faculty-form/FacultyEditForm';
import FacultyCreateForm from './views/faculties/faculty-form/FacultyCreateForm';

import LoginContext, { userStates } from './contexts/login-context/login-context';

const App = () => {
  const [userState, setUserState] = useState<string>(userStates.LOGGED_OUT);

  const userHandler = (user: string) => {
    setUserState(user);
  };

  return (
    <Router>
      <StudentProvider>
        <div className="App">
          <LoginContext.Provider value={{ userState, userHandler }}>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path={'/students'} element={<StudentsList />} />
              <Route path={'/students/:id'} element={<StudentDetails />} />
              <Route path={'/students/create'} element={<StudentCreateForm />} />
              <Route path={'/students/edit/:id'} element={<StudentEditForm />} />
              <Route path={'/faculties'} element={<FacultyList />} />
              <Route path={'/faculties/create'} element={<FacultyCreateForm />} />
              <Route path={'/faculties/edit/:id'} element={<FacultyEditForm />} />
              <Route path="*" element={<h1>404, Not Found</h1>} />
            </Routes>
          </LoginContext.Provider>
        </div>
      </StudentProvider>
    </Router>
  );
};

export default App;
