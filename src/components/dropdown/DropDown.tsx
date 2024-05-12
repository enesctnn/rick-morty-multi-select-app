import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { GET_CHARACTERS } from '../../apollo/schemas/CharactersQuery';
import { DropDownType } from '../../types/dropdown/DropDown';
import { CharactersResponse } from '../../types/graphql/Characters';

import dancing_rick from '../../assets/animated/dancing-rick.gif';
import not_found_img from '../../assets/animated/drinking-rick.gif';
import error_img from '../../assets/images/rick&morty-error.jpg';
import DropDownItem from './DropDownItem';

function DropDown({ searchTerm }: DropDownType) {
  const { data, loading, error } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { filter: { name: searchTerm } },
    }
  );

  return (
    <motion.ul
      id="dropdown"
      initial={{ height: 0 }}
      animate={{ height: 370 }}
      exit={{ height: 0 }}
      transition={{ ease: 'circInOut' }}
      className="w-full overflow-hidden overflow-y-auto rounded-xl border border-custom-100 bg-white"
    >
      {data &&
        data.characters.results.length > 1 &&
        data.characters.results.map(item => (
          <DropDownItem
            key={item.id}
            episodes={item.episode.length}
            id={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      {!!data && data.characters.results.length < 1 && (
        <img src={not_found_img} alt="Rick drinking" />
      )}
      {loading && (
        <img
          src={dancing_rick}
          alt="Animated dancing Rick from Rick & Morty Series"
        />
      )}
      {error && <img src={error_img} alt="Rick&Morty 404 feedback image" />}
    </motion.ul>
  );
}

export default DropDown;
