import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'

function AvatarUpload() {
const [state, setState] = useState({preview: null, src: './example/einshtein.jpg'})


    function onClose() {
        setState({preview: null})
    }

    function onCrop(preview) {
        setState({preview})
    }

    function onBeforeFileLoad(elem) {
        if(elem.target.files[0].size > 71680){
            alert("File is too big!");
            elem.target.value = "";
        };
    }


        return (
            <div>
                <Avatar
                    width={390}
                    height={295}
                    onCrop={onCrop}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    src={state.src}
                />
                <img src={state.preview} alt="Preview" />
            </div>
        )
    }

export default AvatarUpload
