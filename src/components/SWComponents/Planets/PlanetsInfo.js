import withItemInfo from './../../hocs/withItemInfo';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemInfo from './../../Row/ItemInfo/ItemInfo'

const mapMethodsToProps = (swapi, id) => {
    return {
        getData: swapi.getPlanet,
        id: id,
        fields: {
            name: 'Name: ',
            population: 'Population: ',
            rotationPeriod: 'Rotation Period: ',
            climate: 'Climate: ',
            gravity: 'Gravity: ',
            terrain: 'Terrain: ',
            diameter: 'Diameter: ' 
        }
    }
}

const PlanetsInfo = withSWAPIService(withItemInfo(ItemInfo), mapMethodsToProps);

export default PlanetsInfo;