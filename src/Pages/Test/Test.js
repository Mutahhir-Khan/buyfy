import React, {useState} from 'react'
import { connect } from 'react-redux';
import { uploadProduct } from './../../Redux/product/productActions';
import { uploadImages } from '../../Utility/Utility';

const Test = ({uploadProduct, uploadImages}) => {
    var [category, setcategory] = useState("")
    var [title, settitle] = useState("")
    var [cost, setcost] = useState("")
    var [description, setdescription] = useState("")
    var [quantity, setquantity] = useState("")
    var [CoverPhoto, setCoverPhoto] = useState(null)

    var handleSubmit = (e) => {
        e.preventDefault()
        var productObj = {
            category,
            title,
            cost,
            description,
            quantity,
            CoverPhoto,
        }
            // uploadImages(productObj)
        uploadProduct(productObj)
    }
    return (
        <div>
            <h1>Test page</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setcategory(e.target.value)} type="text" value={category} placeholder="category"/> <br/>
                <input onChange={(e) => settitle(e.target.value)} type="text" value={title} placeholder="title"/><br/>
                <textarea onChange={(e) => setdescription(e.target.value)}  value={description} cols="30" rows="10" placeholder="Description"></textarea><br/>
                <input onChange={(e) => setcost(e.target.value)} type="text" value={cost} placeholder="cost"/><br/>
                <input onChange={(e) => setquantity(e.target.value)} type="text" value={quantity} placeholder="quantity"/><br/>
                <input onChange={(e) => setCoverPhoto(e.target.files[0])}  type="file"  placeholder="cover photo"/>
                <button>ADD PRODUCT</button>
            </form>
        </div>
    )
}
var actions = {
    uploadProduct,
    uploadImages
}
export default connect(null, actions)(Test)