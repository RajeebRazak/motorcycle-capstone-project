import React from 'react'
import { Navigate , Route } from 'react-router-dom'
import { useAuth } from  "./AuthContext"
 
const PrivateRoute = ({ element,path }) => {
 const { isAdmin} = useAuth();

 return isAdmin ? (
    <Route  element={element} />
  ) : ( 
    <Navigate to="/login" replace /> 
 )
  }
export default PrivateRoute;