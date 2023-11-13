const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Error fetching photo data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export default fetchPhotos;