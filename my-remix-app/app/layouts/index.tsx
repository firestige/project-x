import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Siderbar from "./Sidebar";

const MainLayout = (props: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Siderbar />
      <div className="p-4 xl:ml-80">
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
