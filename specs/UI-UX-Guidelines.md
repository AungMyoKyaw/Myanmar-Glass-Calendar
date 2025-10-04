# UI/UX Design Guidelines

## Myanmar Calendar Application - Apple Liquid Glass Theme

**Tailwind CSS v4 Compatible**

### 1. Design Philosophy

#### 1.1 Core Principles

- **Transparency and Depth**: Emulate Apple's liquid glass aesthetic with layered translucent surfaces
- **Fluid Motion**: Smooth, natural animations that feel responsive and organic
- **Minimal Distraction**: Clean, uncluttered interface that focuses on content
- **Accessibility**: High contrast, clear typography, and intuitive navigation
- **Modern CSS**: Leverage Tailwind CSS v4's new features for optimal performance

#### 1.2 Design Inspiration

- Apple's liquid glass UI elements (iOS 17+, macOS Sonoma)
- Subtle backdrop blur effects with transparency
- Soft shadows and ambient lighting
- Fluid animations and micro-interactions
- Modern CSS features (color-mix, @property, cascade layers)

### 2. Visual Design System

#### 2.1 Color Palette (Tailwind CSS v4 @theme)

```css
/* Add to your main.css with @theme directive */
@import 'tailwindcss';

@theme {
  /* Glass Theme Colors - Using oklch for better color control */
  --color-glass-primary: oklch(100% 0.01 none / 0.1);
  --color-glass-secondary: oklch(100% 0.01 none / 0.05);
  --color-glass-tertiary: oklch(100% 0.01 none / 0.02);

  /* Accent Colors with better color space */
  --color-accent-blue: oklch(61.2% 0.118 238.7 / 0.8);
  --color-accent-indigo: oklch(62.3% 0.14 277 / 0.8);
  --color-accent-green: oklch(87.3% 0.15 142.5 / 0.8);

  /* Text Colors */
  --color-text-primary: oklch(100% 0.01 none / 0.95);
  --color-text-secondary: oklch(100% 0.01 none / 0.7);
  --color-text-tertiary: oklch(100% 0.01 none / 0.4);

  /* Border Colors */
  --color-border-glass: oklch(100% 0.01 none / 0.2);
  --color-border-accent: oklch(61.2% 0.118 238.7 / 0.3);

  /* Custom Glass Opacity Modifiers using color-mix */
  --color-glass-white: color-mix(in oklch, white 10%, transparent);
  --color-glass-accent: color-mix(
    in oklch,
    var(--color-accent-blue) 20%,
    transparent
  );
}
```

#### 2.2 Typography

- **Font Family**: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui
- **Headings**: 300 weight, large sizes with high contrast
- **Body Text**: 400 weight, optimal readability
- **UI Elements**: 500-600 weight for emphasis

#### 2.3 Glass Morphism Effects (Tailwind CSS v4)

```html
<!-- Base Glass Panel -->
<div
  class="bg-glass-primary/10 backdrop-blur-xl border border-glass-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
>
  <!-- Content -->
</div>

<!-- Interactive Glass Elements -->
<div
  class="bg-glass-white/15 backdrop-blur-lg border border-glass-white/30
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:bg-glass-white/20 hover:-translate-y-0.5
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]"
>
  <!-- Interactive Content -->
</div>

<!-- Advanced Glass with @property for animations -->
<style>
  @property --glass-opacity {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 10%;
  }

  .glass-animated {
    background: oklch(100% 0.01 none / var(--glass-opacity));
    backdrop-filter: blur(20px);
    transition: --glass-opacity 0.3s ease;
  }

  .glass-animated:hover {
    --glass-opacity: 15%;
  }
</style>
```

### 3. Component Design Guidelines with shadcn/ui

#### 3.1 Component Library Integration

