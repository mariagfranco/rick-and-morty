import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS } from '../../graphql/queries';
import { FetchCharactersQuery } from '../../types';
import './Card.css'
  


const CharacterCard = () => {

  const { data } = useQuery<FetchCharactersQuery>(FETCH_CHARACTERS);
  console.log(data) 
  return(
    <div className='cards'>
        {data?.characters?.results?.map((item) => 
        <div className='card-div'>
          <div>
            <img src={item?.image!}/>
          </div>
          <div className='info-div'>
            <h3>{item?.name}</h3>
            <p>{item?.species}</p>
            <p>{item?.gender}</p>
            <p>{item?.origin?.name}</p>
            <p>{item?.location?.name}</p>
            <p>{item?.episode.map((ep) => ep?.name)[0]}</p>
          </div>
         
          </div>
          )}
    </div>
    )
};

export default CharacterCard;