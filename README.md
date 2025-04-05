# Reading Timer

This script calculates the estimated reading time for the content inside HTML elements (`main`, `article`, or `section`) and adds a visual badge showing the reading time.

## Features

- Calculates reading time based on an average speed of **100 words per minute**.
- Targets `main`, `article`, or `section` elements.
- Skips short content (less than or equal to 50 words).
- Injects a styled badge showing reading time (e.g., `⏱️ 7 min read`).
- Attempts to place the badge after:
  - A heading (`h1`, `h2`, or `h3`) if available.
  - A `time` tag's parent (e.g., near the date).
  - Else inserts the badge at the beginning of the element.
  - If the element is a paragraph (`<p>`), it tries to insert the badge after the first sentence.

## Usage

### From Chrome Web Store

1. Visit the [Chrome Web Store Extension Page](#)
2. Click **Add to Chrome**
3. Confirm by clicking **Add Extension**

The extension will now be active and automatically add reading time badges to supported pages.
