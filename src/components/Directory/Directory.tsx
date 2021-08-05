import { FC } from 'react';
import GirlImage from '../../assets/img/girl-in-city.jpg';
import MenImage from '../../assets/img/men-in-city.jpg';
import Button from '../UI/Button/Button';

const Directory: FC = ({}) => {
  return (
    <div className="directory">
      <div className="directory__column directory__column--girl">
        <img src={GirlImage} alt="girl in city" />
        <Button>Shop Women's</Button>
      </div>
      <div className="directory__column directory__column--men">
        <img src={MenImage} alt="men in city" />
        <Button>Shop Men's</Button>
      </div>
    </div>
  );
};

export default Directory;
