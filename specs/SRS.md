# Software Requirements Specification (SRS)
## Myanmar Calendar Application

### 1. Introduction

#### 1.1 Purpose
This document outlines the requirements for the Myanmar Calendar application, a web-based calendar that displays both Gregorian and Myanmar dates with astrological information.

#### 1.2 Scope
The application provides a dual calendar system showing Myanmar calendar information alongside the standard Gregorian calendar, with features for date navigation, detailed date information, and astrological insights.

### 2. System Overview

#### 2.1 Technology Stack
- **Framework**: Next.js (React-based framework)
- **Frontend**: React, TypeScript, Tailwind CSS
- **External Libraries**:
  - mycal (Myanmar calendar calculations)
  - baydin (Astrological calculations)
- **Deployment**: Next.js application (Vercel or compatible hosting)

#### 2.2 Target Users
- Myanmar calendar users
- People interested in Myanmar cultural dates and astrology
- Users requiring dual calendar system (Gregorian/Myanmar)

### 3. Functional Requirements

#### 3.1 Calendar Display
- **FR-001**: Display calendar in grid format with 7 columns (days of week)
- **FR-002**: Show Gregorian dates in calendar cells
- **FR-003**: Display Myanmar date information (month, day, fortnight day) in each cell using mycal library
- **FR-004**: Highlight current date with distinct styling
- **FR-005**: Support responsive design for mobile and desktop

#### 3.2 Navigation Features
- **FR-006**: Previous/Next month navigation buttons
- **FR-007**: Month selection dropdown with search functionality
- **FR-008**: Year selection dropdown with search functionality
- **FR-009**: "Go to Today" button to return to current date
- **FR-010**: Support years from 1885 to current year + 100

#### 3.3 Date Information Modal
- **FR-011**: Click on any date to show detailed information modal
- **FR-012**: Display full Myanmar date information using mycal library
- **FR-013**: Show astrological information using baydin library:
  - Maharbote (birth planet) - `baydin.maharbote(year, weekday)`
  - Numerology calculation - `baydin.numerology(date)`
  - Chinese zodiac sign - `baydin.chineseZodiac(year)`
  - Myanmar zodiac sign - `baydin.zodiac(date, month)`
- **FR-014**: Close button to dismiss modal

#### 3.4 User Interface Features
- **FR-015**: Dark theme interface
- **FR-016**: Responsive layout for different screen sizes
- **FR-017**: Mobile-optimized modal interfaces for month/year selection
- **FR-018**: Keyboard shortcuts (ESC to close modals)
- **FR-019**: Smooth animations and transitions

### 4. Non-Functional Requirements

#### 4.1 Performance
- **NFR-001**: Initial page load should complete within 3 seconds
- **NFR-002**: Calendar navigation should be instantaneous
- **NFR-003**: Date calculations should complete within 100ms

#### 4.2 Usability
- **NFR-004**: Interface should be intuitive and require no training
- **NFR-005**: Support both touch and mouse interactions
- **NFR-006**: Clear visual feedback for all interactive elements

#### 4.3 Compatibility
- **NFR-007**: Support modern web browsers (Chrome, Firefox, Safari, Edge)
- **NFR-008**: Responsive design for devices 320px to 1920px width
- **NFR-009**: No external dependencies beyond CDN libraries

#### 4.4 Accessibility
- **NFR-010**: Semantic HTML structure
- **NFR-011**: ARIA labels for navigation buttons
- **NFR-012**: Keyboard navigation support

### 5. External Dependencies

#### 5.1 Third-party Libraries
- **mycal**: Myanmar calendar calculation library
  - Package: `mycal@latest`
  - Purpose: Convert Gregorian dates to Myanmar calendar system
  - Features: Myanmar date calculations, month/day names, calendar conversions
- **baydin**: Myanmar astrological calculation library
  - Package: `baydin@latest`
  - Purpose: Calculate Myanmar astrological information
  - Features: Maharbote (birth planets), numerology, Chinese zodiac, Myanmar zodiac signs
- **Tailwind CSS**: Utility-first CSS framework
  - Package: `tailwindcss@latest`
  - Purpose: Styling and responsive design

#### 5.2 Package Dependencies
- External libraries installed via npm/yarn
- Server-side processing capabilities with Next.js

#### 5.3 Package Installation
```json
{
  "dependencies": {
    "mycal": "latest",
    "baydin": "latest"
  },
  "devDependencies": {
    "@tailwindcss/vite": "latest",
    "tailwindcss": "latest"
  }
}
```

#### 5.4 Library Usage
```javascript
// Myanmar Calendar Calculations
import mycal from 'mycal';

// Convert Gregorian date to Myanmar date
const gregorianDate = "10/15/2024";
const myanmarDate = new mycal(gregorianDate);
console.log(myanmarDate.month.my); // "တန်ခူး"
console.log(myanmarDate.day.mp.my); // "လပြည့်"

// Myanmar Astrological Calculations
import baydin from 'baydin';

// Calculate astrological information
const weekDayNumber = new Date(gregorianDate).getDay() + 1;
const dateNumber = new Date(gregorianDate).getDate();
const yearNumber = new Date(gregorianDate).getFullYear();
const monthNumber = new Date(gregorianDate).getMonth() + 1;

const maharbote = baydin.maharbote(yearNumber, weekDayNumber);
const numerology = baydin.numFormat(baydin.numerology(dateNumber));
const chineseZodiac = baydin.chineseZodiac(yearNumber);
const myanmarZodiac = baydin.zodiac(dateNumber, monthNumber);
```

### 6. Data Requirements

#### 6.1 Date Range
- **DR-001**: Support Gregorian dates from 1885 to current year + 100
- **DR-002**: Calculate corresponding Myanmar dates for supported range
- **DR-003**: Store no persistent user data

#### 6.2 Localization
- **DR-004**: Display Myanmar text in appropriate script
- **DR-005**: English month names for navigation
- **DR-006**: Myanmar calendar terms and astrological terminology

### 7. Security Considerations

#### 7.1 Web Security
- **SC-001**: No user data collection or storage
- **SC-002**: All external libraries loaded from trusted CDNs
- **SC-003**: No server-side components or databases

### 8. Deployment Requirements

#### 8.1 Hosting
- **DP-001**: Next.js-compatible hosting (Vercel, Netlify, etc.)
- **DP-002**: HTTPS support required
- **DP-003**: Server-side rendering capabilities (SSR/SSG)

#### 8.2 File Structure
- **DP-004**: Next.js project structure with pages/components
- **DP-005**: Favicon files in /public/ directory
- **DP-006**: Build process required (next build)

### 9. Maintenance and Updates

#### 9.1 Version Control
- **MN-001**: Version control using Git
- **MN-002**: Semantic versioning for releases

#### 9.2 Updates
- **MN-003**: Regular updates to external library versions
- **MN-004**: Security updates for dependencies

### 10. Assumptions and Constraints

#### 10.1 Assumptions
- **AS-001**: Users have modern web browser with JavaScript enabled
- **AS-002**: Internet connection available for CDN resources
- **AS-003**: Device screen size minimum 320px width

#### 10.2 Constraints
- **CS-001**: Next.js application with server-side capabilities
- **CS-002**: Offline functionality not supported
- **CS-003**: No data persistence between sessions (unless implemented)

### 11. Approval

This document has been reviewed and approved for development.

**Date**: October 4, 2025
**Version**: 1.0
**Author**: System Analysis
