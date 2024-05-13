import drinking_rick from '../../../assets/animated/drinking-rick.gif';

const EmptyResult = () => (
  <div className="flex h-full w-full items-center justify-center overflow-hidden">
    <img src={drinking_rick} alt="Rick drinking" className="h-2/3 rounded-xl" />
  </div>
);

export default EmptyResult;
