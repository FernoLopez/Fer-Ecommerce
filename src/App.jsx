import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import CartScreen from "./Components/Cart/CartScreen"
import Home from "./Components/Home/Home"
import LoginScreen from "./Components/Login/LoginScreen"
import ProductsScreen from "./Components/Products/ProductsScreen"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import PurchasesScreen from "./Components/Purchases/PurchasesScreen"
import FooterScreen from "./Components/Shared/FooterScreen"
import HeaderScreen from "./Components/Shared/HeaderScreen"
import { getAllProducts } from "./store/slices/product.slice"
import getConfig from "./Components/Login/utils/getConfig"  


function App() {

  useEffect(() => {

  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  const newUser = {
    firstName: "Mr",
    lastName: "Lebowski",
    email: "MrL1234@gmail.com",
    password: "Mr1234",
    phone: "1234567891",
    role: "admin"
  }

  axios.post(URL, newUser)
  .then(res => console.log(res.data))
  .catch(err => console.log(err.data))
}, []) 
 

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAllProducts())
  }, []) 

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginScreen />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/purchases" element={<PurchasesScreen />} />
          </Route>
          <Route path="/product/:id" element={<ProductsScreen />} />
        </Routes>

      </main>
      <FooterScreen />
    </div>
  )
}

export default App
