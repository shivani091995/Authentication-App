import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="bg-slate-200 h-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="font-bold">Auth App</h1>
            <ul className="flex gap-4">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/sign-in"><li>Sign In</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header