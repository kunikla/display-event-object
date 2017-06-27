/********************************
 * Event Objects
 * 1.4.7
 *
 *******************************/

/********************************
 * 1.4.7.1
 * Display various types of event nodes
 *
 *******************************/

/********************************
 * Event Handler for Menus
 * Main Menu - Select menu item, submenu and HTML module for appropriate set of events
 * Submenu - select submenu item (determines which event is displayed)
 *******************************/
function selectMenuItem (menuSelector, menuItemSelector) {
    var curMenu = document.querySelector('.' + menuSelector),
        curActive = curMenu.querySelector('.active'),
        newMenuItem = curMenu.querySelector('.' + menuItemSelector),
        max, i;

    function selectMenu2 (menu2Selector) {
        var menu2List = document.querySelectorAll('.menu2'),
            curMenu2,
            i, max;

        for (i = 0, max = menu2List.length; i < max; i++) {
            curMenu2 = menu2List[i];
            if (curMenu2.classList.contains(menu2Selector)) {
                curMenu2.classList.remove('hidden');
            } else {
                curMenu2.classList.add('hidden');
            }
        }
    }

    function selectDocumentation (documentationSelector) {
        var documentationList = document.querySelectorAll('.doc-items'),
            curDocumentation,
            i, max;

        for (i = 0, max = documentationList.length; i < max; i++) {
            curDocumentation = documentationList[i];
            if (curDocumentation.classList.contains(documentationSelector)) {
                curDocumentation.classList.remove('hidden');
            } else {
                curDocumentation.classList.add('hidden');
            }
        }
    }

    curActive.classList.remove('active');
    newMenuItem.classList.add('active');

    switch (menuSelector) {
        case 'html-menu':
            var htmlDivList = document.getElementsByClassName('html-module'),
                curHtmlDiv;

            // Display appropriate HTML div
            for (i = 0, max = htmlDivList.length; i < max; i++) {
                curHtmlDiv = htmlDivList[i];
                if (menuItemSelector == curHtmlDiv.id){
                    curHtmlDiv.classList.remove('hidden');
                }
                else {
                    curHtmlDiv.classList.add('hidden');
                }
            }
            // Display appropriate 2nd menu
            selectMenu2(menuItemSelector + '-menu');
            // Display appropriate links to documentation
            selectDocumentation(menuItemSelector + '-doc');
            break;

        case 'mouse-movement-menu':
        case 'click-on-link-menu':
        case 'explore-form-menu':
        case 'drag-drop-menu':
            break;
    }

}

// Main Menu
function selectMouseMovement (e) {
  selectMenuItem('html-menu', 'mouse-movement');
  e.preventDefault();
}

function selectClickOnLink (e) {
  selectMenuItem('html-menu', 'click-on-link');
  e.preventDefault();
}

function selectExploreForms (e) {
    selectMenuItem('html-menu', 'explore-form');
    e.preventDefault();
}
function selectDragAndDropDemo (e) {
    selectMenuItem('html-menu', 'drag-drop');
    e.preventDefault();
}

// Mouse Event Submenu
function selectMouseMouseover (e) {
    selectMenuItem('mouse-movement-menu', 'mouseover');
    e.preventDefault();
}

function selectMouseMouseenter (e) {
    selectMenuItem('mouse-movement-menu', 'mouseenter');
    e.preventDefault();
}

function selectMouseMouseleave (e) {
    selectMenuItem('mouse-movement-menu', 'mouseleave');
    e.preventDefault();
}

// Click on link Submenu
function selectClickOnLinkClick (e) {
    selectMenuItem('click-on-link-menu', 'click');
    e.preventDefault();
}

function selectClickOnLinkDblclick (e) {
    selectMenuItem('click-on-link-menu', 'dblclick');
    e.preventDefault();
}

// Form Event Submenu
function selectExploreFormKeydown (e) {
    selectMenuItem ( 'explore-form-menu', 'keydown');
    e.preventDefault();
}

function selectExploreFormKeyup (e) {
    selectMenuItem ( 'explore-form-menu', 'keyup');
    e.preventDefault();
}

function selectExploreFormFocus (e) {
    selectMenuItem ( 'explore-form-menu', 'focus');
    e.preventDefault();
}

function selectExploreFormBlur (e) {
    selectMenuItem ( 'explore-form-menu', 'blur');
    e.preventDefault();
}

function selectExploreFormChange (e) {
    selectMenuItem ( 'explore-form-menu', 'change');
    e.preventDefault();
}

function selectExploreFormSubmit (e) {
    selectMenuItem ( 'explore-form-menu', 'submit');
    e.preventDefault();
}

function selectExploreFormReset (e) {
    selectMenuItem ( 'explore-form-menu', 'reset');
    e.preventDefault();
}

// Drag and Drop Submenu
function selectDDDragstart (e) {
    selectMenuItem ( 'drag-drop-menu', 'dragstart');
    e.preventDefault();
}

