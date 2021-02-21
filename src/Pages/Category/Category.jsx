import React, { useEffect } from "react";
import CategoryList from "../../Components/CategoryList/CategoryList";
// import { useEffect } from 'react';
import { connect } from "react-redux";
import { clearProducts } from "../../Redux/product/productActions";
import "./Category.css";

const Category = ({ clearProducts }) => {
  useEffect(() => {
    return () => {
      /*
                glitch arha tha us waja se pehly redux store se state remove kari then 
                categoryProducts page pe jaa kar new satet set krai.
            */
      clearProducts();
    };
  }, []);

  return (
    <div className="category-page">
      <h1>Category Page</h1>
      <CategoryList />
    </div>
  );
};

var actions = {
  clearProducts,
};

export default connect(null, actions)(Category);
