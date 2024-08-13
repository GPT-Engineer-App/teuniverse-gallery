import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-800">Teun van de Keuken</h1>
          <nav>
            <Button asChild variant="ghost" className="mr-2">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="mr-2">
              <Link to="/about">About</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/work">Work</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Welcome to Teun's World</h2>
          <p className="text-xl text-green-700 mb-8">Journalist, Television Presenter, and Advocate for Sustainable Food</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;