function selectDDDragend (e) {
    selectMenuItem ( 'drag-drop-menu', 'dragend');
    e.preventDefault();
}

function selectDDDragenter (e) {
    selectMenuItem ( 'drag-drop-menu', 'dragenter');
    e.preventDefault();
}

function selectDDDragover (e) {
    selectMenuItem ( 'drag-drop-menu', 'dragover');
    e.preventDefault();
}

function selectDDDragleave (e) {
    selectMenuItem ( 'drag-drop-menu', 'dragleave');
    e.preventDefault();
}

function selectDDDrop (e) {
    selectMenuItem ( 'drag-drop-menu', 'drop');
    e.preventDefault();
}

/********************************
 * Display Event Node
 * and disable browser actions
 * to remain on page
 *******************************/

function displayEventObject (e, prevent) {

    console.log('EVENT TYPE: *** ', e.type, ' ***');
    console.log(e);
    if (prevent) {
        e.preventDefault();
    }

}

/********************************
 * Event Handlers
 * for Mouse Movement
 *
 * Same event listener used for all events
 * Only display event in console if the user has selected that event
 *******************************/
function processMouseEvent (e) {
    var curMenuItem = document.querySelector('.mouse-movement-menu-item.active'),
        eventType = e.type;

    switch (eventType) {
        case 'mouseover':
        case 'mouseenter':
        case 'mouseleave':
            if (curMenuItem.classList.contains(eventType)) {
                displayEventObject(e, false);
            }
    }
}

/********************************
 * Event Handler
 * for Clicking on a Link
 *
 *******************************/
// function processClickonlink (e) {
//     displayEventObject(e, true);
// }

function processClickonlink (e) {
    var curMenuItem = document.querySelector('.click-on-link-menu-item.active'),
        eventType = e.type;

    // console.log ("curMenuItem: ", curMenuItem);
    // console.log ("eventType: ",   eventType);


    switch (eventType) {
        case 'click':
        case 'dblclick':
            if (curMenuItem.classList.contains(eventType)) {
                displayEventObject(e, true);
            } else {
                e.preventDefault();
            }
    }
}

/********************************
 * Event Handler
 * for Form
 *
 * Same event listener is used on form and individual fields
 * Only display event in console if the user has selected that event
 *******************************/
function processForm (e) {

    var curMenuItem = document.querySelector('.explore-form-menu-item.active'),
        eventType = e.type;

    switch (e.type) {
        case 'change':
        case 'keydown':
        case 'keyup':
        case 'focus':
        case 'blur':
        case 'reset':
            if (curMenuItem.classList.contains(eventType)) {
                displayEventObject(e, false);
            }
             break;
        case 'submit':
            if (curMenuItem.classList.contains(eventType)) {
                displayEventObject(e, true);
            } else {
                e.preventDefault();
            }
            break;
    }
}

/********************************
 * Event Handler
 * for Drag & Drop HTML module
 *
 *******************************/
// Global variables for Drag & Drop Event Handler
var moving,
    copying,
    classes,
    newCopy,
    copyable  = document.querySelector( '.copy' ),
    moveable  = document.querySelector( '.move' ),
    droppable = document.querySelector( '.droppable');

function processDragDrop (e) {
    var curMenuItem = document.querySelector('.drag-drop-menu-item.active'),
        eventType = e.type;

    switch (eventType) {
        case 'dragstart':
            if ( e.target.classList.contains( 'copy' ) ) {
                copying = event.target;
                copying.classList.add( 'active' );
            }
            if ( e.target.classList.contains( 'move' ) ) {
                moving = e.target;
                moving.classList.add( 'active' );
            }
            e.dataTransfer.setData( 'text/plain', e.target.classList );
            break;
        case 'dragend':
            e.target.classList.remove( 'active' );
            droppable.classList.remove( 'active' );
            break;
        case 'dragenter':
        case 'dragover':
            e.preventDefault();
            droppable.classList.add( 'active' );
            break;
        case 'dragleave':
            droppable.classList.remove( 'active' );
            break;
        case 'drop':
            e.preventDefault();
            classes = e.dataTransfer.getData( 'text' );


            if ( classes.indexOf( 'copy' ) > -1 ) {

                copying.classList.remove( 'active' );
                newCopy = copying.cloneNode( true );
                droppable.appendChild( newCopy );
                newCopy.setAttribute ('draggable', false);
                newCopy.innerText = "I've been copied!";
                newCopy.removeEventListener ('dragstart',  processDragDrop, false);
                copying = null;

            }

            if ( classes.indexOf( 'move' ) > -1 ) {

                moving.classList.remove( 'active' );
                droppable.appendChild( moving );
                moving.setAttribute ('draggable', false);
                moving.innerText = "I've been moved!";
                moving.removeEventListener ('dragstart',  processDragDrop, false);
                moving = null;

            }

            droppable.classList.remove( 'active' );

            break;
    }

    if (curMenuItem.classList.contains(eventType)) {
        displayEventObject(e, false);
    }
}

