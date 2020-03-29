import withItemInfo from './../../hocs/withItemInfo';
import withSWAPIService from './../../hocs/withSWAPIService';
import ItemInfo from './../../Row/ItemInfo/ItemInfo'

const mapMethodsToProps = (swapi, id) => {
    return {
        getData: swapi.getPeople,
        id: id,
        fields: {
            name: 'Name: ',
            height: 'Height: ',
            mass: 'Mass: ',
            hairColor: 'Hair Color: ',
            skinColor: 'Skin Color: ',
            eyeColor: 'Eye Color: ',
            birth: 'Birth: ',
            gender: 'Gender: ',
        }
    }
}

const PeopleInfo = withSWAPIService(withItemInfo(ItemInfo), mapMethodsToProps);

export default PeopleInfo;