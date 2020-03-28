import withItemList from './../../hocs/withItemList';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemList from '../../Row/ItemList/ItemList';

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanets,
    }
}

const PlanetsList = withSWAPIService(withItemList(ItemList), mapMethodsToProps);

export default PlanetsList;