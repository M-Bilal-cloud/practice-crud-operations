import {createBrowserRouter} from 'react-router-dom';
import Layouts from '../components/Layouts';
import Home from '../screens/Home';
import Products from '../screens/Products';
import UpdateProduct from '../screens/UpdateProduct';
import AddProduct from '../screens/AddProduct';
import Return from '../screens/Return';
import CreateInvoice from '../screens/CreateInvoice';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children:[
            {index: true, element: <Home />},
            {path:'products', element: <Products />},
            {path:'products/update', element: <UpdateProduct />},
            {path:'products/add', element: <AddProduct />},
            {path:'return', element: <Return />},
            {path:'create-invoice', element: <CreateInvoice />},
        ]
    }
])
