import React, { useState, useEffect, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "./styles/button.style";

const Modal = ({ show, data, onSubmit, onCancel, editUser }) => {
  useEffect(() => {
    if (editUser) setFormData(editUser);
  }, [editUser]);

  const notesRef = useRef();
  const initialFormState = () => {
    debugger;
    return editUser
      ? { id: null, name: "silly billy", age: "123", notes: ["sdfadsf"] }
      : { id: null, name: "", age: "", notes: [] };
  };

  const [formData, setFormData] = useState(initialFormState);

  const submitData = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onCancel();
  };

  const swapArrayLocs = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  function addNote() {
    const note = notesRef.current.value;
    if (note === "") return;
    formData.notes.push(notesRef.current.value);
    debugger;
    swapArrayLocs(formData.notes, 0, formData.notes.length - 1);
  }

  return show ? (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={submitData}>
          <h3>{editUser ? "Edit Details" : "new details"} for User - {formData.name} </h3>
          <div className="modal-section">
            <label>Notes</label>
            <input
              type="text"
              name="notes"
              ref={notesRef}
              defaultValue=""
              autoFocus
              autoComplete="off"
            />

            {formData.notes.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </div>
          <PrimaryButton
            backgroundColor="#005bc0"
            type="submit"
            onClick={addNote}
          >
            Submit
          </PrimaryButton>
          <SecondaryButton type="button" onClick={onCancel}>
            Cancel
          </SecondaryButton>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
