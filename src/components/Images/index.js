import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './Images.module.scss';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noInternet, ...props }, ref) => {
    const [fallback, setfallback] = useState('');
    const handleError = () => {
        setfallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
