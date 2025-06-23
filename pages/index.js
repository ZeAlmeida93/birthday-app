import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    fetch('/api/image')
      .then((res) => res.json())
      .then((data) => setImagePath(data.path));
  }, []);

  if (!imagePath) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Imagem do dia</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imagePath} alt="Imagem do dia" width={200} height={200} />
    </div>
  );
}
