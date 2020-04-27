import React, { Component } from "react";
import API from "../../utils/API"


// function PresImage() {
//     const [image, setImage] = useState([])
//     // Load image
//     useEffect(() => {
//         imageHolder()
//     }, [])
    
//     function imageHolder() {
//         API.getPresData()
//           .then(res => 
//             console.log(),
//             setImage(res.data)
            
//           )
//           .catch(err => console.log(err));
//       };
    
// }
// export default PresImage
// function presData() {

// }

class PresImage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetchingData: false,
        data: null
      };
    }
    componentDidMount () {
      this.setState({ isFetchingData: true });
      API.getPresData().then((data) => {
          console.log(data)
        this.setState({
          isFetchingData: true,
          data
        });
      });
    }
    render () {
      if (!this.state.data) {
        return <img src="https://lh4.googleusercontent.com/JGHNuGPjr0Xnxwpvnv0h3tL0YgtllY88PNSeGhZ_lQI2RJhiKBoBehbv-0brtqkpBrwLhti4gkJAAL8d6vwj8nVh_UiqTFN1MIJ075c"></img>;
      }
      if (!this.state.isLoading) {
        return <p>Loading data</p>;
      }
      // Render your component with data
    }
  }

  export default PresImage