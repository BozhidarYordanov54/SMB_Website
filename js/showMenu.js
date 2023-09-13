function toggleNav() {
  var sideNav = document.getElementById("mySidenav");
  if (sideNav.style.width === "" || sideNav.style.width === "0px") {
      openNav();
  } else {
      closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



