import Header from '~/components/Layout/components/Header';
function DefaultLayout({ children }) {
    return (
        <div className="wrap">
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;