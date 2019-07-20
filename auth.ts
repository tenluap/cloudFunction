export const auth = () => {
    (!process.env.GOOGLE_APPLICATION_CREDENTIALS)
        ? process.env.GOOGLE_APPLICATION_CREDENTIALS = "D:/ehigiepaul/Documents/Projects/clients/openstakes/openstakes-cdbb5f20b47d.json"
        : null
}



