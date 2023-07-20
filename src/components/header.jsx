import trollFaceIcon from '../img/trollFace.svg'
export default function Header() {
    return (
        <div className="h-16 text-white rounded bg-gradient-to-r from-purple-600 via-indigo-700 to-pink-800 border-b-4 border-red-950 border-r-4 border-double flex justify-between items-center">
            <div className="flex ml-5">
                <img src={trollFaceIcon} alt="Error" className="w-8 h-8 pb-1" />
                <h2 className="text-xl ml-1">Haider Generator</h2>
            </div>


            <h4 className="mr-8">Powered by Sobi©</h4>
        </div>
    )
}