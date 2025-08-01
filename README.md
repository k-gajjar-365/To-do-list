# 📝 JavaScript To-Do List

A simple and responsive To-Do List built with vanilla JavaScript. Add, remove, and persist tasks across sessions using `localStorage`. Includes keyboard shortcuts for enhanced productivity.

[![Live Site](https://img.shields.io/badge/Live%20Site-Online-brightgreen)](https://to-do-list-nine-ashy-38.vercel.app/)

## 🚀 Features

- Add tasks via input field or `Enter` key
- Remove last task with `Delete`
- Clear all tasks with `Ctrl + Delete`
- Tasks persist across page refresh using `localStorage`
- Responsive and minimal UI

## 🎯 Usage

### Interacting with the App

- **Add a task**: Type into the input field and press `Enter`, or click the **Add Task** button.
- **Remove last task**: Press `Delete`. This deletes the last task from the list and updates `localStorage`.
- **Clear all tasks**: Press `Ctrl + Delete`. This removes every task instantly.
- **Focus input field**: Press any key other than the above combinations to quickly return focus to the input box.
- Tasks persist automatically thanks to `localStorage`—refreshing the page won’t lose your list.

### Notes
- Works seamlessly on desktop and mobile (responsive layout included).
- Task overflow handled with smooth scrolling for better usability on smaller screens. 

### Keyboard Shortcuts
| Shortcut             | Action               |
|---------------------|----------------------|
| `Enter`             | Add task             |
| `Delete`            | Remove last task     |
| `Ctrl + Delete`     | Delete all tasks     |
| Any other key       | Focus input field    |


## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/k-gajjar-365/To-do-list.git

# Navigate into the project
cd To-do-list  
```
