# Islandskan Workbench - Personal Website

brief description of website

---

## Goals

-   share who I am, what I do, what I am interested in, and what I prioritise
-   being a space I have made to fit how I write, work, and share
-   being able to connect ideas with work
-   being able to easily create and edit posts
-   share what I am working on, thinking about, and what I am learning from the principle "learning in the public"
-   being a workbench of ideas and work, even if they are ongoing, refactored, or at the moment being debugged
-   share my perspectives on computers and development, technology, arts and crafts, and politics
-   being on a platform I have built
-   being a framwork to connect and show how I am to other people

---

## CTAs

-   Workbench/home page:
    -   entry point
    -   overview of the site
    -   introduction of the purpose and what to expect
    -   invite exploration
    -   direct to read latest posts
-   Thoughts index
    -   find through navigation or modal on Workbench
    -   invite reading through exploration, filtering, or latest
-   Explorations index
    -   find through navigation or modal on Workbench
    -   invite reading through exploratino, filtering, or latest
-   Individual posts:
    -   find through modal on Workbench, index page, or linked from other post/Bookshelf
    -   find useful/interesting context, references, and resources
    -   find other related posts
    -   encourage participating in the dialoge (questions, reflections) to the Interrupts page
-   Bookshelf:
    -   Find through navigation, modal on Workbench, or through linked from post
    -   find resources and references
    -   read my Thought post if there is one
-   About:
    -   find through footer/margins of site
    -   invite to learn more about me through linked posts
    -   find my other platforms
    -   encourage Interrupts
-   Interrupts
    -   brief description on what interaction I want
    -   form submission
    -   engage in the content on the site or reach out to me
    -   being a part of the website through the guest book
    -   extending the dialogue/exploration from my posts by continuing/contribute through the guest book

---

## Status

MVP in progress:

-   [ ] Content and data handling
-   [ ] Navigation and linking
-   [ ] Layouts and components
-   [ ] CSS styles
-   [ ] Obsidian post creation
-   [ ] Successful build & deploy
-   [ ] Ready to be built upon

For a detailed **Checklist**, check [/docs/checklist.md](docs/checklist.md).

---

## Quickstart

### Prerequisited

-   NodeJS (min. v18.0.0)
-

```bash
npm install
npm run dev # local development server
npm run stage # local staging development
npm run build # build for production
```

For more details on **development, build, and installations**, check [/docs/dev-build](docs/dev-build.md).

---

## Documentation

-   [Site structure & features](docs/site-structure.md)
-   [Data schema](docs/data-schema.md)
-   [Collections setup](docs/collections.md)
-   [Writing new content](docs/writing-content.md)
-   [Development & build](docs/dev-build.md)
-   [Acceptance tests](docs/acceptance-tests.md)

---

## Tech stack

-   [11ty(v3.1.2)](https://www.11ty.dev/) - static site generator
-   [Nunjucks](https://mozilla.github.io/nunjucks/) - templating for frontmatter in 11ty
-   [NodeJS](https://nodejs.org/en) (v20.11.0) - JS runtime
-   [cross-env](https://github.com/kentcdodds/cross-env) - (Windows specific) environment variables
-   [Obsidian](https://obsidian.md/) + [Templater](https://github.com/SilentVoid13/Templater) plugin - content writing and extended templating
