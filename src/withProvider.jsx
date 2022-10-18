import { useContext } from 'react';
import { AlertContext, CartContext, UserContext } from './Contexts';

function withProvider(provider) {
  function MyHOC(IncomingComponent) {
    function OutGoingComponent(props) {
      const contextData = useContext(provider);
      return <IncomingComponent {...props} {...contextData} />;
    }
    return OutGoingComponent;
  }
  return MyHOC;
}

export default withProvider;

export const withUser = withProvider(UserContext);
export const withAlert = withProvider(AlertContext);
export const withCart = withProvider(CartContext);
