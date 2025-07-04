import 'quill/dist/quill.core.css';

import { ImageIcon, XIcon } from 'lucide-react';
import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';
import { MdSend } from 'react-icons/md';
import {PiTextAa} from 'react-icons/pi';

import { Button } from '@/components/ui/button';

import Hint from '../hint/Hint';


export const Editor = ({
    //variant = 'create',
    onSubmit,
    //onCancel,
    //placeholder,
    //disabled,
    //defaultValue
}) => {
    
    
    const [isToolbarVisible, setIsToolbarVisible] = useState(false);

    const containerRef = useRef(); // reqd to initialize the editor
    const defaultValueRef = useRef();
    const quillRef = useRef();
    const placeholderRef = useRef();
    const [image, setImage] = useState(null);
    const imageInputRef = useRef(null);

    function toggleToolbar() {
        setIsToolbarVisible(!isToolbarVisible);
        const toolbar = containerRef.current.querySelector('.ql-toolbar');
        if(toolbar) {
            toolbar.classList.toggle('hidden');
        }
    }


    useEffect(() => {

        if(!containerRef.current) return; // if containerRef is not initialized, return

        const container = containerRef.current; // get the container element

        const editorContainer = container.appendChild(container.ownerDocument.createElement('div')); // create a new div element and append it to the container

        const options = {
            theme: 'snow',
            placeholder: placeholderRef.current,
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'image'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean']
                ],
                keyboard: {
                    bindings: {
                        enter: {
                            key: 'Enter',
                            handler: () => {
                                return;
                            }
                        },
                        shift_enter: {
                            key: 'Enter',
                            shiftKey: true,
                            handler: () => {
                                quill.insertText(quill.getSelection()?.index || 0, '\n'); // insert a new line
                            }
                        }
                    }
                }
            }
        };

        const quill = new Quill(editorContainer, options);

        quillRef.current = quill;
        quillRef.current.focus();

        quill.setContents(defaultValueRef.current);

    }, []);


    return (
        <div className='flex flex-col'>

            <div className='flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:'>

                <div className='h-full ql-custom' ref={containerRef} />
                {
                    image && (
                        <div className="p-2">
                            <div className="relative size-14 rounded-md overflow-hidden flex items-center justify-center group/image ">
                                <button
                                    onClick={()=>{setImage(null);
                                    imageInputRef.current.value = '';
                                    }
                                    }
                                    >
                                    <XIcon className='absolute top-0 right-0 size-5 z-10 text-white bg-black/90 hover:bg-black/70 opacity-0 group-hover/image:opacity-100 transition-all duration-200 ease-in border-2 border-white rounded-full' />
                                </button>
                                <img src={URL.createObjectURL(image)} className="rounded-xl overflow-hidden object-cover" />
                            </div>
                        </div>
                    )
                }
                <div className="flex px-2 pb-2 z-[5]">
                    <Hint 
                        label={isToolbarVisible ? 'Show toolbar' : 'Hide toolbar'}
                        side='bottom'
                        align='center'
                    >
                    <Button
                        size='sm'
                        variant='ghost'
                        disabled={false}
                        onClick={toggleToolbar}    
                    >
                        <PiTextAa className='size-5' />
                    </Button>
                    </Hint>

                    <Hint 
                        label='Image'
                    >
                    <Button
                        size='Sm'
                        variant='ghost'
                        disabled={false}
                        onClick={()=>{imageInputRef.current.click();}}    
                    >
                        <ImageIcon className='size-5' />
                    </Button>
                    </Hint>

                    <input 
                        type="file" 
                        accept="image/*" 
                        className='hidden' 
                        ref={imageInputRef}
                        onClick={(e)=>setImage(e.target.files[0])}
                        />

                    <Hint 
                        label='Send Message'
                    >
                    <Button
                        size='sm'
                        className='ml-auto bg-[#007a6a] hover:bg-[#007a6a]/80 text-white transition-colors ease-in duration-200'
                        onClick={()=>{
                            const messageContent = JSON.stringify(quillRef?.current?.getContents());
                            onSubmit({body: messageContent, image});
                            quillRef.current?.setText('');
                            setImage(null);
                            imageInputRef.current.value = '';
                        }}
                        disabled={false}
                    >
                        <MdSend className='size-5' />
                    </Button>
                    </Hint>


                </div>
            </div>
            <p className="p-2 text-xs text-muted-foreground flex justify-end">
                <strong>Shift + Enter </strong> &nbsp; to add a new line
            </p>

        </div>
    );
};