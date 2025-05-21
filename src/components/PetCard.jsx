import Link from 'next/link';

export default function PetCard({ pet }) {
  const src = pet.photo || '/placeholder.png';

  return (
    <article className="pet-card">
      <img
        src={src}
        alt={pet.name}
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      />
      <h3>{pet.name}</h3>
      <p>{pet.species}</p>
      <Link href={`/pet/${pet.id}`}>
        <button type="button" className="details-button">
          Ver Detalhes
        </button>
      </Link>
    </article>
  );
}
