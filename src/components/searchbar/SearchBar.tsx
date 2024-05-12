import { SearchBarType } from '../../types/search/SearchBar';
import SearchBarSelectedCharacters from "./SearchBarSelectedCharacters";
import SearchInput from './SearchInput';

const SearchBar = ({
  isModalOpen,
  setModalState,
  searchTerm,
  setSearchTerm,
}: SearchBarType) => (
  <div className="flex h-12 max-h-20 w-full items-center justify-center gap-1 overflow-y-auto whitespace-nowrap rounded-xl border border-custom-100 bg-white p-1">
    <SearchBarSelectedCharacters/>
    <SearchInput
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      isModalOpen={isModalOpen}
      setModalState={setModalState}
    />
  </div>
);

export default SearchBar;
