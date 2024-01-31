type ExternalSignInProps = {
    label: string,
    icon: () => JSX.Element
}

const ExternalSignIn = ({label,icon: Icon}: ExternalSignInProps) => {
    return (
        <div className=" hover:cursor-pointer flex gap-x-2 bg-white rounded-lg p-2 flex-1">
            <Icon />
            <span className="text-sm font-montserrat text-secondary-gray">{label}</span>
        </div>
    )
}

export default ExternalSignIn
