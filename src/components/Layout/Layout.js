import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, NaviLink, Navigation, Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation>
          <List>
            <li>
              <NaviLink to="/">Home</NaviLink>
            </li>
            <li>
              {' '}
              <NaviLink to="/movies">Movie</NaviLink>
            </li>
          </List>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};
