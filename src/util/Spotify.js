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
    }

}

export default Spotify
