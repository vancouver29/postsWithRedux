import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dasboard.</p>
    {/* Navigate to the posts in App Component*/}
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </section>
);

export default DashboardPage;
