import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface HomeworkSubmission {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  feedback: string | null;
  createdAt: string;
}

export const getSubmissions = async (): Promise<HomeworkSubmission[]> => {
  const response = await axios.get(`${API_URL}/homework`, {
    headers: { 'x-user-id': localStorage.getItem('userId') || 'student10' }
  });
  return response.data;
};

export const submitHomework = async (data: {
  title: string;
  description: string;
}): Promise<HomeworkSubmission> => {
  const response = await axios.post(`${API_URL}/homework`, data, {
    headers: { 'x-user-id': localStorage.getItem('userId') || 'student10' }
  });
  return response.data;
};
