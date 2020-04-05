import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const initialSate = {
        adminDetails: {
            id: "mittal.karan60@gmail.com",
            phone: "9958708339",
            password: "12345678",
        },



        users: [],
        books: [],
    };

    const [state, setState] = React.useState(initialSate);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
};

