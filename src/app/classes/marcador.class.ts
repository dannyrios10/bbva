
export class Marcador {

    public lat: number;
    public lng: number;

    public titulo = 'Sin Dirección';
    public codigo = 'Sin Codigo';

    constructor( lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
    }
}