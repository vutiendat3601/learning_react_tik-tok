import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNamesBinding from 'classnames/bind';
import styles from './account-item.module.scss';

const css = classNamesBinding.bind(styles);

const AccountItem = ({ account }) => {
    return (
        <div className={css('wrapper')}>
            <img className={css('avatar')} src={account.avatar} alt="avatar" />
            <div className={css('info')}>
                <p className={css('name')}>
                    <span>{account.name}</span>
                    <FontAwesomeIcon className={css('verified')} icon={faCheckCircle} />
                </p>
                <span className={css('username')}>{account.username}</span>
            </div>
        </div>
    );
};

export default AccountItem;
