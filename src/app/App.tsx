import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import DynamicForm from "../Components/DynamicForm";
import { Formfield } from '../types/types';

function App() {
  const [isDialogueActive, setDialogueActive] = useState<boolean>(false);
  const openDialogue = () => {
    setDialogueActive(true);
  }

  const closeDialogue = () => {
    setDialogueActive(false);
  }



  const initialFields: Formfield[] = [
    { label: "Логин", value: "" },
    { label: "Пароль", value: "" }
  ];

  const [fields, setFields] = useState<Formfield[]>(initialFields);

  

  const handleSubmit = (submittedFields: Formfield[]) => {
    console.log("Выводной список:", submittedFields);
    setFields(submittedFields);
    closeDialogue();
  };

  return (
    <div className="App">
      <Button label="Открыть диалог" onClick={openDialogue} />

      <Dialog
        header="Форма"
        visible={isDialogueActive}
        style={{ width: "50vw" }}
        onHide={closeDialogue}
      >
        <DynamicForm fields={fields} onsubmit={handleSubmit} />
      </Dialog>
    </div>
  );
}

export default App;
