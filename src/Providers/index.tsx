import { CartProvider } from "./Cart";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  <CartProvider>{children}</CartProvider>;
};

export default Providers;
