# Software Requirements Specification (SRS)

## Myanmar Calendar Application

### 1. Introduction

#### 1.1 Purpose

This document outlines the requirements for the Myanmar Calendar application, a web-based calendar that displays both Gregorian and Myanmar dates with astrological information.

#### 1.2 Scope

The application provides a dual calendar system showing Myanmar calendar information alongside the standard Gregorian calendar, with features for date navigation, detailed date information, and astrological insights.

### 2. System Overview

#### 2.1 Technology Stack

- **Framework**: Next.js (React-based framework with App Router)
- **Frontend**:
  - React 18+ with modern hooks and concurrent features
  - TypeScript for type safety and better developer experience
  - shadcn/ui component library (built on Radix UI primitives)
  - Tailwind CSS v4 with Apple Liquid Glass theme
  - next-themes for dark/light mode support
- **External Libraries**:
  - mycal (Myanmar calendar calculations)
  - baydin (Astrological calculations)
  - Radix UI primitives (accessible component foundations)
  - Lucide React (icon library)
  - class-variance-authority, clsx, tailwind-merge (utility functions)
- **Deployment**: Next.js application (Vercel or compatible hosting)

#### 2.2 Target Users

- Myanmar calendar users
- People interested in Myanmar cultural dates and astrology
- Users requiring dual calendar system (Gregorian/Myanmar)

### 3. Functional Requirements

#### 3.1 Calendar Display

- **FR-001**: Display calendar in grid format with 7 columns (days of week) using shadcn/ui Calendar component
- **FR-002**: Show Gregorian dates in calendar cells with proper typography and styling
- **FR-003**: Display Myanmar date information (month, day, fortnight day) in each cell using mycal library with shadcn/ui Badge components for special days
- **FR-004**: Highlight current date with distinct liquid glass styling using shadcn/ui Card components
- **FR-005**: Support responsive design for mobile and desktop with Tailwind CSS v4 container queries
- **FR-006**: Custom calendar day components with hover states and interactive animations
- **FR-007**: Accessibility features including ARIA labels and keyboard navigation built into shadcn/ui components

#### 3.2 Navigation Features

- **FR-008**: Previous/Next month navigation buttons using shadcn/ui Button components with liquid glass styling
- **FR-009**: Month selection dropdown with search functionality using shadcn/ui Select component
- **FR-010**: Year selection dropdown with search functionality using shadcn/ui Select component
- **FR-011**: "Go to Today" button to return to current date with enhanced visual feedback
- **FR-012**: Support years from 1885 to current year + 100
- **FR-013**: Quick navigation dropdown menu using shadcn/ui DropdownMenu component
- **FR-014**: Keyboard shortcuts (ESC to close modals, arrow keys for navigation) built into shadcn/ui components

#### 3.3 Date Information Modal

- **FR-015**: Click on any date to show detailed information modal using shadcn/ui Dialog component
- **FR-016**: Display full Myanmar date information using mycal library with shadcn/ui Card and Badge components
- **FR-017**: Show astrological information using baydin library with structured layout:
  - Maharbote (birth planet) - `baydin.maharbote(year, weekday)`
  - Numerology calculation - `baydin.numerology(date)`
  - Chinese zodiac sign - `baydin.chineseZodiac(year)`
  - Myanmar zodiac sign - `baydin.zodiac(date, month)`
- **FR-018**: Modal with liquid glass theme using shadcn/ui Dialog components
- **FR-019**: Action buttons for "Add to Calendar" and "Share" functionality using shadcn/ui Button components
- **FR-020**: Responsive modal design with proper mobile optimization

#### 3.4 User Interface Features

- **FR-021**: Dark theme interface with light mode support using next-themes
- **FR-022**: Responsive layout for different screen sizes using Tailwind CSS v4 and container queries
- **FR-023**: Mobile-optimized modal interfaces for month/year selection using shadcn/ui components
- **FR-024**: Smooth animations and transitions with liquid glass aesthetic
- **FR-025**: Theme toggle button for dark/light mode switching
- **FR-026**: Loading states and skeleton components using shadcn/ui patterns
- **FR-027**: Tooltips and contextual help using shadcn/ui Tooltip component
- **FR-028**: Consistent spacing and typography using shadcn/ui design tokens

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

- **NFR-010**: Semantic HTML structure built into shadcn/ui components
- **NFR-011**: Comprehensive ARIA labels and descriptions provided by Radix UI primitives
- **NFR-012**: Full keyboard navigation support including tab order, arrow keys, and escape key functionality
- **NFR-013**: Screen reader compatibility with proper role attributes and live regions
- **NFR-014**: High contrast ratios meeting WCAG 2.1 AA standards
- **NFR-015**: Focus management and visible focus indicators
- **NFR-016**: Reduced motion support respecting user preferences
- **NFR-017**: Color independence (information not conveyed by color alone)

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

#### 5.2 UI Component Libraries

