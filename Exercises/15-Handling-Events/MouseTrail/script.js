function createTrail() {
  const trail_divs = [];

  for (let index = 0; index < 100; index++) {
    // Creates several "div" Nodes
    trail_divs[index] = document.createElement("div");
    // Places those nodes in the page body
    document.body.insertBefore(
      trail_divs[index],
      document.getElementById("main-div")
    );
    // Applies styles to the nodes (one style at a time due to HTML limitations)
    trail_divs[index].style.position = "absolute";
    trail_divs[index].style.backgroundColor = "black";
    trail_divs[index].style.height = "15px";
    trail_divs[index].style.width = "15px";
    trail_divs[index].className = `trailing-div-num ${index}`;
  }

  window.addEventListener("mousemove", function mouseListener(event) {
    // Finds the list of divs we are interested on
    let trail_divs = document.getElementsByClassName("trailing-div-num");
    // Moves the last div to the current position of the mouse
    trail_divs[trail_divs.length - 1].style.left = `${event.clientX}px`;
    trail_divs[trail_divs.length - 1].style.top = `${event.clientY}px`;
    // Makes the last div the first one, pushing all the other divs a position down
    document.body.insertBefore(
      trail_divs[trail_divs.length - 1],
      trail_divs[0]
    );
  });
}

document.body.onload = createTrail;
