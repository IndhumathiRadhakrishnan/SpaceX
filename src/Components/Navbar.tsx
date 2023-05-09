import { Outlet } from "react-router-dom"
import NavbarMenu from "./NavBarMenu";

function Navbar() {

    return (
        <section className="relative bg-center bg-cover">
            <NavbarMenu />
            <Outlet />
        </section>
    );

}
export default Navbar