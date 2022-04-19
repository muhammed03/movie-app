import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentForm from '../../../components/student-form/StudentForm';
import { StudentContext } from '../../../contexts/student-context/StudentContext';
import AppService from '../../../services/app-service';
import { Student } from '../../../types';
import { ToasterContext } from '../../../contexts/toaster-context/ToasterContext';

const StudentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student>();
  const { dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToasterContext);

  useEffect(() => {
    if (!id) {
      return;
    }
    AppService.getStudent(id).then((res) => {
      setStudent(res);
    });
  }, [id]);

  const onSubmit = (data: Partial<Student>) => {
    console.log(data);
    if (!id) {
      return;
    }

    AppService.editStudent(id, data)
      .then(() => {
        dispatch({ type: 'EDIT_STUDENT', payload: 'Student was edited!' });
        navigate(`/students/${id}`);
        toastDispatch({
          type: 'SUCCESS',
          payload: {
            message: 'Student was successfully edited',
          },
        });
      })
      .catch(() => {
        toastDispatch({
          type: 'ERROR',
          payload: {
            message: 'Student edition was failed',
          },
        });
      });
  };

  return (
    <div>
      <h2>Edit student</h2>
      {student && <StudentForm initialValues={student} onSubmit={onSubmit} />}
    </div>
  );
};

export default StudentEdit;
