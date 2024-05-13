import { useContext } from 'react';
import {
  DropDownSelectedCharacterContext,
  ToggleDropDownSelectedCharacterContext,
} from '../../context/DropDownContext';

function SearchBarSelectedCharacters() {
  const selectedCharacters = useContext(DropDownSelectedCharacterContext);
  const toggleCharacters = useContext(ToggleDropDownSelectedCharacterContext);

  const selectedCharacterKeys = Object.keys(selectedCharacters);

  if (selectedCharacterKeys.length <= 0) return null;

  return selectedCharacterKeys.map(key => (
    <div
      key={key}
      className="flex h-8 items-center justify-evenly gap-2 rounded-lg bg-custom-50 px-3"
    >
      <p className="text-custom-500">{selectedCharacters[key].name}</p>
      <button
        className="rounded-sm bg-custom-200 px-[7px] py-[2px] text-sm text-white"
        onClick={() => toggleCharacters(key, selectedCharacters[key].name)}
      >
        X
      </button>
    </div>
  ));
}

export default SearchBarSelectedCharacters;
