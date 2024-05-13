export interface DropDownType {
  searchTerm: string;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isModalOpen: boolean;
}
