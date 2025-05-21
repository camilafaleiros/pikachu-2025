'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPetById } from '../../services/petfinder';
import Header from '../../components/Header';

export default function PetPage() {
  const router = useRouter();
  const { id } = router.query;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await fetchPetById(id);
      setPet(data);
    })();
  }, [id]);

  if (!pet) return <p>Carregando...</p>;

  return (
    <main>
      <Header />

      <section className="content">
        
        <header className="content-header">
          <button
            className="back-button"
            onClick={() => router.back()}
          >
            ← Voltar
          </button>
        </header>

        <div className="pet-detail">
          <img src={pet.photo} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p><strong>Espécie:</strong> {pet.species}</p>
          <p><strong>Idade:</strong> {pet.age}</p>
          <p><strong>Porte:</strong> {pet.size}</p>
          <p><strong>Localização:</strong> {pet.location}</p>
        </div>
      </section>
    </main>
  );
}
