import styled from 'styled-components';

const PrimaryButton = styled.button`
  border-radius: 10px;
  background: #FC8019;
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #FFA94D;
  }
`;

export default PrimaryButton;

