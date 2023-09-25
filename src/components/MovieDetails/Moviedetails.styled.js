import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  padding: 10px 22px;
  background-color: #ebeff2;
  max-width: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  margin-bottom: 24px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px;
  gap: 20px;
`;
export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: #00080d;
`;
