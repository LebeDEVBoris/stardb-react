class SWAPIservice {
    
    _apiBase = 'https://swapi.co/api/';

    async getResources(request) {
        
        const response =  await fetch(request);
        if (!response.ok) {
            throw new Error('Error with API');
        }
        return await response.json();
    }

    async getPlanet(id) {
        const res = await this.getResources(this._apiBase + `planets/${id}`);
        return this._transformPlanet(res);
    }

    async getPeopleList() {
        const res = await this.getResources(this._apiBase + 'people');
        return res.results;
    }

    _transformPlanet(body) {
        const regexpID = /\/([0-9]*)\/$/;
        const id = body.url.match(regexpID)[1];
        return {
            id,
            title: body.name,
            population: body.population,
            rotationPeriod: body.rotation_period,
            diameter: body.diameter
        };
    }

    // _transformPeopleList(body) {
    //     const regexpID = /\/([0-9]*)\/$/;
    //     const id = body.url.match(regexpID)[1];

    //     return body.results;
    // }
}

export default SWAPIservice;