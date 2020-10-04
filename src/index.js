import "./hero";
import "./text";
import "./section-areas";

// import "./paragraph"; //Extends core paragraph
import {ReactComponent as Logo} from './category-icon.svg';
import GlobalsAttributes from "./globalsAttributes";

//Add custom icon category
(function () {
    wp.blocks.updateCategory(GlobalsAttributes.slugCategory, {icon: Logo});
})();




