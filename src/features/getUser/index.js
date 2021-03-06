import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosClient from "../../services/AxiosClient";
import { getUsers, editUser } from "./getUsersSlice";
import { ModalDeleteUser } from "./Modal/ModalDeleteUser";
import { ModalEditRole } from "./Modal/ModalEditRole";
import { TableData } from "./Table";
import FormFilterUser from "../../features/getUser/FormFilter";
import userApi from "../../services/ManageUserApi";

export const UserList = () => {
  const dispatch = useDispatch();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [user, setUser] = useState();
  const [role, setRole] = useState();

  const userList = useSelector((state) => state.user);

  useEffect(() => {
    userApi
      .getAllUsers()
      .then((response) => {
        dispatch(getUsers(response));
      })
      .catch((error) => {});
  }, [dispatch]);

  const handleDelete = (e) => {
    // const id = e;

    userApi
      .deleteUser(e)
      .then((response) => {
        return axiosClient.get(`user`);
      })
      .then((response) => {
        dispatch(getUsers(response));
      })
      .catch((error) => {
        console.log("ERROR ", error);
      });

    setShowModalDelete(false);
  };
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = (item) => {
    setShowModalDelete(true);
    setUser(item);
  };
  const handleShowModalEdit = (item) => {
    setShowModalEdit(true);
    setUser(item);
  };
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleEditNewRole = (id) => {
    userApi
      .changeRoleUser(id, role)
      .then((response) => {
        dispatch(editUser(response));
      })
      .catch((error) => {
        console.log("ERROR Edit User >>>", error);
      });
    setShowModalEdit(false);
  };
  const handleChangeRoleId = (e) => {
    const value = e.target.id;
    setRole(value);
  };
  //Filter data, accept data from children FormFilterUser
  const onFilterAll = (e) => {
    userApi
      .filterUser(e)
      .then((response) => {
        dispatch(getUsers(response.data));
      })
      .catch((error) => {
        console.log("ERROR FILTER USER >>> " + error);
      });
  };
  return (
    <div>
      <FormFilterUser onFilterAll={onFilterAll} />

      <TableData
        userList={userList}
        handleShowModalEdit={handleShowModalEdit}
        handleShowModalDelete={handleShowModalDelete}
      />
      {/* Modal delete */}
      <ModalDeleteUser
        centered
        show={showModalDelete}
        onHide={handleCloseModalDelete}
        closeModal={handleCloseModalDelete}
        onDelete={() => handleDelete(user?.id)}
      />
      {/* Modal Edit Role */}
      <ModalEditRole
        centered
        show={showModalEdit}
        onHide={handleCloseModalEdit}
        handleChangeRoleId={handleChangeRoleId}
        handleEditNewRole={handleEditNewRole}
        handleCloseModalEdit={handleCloseModalEdit}
        user={user}
      />
    </div>
  );
};
