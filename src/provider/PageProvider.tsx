import * as React from 'react';
import { ReactNode } from 'react';

type PageContextType={
    nowPage:number;
    eachPage:number;
}

export const PageContext = React.createContext<PageContextType|null>(null);

type Prop = {
    children:ReactNode;
}



function PageProvider({children}:Prop) {

    const valueType:PageContextType={
        nowPage:1,
        eachPage:1
    }
    

    return ( 
        <>
            <PageContext.Provider value = {valueType}>
                {children}
            </PageContext.Provider>
        </>
     );
}

export default PageProvider;