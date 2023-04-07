import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Videos from '~/components/Videos/Videos';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Videos></Videos>
        </div>
    );
}

export default Home;
