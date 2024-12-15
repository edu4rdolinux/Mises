import Navigation from "./navigation"
import Title from "./title"

const Header = () => {
    return (
        <div className="flex mt-5 justify-between">
            <Title/>
            <Navigation/>
        </div>
    )
}

export default Header