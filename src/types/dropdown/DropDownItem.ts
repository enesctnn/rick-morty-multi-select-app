import { DropDownSearchedNameType } from './DropDownSearchedName';

export interface DropDownItemType extends DropDownSearchedNameType {
  id: string;
  image: string;
  episodes: number;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
