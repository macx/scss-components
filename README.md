SCSS-Components
===============

A package which includes much components and helpers for Scss.

Dependencies
===============

* Create a grid
* Clearfix
* Calculate the font-size
* Simple including your icons
* Naming breakpoints for each mediaquery which you want
* CSS-Triangle

Dependencies
===============

* Bower
* Grunt
* Sass
* Compass

## Mixins

### Clearfix
Clear your floatings - it's necessary.

    // Use mixin
    @include clearfix();

### Grid
It was never so easy to create your own responsive grid and you are so flexible.

    // Set your maximum cols in the config
    // Use mixin to create your own grid with your class-convention
    // With this you get the grid like in pure
    @for $sum from 1 through $max-cols {
      @for $i from 1 through $sum {
        .l-u--#{$i}-#{$sum} {
          @include col($i, $sum);
        }
      }
    }

    // Result like this
    .l-u--1-3 // One third of
    .l-u--2-4 // two fourth of


    // Other example for a grid
    @for $i from 1 through $max-cols {
      .l-col--#{$i} {
        @include col($i, $max-cols)
      }
    }

    // Result like this (max-cols: 12)
    .l-col--4 // four twelfths
    .l-col--6 // Half cols

### Fonts
Create the font-size not only in pixels. Use "rem" too.

    // Set in your html the font-size to 62.5%, then it's easier to calculate
    // Result = 16px
    @include font-size(1.6);

### Icons
It's easy to get some icons. You must only set an array in your config and include the mixin.

    // Create the array
    $icons: {
      'css' 'a',
      'briefcase' 'b',
      'apple' 'c',
      'html' 'd',
      'happy-smiley' 'e',
      'home' 'f'
    }

    // Mixin to create a class for each icon,
    // ".icon--" is your prefix and use 'before' or 'after'
    @each $icon in $icons {
      $name: nth($icon, 1);
      .icon--#{$name} {
        @include icon('before', $name);
      }
    }

### Mediaqueries / Mobile First
The time is over to write for each mediaquery the pixel. You can write something like this:

    @include respond-to('tablet') {
      @content;
    }

### Triangle
    @include triangle($direction, $size, $color) {
      @content;
    }


How-To
===============

### Install package via bower

    bower install scss-components

### Fork it and help to make it bigger

**Install all dependencies**

    npm install

**Release a new version**

    grunt release:{type}

    // Types
    patch - small fixes
    minor - new feature
    mayor - api-change