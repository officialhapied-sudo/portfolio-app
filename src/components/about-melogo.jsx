import logo from "../Assets/thumbnail-removebg-preview.png"
function Logo(){
    return(
    <header className="flex items-center gap-3 p-4 bg-gray-900 text-white">
      <img src={logo} alt="Logo" className="w-12 h-12" />
      <h1 className="text-2xl font-bold">My Website</h1>
    </header>
    )
}
export default Logo