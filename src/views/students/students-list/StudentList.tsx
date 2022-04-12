import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../../../contexts/student-context/StudentContext';
import AppService from '../../../services/app-service';

import './style.scss';

const StudentsList = () => {
  const appService = new AppService();
  const { state, dispatch } = useContext(StudentContext);

  useEffect(() => {
    appService.getStudents().then((res) => {
      dispatch({ type: 'GET_STUDENTS', payload: res });
    });
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <Link to="/students/create">Create</Link>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.score}</td>
              <td>{student.courses?.map((course) => course.name).join(', ')}</td>
              <td>
                <Link className="view-link" to={`/students/${student.id}`}>
                  View
                </Link>
                <Link to={`/students/edit/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
