import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routesConfig from '~/config/routes';
import Image from '~/components/Images';
import {
    faAdd,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faFaceSmile,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, SendIconHeader } from '~/components/Icons';
import Search from '~/components/Layout/components/Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
export const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
    },
    {
        icon: <FontAwesomeIcon icon={faFaceSmile} />,
        title: 'Get coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        borderTop: true,
    },
];
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logoLink')}>
                        <img src={images.logo} alt="tiktok"></img>
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                text
                                leftIcon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}
                                className={cx('upload-icon')}
                            >
                                Upload
                            </Button>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <SendIconHeader />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <div className={cx('messages-content')}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                    <span className={cx('index-message')}>15</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-Avatar')}
                                src="https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/241235507_122756253435175_8860236938452082186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GwS69qYLR_wAX_o1ZEv&_nc_ht=scontent.fdad8-1.fna&oh=00_AfCJqbXtFSRb6DgGmQZTnfIaOULuaoJm4dC4n03hXLdfaw&oe=64332C8A"
                                alt="Nguyen Van A"
                                fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX3eLkGDyyVmtUh3Hk00Nz8iXGKRFKbZDRkRKrKOV&s"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
