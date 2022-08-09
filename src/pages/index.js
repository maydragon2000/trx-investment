import Home01 from "./Home01";
import WalletConnect from "./WalletConnect";
import Login from "./Login";
import SignUp from "./SignUp";
import EditProfile from "./EditProfile";



const routes = [
  { path: '/', component: <Home01 /> },
  { path: '/wallet-connect', component: <WalletConnect /> },
  { path: '/edit-profile', component: <EditProfile /> },
  { path: '/login', component: <Login /> },
  { path: '/sign-up', component: <SignUp /> },
]

export default routes;