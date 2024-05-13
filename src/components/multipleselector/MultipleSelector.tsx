import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import DropDownContextProvider from '../../context/DropDownContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import DropDown from '../dropdown/DropDown';
import SearchBar from '../searchbar/SearchBar';

function MultipleSelector() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(divRef, () => setIsModalOpen(false));

  return (
    <DropDownContextProvider>
      <div
        className="h-[540px] w-96 max-w-full space-y-2 max-sm:px-4 md:mt-72 md:w-[500px]"
        ref={divRef}
      >
        <SearchBar
          isModalOpen={isModalOpen}
          setModalState={setIsModalOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <AnimatePresence>
          {isModalOpen && (
            <DropDown
              isModalOpen={isModalOpen}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              searchTerm={searchTerm.trim()}
            />
          )}
        </AnimatePresence>
      </div>
    </DropDownContextProvider>
  );
}

export default MultipleSelector;
