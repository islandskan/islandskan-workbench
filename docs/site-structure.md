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

````
src/
|-- _data/
|-- |-- bookshelf.json      <-- data collection of bookshelf items
|-- |-- bookshelf.schema.json		<-- json schema
|--  _includes/
|-- |-- layouts/		<-- layout templates for pages
|-- |-- |-- base.njk		<-- base layout template
|-- |-- |-- bookshelf.njk
|-- |-- |-- exploration.njk        <-- single exploration post
|-- |-- |-- exploration-index.njk
|-- |-- |-- interrupts.njk
|-- |-- |-- thoughts.njk		<-- single thought post
|-- |-- |-- thoughts-index.njk
|-- |-- |-- workbench.njk
|-- |-- partials/		<-- elements and components
|-- |-- |-- workbench-modals/       <-- separate folder for home page content
|-- |-- |-- |-- latest-bookshelf-item.njk
|-- |-- |-- |-- latest-exploration.njk
|-- |-- |-- |-- latest-thought.njk
|-- |-- |-- |-- standalone.njk
|-- |-- |-- |-- what-i-broke.njk
|-- |-- |-- about.njk
|-- |-- |-- card.njk        <-- card component (cardType: "exploration", "thought", "bookshelf-item") used with list.njk
|-- |-- |-- footer.njk
|-- |-- |-- header.njk
|-- |-- |-- interrupt-form.njk
|-- |-- |-- list.njk        <-- reused in "Bookshelf", "Explorations", and "Thoughts"
|-- bookshelf/
|-- |--index.md
|-- css/
|-- |-- styles.css
|-- explorations/
|-- |-- index.md
|-- interrupts/
|-- |-- index.md
|-- posts/      <-- all posts (exploration and thought) are created and stored here
|-- |-- .obsidian		<-- ignored, but placed here since "src/posts" is an Obsidian vault
|-- |-- templates/		<-- Obsidian templates, generated frontmatter for each post
|-- |-- |-- exploration-metadata.md
|-- |-- |-- thought-metadata.md
|-- |-- |-- log-metadata.md		<-- log entry template, used to make log entried for a "parent" Exploratin page
|-- |-- example-thought-post.md		<-- created thought post = single page
|-- |-- example-exploration-post.md		<-- created exploration post = single "parent" page
|-- |-- example-exploration-post-logs/      <-- generated subfolder for "parent" Exploration page and its log entries
|-- |-- |-- 2025-08-09.md
|-- |-- |-- 2025-08-13.md
|-- thoughts/
|-- |-- index.md
|-- index.md        <-- the home page, using the workbench.njk as layout
scripts/        <-- utility scripts
|-- watch-exploration-posts.js		<-- if there's a new file in "src/posts" with the tag "exploration", call ```create-logs-folder.js```
|-- create-logs-folder.js		<-- takes the new file as argument and generates subfolder
.eleventy.js        <-- config for 11ty
output/     <-- generated static HTML
````

## Posts

### Exploration post

```
<start of Exploration page>
------------
<main page content>
meta data:
	startDate(the date the main Exploration post was created)
	latestUpdate:either the startDate or the date of the latest log entry
	tags
	status: either the first default(when the Exploration post is first created or the status of the latest log entry)
------------
<main page content>
Intro content
	title
	overview: brief description of the Exploration project
------------
<log entries start>
1#(latest) log entry
	date: date the log entry was created(example 2025-08-21)
	status
	text: all of the content(text, images, etc) for the entry
------------
2#log entry
	date: date the log entry was created(example 2025-08-18)
	status
	text: all of the content(text, images, etc) for the entry
------------
3#latest log entry
	date: date the log entry was created(example 2025-08-14)
	status
	text: all of the content(text, images, etc) for the entry
------------
4#latest log entry
	date: date the log entry was created(example 2025-08-07)
	status
	text: all of the content(text, images, etc) for the entry
------------
5#latest log entry
	date: date the log entry was created(example 2025-08-01)
	status
	text: all of the content(text, images, etc) for the entry
<log entries end>
------------
<main page content>
Conclusions
	unansweredQuestions
	reflections
	references
	tools: developent tools used in the project
	components: components used in the project
<end of Exploration page>
```

### Thought post

```
<start of Thought page>
------------
<main page content>
meta data:
	date(the post date)
	tags: ["thought", <additional tags>]
	tone
------------
<main page content>
Intro content
	title
	underTitle
------------
<Thought content>
	text: all of the content(text, images, links, embedded elements etc)
------------
<main page content>
Conclusions
	unansweredQuestions
	reflections
	references
------------
<end of Thought page>
```
