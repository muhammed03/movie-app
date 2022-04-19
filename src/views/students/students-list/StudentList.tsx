import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../../../contexts/student-context/StudentContext';
import AppService from '../../../services/app-service';
import { ToasterContext } from '../../../contexts/toaster-context/ToasterContext';

import './style.scss';
import { Student } from '../../../types';

const StudentsList = () => {
  const { state, dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToasterContext);

  useEffect(() => {
    AppService.getStudents().then((res) => {
      dispatch({ type: 'GET_STUDENTS', payload: res });
    });
  }, []);

  const onDelete = (id: string, name: string) => {
    AppService.delStudent(id)
      .then((res) => {
        const updatedStudentList = state.students.filter((student: Student) => student.id !== id);
        dispatch({ type: 'UPDATE_STUDENT_LIST', payload: updatedStudentList });
        toastDispatch({
          type: 'SUCCESS',
          payload: {
            message: 'Student was successfully deleted',
          },
        });
      })
      .catch(() => {
        toastDispatch({
          type: 'ERROR',
          payload: {
            message: 'Student deletion was failed',
          },
        });
      });
  };

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
              <td>
                <button onClick={() => onDelete(student.id, student.firstName)}>
                  Delete Student
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
