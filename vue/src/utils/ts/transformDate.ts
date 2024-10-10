export const transformDateMixin = {
  methods: {
    transformDate(date: string): string {
      const d = date.split('-').reverse()
      d[d.length - 1] = d[d.length - 1].substring(2, 4)
      return d.join('.')
    }
  }
}
