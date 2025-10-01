# Acceptance tests

> Tests/acceptance criteras to know when tasks and features are done
> At the moment, they are written in "plain language" acceptance criteras.

---

## Core setup

- [x] When I run `npm start`, the site builds locally without errors
- [x] When I run the build on the deployment target, it succeeds without errors

## Layouts & navigation

- [x] When I open the site, I can navigate between home, thoughts, explorations, bookshelf, and interrupts
- [ ] When I open the home page, I see modals for latest Thought, latest Exploration, latest Bookshelf item, and About
- [ ] When I click a modal, I am taken to the correct page
- [ ] When I click the About modal, the info appears inline (no page change)
- [] Whe a Exploration page has a current log entry tagged as "what-i-broke", it is displayed as a dedicated modal
- [] The "What I broke" modal links to the Exploration page
- [] When the Exploration page isn't tagged as "What I broke" anymore, the modal is removed from the Workbench
- [] When a user visits the Workbench for the first time, a modal named "Start here"
- [x] When I scroll any page, header and footer are displayed consistently

## Exploration posts

- [x] When I create a new Thought in Obsidian, the frontmatter has correct fields (title, date, tags)
- [x] When I create a post tagged as "Thought", it uses the right layout
- [x] When I create a new Exploration in Obsidian, a logs folder is created automatically
- [x] When an Exploration post contains multiple log entries, they are generates
- [x] When an Exploration post log entries are created the same date, they are automatically numbered
- [x] When I create a log entry in a sub folder, they are linked to the parent Exploration through a parentSlug identifier
- [x] Log entries in a sub folder should render as part of the main Exploration post page
- [x] When I add a new log entry, this updates the Exploration page's last update
- [x] When I add a new log entry, this updates the Exploration page's status
- [x] When I add additional tags to the log entries, they are added to the Exploration page's tag list
- [x] When the Exploration page's date, status, and tags are updated, they are also updated on the Exploration index page
- [x] When a log entry has the tag "what-i-broke", I want the styling of that log entry to be different
- [x] When a log entry has the tag "what-i-broke", I want the styling of the "list card" for the Exploration post to be different
- [x] As long as an Exploration post's latest status is "what-i-broke", the style of the card should persist. So if the latest log entry is something else, the styles are removed.
- [x] When I create a new log entry in the logs folder, the log appears on the correct Exploration page.
- [x] The log entries of the Exploration page is displayed in the right descending order (newest-oldest)

## Thought posts

- [x] When I have created a "Thought" post, it uses the correct data for each Thought page

## Posts (general)

- [x] When I cross-reference another post in frontmatter, the link works
- [x] When I link to an external web page, the link works!
- [x] Posts render images
- [x] Posts render embedded videos

## Bookshelf

- [ ] When I add a new item to `bookshelf.json`, schema validation passes
- [ ] When I add a new item, it appears on the Bookshelf page
- [ ] When I add a `relatedThoughtURI`, the link works and points to the correct Thought
- [ ] When I check the home page, the latest added item appears in the “Currently reading/watching/listening to” modal

## Styles

- [ ] When I load the site, text is readable and consistent across pages
- [ ] When I view cards (explorations, thoughts, bookshelf), they display correctly and consistently
- [ ] When I view modals, they render without overflow or clipping

## Interrupts

- [ ] When I submit the contact form, I see a confirmation message
- [ ] When I submit the contact form, I receive the email at the configured address

## Deployment

- [ ] When I open the deployed site, all pages load without broken links
- [ ] When I click navigation links in production, they go to the correct pages
- [ ] When I open the deployed site on mobile, it displays correctly

---
