export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('NO ROOT PROVIDED FOR DOMListener')
    }
    this.$root = $root
  }
}
