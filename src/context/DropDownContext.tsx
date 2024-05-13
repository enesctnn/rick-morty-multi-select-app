import { createContext, useState } from 'react';

const DropDownSelectedCharacterContext = createContext<{
  [key: string]: { name: string };
}>({});

const ToggleDropDownSelectedCharacterContext = createContext<
  (id: string, name?: string) => void
>(() => {});

const DropDownRemoveSelectedLastCharacterContext = createContext<() => void>(
  () => {}
);

function DropDownContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedCharacters, setSelectedCharacters] = useState<{
    [key: string]: { name: string };
  }>({});

  const toggleCharacter = (id: string, name?: string) =>
    setSelectedCharacters(prevState => {
      if (prevState[id]) {
        delete prevState[id];
        return { ...prevState };
      }
      if (name) return { ...prevState, [id]: { name } };
      return { ...prevState };
    });

  const removeLastItem = () =>
    setSelectedCharacters(prevState => {
      const lastElementKey = Object.keys(prevState).pop();
      delete prevState[lastElementKey as keyof typeof selectedCharacters];
      return { ...prevState };
    });

  return (
    <DropDownSelectedCharacterContext.Provider value={selectedCharacters}>
      <ToggleDropDownSelectedCharacterContext.Provider value={toggleCharacter}>
        <DropDownRemoveSelectedLastCharacterContext.Provider
          value={removeLastItem}
        >
          {children}
        </DropDownRemoveSelectedLastCharacterContext.Provider>
      </ToggleDropDownSelectedCharacterContext.Provider>
    </DropDownSelectedCharacterContext.Provider>
  );
}

export {
  DropDownSelectedCharacterContext,
  ToggleDropDownSelectedCharacterContext,
  DropDownRemoveSelectedLastCharacterContext
};

export default DropDownContextProvider;
