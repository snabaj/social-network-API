import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../controllers/userController.js";

const router = Router();
router.route("/api/users").get(getUsers).post(createUser);
router.route("/api/users/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/api/users/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

export default router;
