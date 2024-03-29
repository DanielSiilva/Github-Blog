import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route  path="/" element ={<Home/>} />
                <Route path="/post/:id"  element={<Details/>}/>
            </Route>

        </Routes>
    )
}