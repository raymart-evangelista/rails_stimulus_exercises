import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["showMessage", "message"]

  connect() {
    this.showMessageTarget.textContent = "Show secret message"
  }

  showSomething() {
    console.log(this.showMessageTarget.textContent)
    this.showMessageTarget.textContent == "Show secret message" ? this.showMessageTarget.textContent = "Hide secret message" : this.showMessageTarget.textContent = "Show secret message"
    // this.showMessageTarget.textContent = "Hide secret message"
    if (this.showMessageTarget.textContent == "Show secret message") {
      this.messageTarget.textContent = ""
    } else {
      this.messageTarget.textContent = "A secret message has appeared!"
    }
  }

  hideSomething() {

  }

  messageTargetDisconnected(element) {
  }

  messageTargetConnected(element) {
    // this.showMessageTarget.textContent = "Hide secret message"
  }
}