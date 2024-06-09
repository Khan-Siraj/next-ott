import {stackMiddlewares} from "./middlewares/stackMiddlewares";
import {withAdmin}  from "./middlewares/withAdmin";
import { withAuth } from "./middlewares/withAuth";
import { withRegister } from "./middlewares/withRegister";
export default stackMiddlewares([withAuth,withAdmin,withRegister]);
