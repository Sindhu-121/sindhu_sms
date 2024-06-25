import React from 'react';
import GeneralForm from './GeneralForm';

function AddTeacher() {
  const fields = [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'text', name: 'subject', label: 'Subject' },
    { type: 'textarea', name: 'bio', label: 'Bio' },
    { type: 'radio', name: 'gender', label: 'Gender', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
    { type: 'checkbox', name: 'skills', label: 'Skills', options: [{ value: 'math', label: 'Math' }, { value: 'science', label: 'Science' }] },
    { type: 'dropdown', name: 'department', label: 'Department', options: [{ value: 'science', label: 'Science' }, { value: 'arts', label: 'Arts' }] }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <GeneralForm onSubmit={handleSubmit} fields={fields} />
    </div>
  );
}

export default AddTeacher;
