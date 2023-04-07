import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoItem from './VideoItem';
const cx = classNames.bind(styles);
function Videos() {
    return (
        <div className={cx('wrapper')}>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
        </div>
    );
}

export default Videos;
