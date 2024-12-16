import Navigation from "./navigation"
import Title from "./title"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Title/>
            <Navigation/>
        </div>
    )
}

export default Header