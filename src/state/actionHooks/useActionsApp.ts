import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useStateDispatch } from '@/state';
import { slice } from '@/state/reducers/app';

const useActionsApp = () => {
  const { actions } = slice;
  const dispatch = useStateDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export default useActionsApp;

