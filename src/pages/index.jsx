'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PetCard from '../components/PetCard';
import { fetchPets } from '../services/petfinder';

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const data = await fetchPets();
      setPets(data);
    };
    getPets();
  }, []);

  return (
    <main>
      <Header />
      
      <section className="content">
        <header className="content-header">
          <h2 className="section-title">Pets Disponíveis para Adoção</h2>
        </header>

        <div className="pet-grid">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>
    </main>
  );
}
