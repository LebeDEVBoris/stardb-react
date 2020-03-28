import withItemInfo from './../../hocs/withItemInfo';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemInfo from './../../Row/ItemInfo/ItemInfo'

const mapMethodsToProps = (swapi, id) => {
    return {
        getData: swapi.getPlanet,
        id: id
    }
}

const PlanetsInfo = withSWAPIService(withItemInfo(ItemInfo), mapMethodsToProps);

export default PlanetsInfo;