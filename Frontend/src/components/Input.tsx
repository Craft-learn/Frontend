interface InputProps {
    placeholder: string;
    type: string;
    value?: string | number;
    min?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }
  
  const Input = ({
    placeholder,
    type,
    value,
    onChange,
    min,
    onKeyDown,
  }: InputProps) => {
    return (
      <div className="relative flex w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          min={min}
          onChange={onChange}
          onKeyDown={onKeyDown}
        className="w-full font-normal  pl-4 pr-8 h-[56px] p-[8px]  mt-[5px] mb-3 border rounded-md border-[#D0D5DD] shadow-md shadow-white  placeholder:text-sm focus:outline-font-primary"
      />
    
    </div>
  );
};
export default Input;