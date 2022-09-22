import React from 'react';

function Input({
  id,
  name,
  value,
  onChange,
  onBlur,
  type,
  placeholder,
  label,
  touched,
  error,
  className,
}) {
  return (
    <>
      <div>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          className={
            'w-64 px-8 py-2 border  border-gray-400 rounded-md outline-none sm:w-96 md:w-80 ' +
            {} +
            { className }
          }
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        {touched && error && <div className="text-red-600">{error}</div>}
      </div>
    </>
  );
}

export default Input;
