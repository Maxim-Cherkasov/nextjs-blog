NAVIGATION BETWEEN PAGES

import Link from 'next/link';

In Next.js, a page is a React Component exported from a file in the pages directory

Simply create a JS file under the pages directory, and the path to the file becomes the URL path.

You create routes as files under pages and use the built-in Link component. No routing libraries are required.

CLIENT SIDE NAVIGATION

Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.