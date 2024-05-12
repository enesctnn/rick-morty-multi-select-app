import { SearchInputType } from '../../types/search/SearchInput';
import { Input } from '../ui/input';

import arrow from '../../assets/icons/arrow-down.svg';

import { motion } from 'framer-motion';

const SearchInput = ({
  isModalOpen,
  setModalState,
  searchTerm,
  setSearchTerm,
}: SearchInputType) => (
  <div className="flex h-max w-full items-center justify-center">
    <Input
      value={searchTerm}
      onChange={e => {
        setSearchTerm(e.currentTarget.value);
        setModalState(true);
      }}
    />
    <div className="mr-2 flex items-center justify-center">
      <motion.button
        animate={{ rotateX: !isModalOpen ? 180 : 0 }}
        whileTap={{ y: isModalOpen ? -5 : 5 }}
        transition={{ type: 'spring', mass: 1.2, stiffness: 200 }}
        className="mt-[2.5px] h-max w-max"
        onClick={() => setModalState(prevState => !prevState)}
      >
        <img src={arrow} alt="arrow down svg" className="rounded-lg" />
      </motion.button>
    </div>
  </div>
);

export default SearchInput;
