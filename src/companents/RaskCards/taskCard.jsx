import React from 'react';
// Initialization for ES Users
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Ripple });
import "./taskCard.css"
import { Link } from 'react-router-dom';
const taskCard = () => {
    return (
        <>
            <div className="taskCard">
                <div className="isImpotent">
                    <span></span>
                </div>
                <div className="task_header">
                    <h4>Task bmme</h4>
                </div>
                <div className="tast_body">
                    <h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magni voluptatibus error? Accusantium cumque sit est necessitatibus cupiditate obcaecati soluta!
                    </h5>
                    <div className="detailes">
                    <button className='downloadTask'><i className="bi bi-download"></i></button>
                        <div className="users">
                            <i className="bi bi-people-fill"></i>
                            <span>5</span>
                        </div>
                      
                        <div className="time">
                            <strong>Create AT:</strong><span>2/15/2024</span><br />
                            <strong>DeadLine:</strong>  <span>2/20/2024</span>
                        </div>
                    </div>
                </div>
                <div className="task_footer">
                        <Link to="/chat/13">
                    <button className='btn btn-info'>
                        chat
                    </button>
                        </Link>
                </div>
            </div>
            {/* <div className="card border border-success shadow-0 mb-3 " > */}
            {/* <div className="card-header bg-transparent border-success d-flex"> */}
            {/* <h5>Task name</h5> */}
            {/* <p><i className="fas fa-ellipsis"></i></p> */}
            {/* <div className="uk-inline">
                        <button className="uk-button uk-button-default taskCardThirdDot" type="button"><i className="fas fa-ellipsis"></i></button>
                        <div uk-dropdown="pos: right-top" className='taskCardDropdown w-10'>
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active"><a href="#">Tezroq</a></li>
                                <li><a href="#">Hodimlar</a> <a href="#">5</a></li>
                                <li><a href="#">Sana</a></li>
                                <li><a href="#">Deadline</a></li>
                                <li><a href="#">File qo'shish</a></li>
                            </ul>
                        </div>
                    </div> */}
            {/* </div> */}
            {/* <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}
            {/* <div className="card-footer bg-transparent border-success"><p>Chat</p> <p><i class="far fa-comment"></i></p></div> */}
            {/* </div> */}

        </>



    );
};

export default taskCard;