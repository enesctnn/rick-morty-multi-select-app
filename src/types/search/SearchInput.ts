import { Dispatch, SetStateAction } from 'react';

export interface SearchInputType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}
