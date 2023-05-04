import { ReactNode } from "ReactNode";
import Header from "./Header";
import Footer from "./Footer";

const LayoutProps = () => {
  children: ReactNode;
};
const Layout = (LayoutProps) => {
  const { children } = LayoutProps;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
