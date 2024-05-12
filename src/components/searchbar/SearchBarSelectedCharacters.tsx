import { useContext } from 'react';
import {
  DropDownSelectedCharacterContext,
  ToggleDropDownSelectedCharacterContext,
} from '../../context/DropDownContext';

function SearchBarSelectedCharacters() {
  const selectedCharacters = useContext(DropDownSelectedCharacterContext);
  const toggleCharacters = useContext(ToggleDropDownSelectedCharacterContext);

  return (
    <ul className="flex flex-wrap gap-2">
      {Object.keys(selectedCharacters).map(key => (
        <li key={key} className="flex w-max gap-1 bg-custom-200 items-center rounded-lg">
          <p className="text-custom-400 font-bold text-lg">{selectedCharacters[key].name}</p>
          <button
            className="border-custom-200 "
            onClick={() => toggleCharacters(key, selectedCharacters[key].name)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchBarSelectedCharacters;
