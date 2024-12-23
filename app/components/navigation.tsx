import NavigationOption from "./navigationOption"

const Navigation = () => {
    return (
        <div className="flex gap-36">
            <span className="ml-8"><NavigationOption Option="Quem" AdditionalText="Somos"/></span>
            <NavigationOption Option="Artigos"/>
            <NavigationOption Option="Academia" AdditionalText="Mises"/>
            <NavigationOption Option="Livraria"/>
            <span className="mr-8"><NavigationOption Option="Loja"/></span>
        </div>
    )
}

export default Navigation
