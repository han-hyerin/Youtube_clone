import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangePassword,
} from "../controllers/userController";
import { onlyPriavte } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPriavte, getEditProfile);
userRouter.post(routes.editVideo, onlyPriavte, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPriavte, getChangePassword);
userRouter.post(routes.changePassword, onlyPriavte, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
