import MainHeader from './main-header'

const Layout = (props) => (
    // console.log('children', props.children);
    <>
        <MainHeader />
        <main>
            {props.children}
        </main>
    </>
)

export default Layout