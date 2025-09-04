<%*
let title = await tp.system.prompt("Log entry title");

let today = tp.date.now("YYYY-MM-DD");

let folderPath = tp.file.folder(true);

let count = 1;
let fileName = `${today}-${String(count).padStart(2, "0")}.md`

while(await tp.file.exists(`${folderPath}/${fileName}`)) {
count++;
fileName = `${today}-${String(count).padStart(2, '0')}.md`;
}

let parentSlug = tp.file.folder(true).split("/").pop().replace("-logs$/i", "");

await tp.file.rename(fileName.replace(".md", ""));

tR += `---
title: "Log entry ${count} - ${today}"
underTitle: "${title}"
date: ${today}
tags: ["logs"]
status: "prototyping"
parent: "${parentSlug}"
layout: null
permalink: false

---

Start adding log entry content here
`;
%>
