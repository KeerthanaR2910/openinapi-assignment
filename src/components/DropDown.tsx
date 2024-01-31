import { useState } from 'react'

const DropDown = ({ options, onSelect }: { options: string[]; onSelect: (tag: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative w-[150px] ">
            <button
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left border border-darker-gray text-sm rounded-md bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Select Tags</span>
                <svg
                    className="hs-dropdown-open:rotate-180 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute mt-1 w-full  z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 text-sm cursor-default select-none text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => onSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDown
