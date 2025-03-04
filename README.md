<p align="center">
  <a href="https://elevenestudio.com">
    <img src="https://drive.google.com/uc?id=1y3czp-T2PxOi2R72PqOoFVGw4lACsSWA&export=download" width="300px" height="125px" alt="Eleven logo"/>
  </a>
</p>

<h1 align="center">
  🚀 Astro template with React and Tailwindcss (by **Eleven**) and Vercel SSR
</h1>

<p align="center">
  Template for creating websites with Astro with React and Tailwindcss following best practices: Continuos Integrations and linting
</p>

# ⚡️ **Using this Astro template**

1. Create your project based on this template:
    - a) If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
    - b) If you prefer to just create a local project, you can use [degit](https://github.com/Rich-Harris/degit):

        ```bash
          npx degit elevenestudio/astro-boilerplate#main my-app
        ```

2. Update your project meta-information:
    - [ ] Update the [`package.json`](./package.json):
    - [ ] Specify proper values for the `name`, `author` and `license` properties
    - [ ] Specify the file name for the `main` and `module` properties
    - [ ] Change the author in [`LICENSE`](./package.json)
    - [ ] Clean up this [`README.md`](https://github.com/elevenestudio/astro-template-eleven/blob/main/README.md)

# 🔦 **Linting**

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun lint`               | Run Biome linter                                 |
| `bun lint:fix`           | Fix Biome lint issues                           |

# 🗂️ **Project Structure**

Inside of your project, you'll see the following folders and files:

```
/
├── public/
|-- └── images
├── src/
│   └── components/
│   └── config/
│   └── content/
│   └── layouts/
│   └── lib/
│   └── pages/
│       └── index.astro
│   └── types/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React components.

Any static assets, like images, can be placed in the `public/` directory.

# 🧞 **Commands**

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

# 🌈 **Tech Stack**

- [Astro](https://astro.build/)
- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org) [Pending]
- [Vitest](https://vitest.dev/) [Pending]
- [Biome](https://biomejs.dev/) for linting and formatting
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/#/)
- [ls-lint](https://ls-lint.org/)
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/typescript-react_library-vite_template/blob/main/Makefile) for standardize how to run projects
- [.editorconfig](https://editorconfig.org) for sharing the IDE config
- [Pages CMS](https://pagescms.org/) for managing business data through `.pages.yml` and `business.json`

# 👌 **Eleven Estudio Quality Standards**

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

# **Contributions**

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

# **Additional Checks**

This README.md was linted with
[markdownlint](https://github.com/DavidAnson/vscode-markdownlint)

## **Related information**

We draw some inspiration from [CodelyTV](https://github.com/CodelyTV) and [ixartz](https://github.com/ixartz/Astro-boilerplate) projects or templates.

Made with ♥ by [Eleven Estudio](https://elevenestudio.com)
