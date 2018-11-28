import axios from 'axios';

const URL = `http://chetor.com/wp-json/wp/v2/posts?_embed&page=1`;

export function articlesListAll(){

    const request = axios.get(`${URL}`)
                    .then(response => response.data)
      
    console.log(request);

    return {
        type: 'GET_ARTICLES_ALL',
        payload: request
    };
}



/*
        console.log("object Mounted !!!");
        axios.get('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1')
            .then(Response => this.setState({cards : Response.data})) ;
            componentDidMount = () => {
                fetch('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1', {
                    method: 'GET'
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        cards: responseJson
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
                }
                //Alert.alert(this.state.albums.length === 0 ? 'zero':'more');
                */