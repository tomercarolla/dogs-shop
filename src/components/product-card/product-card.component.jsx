import './product-card.styles.scss';
import Button from "../button/button.component";

const ProductCard = ({products}) => {
    return (
        products.map(({id, name, imageUrl, price}) => {
            return (
                <div key={id} className="product-card-container">
                    <img src={imageUrl} alt=""/>
                    <div className="footer">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                    </div>
                    <Button buttonType='inverted'>Add to Card</Button>
                </div>
            )
        })
    )
}

export default ProductCard
