import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppService from '../../../services/app-service';

import { Faculty } from '../../../types';
import app from "../../../App";

const FacultyList = () => {
  const appService = new AppService();

  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    appService.getFaculties().then((res) => {
      setFaculties(res);
    });
  }, []);

  return (
    <div>
      <h2>Faculty</h2>
      <Link to="/faculties/create">Create</Link>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>
                <Link to={`/faculties/edit/${faculty.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyList;
