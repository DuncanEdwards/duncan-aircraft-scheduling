import { FC, useState } from 'react';
import { IsAutoContext } from './IsAutoContext';

export const IsAutoProvider: FC = ({ children }) => {
    const [isAuto, setIsAuto] = useState<boolean>(false);

    const mySetIsAuto = (isAuto: boolean) => setIsAuto(isAuto);

    const value = { isAuto, setIsAuto: mySetIsAuto };
    return <IsAutoContext.Provider value={value}>{children}</IsAutoContext.Provider>;
};
