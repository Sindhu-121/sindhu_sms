import React from 'react';
import GeneralForm from './GeneralForm';

function AddAdmin() {
  const fields = [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'text', name: 'role', label: 'Role' },
    { type: 'textarea', name: 'description', label: 'Description' },
    { type: 'radio', name: 'accessLevel', label: 'Access Level', options: [{ value: 'full', label: 'Full' }, { value: 'limited', label: 'Limited' }] },
    { type: 'checkbox', name: 'permissions', label: 'Permissions', options: [{ value: 'read', label: 'Read' }, { value: 'write', label: 'Write' }] },
    { type: 'dropdown', name: 'department', label: 'Department', options: [{ value: 'hr', label: 'HR' }, { value: 'it', label: 'IT' }] }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <GeneralForm onSubmit={handleSubmit} fields={fields} />
    </div>
  );
}

export default AddAdmin;
