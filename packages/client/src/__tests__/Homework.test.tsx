import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Homework } from '../pages/Homework/Homework';

// Мокаем API
const mockGetSubmissions = jest.fn().mockResolvedValue([]);
const mockSubmitHomework = jest.fn().mockResolvedValue({ id: '1', title: 'Test', description: 'Test', status: 'pending' });

jest.mock('../api/homeworkApi', () => ({
  getSubmissions: () => mockGetSubmissions(),
  submitHomework: (data: { title: string; description: string }) => mockSubmitHomework(data)
}));

// Мокаем alert
global.alert = jest.fn();

describe('Homework Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetSubmissions.mockResolvedValue([]);
    mockSubmitHomework.mockResolvedValue({ id: '1', title: 'Test', description: 'Test', status: 'pending' });
  });

  it('should render the form', async () => {
    await act(async () => {
      render(<Homework />);
    });
    expect(screen.getByText(/отправить задание/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/название/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/описание/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /отправить на проверку/i })).toBeInTheDocument();
  });

  it('should have input fields that accept values', async () => {
    await act(async () => {
      render(<Homework />);
    });
    const titleInput = screen.getByPlaceholderText(/название/i);
    const descInput = screen.getByPlaceholderText(/описание/i);
    
    fireEvent.change(titleInput, { target: { value: 'Test HW' } });
    fireEvent.change(descInput, { target: { value: 'Test Description' } });
    
    expect(titleInput).toHaveValue('Test HW');
    expect(descInput).toHaveValue('Test Description');
  });

  it('should submit homework successfully', async () => {
    mockSubmitHomework.mockResolvedValueOnce({ id: '1', title: 'My Homework', description: 'Solution', status: 'pending' });
    
    await act(async () => {
      render(<Homework />);
    });
    
    const titleInput = screen.getByPlaceholderText(/название/i);
    const descInput = screen.getByPlaceholderText(/описание/i);
    const submitButton = screen.getByRole('button', { name: /отправить на проверку/i });
    
    fireEvent.change(titleInput, { target: { value: 'My Homework' } });
    fireEvent.change(descInput, { target: { value: 'Solution description' } });
    
    await act(async () => {
      fireEvent.click(submitButton);
    });
    
    await waitFor(() => {
      expect(mockSubmitHomework).toHaveBeenCalledWith({
        title: 'My Homework',
        description: 'Solution description'
      });
      expect(global.alert).toHaveBeenCalledWith('✅ Задание отправлено на проверку!');
    });
  });

  it('should handle submit error', async () => {
    mockSubmitHomework.mockRejectedValueOnce(new Error('Network error'));
    
    await act(async () => {
      render(<Homework />);
    });
    
    const titleInput = screen.getByPlaceholderText(/название/i);
    const descInput = screen.getByPlaceholderText(/описание/i);
    const submitButton = screen.getByRole('button', { name: /отправить на проверку/i });
    
    fireEvent.change(titleInput, { target: { value: 'My Homework' } });
    fireEvent.change(descInput, { target: { value: 'Solution description' } });
    
    await act(async () => {
      fireEvent.click(submitButton);
    });
    
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('❌ Ошибка при отправке');
    });
  });

  it('should display submissions list', async () => {
    const mockSubmissions = [
      { id: '1', title: 'Test HW', description: 'Test Desc', status: 'pending', feedback: null, createdAt: new Date().toISOString() }
    ];
    mockGetSubmissions.mockResolvedValueOnce(mockSubmissions);
    
    await act(async () => {
      render(<Homework />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Test HW')).toBeInTheDocument();
    });
  });

  it('should display different status texts correctly', async () => {
    const mockSubmissions = [
      { id: '1', title: 'Pending HW', description: 'Desc', status: 'pending', feedback: null, createdAt: new Date().toISOString() },
      { id: '2', title: 'Approved HW', description: 'Desc', status: 'approved', feedback: 'Good job!', createdAt: new Date().toISOString() },
      { id: '3', title: 'Rejected HW', description: 'Desc', status: 'rejected', feedback: 'Need fixes', createdAt: new Date().toISOString() }
    ];
    mockGetSubmissions.mockResolvedValueOnce(mockSubmissions);
    
    await act(async () => {
      render(<Homework />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('⏳ На проверке')).toBeInTheDocument();
      expect(screen.getByText('✅ Одобрено')).toBeInTheDocument();
      expect(screen.getByText('❌ Требует доработки')).toBeInTheDocument();
      expect(screen.getByText('Good job!')).toBeInTheDocument();
      expect(screen.getByText('Need fixes')).toBeInTheDocument();
    });
  });
});
