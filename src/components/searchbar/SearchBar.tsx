import { SearchBarType } from '../../types/search/SearchBar';
import SearchInput from './SearchInput';

function SearchBar({ isModalOpen, setModalState ,searchTerm,setSearchTerm}: SearchBarType) {
  return (
    <div className="border-custom-100 flex h-10 w-full items-center justify-center gap-1 whitespace-nowrap rounded-lg border bg-white p-1">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} isModalOpen={isModalOpen} setModalState={setModalState} />
    </div>
  );
}

export default SearchBar;
