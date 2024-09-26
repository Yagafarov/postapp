import { Link } from "react-router-dom"

const LinkItem = ({ href, icon: Icon, text, isSelected, onClick  }) => {
    return (
        <li>
            <Link to={href} onClick={onClick} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 hover:bg-blue-200  group ${isSelected ? 'bg-blue-500 text-white' : ''}`}
>
                <Icon className="mr-3" />
                <span className="flex-1 me-3">{text}</span>
            </Link>
        </li>
    )
}

export default LinkItem