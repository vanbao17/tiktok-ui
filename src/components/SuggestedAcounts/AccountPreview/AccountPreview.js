import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function AccountPreview({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680840000&x-signature=8eRWnvpLqK9eDHrn6e6M1zLxSk0%3D"
                    alt="User"
                />
                <Button primary>Following</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    {'Phạm Văn Bảo'}
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('name')}>vanbao171103</span>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8M</strong>
                <span className={cx('label')}>FOLLOWERS</span>
                <strong className={cx('value')}>123M</strong>
                <span className={cx('label')}>LIKES</span>
            </p>
        </div>
    );
}

export default AccountPreview;
