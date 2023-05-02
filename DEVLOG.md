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
