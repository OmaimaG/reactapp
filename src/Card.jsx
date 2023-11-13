import React, { useEffect, useState } from 'react';
import fetchPhotos from './Data'; 

const Card = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotosData = async () => {
      const data = await fetchPhotos();
      setPhotos(data);
    };

    fetchPhotosData();
  }, []);


  const sortedPhotos = photos.sort((a, b) => a.position - b.position);

  return (
    <div className="py-8"> 
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-2xl mx-auto">
          {sortedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg mb-4"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
