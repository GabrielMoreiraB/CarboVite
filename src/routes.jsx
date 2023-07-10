import Menu from './components/Menu';
import Footer from './components/Footer'

import Cardapio from './pages/Cardapio'
import Inicio from './pages/Inicio'
import PaginaPadrao from './components/PaginaPadrao'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'
import Prato from './pages/Prato'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRouter = () => {
    return ( 
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Inicio/>}/>   
                    <Route path="cardapio" element={<Cardapio/>}/> 
                    <Route path="sobre" element={<Sobre/>}/>  
                </Route>
                <Route path="*" element={<NotFound/>}/> 
                <Route path="prato/:id" element={<Prato/>}/>
            </Routes>
            <Footer/>
        </Router>
     );
}
 
export default AppRouter;
