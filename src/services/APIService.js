import axios from 'axios';

const URL_API = 'http://17b5dcd75d15.ngrok.io/api/';
//const URL_API = 'https://musipath-api.herokuapp.com/api/';

class ArtistaService {

    getArtistas(){
        return axios.get(URL_API + 'artistas/buscartodos');
    }

    getArtistaPorNome(nome){
        console.log('Busca por nome: ' + nome);
        return axios.get(URL_API + 'artistas/buscarpornome/' + nome);
    }

    getArtistaPorMbid(mbid){
        console.log('Busca por mbid: ' + mbid);
        return axios.get(URL_API + 'artistas/buscarpormbid/' + mbid);
    }

    getJsonGrafoArtista(tipoBusca, chave, nivelLimite, ramificacaoLimite){
        return axios.get(URL_API + 'grafo/grafoartista/' + tipoBusca + '/' + chave + '/' + nivelLimite + '/' + ramificacaoLimite);
    }

    getAlbumPorMbid(mbid){
        console.log('Busca por mbid: ' + mbid);
        return axios.get(URL_API + 'albuns/buscarpormbid/' + mbid);
    }

    getArtistaPorAlbumMbid(mbid){
        return axios.get(URL_API + 'artistas/buscarporalbummbid/' + mbid);
    }
}

export default new ArtistaService();