import { lazy, Suspense } from "react"
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
// import { SignIn } from "./components/Signin/SignIn";
// import { Dashboard } from "./components/dashboard/Dashboard";
// import { SendMoney } from "./components/sendmoney/SendMoney";
// import SignUp from "./components/Signup/SignUp"
const SignUp = lazy(()=> import('./components/Signup/SignUp'))
const SignIn = lazy(()=> import('./components/Signin/SignIn'))
const Dashboard = lazy(()=> import('./components/dashboard/Dashboard'))
const SendMoney = lazy(()=> import('./components/sendmoney/SendMoney'))
function App() {

  return <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Suspense fallback={'Loading'}><SignUp /></Suspense>}></Route>
          <Route path='/signin' element={<Suspense fallback={'Loading'}><SignIn /></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback={'Loading'}><Dashboard /></Suspense>}></Route>
          <Route path='/send' element={<Suspense fallback={'Loading'}><SendMoney /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App
