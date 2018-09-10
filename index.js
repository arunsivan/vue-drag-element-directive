export const Drag = {

  bind(el, binding, vnode) {
    // const expression = binding.expression;
    if (el) {
      dragElement(el);
  
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
          e = e || window.event;
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;                 
          document.onmousemove = elementDrag;
        }
        function isInViewPort(elmnt){
          var bounding = elmnt.getBoundingClientRect();
          return (elmnt.offsetTop - pos2 >= 1 && elmnt.offsetLeft - pos1 >= 1 && (bounding.right -pos1<= (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom-pos2 <= (window.innerHeight || document.documentElement.clientHeight)))
        }
        function elementDrag(e) {
          e = e || window.event;
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
        
          if  (isInViewPort(elmnt)){
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
          }
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }
  }
}
