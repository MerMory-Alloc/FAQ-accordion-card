var dropdown = document.getElementsByClassName("question");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    var icondrop=this.firstElementChild;

    for(j=0; j < dropdown.length; j++){
      if(dropdown[j].innerHTML != this.innerHTML){
        dropdown[j].classList.remove("active");
        dropdown[j].nextElementSibling.style.display= "none";
        dropdown[j].firstElementChild.style.transform = 'rotate(0deg)';
    }
    }

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      icondrop.style.transform = 'rotate(0deg)';
      this.classList.remove("active");
    } else {
      dropdownContent.style.display = "block";
      icondrop.style.transform = 'rotate(180deg)';
      this.classList.add("active");
    }

  });
}
