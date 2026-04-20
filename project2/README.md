Site address -> https://reconnectmaster.github.io/portal/
Promptpay QR -> https://promptpay2.me/

Structure:
"One Main Portfolio Repo with Subfolders"

"""
portal/
│
├── index.html             ← Main landing page
├── style.css
│
├── project-1/             ← Each subfolder contains one project
│   └── index.html
├── project-2/
│   └── index.html
...
"""

How it works:
- index.html is your main page with links to each project.
- Visitors click a link like project-1 and it opens https://yourusername.github.io/my-portfolio/project-1/.
This keeps everything in one repo, tidy and centralized.

Layout 2: "Separate Repositories for Each Project"
Structure: Create five GitHub repositories:
- project-one
- project-two
- ...
>>> Then enable GitHub Pages for each one.
>>> Each will have a unique URL like: https://yourusername.github.io/project-one/
>>> Create a sixth repo called my-portfolio to serve as a hub, linking to each project.

Layout 3: "Use a Static Site Generator (Extra)"
More elegant and scalable:
- Tools like Jekyll (built into GitHub Pages), Hugo, or Eleventy allow you to build multi-page sites with templating and easy navigation.
- These tools are still “static,” but give you blog-style navigation, routing, even tag filters—without backend code.
- Build it locally and push the final output to your repo as if it were just HTML/CSS.

