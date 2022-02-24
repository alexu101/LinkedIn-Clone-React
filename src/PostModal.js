import React, { Fragment } from 'react'
import { Avatar, Icon, IconButton, SvgIcon, TextField } from '@mui/material';
import "./PostModal.css";
import ModalOption from "./ModalOption.js";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { CalendarViewDay } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
                <div className="modal__downPart__options">
                    <ModalOption Icon={ImageIcon} title={'Photo'} color="#7085F9" />
                    <ModalOption Icon={SubscriptionsIcon} title={'Video'} color="#E7A33E" />
                    <ModalOption Icon={EventNoteIcon} title={'Event'} color="#C0CBCD" />
                    <ModalOption Icon={CalendarViewDay} title={'Write article'} color="#7FC15E" />
                </div>
                <div className="modal__downPart__commAndPost">
                    <div className="modal_downPart__commAndPost__comments">
                        <div className="privacy">
                            <PublicIcon />
                            <p>Public</p>
                        </div>
                        <div className="privacy">
                            <ConnectWithoutContactIcon />
                            <p>Only Connection</p>
                        </div>
                    </div>
                </div>
                <button>
                    Post
                </button>
            </div>

        </div >
    )
}

export default PostModal