# Myanmar Glass Calendar

<div align="center">
  <img src="/public/icon.svg" alt="Myanmar Glass Calendar Icon" width="120" height="120">
</div>

A beautiful, modern calendar application that displays Myanmar dates with an Apple Glass design aesthetic.

## Features

- 🎨 **Apple Glass Design**: Beautiful frosted glass UI with backdrop blur effects
- 📅 **Myanmar Calendar Integration**: Displays Myanmar dates alongside Gregorian dates
- 🔮 **Baydin Astrology**: Shows Myanmar astrology information including:
  - Maharbote (birth sign based on day of week)
  - Numerology
  - Chinese Zodiac
  - Western Zodiac in Burmese
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Interactive UI**: Click on any date to see detailed Myanmar calendar information
- 🎯 **Navigation**: Easy month/year navigation with searchable dropdowns
- ⚡ **Fast**: Built with Next.js 15 and Turbopack for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Myanmar Calendar**: mycal library
- **Myanmar Astrology**: baydin library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd myanmar-glass-calendar
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To create a production build:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Design Philosophy

The application uses an **Apple Glass Design** aesthetic featuring:

- Frosted glass effect with `backdrop-blur`
- Semi-transparent backgrounds with alpha channels
- Smooth animations and transitions
- Elegant color gradients (indigo, purple, pink)
- Rounded corners with generous padding
- Subtle shadows and glows
- Responsive layouts that adapt to any screen size

## Myanmar Calendar Features

The calendar displays:

- Myanmar month and day names
- Fortnight day (waxing/waning moon phase)
- Myanmar year
- Day of the week in Burmese

When you click on a date, you'll see additional astrology information:

- **Maharbote**: Your birth sign based on the day of the week you were born
- **Numerology**: Your numerology number and meaning
- **Chinese Zodiac**: The animal year in Burmese
- **Zodiac Sign**: Western zodiac sign in Burmese

## Project Structure

```
myanmar-glass-calendar/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main calendar page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── CalendarHeader.tsx   # Navigation header
│   │   ├── CalendarGrid.tsx     # Calendar grid display
│   │   ├── DateModal.tsx        # Date details modal
│   │   └── PickerModal.tsx      # Month/Year picker modal
│   ├── lib/
│   │   └── loadScript.ts        # Script loading utility
│   └── types/
│       └── myanmar.d.ts         # TypeScript type definitions
├── public/
│   └── favicon/                 # Favicon assets
└── package.json
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

[Add your license here]

## Credits

- Myanmar Calendar calculations: [mycal](https://www.npmjs.com/package/mycal)
- Myanmar Astrology: [baydin](https://www.npmjs.com/package/baydin)
- Icons: [Lucide](https://lucide.dev/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
