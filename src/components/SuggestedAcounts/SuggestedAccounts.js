import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from '~/components/SuggestedAcounts/AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItem
                nickname="pham van bao"
                name="vanbao171103"
                avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680840000&x-signature=8eRWnvpLqK9eDHrn6e6M1zLxSk0%3D"
            ></AccountItem>
            <AccountItem
                nickname="pham van bao"
                name="vanbao171103"
                avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680840000&x-signature=8eRWnvpLqK9eDHrn6e6M1zLxSk0%3D"
            ></AccountItem>
            <AccountItem
                nickname="pham van bao"
                name="vanbao171103"
                avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680840000&x-signature=8eRWnvpLqK9eDHrn6e6M1zLxSk0%3D"
            ></AccountItem>
            <AccountItem
                nickname="pham van bao"
                name="vanbao171103"
                avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680840000&x-signature=8eRWnvpLqK9eDHrn6e6M1zLxSk0%3D"
            ></AccountItem>
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

export default SuggestedAccount;
