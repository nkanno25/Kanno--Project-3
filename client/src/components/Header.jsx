import logo1 from './assets/logo1.png';


export default function Header() {
    return (
        <nav className='navbar bg-light mb-6 p-0'>
            <div className='container'>
                <a className='navbar-brand' href="/">
                    <div className='d-flex'>
                        <img src={logo1} alt='logo' className='mr-3' />
                        <div>The Office Experience</div>
                    </div>
                </a>
            </div>
        </nav>
    );
}
