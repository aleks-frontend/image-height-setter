# imageHeightSetter() function
## Description
Function is used for setting the height of an image inside the dynamic overflow container.  
Container element with fixed height that contains the dynamic overflow div needs to have `js-imageHeightSetter-container` class.
And the image or a div element with a background image that needs to have the dynamic height needs to have a `js-imageHeightSetter-image` and 
`data-image-height` attribute set.

## Implementation Example
```
  <div class="col__container js-imageHeightSetter-container">
    <div class="col" data-max-height="dynamic">
      <div class="imageBlock js-imageHeightSetter-image" data-image-height="{{image1-height}}"></div>
      {{#col1-text}}
      <div class="textBlock">
        {{{col1-text}}}
      </div>
      {{/col1-text}} 
    </div>
    <div class="col col--right" data-max-height="dynamic">
      <div class="imageBlock js-imageHeightSetter-image" data-image-height="{{image2-height}}"></div>
      {{#col2-text}}
      <div class="textBlock">
        {{{col2-text}}}
      </div>
      {{/col2-text}}
    </div>
  </div>
  ```
