import { motion } from 'framer-motion';
import arrow from '../../assets/icons/arrow-down.svg';
import { SearchBarButtonType } from '../../types/search/SearchBarButton';

const SearchBarButton = ({
  isModalOpen,
  setModalState,
}: SearchBarButtonType) => (
  <motion.button
    animate={{ rotateX: !isModalOpen ? 180 : 0 }}
    whileTap={{ y: isModalOpen ? -5 : 5 }}
    transition={{ type: 'spring', mass: 1.2, stiffness: 200 }}
    className="h-max w-max"
    onClick={() => setModalState(prevState => !prevState)}
  >
    <img src={arrow} alt="arrow down svg" className="rounded-lg" />
  </motion.button>
);

export default SearchBarButton;
