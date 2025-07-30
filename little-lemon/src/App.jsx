/* App component setting up routing for all pages */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { OrderOnline } from "./pages/OrderOnline";
import { Reservations } from "./pages/Reservations";
import { ReservationConfirmation } from "./pages/ReservationConfirmation";

function App() {
  /* Defines routing structure with Layout as the parent route */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
          <Route path="confirmation" element={<ReservationConfirmation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
