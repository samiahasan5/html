# 10Corp SASS Structure

SASS files organized using 7-1 pattern.

## Structure

```
sass/
├── base/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _fonts.scss
│   ├── _animations.scss
│   └── _base.scss
├── components/
│   ├── _preloader.scss
│   ├── _lazy-loading.scss
│   ├── _buttons.scss
│   ├── _navigation.scss
│   ├── _mobile-menu.scss
│   ├── _breadcrumb.scss
│   ├── _social-buttons.scss
│   ├── _testimonials.scss
│   ├── _counter.scss
│   └── _forms.scss
├── layout/
│   ├── _header.scss
│   └── _footer.scss
├── pages/
│   ├── _index.scss
│   ├── _about.scss
│   ├── _services.scss
│   ├── _portfolio.scss
│   ├── _pricing.scss
│   └── _contact.scss
├── utilities/
│   └── _utilities.scss
├── vendors/
└── main.scss
```

## Usage

```bash
npm install
npm run dev          # watch mode
npm run build        # production
npm run sass         # one-time compile
```

## Variables

### Colors
`$color-primary` `$color-secondary` `$color-accent`
`$color-text-primary` `$color-text-secondary` `$color-text-muted`
`$color-bg-header` `$color-bg-light` `$color-bg-gray`

### Typography
`$font-family-primary`
`$font-weight-light` `$font-weight-normal` `$font-weight-bold`
`$font-size-xs` to `$font-size-display`

### Spacing
`$spacing-xs` (8px) to `$spacing-xxl` (80px)

### Breakpoints
`$breakpoint-medium` (640px) `$breakpoint-large` (1024px) `$breakpoint-xlarge` (1200px)

## Mixins

```scss
@include mobile-only { }
@include tablet-up { }
@include desktop-up { }
@include flex-center;
@include flex-between;
@include button-primary;
@include button-secondary;
@include heading-underline;
@include sr-only;
@include focus-outline;
```

## Output

- `css/style.css` (dev)
- `css/style.min.css` (prod)
