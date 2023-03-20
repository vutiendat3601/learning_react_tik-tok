import classNamesBinding from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import {
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import styles from './header.module.scss';
import { ReactComponent as TiktokLogo } from '../../../assets/images/logo.svg';
import { ReactComponent as BtnClearIcon } from '../../../assets/images/btn-clear.svg';
import Popper from '../../../components/popper/popper.component';
import AccountItem from '../../../components/account-item/account-item.component';
import Button from '../../../components/button/button.component';

const css = classNamesBinding.bind(styles);

const Header = () => {
    const [searchResults, setSearchResults] = useState([
        {
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1679418000&x-signature=7gJSwHF8zrEzux2vknP06MSNXx8%3D',
            name: 'Dat Vu',
            username: 'vutiendat3601',
        },
    ]);
    useEffect(() => {
        setSearchResults(searchResults);
    }, []);

    return (
        <header className={css('wrapper')}>
            <div className={css('inner')}>
                <div className={css('logo')}>
                    <TiktokLogo />
                </div>
                <HeadlessTippy
                    interactive
                    visible
                    render={(attrs) => {
                        return (
                            <div
                                className={css('search-results')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Popper>
                                    <h4 className={css('search-results-type')}>
                                        Accounts
                                    </h4>
                                    <AccountItem account={searchResults[0]} />
                                </Popper>
                            </div>
                        );
                    }}
                >
                    <div className={css('search-box')}>
                        <input
                            placeholder="Search account and videos"
                            spellCheck
                        />
                        <button className={css('clear')}>
                            <BtnClearIcon />
                            {/* {Clear} */}
                        </button>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={css('loading')}
                        />
                        <span className={css('search-box-separator')}></span>
                        <button className={css('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            {/* Search */}
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={css('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
