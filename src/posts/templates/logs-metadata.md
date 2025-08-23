<%*
let today = tp.date.now();

await tp.file.rename(today);

tR += `---
date: ${today}
tags: ["exploration"]
status: 
---
Write the rest of the text here
`;
%>