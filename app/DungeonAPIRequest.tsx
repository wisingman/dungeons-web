export default async function DungeonAPIRequest(route: string, method: string) {
    // Perform an HTTP request to the given route with the specified method
    let res = await fetch(process.env.API_BASE_URL + route, {
        method: method.toUpperCase(),  // Convert the method to uppercase to ensure correct HTTP method (e.g., GET, POST)
        headers: {
            Authorization: `${process.env.API_KEY}`  // Include the API key in the Authorization header for authentication
        },
        next: {
            revalidate: 30  // Set the revalidation time for caching purposes (e.g., cache the response for 30 seconds)
        }
    });

    return res;  // Return the response object
}