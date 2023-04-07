import classNames from 'classnames/bind';
import styles from './Shares.module.scss';
import ShareItems from './ShareItems';
const cx = classNames.bind(styles);
function Shares({ datas, children }) {
    const currentItemsShare = datas.length;
    console.log();
    return (
        <div className={cx('wrapper')}>
            {datas.map((data, index) => {
                return <ShareItems key={index} dataItem={data} />;
            })}
            {currentItemsShare <= 5 ? children : <></>}
            <span className={cx('circle-tippy')}></span>
        </div>
    );
}

export default Shares;
