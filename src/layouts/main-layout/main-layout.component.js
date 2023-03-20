import classNamesBinding from 'classnames/bind';
import Header from '../components/header/header.component';
import Sidebar from '../components/sidebar/sidbar.component';
import styles from './main-layout.module.scss';

const css = classNamesBinding.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={css('wrapper')}>
            <Header />
            <div className={css('container')}>
                <Sidebar />
                <div className={css('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
