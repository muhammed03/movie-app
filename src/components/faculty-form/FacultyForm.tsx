import { useState } from 'react';
import { Faculty } from '../../types';

type Props = {
  initialValue?: Partial<Faculty>;
  onSubmit: (data: Partial<Faculty>) => void;
};

const FacultyForm: React.FC<Props> = ({ initialValue, onSubmit }) => {
  const [value, setValue] = useState<Partial<Faculty>>(
    initialValue ?? {
      name: '',
    }
  );

  const changeField = () => {
    return (e: any) => {
      setValue({
        name: e.target.value,
      });
    };
  };

  const sendForm = () => {
    onSubmit(value);
  };

  return (
    <div>
      <div>
        <label>Faculty name</label>
        <input type={'text'} value={value?.name} onChange={changeField()} />
      </div>
      <button onClick={sendForm}>Submit</button>
    </div>
  );
};

export default FacultyForm;
