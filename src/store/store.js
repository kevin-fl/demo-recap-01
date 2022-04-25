const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        //Appel implicite de "CombineReducer"
        counter: counterReducer,
        user: userReducer,

    },
    //Middleware: appel implicite de "ApplyMiddleware" et de "compose"
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), /*les autres middlewares */],
    //Ajout des devtools simplifier :D
    devTools: process.env.NODE_ENV === 'development'


});

export default store;