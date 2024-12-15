import NavigationOption from "./navigationOption"

const Navigation = () => {
    return (
        <div className="flex gap-8 mr-8">
            <NavigationOption Option="Artigos"/>
            <NavigationOption Option="Academia" AdditionalText="Mises"/>
            <NavigationOption Option="Livraria"/>
            <NavigationOption Option="Loja"/>
        </div>
    )
}

export default Navigation
