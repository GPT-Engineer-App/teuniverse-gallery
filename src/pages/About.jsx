import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-teun-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teun-800 mb-6">About Teun van de Keuken</h2>
        <div className="bg-white rounded-lg shadow-md p-6 border border-teun-200">
          <p className="text-lg text-teun-700 mb-4">
            Teun van de Keuken is a Dutch journalist and television presenter known for his
            investigative work in consumer affairs and sustainable food production.
          </p>
          <p className="text-lg text-teun-700 mb-4">
            He gained prominence as one of the founders of Tony's Chocolonely, a chocolate company
            committed to producing slave-free chocolate and raising awareness about labor issues
            in the cocoa industry.
          </p>
          <p className="text-lg text-teun-700">
            Teun continues to advocate for ethical consumerism and transparency in the food industry
            through his television programs and journalistic work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;