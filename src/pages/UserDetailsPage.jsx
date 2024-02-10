/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn, CiMail, CiUser } from "react-icons/ci";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userData = await fetch("https://dummyjson.com/users");
      const jsonData = await userData.json();
      const data = jsonData.users;
      const singleUser = data.find((pd) => pd.id == id);
      setUser(singleUser);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="bg-slate-100 h-screen w-full py-10">
      <h1 className=" text-center text-lg font-bold">User Details</h1>
      {user ? (
        <div className=" flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 shadow-md rounded-md bg-white">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="py-2" />
            <div className=" bg-gradient-to-t from-green-400 to-lime-300 px-5 py-10">
              <h2 className="flex gap-2 items-center bg-white p-2 rounded-sm">
               <CiUser/> {user?.firstName} {user?.lastName}
              </h2>
              <p className="flex gap-2 items-center bg-white p-2 rounded-sm my-2 "> <CiMail/> {user?.email}</p>
              <p className=" flex gap-2 items-center bg-white p-2 rounded-sm">
                <CiLocationOn/> <i>{user?.address?.address}, {user?.address?.state},
                {user?.address?.city}</i>
              </p>
              <p className="flex gap-2 items-center bg-white p-2 rounded-sm mt-2">Company: {user?.company?.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className=" text-center ">Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetailsPage;
