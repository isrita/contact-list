import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import Contactos from "./pages/contacts.jsx";
import AddContact from "./pages/addContact.jsx";
import EditContact from "./pages/editcontact.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Contactos />} path="/" />
                        <Route element={<AddContact />} path="/add-contact" />
                        <Route element={<h1>EStoy en la vista de 4Geeks</h1>} path="/4geeks" />
                        <Route element={<h1>Not found! 404</h1>} path="*" />
                        <Route element={<EditContact />} path="/edit-contact/:index" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
