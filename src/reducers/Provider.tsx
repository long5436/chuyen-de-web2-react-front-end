import { useReducer, ReactNode } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';

type Props = {
  children: ReactNode;
};

function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
