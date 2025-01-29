# adapt-talk
 **Talk** is a *presentation component* for Adapt.

The talk component  simulates conversation "Chat Like" conversation between characters displaying avatars  and messages in speech bubbles.  It can include images of documents or screen shots and audio files. 

## Installation

To install the Adapt Guided Tour Component in the Adapt framework, run the following command from the command line:

```sh
adapt install adapt-esdc-tour
```

To install the plugin to the Authoring Tool, follow these steps:

1. **Download the Plugin**: Obtain the plugin from the GitHub repository or another source.
2. **Upload to Authoring Tool**: Use the Adapt authoring tool\'s Plug-in Manager to upload and install the plugin.
 
## Settings Overview
Below are the attributes used in `components.json` to configure the Adapt Talk Component

### Global Settings

- **ariaRegion (string)**: The default ARIA label for the talk. It provides context for screen reader users.
- **optionalAudioPlayerMessage (string)**: Label for the optional audio version of the talk message. It provides context for screen reader users.
- **narration (string)**: Label for the narration in the talk. It provides context for screen reader users.

### Properties

- **_supportedLayout (string)**: Defines the supported layout for the component.
- **instruction (string)**: Optional text that appears above the component, often used to guide the learner’s interaction with the component.
  
### _characters (array)

Each entry in the array represents a talk character and should contain the following properties:

- **name (string)**: This is the character's name.
- **position (string)**: This is the position for the character and its text message. You can choose to display them on the left or right.
- **_graphic (object)**: Path to the avatar for the talk character.
  - src: Source of the image to be displayed
  - alt: Alternative text for the image displayed behind the step.
- **classes (string)**: Classes that are applied to the character, enabling the application of custom CSS styling linked to those class names.

### _items (array)

Each entry in the array represents a talk message and should contain the following properties:

- **_character (number)**: The index number of the character in the characters array linked to the talk message.
- **_characterName (string)**: This is the name of the talk character linked to the talk message.
- **text (string)**: This is the talk message text.
- **_graphic (object)**: Path to the image included in the talk message content.
  - src: Source of the image to be displayed
  - alt: Alternative text for the image displayed behind the step.
- **_mp3 (string)**: Path to the mp3 audio file that aligns with the text content in the talk message.
- **classes (string)**: Classes that are applied to the talk message, enabling the application of custom CSS styling linked to those class names.

----------------------------
Requires framework >=4.4.1
