

export const getGifs = async( category ) => {

    console.log(category)

    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=5&api_key=yh9KLpeBbd8ArDeTuuUKHSkMa8w8htLP`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map ( img => {

        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}