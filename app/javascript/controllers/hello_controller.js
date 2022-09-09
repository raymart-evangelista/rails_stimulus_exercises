import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets = [ "name" ]
  static targets = ["something", "output"]

  // greet() {
  //   const element = this.nameTarget
  //   const name = element.value
  //   console.log(`Hello, ${name}!`)
  //   console.log(this.application)
  //   console.log(this.element)
  //   console.log(this.identifier)

  //   const node = document.createElement("div")
  //   const textnode = document.createTextNode(`Hello, ${name}!`)
  //   node.appendChild(textnode);
  //   this.element.appendChild(node)
  // }

  nothing() {
    this.outputTarget.textContent = "Two things happened!"
    this.somethingTarget.textContent = "Something happened!"
    // this.somethingTarget.html = this.outputTarget.value 
  }
}
