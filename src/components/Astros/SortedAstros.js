import React, {Component} from 'react'

class SortedAstros extends Component{
  state = {
    astros: this.sortedAndSeparate(this.props.astros)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.astros !== this.props.astros) {
      this.setState({ astros: this.sortedAndSeparate(nextProps) })
    }
  }

  render() {
    return this.props.children(this.state.astros)
  }

  sortedAndSeparate (astros) {
    return astros
      .sort((a, b) => a.position.longitude - b.position.longitude)
      .map((astro, index, astros) => {
        const next = astros[index + 1] || astros[astros.length - 1]
        const previus = astros[index - 1] || astros[astros.length - 1]
        const next2 = astros[index + 2] || astros[astros.length - 1]
        const previus2 = astros[index - 2] || astros[astros.length - 1]

        if (previus2 && Math.abs(previus2.position.longitude - astro.position.longitude) < 8) {
          previus2.position.longitude -= 3
          astro.position.longitude += 3
        }

        if (previus && Math.abs(previus.position.longitude - astro.position.longitude) < 6) {
          previus.position.longitude -= 2
          astro.position.longitude += 2
        }

        if (next && Math.abs(next.position.longitude - astro.position.longitude) < 6) {
          next.position.longitude += 2
          astro.position.longitude -= 2
        }

        if (next2 && Math.abs(next2.position.longitude - astro.position.longitude) < 8) {
          next2.position.longitude += 3
          astro.position.longitude -= 3
        }

        return astro
      })
  }

}

export default SortedAstros
