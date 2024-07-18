import axios from 'axios';

const API_URL = '/api/';

export interface Worker {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  note?: string;
}

export const fetchWorkers = async (): Promise<Worker[]> => {
  try {
    const response = await axios.get<Worker[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching workers:', error);
    throw error;
  }
};

export const fetchWorkerById = async (id: string): Promise<Worker> => {
  try {
    const response = await axios.get<Worker>(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching worker:', error);
    throw error;
  }
};

export const createWorker = async (workerData: Omit<Worker, 'id' | 'code'>): Promise<Worker> => {
  try {
    console.log('Creating worker with data:', workerData);
    const response = await axios.post<Worker>(API_URL, workerData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating worker:', error);
    throw error;
  }
};
