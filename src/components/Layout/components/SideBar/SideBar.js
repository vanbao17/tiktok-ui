import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import {
    HouseIcon,
    LiveIcon,
    UserGroupIcon,
    HouseActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccount from '~/components/SuggestedAcounts/SuggestedAccounts';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" icon={<HouseIcon />} to={config.home} activeIcon={<HouseActiveIcon />} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    to={config.following}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} to={config.live} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount label="Suggested Accounts"></SuggestedAccount>
            <SuggestedAccount label="Following Accounts"></SuggestedAccount>
        </aside>
    );
}

export default SideBar;
