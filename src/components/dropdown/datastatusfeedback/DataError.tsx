import error_img from '../../../assets/images/rick&morty-error.jpg';

const DataError = () => (
  <div className="flex h-full w-full items-center justify-center overflow-hidden">
    <img
      src={error_img}
      alt="Rick&Morty 404 feedback image"
      className="-mt-14 h-5/6"
    />
  </div>
);

export default DataError;
