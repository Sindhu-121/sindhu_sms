import React from 'react';

function GeneralForm({ onSubmit, fields }) {
  return (
    <form onSubmit={onSubmit} className="container mt-4">
      <div className="form-row">
        {fields.map((field, index) => {
          const colClass = field.fullWidth ? "col-12" : "col-md-6";
          return (
            <div key={index} className={`form-group ${colClass}`}>
              <label>{field.label}</label>
              {field.type === 'text' && (
                <input type="text" name={field.name} className="form-control" />
              )}
              {field.type === 'textarea' && (
                <textarea name={field.name} className="form-control"></textarea>
              )}
              {field.type === 'radio' && (
                <div>
                  {field.options.map((option, i) => (
                    <div key={i} className="form-check form-check-inline">
                      <input type="radio" name={field.name} value={option.value} className="form-check-input" />
                      <label className="form-check-label">{option.label}</label>
                    </div>
                  ))}
                </div>
              )}
              {field.type === 'checkbox' && (
                <div>
                  {field.options.map((option, i) => (
                    <div key={i} className="form-check form-check-inline">
                      <input type="checkbox" name={field.name} value={option.value} className="form-check-input" />
                      <label className="form-check-label">{option.label}</label>
                    </div>
                  ))}
                </div>
              )}
              {field.type === 'dropdown' && (
                <select name={field.name} className="form-control">
                  {field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'date' && (
                <input type="date" name={field.name} className="form-control" />
              )}
              {field.type === 'file' && (
                <input type="file" name={field.name} className="form-control-file" />
              )}
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default GeneralForm;