**Primary Component Library**: [shadcn/ui](https://ui.shadcn.com/docs/components)

shadcn/ui provides a comprehensive collection of beautifully designed, accessible UI components built on top of Radix UI and styled with Tailwind CSS. These components will be customized to match our Apple Liquid Glass theme.

**Key Benefits**:

- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Customization**: Easy to customize with Tailwind CSS classes
- **Performance**: Optimized for performance with tree-shaking
- **Consistency**: Consistent design patterns across components
- **Modern**: Built with latest React patterns and TypeScript

#### 3.2 shadcn/ui Setup and Installation

```bash
# Initialize shadcn/ui in the project
npx shadcn@latest init

# Install required components for the calendar application
npx shadcn@latest add button
npx shadcn@latest add calendar
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add popover
npx shadcn@latest add select
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
```

**Configuration (components.json)**:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

#### 3.3 Calendar Grid with shadcn/ui Components

```tsx
// Enhanced Calendar Component using shadcn/ui
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Custom calendar cell with liquid glass styling
const CustomCalendarDay = ({
  day,
  myanmarDate,
  isToday,
  isSelected
}: CalendarDayProps) => {
  return (
    <Card
      className={`
        relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          isToday
            ? 'bg-accent-blue/20 backdrop-blur-lg border-accent-blue/60 shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5),inset_0_2px_0_rgba(255,255,255,0.3)]'
            : 'bg-glass-secondary/5 backdrop-blur-md border-glass-white/10 hover:bg-glass-white/10 hover:scale-105 hover:border-accent-blue/50'
        }
        ${isSelected ? 'ring-2 ring-accent-blue/50' : ''}
        border backdrop-blur-xl cursor-pointer group
      `}
    >
      <CardContent className="p-4 text-center">
        <div
          className={`text-lg font-semibold ${isToday ? 'text-white' : 'text-text-primary'}`}
        >
          {day}
        </div>
        {myanmarDate && (
          <div
            className={`text-sm mt-1 ${isToday ? 'text-white/90' : 'text-text-secondary'}`}
          >
            {myanmarDate}
          </div>
        )}
        {isToday && (
          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-accent-blue/30 text-white text-xs"
          >
            Today
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

// Main Calendar Component
export function MyanmarCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="bg-black/20 backdrop-blur-3xl border-glass-white/10 shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-text-primary">
            Myanmar Calendar
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-glass-white/10 backdrop-blur-lg border-glass-white/20 hover:bg-glass-white/15"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-glass-white/10 backdrop-blur-lg border-glass-white/20 hover:bg-glass-white/15"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="@container">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-lg border-0"
            components={{
              Day: CustomCalendarDay
            }}
            classNames={{
              months:
                'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
              month: 'space-y-4',
              caption: 'flex justify-center pt-1 relative items-center',
              caption_label: 'text-lg font-medium text-text-primary',
              nav: 'space-x-1 flex items-center',
              nav_button:
                'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
              nav_button_previous: 'absolute left-1',
              nav_button_next: 'absolute right-1',
              table: 'w-full border-collapse space-y-1',
              head_row: 'flex',
              head_cell:
                'text-text-tertiary rounded-md w-9 font-normal text-[0.8rem]',
              row: 'flex w-full mt-2',
              cell: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent-blue/10 [&:has([aria-selected].day-outside)]:bg-accent-blue/5 [&:has([aria-selected].day-range-end)]:rounded-r-md',
              day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
              day_range_end: 'day-range-end',
              day_selected: 'bg-accent-blue/20 text-white',
              day_today: 'bg-accent-blue/20 text-white',
              day_outside: 'text-text-tertiary opacity-50',
              day_disabled: 'text-text-tertiary opacity-50',
              day_range_middle:
                'aria-selected:bg-accent-blue/10 aria-selected:text-accent-foreground',
              day_hidden: 'invisible'
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
```

**Responsive Calendar Grid (Container Queries)**:

```tsx
// Enhanced calendar with responsive container queries
<div className="@container">
  <div className="grid grid-cols-7 gap-2 @md:gap-3 @lg:gap-4">
    {/* Calendar cells will adapt based on container size */}
  </div>

  {/* Responsive text sizing */}
  <div className="text-sm @md:text-base @lg:text-lg">
    Myanmar Date Information
  </div>
</div>
```

#### 3.4 Navigation Controls with shadcn/ui Components

```tsx
// Enhanced Navigation using shadcn/ui components
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

// Navigation Button with Liquid Glass Theme
const GlassButton = ({
  children,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={`
        bg-glass-white/10 backdrop-blur-lg border-glass-white/20
        hover:bg-glass-white/15 hover:scale-105
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          variant === 'outline'
            ? 'border-glass-white/20 hover:bg-glass-white/15 hover:border-accent-blue/30'
            : ''
        }
        ${
          variant === 'ghost'
            ? 'hover:bg-glass-white/10 hover:text-accent-blue'
            : ''
        }
        focus:ring-2 focus:ring-accent-blue/50
        active:scale-95
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

