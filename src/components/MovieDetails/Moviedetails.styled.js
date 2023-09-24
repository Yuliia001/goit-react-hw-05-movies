import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  padding: 10px 22px;
  background-color: #ebeff2;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px;
`;
