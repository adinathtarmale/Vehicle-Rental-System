import axios from 'axios';

//create axios instance for the further REST API calls
export default axios.create({
  baseURL: 'http://localhost:9090/',
  headers: {
    'Content-Type': 'application/json',
  },
});
