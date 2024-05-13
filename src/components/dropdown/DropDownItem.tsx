import { useContext, useRef } from 'react';
import {
  DropDownSelectedCharacterContext,
  ToggleDropDownSelectedCharacterContext,
} from '../../context/DropDownContext';
import { DropDownItemType } from '../../types/dropdown/DropDownItem';
import DropDownSearchedName from './DropDownSearchedName';

function DropDownItem({
  episodes,
  id,
  image,
  name,
  searchTerm,
}: DropDownItemType) {
  const selectedItems = useContext(DropDownSelectedCharacterContext);
  const toggleCharacter = useContext(ToggleDropDownSelectedCharacterContext);

  const toggleCharacterHandler = () => toggleCharacter(id, name);
  const liRef = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={liRef}
      className={`flex w-full items-center space-x-3 border-b border-custom-100 px-2 py-4 text-custom-300 focus:bg-black`}
    >
      <input
        type="checkbox"
        name="character"
        id={id}
        className="h-5 w-5 cursor-pointer"
        checked={!!selectedItems[id]}
        onChange={toggleCharacterHandler}
      />
      <button
        className="flex h-full w-full items-center gap-2"
        onClick={toggleCharacterHandler}
      >
        <img
          src={image}
          alt={name + ' named Rick&Morty series character image'}
          className="h-10 w-10 shrink-0 rounded-md object-cover object-center"
        />
        <div className="w-full overflow-hidden text-left">
          <h1 className="truncate">
            <DropDownSearchedName searchTerm={searchTerm} name={name} />
          </h1>
          <p>{episodes} Episodes</p>
        </div>
      </button>
    </li>
  );
}

export default DropDownItem;
