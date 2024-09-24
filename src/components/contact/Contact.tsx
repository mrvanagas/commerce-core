import InputField from '../../shared/input/Input';

const Contact: React.FC = () => {
  return (
    <div className='bg-white border-t border-b border-neutral-550 p-4'>
      <h2 className='text-2xl font-bold mb-4 text-neutral-450'>Contact</h2>
      <InputField label='Email Address' placeholder='Email Address' />
    </div>
  );
};

export default Contact;
