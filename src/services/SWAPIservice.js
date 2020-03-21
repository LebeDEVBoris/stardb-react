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
}

export default SWAPIservice;