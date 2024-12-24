import Navigation from "./navigation"
import Socials from "./socials"
import Title from "./title"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex">
                <Socials/>
                <Title/>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header