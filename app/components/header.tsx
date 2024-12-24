import Navigation from "./navigation"
import Socials from "./socials"
import Title from "./title"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
                <Title/>
                <Socials/>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header