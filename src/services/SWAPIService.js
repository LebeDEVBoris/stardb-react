import imgage from './../images/no-data.png';

export default class SWAPIService {


    _apiBase = 'https://swapi.co/api/';
    _imgBase = 'https://starwars-visualguide.com/assets/img/'
    _regExp =  /\/([0-9]*)\/$/;

    requestData = async (url) => {
        // console.log('Requesting data... (', url, ')');
        const data = await fetch(url);
        // console.log('Got data! (', url, ')');

        if (!data.ok) {
            throw new Error('Could not get data from SWAPI.');
        }
        
        return data.json();
    }

    getPlanet = async (id) => {
        if (id === null) return;
        const data = await this.requestData(this._apiBase + `planets/${id}`);
        const itemId = data.url.match(this._regExp)[1];
        // https://starwars-visualguide.com/assets/img/planets/11.jpg
        // _imgBase = 'https://starwars-visualguide.com/assets/img/'

        let img;
        await fetch( this._imgBase + 'planets/' + id + '.jpg')
            .then((res) => {
                if (res.status === 200) {
                    img = res.url;
                }
                if (res.status === 404) {
                    img = imgage;
                }
            });

        const res = {
            id: itemId,
            name: data.name,
            rotationPeriod: data.rotation_period,
            climate: data.climate,
            gravity: data.gravity,
            terrain: data.terrain,
            population: data.population,
            diameter: data.diameter,
            img: img
        };
        return res;
    }

    getAllStarships = async () => {
        const res = await this.requestData(this._apiBase + 'starships');
        const data = [];
        res.results.forEach((elem) => {
            const id = elem.url.match(this._regExp)[1];
            data.push({
                id: id,
                name: elem.name,
                model: elem.model,
                manufacturer: elem.manufacturer,
                costInCredits: elem.cost_in_credits,
                length: elem.length,
                crew: elem.crew,
                passengers: elem.passengers,
                cargoCapacity: elem.cargo_capacity,
                img: this._imgBase + `starships/${id}.jpg`
            });
        });
        return data;
    }

    getStarship = async (id) => {
        if (id === null) return;
        const data = await this.requestData(this._apiBase + `starships/${id}`);
        const itemId = data.url.match(this._regExp)[1];
        const res = {
            id: itemId,
            name: data.name,
            model: data.model,
            manufacturer: data.manufacturer,
            costInCredits: data.cost_in_credits,
            length: data.length,
            crew: data.crew,
            passengers: data.passengers,
            cargoCapacity: data.cargo_capacity,
            img: this._imgBase + `starships/${itemId}.jpg`
        };
        return res;
    }

    getAllPlanets = async (slug) => {
        if ((slug === undefined) || (slug === null)) slug = '';
        const request = this._apiBase + 'planets' + slug;
        //console.log('sending request: ', request);
        const res = await this.requestData(this._apiBase + 'planets' + slug);
        
        const data = [];
        res.results.forEach((elem) => {
            const id = elem.url.match(this._regExp)[1];
            data.push({
                id: id,
                name: elem.name,
                population: elem.population,
                rotationPeriod: elem.rotation_period,
                diameter: elem.diameter,
                count: res.count
            });
        });
        //console.log('data received: ', data);
        return data;
        
    }

    //Due to a API bug we uses that way to get all peoples
    getAllPeople = async () => {
        const res = await this._getAllPeopleReqests();
        const data = [];
        res.forEach((elem) => {
            const id = elem.url.match(this._regExp)[1];
            data.push({
                id: id,
                name: elem.name,
                gender: elem.gender,
                eye: elem.eye_color,
                img: this._imgBase + `characters/${id}.jpg`
            });
        });
        return data;
    }

    // Due to a API bug we uses that way to get all peoples
    _getAllPeopleReqests = async () => {
        let data = [];
        for (let i = 1; i < 10; i++) {
            await this.requestData(this._apiBase + `people/${i}`)
                .then((obj) => {data.push(obj)});    
        }
        return data;
    }

    getPeople = async (id) => {
        if (id === null) return;
        const res = await this.requestData(this._apiBase + `people/${id}`);
        const idItem = res.url.match(this._regExp)[1];
        const data = {
            id: idItem,
            name: res.name,
            gender: res.gender,
            eye: res.eye_color,
            img: this._imgBase + `characters/${id}.jpg`
        }
        return data;
    }
}
