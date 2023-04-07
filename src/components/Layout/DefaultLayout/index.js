import Header from '~/components/Layout/components/Header';
import SideBar from '../components/SideBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import GoToTop from '../components/GoToTop/GoToTop';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <SideBar></SideBar>
                <div className={cx('content')}>{children}</div>
            </div>
            <GoToTop></GoToTop>
        </div>
    );
}

export default DefaultLayout;
