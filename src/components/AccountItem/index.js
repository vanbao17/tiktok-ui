import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ avatar, nameUser, nickName, tick }) {
    return (
        <Link to={`/@${nickName}`}>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src={avatar} alt="hoaa" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{nameUser}</span>
                        {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}>{nickName}</span>
                </div>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    avatar: PropTypes.string,
    nameUser: PropTypes.string,
    nickName: PropTypes.string,
    tick: PropTypes.bool,
};
export default AccountItem;
