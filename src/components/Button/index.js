import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    leftIcon,
    rightIcon,
    bigFont = false,
    children,
    outline = false,
    small = false,
    primary = false,
    disable = false,
    rounded = false,
    text = false,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        if (href) {
            props.href = href;
            Comp = 'a';
        }
    }
    if (disable) {
        Object.keys(props).forEach((prop) => {
            if (prop.startsWith('on') && typeof props[prop] === 'function') {
                delete props[prop];
            }
        });
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        text,
        bigFont,
        disable,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
