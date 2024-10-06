import { FC, PropsWithChildren } from "preact/compat";
import { NavMenu } from "../nav/NavMenu";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = ({children}) =>{
   
    return (
      <div className='wrapper'>
          <div className = 'content'>
            <Header />
            <NavMenu />
            <main>
              <Outlet />
            </main>
          </div>
          <Footer />
      </div>
    );
}