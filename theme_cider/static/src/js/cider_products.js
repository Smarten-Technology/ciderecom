/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

let Dynamic = publicWidget.Widget.extend({
  selector: ".product_categories",
  init() {
    this._super(...arguments);
    // this.rpc = this
  },
  events: {
    "click .main_categories_radio input": "categoryFilter",
  },
  async displayProduct(allCheckCat = []) {
    try {
      let gridProductDiv = document.getElementById("productGridItems");
      let listProductDiv = document.getElementById("productListItems");
      let product = await fetch("https://dummyjson.com/products");
      let allproduct = await product.json();
      let finalproduct = allproduct.products;
      gridProductDiv.innerHTML = "";
      listProductDiv.innerHTML = "";

      let allCat = [];
      // mainCategoriesRadioDiv.innerHTML ='';

      // console.log(allCheckCat)
      finalproduct.forEach((ele) => {
        if (!allCat.includes(ele.category)) {
          allCat.push(ele.category);
        }

        if (allCheckCat.length === 0) {
          allCheckCat = allCat;
        }

        if (allCheckCat.includes(ele.category)) {
          //  display product
          // console.log("product")
          gridProductDiv.innerHTML += `
              <div class="col-xl-4 col-6 product pe-0">
                <div class="product_item">
                  <div class="card mb-3">
                    <div class="card_image">
                      <img src="${ele.images[0]}" class="card-img-top" alt="...">
                      <div class="overlay_rating">
                        <div class="c_rating">
                           <span>   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                              d="M7.84367 0L9.51895 5.156H14.9403L10.5543 8.34258L12.2296 13.4986L7.84367 10.312L3.45771 13.4986L5.133 8.34258L0.747044 5.156H6.16838L7.84367 0Z"
                              fill="#FFCC00" />
                          </svg></span> <span> 4.2</span>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="product_name">
                        <h6 class="text-nowrap">${ele.title}</h6>
                      </div>
                      <div class="product_price text-nowrap">
                        <div class="price">
                          <span class="p_price">$ ${ele.price}</span><span class="d_price">${ele.discountPercentage}%</span><span class="p_off_price">( 7% off )</span>
                        </div>
                        <div class="product_color_variant">
                          <div class="color_item color_v_red">
                          </div>
                          <div class="color_item color_v_green">
                          </div>
                          <div class="color_item color_v_yellow">
                          </div>
                        </div>
                      </div>
                     
                      
                    </div>
                    <div class="overlay_popup">
                      <div><span><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span></div>
                      <div><span><i class="fa fa-heart" aria-hidden="true"></i>
                        </span></div>
                      <div><span><i class="fa fa-eye" aria-hidden="true"></i>
                        </span></div>
                      <div><span><i class="fa fa-arrows-h" aria-hidden="true"></i>
                        </span></div>

                    </div>
                  
                    <div class="overlay_cart p-0">
                        <div class="p_cart">
                         <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> <span>Add to Cart</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
               `;
          listProductDiv.innerHTML += `
               <div class="product">
          <div class="row">
            <div class="col-md-5">
              <div class="product_image">
                <img src="${ele.images[0]}" alt="">
                <div class="overlay_slide">
                  <div><span><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span></div>
                <div><span><i class="fa fa-heart" aria-hidden="true"></i>
                  </span></div>
                <div><span><i class="fa fa-eye" aria-hidden="true"></i>
                  </span></div>
                <div><span><i class="fa fa-arrows-h" aria-hidden="true"></i>
                  </span></div>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="product_info">
                <div class="product_name">
                  <h6>
                    ${ele.title}
                  </h6>
                </div>
                <div class="product_price">
                  <span>€${ele.price}</span>
                </div>
                <div class="product_color_variant">
                 
                  <div class="color_item color_v_red">
                  </div>
                  <div class="color_item color_v_green">
                  </div>
                  <div class="color_item color_v_yellow">
                  </div>
                </div>
                <div class="product_description">
                  <p>${ele.description}</p>
                </div>
                <div class="product_rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M7.84367 0L9.51895 5.156H14.9403L10.5543 8.34258L12.2296 13.4986L7.84367 10.312L3.45771 13.4986L5.133 8.34258L0.747044 5.156H6.16838L7.84367 0Z"
                      fill="#FFCC00" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M7.84367 0L9.51895 5.156H14.9403L10.5543 8.34258L12.2296 13.4986L7.84367 10.312L3.45771 13.4986L5.133 8.34258L0.747044 5.156H6.16838L7.84367 0Z"
                      fill="#FFCC00" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M7.84367 0L9.51895 5.156H14.9403L10.5543 8.34258L12.2296 13.4986L7.84367 10.312L3.45771 13.4986L5.133 8.34258L0.747044 5.156H6.16838L7.84367 0Z"
                      fill="#FFCC00" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M7.84367 0L9.51895 5.156H14.9403L10.5543 8.34258L12.2296 13.4986L7.84367 10.312L3.45771 13.4986L5.133 8.34258L0.747044 5.156H6.16838L7.84367 0Z"
                      fill="#FFCC00" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path
                      d="M7.538 0L9.21329 5.156H14.6346L10.2487 8.34258L11.924 13.4986L7.538 10.312L3.15205 13.4986L4.82733 8.34258L0.44138 5.156H5.86272L7.538 0Z"
                      fill="#E8E8E8" />
                  </svg>
                </div>
                <div class="product_addtocart">
                  <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> <span class="addtocart">Add to Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
               `;
        }
      });
      this.totalitem();
    } catch (error) {
      console.log("Error on product:", error);
    }
  },

  categoryFilter(ev) {
    const self = this;
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkdata = [];
    checkInput.forEach((e) => {
      if (e.checked) {
        checkdata.push(e.value);
      }
    });
    // console.log(checkdata)
    self.displayProduct(checkdata);
  },

  totalitem() {
    let totalProduct = document.querySelector(".tatal_product_item");
    let products = document.querySelectorAll(
      ".product_show_container .product"
    );
    // console.log(products.length / 2)
    totalProduct.innerText = products.length / 2 + " items";
  },

  // updateIndex(ev) {},
  start: function () {
    let gridProductDiv = document.getElementById("productGridItems");
    let listProductDiv = document.getElementById("productListItems");
    let mainCategoriesRadioDiv = document.querySelector(
      ".main_categories_radio"
    );
    let AllmainCategoriesRadioDiv = document.querySelector(
      ".allmain_categories_radio"
    );
    let totalProduct = document.querySelector(".tatal_product_item");

    this.displayProduct();

    let displayCategory = async (allCheckCat = []) => {
      try {
        let product = await fetch("https://dummyjson.com/products");
        let allproduct = await product.json();
        let finalproduct = allproduct.products;
        let allCat = [];
        // mainCategoriesRadioDiv.innerHTML ='';
        // console.log(finalproduct)

        finalproduct.forEach((ele) => {
          // display categories
          if (allCheckCat.length == 0) {
            allCheckCat = allCat;
          }
          if (!allCat.includes(ele.category)) {
            mainCategoriesRadioDiv.innerHTML += `
            <label class="form-check-label" >
                <input class="form-check-input"  type="checkbox" value="${ele.category}"> ${ele.category}
         </label>    
            `;
            allCat.push(ele.category);
          }
        });
        this.displayProduct(allCat);
      } catch (error) {
        console.log("Error on category:", error);
      }
    };
    displayCategory();

    let displayAllCategory = async (allCheckCat = []) => {
      try {
        let product = await fetch("https://dummyjson.com/products");
        let allproduct = await product.json();
        let finalproduct = allproduct.products;
        let allCat = [];
        // mainCategoriesRadioDiv.innerHTML ='';
        // console.log(finalproduct)

        finalproduct.forEach((ele) => {
          // display categories
          if (allCheckCat.length == 0) {
            allCheckCat = allCat;
          }

          //     if(!allCat.includes(ele.category)){
          //         AllmainCategoriesRadioDiv.innerHTML +=`
          //     <label class="form-check-label" >
          //         <input class="form-check-input" type="checkbox" value="${ele.category}"> ${ele.category}
          //  </label>
          //     `
          //     allCat.push(ele.category)
          //     }
        });
        this.displayProduct(allCat);
      } catch (error) {
        console.log("Error on category:", error);
      }
    };
    displayAllCategory();

    // list  and grid
    const productGridItem = document.getElementById("productGridItems");
    const productListItem = document.getElementById("productListItems");
    const list = document.querySelector(".grid_to_list");
    const grid = document.querySelector(".list_to_grid");
    productListItem.style.display = "none";
    grid.style.backgroundColor = "gray";
    list.addEventListener("click", () => {
      productGridItem.style.display = "none";
      productListItem.style.display = "block";
      grid.style.backgroundColor = "transparent";
      list.style.backgroundColor = "gray";
    });
    grid.addEventListener("click", () => {
      productListItem.style.display = "none";
      productGridItem.style.display = "";
      list.style.backgroundColor = "transparent";
      grid.style.backgroundColor = "gray";
    });
  },

  destroy: function () {},
});

publicWidget.registry.cider_products = Dynamic;

return Dynamic;
