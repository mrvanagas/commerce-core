import { forwardRef } from 'react';

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder: string;
  className?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type = 'text', placeholder, className = '', ...rest }, ref) => {
    return (
      <div>
        <label className='sr-only'>{label}</label>
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          {...rest}
          className={`p-4 w-full rounded-md border border-neutral-550 h-[52px] ${className}`}
        />
      </div>
    );
  },
);

export default InputField;
