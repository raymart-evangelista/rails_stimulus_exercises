import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["showMessage", "message", "hideable" ]

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

  hideMe() {
    this.hideableTarget.hidden = true
  }

  showMe() {
    this.hideableTarget.hidden = false
  }
}