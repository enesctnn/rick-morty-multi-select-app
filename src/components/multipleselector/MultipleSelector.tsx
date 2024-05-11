import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import DropDownContextProvider from '../../context/DropDownContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import DropDown from '../dropdown/DropDown';
import SearchBar from '../searchbar/SearchBar';

function MultipleSelector() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(divRef, () => setIsModalOpen(false));

  return (
    <DropDownContextProvider>
      <div className="relative w-80 space-y-2" ref={divRef}>
        <SearchBar isModalOpen={isModalOpen} setModalState={setIsModalOpen} />
        <AnimatePresence>{isModalOpen && <DropDown />}</AnimatePresence>
      </div>
    </DropDownContextProvider>
  );
}

export default MultipleSelector;
