import { HeaderOnly } from "~/components/Layout";

import Home from "~/Pages/Home/Home";
import Following from "~/Pages/Following/Following";
import Profile from "~/Pages/Profile/Profile";
import Upload from "~/Pages/Upload/Upload";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
