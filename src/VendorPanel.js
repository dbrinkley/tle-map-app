import React, { useState, useEffect, useRef } from "react";
import "./VendorPanel.css";
import ExhibitorList from "./ExhibitorList";
import ExhibitorInfo from "./ExhibitorInfo";
import ExhibitorObj from "./ExhibitorObj";
import ExhibitorContact from "./ExhibitorContact";
import SearchResults from "./SearchResults";
import PurchaseBoothInfo from './PurchaseBoothInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, useParams, useHistory, useLocation, BrowserRouter } from "react-router-dom";
// import axios from 'axios';



// https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/
// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
// https://reacttraining.com/react-router/web/api/Hooks/usehistory
// https://www.elanandkumar.com/blog/react-hooks-class-to-hooks-migration/
// https://www.robinwieruch.de/react-function-component
// https://www.robinwieruch.de/react-hooks-migration
// https://scotch.io/tutorials/5-ways-to-convert-react-class-components-to-functional-components-w-react-hooks#toc-class-without-state-or-lifecycle-methods



const VendorPanel = React.memo((props) => {

  // const [id, setId] = useState(props.exhibitorId);
  const [backBtnToggle, setBackBtnToggle] = useState(false);
  const [homeBtnToggle, setHomeBtnToggle] = useState(false);
  // const [searchOptionSt, setSearchOptionSt] = useState(null);<
  // const [searchInputSt, setSearchInputSt] = useState(null);
  let history = useHistory();
  let location = useLocation();



  //maybe need to use useCallback()
  useEffect(()=>{
    // setId(props.exhibitorId);
    if(location.pathname !== '/'){
      setBackBtnToggle(true);
      setHomeBtnToggle(true);
    } else {
      setBackBtnToggle(false);
      setHomeBtnToggle(false);
    }
  }, [location.pathname, props.exhibitorId])



  const usePrevious = (id) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = id;
    });
    return ref.current;
  }


  const BoothClickFn = () => {    
    const prevExhibitorId = usePrevious(props.exhibitorId);

    if(prevExhibitorId !== props.exhibitorId && props.exhibitorId !== 0){
      history.push(`/exhibitors/${props.exhibitorId}/`, )
      console.log("boothClickFn");
    }
  }

  
  const ExhibitorInfoFn = () => {
    let {id} = useParams();

    return id !== "0"
        ? <ExhibitorInfo exhibitObj={ExhibitorObj[id]} />
        : <PurchaseBoothInfo />;
  }

  const ExhibitorContactFn = () => {
    let {id} = useParams();
  
    return (
      <ExhibitorContact exhibitObj={ExhibitorObj[id]} />
    )
  }


  

  const BackButton = () => {

    let id = location.pathname.match(/(\/\d{3,})/g);
    id = id !== null
      ? id[0].substring(1)
      : 0;
  
      const prevExhibitorId = usePrevious(props.exhibitorId);
      console.log(prevExhibitorId + " " + id);

    // const booth = ExhibitorObj[id].block_name;


    const goBack = () => {
      console.log(id);

      props.setIdAndBooth(id, 0);
      history.goBack();
    }
  
    if(backBtnToggle) {
      return (
        <div className="VendorPanel_Button VendorPanel_Button_Back" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )
    }
    return null;
  }

  const HomeButton = () => {

    const reset = () => {
      props.setIdAndBooth(0,0);
      history.push(`/`);
    }

    if(homeBtnToggle) {
      return (
        <div className="VendorPanel_Button VendorPanel_Button_Home" onClick={reset}>
          <FontAwesomeIcon icon={faHome} />
        </div>
      )
    }
    return null;
  }


  const SearchResultsFn = () => {
    let {option, key} = useParams();

    const searchFunctionKeyword = (obj, input, searchKeys) => {
      let mySet = new Set();
      let finalObj = {};
      for (const searchKey of searchKeys) {
        Object.keys(obj)
          .filter(key =>
            obj[key][searchKey].toUpperCase().includes(input.toUpperCase())
          )
          .map(x => mySet.add(obj[x]));
      }
  
      let index = 0;
      for (let item of mySet.keys()) {
        finalObj[index] = item;
        index++;
      }
      return finalObj;
    }


    const searchFunction = (obj, predicate, input, searchKey) => {
      return Object.keys(obj)
        .filter( key => predicate(obj[key], input, searchKey))
        .reduce( (res, key) => (res[key] = obj[key], res), {} );
    }


    const searchFilter = (option, input, ExhibitorObj, searchFunction, searchFunctionKeyword, searchFuntion_parameters) => {
      switch (option) {
        case "exhibitors":
          return searchFunction(
            ExhibitorObj,
            searchFuntion_parameters[0],
            input,
            "company_name"
          );
        case "booths":
          return searchFunction(
            ExhibitorObj,
            searchFuntion_parameters[1],
            input,
            "block_name"
          );
        case "keyword":
          return searchFunctionKeyword(
            ExhibitorObj,
            input,
            ["company_name", "xlist", "profile", "block_name", "address", "city"]
          );
        case "section":
          break;
        default:
          return "Sorry there was an error. Please try again";
      }
    }


    let searchFuntion_parameters = [
      (obj, input, key) => obj[key].toUpperCase().includes(input.toUpperCase()),
      (obj, input, key) => obj[key].includes(input)
    ]


    return (
      <SearchResults
        // exhibitorClickHandler={this.handleExhibitorListItemClick}
        searchInput={key}
        searchOption={option}
        searchResults={searchFilter(
          option,
          key,
          ExhibitorObj,
          searchFunction,
          searchFunctionKeyword,
          searchFuntion_parameters
        )}
      />
    )
  } //end SearchResults()
 

  

  return (
    <div className="vendorPanelContainer col-lg-4">
      <div className="vendorPanelContainer_overflow">
        <BackButton />
        <HomeButton />
          <Switch>
            <Route exact path='/' render={() => <ExhibitorList exhibitorClick={props.exhibitorClick} />}/>
            <Route exact path='/exhibitors/:id' component={ExhibitorInfoFn}/>
            {BoothClickFn()}
            <Route exact path='/exhibitors/contact/:id' component={ExhibitorContactFn}/>
            <Route exact path='/search/:option/:key' component={SearchResultsFn} />
          </Switch>
      </div>
    </div>
  )

})




