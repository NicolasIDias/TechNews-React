import { Router } from "express";
import PostController from "./Controllers/PostController.js";

const router = Router();

router.get("/api/posts", PostController.getPosts);

router.post("/api/posts", PostController.createPost);

router.get("/api/posts/:slug", PostController.getPostBySlug);

router.get("/api/posts/id/:id", PostController.getPostById);

router.put("/api/posts/:slug", PostController.updatePost);

router.delete("/api/posts/:slug", PostController.deletePost);


router.post("/posts/:slug/comments", PostController.addComment);


export default router;