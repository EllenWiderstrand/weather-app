import "./App.css";

interface InputProps {
  label: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ label, id, value, setValue }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="location-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={handleChange} type="text" />
    </div>
  );
};

export default Input;
