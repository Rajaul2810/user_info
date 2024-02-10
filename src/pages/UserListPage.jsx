/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../Components/UserCard";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../Components/Modal";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/users");
      const jsonData = await data.json();
      //console.log(jsonData.users)
      setUsers(jsonData.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    //console.log(user)
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy) {
    filteredUsers.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  }
  //console.log(users);
  return (
    <div className=" bg-slate-100 py-5">
      <div>
        <div className=" flex justify-center">
          <div className=" w-11/12 sm:w-10/12 md:w-3/4 flex justify-between bg-gradient-to-r from-green-500 to-lime-300 p-3">
            <div>
              <button className="btn" onClick={() => document.getElementById("my_modal_3").showModal()}>
                <CiCirclePlus size={25} />
                <span className=" hidden sm:block">Add User</span>
              </button>
            </div>
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
              className=" py-2 px-1 rounded-xl shadow-sm border-none"
            />
            <select
              value={sortBy}
              onChange={handleSort}
              className=" rounded-md shadow-sm px-1"
            >
              <option value="">Sort by</option>
              <option value="firstName">Name</option>
              <option value="email">Email</option>
              <option value="company.name">Company</option>
            </select>
          </div>
        </div>
        <div className=" flex justify-center py-10">
          <div className=" w-11/12 sm:w-10/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredUsers.map((user) => (
              <Link to={`/user/${user.id}`} key={user.id}>
                <UserCard user={user} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Modal/>
    </div>
  );
};

export default UserListPage;
