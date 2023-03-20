import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.page;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
