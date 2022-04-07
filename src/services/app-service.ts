import axios from 'axios';
import { Movie } from '../types';

export default class AppService {
  _baseUrl = 'https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab';

  getAllMovies(): Promise<Movie[]> {
    return axios.get(`${this._baseUrl}/movies.json`).then((res) => res.data);
  }

  getMovie(id: string): Promise<Movie> {
    return axios.get(`${this._baseUrl}/movies/${id}`).then((res) => res.data);
  }
}
