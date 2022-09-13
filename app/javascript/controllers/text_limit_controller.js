import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "output", "disable" ]

  connect() {
    this.outputTarget.textContent = 280 + " characters left"
  }
  
  countRemainingChars() {

    this.outputTarget.textContent = 280 - this.inputTarget.value.length + " characters left"
    if (280 - this.inputTarget.value.length < 0) {
      this.disableTarget.disabled = true
    } else {
      this.disableTarget.disabled = false
    }
  }
}