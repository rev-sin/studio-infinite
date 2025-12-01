import { Link } from "@tanstack/react-router"
function Navbar() {
    const links = [
        {name: 'Home', to: '/' },
        {name: 'Projects', to: '/projects' },
        {name: 'About', to: '/about' },
        {name: 'Contact', to: '/contact' },
    ]


  return (
    <div className="min-w-full border-b border-black/10 top-0 sticky">
      <nav className="w-[80%] mx-auto flex items-center justify-between py-10 px-4">
            <h1 className="text-xl tracking-wide">Studio-Infinite</h1>
            <ul className="flex gap-8 text-base font-medium tracking-wide">
             {links.map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                className="transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
              <span className="
  absolute left-0 -bottom-1
  h-0.5 w-0 bg-black
  transition-all duration-300
  group-hover:w-full
"></span>

            </li>
          ))}

            </ul>
      </nav>
    </div>
  )
}

export default Navbar
