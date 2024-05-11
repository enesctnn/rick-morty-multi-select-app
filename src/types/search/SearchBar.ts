import { Dispatch, SetStateAction } from 'react';

export interface SearchBarType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}
