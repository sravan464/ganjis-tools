import Header from "./components/header";
import SideNav from "./components/side-nav";
import HomePage from "./pages/home-page";
import TaxReturns from "./pages/tax-returns";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import NoMatch from "./pages/no-match";

const App = () => {
  return <div>{/* <Header /> */}</div>;
};

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <SideNav />
//           </div>
//           <div className="col-10">
//             <Switch>
//               <Route exact path="/" component={HomePage} />
//               <Route path="/about" component={TaxReturns} />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };
export default App;
