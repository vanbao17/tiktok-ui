import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);
function AccountItem({ nickname, name, avatar }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={avatar} alt="avatar" />
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            {nickname}
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <span className={cx('name')}>{name}</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    nickname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
export default AccountItem;
