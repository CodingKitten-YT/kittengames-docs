## Custom CSS

To customize the appearance of your game website, you can utilize CSS (Cascading Style Sheets). Below is the CSS code of the site with comments explaining each section:

```css
/* Set the font family, margin, padding, and background color for the body */
body {
  font-family: 'Bakbak One', sans-serif; /* Custom font */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  background-color: #f2f2f2; /* Background color */
  overflow-y: scroll; /* Enable vertical scrolling */
}

/* Styling for the header */
header {
  position: sticky; /* Make the header sticky */
  top: 0; /* Position at the top of the viewport */
  background-color: #3498db; /* Header background color */
  color: white; /* Header text color */
  padding: 10px; /* Header padding */
  height: 40px; /* Header height */
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
  z-index: 100; /* Ensure header stays on top */
}

/* Styling for iframes */
iframe {
  position: absolute; /* Position absolutely */
  top: 57px; /* Position below header */
  left: 0; /* Align to the left */
  width: 100%; /* Full width */
  height: calc(100vh - 55px); /* Adjust height */
  border: none; /* Remove iframe border */
}

/* Styling for game cards */
.container {
  display: flex; /* Use flexbox for layout */
  flex-wrap: wrap; /* Wrap items if necessary */
  justify-content: center; /* Center items horizontally */
  align-items: flex-start; /* Align items to the start */
  padding: 5px 20px; /* Container padding */
}

.game-card {
  width: 320px; /* Card width */
  margin: 20px; /* Card margin */
  padding: 20px; /* Card padding */
  border: 1px solid #ccc; /* Border */
  border-radius: 15px; /* Border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  display: flex; /* Use flexbox for layout */
  transition: transform 0.3s ease; /* Smooth transition */
}

/* Hover effect for game cards */
.game-card:hover {
  transform: translateY(-5px); /* Move card up on hover */
}

/* Styling for game card images */
.game-card img {
  width: 120px; /* Image width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px; /* Margin */
  border-radius: 10px; /* Border radius */
}

/* Styling for game information */
.game-info {
  flex: 1; /* Flex grow */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Column layout */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
}

.game-info h2 {
  margin-top: 0; /* Remove top margin */
  margin-bottom: 10px; /* Bottom margin */
}

/* Styling for buttons */
.game-info button {
  background-color: orange; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove button border */
  padding: 15px 30px; /* Button padding */
  border-radius: 10px; /* Border radius */
  cursor: pointer; /* Pointer cursor */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.game-info button:hover {
  background-color: darkorange; /* Button hover background color */
}

/* Styling for buttons in header */
.header-right button {
  background-color: #FFA500; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove button border */
  padding: 10px 20px; /* Button padding */
  border-radius: 5px; /* Border radius */
  cursor: pointer; /* Pointer cursor */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.header-right button:hover {
  background-color: #FF4500; /* Button hover background color */
}

/* Styling for modal */
.modal {
  display: none; /* Hide modal by default */
  position: fixed; /* Position fixed */
  z-index: 1000; /* Higher z-index to appear on top */
  left: 0; /* Position at left edge */
  top: 0; /* Position at top edge */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  overflow: auto; /* Enable scrolling */
}

/* Styling for modal content */
.modal-content {
  background-color: #fefefe; /* Modal content background color */
  margin: 10% auto; /* Center modal vertically */
  padding: 20px; /* Modal content padding */
  border: 1px solid #888; /* Border */
  width: 80%; /* Width */
  max-width: 600px; /* Max width */
  border-radius: 10px; /* Border radius */
  transition: transform 0.3s ease; /* Smooth transition */
}

/* Hover effect for modal content */
.modal:hover .modal-content {
  transform: scale(1.1); /* Scale up on hover */
}

/* Styling for close button */
.close {
  color: #aaa; /* Close button color */
  float: right; /* Float to right */
  font-size: 28px; /* Font size */
  font-weight: bold; /* Bold text */
}

.close:hover,
.close:focus {
  color: black; /* Close button hover color */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Pointer cursor */
}

/* Styling for links container */
#links-container {
  list-style-type: disc; /* List style */
  padding-left: 20px; /* Left padding */
}

#links-container a {
  display: block; /* Display as block */
  margin-bottom: 10px; /* Bottom margin */
  text-decoration: none; /* Remove underline */
}

/* Styling for search input */
#search-input {
  width: 100%; /* Full width */
  padding: 12px; /* Padding */
  font-size: 16px; /* Font size */
  border: 1px solid #ccc; /* Border */
  border-radius: 0 0 5px 5px; /* Border radius */
  box-sizing: border-box; /* Include padding and border in width */
  background-color: #f9f9f9; /* Background color */
  transition: border-color 0.3s ease; /* Smooth transition */
}

#search-input:focus {
  outline: none; /* Remove outline */
  border-color: #3498db; /* Focus border color */
}
```

This CSS code provides styling for all elements of your game website, and the comments added within the code explain each section's purpose, making it easier to customize. Adjust the values and properties as needed to fit your specific design requirements.
