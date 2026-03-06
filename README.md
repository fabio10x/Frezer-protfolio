# The Mood Journal

A beautiful and interactive React application for tracking your daily moods. Capture how you feel with custom entries, color-coded emotions, and an intuitive interface built with React and Tailwind CSS.

## Features

- ✨ **Add Mood Entries**: Type your mood and select a color to add entries to your journal
- 🎨 **Color-Coded Emotions**: Choose from three color options (Red for Sad, Green for Happy, Blue for Calm)
- 📝 **Default Entries**: Starts with three default mood entries (Happy, Sad, Calm)
- 🗑️ **Delete Entries**: Remove individual mood entries with a single click
- 🔄 **Reset Functionality**: Reset your journal back to default entries with one click
- ⌨️ **Keyboard Support**: Press Enter to quickly add a mood entry
- 📊 **Entry Counter**: See the total number of mood entries at a glance
- ⏰ **Timestamps**: Each entry displays the time it was created

## Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "my react store"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
my-react-store/
├── src/
│   ├── TheMoodJournal.jsx  # Main mood journal component
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Application entry point
│   └── ...                 # Other components
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Usage

1. **Adding a Mood Entry**:
   - Type your mood in the input field
   - Select a color by clicking one of the color buttons (Red, Green, or Blue)
   - Click "Add Mood" or press Enter

2. **Deleting an Entry**:
   - Click the "×" button on any mood entry to remove it

3. **Resetting the Journal**:
   - Click the "Reset" button to clear all entries and restore the default three moods

## Component Details

### TheMoodJournal Component

The main component manages:
- Mood entries state (array of mood objects)
- Input text state
- Selected color state
- Functions for adding, deleting, and resetting moods

Each mood entry contains:
- `id`: Unique timestamp-based identifier
- `title`: The mood text
- `color`: Tailwind CSS class for the color indicator

## Customization

You can easily customize the app by:
- Adding more color options in the `colorOptions` array
- Modifying the default moods in `createInitialMoods()`
- Adjusting Tailwind CSS classes for styling
- Adding new features like editing entries or filtering by color

## License

This project is private and for educational purposes.

## Contributing

This is a personal project, but suggestions and feedback are welcome!

---

Made with ❤️ using React and Tailwind CSS
