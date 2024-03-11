


const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '435506420040-ikft5q43aisgrhp32jvqgg6kr55l3ojs.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                "435506420040-pjo3seih8o59ud7g4mdffs8p9rv59ago.apps.googleusercontent.com",
                "435506420040-iduu65g9k51ka764465a8hkjv9nrs6i1.apps.googleusercontent.com",
            ],  
        });
        const payload = ticket.getPayload();

        console.log('============ PAYLOAD ============= ');
        console.log( payload );
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return null;
    }

   
}


module.exports = {
    validarGoogleIdToken
}

