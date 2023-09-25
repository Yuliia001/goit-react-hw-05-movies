import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;
export const NaviLink = styled(NavLink)`
  font-size: 26px;
  color: #00080d;
`;
export const Wrapper = styled.div`
  padding: 30px 30px;
`;
