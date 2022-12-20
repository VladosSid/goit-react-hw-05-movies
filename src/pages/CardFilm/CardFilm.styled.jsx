import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 20px 20px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  color: #000;
  background: #f96801;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;

  :hover,
  :focus {
    scale: 0.8;
  }
`;
