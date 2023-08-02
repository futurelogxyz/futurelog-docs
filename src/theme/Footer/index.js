import React from "react";
import Footer from "@theme-original/Footer";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { useLocation } from "@docusaurus/router";

export default function FooterWrapper(props) {
    const { pathname } = useLocation();
    return (
        <>
            <Footer {...props} />
            <Docsly publicId="public_hxlP3dArKDFbuAX0h0081GwYrEoxftKCexknGMkGaIWR8wQMSBhNbV0LjkXgNTkE" pathname={pathname} />
        </>
    );
}