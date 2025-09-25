# Facebook Clone

This project is a simple Facebook-like application that allows users to create and view posts. It is built using React and provides a user-friendly interface for adding posts, displaying them in a list, and managing the overall application state.

## Features

- **Add Post**: Users can create new posts with text input and options to add photos or locations.
- **View Posts**: All posts are displayed in a list format, allowing users to see what others have shared.
- **Responsive Design**: The application is designed to be responsive and user-friendly across different devices.

## Project Structure

```
facebook-clone
├── public
│   ├── index.html
│   └── images
│       └── placeholder.png
├── src
│   ├── components
│   │   ├── AddPost
│   │   │   ├── AddPost.js
│   │   │   └── addPost.css
│   │   ├── Post
│   │   │   ├── Post.js
│   │   │   └── post.css
│   │   ├── PostList
│   │   │   ├── PostList.js
│   │   │   └── postList.css
│   │   └── Header
│   │       ├── Header.js
│   │       └── header.css
│   ├── hooks
│   │   └── usePosts.js
│   ├── utils
│   │   └── helpers.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd facebook-clone
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.