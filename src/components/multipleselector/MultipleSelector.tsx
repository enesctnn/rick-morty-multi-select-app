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
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <DropDownContextProvider>
      <div className="relative h-96 w-80 space-y-2 md:mt-64" ref={divRef}>
        <SearchBar
          isModalOpen={isModalOpen}
          setModalState={setIsModalOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <AnimatePresence>
          {isModalOpen && <DropDown searchTerm={searchTerm} />}
        </AnimatePresence>
      </div>
    </DropDownContextProvider>
  );
}

export default MultipleSelector;
