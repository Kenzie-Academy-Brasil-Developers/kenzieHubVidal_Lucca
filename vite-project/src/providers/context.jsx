import { createContext } from "react";
 const ProtectContext=createContext ({});

 const ProtectProvider = ({children}) =>{
return(

<ProtectContext.Provider value= {{}}>

{children}
</ProtectContext.Provider>

)
};
export {ProtectContext, ProtectProvider}