# Audibene Code Snippets

A set of HTML, JS and Apex Snippets for Visual Studio Code.
You can also press `Ctrl + Space` if the snippets are not displayed

![promo](./images/screen1.png)

## Configurations
- Enable Apex snippets
- Enable Aura Snippets
- Enable JavaScript snippets
- Enable LWC Snippets
- Enable SLDS Classes
- Enable Advanced Mode

## Available Snippets

### HTML Snippets
Trigger | Description
--- | ---
bold | Adds Strong tag and moves the cursor between the tags to enter text
grid:1 Column | Adds SLDS grid layout along with single column
grid:2 Columns | Adds SLDS grid layout along with two columns
grid:3 Columns | Adds SLDS grid layout along with three columns
column | Adds Column
Modal Layer | Adds the Audibene Modal Layer HTML along with Controller and Helper function
absolute:center | Adds SLDS layout for absolute center
heading | Adds heading HTML. Supports heading_large, heading_medium, heading_small
text | Adds text HTML - Supports align_left, align_center ,align_right, color_default, color_success,color_weak, color_error, color_inverse, color_inverse-weak
text:left | Text Left
text:center | Text Center
text:right | Text Right

### Apex Snippets
Trigger | Description
--- | ---
sysDebug | System Debug
function | New Function
testFunction | New Test Function
tryCatch | Try Catch
getset | Getter Setter
assert | System Assert
assertEqual | System Assert Equal

### Javascript Snippets
Trigger | Description
--- | ---
console.log | Console Log
json:stringify-and-parse | JSON.parse(JSON.stringify(data))
json:parse | JSON.parse(data)
json:stringify | JSON.stringify(data)
evt:dataSet | dataSet
promise | Creates and returns a new Promise in the standard ES6 syntax
thencatch | Add the .then and .catch methods to handle promises
forEach | Adds a forEach Statement
component:set | Adds a component setter Statement
component:get | Adds a component getter Statement
component:find | Adds a component finder Statement
function:controller | Adds a new functions for Controllers
function:helper | Adds a new functions for Helpers
action:Callback | Adds code for callback method
filter | Adds a filter statement
splice | Adds a splice Statement
action:event | Adds code for firing event

### Aura Snippets
Trigger | Description
--- | ---
input:text-aura | Text input fields are for entering single-line text.
input:number-aura | Number input fields support decimal, percentage, and currency values.
input:search-aura | Search input fields enable search queries
input:date-aura | Date input fields provide a date picker for entering a date.
input:time-aura | Time input fields provide a dropdown list of time values
input:datetime-aura | Date/Time input fields provide a date and time picker for entering a date and time.
input:file-aura | File input fields support upload of single or multiple files and can restrict the accepted file types
input:email-aura | Email input fields are for entering email addresses
input:password-aura | Password input fields obscure your text input
combobox-aura | A combobox enables you to select only one option.
card:basic-aura | Aura Basic Card
icon:aura | Aura Icon
button:basic-aura | Basic Button Aura
button:icon-aura | Basic Button Aura
button:group-aura | Button Group Aura
if | Conditionally instantiates and renders either the body or the components in the else attribute.
iteration | Renders a view of a collection of items. Supports iterations containing components that can be created exclusively on the client-side.
attribute | Adds Attributes HTML
hasRecordId | Add the force:hasRecordId interface to a Lightning component to enable the component to be assigned the ID of the current record
appHostable | Add the force:appHostable interface to a Lightning component to allow it to be used as a custom tab in Lightning Experience or the Salesforce mobile app. Attribute name recordId, type String
hasSObjectName | Add the force:hasSObjectName interface to a Lightning component to enable the component to be assigned the API name of current record’s sObject type. Attribute name sObjectName, type String
lightningQuickAction | Add the force:lightningQuickAction interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app
lightningQuickActionWithoutHeader | Add the force:lightningQuickActionWithoutHeader interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app
availableForAllPageTypes | To make your component available for record pages and any other type of page, implement the flexipage:availableForAllPageTypes interface
availableForRecordHome | To make your component available for record pages only, implement the flexipage:availableForRecordHome interface.
init | This event is automatically fired when an app or component is initialized, prior to rendering.

