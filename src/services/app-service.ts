import axios from 'axios';
import { Student } from '../types';

export default class AppService {
  API_ROOT = 'https://ca-api.witharts.kz';

  getStudents = () => {
    return axios.get<Student[]>(`${this.API_ROOT}/students`).then((res) => res.data);
  };

  getStudent = (id: string) => {
    return axios.get<Student>(`${this.API_ROOT}/students/${id}`).then((res) => res.data);
  };

  createStudent = (data: Partial<Student>) => {
    return axios.post<Student>(`${this.API_ROOT}/students`, data).then((res) => res.data);
  };

  editStudent = (id: string, data: Partial<Student>) => {
    return axios.put<Student>(`${this.API_ROOT}/students/${id}`, data).then((res) => res.data);
  };

  delStudent = (id: string) => {
    return axios.delete(`${this.API_ROOT}/students/${id}`).then((res) => res.data);
  };
}
