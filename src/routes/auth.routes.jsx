
    import { Navigate, Route, Routes } from 'react-router-dom';

    import { SignIn } from '../pages/SignIn';
    import { SignUp } from '../pages/SignUp';


    export function AuthRoutes(){
        const user = localStorage.getItem("@rocketNotes:user");
        return(
        <Routes>
            <Route path='/' element={ <SignIn/> } ></Route>
            <Route path='/register' element={ <SignUp/> } ></Route>
            {!user && <Route path='*' element={<Navigate to={"/"}/>}></Route>}
        </Routes>
        )
    }