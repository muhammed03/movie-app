import { useNavigate } from 'react-router-dom';
import FacultyForm from '../../../components/faculty-form/FacultyForm';
import AppService from '../../../services/app-service';
import { Faculty } from '../../../types';

const FacultyCreateForm = () => {
  const appService = new AppService();
  const navigate = useNavigate();

  const onFormSubmit = (data: Partial<Faculty>) => {
    appService.createFaculty(data).then((res) => {
      if (res.id) {
        navigate('/faculties');
      }
    });
  };

  return (
    <div>
      <h2>Create Faculty</h2>
      <FacultyForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default FacultyCreateForm;
