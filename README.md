# Dungeons-Web

Dungeons-Web is a web application that provides a user interface to interact with guild data from a private API on the Dungeons Minecraft server. The project displays detailed information about guilds, including their identifiers, owners, levels, associated worlds, and more.

**Note:** This project currently relies on a private API that is not publicly accessible. As a result, it cannot be installed or run successfully by users without access to this API. However, the codebase can be used as a template for similar projects.

## Features

- **Guild Overview**: Displays detailed information about guilds, including their identifier, short code, level, owner, and creation date.
- **World Details**: Lists all worlds associated with each guild, showing location coordinates and other relevant details.
- **Visitor Access**: Indicates whether visitors are allowed in the guild's world(s).

## Getting Started

### Prerequisites

Before exploring the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

**Note:** The API URL provided in .env.default is an example and will not function without access to the private API.

### Project Structure

- **/app**: Contains the main pages and components of the application.
- **/app/guilds**: Handles the fetching and displaying of guild data.
- **/app/DungeonAPIRequest.ts**: A utility function that manages API requests to the private Dungeons API.

### API Integration

The application interfaces with a private API provided by the Dungeons Minecraft server to fetch guild data. The API requests are managed using the `DungeonAPIRequest` utility, which handles HTTP methods and responses.

### Using This Project as a Template

Although the `Dungeons-Web` project cannot be run without access to the private API, the codebase is a valuable resource for developers looking to build similar applications. You can adapt the structure, components, and API integration techniques for your own projects, whether you're working with a public API or building your own backend.

### Contributing

Contributions to `Dungeons-Web` are welcome! If you find a bug or have a feature request, please open an issue. Feel free to fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.

### Contact

For any inquiries or support, please contact me through Discord (@wising) or at [maxmooredotuk@gmail.com](mailto:maxmooredotuk@gmail.com).