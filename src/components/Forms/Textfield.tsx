import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  div {
    margin-top: 0.5rem;
  }
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

interface InputProps {
  error?: boolean;
}

const Input = styled.input`
  font-size: 1.25rem;
  border: 2px dashed #FC8019;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  border-color: ${({ error }) => (error ? 'red' : '#FC8019')};
`;

interface TextFieldProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const TextField: React.FC<TextFieldProps> = ({label, type = 'text', name, value, onChange, error}) => {
  return (
    <TextFieldContainer>
      <Label>{label}</Label>
      <Input type={type} name={name} value={value} onChange={onChange} error={!!error}/>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </TextFieldContainer>
  );
};

export default TextField;
