import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogedIn, setLogedIn] = useState(false);

    const login = ( email, password) =>  {
        if( email !== 'al-bat-ros@mail.ru' || password !== '123456' ) {
            alert('wrong login or password');
        }  else {
            setLogedIn(true)
        } 
    }

    const providerValue = {
        isLogedIn, login
    }

    return (<>
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
        </>)
}


// export const WithAuth = (WrapComponent) => {
//     return class extends React.Component {
//         render() {
//             return (
//                 <AuthContext.Consumer>
//                     {(value) => <WrapComponent {...value} {...this.props}/>}
//                 </AuthContext.Consumer>
//             )
//         }
//     }
// }

