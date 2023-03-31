import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SideBar.module.scss';
import { HouseIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import { currentUser } from '../../components/Header';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <div className={cx('containerSideBar')}>
            <div className={cx('nav-sidebar')}>
                <Button to="/" bigFont leftIcon={<HouseIcon />}>
                    For you
                </Button>
                <Button to="/following" bigFont leftIcon={<UserGroupIcon />}>
                    Following
                </Button>
                <Button to="/live" bigFont leftIcon={<LiveIcon />}>
                    LIVE
                </Button>
            </div>
            {currentUser ? (
                <></>
            ) : (
                <div className={cx('tutorial-login')}>
                    <p>Log in to follow creator, like videos, and view comments.</p>
                    <Button outline className={cx('btn-login')}>
                        Log in
                    </Button>
                </div>
            )}
        </div>
    );
}

export default SideBar;
