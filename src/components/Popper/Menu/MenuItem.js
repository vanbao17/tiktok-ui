import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        borderTop: data.borderTop,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
