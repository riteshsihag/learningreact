
class DropDown extends Component {
 
  render() {
    const lngs = {
      en:{name: "English"},
      hi:{name: "Hindi"}
    }
    return (
     <>
     <select>
        {Object.keys(lngs).}
     </select>
     </>
    )
  }
}
export default DropDown;