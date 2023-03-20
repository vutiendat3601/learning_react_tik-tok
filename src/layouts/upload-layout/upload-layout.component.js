import Header from '../components/header/header.component';

const UploadLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
};

export default UploadLayout;
