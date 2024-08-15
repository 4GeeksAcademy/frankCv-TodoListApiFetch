import React from "react";
const ButtonClear = ({ deleteAllTask, user }) => {
    return (
        <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Delete all Tasks
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete all Tasks</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {`Are you sure to delete all tasks from ${user}?`} <i className="bi bi-emoji-astonished-fill"></i>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={deleteAllTask}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ButtonClear;