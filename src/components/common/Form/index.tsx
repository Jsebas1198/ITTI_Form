import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  userId: number;
  title: string;
  completed: boolean;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="number" className={`form-control ${errors.userId ? 'is-invalid' : ''}`} {...register('userId', { required: true })} />
        {errors.userId && <div className="invalid-feedback">User ID is required</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} {...register('title', { required: true })} />
        {errors.title && <div className="invalid-feedback">Title is required</div>}
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" className={`form-check-input ${errors.completed ? 'is-invalid' : ''}`} {...register('completed')} />
        <label className="form-check-label" htmlFor="completed">Completed</label>
        {errors.completed && <div className="invalid-feedback">Invalid completed value</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;