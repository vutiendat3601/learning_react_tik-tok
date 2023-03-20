import MainLayout from '../layouts/main-layout/main-layout.component';
import UploadLayout from '../layouts/upload-layout/upload-layout.component';
import Following from '../pages/following/following.component';
import Profile from '../pages/profile/profile.component';
import Upload from '../pages/upload/upload.component';
import Home from '../pages/home/home.component';

const publicRoutes = [
    { path: '/', page: Home, layout: MainLayout },
    { path: '/following', page: Following, layout: MainLayout },
    { path: '/profile', page: Profile, layout: MainLayout },
    { path: '/upload', page: Upload, layout: UploadLayout },
];

export { publicRoutes };
