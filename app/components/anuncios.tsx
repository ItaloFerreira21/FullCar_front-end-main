import React from 'react';

type Anuncio = {
  id: number;
  titulo: string;
  descricao: string;
  imagemUrl: string;
};

interface AnunciosProps {
  anuncios: Anuncio[];
}

const Anuncios: React.FC<AnunciosProps> = ({ anuncios }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {anuncios.map((anuncio) => (
        <div
          key={anuncio.id}
          className="bg-card text-card-foreground border border-border rounded-lg overflow-hidden shadow-sm"
        >
          <img
            src={anuncio.imagemUrl}
            alt={anuncio.titulo}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{anuncio.titulo}</h2>
            <p className="text-sm text-muted-foreground mt-2">{anuncio.descricao}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md">
                Editar
              </button>
              <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md">
                Excluir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anuncios;
