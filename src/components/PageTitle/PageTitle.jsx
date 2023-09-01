import React from "react";
import "./pagetitle.scss";
export const PageTitle = ({ title }) => {
  return (
    <section className="page-name">
      <div className="page-name__title">
        <h1>{title}</h1>
      </div>
    </section>
  );
};
export default PageTitle;