### Ligntning Web Components Snippets
Trigger | Description
--- | ---
input:text-lwc | Text input fields are for entering single-line text.
input:number-lwc | Number input fields support decimal, percentage, and currency values.
input:search-lwc | Search input fields enable search queries
input:date-lwc | Date input fields provide a date picker for entering a date.
input:time-lwc | Time input fields provide a dropdown list of time values
input:datetime-lwc | Date/Time input fields provide a date and time picker for entering a date and time.
input:file-lwc | File input fields support upload of single or multiple files and can restrict th
input:email-lwc | Email input fields are for entering email addresses
input:password-lwc | Password input fields obscure your text input
combobox-aura | A combobox enables you to select only one option.
card:basic-lwc | LWC Basic Card
icon:lwc | LWC Icon. Supports all Utility icons
button:basic-lwc | Basic Button LWC
button:icon-lwc | Basic Button LWC
button:group-lwc | Button Group LWC

### SLDS Classes 
> These will only work inside the class attributes

Trigger | Description
--- | ---
align_absolute-center | Class will absolutely center children content
border_bottom | Adds a bottom border to an element
border_left | Adds a left border to an element
border_right | Adds a right border to an element
border_top | Adds a top border to an element
box | Provides 1rem base padding and borders
box_x_small | Provides .5rem base padding and borders
box_xx_small | Provides .25rem base padding and borders
box_shade | Sets the background color to gray
box_inverse | Sets the background color to dark blue
box_alt-inverse | Sets the background color to darker blue
box_success | Sets the background color to green
box_info | Sets the background color to gray-ish blue
box_warning | Sets the background color to yellow
box_error | Sets the background color to red
box_offline | Sets the background color to black
box_texture | Adds striped background
float_left | Pulls element from document flow and floats left. Text and other elements wrap around it.
float_none | Removes float from an element that has attribute already
float_right | Pulls element from document flow and floats right. Text and other elements wrap around it.
slds:hide | Hides an element from the page by setting display propery to none
slds:show | Shows the element by setting display property to block
slds:hidden | Hides an element but reserve the space on the page
slds:visible | Shows an element which was hidden by slds-hidden
margin:around_none | Removes margin from all sides
margin:around_xxx-small | Adds .125rem margin to all sides
margin:around_xx-small | Adds .25rem margin to all sides
margin:around_x-small | Adds .5rem margin to all sides
margin:around_small | Adds .75rem margin to all sides
margin:around_medium | Adds 1rem margin to all sides
margin:around_large | Adds 1.5rem margin to all sides
margin:around_x-large | Adds 2rem margin to all sides
margin:around_xx-large | Adds 3rem margin to all sides
margin:top_none | Removes margin from top
margin:top_xxx-small | Adds .125rem margin to top
margin:top_xx-small | Adds .25rem margin to top
margin:top_x-small | Adds .5rem margin to top
margin:top_small | Adds .75rem margin to top
margin:top_medium | Adds 1rem margin to top
margin:top_large | Adds 1.5rem margin to top
margin:top_x-large | Adds 2rem margin to top
margin:top_xx-large | Adds 3rem margin to top
margin:left_none | Removes margin from left
margin:left_xxx-small | Adds .125rem margin to left
margin:left_xx-small | Adds .25rem margin to left
margin:left_x-small | Adds .5rem margin to left
margin:left_small | Adds .75rem margin to left
margin:left_medium | Adds 1rem margin to left
margin:left_large | Adds 1.5rem margin to left
margin:left_x-large | Adds 2rem margin to left
margin:left_xx-large | Adds 3rem margin to left
margin:right_none | Removes margin from right
margin:right_xxx-small | Adds .125rem margin to right
margin:right_xx-small | Adds .25rem margin to right
margin:right_x-small | Adds .5rem margin to right
margin:right_small | Adds .75rem margin to right
margin:right_medium | Adds 1rem margin to right
margin:right_large | Adds 1.5rem margin to right
margin:right_x-large | Adds 2rem margin to right
margin:right_xx-large | Adds 3rem margin to right
margin:bottom_none | Removes margin from bottom
margin:bottom_xxx-small | Adds .125rem margin to bottom
margin:bottom_xx-small | Adds .25rem margin to bottom
margin:bottom_x-small | Adds .5rem margin to bottom
margin:bottom_small | Adds .75rem margin to bottom
margin:bottom_medium | Adds 1rem margin to bottom
margin:bottom_large | Adds 1.5rem margin to bottom
margin:bottom_x-large | Adds 2rem margin to bottom
margin:bottom_xx-large | Adds 3rem margin to bottom
margin:vertical_none | Removes margin from top and bottom
margin:vertical_xxx-small | Adds .125rem margin to top and bottom
margin:vertical_xx-small | Adds .25rem margin to top and bottom
margin:vertical_x-small | Adds .5rem margin to top and bottom
margin:vertical_small | Adds .75rem margin to top and bottom
margin:vertical_medium | Adds 1rem margin to top and bottom
margin:vertical_large | Adds 1.5rem margin to top and bottom
margin:vertical_x-large | Adds 2rem margin to top and bottom
margin:vertical_xx-large | Adds 3rem margin to top and bottom
margin:horizontal_none | Removes margin from left and right
margin:horizontal_xxx-small | Adds .125rem margin to left and right
margin:horizontal_xx-small | Adds .25rem margin to left and right
margin:horizontal_x-small | Adds .5rem margin to left and right
margin:horizontal_small | Adds .75rem margin to left and right
margin:horizontal_medium | Adds 1rem margin to left and right
margin:horizontal_large | Adds 1.5rem margin to left and right
margin:horizontal_x-large | Adds 2rem margin to left and right
margin:horizontal_xx-large | Adds 3rem margin to left and right
padding:around_none | Removes padding from all sides
padding:around_xxx-small | Adds .125rem padding to all sides
padding:around_xx-small | Adds .25rem padding to all sides
padding:around_x-small | Adds .5rem padding to all sides
padding:around_small | Adds .75rem padding to all sides
padding:around_medium | Adds 1rem padding to all sides
padding:around_large | Adds 1.5rem padding to all sides
padding:around_x-large | Adds 2rem padding to all sides
padding:around_xx-large | Adds 3rem padding to all sides
padding:top_none | Removes padding from top
padding:top_xxx-small | Adds .125rem padding to top
padding:top_xx-small | Adds .25rem padding to top
padding:top_x-small | Adds .5rem padding to top
padding:top_small | Adds .75rem padding to top
padding:top_medium | Adds 1rem padding to top
padding:top_large | Adds 1.5rem padding to top
padding:top_x-large | Adds 2rem padding to top
padding:top_xx-large | Adds 3rem padding to top
padding:left_none | Removes padding from left
padding:left_xxx-small | Adds .125rem padding to left
padding:left_xx-small | Adds .25rem padding to left
padding:left_x-small | Adds .5rem padding to left
padding:left_small | Adds .75rem padding to left
padding:left_medium | Adds 1rem padding to left
padding:left_large | Adds 1.5rem padding to left
padding:left_x-large | Adds 2rem padding to left
padding:left_xx-large | Adds 3rem padding to left
padding:right_none | Removes padding from right
padding:right_xxx-small | Adds .125rem padding to right
padding:right_xx-small | Adds .25rem padding to right
padding:right_x-small | Adds .5rem padding to right
padding:right_small | Adds .75rem padding to right
padding:right_medium | Adds 1rem padding to right
padding:right_large | Adds 1.5rem padding to right
padding:right_x-large | Adds 2rem padding to right
padding:right_xx-large | Adds 3rem padding to right
padding:bottom_none | Removes padding from bottom
padding:bottom_xxx-small | Adds .125rem padding to bottom
padding:bottom_xx-small | Adds .25rem padding to bottom
padding:bottom_x-small | Adds .5rem padding to bottom
padding:bottom_small | Adds .75rem padding to bottom
padding:bottom_medium | Adds 1rem padding to bottom
padding:bottom_large | Adds 1.5rem padding to bottom
padding:bottom_x-large | Adds 2rem padding to bottom
padding:bottom_xx-large | Adds 3rem padding to bottom
padding:vertical_none | Removes padding from top and bottom
padding:vertical_xxx-small | Adds .125rem padding to top and bottom
padding:vertical_xx-small | Adds .25rem padding to top and bottom
padding:vertical_x-small | Adds .5rem padding to top and bottom
padding:vertical_small | Adds .75rem padding to top and bottom
padding:vertical_medium | Adds 1rem padding to top and bottom
padding:vertical_large | Adds 1.5rem padding to top and bottom
padding:vertical_x-large | Adds 2rem padding to top and bottom
padding:vertical_xx-large | Adds 3rem padding to top and bottom
padding:horizontal_none | Removes padding from left and right
padding:horizontal_xxx-small | Adds .125rem padding to left and right
padding:horizontal_xx-small | Adds .25rem padding to left and right
padding:horizontal_x-small | Adds .5rem padding to left and right
padding:horizontal_small | Adds .75rem padding to left and right
padding:horizontal_medium | Adds 1rem padding to left and right
padding:horizontal_large | Adds 1.5rem padding to left and right
padding:horizontal_x-large | Adds 2rem padding to left and right
padding:horizontal_xx-large | Adds 3rem padding to left and right
slds:truncate | Truncates text

