import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  height: 80px;
  padding: 15px 20px;
  background: #f96801;
  border-bottom: 2px solid #b94d00;
  box-shadow: 1px 4px 19px -1px rgba(249, 104, 1, 0.75);
  -webkit-box-shadow: 0px 4px 19px -1px rgba(249, 104, 1, 0.75);
  -moz-box-shadow: 1px 4px 19px -1px rgba(249, 104, 1, 0.75);
`;

export const Link = styled(NavLink)``;
