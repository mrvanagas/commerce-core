interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  className = '',
}) => {
  return (
    <div>
      <label className='sr-only'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`p-4 w-full rounded-md border border-neutral-550 h-[52px] ${className}`}
      />
    </div>
  );
};

export default InputField;
