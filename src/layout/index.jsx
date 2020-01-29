import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavBar from "../components/NavBar/NavBar";
import "./index.css";


//  This is the main layout that will appear on every page programmatically.
//  The children that are passed are the main pieces of content displayed.
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <NavBar />
        <div className="layout-container">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
      </>
    );
  }
}
