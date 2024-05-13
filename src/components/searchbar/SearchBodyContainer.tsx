import { SearchInputType } from '../../types/search/SearchInput';
import SearchBarSelectedCharacters from './SearchBarSelectedCharacters';
import SearchInput from './SearchInput';

const SearchBodyContainer = ({
  searchTerm,
  setModalState,
  setSearchTerm,
}: SearchInputType) => (
  <div className="flex h-4/5 max-h-40 min-h-9 w-full flex-wrap items-center gap-x-2 gap-y-1">
    <SearchBarSelectedCharacters />
    <SearchInput
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setModalState={setModalState}
    />
  </div>
);

export default SearchBodyContainer;
