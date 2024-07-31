import React from "react";
import { Button } from "@chakra-ui/button";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import { useNavigate } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const navigate = useNavigate();

  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }

      localStorage.removeItem("user-threads");

      if (data) {
        showToast("Success", "Successfully Logout", "");
        navigate("/");
      }

      setUser(null);
    } catch (error) {
      showToast("Error", error, "error");
    }
  };
  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
    >
      {/* <FiLogOut size={20} /> */}
      Logout
    </Button>
  );
};

export default LogoutButton;