/********************************
 * Event Handler
 * for Clear Console button
 *
 *******************************/
function processClear (e) {
    e.preventDefault();
    console.clear();
}

/********************************
 * Initialization
 * Set up menu items for HTML menu
 *
 *******************************/
document.querySelector('.mouse-movement').addEventListener('click', selectMouseMovement,       false);
document.querySelector('.click-on-link' ).addEventListener('click', selectClickOnLink,         false);
document.querySelector('.explore-form'  ).addEventListener('click', selectExploreForms,        false);
document.querySelector('.drag-drop'     ).addEventListener('click', selectDragAndDropDemo,     false);

/********************************
 * Initialization
 * Set up menu items for secondary Mouse Movement Menu
 *
 *******************************/
document.querySelector('.mouseover'     ).addEventListener('click', selectMouseMouseover,      false);
document.querySelector('.mouseenter'    ).addEventListener('click', selectMouseMouseenter,     false);
document.querySelector('.mouseleave'    ).addEventListener('click', selectMouseMouseleave,     false);

/********************************
 * Initialization
 * Set up menu items for secondary Click on Link Menu
 *
 *******************************/
document.querySelector('.click'         ).addEventListener('click', selectClickOnLinkClick,    false);
document.querySelector('.dblclick'      ).addEventListener('click', selectClickOnLinkDblclick, false);

/********************************
 * Initialization
 * Set up menu items for secondary Forms Menu
 *
 *******************************/
document.querySelector('.keydown'       ).addEventListener('click', selectExploreFormKeydown,  false);
document.querySelector('.keyup'         ).addEventListener('click', selectExploreFormKeyup,    false);
document.querySelector('.focus'         ).addEventListener('click', selectExploreFormFocus,    false);
document.querySelector('.blur'          ).addEventListener('click', selectExploreFormBlur,     false);
document.querySelector('.change'        ).addEventListener('click', selectExploreFormChange,   false);
document.querySelector('.submit'        ).addEventListener('click', selectExploreFormSubmit,   false);
document.querySelector('.reset'         ).addEventListener('click', selectExploreFormReset,    false);

/********************************
 * Initialization
 * Set up menu items for secondary Drag & Drop Menu
 *
 *******************************/
document.querySelector('.dragstart' ).addEventListener('click', selectDDDragstart,  false);
document.querySelector('.dragend'   ).addEventListener('click', selectDDDragend,    false);
document.querySelector('.dragenter' ).addEventListener('click', selectDDDragenter,  false);
document.querySelector('.dragleave' ).addEventListener('click', selectDDDragleave,  false);
document.querySelector('.dragover'  ).addEventListener('click', selectDDDragover,   false);
document.querySelector('.drop'      ).addEventListener('click', selectDDDrop,       false);



// Add event listeners to each HTML div, even hidden divs

// Assign event listeners to Mouse Movement HTML div
var mouseHtmlElem = document.getElementById("mouse-movement");
mouseHtmlElem.addEventListener('mouseover',  processMouseEvent, false);
mouseHtmlElem.addEventListener('mouseenter', processMouseEvent, false);
mouseHtmlElem.addEventListener('mouseleave', processMouseEvent, false);

// Assign event listener to Click HTML div
document.getElementById("click-on-link"     ).addEventListener('click',     processClickonlink, false);
document.getElementById("click-on-link"     ).addEventListener('dblclick',  processClickonlink, false);

// Assign event listeners to Form HTML div
var formHtmlElem    = document.forms[0],
    formHtmlName    = document.getElementById('name'),
    formHtmlEmail   = document.getElementById('email'),
    formHtmlMessage = document.getElementById('message');

formHtmlName.addEventListener    ('keydown', processForm, false);
formHtmlName.addEventListener    ('keyup',   processForm, false);
formHtmlEmail.addEventListener   ('focus',   processForm, false);
formHtmlEmail.addEventListener   ('blur',    processForm, false);
formHtmlMessage.addEventListener ('change',  processForm, false);
formHtmlElem.addEventListener    ('submit',  processForm, false);
formHtmlElem.addEventListener    ('reset',   processForm, false);

// Assign event listeners to Drag & Drop HTML div
copyable.addEventListener  ('dragstart',  processDragDrop, false);
copyable.addEventListener  ('dragend',    processDragDrop, false);

moveable.addEventListener  ('dragstart',  processDragDrop, false);
moveable.addEventListener  ('dragend',    processDragDrop, false);

droppable.addEventListener ('dragenter',  processDragDrop, false);
droppable.addEventListener ('dragover',   processDragDrop, false);
droppable.addEventListener ('dragleave',  processDragDrop, false);
droppable.addEventListener ('drop',       processDragDrop, false);

// Assign event listener to Clear Console button
document.getElementById('clear-button').addEventListener ('click', processClear, false);

// End 1.4.7.1