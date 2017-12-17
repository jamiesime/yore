
var SubMenuRender = function(){
  this.render();
}

SubMenuRender.prototype = {

  render: function(){
    container = document.getElementById("sidebar-menu");
    container.innerHTML = "";
    eventBtn = document.createElement("button");
    eventBtn.classList += "menu-btn";
    eventBtn.id = "event-btn";
    eventBtn.innerText = "Event";
    familyBtn = document.createElement("button");
    familyBtn.classList += "menu-btn";
    familyBtn.id = "family-btn";
    familyBtn.innerText = "Family";
    moneyDisplay = document.createElement("p");
    moneyDisplay.innerText = "Money: " + money;
    moneyDisplay.id = "money-display";
    container.appendChild(eventBtn);
    container.appendChild(familyBtn);
    container.appendChild(moneyDisplay);
  }

}

module.exports = SubMenuRender;