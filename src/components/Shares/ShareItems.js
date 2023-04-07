import classNames from 'classnames/bind';
import styles from './Shares.module.scss';
const cx = classNames.bind(styles);
function ShareItems({ dataItem }) {
    return (
        <div className={cx('share-item')}>
            {dataItem.icon}
            <span>{dataItem.title}</span>
        </div>
    );
}

export default ShareItems;
