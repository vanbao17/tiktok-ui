import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useDebounce } from '~/Hooks';
const cx = classNames.bind(styles);
function Search() {
    const [searchText, setsearchText] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showTippySearch, setshowTippySearch] = useState(true);
    const [loading, setloading] = useState(false);
    const debounce = useDebounce(searchText, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setsearchResult([]);
            return;
        }
        setloading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((datas) => {
                setsearchResult(datas.data);
                setloading(false);
            });
    }, [debounce]);
    const handleOutside = () => {
        setshowTippySearch(false);
    };

    return (
        <HeadlessTippy
            interactive={true}
            visible={showTippySearch && searchResult.length > 0}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((user) => {
                            return (
                                <AccountItem
                                    key={user.id}
                                    avatar={user.avatar}
                                    nameUser={user.full_name}
                                    nickName={user.nickname}
                                    tick={user.tick}
                                    to={'/@'}
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleOutside}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    type="text"
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => {
                        setsearchText(e.target.value);
                    }}
                    onFocus={() => {
                        setshowTippySearch(true);
                    }}
                />
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loadding')}></FontAwesomeIcon>}
                {!!searchText && !loading && (
                    <button
                        className={cx('close')}
                        onClick={() => {
                            setsearchText('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
