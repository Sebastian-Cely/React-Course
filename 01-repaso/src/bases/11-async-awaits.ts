import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'XfAZwy5R2ypWyUVRedn8XaVVNO2aB6zF';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async () => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;

}

getRandomGifUrl()
    .then(createImageInsideDOM)
    .catch((err) => {
        console.error(err);
    })

getRandomGifUrl().then(createImageInsideDOM);