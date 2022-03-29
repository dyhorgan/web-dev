import React, {useState} from "react";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {

  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
       dispatch({type: 'create-tuit',
         tuit: whatsHappening
       });
    console.log("logging whatsHappening");
    console.log(whatsHappening);
    console.log("done logging");
  }
  return (
    <>
      <textarea value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>
      </textarea>
      <button onClick={tuitClickHandler}>
        Tuit
      </button>
    </>
  );
}
export default WhatsHappening;
