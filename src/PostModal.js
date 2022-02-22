import React, { Fragment } from 'react'
import { Avatar, Icon, IconButton, SvgIcon, TextField } from '@mui/material';
import "./PostModal.css";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

function PostModal() {

    function autoGrow(el) {
        let element = document.getElementById(el);

        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
        console.log("ok")
    }


    return (
        <div className="modal">
            <div className="modal__upPart">
                <p>
                    Create a post
                </p>
                <IconButton >
                    <CloseIcon className="modalIcon" />
                </IconButton>
            </div>

            <div className="modal__middlePart">
                <div className="modal__middlePart__profileInfo">
                    <Avatar src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"></Avatar>
                    <div className="modal__middlePart__profileInfo__nameVisibility">
                        <h6>Alex Tanase</h6>
                        <form >
                            <select >
                                <option value="anyone">
                                    {"🌎 Anyone"}
                                </option>
                                <option value="just connections">
                                    {"🧑🏻‍🤝‍🧑🏻Just connections"}
                                </option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="modal__middlePart__inputText">
                    <textarea maxLength={500} id='ta' onInput={() => autoGrow('ta')} placeholder='What do you want to talk about ?' />
                </div>
                <div className="modal__middlePart__hashtag">
                    <textarea maxLength={20} placeholder='Add hashtag' />
                </div>
            </div>

            <div className="modal__downPart">
                down
            </div>

        </div >
    )
}

export default PostModal