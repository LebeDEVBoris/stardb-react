import withItemList from './../../hocs/withItemList';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemList from '../../Row/ItemList/ItemList';

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPeople,
    }
}

const PeopleList = withSWAPIService(withItemList(ItemList), mapMethodsToProps);

export default PeopleList;