export default VendorPanel;



// class VendorPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vendorPanelModule: "exhibitorList",
//       props.exhibitorId: null,
//       showBackButton: false,
//       previousVP: null
//     };
//     this.handleExhibitorListItemClick = this.handleExhibitorListItemClick.bind(this);
//     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//     this.handleContactBtnClick = this.handleContactBtnClick.bind(this);
//   }

  

//   componentDidUpdate(prevProps, prevState) {
//     //sets state based on prop.vendorPanelDisplay passed from <InteractiveMap/>
//     if (prevProps.vendorPanelDisplay !== this.props.vendorPanelDisplay) {
//       this.setState(st => ({
//         vendorPanelModule: this.props.vendorPanelDisplay,
//         props.exhibitorId: this.props.exhibitorId,
//         showBackButton: true,
//         previousVP: prevState.vendorPanelModule
//       }));
//     }

//   }

 
//   searchFilter = (option, input, ExhibitorObj, searchFunction, searchFunctionKeyword, searchFuntion_parameters) => {
//     switch (option) {
//       case "exhibitors":
//         return searchFunction(
//           ExhibitorObj,
//           searchFuntion_parameters[0],
//           input,
//           "company_name"
//         );
//       case "booths":
//         return searchFunction(
//           ExhibitorObj,
//           searchFuntion_parameters[1],
//           input,
//           "block_name"
//         );
//       case "keyword":
//         return searchFunctionKeyword(
//           ExhibitorObj,
//           input,
//           ["company_name", "xlist", "profile", "block_name", "address", "city"]
//         );
//       case "section":
//         break;
//       default:
//         return "Sorry there was an error. Please try again";
//     }
//   }


//   searchFunction = (obj, predicate, input, searchKey) => {
//     return Object.keys(obj)
//       .filter( key => predicate(obj[key], input, searchKey))
//       .reduce( (res, key) => (res[key] = obj[key], res), {} );
//   }
  



