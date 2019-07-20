export const auth = () => {
    (!process.env.GOOGLE_APPLICATION_CREDENTIALS)
        ? process.env.GOOGLE_APPLICATION_CREDENTIALS = "D:/ehigiepaul/Documents/Projects/clients/openstakes/openstakes-cdbb5f20b47d.json"
        : null
    if (process.env.NODE_ENV) {
        console.log('Serving function...');
        console.log(`Function: ${process.env.FUNCTION_TARGET}`);
        console.log(`URL: http://localhost:8080/`);

    }
}



