# Test Task

## Preparation

Before using this project - clone it, update all versions in `package.json` and run `pnpm install`

(_To check versions you can use:_ `pnpm update`)

## How to run (replace all nn after starting project)

### Install

1. Clone the project. Run `git clone nn`
2. Install latest version of [NodeJS](https://nodejs.org/en/)(better via [nvm](https://github.com/nvm-sh/nvm))
3. Install [pnpm](https://www.npmjs.com/package/pnpm)
4. Install [tiged](https://www.npmjs.com/package/tiged)
5. Run `pnpm install && prepare`

### Run

1. Run `pnpm run dev` or `npm run dev`

## Project structure

We're using a bit modified [feature-sliced design](https://feature-sliced.design/).

Project consists of **_layers_**. Each layer is made up of **_slices_**. And each slice is made up of **_segments_**.

1. **Layers** define a scope of responsibility and a level of danger of changes.
   The higher the layer, the higher its responsibility and knowledge about lower layers.
   The lower the layer, the higher its abstraction and impacts of changes inside.

Modules on one layer can oly interact with modules from the layers strictly below.

Here is a layers order:

- app - app-wide settings, styles and providers, e.g. routing, theme and global styles, etc.
- screens - compositional layer to construct full screen from features and widgets, e.g. SignInScreen, ProfileScreen, etc.
- widgets (_optional_) - compositional layer to combine entities and features into meaningful blocks, e.g. SignUpForm, UserProfile, TaskList, SidebarLayout, etc
- features - user interactions, actions that bring business value to the user(elements and their logic), e.g.SendComment, LikeButton, UserSearch, etc.
- shared - reusable functionality, detached from the specifics of the project/business, e.g. UI elements, APIs, libs, configs, etc.

2. **Slices** partition the code by business domain. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling, e.g. User, Task, Map, Issue, etc.

3. **Segments** - tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are ui, model (store, actions), api and lib (or utils/hooks), but you can omit some or add more, as you see fit.

In most cases, it is recommended to place api and config only in the shared layer

## What's inside?

- React
- Vite with SWC plugin
- Redux
