## Creating a Game List in JSON Format

To create a game list for your website, you can use JSON (JavaScript Object Notation), a lightweight data-interchange format. Below is a simple JSON structure to represent each game entry in your list:

## JSON Structure Explanation:

- name: This field represents the name of the game.
- image: Here, you specify the URL of an image representing the game. This could be a thumbnail or any other relevant image.
- url: This field contains the URL where users can access and play the game.
  ::: tip
  Images should be squares to look best.
  :::

### Example:

Here's an example of how you can use this JSON structure to list a game:

```json
{
  "name": "Example Game",
  "image": "https://example.com/game_image.png",
  "url": "https://example.com/play"
}
```

Replace "Game Name", "Image URL", and "URL where the game is hosted" with the actual details of your games. Ensure that the URLs are accurate and accessible.

By following this format, you can easily maintain a structured list of games for your website, making it convenient for users to discover and access them.
