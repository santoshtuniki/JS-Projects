#### What are Pseudo-classes?

#### A pseudo-class is used to define a *special state* of an element.

##### For example, it can be used to:
    
1.  ##### Style an element when a user mouses over it

2.  ##### Style visited and unvisited links differently

3.  ##### Style an element when it gets focus

        /* unvisited link */
        a:link {
        color: #FF0000;
        }

        /* visited link */
        a:visited {
        color: #00FF00;
        }

        /* mouse over link */
        a:hover {
        color: #FF00FF;
        }

        /* selected link */
        a:active {
        color: #0000FF;
        }


> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! 

> a:active MUST come after a:hover in the CSS definition in order to be effective! 

##### Pseudo-class names are not case-sensitive.

- - - -

#### What are Pseudo-Elements?

#### A CSS pseudo-element is used to style *specified parts* of an element.

##### For example, it can be used to:

1.  ##### Style the first letter, or line, of an element

2.  ##### Insert content before, or after, the content of an element

        p::first-letter {
            color: #ff0000;
            font-size: xx-large;
        }

        p::first-line {
            color: #0000ff;
            font-variant: small-caps;
        }

        h1::before {
            content: url(smiley.gif);
        }

        h1::after {
            content: url(smiley.gif);
        }

##### The ::marker pseudo-element selects the markers of list items.

        ::marker {
            color: red;
            font-size: 23px;
        }

##### The ::selection pseudo-element matches the portion of an element that is selected by a user.

        ::selection {
            color: red;
            background: yellow;
        }

- - - -

#### Reference Links:

##### [W3Schools](https://www.w3schools.com/css)

##### [Unsplash](https://unsplash.com/developers)