import React from "react";
import categories from "./Categories";
import shops from "./Shops";
import CategoryCard from "./CategoryCard";
import ShopCard from "./ShopCard";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function RowList(props) {
  function renderRowList(type, loc, ct) {
    const { saharanpur, dehradun, roorkee } = shops;
    if (type === "category") {
      return categories.map((catg) => (
        <CategoryCard key={catg.id} name={catg.name} img={catg.img} />
      ));
    } else if (type === "shop") {
      let list = saharanpur;
      if (loc === "Dehradun") list = dehradun;
      else if (loc === "Roorkee") list = roorkee;
      else list = saharanpur;
      return list.map((shop) => {
        return (
          <ShopCard
            key={shop.id}
            name={shop.name}
            img={shop.img}
            location={shop.location.area}
            rating={shop.rating}
            category={shop.category}
          />
        );
      });
    } else {
      return <h1>Error!!</h1>;
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 110,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1320 },
      items: 4,
      partialVisibilityGutter: 90,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1320, min: 1040 },
      items: 3,
      partialVisibilityGutter: 90,
      slidesToSlide: 3
    },
    mid1: {
      breakpoint: { max: 1040, min: 764 },
      items: 2,
      partialVisibilityGutter: 70,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      partialVisibilityGutter: 70,
      slidesToSlide: 1
    }
  };


  // can add slides to slide acc to screen size

  function renderComponent(){
    if(props.type === "shop"){
      return <Carousel responsive={responsive} partialVisible={true} infinite={true}>
        {renderRowList(props.type, props.loc)}
      </Carousel>;
    }else{
        return <div className="flex-container">{renderRowList(props.type, props.loc)}</div>
    }
    
  }

  return renderComponent();
  
}

export default RowList;
