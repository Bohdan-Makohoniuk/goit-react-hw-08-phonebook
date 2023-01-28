import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBarStyled } from './AppBar.styled';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBarStyled>{isLoggedIn ? <UserMenu /> : <Navigation />}</AppBarStyled>
  );
};