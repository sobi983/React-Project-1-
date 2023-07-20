

export default function BoxChallenge2(props) {  
    let styles = {
        backgroundColor: props.mode === true ? "#222222" : "#cccccc"
    }

    return (
        <div style={styles} className='mt-10 border-2 border-black w-14 h-14 inline-block m-2 rounded-md' key={props.key} onClick={props.toggle}></div>

        //the key warning will not be removed as it is supposed to be inserted in the top level component and currently App.js is the top one. This is done for a sake of practice
    )
}

//Derived State