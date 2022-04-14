import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FacultyForm from '../../../components/faculty-form/FacultyForm';
import AppService from '../../../services/app-service';
import { Faculty } from '../../../types';

const FacultyEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState<Faculty>();

  const appService = new AppService();

  useEffect(() => {
    if (!id) {
      return;
    }
    appService.getFaculty(id).then((res) => {
      setFaculty(res);
    });
  }, [id]);

  const onSubmit = (data: Partial<Faculty>) => {
    if (!id) {
      return;
    }

    appService.editFaculty(id, data).then(() => {
      navigate(`/faculties`);
    });
  };

  return (
    <div>
      <h2>Edit faculty</h2>
      {faculty && <FacultyForm initialValue={faculty} onSubmit={onSubmit} />}
    </div>
  );
};

export default FacultyEditForm;
