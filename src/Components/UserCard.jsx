/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const UserCard = ({ user }) => {
  //console.log(user)
  return (
    <div className="w-full p-2 shadow-sm rounded-md hover:shadow-lg hover:scale-105 duration-150 bg-white min-h-80">
      <div className=" flex justify-center">
        <img
          className=" w-2/3 h-40 border  p-2  rounded-md"
          src={user?.image}
          alt={`${user?.firstName} ${user?.lastName}`}
        />
      </div>
      <div className="py-2">
        <h2 className=" text-center font-bold">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className=" text-center text-sm text-gray-700 pb-2">
          {user?.email}
        </p>
        <p className=" flex items-center justify-center gap-2 text-gray-600 text-sm">
          <CiLocationOn size={25} color="green" />
          {user?.address?.address}, {user?.address?.state},
          {user?.address?.city}
        </p>
        <p className="text-center py-2">Company: {user?.company?.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
