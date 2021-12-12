import React, { Dispatch, FC, SetStateAction, useState } from 'react';

export const IsAutoContext = React.createContext<
    { isAuto: boolean; setIsAuto: Dispatch<SetStateAction<boolean>> } | undefined
>(undefined);

export const IsAutoProvider: FC = (children) => {
    const [isAuto, setIsAuto] = useState(false);

    const value = { isAuto, setIsAuto };
    return <IsAutoContext.Provider value={value}>{children}</IsAutoContext.Provider>;
};
