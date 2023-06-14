import React from 'react'
import ProductList from './ProductList'
import "./ProductCard.scss"

export default function ProductCard({image, title, color, price, id}) {
  return (
<>
        <div className="card-header"></div>
        <img className="card-img" src={image} alt="image of product" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{color}</p>
          <div className="card-footer">
            <h4 className="card-text">{price}</h4>
            <div className="card-footer-icons">
              {/* <Button text="В кошик" onClick={this.isModalOpen} />
              {modalOpen && (
                <Modal
                  text="Додати товар в кошик?"
                  closeButton={true}
                  closeModal={this.handleCloseModal}
                  actions={
                    <>
                      <a
                        href="/"
                        className="confirmBtn"
                        onClick={this.handleAddToCart}
                      >
                        Додати
                      </a>
                      <a
                        href="/"
                        className="cancelBtn"
                        onClick={this.handleCloseModal}
                      >
                        Відмінити
                      </a>
                    </>
                  }
                  clickOutside={this.handleClickOutsideModal}
                />
              )} */}
            </div>
          </div>
        </div>
        </>
  )
}
