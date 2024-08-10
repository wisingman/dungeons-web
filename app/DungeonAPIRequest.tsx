export default async function DungeonAPIRequest(route: string, method: string) {
    let res = await fetch(process.env.API_BASE_URL + route, {
        method: method.toUpperCase(),
        headers: {
            Authorization: `${process.env.API_KEY}`
        },
        next: {
            revalidate: 30
        }
    })
    
    return res;
}