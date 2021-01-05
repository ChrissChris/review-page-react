import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="continer">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default App;
