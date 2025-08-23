# Site structure & features

> Detailed explaination of how the site is built and what features are included

### Workbench (home page)

-   Entry point of the site
-   Separate modals:
    -   Links to latest Thought post
    -   Links to latest Exploration post
    -   Standalone modal. Doesn't link to any page, just for things I want to highlight and share, example "Cool tool" (move to next iteration)
    -   If an Exploration post has an entry tagged with "what-i-broke", it will show up as a modal and link to that Exploration page (move to next iteration)
    -   "Currently reading/watching/listening to: (latest added item to Bookshelf)". Links to Bookshelf page
    -   "Start here". On first visit to the website, show information about the site and how to navigate.

### Explorations/Thoughts (posts)

> Explorations: Individual pages to log ongoing learing, experimentations, and building. Instead of a "typical" showcase of finished projects, I want to highlight "learning in public", with the ups- and downs.

> Thoughts: Individual pages to write about how the things I work on is connected to my interests(computing history, learning as a neurodivergent person, textile vs computing, art, gender and tech studies, etc.)

-   Posts that are either tagged "exploration" or "thought"
-   Their own index pages listing their corresponding "cards", linking to individual post pages
-   Use of additional tags(if they are part of a series/category)
-   Use of status(for Explorations), to show if it's ongoing, testing, revisiting, debugging, or
-   Supports crossreferencing between posts, for example referencing a Thought post that relates to something I am working on in a Exploration post.
-   Supports linking to resources and inclusion of texts, images, and other media.

### Bookshelf

-   Page to collect, organize, and share resources, recommendations, and inspirations
-   Different types of Bookshelf items: books/articles, videos, games, movies/series, learning resources, helpful tools, podcasts/audiobooks/music, other people's projects etc
-   Infomation about each item
-   If I written about or referenced an item in a Thought post, the post are linked

### About (component)

-   Instead of a dedicated page, the "about" information is inside a component that is available through out the site

### Interrupts (contact page, WIP)

-   Page with a "contact form"
-   Successfully submitted message goes to my email
-   (Further down the line): A guest log book with submitted messages.
-   (further down the line): Messages in guest book can reference Explorations or Thoughts post
-   (Further down the line): Checkbox to "Ok to post message to Guest book?"

## Folder structure

```
src/
|-- _data/
|-- |-- bookshelf.json      <-- data collection of bookshelf items
|--  _includes/
|-- |-- layouts/
|-- |-- |-- base.njk
|-- |-- |-- bookshelf.njk
|-- |-- |-- post.njk        <-- single layout for all individual post pages
|-- |-- |-- exploration-index.njk
|-- |-- |-- interrupts.njk      <-- contact page
|-- |-- |-- thoughts-index.njk
|-- |-- |-- workbench.njk       <-- template layout for the src/index.md (the home page)
|-- |-- partials/
|-- |-- |-- workbench-modals/       <-- separate folder for home page content
|-- |-- |-- |-- latest-bookshelf-item.njk
|-- |-- |-- |-- latest-exploration.njk
|-- |-- |-- |-- latest-thought.njk
|-- |-- |-- |-- standalone.njk      <-- a standalone modal that doesn't link to any page (for example just a modal with a "cool electronics tool")
|-- |-- |-- |-- what-i-broke.njk        <-- if an "Exploration" post contains entry with the tag "what-i-broke",
|-- |-- |-- about.njk
|-- |-- |-- card.njk        <-- base card based on cardType("exploration", "thought", "bookshelf-item")
|-- |-- |-- footer.njk
|-- |-- |-- header.njk
|-- |-- |-- interrupt-form.njk      <-- contact form
|-- |-- |-- list.njk        <-- reusable list for "Bookshelf", "Explorations", and "Thoughts"
|-- bookshelf/
|-- |--index.md
|-- css/
|-- |-- styles.css
|-- explorations/
|-- |-- index.md
|-- interrupts/         <-- page for contact form
|-- |-- index.md
|-- posts/      <-- all posts are created and stored here
|-- |-- templates/      <-- Obsidian templates
|-- |-- |-- exploration-metadata.md
|-- |-- |-- thought-metadata.md
|-- |-- |-- exploration-log.md
|-- |-- example-thought-post.md
|-- |-- example-exploration-post.md
|-- |-- example-exploration-post-logs/      <-- automatically creates log folder for corresponding exploration file
|-- |-- |-- 2025-08-09.md
|-- |-- |-- 2025-08-13.md       <-- examples of what the exploration logs would look like
|-- thoughts/
|-- |-- index.md
|-- index.md        <-- the home page, using the workbench.njk as layout
scripts/        <-- utility scripts
|-- create-logs-folder.js
.eleventy.js        <-- config for 11ty
output/     <-- generated static HTML
```
