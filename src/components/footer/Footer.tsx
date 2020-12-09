const Footer:React.FC = () => {
    return <footer className="bg-gray-900">
        <div className="px-6 md:px-0 container mx-auto xl:max-w-screen-xl">
            <nav className="py-8 border-b border-gray-700">
                <ul className="flex flex-col md:flex-row items-center -mx-3">
                    <li className="p-3 md:px-3 text-gray-200 hover:text-red-500 text-xs uppercase tracking-wide">
                        <a href="">Contatta cuggino</a>
                    </li>
                    <li className="p-3 md:px-3  text-gray-200 hover:text-red-500 text-xs uppercase tracking-wide">
                        <a href="">Privacy</a>
                    </li>
                    <li className="p-3 md:px-3  text-gray-200 hover:text-red-500 text-xs uppercase tracking-wide">
                        <a href="">Legal</a>
                    </li>
                    <li className="p-3 md:px-3 text-gray-200 hover:text-red-500 text-xs uppercase tracking-wide">
                        <a href="">Opensource</a>
                    </li>
                </ul>
            </nav>
            <div className="p-8 md:px-0 text-gray-200 text-xs text-center md:text-left">
            © { new Date().getFullYear() } Cuggino.dev™ All rights reserved
            </div>
        </div>
    </footer>
}

export default Footer;