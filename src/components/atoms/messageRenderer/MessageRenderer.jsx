import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';

const MessageRenderer = ({value}) => {
    console.log('value',value);

    const rendererRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(()=>{
        //if(!rendererRef.current) return;
        const quill = new Quill(document.createElement('div'),{
            theme: 'snow',
        });
        quill.disable();
        const content = JSON.parse(value);
        quill.setContents(content);

        const isContentEmpty = quill.getText().trim().length === 0;
        setIsEmpty(isContentEmpty);

        rendererRef.current.innerHTML = quill.root.innerHTML;


    },[value]);

    if(isEmpty) return null;



  return (
    <div   ref={rendererRef} 
        className="ql-editor ql-renderer">

    </div>
  );
};

export default MessageRenderer;