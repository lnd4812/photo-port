import React, {useState} from 'react';

    const PhotoList = ({ category }) => {
        const [photos] = useState([
            {
                name: "Grocery aisle",
                category: "commercial",
                description: "Lorem ipsum yadda yadda yadda",
            },
            {
                name: "Grocery booth",
                category: 'commercial',
                description: "Lorem ipsum blah blah blah",
            },
            {
                name: "Cat green eyes",
                category: "portraits",
                description: "Lorem ipsum meow",
            },
            {
                name: "Green Parrot",
                category: "portraits",
                description: "Lorem ipsum polly want a cracker",
            },
            {
                name: "Pancakes",
                category: "food",
                description: "Lorem ipsum pass the maple syrup",
            },
            {
                name: "Scallop pasta",
                category: "food",
                description: "Lorem ipsum sounds yummy",
            },
            {
                name: "Docks",
                category: "landscape",
                description: "Lorem ipsum shiver me timbers",
            },
            {
                name: "Panoramic village by sea",
                category: "landscape",
                description: "Lorem ipsum get way seagull",
            },
        ]);
            
        const currentPhotos = photos.filter(photo => photo.category === category);
      
        return (
          <div>
            <div className="flex-row">
              {currentPhotos.map((image, i) => (
                <img
                  src={require(`../../assets/small/${category}/${i}.jpg`).default}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  key={image.name}
                />
              ))}
            </div>
          </div>
        );
      };
      
      
export default PhotoList;