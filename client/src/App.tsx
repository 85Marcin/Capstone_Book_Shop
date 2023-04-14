import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BasketScreen from "./screens/BasketScreen";
import BookScreen from "./screens/BookScreen";
import BooksScreen from "./screens/BooksScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />

        <main style={{ paddingTop: "4rem" }}>
          <Routes>
            <Route path="/books" element={<BooksScreen />} />
            <Route path="/book/:id" element={<BookScreen />} />
            <Route path="/basket" element={<BasketScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
};

export default App;
