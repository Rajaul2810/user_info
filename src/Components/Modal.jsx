/* eslint-disable no-unused-vars */
import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add User</h3>
        <div className=" flex flex-col my-2">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className=" flex flex-col my-2">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className=" flex flex-col my-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className=" flex flex-col my-2">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>

        <div className=" flex flex-col my-2">
          <label htmlFor="">Image</label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full max-w-xs"
          />
        </div>

        <button className=" btn w-full text-center bg-green-500 text-white my-2">Submit</button>
      </div>
    </dialog>
  );
};

export default Modal;
