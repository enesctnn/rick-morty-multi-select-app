import arrow from '../../assets/icons/arrow-down.svg';
import { SearchInputType } from '../../types/search/SearchInput';
import { Input } from '../ui/input';

import { motion } from 'framer-motion';

const SearchInput = ({
  isModalOpen,
  setModalState,
  searchTerm,
  setSearchTerm,
}: SearchInputType) => (
  <div className="flex h-max w-full items-stretch justify-center">
    <Input
      value={searchTerm}
      onChange={e => {
        setSearchTerm(e.currentTarget.value);
        setModalState(true);
      }}
    />
    <div className="mr-1 flex items-center justify-center">
      <motion.button
        animate={{ rotateX: !isModalOpen ? 180 : 0 }}
        transition={{ type: 'spring' }}
        className="h-max w-max"
        onClick={() => setModalState(prevState => !prevState)}
      >
        <img src={arrow} alt="arrow down svg" className="rounded-lg" />
      </motion.button>
    </div>
  </div>
);

export default SearchInput;
