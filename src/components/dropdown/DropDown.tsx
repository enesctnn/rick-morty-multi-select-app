import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { GET_CHARACTERS } from '../../apollo/schemas/CharactersQuery';
import { DropDownType } from '../../types/dropdown/DropDown';
import { CharactersResponse } from '../../types/graphql/Characters';

import DataError from './datastatusfeedback/DataError';
import DataLoading from './datastatusfeedback/DataLoading';
import EmptyResult from './datastatusfeedback/EmptyResult';
import DropDownItem from './DropDownItem';

function DropDown({ searchTerm }: DropDownType) {
  const { data, loading, error } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    { variables: { filter: { name: searchTerm } } }
  );

  return (
    <motion.ul
      id="dropdown"
      initial={{ height: 0 }}
      animate={{ height: 370 }}
      exit={{ height: 0 }}
      transition={{ ease: 'circInOut' }}
      className="w-full overflow-hidden overflow-y-auto rounded-xl border border-custom-100 bg-white shadow-lg shadow-black/40"
    >
      {!!data &&
        data.characters.results.length > 0 &&
        data.characters.results.map(item => (
          <DropDownItem
            key={item.id}
            episodes={item.episode.length}
            id={item.id}
            image={item.image}
            name={item.name}
            searchTerm={searchTerm}
          />
        ))}
      {!!data && data.characters.results.length <= 0 && <EmptyResult />}
      {loading && <DataLoading />}
      {error && <DataError />}
    </motion.ul>
  );
}

export default DropDown;
