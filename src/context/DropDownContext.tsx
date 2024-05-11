import { createContext, Dispatch, SetStateAction, useState } from 'react';

const DropDownSelectedCharacterContext = createContext<{ name: string } | null>(
  null
);
const SetDropDownSelectedCharacterContext = createContext<
  Dispatch<SetStateAction<{ name: string } | null>>
>(() => {});

function DropDownContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedCharacters, setSelectedCharacters] = useState<{
    name: string;
  } | null>(null);

  return (
    <DropDownSelectedCharacterContext.Provider value={selectedCharacters}>
      <SetDropDownSelectedCharacterContext.Provider
        value={setSelectedCharacters}
      >
        {children}
      </SetDropDownSelectedCharacterContext.Provider>
    </DropDownSelectedCharacterContext.Provider>
  );
}

export {
  DropDownSelectedCharacterContext,
  SetDropDownSelectedCharacterContext,
};

export default DropDownContextProvider;
