interface ICatch {
  max: number
}
class Catch {
  max: number
  private store: Map<string, any>
  constructor(
    config: ICatch = {
      max: 100
    }
  ) {
    const { max } = config
    this.max = max
    this.store = new Map<string, any>()
  }
  getCatch(key: string) {
    return this.store.get(key)
  }
  setCatch(key: string, value: any) {
    const length = this.store.size
    if (length >= this.max) {
      this.store.delete(this.store.keys().next().value)
    }
    if (key === undefined || value === undefined) {
      return
    }
    this.store.set(key, value)
  }
}

let instance = new Catch()
export default instance
