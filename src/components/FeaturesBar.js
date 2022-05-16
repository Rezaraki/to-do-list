import { useContext, useState } from "react";
import FeaturesContetxt from "../contexts/FeaturesContetxt";
import Button from "./Button";

const FeaturesBar = () => {
    const [searchToggle, setSearchToggle] = useState(false)

    // search filter 
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)
    const submitFunc = e => { setSearchToggle(searchToggle ^ true); featuresDispatcher({ type: FEATURE_COMMANDS.SEARCH, event: e }) }

    return (

        <div className=" shadow-inner border-y pt-1 pb-[0.32em] border-blue-50  grid gap-1 grid-cols-[minmax(max-content,1fr)_max-content_minmax(max-content,1fr)] ">
            {/* sort*/}
            <div className="flex justify-between  ">
                <span className="text-gray-700">sort by:</span>
                <Button text={'date created'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_CREATED }} styles={'mx-2 '} />

                <Button text={'date modified'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_MODIFIED }} styles={''} />


            </div>
            {/* done-checkbox */}
            <div className=" border-x-2 border-blue-100 px-1 " >
                <form onChange={e => { featuresDispatcher({ type: FEATURE_COMMANDS.JUST_ON_GOING }) }} >
                    <label htmlFor="done-checkbox">just on-going </label>
                    <input className='align-middle' type="checkbox" id="done-checkbox" />
                </form>
            </div>


            {/* search box */}
            <div className="">
                {searchToggle ? <form className="flex-shrink-0  " onSubmit={e => submitFunc(e)}><button className="text-gray-700" >⌕</button><input className="border-box border-b ml-1 " type="text" placeholder="..." /></form> : <button className="text-gray-700" onClick={e => setSearchToggle(searchToggle ^ true)} >⌕</button>}
            </div>

        </div>

    );
}

export default FeaturesBar;