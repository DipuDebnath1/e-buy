 
const Footer = () => {
    return (
      <div className="bg-gray-700 mt-[5rem]">
          <footer className="footer p-10 text-base-content max-w-7xl mx-auto">
            <aside>
                <h1 className="text-3xl text-white">E-<span className="font-bold text-red-600">BuY</span></h1>
                <p className="text-white">Providing reliable tech since 1992</p>
            </aside> 
            <nav className="text-white">
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav className="text-white">
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav className="text-white">
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
      </div>
    );
};

export default Footer;