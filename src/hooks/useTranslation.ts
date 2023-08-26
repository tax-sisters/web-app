'use client';

import { useStateSelector } from '@/state';
import locData, { LocStrings } from '@/util/localisation';

const useTranslation = () => {
  const lng = useStateSelector(({ app }) => app.lng);

  const translate = (key: keyof LocStrings) => {
    return locData[lng][key];
  };
  return { translate };
};

export default useTranslation;
