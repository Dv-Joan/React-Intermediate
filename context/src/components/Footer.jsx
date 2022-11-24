import React from "react";

function Footer({ theme, texts }) {
  return (
    <div className={`m-5 p-5 rounded ${theme}`}>
      <footer>
        <h5 className="italic">{texts.footerTitle}</h5>
      </footer>
    </div>
  );
}

export default Footer;
