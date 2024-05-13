import { DropDownSearchedNameType } from '../../types/dropdown/DropDownSearchedName';

export default function DropDownSearchedName({
  searchTerm,
  name,
}: DropDownSearchedNameType) {
  if (searchTerm.length > 0) {
    const matchingIndex = name.toLowerCase().indexOf(searchTerm.toLowerCase());
    return name.split('').map((letter, index) => {
      if (
        index >= matchingIndex &&
        index <= matchingIndex + searchTerm.length - 1
      ) {
        return <strong key={index}>{letter}</strong>;
      }
      return letter;
    });
  }
  return name;
}