- **shadcn/ui**: Component library built on Radix UI primitives
  - Package: `@shadcn/ui@latest`
  - Purpose: Pre-built, accessible UI components with liquid glass theming
  - Features: Calendar, Dialog, Button, Card, Select, DropdownMenu, Badge, Separator, Tooltip
- **Radix UI Primitives**: Accessible component foundations
  - Packages: `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-select`, `@radix-ui/react-popover`, `@radix-ui/react-slot`
  - Purpose: Low-level accessible component primitives
  - Features: ARIA support, keyboard navigation, focus management
- **Tailwind CSS v4**: Utility-first CSS framework
  - Package: `tailwindcss@latest`
  - Purpose: Styling and responsive design with liquid glass theme
  - Features: Modern CSS features (oklch, container queries, cascade layers)
- **next-themes**: Theme management for Next.js
  - Package: `next-themes@latest`
  - Purpose: Dark/light mode theme switching
  - Features: System preference detection, smooth theme transitions
- **Lucide React**: Icon library
  - Package: `lucide-react@latest`
  - Purpose: Consistent icon set for the application
  - Features: TypeScript support, tree-shaking, custom styling

#### 5.3 Utility Libraries

- **class-variance-authority**: Utility for component variants
  - Package: `class-variance-authority@latest`
  - Purpose: Create component variants with different styles
- **clsx & tailwind-merge**: Utility functions for CSS classes
  - Packages: `clsx@latest`, `tailwind-merge@latest`
  - Purpose: Conditional CSS classes and Tailwind class merging
- **tailwindcss-animate**: Animation utilities for Tailwind
  - Package: `tailwindcss-animate@latest`
  - Purpose: Animation utilities and keyframes

#### 5.4 Package Dependencies

- External libraries installed via npm/yarn
- Server-side processing capabilities with Next.js
- Component library with shadcn/ui setup

#### 5.5 Package Installation

```json
{
  "dependencies": {
    "mycal": "latest",
    "baydin": "latest",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.263.1",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.7",
    "next-themes": "^0.2.1"
  },
  "devDependencies": {
    "@types/node": "^20.5.0",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.28",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.1.6"
  }
}
```

#### 5.6 Library Usage

```typescript
// shadcn/ui Component Usage
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Myanmar Calendar Calculations
import mycal from 'mycal';

// Convert Gregorian date to Myanmar date
const gregorianDate = '10/15/2024';
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

// Utility Functions
import { cn } from '@/lib/utils';
import { glassVariants, textVariants } from '@/lib/utils';

// Component Example
const CalendarDay = ({ day, myanmarDate, isToday }) => (
  <Card className={cn(
    glassVariants.primary,
    glassVariants.interactive,
    isToday && "bg-accent-blue/20 border-accent-blue/60"
  )}>
    <CardContent className="p-4 text-center">
      <div className={cn(textVariants.primary, "text-lg font-semibold")}>
        {day}
      </div>
      <div className={cn(textVariants.secondary, "text-sm mt-1")}>
        {myanmarDate}
      </div>
    </CardContent>
  </Card>
);
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

- **DP-004**: Next.js App Router project structure with components/ui directory
- **DP-005**: Favicon files in /public/ directory
- **DP-006**: Build process required (next build)
- **DP-007**: shadcn/ui components in /components/ui directory
- **DP-008**: Custom calendar components in /components/calendar directory
- **DP-009**: Utility functions in /lib directory
- **DP-010**: Theme provider in /components/theme-provider.tsx

**Recommended Project Structure**:

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main calendar page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── tooltip.tsx
│   │   └── badge.tsx
│   ├── calendar/            # Calendar-specific components
│   │   ├── myanmar-calendar.tsx
│   │   ├── calendar-navigation.tsx
│   │   ├── date-details-modal.tsx
│   │   └── event-details-modal.tsx
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── myanmar-date.ts      # Myanmar date calculations
│   └── types.ts             # TypeScript type definitions
├── public/
│   └── favicon.ico
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

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
**Version**: 2.0
**Author**: System Analysis

### 12. Version History

#### v2.0 (October 4, 2025) - shadcn/ui Integration Update

- **Technology Stack**: Updated to include shadcn/ui component library, Radix UI primitives, and enhanced TypeScript support
- **Functional Requirements**: Enhanced with shadcn/ui component-specific requirements and improved accessibility features
- **Non-Functional Requirements**: Updated accessibility requirements to meet WCAG 2.1 AA standards with built-in Radix UI support
- **Dependencies**: Comprehensive update to include all shadcn/ui related packages and utility libraries
- **File Structure**: Updated to reflect modern Next.js App Router structure with organized component directories
- **Code Examples**: Added TypeScript examples demonstrating shadcn/ui component usage patterns

#### v1.0 (October 4, 2025) - Initial Version

- **Initial Requirements**: Basic Myanmar calendar application requirements
- **Core Functionality**: Calendar display, navigation, and modal information
- **Technology Stack**: Next.js, React, Tailwind CSS, mycal, baydin libraries
- **Accessibility**: Basic ARIA support and keyboard navigation
