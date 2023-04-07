import classNames from 'classnames/bind';
import styles from './GoToTop.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function GoToTop() {
    return (
        <div className={cx('wrapper')}>
            <Button rounded className={cx('btn-getapp')}>
                Get app
            </Button>
            <Button circle className={cx('btn-totop')}>
                <FontAwesomeIcon icon={faForwardStep} rotation={270} />
            </Button>
        </div>
    );
}

export default GoToTop;
