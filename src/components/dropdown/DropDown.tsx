import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { GET_CHARACTERS } from '../../apollo/schemas/CharactersQuery';
import { DropDownType } from '../../types/dropdown/DropDown';
import { CharactersResponse } from '../../types/graphql/Characters';

import DataError from './datastatusfeedback/DataError';
import DataLoading from './datastatusfeedback/DataLoading';
import EmptyResult from './datastatusfeedback/EmptyResult';
import DropDownItem from './DropDownItem';

function DropDown({
  searchTerm,
  activeIndex,
  setActiveIndex,
  isModalOpen,
}: DropDownType) {
  const { data, loading, error } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    { variables: { filter: { name: searchTerm } } }
  );

  function onKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (data && data.characters.results.length > 0) {
      if (e.key === 'ArrowUp') {
        setActiveIndex(prevIndex =>
          prevIndex !== null ? Math.max(prevIndex - 1, 0) : 0
        );
      } else if (e.key === 'ArrowDown') {
        setActiveIndex(prevIndex =>
          prevIndex !== null
            ? Math.min(prevIndex + 1, data.characters.results.length - 1)
            : 0
        );
      } else if (e.key === 'Escape') setActiveIndex(null);
    }
  }
  const onBlur = () => setActiveIndex(null);

  return (
    <motion.ul
      id="dropdown"
      initial={{ height: 0 }}
      animate={{ height: 370 }}
      exit={{ height: 0 }}
      transition={{ ease: 'circInOut' }}
      className="p-1 w-full overflow-hidden overflow-y-auto rounded-xl border border-custom-100 bg-white shadow-lg shadow-black/40"
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      aria-expanded={isModalOpen}
    >
      {!!data &&
        data.characters.results.length > 0 &&
        data.characters.results.map((item, index) => (
          <DropDownItem
            key={item.id}
            episodes={item.episode.length}
            id={item.id}
            image={item.image}
            name={item.name}
            searchTerm={searchTerm}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      {!!data && data.characters.results.length <= 0 && <EmptyResult />}
      {loading && <DataLoading />}
      {error && <DataError />}
    </motion.ul>
  );
}

export default DropDown;
