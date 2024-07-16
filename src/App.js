import React, { useState } from 'react';
import { Layers, Brain, Wifi } from 'lucide-react';

const technologies = {
  intelligent: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Robotics"
  ],
  immersive: [
    "Virtual Reality",
    "Augmented Reality",
    "Mixed Reality",
    "360-degree Video",
    "Haptic Feedback Systems"
  ],
  decentralised: [
    "Blockchain",
    "Cryptocurrencies",
    "Decentralised Finance",
    "Distributed Ledger Technology"
  ]
};

const Hexagon = ({ title, icon, items, isActive, onClick, colour }) => (
  <div 
    className={`hexagon cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
    style={{
      backgroundColor: isActive ? colour : '#ffffff',
      color: isActive ? '#ffffff' : '#000000',
      width: '200px',
      height: '230px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
    onClick={onClick}
  >
    {icon}
    <h3 className="font-bold text-lg mt-2">{title}</h3>
    {isActive && (
      <ul className="list-none p-0 mt-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm mt-1">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const EmergingTechInfographic = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="p-8 min-h-screen flex flex-col justify-center items-center" style={{
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    }}>
      <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">Emerging Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Hexagon
          title="Intelligent"
          icon={<Brain className="h-10 w-10" color={activeCategory === 'intelligent' ? '#ffffff' : '#3b82f6'} />}
          items={technologies.intelligent}
          isActive={activeCategory === 'intelligent'}
          onClick={() => setActiveCategory(activeCategory === 'intelligent' ? null : 'intelligent')}
          colour="#3b82f6"
        />
        <Hexagon
          title="Immersive"
          icon={<Layers className="h-10 w-10" color={activeCategory === 'immersive' ? '#ffffff' : '#10b981'} />}
          items={technologies.immersive}
          isActive={activeCategory === 'immersive'}
          onClick={() => setActiveCategory(activeCategory === 'immersive' ? null : 'immersive')}
          colour="#10b981"
        />
        <Hexagon
          title="Decentralised"
          icon={<Wifi className="h-10 w-10" color={activeCategory === 'decentralised' ? '#ffffff' : '#8b5cf6'} />}
          items={technologies.decentralised}
          isActive={activeCategory === 'decentralised'}
          onClick={() => setActiveCategory(activeCategory === 'decentralised' ? null : 'decentralised')}
          colour="#8b5cf6"
        />
      </div>
      <button 
        onClick={() => setActiveCategory(null)}
        className="mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Reset
      </button>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default EmergingTechInfographic;
