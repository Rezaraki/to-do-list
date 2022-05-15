import { useContext, useState } from "react";
import FeaturesContetxt from "../contexts/FeaturesContetxt";

const FeaturesBar = () => {
    const [searchToggle, setSearchToggle] = useState(false)
    const [dateCreatedToggle, setDateCreatedToggle] = useState(['▼', '▲', false])
    const [dateModifiedToggle, setDateModifiedToggle] = useState(['▼', '▲', false])

    // search filter 
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)
    const submitFunc = e => { setSearchToggle(searchToggle ^ true); featuresDispatcher({ type: FEATURE_COMMANDS.SEARCH, event: e }) }

    return (<div>
        {/* done-checkbox */}
        <div>
            <form onChange={e => { featuresDispatcher({ type: FEATURE_COMMANDS.JUST_ON_GOING }) }} >
                <label htmlFor="done-checkbox">only show on-going todos</label>
                <input type="checkbox" id="done-checkbox" />
            </form>
        </div>
        {/* search box */}
        <div>
            {searchToggle ? <form onSubmit={e => submitFunc(e)}>
                <button >⌕</button>
                <input type="text" />
            </form> : <button onClick={e => setSearchToggle(searchToggle ^ true)} >⌕</button>}
        </div>
        {/* sort*/}
        <div>
            <button onClick={() => featuresDispatcher({ type: FEATURE_COMMANDS.SORT_DATE_CREATED })}>sort by date dateCreated ▲▼</button><br />

            {/* <button>sort by date dateModified ▲▼</button> */}
        </div>
    </div >);
}

export default FeaturesBar;