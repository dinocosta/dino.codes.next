## 2023-06-18

* Add Google Analytics.

## 2023-06-17

* Update the canvas resize logic to also take into consideration the window's innerHeight.
* Update resize logic to simply set the canvas' width and height to 75% of the window's height or width, whichever is smaller.
* Create `StaticSketch` component to make it easier to create new sketches.
* Create `AnimatedSketch` component to make it easier to create new animated sketches.
* Update favicon.

## 2023-06-15

* Extract canvas resize logic to lib so it can be reused everywhere else.
* Update sketches 1 and 2 to also use canvas resizing logic.

## 2023-06-14

* Updated sketch 3 so that the canva's width and height are a bit more responsive
    * For this to happen the `styleCanvas` option for [canvas-sketch](https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#size-settings) needs to 
      be set to `false` so that `canvas-sketch` does not try to style the canvas itself and we can have control over that.
    * This functionality currently relies only on the window's `innerWidth` attribute but we will later update it to also use the window's `innerHeight` so that we 
      do not end up increasing the width so much that it takes too much vertical space.

## 2023-06-06

* Put buttons side by side in sketch 1 and 3

## 2023-05-31

* Changed the back button to be inside a sticky div located at the top of the website, so that the back button is always acessible.
* Update Download button to look different from the "Regenerate" button.

## 2023-05-27

* Fixed index page animation to use `ease-in-out` instead of only `ease-in`, as that was "snapping" the links at the end of the animation.
* Cleaned up sketches to keep only the desired sketches.
* Add Terrain Generation sketch.
* Add Download button to Sketch 3.
* Create react component which allows sketches to be downloaded.

## 2023-05-26

* Learned more about Tailwind's animations - https://tailwindcss.com/docs/animation .
* Created a simple slide-in animation for the homepage links.

## 2023-05-22

* Update Sketch 1 with a heroicon in the button, just for fun.
* Update spacing in posts page to have more space between image and paragraphs and also increase line-height.
* Update sketches button and text explanation so that the controls are shown first and the explanation last.

## 2023-05-17

* Update Sketch 4's form.

## 2023-05-16

* Center text in sketch 1.
* Create new components for links.
* Updated sketches with some text and new controls.
* Updated the `PageTitle` component to actually set the tab's title.

## 2023-05-15

* Change some colors to work better on light mode.

## 2023-05-14

* Create new `<PageTitle>` component.

## 2023-05-12

* Update colorscheme in Tailwind's configuration.
* Install and use Heroicons.
* Create new component, `PillButton`, to make it easier to create pill buttons.

## 2023-05-07

* Update colorscheme to use Tailwind's default colors.
* Fill out `/about` page.

## 2023-05-06

* Fix the pages for sketches 3 and 4 by updating the `getStatichPaths` function in `pages/sketches/[id].js` in order to use the `getSketchesData` function from `lib/sketches.js`.
* Managed to update sketch 4 with a small form that accepts a number for the rows and columns and updates the sketch.

## 2023-05-05

* Changed the layout a little bit.
* Updated the `/sketches` page so as to dynamically fill itself according to the files in `lib/sketches/` and the sketch
  preview will be fetched from `public/images/sketches/`.

## 2023-05-03

* Fixed the index page issue on Safari's iOS browser by changing the `.h-screen` class definition.
* Update the index page logic so as to render the links given a list of objects with `href` and `text` keys, this should allow us to more easily add new links without having to duplicate calls to `Link`.
* Refactored the `<Layout>` component, while also updating it so as to detect the current path and display a back button
  if the user is not on the home page.

## 2023-05-02

* Small tweaks to the layout. 
* Learned how to use .svg with the `Image` component from `next/image`.

## 2023-04-30

* Learned how to enable [Prettier](https://prettier.io) in NeoVim.
* Finished setting up the logic for reading and rendering the list of posts, as well as setting up each post page.
* Add syntax higlight to the blogposts and inline code blocks.

## 2023-04-29

* Update colorscheme, once again.
* Update layout to use `.container` class, I'm going to work on getting the content set up and will focus on getting a
	good design afterwards, I find myself spending way too much time trying to get a "beautiful" website design.
* Started setting up posts layout.

## 2023-04-27

* Learned about [Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import) in Next.JS and managed
	to build the `/sketches/[id].js` page, where each sketch's .js file is loaded dynamically taking into account
	the identifier in the path.

## 2023-04-26

* Removed `pages/_document.js` in favour of a `<Layout>` component. The font is also set at the component level,
	avoiding us having to use `'next/font'` in every page.
* Introduce the `lib/sketches.js` file in order to keep information aobut the sketches, such as the id, the image
	to be used in the preview and the sketche's description.
* Introduce a new component `<SketchPreview>` to be used when rendering sketch previews in `/sketches`.
* Decided to replace the colorscheme with something simpler, with just 4 colors.
* Add some build errors because of missing `key` in some elements.

## 2023-04-25

* Learned how to add custom styles to TailwindCSS, using [this
	guide](https://tailwindcss.com/docs/adding-custom-styles), and moved the colorscheme to TailwindCSS as well as
	creating a custom class `.link` to avoid repeating the same classes in the `<Link>` element's classes.

## 2023-04-24

* Picked [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans?query=Jakarta) as the font for the
	website. Since I'm not very good at picking fonts I just read [this
	blogpost](https://www.creativeboom.com/resources/top-40-fonts-in-2023/) and picked the only font that was available in
	[Google Fonts](https://fonts.google.com/).
* Did an initial attemp at the homepage, with links at the bottom-left of the page, but it's proving harder than initial
	though to find the perfect combination of Tailwind classes to achieve this.
* Selected a colorscheme to use and updated the homepage to use these new colors.
