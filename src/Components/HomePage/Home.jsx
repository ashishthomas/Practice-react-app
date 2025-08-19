import React from "react";

function Home() {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-lg mb-6">This is the home page.</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Learn more
      </button>
    </div>
  );
}

export default Home;
