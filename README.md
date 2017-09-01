# JamJS

An application built with [Electron](), [React](), and [node-fluent-ffmpeg]() built to ease the process of social video creation.

**Purpose**

This program simplifies the process of creating and editing social videos. Making these 1-2 minute videos can take anywhere from a few hours to an entire day when using professional-grade editing software and the skills required to operate those programs effectively often separates a reporter from a story's creation. JamJS puts the story first, cutting down the time and technical skills required to create a compelling social video.

**Process**

Rather than focusing on making a highly visually appealing application to start, we spent our time implementing the most functionality to the fullest extent possible. With that said, design and usability go hand-in-hand, and PRs are more than welcome for both functionality and design improvements.


Style
---
Development rules to follow and take note of:
- Write detailed comments for each pull request and wait for someone on the project to give it a thumbs up to merge.
- Keep all components in the `components` directory.
- Only put global styles in `www/styles.css`.
- Create a CSS file for each component to make styling easier and more modularized. Put the CSS file and the corresponding component in a folder within the `components` directory. Name the subfolder, CSS file, and component the same thing.

Setup
---
Currently, setup for developers and prospective users is the same. As we get closer to completing the project's full build, we'll create a downloadable application for non-developers.

`
git clone [project-url]
cd [project-name]
npm install
npm start
`

A full video can be fully created on the development server launched with `npm start`.

Make a video
---
The best way to make a video with the app is to have a your copy ready to go first. Our hope is that this brings the focus back to the story and not just to the visual medium. When the server starts, input the paragraph into the top text area, and click 'Chunk me'. This button initializes the creation of individual video cards, which represent each slide of the video. 

On click, your video's copy will be intelligently chunked to best match existing norms for social video copy. Each text segment will be put into its own video card with a recommended time estimate based on the length of the segment. Don't like how the text was chunked? Change your mind on some copy? Make your edits directly in the text segment's text area and 'Update text'. This will automatically update the timing estimate for the video card. To change the length of any video clip, directly edit the timing text area.

If any text is chunked to be longer than 8 words, add a line break in the segment by pressing `shift` + `enter` in the text area so that the text for that video card does not flow off the screen.

Left, center, or right align your text at the top, middle, or bottom of a video segment by selecting the corresponding square in the 3x3 grid. 

Add media (only video for now) to each card by importing your video clips into the media library and dragging your videos from the library to the individual cards. Set video-wide presets like text color, font, and audio track in the presets bar above the large text area. Name your video and select its format by typing in a title and selecting a file type from the dropdown menu.

When you are ready to make the video simply click on the 'make video' button that is located at the bottom of the app. The video will be created in the root directory of this project.


Contribute to this project
---
See this document's Style section (above) for best contribut practices. See below for an overview of the project's structures, our development wishlist, some common issues/troubleshooting for project setup/development.

**Project structure**

This project was built on top of the [electron-quick-start]() guide and postfitted to work with Fluent FFmpeg/pure JavaScript logic from previous build iterations.

All React components are in the `components` folder. `VirtualConfigRenderer.jsx` is the state management file of the project. All state is passed down and back up through this file. The React documentation about passing around/passing up state may be very helpful for working with this project's format.

`index.html` is located in the root directory. It requires three scripts, making the contents of each of those files, all located in the `www` directory, globally defined. While this isn't the most secure build long-term, it worked well for us as we added a React interface. Quickly skim those files to avoid using any function names similar to the ones in those files.

**TODO**

- Separate CSS into per-component sheets
- Interface design
- Drag-drop functionality

**Common bugs**

The project uses the [`font-manager`]() npm package to find all available fonts on a local system. It has previously caused errors due to different Node versions. If you get an error about dissonant Node versions, use [electron-rebuild]() to sync all packages' run versions. 

!!explain how to do electron-rebuild!!


Maintainers
---
[@adebruine](https://github.com/adebruine)

[@jbirori](https://github.com/jbirori)

[@maxine](https://github.com/maxine)
