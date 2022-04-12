import { useState } from 'react';
import { Student } from '../../types';

type Props = {
  initialValues?: Partial<Student>;
  onSubmit: (data: Partial<Student>) => void;
};

const StudentForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState<Partial<Student>>(
    initialValues ?? {
      firstName: '',
      lastName: '',
      score: 0,
      courses: [],
    }
  );

  const [courseName, setCourseName] = useState('');

  const changeField = (fieldName: keyof Student) => {
    return (e: any) => {
      setValues((v) => ({
        ...v,
        [fieldName]: e.target.value,
      }));
    };
  };

  const addCourse = () => {
    console.log(courseName);
    if (courseName && courseName.trim()) {
      setValues((v) => ({
        ...v,
        courses: [
          ...(v.courses ?? []),
          {
            name: courseName,
          },
        ],
      }));
      setCourseName('');
    }
  };

  const sendForm = () => {
    onSubmit(values);
  };

  return (
    <div>
      <div>
        <label>First name</label>
        <input type={'text'} value={values?.firstName} onChange={changeField('firstName')} />
      </div>
      <div>
        <label>Last name</label>
        <input type={'text'} value={values?.lastName} onChange={changeField('lastName')} />
      </div>
      <div>
        <label>Score</label>
        <input type={'text'} value={values?.score} onChange={changeField('score')} />
      </div>
      <div>
        <label>Courses</label>
        <div>
          <input type={'text'} value={courseName} onChange={(e) => setCourseName(e.target.value)} />
          <button onClick={addCourse}>Add</button>
        </div>
        <ul>
          {values.courses?.map((course, idx) => (
            <li key={`${course}-${idx}`}>{course.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={sendForm}>Submit</button>
    </div>
  );
};

export default StudentForm;
