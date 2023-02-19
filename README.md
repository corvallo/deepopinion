# DeepOpinion Senior Frontend Coding Challenge

## Candidate Francesco Stallo

# Technical choices

Solutions it is hosted on vercel at [deepopinion.vercel.app]

Project was initialized using Vite [https://vitejs.dev/guide/]

I've used Sass to create the styles of the application.

I've used faker js to create product datas.

The solution provides users with the option to select the number of rows to be displayed in the list, with choices of 1000, 10000, or 100000 rows.
Generating the data is a resource-intensive task for the main thread, so a web worker is utilized to create the data in a separate thread.
This prevents the UI from appearing sluggish or unresponsive.