// Month/Year Selector with Enhanced Styling
const MonthYearSelector = ({
  selectedMonth,
  selectedYear,
  onMonthChange,
  onYearChange
}: MonthYearSelectorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Select value={selectedMonth} onValueChange={onMonthChange}>
        <SelectTrigger className="bg-glass-white/10 backdrop-blur-lg border-glass-white/20 hover:bg-glass-white/15">
          <SelectValue placeholder="Select month" />
        </SelectTrigger>
        <SelectContent className="bg-black/80 backdrop-blur-3xl border-glass-white/15">
          <SelectItem value="1">January</SelectItem>
          <SelectItem value="2">February</SelectItem>
          <SelectItem value="3">March</SelectItem>
          <SelectItem value="4">April</SelectItem>
          <SelectItem value="5">May</SelectItem>
          <SelectItem value="6">June</SelectItem>
          <SelectItem value="7">July</SelectItem>
          <SelectItem value="8">August</SelectItem>
          <SelectItem value="9">September</SelectItem>
          <SelectItem value="10">October</SelectItem>
          <SelectItem value="11">November</SelectItem>
          <SelectItem value="12">December</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedYear} onValueChange={onYearChange}>
        <SelectTrigger className="w-24 bg-glass-white/10 backdrop-blur-lg border-glass-white/20 hover:bg-glass-white/15">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent className="bg-black/80 backdrop-blur-3xl border-glass-white/15">
          {Array.from({ length: 20 }, (_, i) => (
            <SelectItem key={2020 + i} value={String(2020 + i)}>
              {2020 + i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

// Quick Navigation Dropdown
const QuickNavigation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GlassButton variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Quick Jump
          <ChevronDown className="h-4 w-4 ml-2" />
        </GlassButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/80 backdrop-blur-3xl border-glass-white/15">
        <DropdownMenuItem className="hover:bg-glass-white/10 focus:bg-glass-white/10">
          <Calendar className="h-4 w-4 mr-2" />
          Today
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-glass-white/10 focus:bg-glass-white/10">
          <Calendar className="h-4 w-4 mr-2" />
          This Week
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-glass-white/10 focus:bg-glass-white/10">
          <Calendar className="h-4 w-4 mr-2" />
          This Month
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-glass-white/10 focus:bg-glass-white/10">
          <Calendar className="h-4 w-4 mr-2" />
          This Year
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Calendar Navigation Header
export function CalendarNavigation() {
  const [selectedMonth, setSelectedMonth] = useState('10');
  const [selectedYear, setSelectedYear] = useState('2024');

  return (
    <div className="flex items-center justify-between p-4 bg-glass-primary/10 backdrop-blur-xl rounded-2xl border border-glass-white/10">
      <div className="flex items-center gap-3">
        <GlassButton size="icon" variant="outline">
          <ChevronLeft className="h-4 w-4" />
        </GlassButton>
        <GlassButton size="icon" variant="outline">
          <ChevronRight className="h-4 w-4" />
        </GlassButton>
      </div>

      <div className="flex items-center gap-4">
        <MonthYearSelector
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
        />
      </div>

      <div className="flex items-center gap-3">
        <QuickNavigation />
        <GlassButton size="icon" variant="outline">
          <Settings className="h-4 w-4" />
        </GlassButton>
      </div>
    </div>
  );
}
```

#### 3.5 Modal Design with shadcn/ui Dialog Components

```tsx
// Enhanced Modal using shadcn/ui Dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Myanmar Date Details Modal
const MyanmarDateDetailsModal = ({
  date,
  myanmarDate,
  children
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-glass-accent backdrop-blur-lg border-accent-blue/30 hover:bg-accent-blue/30 hover:scale-105">
            View Details
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-black/80 backdrop-blur-3xl border-glass-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] max-w-md w-full">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-text-primary">
              <span className="text-accent-blue">{date}</span>
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="bg-glass-white/10 backdrop-blur-md border-glass-white/20 rounded-full w-8 h-8 hover:bg-glass-white/20 hover:scale-110"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Myanmar Date Information */}
          <Card className="bg-glass-secondary/5 backdrop-blur-lg border-glass-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-text-primary mb-2">
                {myanmarDate?.day}
              </div>
              <div className="text-lg text-text-secondary">
                {myanmarDate?.monthName} {myanmarDate?.year}
              </div>
              <div className="text-md text-text-tertiary mt-1">
                {myanmarDate?.weekDay}
              </div>
            </CardContent>
          </Card>

          <Separator className="bg-glass-white/20" />

          {/* Additional Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Myanmar Year</span>
              <Badge variant="secondary" className="bg-glass-white/10">
                {myanmarDate?.myanmarYear}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Myanmar Month</span>
              <Badge variant="secondary" className="bg-glass-white/10">
                {myanmarDate?.myanmarMonth}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Moon Phase</span>
              <Badge variant="secondary" className="bg-glass-white/10">
                {myanmarDate?.moonPhase}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Zodiac Sign</span>
              <Badge variant="secondary" className="bg-glass-white/10">
                {myanmarDate?.zodiacSign}
              </Badge>
            </div>
          </div>

          <Separator className="bg-glass-white/20" />

          {/* Astrological Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-text-primary">
              Astrological Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-glass-white/5 backdrop-blur-md rounded-xl">
                <div className="text-sm text-text-tertiary">
                  Planetary Position
                </div>
                <div className="text-text-secondary font-medium">
                  {myanmarDate?.planetaryPosition}
                </div>
              </div>
              <div className="text-center p-3 bg-glass-white/5 backdrop-blur-md rounded-xl">
                <div className="text-sm text-text-tertiary">Yataya</div>
                <div className="text-text-secondary font-medium">
                  {myanmarDate?.yataya}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-accent-blue/20 hover:bg-accent-blue/30 text-white">
              Add to Calendar
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-glass-white/20 hover:bg-glass-white/10"
            >
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Event Details Modal for Special Days
const EventDetailsModal = ({ event, children }: EventModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-black/80 backdrop-blur-3xl border-glass-white/10 rounded-3xl max-w-lg w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent-green"></div>
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-text-secondary">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-4 text-text-secondary">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>

          <Separator className="bg-glass-white/20" />

          <div className="text-text-secondary">{event.description}</div>

          {event.important && (
            <Badge
              variant="destructive"
              className="bg-accent-red/20 text-white"
            >
              Important Holiday
            </Badge>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Usage Example
export function CalendarCellWithModal({
  day,
  myanmarDate,
  events
}: CalendarCellProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer">
      <CardContent className="p-4">
        <div className="text-lg font-semibold">{day}</div>
        <div className="text-sm text-text-secondary">{myanmarDate}</div>

        {events.length > 0 && (
          <div className="mt-2">
            <Badge variant="secondary" className="text-xs">
              {events.length} events
            </Badge>
          </div>
        )}

        <MyanmarDateDetailsModal
          date={`October ${day}, 2024`}
          myanmarDate={myanmarDate}
        >
          <div className="absolute inset-0" />
        </MyanmarDateDetailsModal>
      </CardContent>
    </Card>
  );
}
```

#### 3.6 Design System Integration with shadcn/ui

**CSS Variables and Theme Configuration**:

```css
/* globals.css - Enhanced shadcn/ui with Liquid Glass Theme */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* shadcn/ui base colors with liquid glass customization */
    --background: oklch(100% 0.01 none / 0.05);
    --foreground: oklch(100% 0.01 none / 0.95);

    --card: oklch(100% 0.01 none / 0.1);
    --card-foreground: oklch(100% 0.01 none / 0.95);

    --popover: oklch(100% 0.01 none / 0.95);
    --popover-foreground: oklch(100% 0.01 none / 0.95);

    --primary: oklch(61.2% 0.118 238.7 / 0.8);
    --primary-foreground: oklch(100% 0.01 none / 0.95);

    --secondary: oklch(100% 0.01 none / 0.1);
    --secondary-foreground: oklch(100% 0.01 none / 0.95);

    --muted: oklch(100% 0.01 none / 0.1);
    --muted-foreground: oklch(100% 0.01 none / 0.4);

    --accent: oklch(100% 0.01 none / 0.1);
    --accent-foreground: oklch(100% 0.01 none / 0.95);

    --destructive: oklch(62.8% 0.214 12.2 / 0.8);
    --destructive-foreground: oklch(100% 0.01 none / 0.95);

    --border: oklch(100% 0.01 none / 0.2);
    --input: oklch(100% 0.01 none / 0.1);
    --ring: oklch(61.2% 0.118 238.7 / 0.5);

    /* Custom liquid glass variables */
    --glass-primary: oklch(100% 0.01 none / 0.1);
    --glass-secondary: oklch(100% 0.01 none / 0.05);
    --glass-tertiary: oklch(100% 0.01 none / 0.02);

    --glass-white: oklch(100% 0.01 none / 0.1);
    --glass-accent: oklch(61.2% 0.118 238.7 / 0.2);

    --text-primary: oklch(100% 0.01 none / 0.95);
    --text-secondary: oklch(100% 0.01 none / 0.7);
    --text-tertiary: oklch(100% 0.01 none / 0.4);

    --accent-blue: oklch(61.2% 0.118 238.7 / 0.8);
    --accent-indigo: oklch(62.3% 0.14 277 / 0.8);
    --accent-green: oklch(87.3% 0.15 142.5 / 0.8);
    --accent-red: oklch(62.8% 0.214 12.2 / 0.8);

    --radius: 0.75rem;
  }

  .dark {
    --background: oklch(9% 0.01 none / 0.95);
    --foreground: oklch(100% 0.01 none / 0.95);

    --card: oklch(9% 0.01 none / 0.8);
    --card-foreground: oklch(100% 0.01 none / 0.95);

    --popover: oklch(9% 0.01 none / 0.8);
    --popover-foreground: oklch(100% 0.01 none / 0.95);

    --primary: oklch(61.2% 0.118 238.7 / 0.8);
    --primary-foreground: oklch(9% 0.01 none / 0.95);

    --secondary: oklch(100% 0.01 none / 0.1);
    --secondary-foreground: oklch(100% 0.01 none / 0.95);

    --muted: oklch(100% 0.01 none / 0.1);
    --muted-foreground: oklch(100% 0.01 none / 0.4);

    --accent: oklch(100% 0.01 none / 0.1);
    --accent-foreground: oklch(100% 0.01 none / 0.95);

    --destructive: oklch(62.8% 0.214 12.2 / 0.8);
    --destructive-foreground: oklch(100% 0.01 none / 0.95);

    --border: oklch(100% 0.01 none / 0.1);
    --input: oklch(100% 0.01 none / 0.1);
    --ring: oklch(61.2% 0.118 238.7 / 0.5);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      'rlig' 1,
      'calt' 1;
  }
}

/* Liquid glass utility classes */
@layer utilities {
  .glass {
    @apply bg-glass-primary backdrop-blur-xl border border-glass-white/20;
  }

  .glass-hover {
    @apply hover:bg-glass-white/15 transition-all duration-300;
  }

  .glass-card {
    @apply bg-card/80 backdrop-blur-lg border border-border/50;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent;
  }
}
```

**Custom Component Variants**:

```tsx
// lib/utils.ts - Enhanced utility functions
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Liquid glass variant utilities
export const glassVariants = {
  primary: 'bg-glass-primary/10 backdrop-blur-xl border border-glass-white/20',
  secondary:
    'bg-glass-secondary/5 backdrop-blur-lg border border-glass-white/10',
  accent: 'bg-glass-accent/20 backdrop-blur-lg border border-accent-blue/30',
  interactive:
    'hover:bg-glass-white/15 hover:scale-105 transition-all duration-300'
};

export const textVariants = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  gradient: 'text-gradient'
};

// Myanmar date formatting utilities
export function formatMyanmarDate(date: Date): MyanmarDate {
  // Implementation for Myanmar date conversion
  return {
    day: date.getDate(),
    monthName: getMyanmarMonthName(date),
    year: getMyanmarYear(date),
    weekDay: getMyanmarWeekDay(date),
    moonPhase: getMoonPhase(date),
    zodiacSign: getZodiacSign(date)
  };
}
```

**Theme Provider Setup**:

```tsx
// components/theme-provider.tsx
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 4. Animation and Motion

#### 4.1 Animation Principles (Tailwind CSS v4)

- **Natural Motion**: Use cubic-bezier easing functions with custom easing
- **Purposeful Movement**: Every animation should have a reason
- **Performance**: Use transform and opacity for smooth 60fps animations
- **Accessibility**: Respect `prefers-reduced-motion` settings
- **Modern CSS**: Leverage @starting-style and new animation features

#### 4.2 Core Animations (Tailwind CSS v4)

```html
<!-- Smooth Transitions with Custom Easing -->
<div
  class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:scale-105 hover:bg-glass-white/10"
>
  Interactive Element
</div>

<!-- Bounce Animation for Interactive Elements -->
<div
  class="animate-[bounce_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]
            hover:animate-[bounce_0.3s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
>
  Bouncing Content
</div>

<!-- Fade In Animation with @starting-style -->
<style>
  @starting-style {
    .fade-in-element {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  .fade-in-element {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>

<!-- Advanced Animation with @property -->
<style>
  @property --glow-intensity {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }

  .glow-animation {
    box-shadow: 0 0 var(--glow-size, 20px)
      oklch(61.2% 0.118 238.7 / var(--glow-intensity));
    transition:
      --glow-intensity 0.3s ease,
      --glow-size 0.3s ease;
  }

  .glow-animation:hover {
    --glow-intensity: 50%;
    --glow-size: 40px;
  }
</style>

<!-- Container Query Animation -->
<div class="@container">
  <div
    class="transition-all duration-300
              @sm:scale-95 @md:scale-100 @lg:scale-105"
  >
    Responsive Animation
  </div>
</div>

<!-- Reduced Motion Support -->
<div
  class="transition-all duration-300
            motion-reduce:transition-none motion-reduce:hover:transform-none"
>
  Accessible Animation
</div>
```

#### 4.3 Custom Animation Keyframes (Tailwind CSS v4)

```css
/* Add to your theme configuration */
@theme {
  --animate-fade-in: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --animate-scale-in: scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --animate-bounce-gentle: bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

### 5. Layout and Spacing

#### 5.1 Grid System

- **Container**: Max-width 1280px, centered
- **Spacing**: 8px base unit, using multiples (8, 16, 24, 32, 48px)
- **Responsive**: Mobile-first approach with breakpoints at 640px, 768px, 1024px

#### 5.2 Component Spacing

```css
/* Calendar Layout */
.calendar-container {
  padding: 24px;
  gap: 24px;
}

.calendar-header {
  margin-bottom: 32px;
}

.calendar-grid {
  gap: 16px;
  margin-bottom: 24px;
}

/* Responsive Spacing */
@media (max-width: 640px) {
  .calendar-container {
    padding: 16px;
    gap: 16px;
  }

  .calendar-grid {
    gap: 8px;
  }
}
```

### 6. Interactive States

#### 6.1 Button States

```css
/* Default State */
.button-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

/* Hover State */
.button-glass:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Active/Pressed State */
.button-glass:active {
  transform: translateY(0) scale(0.98);
  background: rgba(255, 255, 255, 0.2);
}

/* Focus State */
.button-glass:focus {
  outline: none;
  box-shadow:
    0 0 0 2px rgba(59, 130, 246, 0.5),
    0 8px 25px rgba(0, 0, 0, 0.2);
}
```

#### 6.2 Cell Interactions

```css
.calendar-cell {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.calendar-cell:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.calendar-cell.selected {
  background: rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow:
    0 0 30px rgba(59, 130, 246, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

### 7. Responsive Design

#### 7.1 Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

#### 7.2 Mobile Adaptations

```css
/* Mobile Optimizations */
@media (max-width: 640px) {
  .calendar-cell {
    padding: 8px;
    font-size: 14px;
  }

  .myanmar-date {
    display: none; /* Hide on mobile for cleaner look */
  }

  .modal-content {
    margin: 16px;
    max-width: calc(100vw - 32px);
  }

  .nav-button {
    width: 40px;
    height: 40px;
  }
}

/* Tablet Optimizations */
@media (min-width: 640px) and (max-width: 1024px) {
  .calendar-cell {
    padding: 12px;
    font-size: 16px;
  }
}
```

### 8. Accessibility Guidelines

#### 8.1 Color Contrast

- **Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear visual indicators

#### 8.2 Keyboard Navigation

```css
/* Focus Styles */
.focus-visible {
  outline: 2px solid rgba(59, 130, 246, 0.8);
  outline-offset: 2px;
  border-radius: 8px;
}

/* Skip Links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

#### 8.3 Screen Reader Support

- Semantic HTML5 elements
- ARIA labels and descriptions
- Live regions for dynamic content
- Proper heading hierarchy

### 9. Performance Considerations

#### 9.1 Glass Effect Optimization

```css
/* Efficient Glass Rendering */
.optimized-glass {
  /* Use transform3d for hardware acceleration */
  transform: translateZ(0);

  /* Optimize backdrop-filter */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Use will-change sparingly */
  will-change: backdrop-filter;
}

/* Reduce Motion for Performance */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### 9.2 Image and Asset Optimization

- Use modern image formats (WebP, AVIF)
- Implement lazy loading for heavy assets
- Optimize SVG icons and illustrations
- Use CSS effects instead of images where possible

### 10. Implementation Notes

#### 10.1 shadcn/ui + Tailwind CSS v4 Configuration

```css
/* main.css - Tailwind CSS v4 Configuration */
@import 'tailwindcss';

@theme {
  /* Glass Theme Colors with oklch color space */
  --color-glass-primary: oklch(100% 0.01 none / 0.1);
  --color-glass-secondary: oklch(100% 0.01 none / 0.05);
  --color-glass-tertiary: oklch(100% 0.01 none / 0.02);

  --color-accent-blue: oklch(61.2% 0.118 238.7 / 0.8);
  --color-accent-indigo: oklch(62.3% 0.14 277 / 0.8);
  --color-accent-green: oklch(87.3% 0.15 142.5 / 0.8);

  /* Text Colors */
  --color-text-primary: oklch(100% 0.01 none / 0.95);
  --color-text-secondary: oklch(100% 0.01 none / 0.7);
  --color-text-tertiary: oklch(100% 0.01 none / 0.4);

  /* Extended Backdrop Blur Values */
  --backdrop-blur-xs: blur(2px);
  --backdrop-blur-4xl: blur(72px);

  /* Custom Animation Keyframes */
  --animate-fade-in: fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --animate-scale-in: scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --animate-bounce-gentle: bounce-gentle 0.6s
    cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Custom Font Family */
  --font-family-display:
    'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Custom Container Queries */
  --container-3xl: 1920px;
}

/* Custom Keyframe Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce-gentle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Custom Properties for Advanced Glass Effects */
@property --glass-opacity {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 10%;
}

@property --glow-intensity {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

/* Advanced Glass Component Classes */
.glass-panel {
  background: oklch(100% 0.01 none / var(--glass-opacity));
  backdrop-filter: blur(20px);
  border: 1px solid oklch(100% 0.01 none / 0.2);
  transition: --glass-opacity 0.3s ease;
}

.glass-panel:hover {
  --glass-opacity: 15%;
}

.glow-effect {
  box-shadow: 0 0 var(--glow-size, 20px)
    oklch(61.2% 0.118 238.7 / var(--glow-intensity));
  transition:
    --glow-intensity 0.3s ease,
    --glow-size 0.3s ease;
}

.glow-effect:hover {
  --glow-intensity: 50%;
  --glow-size: 40px;
}
```

#### 10.2 Complete Setup Configuration

**Package Dependencies**:

```json
{
  "dependencies": {
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

**Vite Configuration**:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
});
```

**Next.js Configuration**:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable Tailwind CSS v4 features
    tailwindcss: {
      config: './tailwind.config.js'
    }
  },
  transpilePackages: ['@radix-ui/react-icons']
};

module.exports = nextConfig;
```

**Tailwind Configuration**:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Custom liquid glass colors
        glass: {
          primary: 'oklch(var(--glass-primary))',
          secondary: 'oklch(var(--glass-secondary))',
          tertiary: 'oklch(var(--glass-tertiary))',
          white: 'oklch(var(--glass-white))',
          accent: 'oklch(var(--glass-accent))'
        },
        text: {
          primary: 'oklch(var(--text-primary))',
          secondary: 'oklch(var(--text-secondary))',
          tertiary: 'oklch(var(--text-tertiary))'
        },
        accent: {
          blue: 'oklch(var(--accent-blue))',
          indigo: 'oklch(var(--accent-indigo))',
          green: 'oklch(var(--accent-green))',
          red: 'oklch(var(--accent-red))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-gentle':
          'bounce-gentle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      backdropBlur: {
        xs: 'blur(2px)',
        '4xl': 'blur(72px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
```

**Component Directory Structure**:

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── popover.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
│   │   └── badge.tsx
│   ├── calendar/              # Calendar-specific components
│   │   ├── myanmar-calendar.tsx
│   │   ├── calendar-navigation.tsx
│   │   ├── date-details-modal.tsx
│   │   └── event-details-modal.tsx
│   └── theme-provider.tsx     # Theme context provider
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── myanmar-date.ts        # Myanmar date calculations
│   └── types.ts               # TypeScript type definitions
└── app/
    ├── globals.css            # Global styles and CSS variables
    └── layout.tsx             # Root layout with theme provider
```

#### 10.4 Browser Compatibility (Tailwind CSS v4)

- Modern browsers with backdrop-filter and oklch support
- Progressive enhancement for older browsers
- Built-in vendor prefixing via Lightning CSS
- Syntax transforms for modern CSS features (oklch → rgba fallbacks)
- Fallback styles for unsupported features

#### 10.5 Migration from Tailwind CSS v3 to v4

```css
/* v3 Configuration (tailwind.config.js) */
module.exports = {
  theme: {
    extend: {
      colors: {
        glass: {
          primary: 'rgba(255, 255, 255, 0.1)',
        }
      }
    }
  }
}

/* v4 Configuration (main.css) */
@import "tailwindcss";

@theme {
  --color-glass-primary: oklch(100% 0.01 none / 0.1);
}

/* Usage in HTML */
<!-- v3 -->
<div class="bg-glass-primary">...</div>

<!-- v4 -->
<div class="bg-glass-primary">...</div> <!-- Same utility name! -->
```

**Key Changes in v4:**

- Configuration moved from JavaScript to CSS with `@theme`
- Modern CSS features (oklch, @property, color-mix) built-in
- Native cascade layers for better specificity control
- Container queries in core with `@container`
- Composable variants (`group-has-*`, `not-*`)
- Built-in CSS processing (no PostCSS required)
- Zero-configuration content detection

### 11. Design Review Checklist

#### 11.1 Visual Design

- [ ] Consistent glass morphism effects across components
- [ ] Proper visual hierarchy with contrast and scale
- [ ] Cohesive color palette implementation
- [ ] Appropriate spacing and alignment

#### 11.2 Interaction Design

- [ ] Smooth, purposeful animations
- [ ] Clear hover and active states
- [ ] Responsive touch targets (minimum 44px)
- [ ] Intuitive navigation patterns

#### 11.3 Accessibility

- [ ] Sufficient color contrast ratios
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Reduced motion preferences respected

#### 11.4 Performance

- [ ] Optimized backdrop-filter usage
- [ ] Efficient animations with GPU acceleration
- [ ] Proper responsive image handling
- [ ] Minimal impact on page load time

### 12. Maintenance and Updates

#### 12.1 Design System Evolution

- Regular review of glass effect implementations
- Performance monitoring and optimization
- User feedback incorporation
- Browser compatibility updates
- Stay updated with Tailwind CSS v4 stable releases

#### 12.2 Documentation

- Maintain component library with examples
- Document animation timing functions
- Update accessibility guidelines regularly
- Track performance benchmarks
- Document Tailwind CSS v4 migration best practices

#### 12.3 Performance Monitoring (Tailwind CSS v4)

- Monitor CSS bundle size (v4's built-in optimizations)
- Track glass effect performance on different devices
- Use browser dev tools to identify rendering bottlenecks
- Leverage v4's performance improvements (up to 10x faster builds)

#### 12.4 Future Considerations

- Anchor positioning support (coming in v4)
- Enhanced container query features
- More advanced color-mix usage
- Integration with upcoming CSS features

---

**Document Version**: 3.0
**Last Updated**: October 4, 2025
**Design System**: Apple Liquid Glass Theme + shadcn/ui
**Framework**: Next.js with shadcn/ui + Tailwind CSS v4
**Status**: shadcn/ui Integration Complete

### Key Updates in v3.0

- **Component Library Integration**: Full integration with shadcn/ui component library
- **Enhanced Accessibility**: Built-in ARIA support and keyboard navigation
- **Improved Developer Experience**: TypeScript-first approach with comprehensive type definitions
- **Modern React Patterns**: Hooks-based components with proper state management
- **Theme System**: Enhanced theming with CSS variables and dark mode support
- **Component Architecture**: Modular, composable components with consistent API design
- **Performance Optimized**: Tree-shaking support and optimized bundle sizes
- **Liquid Glass Aesthetic**: shadcn/ui components customized to maintain the liquid glass theme
