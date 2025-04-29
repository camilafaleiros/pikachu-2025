import Header from '../../components/Header';
import { useRouter } from 'next/router';

export default function PetPage() {
  const router = useRouter();
  const { id } = router.query;

  // Lista simulada de pets (mesma usada na Home)
  const fakePets = [
    {
      id: '1',
      name: 'Bidu',
      species: 'Cachorro',
      age: '2 anos',
      size: 'Pequeno',
      location: 'São Paulo - SP',
      photo: '/pet1.jpg',
    },
    {
      id: '2',
      name: 'Mimi',
      species: 'Gato',
      age: '1 ano',
      size: 'Pequeno',
      location: 'Rio de Janeiro - RJ',
      photo: '/pet2.jpg',
    },
    {
      id: '3',
      name: 'Luna',
      species: 'Coelho',
      age: '6 meses',
      size: 'Mini',
      location: 'Belo Horizonte - MG',
      photo: '/pet3.jpg',
    },
  ];

  // Encontrar o pet com o ID correspondente
  const pet = fakePets.find((p) => p.id === id);

  if (!pet) return <p style={{ padding: '2rem' }}>Carregando ou pet não encontrado...</p>;

  return (
    <main>
      <Header />
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
          ← Voltar
        </button>
        <div className="pet-detail">
          <img src={pet.photo} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p><strong>Espécie:</strong> {pet.species}</p>
          <p><strong>Idade:</strong> {pet.age}</p>
          <p><strong>Porte:</strong> {pet.size}</p>
          <p><strong>Localização:</strong> {pet.location}</p>
        </div>
      </div>
    </main>
  );
}
