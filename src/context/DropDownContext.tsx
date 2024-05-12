import { createContext, useState } from 'react';

const DropDownSelectedCharacterContext = createContext<{
  [key: string]: { name: string };
}>({});
const ToggleDropDownSelectedCharacterContext = createContext<
  (id: string, name?: string) => void
>(() => {});

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
      return {...prevState}
    });

  return (
    <DropDownSelectedCharacterContext.Provider value={selectedCharacters}>
      <ToggleDropDownSelectedCharacterContext.Provider value={toggleCharacter}>
        {children}
      </ToggleDropDownSelectedCharacterContext.Provider>
    </DropDownSelectedCharacterContext.Provider>
  );
}

export {
  DropDownSelectedCharacterContext,
  ToggleDropDownSelectedCharacterContext,
};

export default DropDownContextProvider;
