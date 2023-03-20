import classNamesBinding from 'classnames/bind';
import styles from './popper.module.scss';

const css = classNamesBinding.bind(styles);

const Popper = ({ children }) => {
    return <div className={css('popper')}>{children}</div>;
};

export default Popper;
