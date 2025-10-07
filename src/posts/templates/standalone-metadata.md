<%*
let title = await tp.system.prompt("Log entry title");

let today = tp.date.now("YYYY-MM-DD");

let slugifiedTitle = title
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')
.replace(/(^-|-$)/g, '');

await tp.file.rename(slugifiedTitle);

tR += `---
title: ${title}
date: ${today}
tags: ["standalone"]
layout: null
permalink: false

---

![](../assets/standalone/)
`;
%>
