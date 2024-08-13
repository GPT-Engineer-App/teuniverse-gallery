import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teun-100 to-teun-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-teun-800">Teun van de Keuken</h1>
          <nav>
            <Button asChild variant="ghost" className="mr-2 text-teun-700 hover:text-teun-900 hover:bg-teun-100">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="mr-2 text-teun-700 hover:text-teun-900 hover:bg-teun-100">
              <Link to="/about">About</Link>
            </Button>
            <Button asChild variant="ghost" className="text-teun-700 hover:text-teun-900 hover:bg-teun-100">
              <Link to="/work">Work</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-teun-900 mb-6">Welcome to Teun's World</h2>
          <p className="text-xl text-teun-700 mb-8">Journalist, Television Presenter, and Advocate for Sustainable Food</p>
          <Button asChild size="lg" className="bg-teun-600 hover:bg-teun-700 text-white">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;