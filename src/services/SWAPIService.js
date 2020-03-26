
export default class SWAPIService {


    _apiBase = 'https://swapi.co/api/';
    _imgBase = 'https://starwars-visualguide.com/assets/img/'
    _regExp =  /\/([0-9]*)\/$/;

    requestData = async (url) => {
        // console.log('Requesting data... (', url, ')');
        const data = await fetch(url);
        // console.log('Got data! (', url, ')');

        if (!data.ok) {
            console.log(data.status);
            throw new Error('Could not get data from SWAPI.');
        }
        
        return data.json();
    }

    getPlanet = async (id) => {
        const data = await this.requestData(this._apiBase + `planets/${id}`);
        const itemId = data.url.match(this._regExp)[1];
        // https://starwars-visualguide.com/assets/img/planets/11.jpg
        // _imgBase = 'https://starwars-visualguide.com/assets/img/'
        const res = {
            id: itemId,
            name: data.name,
            population: data.population,
            rotationPeriod: data.rotation_period,
            diameter: data.diameter,
            img: this._imgBase + `planets/${itemId}.jpg`
        };
        return res;
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

    // getAllPeople = async () => {
    //     let data = [];
    //     setTimeout(() => {
    //         data = [
    //             {
    //                 id: 1,
    //                 name: 'Person 1',
    //                 gender: 'Male',
    //                 eye: 'Red',
    //                 img: this._imgBase + `characters/1.jpg`
    //             },
    //             {
    //                 id: 2,
    //                 name: 'Person 2',
    //                 gender: 'Male',
    //                 eye: 'Red',
    //                 img: this._imgBase + `characters/2.jpg`
    //             },
    //             {
    //                 id: 3,
    //                 name: 'Person 1',
    //                 gender: 'Male',
    //                 eye: 'Red',
    //                 img: this._imgBase + `characters/3.jpg`
    //             },
    //             {
    //                 id: 4,
    //                 name: 'Person 4',
    //                 gender: 'Male',
    //                 eye: 'Red',
    //                 img: this._imgBase + `characters/4.jpg`
    //             },
    //         ]
    //     }, 500);
    //     return data;
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
