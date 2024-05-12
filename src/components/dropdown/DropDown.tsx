import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { GET_CHARACTERS } from '../../apollo/schemas/CharactersQuery';
import { DropDownType } from '../../types/dropdown/DropDown';
import { CharactersType } from '../../types/graphql/Characters';

import dancing_rick from '../../assets/animated/dancing-rick.gif';
import error_img from '../../assets/images/rick&morty-error.jpg';
import not_found_img from '../../assets/animated/drinking-rick.gif';

function DropDown({ searchTerm }: DropDownType) {
  const { data, loading, error } = useQuery<CharactersType>(GET_CHARACTERS, {
    variables: { filter: { name: searchTerm } },
  });

  console.log(data);

  return (
    <motion.ul
      id="dropdown"
      initial={{ height: 0 }}
      animate={{ height: 330 }}
      exit={{ height: 0 }}
      className="w-full overflow-hidden overflow-y-auto rounded-lg border border-custom-100 bg-white p-2"
    >
      {data && data.results.length < 0 && <img src={not_found_img} alt="" />}
      {loading && (
        <img
          src={dancing_rick}
          alt="Animated dancing Rick from Rick & Morty Series"
        />
      )}
      {error && <img src={error_img} alt="" />}
    </motion.ul>
  );
}

export default DropDown;
