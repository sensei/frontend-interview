# Sensei frontend coding exercise

For this programming exercise, you'll be building a basic Kanban board as a single page app according to our spec. Don't worry if you can't completely finish the implementation, but do try to get as far as you can.

## Development environment

In this repository are two starter project templates.

1. [kanban-react-js](./kanban-react-js/README.md) - React and JavaScript
2. [kanban-react-ts](./kanban-react-ts/README.md) - React and TypeScript

Please come to the interview with a development environment set up and ready to start coding. You may choose to clone this repository to develop locally, or copy one of the starter templates to an online development environment such as [StackBlitz](https://stackblitz.com/) or [CodeSandbox](https://codesandbox.io/).

If you feel more comfortable with a different frontend framework, such as Vue or Svelte, feel free to convert a template to the framework of your choosing. You are also free to install any additional npm packages to help you complete the exercise.

## Requirements

Below is a link to a Figma mockup of the app we will be building, it consists of a single page Kanban board with four columns.

[Figma mockup](https://www.figma.com/file/2Ahu22GdzIbH7LqCX8NOSg)

The starter template will have a mock API that returns a static array of tasks. Get as far as you can in implementing the following requirements:

- Have "status" columns of Backlog, In Progress, Testing, and Done
- Each column should contain a list of tasks in that status
- Each column should display a count of the tasks in that status/column
- Clicking the Chevron arrows should move cards between columns
- Clicking the "+ Add Task" button at the bottom of each column will use window.prompt to grab text for a new task to be added to the status
- Try to get the styling as pixel perfect as possible

Feel free to ask whatever questions you want to clarify the requirements.

## Suggested order of tasks

You are welcome to build the project however you wish but here's an idea:

- Start the exercise by implementing some basic styling (10 mins)
- Then, get the functionality working (40 mins)
- Then, refine the styling (10 mins)

## What we are looking for

Again, we are _not_ expecting you to complete the entire exercise. We are looking for:

- A working MVP
- Some attention is paid to code performance
- Some attention is paid to clean CSS and styling
