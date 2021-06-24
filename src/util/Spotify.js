let accessToken
const clientId = ' 0040d85229c049bbbacaa42db4068bf4'
const redirectUrl = "http://localhost:3000/"
const Spotify = {
    getAccessToken(){
        if(accessToken){
            return
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresMatch){
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresMatch[1])

            window.setTimeout(()=> accessToken = '',expiresIn*1000)
            window.history.pushState('Access Token', null,'/')
            return accessToken
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location=accessUrl
        }
    },
    search(term){
        const accessToken = Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers:{
            Authorization: `Bearer ${accessToken}`
        }
    }).then(response=>{
        return response.json()
    }).then(jsonResponse=>{
        if(jsonResponse.tracks){
            return []
        }
        return jsonResponse.tracks.items.map(track=>({
            id: track.id,
            name:track.name,
            artist:track.artist[0].name,
            album:track.album.name,
            uri:track.uri
        }))
    })
    }
}

export default Spotify
