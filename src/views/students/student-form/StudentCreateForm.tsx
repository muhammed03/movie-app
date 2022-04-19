import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../../../components/student-form/StudentForm';
import { StudentContext } from '../../../contexts/student-context/StudentContext';
import AppService from '../../../services/app-service';
import { Student } from '../../../types';
import { ToasterContext } from '../../../contexts/toaster-context/ToasterContext';

const StudentCreate = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToasterContext);

  const onFormSubmit = (data: Partial<Student>) => {
    AppService.createStudent(data)
      .then((res) => {
        dispatch({ type: 'CREATE_STUDENT', payload: 'Student was created!' });
        if (res.id) {
          navigate('/students');
        }
        toastDispatch({
          type: 'SUCCESS',
          payload: {
            message: 'Student was successfully created',
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'CREATE_STUDENT',
          payload: 'Student creation failed!',
        });
        toastDispatch({
          type: 'ERROR',
          payload: {
            message: 'Something has wrong',
          },
        });
      });
  };

  return (
    <div>
      <h2>Create student</h2>
      <StudentForm onSubmit={onFormSubmit} />
      {state.message}
    </div>
  );
};

export default StudentCreate;
