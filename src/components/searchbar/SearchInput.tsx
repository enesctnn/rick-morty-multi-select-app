import { SearchInputType } from '../../types/search/SearchInput';
import { Input } from '../ui/input';

import { useContext } from 'react';
import {
  DropDownRemoveSelectedLastCharacterContext,
  DropDownSelectedCharacterContext,
} from '../../context/DropDownContext';

function SearchInput({
  setModalState,
  searchTerm,
  setSearchTerm,
}: SearchInputType) {
  const removeLastItem = useContext(DropDownRemoveSelectedLastCharacterContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    setModalState(true);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm.length <= 0 && e.key === 'Backspace') {
      removeLastItem();
    }
  };

  const selectedCharacters = useContext(DropDownSelectedCharacterContext);
  const selectedCharLength = Object.keys(selectedCharacters).length;

  return (
    <Input
      value={searchTerm}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={selectedCharLength > 0 ? '' : 'Search Character'}
    />
  );
}

export default SearchInput;
