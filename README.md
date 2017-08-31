# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)



# JAM README

**Purpose**

This program automates the video making process of social videos. Editing these
videos manually can take anywhere from a single hour to an entire day. JAM
cuts that time down to however long it takes to write a paragraph and to select
media assets.

My Project
---



Welcome.

Style
---
Rather than focusing on make the application look good, we just made sure that
it worked, so this is in no way a visually appealing application.

Development rules to follow and take note of:
- Write detailed comments for each pull request and wait for someone on the project to give it a thumbs up to merge
- Keep all components in the component directory
- Make a separate CSS file for each individual component for easy styling changes


Setup
---
Clone the project and run `npm install` in the terminal. Start the development server with this `npm start`.


Usage
---
Ideally, the best way to use the app currently is to have a paragraph of text ready to go. On the start of the server input the paragraph into the text area and click the 'chunk me' button. This will initialize the individual video cards that represent each slide of the video. There is a presets bar at the top to manage small video characteristics. Once the video cards have been initialized import (you can drag and drop) your media assets (only video for now) into the media bar that is fixed on the left side of the app. You can then drag and drop the videos into its corresponding video card. Each video card is equipped with a text alignment square and the ability to update the timing of a video and the individual text. For text that is longer than 8 words or so, it is higly recommended to break it up with a combination of `shift` + `enter` so that the text does not flow off of the screen. When you are ready to make the video simply click on the 'make video' button that is located at the bottom of the app. 


Compile
---

```
npm run compile
