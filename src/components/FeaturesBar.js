import { useContext } from "react";
import FeaturesContetxt from "../contexts/FeaturesContetxt";

const FeaturesBar = () => {
    // search filter 
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)
    return (<div>
        {/* done-checkbox */}
        <div>
            <form onChange={e => { console.log(FeaturesData); featuresDispatcher({ type: FEATURE_COMMANDS.JUST_ON_GOING }) }} >
                <label htmlFor="done-checkbox">only show on-going todos</label>
                <input type="checkbox" id="done-checkbox" />
            </form>
        </div>
        {/* search box */}
        <div>
            <button >⌕</button>
            { }
        </div>


    </div>);
}

export default FeaturesBar;