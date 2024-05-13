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
      <div
        className="h-[400px] w-96 max-w-full space-y-2 max-sm:px-4 md:mt-64 md:w-[500px]"
        ref={divRef}
      >
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
