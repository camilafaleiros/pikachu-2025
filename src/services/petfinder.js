// services/petfinder.js

const API_KEY = 'cZ2aq0VScX0R9BkLESPjDkx5kiL8QCaJas6vdtaYejxheVQNaf';
const API_SECRET = 'TyM4rvgQD1r9bpaH8lusendg6q8fneIfVePWCYRQ';

async function getAccessToken() {
  const res = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
    }
  );
  const { access_token } = await res.json();
  return access_token;
}

export async function fetchPets() {
  const token = await getAccessToken();
  const res = await fetch(
    'https://api.petfinder.com/v2/animals?limit=12',
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const { animals } = await res.json();

  return animals.map((pet) => ({
    id: pet.id,
    name: pet.name,
    species: pet.species,
    age: pet.age,
    size: pet.size,
    photo:
      pet.photos?.[0]?.medium ??
      pet.primary_photo_cropped?.small ??
      null,
    location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
  }));
}

export async function fetchPetById(id) {
  const token = await getAccessToken();
  const res = await fetch(
    `https://api.petfinder.com/v2/animals/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const { animal } = await res.json();

  return {
    id: animal.id,
    name: animal.name,
    species: animal.species,
    age: animal.age,
    size: animal.size,
    photo:
      animal.photos?.[0]?.large ??
      animal.primary_photo_cropped?.large ??
      null,
    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
  };
}
