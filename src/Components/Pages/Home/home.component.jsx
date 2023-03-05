import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../../actions/meals";

const Home = () => {

    const mealsState = useSelector((state) => state.meals); //state from redux shall be accessible here
    //useSelector --> The selector may return any value as a result, not just an object.
        //The return value of the selector will be used as the return value of the useSelector() hook.
    //--> When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value.
        //If they are different, the component will be forced to re-render. If they are the same, the component will not re-render.
    //--> The selector function does not receive an ownProps argument.
        //However, props can be used through closure (see the examples below) or by using a curried selector.

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMeals());
    }, [dispatch]);
    
    
    return(
        <div>
            {console.log(mealsState)}
        </div>
    )
}

export default Home;