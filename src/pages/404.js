import * as React from "react"

import Button from '../components/Button';
import Footer from '../components/Footer';

// markup
const Error404 = () => {
  return (
    <div className={"theme-wrapper theme-dark error404"}>
      <div className="wrapper">
        <h1>Oh no! This page does not exist.</h1>
        <Button 
          style="primary"
          text="View Portfolio"
          link="/"
        />
        <Footer />
      </div>
    </div>
  )
}

export default Error404
