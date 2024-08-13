import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Work = () => {
  const projects = [
    {
      title: "Tony's Chocolonely",
      description: "Co-founded a chocolate company committed to slave-free chocolate production."
    },
    {
      title: "Keuringsdienst van Waarde",
      description: "Investigative television program about food production and consumer goods."
    },
    {
      title: "De Monitor",
      description: "Journalistic program investigating social issues and their impact on society."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Teun's Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;