### Advanced Mode

#### HTML Snippets
Trigger | Description
--- | ---
grid:gutters | Grid Gutters
grid:wrap | Grid Wrap
grid:vertical | Grid Vertical
grid:centered | Grid centered
grid:spaced | Grid evenly spaced
grid:spread | Grid evenly spread
grid:right | Grid Right
grid:vertical_top | Vertical Top
grid:vertical_center | Vertical Center
grid:vertical_bottom | Vertical Bottom
heading:large | Large Heading
heading:medium | Medium Heading
heading:small | Small Heading
textColor:default | Default Text Color
textColor:green | Green Text Color
textColor:weak | Weak Text Color
textColor:red | Red Text Color
textColor:inverse | Inverse Text Color
textColor:inverse-weak | Inverse Weak Text Color

#### SLDS Classes
Trigger | Description
--- | ---
assistive-text | Hides an element yet enables a screen reader to read the element that is hidden
text:left | Text Left
text:center | Text Center
text:right | Text Right
show_inline-block | Shows the element by setting display to inline-block
show_inline | Shows the element by setting display to inline
transition-hide | Hides an element from the page by setting the opacity property set to 0
transition-show | Shows the element using the opacity property set to 1
hide_x-small | Hides content above 320px screen
hide_small | Hides content above 480px screen
hide_medium | Hides content above 768px screen
hide_large | Hides content above 1024px screen
hide_x-large | Hides content above 1280px screen
show_x-small | Shows content above 320px screen
show_small | Shows content above 480px screen, hides for below
show_medium | Shows content above 768px screen, hides for below
show_large | Shows content above 1024px screen, hides for below
show_x-large | Shows content above 1280px screen, hides for below
bottom-magnet | Assumes element below is connected
top-magnet | Assumes element above is connected
margin-vd:around_xxx-small | Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view
margin-vd:around_xx-small | Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view
margin-vd:around_x-small | Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view
margin-vd:around_small | Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view
margin-vd:around_medium | Adds margin of 1rem in Comfy view and 0.5rem in Compact view
margin-vd:around_large | Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view
margin-vd:around_x-large | Adds margin of 2rem in Comfy view and 1rem in Compact view
margin-vd:around_xx-large | Adds margin of 3rem in Comfy view and 1.5rem in Compact view
margin-vd:top_xxx-small | Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view
margin-vd:top_xx-small | Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view
margin-vd:top_x-small | Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view
margin-vd:top_small | Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view
margin-vd:top_medium | Adds margin of 1rem in Comfy view and 0.5rem in Compact view
margin-vd:top_large | Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view
margin-vd:top_x-large | Adds margin of 2rem in Comfy view and 1rem in Compact view
margin-vd:top_xx-large | Adds margin of 3rem in Comfy view and 1.5rem in Compact view
margin-vd:left_xxx-small | Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view
margin-vd:left_xx-small | Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view
margin-vd:left_x-small | Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view
margin-vd:left_small | Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view
margin-vd:left_medium | Adds margin of 1rem in Comfy view and 0.5rem in Compact view
margin-vd:left_large | Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view
margin-vd:left_x-large | Adds margin of 2rem in Comfy view and 1rem in Compact view
margin-vd:left_xx-large | Adds margin of 3rem in Comfy view and 1.5rem in Compact view
margin-vd:right_xxx-small | Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view
margin-vd:right_xx-small | Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view
margin-vd:right_x-small | Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view
margin-vd:right_small | Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view
margin-vd:right_medium | Adds margin of 1rem in Comfy view and 0.5rem in Compact view
margin-vd:right_large | Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view
margin-vd:right_x-large | Adds margin of 2rem in Comfy view and 1rem in Compact view
margin-vd:right_xx-large | Adds margin of 3rem in Comfy view and 1.5rem in Compact view
margin-vd:bottom_xxx-small | Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view
margin-vd:bottom_xx-small | Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view
margin-vd:bottom_x-small | Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view
margin-vd:bottom_small | Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view
margin-vd:bottom_medium | Adds margin of 1rem in Comfy view and 0.5rem in Compact view
margin-vd:bottom_large | Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view
margin-vd:bottom_x-large | Adds margin of 2rem in Comfy view and 1rem in Compact view
margin-vd:bottom_xx-large | Adds margin of 3rem in Comfy view and 1.5rem in Compact view
padding-vd:around_xxx-small | Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view
padding-vd:around_xx-small | Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view
padding-vd:around_x-small | Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view
padding-vd:around_small | Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view
padding-vd:around_medium | Adds padding of 1rem in Comfy view and 0.5rem in Compact view
padding-vd:around_large | Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view
padding-vd:around_x-large | Adds padding of 2rem in Comfy view and 1rem in Compact view
padding-vd:around_xx-large | Adds padding of 3rem in Comfy view and 1.5rem in Compact view
padding-vd:top_xxx-small | Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view
padding-vd:top_xx-small | Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view
padding-vd:top_x-small | Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view
padding-vd:top_small | Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view
padding-vd:top_medium | Adds padding of 1rem in Comfy view and 0.5rem in Compact view
padding-vd:top_large | Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view
padding-vd:top_x-large | Adds padding of 2rem in Comfy view and 1rem in Compact view
padding-vd:top_xx-large | Adds padding of 3rem in Comfy view and 1.5rem in Compact view
padding-vd:left_xxx-small | Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view
padding-vd:left_xx-small | Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view
padding-vd:left_x-small | Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view
padding-vd:left_small | Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view
padding-vd:left_medium | Adds padding of 1rem in Comfy view and 0.5rem in Compact view
padding-vd:left_large | Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view
padding-vd:left_x-large | Adds padding of 2rem in Comfy view and 1rem in Compact view
padding-vd:left_xx-large | Adds padding of 3rem in Comfy view and 1.5rem in Compact view
padding-vd:right_xxx-small | Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view
padding-vd:right_xx-small | Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view
padding-vd:right_x-small | Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view
padding-vd:right_small | Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view
padding-vd:right_medium | Adds padding of 1rem in Comfy view and 0.5rem in Compact view
padding-vd:right_large | Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view
padding-vd:right_x-large | Adds padding of 2rem in Comfy view and 1rem in Compact view
padding-vd:right_xx-large | Adds padding of 3rem in Comfy view and 1.5rem in Compact view
padding-vd:bottom_xxx-small | Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view
padding-vd:bottom_xx-small | Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view
padding-vd:bottom_x-small | Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view
padding-vd:bottom_small | Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view
padding-vd:bottom_medium | Adds padding of 1rem in Comfy view and 0.5rem in Compact view
padding-vd:bottom_large | Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view
padding-vd:bottom_x-large | Adds padding of 2rem in Comfy view and 1rem in Compact view
padding-vd:bottom_xx-large | Adds padding of 3rem in Comfy view and 1.5rem in Compact view
slds-scrollable:auto | Forces element to scroll horizontally and vertically when content exceeds element's width and height
slds-scrollable:none | Forces overflow items to not scroll within element's width and height
slds-scrollable:yAxis | Forces element to scroll vertically when content exceeds element's height
slds-scrollable:xAxis | Forces element to scroll vertically when content exceeds element's width
slds-truncate:25% | Truncates text at 25% of its parent container
slds-truncate:33% | Truncates text at 33% of its parent container
slds-truncate:50% | Truncates text at 50% of its parent container
slds-truncate:66% | Truncates text at 66% of its parent container
slds-truncate:75% | Truncates text at 75% of its parent container
card:narrow-lwc | LWC Narrow Card
card:narrow-aura | Aura Narrow Card
button:group-dropdown-lwc | Button Group Dropdown LWC
button:group-dropdown-aura | Button Group Aura Dropdown 

## Release Notes

### Amber - v1.0.3 
- Bug Fixes
- Text Alignment Classes moved outside the Advanced mode

### Amber - v1.0.2 
- 10 New Snippets added for JavaScript
    - forEach
    - component:set
    - component:get
    - component:find
    - function:controller
    - function:helper
    - action:Callback
    - filter
    - splice
    - action:event

### Amber - v1.0.1 
- Snippet for Combobox is added for Aura and LWC 

### Amber - v1.0.0 
- Snippets for Apex
- Snippets for Aura Components
- Snippets for Javascript
- Snippets for LWC
- Snippets for SLDS Classes 

## Credits
The UI/UX Team at Audibene would like to acknowledge **Marcel Hirthe**, **Rohit Bhargava** and **Ashutosh Bhardwaj** for supporting us in this project and providing us valuable feedback and we would also like to thank the entire **Salesforce Team** to have given us their feedback on the survey which motivated us to build this tool.

## Contributors
- Marcel Hirthe
- Jatin Sharma
- Suraj Raval 