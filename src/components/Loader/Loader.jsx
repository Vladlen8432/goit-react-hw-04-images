import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div
      className={css.loaderContainer}
      style={{ transform: 'translateX(6%)' }}
    >
      <InfinitySpin type="Puff" color="#00BFFF" height={400} width={400} />
    </div>
  );
};

export default Loader;
