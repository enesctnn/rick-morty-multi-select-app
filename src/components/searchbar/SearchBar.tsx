import { SearchBarType } from '../../types/search/SearchBar';
import SearchBarButton from './SearchBarButton';
import SearchBodyContainer from './SearchBodyContainer';

const SearchBar = ({
  isModalOpen,
  setModalState,
  searchTerm,
  setSearchTerm,
}: SearchBarType) => (
  <div
    className="flex max-h-40 min-h-14 w-full items-center overflow-y-auto overflow-x-hidden whitespace-nowrap rounded-xl border border-custom-100 bg-white px-4 py-2 shadow-lg shadow-black/40"
    id="searchbar"
  >
    <SearchBodyContainer
      searchTerm={searchTerm}
      setModalState={setModalState}
      setSearchTerm={setSearchTerm}
    />
    <SearchBarButton isModalOpen={isModalOpen} setModalState={setModalState} />
  </div>
);

export default SearchBar;
