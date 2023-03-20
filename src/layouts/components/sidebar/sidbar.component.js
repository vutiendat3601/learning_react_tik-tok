import classNamesBinding from 'classnames/bind';
import styles from './sidebar.module.scss';

const css = classNamesBinding.bind(styles);

const Sidebar = () => {
    return (
        <aside className={css('wrapper')}>
            Default layout: Sidebar component
        </aside>
    );
};

export default Sidebar;
