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

### 3. Component Design Guidelines

#### 3.1 Calendar Grid (Tailwind CSS v4)

```html
<!-- Calendar Grid Container -->
<div
  class="bg-black/20 backdrop-blur-3xl rounded-3xl p-6
            border border-glass-white/10 shadow-2xl"
>
  <!-- Grid content -->
</div>

<!-- Calendar Cell Base -->
<div
  class="group bg-glass-secondary/5 backdrop-blur-md
            border border-glass-white/10 rounded-2xl p-4
            transition-all duration-200 ease-out
            hover:bg-glass-white/10 hover:scale-105
            hover:border-accent-blue/50
            cursor-pointer"
>
  <div class="text-lg font-semibold text-text-primary">15</div>
  <div class="text-sm text-text-secondary mt-1">တန်ခူး လပြည့်</div>
</div>

<!-- Today's Cell with Enhanced Glass Effect -->
<div
  class="bg-accent-blue/20 backdrop-blur-lg
            border border-accent-blue/60 rounded-2xl p-4
            shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:shadow-[0_0_30px_rgba(59,130,246,0.5),inset_0_2px_0_rgba(255,255,255,0.3)]"
>
  <div class="text-lg font-bold text-white">15</div>
  <div class="text-sm text-white/90 mt-1">တန်ခူး လပြည်</div>
</div>

<!-- Container Queries for Responsive Grid (Tailwind v4 feature) -->
<div class="@container">
  <div class="grid grid-cols-7 gap-2 @md:gap-4">
    <!-- Calendar cells will adapt based on container size -->
  </div>
</div>
```

#### 3.2 Navigation Controls (Tailwind CSS v4)

```html
<!-- Navigation Button with Advanced Glass Effect -->
<button
  class="group bg-glass-white/10 backdrop-blur-lg
                 border border-glass-white/20 rounded-full
                 w-12 h-12 flex items-center justify-center
                 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                 hover:bg-glass-white/15 hover:scale-110
                 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                 active:scale-95 focus:outline-none
                 focus:ring-2 focus:ring-accent-blue/50
                 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <svg
    class="w-5 h-5 text-text-primary group-hover:text-white transition-colors"
  >
    <!-- SVG icon -->
  </svg>
</button>

<!-- Navigation Dropdown with Composable Variants -->
<div class="group relative">
  <button
    class="bg-glass-white/10 backdrop-blur-lg
                   border border-glass-white/20 rounded-2xl px-4 py-2
                   flex items-center gap-2
                   transition-all duration-300 ease-out
                   hover:bg-glass-white/15
                   group-has-[&:open]:bg-glass-white/20
                   group-not-has-[&:open]:shadow-lg"
  >
    <span>October 2024</span>
    <svg class="w-4 h-4 transition-transform group-has-[&:open]:rotate-180">
      <!-- Dropdown arrow -->
    </svg>
  </button>

  <!-- Dropdown Panel -->
  <div
    class="absolute top-full mt-2 left-0 right-0
                  bg-black/80 backdrop-blur-3xl
                  border border-glass-white/15 rounded-2xl
                  shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
                  opacity-0 scale-95 invisible
                  group-has-[&:open]:opacity-100 group-has-[&:open]:scale-100 group-has-[&:open]:visible
                  transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
  >
    <!-- Dropdown content -->
  </div>
</div>
```

#### 3.3 Modal Design (Tailwind CSS v4)

