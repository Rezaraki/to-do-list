import { useContext, useEffect, useState } from "react";
import FeaturesContetxt from "../contexts/FeaturesContetxt";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Button from "./Button";

const FeaturesBar = () => {
    const [searchToggle, setSearchToggle] = useState(false)
    const initialOptions = { sort: 0, filter: 0, search: 0 }
    const [optionsToggle, setOptionsToggle] = useState(initialOptions)

    const { height, width } = useWindowDimensions();
    // search filter 
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)
    const submitFunc = e => { setSearchToggle(searchToggle ^ true); featuresDispatcher({ type: FEATURE_COMMANDS.SEARCH, event: e }) }

    const showOptions = (func) => {
        switch (func) {
            case 'sort':
                setOptionsToggle({ ...initialOptions, sort: initialOptions.sort ^ true })
                console.log(optionsToggle)
                break;
            case 'filter':
                setOptionsToggle({ ...initialOptions, filter: initialOptions.filter ^ true })
                console.log(optionsToggle)
                break;
            case 'search':
                setOptionsToggle({ ...initialOptions, search: initialOptions.search ^ true })
                console.log(optionsToggle)
                break;

            default:
                break;
        }

    }
    // useEffect(() => { console.log(optionsToggle) }
    // )
    // console.log(typeof width)
    // three buttons for three features to get shown only when clicked for mobile devices



    // <button onClick={()=>{showOptions('sort')}}>sort</button>
    // 
    // 
    if (width >= 1024) {
        return (

            < div className=" shadow-inner border-y pt-1 pb-[0.32em] border-blue-50  grid gap-1  grid-cols-[minmax(max-content,1fr)_max-content_minmax(max-content,1fr)] " >



                {/* sort*/}

                < div className="flex justify-between  " >


                    <span className="text-gray-700">sort by:</span>
                    <Button text={'date created'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_CREATED }} styles={'mx-2 '} />

                    <Button text={'date modified'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_MODIFIED }} styles={''} />


                </div >
                {/* done-checkbox(filter) */}
                < div className=" border-x-2 border-blue-100 px-1 " >
                    <form onChange={e => { featuresDispatcher({ type: FEATURE_COMMANDS.JUST_ON_GOING }) }} >
                        <label htmlFor="done-checkbox">just on-going </label>
                        <input className='align-middle' type="checkbox" id="done-checkbox" />
                    </form>
                </div >


                {/* search box */}
                < div className="" >
                    {searchToggle ? <form className="flex-shrink-0  " onSubmit={e => submitFunc(e)} ><button className="text-gray-700" >⌕</button><input className="border-box border-b ml-1 " type="text" placeholder="..." /></form > : <button className="text-gray-700" onClick={e => setSearchToggle(searchToggle ^ true)} >⌕</button>}
                </div >

            </div >

        )
    }
    if (width < 1024) {
        return (<div className="  grid gap-1  grid-cols-[repeat(3,minmax(max-content,1fr))]">
            {optionsToggle.sort ?
                < div className="flex justify-between  " >


                    <span className="text-gray-700">sort by:</span>
                    <Button text={'date created'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_CREATED }} styles={'mx-2 '} />

                    <Button text={'date modified'} func={featuresDispatcher} payload={{ type: FEATURE_COMMANDS.SORT_DATE_MODIFIED }} styles={''} />

                </div > :

                <button onClick={() => { showOptions('sort') }}>sort</button>}

            {optionsToggle.filter ?
                < div className=" border-x-2 border-blue-100 px-1 " >
                    <form onChange={e => { featuresDispatcher({ type: FEATURE_COMMANDS.JUST_ON_GOING }) }} >
                        <label htmlFor="done-checkbox">just on-going </label>
                        <input className='align-middle' type="checkbox" id="done-checkbox" />
                    </form>
                </div > :

                <button className=" border-x-2 border-blue-100 px-1 " onClick={() => { showOptions('filter') }}>filter </button>}

            {optionsToggle.search ?
                <form className="flex-shrink-0  " onSubmit={e => featuresDispatcher({ type: FEATURE_COMMANDS.SEARCH, event: e })} ><button className="text-gray-700" >⌕</button><input className="border-box border-b ml-1 " type="text" placeholder="..." /></form > :
                <button className="text-gray-700" onClick={() => { showOptions('search') }} >⌕ </button>}




        </div>
        )
    }




}
export default FeaturesBar;