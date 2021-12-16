import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

const initialForm = {
  name: "",
  description: "",
};

const MyComponent = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState(initialForm);
  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 무슨 타입으로 해야될지 모르면 일단 any 설정
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input name="name" value={name} onChange={onChange} />
      <label>description</label>
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
};

export default MyComponent;
