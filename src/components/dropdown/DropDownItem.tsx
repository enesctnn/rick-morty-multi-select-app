import { useContext, useEffect, useRef } from 'react';
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
  activeIndex,
  index,
  setActiveIndex,
}: DropDownItemType) {
  const selectedItems = useContext(DropDownSelectedCharacterContext);
  const toggleCharacter = useContext(ToggleDropDownSelectedCharacterContext);

  const toggleCharacterHandler = () => toggleCharacter(id, name);
  const onFocus = () => setActiveIndex(index);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      if (!activeIndex) button.blur();
      if (activeIndex === index) button.focus();
    }
  }, [activeIndex, index]);

  return (
    <button
      ref={buttonRef}
      role="listitem"
      className={`group flex w-full items-center space-x-3 border-b border-custom-100 px-2 py-4 text-custom-300 focus:my-1 focus:rounded-xl focus:border-2 focus:border-purple-500/60`}
      onClick={toggleCharacterHandler}
      onFocus={onFocus}
    >
      <input
        type="checkbox"
        name="character"
        id={id}
        className="group-focus: h-5 w-5 cursor-pointer"
        checked={!!selectedItems[id]}
        onChange={toggleCharacterHandler}
        onKeyDown={e => e.key === 'Enter' && toggleCharacterHandler()}
      />
      <div className="flex h-full w-full items-center gap-2">
        <img
          src={image}
          alt={name + ' named Rick&Morty series character image'}
          className="h-10 w-10 shrink-0 rounded-md object-cover object-center transition-all duration-300 group-focus:h-14 group-focus:w-14"
        />
        <div className="w-full overflow-hidden text-left transition-all duration-300 group-focus:text-xl">
          <h1 className="truncate">
            <DropDownSearchedName searchTerm={searchTerm} name={name} />
          </h1>
          <p>{episodes} Episodes</p>
        </div>
      </div>
    </button>
  );
}

export default DropDownItem;
