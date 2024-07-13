import {Component} from 'react'
class ProductItemDetails extends Component {
  state = {produtData: []}
  componentDidMount() {
    this.getProductData()
  }

  getProductData = () => {
    console.log(this.props)
  }
  render() {
    const {produtData} = this.state
    return <div>{produtData}</div>
  }
}

export default ProductItemDetails
