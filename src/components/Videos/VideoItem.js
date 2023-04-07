import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import videos from '~/assets/videos';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {
    faFlag,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeHigh,
    faVolumeXmark,
    faCommentDots,
    faChevronDown,
    faLink,
} from '@fortawesome/free-solid-svg-icons';
import { CodeIcon, FacebookIcon, SendIcon, WhatsAppIcon, LinkIcon } from '../Icons';
import { EmailIcon, LineIcon, LinkedInIcon, PinterestIcon, RedditIcon, TelegramIcon, TwitterIcon } from '../Icons';
import Shares from '../Shares/Shares';
const cx = classNames.bind(styles);
function VideoItem() {
    const shareItem = [
        {
            icon: <CodeIcon width="2.6rem" height="2.6rem" />,
            title: 'Embed',
        },
        {
            icon: <SendIcon width="2.6rem" height="2.6rem" />,
            title: 'Send to friends',
        },
        {
            icon: <FacebookIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to facebook',
        },
        {
            icon: <WhatsAppIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Whatsapp',
        },
        {
            icon: <LinkIcon width="2.6rem" height="2.6rem" />,
            title: 'Copy link',
        },
    ];
    const moreItemShare = [
        ...shareItem,
        {
            icon: <TwitterIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Twitter',
        },
        {
            icon: <LinkedInIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <RedditIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Reddit',
        },
        {
            icon: <TelegramIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Email',
        },
        {
            icon: <LineIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Line',
        },
        {
            icon: <PinterestIcon width="2.6rem" height="2.6rem" />,
            title: 'Share to Pinterest',
        },
    ];
    const [onhideItemShare, setonhideItemShare] = useState(shareItem);
    const RenderNewItemsShare = () => {
        setonhideItemShare(moreItemShare);
    };
    const renderShare = () => {
        return (
            <Shares datas={onhideItemShare}>
                <h2 className={cx('see-more')} onClick={RenderNewItemsShare}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </h2>
            </Shares>
        );
    };
    const videoref = useRef();
    const playaudio = () => {
        videoref.current.play();
    };
    return (
        <div className={cx('video-item')}>
            <Link>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/241235507_122756253435175_8860236938452082186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GwS69qYLR_wAX_o1ZEv&_nc_ht=scontent.fdad8-1.fna&oh=00_AfCJqbXtFSRb6DgGmQZTnfIaOULuaoJm4dC4n03hXLdfaw&oe=64332C8A"
                    alt="BlackPink"
                />
            </Link>
            <div className={cx('body')}>
                <div className={cx('infor')}>
                    <Link className={cx('author')}>
                        <h3 className={cx('author-title')}>baor171103</h3>
                        <h4 className={cx('author-name')}>Phạm Văn Bảo</h4>
                    </Link>
                    <div className={cx('author-content')}>
                        <span className={cx('text-content')}>
                            Những đêm mưa rơi, mây mù giăng ngang kín lối Nhìn bóng mưa vỡ đôi, anh chợt thấy nước mắt
                        </span>
                        <strong className={cx('hashtag-content')}>#chill</strong>
                    </div>
                    <Link to="/music" className={cx('music-background')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <h4>nhạc nền - Phạm Văn Bảo</h4>
                    </Link>
                    <Button className={cx('button-follow')} outline>
                        Follow
                    </Button>
                </div>
                <div className={cx('content-video')}>
                    <div className={cx('video')}>
                        <video autoPlay className={cx('tag-video')} ref={videoref} onClick={playaudio}>
                            <source src={videos.video2} type="video/mp4" />
                        </video>
                        <div className={cx('action-video')}>
                            <div className={cx('volumn-icon')}>
                                <FontAwesomeIcon icon={faVolumeHigh} className={cx('icon', 'volumn', 'display')} />
                                <FontAwesomeIcon icon={faVolumeXmark} className={cx('icon', 'volumn', 'display')} />
                            </div>
                            <div className={cx('play-icon')}>
                                <FontAwesomeIcon icon={faPlay} className={cx('icon', 'play', 'display')} />
                                <FontAwesomeIcon icon={faPause} className={cx('icon', 'play', 'display')} />
                            </div>
                            <div className={cx('report', 'display')}>
                                <FontAwesomeIcon icon={faFlag} />
                                <span>Report</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('action-user')}>
                        <div className={cx('item')}>
                            <div className={cx('heart')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('icon-action')} />
                            </div>
                            <strong>7.8M</strong>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('comment')}>
                                <FontAwesomeIcon icon={faCommentDots} flip="horizontal" className={cx('icon-action')} />
                            </div>
                            <strong>145.6k</strong>
                        </div>
                        <Tippy
                            interactive
                            offset={[-25, 5]}
                            render={renderShare}
                            delay={[0, 700]}
                            placement="top-start"
                            onHide={() => {
                                setonhideItemShare(shareItem);
                            }}
                            className={cx('circle-tippy')}
                        >
                            <div className={cx('item')}>
                                <div className={cx('share')}>
                                    <FontAwesomeIcon icon={faShare} className={cx('icon-action')} />
                                </div>
                                <strong>15</strong>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
