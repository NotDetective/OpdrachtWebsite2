function aboutMePageSwitch() {

  if (document.getElementById("show").style.display == "none") {
    document.getElementById("show").style.display = 'block';
    document.getElementById("show2").style.display = 'block';
    // document.getElementById("hidden").style.display = 'none';
    document.getElementById("hidden2").style.display = 'none';
    document.getElementById("hidden3").style.display = 'none';
    document.getElementById("hidden4").style.display = 'none';
  } else{
    document.getElementById("show").style.display = 'none';
    document.getElementById("show2").style.display = 'none';
    // document.getElementById("hidden").style.display = 'block';
    document.getElementById("hidden2").style.display = 'block';
    document.getElementById("hidden3").style.display = 'block';
    document.getElementById("hidden4").style.display = 'block';
  }
      
      
  }
