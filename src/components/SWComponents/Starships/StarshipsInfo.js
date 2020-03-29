import withItemInfo from './../../hocs/withItemInfo';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemInfo from './../../Row/ItemInfo/ItemInfo'

const mapMethodsToProps = (swapi, id) => {
    return {
        getData: swapi.getStarship,
        id: id,
        fields: {
            name: 'Name: ',
            model: 'Model: ',
            manufacturer: 'Manufacturer: ',
            costInCredits: 'Cost in credits: ',
            maxAtmospheringSpeed: 'Max speed: ',
            crew: 'Crew: ',
            passengers: 'Passengers: ',
            consumables: 'Consumables: ',
            hyperdriveRating: 'Hyperdrive Rating: ',
            MGLT: 'MGLT: ',
            starshipClass: 'Starship Class: '
        }
    }
}

const StarshipsInfo = withSWAPIService(withItemInfo(ItemInfo), mapMethodsToProps);

export default StarshipsInfo;