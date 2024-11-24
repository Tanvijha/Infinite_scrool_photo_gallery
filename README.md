
# Infinite Scroll Photo Gallery

A responsive photo gallery application built using React.js and the Unsplash API. The application features infinite scrolling, seamless photo loading, and performance optimizations. Designed to provide a smooth user experience for viewing stunning images.

## Features

- **Infinite Scrolling:** Automatically fetches and displays more photos as you scroll.
- **Responsive Design:** Optimized for devices of all sizes, from mobile to desktop.
- **Error Handling:** Gracefully handles API errors with user-friendly messages.
- **Loading Indicator:** Displays a spinner while fetching new photos.
- **Performance Optimizations:**
  - Local caching to avoid redundant API calls.
  - Debounced scroll listener for efficient event handling.
- **Accessibility:** Designed with ARIA attributes and keyboard navigation in mind.

## Demo

[Visit the live demo](https://github.com/Tanvijha/Infinite_scrool_photo_gallery.git) (if deployed on GitHub Pages or similar).

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Tanvijha/Infinite_scrool_photo_gallery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Infinite_scrool_photo_gallery
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create an `.env` file in the root directory with your Unsplash API key:
   ```env
   REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
   ```
   Replace `your_unsplash_api_key` with your actual Unsplash API key. You can obtain one by creating a developer account on [Unsplash](https://unsplash.com/developers).

5. Start the development server:
   ```bash
   npm start
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Usage

- Scroll down to load more photos automatically.
- Hover over a photo for additional details (if implemented).
- Enjoy a smooth and responsive browsing experience.

## Folder Structure

```
src/
├── components/
│   ├── PhotoCard/                  // Main component rendering the photo gallery
│   │   ├── PhotoCard.js
│   │   └── PhotoCard.module.css
│   ├── PhotoGrid/
│   │   ├── PhotoGrid.js
│   │   ├── PhotoGrid.module.css
│   │   └── hooks/
│   │       └── usePhotoLoader.js   // Custom hook for loading photos
│   ├── Spinner/
│   │   ├── Spinner.js
│   │   └── Spinner.module.css
├── services/
│   └── unsplashService.js          // Handles API requests to Unsplash
├── styles/
│   ├── global.css
│   └── variables.css
├── utils/
│   └── errorHandler.js
├── App.js                          // Root component
├── index.js                        // Application entry point
└── .env
```

## Technologies Used

- **Frontend:** React.js, CSS
- **API:** Unsplash API
- **Tooling:** Webpack, ESLint, Prettier

## Roadmap

- [ ] Add hover effects for photo details.
- [ ] Enhance accessibility for screen readers.

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
