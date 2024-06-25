import React from 'react';
import GeneralForm from './GeneralForm';

function AddStudent() {
  const fields = [
    { type: 'text', name: 'firstName', label: 'First Name' },
    { type: 'text', name: 'lastName', label: 'Last Name' },
    { type: 'radio', name: 'gender', label: 'Gender', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
    { type: 'date', name: 'dob', label: 'Date of Birth' },
    { type: 'text', name: 'motherName', label: 'Mother Name' },
    { type: 'text', name: 'fatherName', label: 'Father Name' },
    { type: 'text', name: 'phoneNumber', label: 'Phone Number' },
    { type: 'text', name: 'alternateNumber', label: 'Alternate Number' },
    { type: 'text', name: 'class', label: 'Class' },
    { type: 'dropdown', name: 'section', label: 'Section', options: [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }] },
    { type: 'text', name: 'aadharNumber', label: 'Aadhar Number' },
    { type: 'textarea', name: 'address', label: 'Address' },
    { type: 'file', name: 'photo', label: 'Photo' },
    { type: 'date', name: 'joiningDate', label: 'Joining Date' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
 return (
    <div className="container mt-4 form-container">
      <h2 className="mb-4">Registration Form</h2>
      <GeneralForm onSubmit={handleSubmit} fields={fields} />
    </div>
  );
}

export default AddStudent;
