import Header from '../components/Header';
import PetCard from '../components/PetCard';

export default function Home() {
  const fakePets = [
    { id: 1, name: 'Bidu', species: 'Cachorro', photo: '/pet1.jpg' },
    { id: 2, name: 'Mimi', species: 'Gato', photo: '/pet2.jpg' },
    { id: 3, name: 'Luna', species: 'Coelho', photo: '/pet3.jpg' },
  ];

  return (
    <main>
      <Header />
      <div className="content">
        <h2 className="section-title">Pets disponíveis</h2>
        <div className="pet-grid">
          {fakePets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </main>
  );
}
