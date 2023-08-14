import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.25rem;
  border: 2px dashed #FC8019;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
`;

interface TextFieldProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Add onChange handler
}

const TextField: React.FC<TextFieldProps> = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <TextFieldContainer>
      <Label>{label}</Label>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </TextFieldContainer>
  );
};

export default TextField;
