import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
  padding: 15px 20px;
  background: #f96801;
  border-bottom: 3px solid #6a1191;
  box-shadow: 1px 4px 19px -1px rgba(249, 104, 1, 0.75);
  -webkit-box-shadow: 0px 4px 19px -1px rgba(249, 104, 1, 0.75);
  -moz-box-shadow: 1px 4px 19px -1px rgba(249, 104, 1, 0.75);
`;

export const Link = styled(NavLink)`
  font-size: 35px;
  text-decoration: none;
  color: #6a1191;
padding: 5px 10px;
border: 2px solid #6a1191;
    border-radius: 5px;

    &.active {
      font-size: 25px;
      color: #000;
      border: 1px solid #000;
    }

  &:hover:not(.active),
  &:focus:not(.active) {
    border-color: #000;
    box-shadow: 0px 2px 30px 1px rgba(126,9,178,0.75);
-webkit-box-shadow: 0px 2px 30px 1px rgba(126,9,178,0.75);
-moz-box-shadow: 0px 2px 30px 1px rgba(126,9,178,0.75);
  }
}`;
