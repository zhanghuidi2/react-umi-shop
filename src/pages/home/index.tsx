import styles from './index.less';
import Search from './Search/index';
import Carousel from './Carousel/index';
import NavBar from './NavBar/index';
import Recomend from './Recomend/index';
export default function IndexPage() {
  return (
    <div>
      <Search />
      <Carousel />
      <NavBar />
      <Recomend />
    </div>
  );
}
