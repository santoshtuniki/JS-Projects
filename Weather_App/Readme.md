#### The & symbol represents the parent selector (.search in this case).

        .search {
            & input {
                /* Styles for input elements within elements with the .search class */
            }
        }

##### When used within a nested rule, it inserts the parent selector before any additional selectors you specify.

##### This allows you to define styles that are specific to child elements of the parent element.

        .search {
            input {
                /* Styles for all input elements, regardless of their parent */
            }
        }

##### Without &, the input selector targets all input elements on the page, not just those within elements with the .search class.

----

##### Assertion to tell the browser that you are importing a *json* file:

        import KEY from './config.json'  assert { type: "json" };