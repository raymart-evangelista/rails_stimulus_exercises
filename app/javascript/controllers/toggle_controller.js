import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "showMessage", "message", "hideable", "showable", "highlight" ]

  connect() {

  }

  showSomething() {
    this.showMessageTarget.textContent == "Show secret message" ? this.showMessageTarget.textContent = "Hide secret message" : this.showMessageTarget.textContent = "Show secret message"
    // this.showMessageTarget.textContent = "Hide secret message"
    if (this.showMessageTarget.textContent == "Show secret message") {
      this.messageTarget.textContent = ""
    } else {
      this.messageTarget.textContent = "A secret message has appeared!"
    }
  }

  hideCurrentElem() {
    if (this.hasHideableTarget) {
      this.hideableTarget.hidden = true
    }
    if (this.hasShowableTarget) {
      this.showableTarget.hidden = false
    }
  }

  showAnotherElem() {
    if (this.hasShowableTarget) {
      this.showableTarget.hidden = true
    }
    if (this.hasHideableTarget) {
      this.hideableTarget.hidden = false
    }
  }

  highlightElem() {
    if (this.highlightTarget.style.outline == "" ||
    this.highlightTarget.style.outline == "none") {
      this.highlightTarget.style.outline = "solid red 1px"
    } else {
      this.highlightTarget.style.outline = "none"
    }
  }
}