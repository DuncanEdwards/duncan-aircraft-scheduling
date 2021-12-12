import React from 'react';

export const IsAutoContext = React.createContext<{ isAuto: boolean; setIsAuto: (isAuto: boolean) => void } | undefined>(
    undefined
);