```html
<!-- Modal Overlay -->
<div
  class="fixed inset-0 bg-black/40 backdrop-blur-sm
            z-50 flex items-center justify-center p-4
            opacity-0 invisible transition-all duration-300
            has-[[data-modal-open]]:opacity-100 has-[[data-modal-open]]:visible"
>
  <!-- Modal Content with Advanced Glass -->
  <div
    class="bg-black/80 backdrop-blur-3xl
              border border-glass-white/10 rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
              max-w-md w-full p-6
              scale-95 opacity-0
              has-[[data-modal-open]]:scale-100 has-[[data-modal-open]]:opacity-100
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
  >
    <!-- Modal Header -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-semibold text-text-primary">
        <span class="text-accent-blue">October 15, 2024</span>
      </h2>
      <button
        class="group bg-glass-white/10 backdrop-blur-md
                       border border-glass-white/20 rounded-full
                       w-8 h-8 flex items-center justify-center
                       hover:bg-glass-white/20 hover:scale-110
                       transition-all duration-200"
      >
        <svg class="w-4 h-4 text-text-secondary group-hover:text-white">
          <!-- Close icon -->
        </svg>
      </button>
    </div>

    <!-- Modal Content -->
    <div class="space-y-3 text-text-secondary">
      <p class="text-lg text-center">တန်ခူးလပြည့် ၁၅ ရက် အင်္ဂါနေ့</p>
      <!-- Additional Myanmar date information -->
    </div>
  </div>
</div>

<!-- Modern Modal Trigger -->
<button
  data-modal-open
  class="bg-glass-accent backdrop-blur-lg
                               border border-accent-blue/30 rounded-2xl px-6 py-3
                               text-white font-medium
                               hover:bg-accent-blue/30 hover:scale-105
                               transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                               focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
>
  View Details
</button>
```

#### 3.4 Dropdown/Picker Components (Tailwind CSS v4)

```html
<!-- Month Picker with Enhanced Glass Effect -->
<div class="relative">
  <!-- Trigger Button -->
  <button
    class="bg-glass-white/10 backdrop-blur-lg
                   border border-glass-white/20 rounded-2xl px-4 py-2
                   flex items-center justify-between w-32
                   hover:bg-glass-white/15
                   transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
  >
    <span class="text-text-primary">October</span>
    <svg
      class="w-4 h-4 text-text-secondary transition-transform
                 group-has-[&:open]:rotate-180"
    >
      <!-- Dropdown arrow -->
    </svg>
  </button>

  <!-- Dropdown Menu with Container Query Support -->
  <div
    class="absolute top-full left-0 mt-2 w-48
                  bg-black/70 backdrop-blur-3xl
                  border border-glass-white/15 rounded-2xl
                  shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
                  opacity-0 scale-95 invisible
                  @container
                  group-has-[&:open]:opacity-100 group-has-[&:open]:scale-100 group-has-[&:open]:visible
                  transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
  >
    <!-- Search Input -->
    <input
      type="text"
      placeholder="Search month..."
      class="w-full p-3 border-b border-glass-white/10
                  bg-transparent text-text-primary placeholder-text-tertiary
                  focus:outline-none focus:border-accent-blue/50
                  @md:p-4"
    />

    <!-- Month List -->
    <div class="max-h-60 overflow-y-auto p-2 space-y-1">
      <div
        class="p-3 rounded-xl cursor-pointer
                  hover:bg-glass-white/10 hover:backdrop-blur-md
                  transition-all duration-200
                  focus:bg-accent-blue/20 focus:outline-none"
      >
        January
      </div>
      <div
        class="p-3 rounded-xl cursor-pointer bg-accent-blue/20
                  backdrop-blur-md border border-accent-blue/30"
      >
        October
      </div>
      <!-- More months... -->
    </div>
  </div>
</div>

<!-- Year Range Picker with Enhanced UX -->
<div
  class="flex items-center gap-2 p-2 bg-glass-white/5 backdrop-blur-lg
            border border-glass-white/10 rounded-2xl"
>
  <button
    class="p-2 rounded-lg hover:bg-glass-white/10
                  transition-all duration-200"
  >
    <!-- Previous year icon -->
  </button>

  <div class="flex-1 text-center">
    <span class="text-text-primary font-medium">2024</span>
  </div>

  <button
    class="p-2 rounded-lg hover:bg-glass-white/10
                  transition-all duration-200"
  >
    <!-- Next year icon -->
  </button>
</div>
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

#### 10.1 Tailwind CSS v4 Configuration

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

#### 10.2 Vite Plugin Configuration (Tailwind CSS v4)

```javascript
// vite.config.js
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()]
  // Additional Vite configuration
};
```

#### 10.3 Package.json Setup

```json
{
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0-alpha.3",
    "tailwindcss": "^4.0.0-alpha.3"
  }
}
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

**Document Version**: 2.0
**Last Updated**: October 4, 2025
**Design System**: Apple Liquid Glass Theme
**Framework**: Next.js with Tailwind CSS v4
**Status**: Tailwind CSS v4 Alpha Compatible
