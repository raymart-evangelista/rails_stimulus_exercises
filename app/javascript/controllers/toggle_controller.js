import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["showMessage", "message"]

  connect() {
    this.showMessageTarget.textContent = "Show secret message"
  }

  show() {
    console.log(this.showMessageTarget.textContent)
    this.showMessageTarget.textContent == "Show secret message" ? this.showMessageTarget.textContent = "Hide secret message" : this.showMessageTarget.textContent = "Show secret message"
    // this.showMessageTarget.textContent = "Hide secret message"
    this.messageTarget.textContent = "A secret message has appeared!"
    if (typeof this.messageTarget.textContent !== 'undefined') {
      
    }
  }

  messageTargetDisconnected(element) {
  }

  messageTargetConnected(element) {
    // this.showMessageTarget.textContent = "Hide secret message"
  }
}