import { FC, useRef} from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

interface Formfield{
  label: string;
  value: string;
}

interface DynamicForms{
  fields : Formfield[];
  onsubmit: (fields: Formfield[]) => void;
}

const DynamicForm: FC<DynamicForms> = ({ fields, onsubmit }) => {
  
  const inputRef = useRef<Formfield[]>([...fields]);

  const handleChange = (index: number, value: string) => {
    inputRef.current[index].value = value; // Изменяем значение в ref
  };

  const handleSubmit = () => {
    onsubmit([...inputRef.current]); // Передаем копию данных формы
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index} className="p-field">
          <label htmlFor={field.label}>{field.label}</label>
          <InputText
            id={field.label}
            defaultValue={field.value} // Используем defaultValue для первоначального значения
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <Button label="Отправить" onClick={handleSubmit} />
    </div>
  );
}

export default DynamicForm;