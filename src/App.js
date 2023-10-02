import { Route, Routes,Outlet } from 'react-router-dom'
import Register from "./component/user/Register";
import Login from "./component/user/Login";
import './App.css';
import ProductList from "./component/product/ProductList";
import ProductAdd from './component/product/ProductAdd';
import Dashboard from './component/Dashboard';
import SidebarLayout from './component/layout/SidebarLayout';
import NotFound from "./component/NotFound"
import RootBoundary from "./RootBoundary";
import Profile from "./component/user/Profile"
import { AuthProvider } from './auth/Auth';
import PrivateRoutes from "./auth/PrivateRoutes"
import ProductDetails, { fetchProject } from "./component/product/ProductDetails"
import Cart from './component/product/Cart';
import UserList from "./component/user/UserList"
import ProfileSidebar from './component/user/ProfileSidebar';



function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
          
          <Route element={<SidebarLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/product-add"
              element={<PrivateRoutes><ProductAdd /></PrivateRoutes>}
              errorElement={<RootBoundary />}
            />
            <Route path="/product-details"
              element={<ProductDetails />}
            />
            {/* <Route path='/product-details/:id' 
       
       element={<ProductDetails />}
       loader={({ params }) => fetchProject(params.projectId)}
      //  loader={async ({ params }) => {
      //   const res = await fetch(`https://jsonplaceholder.org/posts/${params.id}`);
      //   if (res.status === 404) {
      //     throw new Response("Not Found", { status: 404 });
      //   }
      //   const home = await res.json();
      //   const descriptionHtml = "";
      //   return { home };
      // }}
       /> */}
            <Route path="/" element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
           
            <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
          {/* <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />  */}
          <Route path="*" element={<PrivateRoutes><NotFound /></PrivateRoutes>}/>
            {/* <Route path="*" element={<PrivateRoutes><NotFound /></PrivateRoutes>} />
            <Route path="profile" element={<Outlet />}>
     <Route index element={<PrivateRoutes><profileSidebar /></PrivateRoutes>} />
     <Route path=":id" element={<PrivateRoutes><Profile /></PrivateRoutes>} /> */}
   {/* </Route> */}
    
            
          </Route>
          <Route element={<PrivateRoutes><ProfileSidebar /></PrivateRoutes>}>
    <Route path="/profile/:id" 
    element={<PrivateRoutes><Profile /></PrivateRoutes>} /> 
     <Route path="/user-list"
      element={<PrivateRoutes><UserList/></PrivateRoutes>}/>
  </Route>
          
        </Routes>
      </AuthProvider>


    </div>
  );
}

export default App;
