import { Dispatch, SetStateAction } from 'react';

export interface SearchInputType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}
