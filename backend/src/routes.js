import { Router } from "express";
import PostController from "./Controllers/PostController.js";

const router = Router();

router.get("/posts", PostController.getPosts);

router.post("/posts", PostController.createPost);

router.get("/posts/:slug", PostController.getPostBySlug);

router.get("/posts/id/:id", PostController.getPostById);

router.put("/posts/:slug", PostController.updatePost);

router.delete("/posts/:slug", PostController.deletePost);


router.post("/posts/:slug/comments", PostController.addComment);


export default router;